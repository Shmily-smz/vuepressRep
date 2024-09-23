[Theia](https://github.com/eclipse-theia/theia)重度使用了[InversifyJS](https://github.com/inversify/InversifyJS)，所以想更清晰的了解theia的原理或者源码阅读之前先做一些了解是有帮助的。下面有两个基础连接：
- [IoC implementation Based on Typescript](https://dev.to/jefftian/inversion-of-control-implementation-based-on-typescript-3fl6)。
- [reflect-metadata](https://rbuckton.github.io/reflect-metadata/)

本文尽量减少InversifyJS相关代码，从关键代码出发，尽量保证完整性也降低阅读成本。

有关theia的JSON-RPC的实现原理，下面先通过几个问题一步一步进行分析。

## 1.什么是JSON-RPC

JSON-RPC，是一个无状态且轻量级的远程过程调用（RPC）传送协议，其传递内容透过 JSON 为主。相较于一般的 REST 透过网址（如 GET /user）调用远程服务器，JSON-RPC 直接在内容中定义了欲调用的函数名称（如 {"method": "getUser"}），这也令开发者不会陷于该使用 PUT 或者 PATCH 的问题之中。 本规范主要定义了一些数据结构及其相关的处理规则。它允许运行在基于 Socket、HTTP 等诸多不同消息传输环境的同一进程中。其使用 JSON（RFC 4627）作为数据格式。

> JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol. Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over http, or in many various message passing environments. It uses JSON (RFC 4627) as data format. —— [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)

## 2.theia的JSON-RPC

在theia中是基于WebSocket进行消息传输的。通过上面我们JSON-RPC只是一种消息协议，说白了可以理解为是一种消息格式的规范，但WebSocket还是那个WebSocket，如果我们抛开JSON-RPC不谈，需要使用WebSocket进行消息传输就需要后端启动服务并且客户端进行连接，之后就可以互相发送消息了。

### 原理图

![jsonrpc](../../../images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇4补充篇——Theia%20JSON-RPC源码分析/1.png)

更多细节请看：[processon-theia-json-rpc](https://www.processon.com/diagraming/61a0ab5463768975f85037a8)

### 后端如何建立的WS服务并处理消息

#### 注册一个服务

```ts
bind(ConnectionHandler).toDynamicValue(({ container }) =>
    new JsonRpcConnectionHandler<ILoggerClient>(loggerPath, client => {
        const dispatching = container.get(DispatchingLoggerClient);
        dispatching.clients.add(client);
        client.onDidCloseConnection(() => dispatching.clients.delete(client));
        return container.get<ILoggerServer>(ILoggerServer);
    })
).inSingletonScope();
```

接着来看`JsonRpcConnectionHandler`的实现：

```ts
export class JsonRpcConnectionHandler<T extends object> implements ConnectionHandler {
    constructor(
        readonly path: string,
        readonly targetFactory: (proxy: JsonRpcProxy<T>) => any,
        readonly factoryConstructor: new () => JsonRpcProxyFactory<T> = JsonRpcProxyFactory
    ) { }

    onConnection(connection: MessageConnection): void {
        const factory = new this.factoryConstructor();
        const proxy = factory.createProxy();
        factory.target = this.targetFactory(proxy);
        factory.listen(connection);
    }
}
```

其中实现的`ConnectionHandler`接口为：

```ts
export interface ConnectionHandler {
    readonly path: string;
    onConnection(connection: MessageConnection): void;
}
```

到此还未真正启动WebScoket也无法被客户端链接，关键在于执行的`onConnection`方法，下面来看如何调用的。

在启动backend的时候，会先检查所有的`contribution`并调用他们的`onStart`方法：

```ts
for (const contribution of this.contributionsProvider.getContributions()) {
    if (contribution.onStart) {
        try {
            await this.measure(contribution.constructor.name + '.onStart',
                () => contribution.onStart!(server)
            );
        } catch (error) {
            console.error('Could not start contribution', error);
        }
    }
}
```

其中的一个`contribution`为`MessagingContribution`，它的`onStart`方法如下：

```ts
onStart(server: http.Server | https.Server): void {
    this.webSocketServer = new ws.Server({
        noServer: true,
        perMessageDeflate: {
            // don't compress if a message is less than 256kb
            threshold: 256 * 1024
        }
    });
	/* 在HTTP路由请求升级到到WebSocket调用 */
    server.on('upgrade', this.handleHttpUpgrade.bind(this));
    // ...
    this.webSocketServer.on('connection', (socket: CheckAliveWS, request) => {
        socket.alive = true;
        socket.on('pong', () => socket.alive = true);
        this.handleConnection(socket, request);
    });
	// ...
}
```

并且在升级到WebSocket服务后触发了上面绑定`.on('connection')`的回调函数，也就会执行里面的关键方法`this.handleConnection(socket, request)`：

```ts
/**
 * Route HTTP upgrade requests to the WebSocket server.
 */
protected handleHttpUpgrade(request: http.IncomingMessage, socket: net.Socket, head: Buffer): void {
    this.wsRequestValidator.allowWsUpgrade(request).then(allowed => {
        if (allowed) {
            this.webSocketServer!.handleUpgrade(request, socket, head, client => {
                // 这里会触发"this.webSocketServer.on('connection'"的回调
				this.webSocketServer!.emit('connection', client, request);
                this.messagingListener.onDidWebSocketUpgrade(request, client);
            });
        } else {
            // ...
        }
    }, error => {
        // ...
    });
}
```

在`handleConnection`方法中会调用在`init`方法中存入`wsHandlers`的`this.handleChannels(socket)`，`handleChannels`实现如下：

```ts
protected handleChannels(socket: ws): void {
    const channelHandlers = this.getConnectionChannelHandlers(socket);
    const channels = new Map<number, WebSocketChannel>();
    socket.on('message', data => {
        try {
            const message: WebSocketChannel.Message = JSON.parse(data.toString());
            if (message.kind === 'open') {
                const { id, path } = message;
                const channel = this.createChannel(id, socket);
                if (channelHandlers.route(path, channel)) {
                    // ...
                    channels.set(id, channel);
                    // ...
                } else {
                    // ...
                }
            } else {
                const { id } = message;
                const channel = channels.get(id);
                if (channel) {
                    channel.handleMessage(message);
                } else {
                    console.error('The ws channel does not exist', id);
                }
            }
        } catch (error) {
            console.error('Failed to handle message', { error, data });
        }
    });
	// ...
}
```

下面逐步分析`handleChannels`中的关键代码。

```ts
const channelHandlers = this.getConnectionChannelHandlers(socket);
```

这里会获取到上面`new JsonRpcConnectionHandler(xx)`的实例，并通过`path`保存起来，代码如下：

```ts
protected getConnectionChannelHandlers(socket: ws): MessagingContribution.ConnectionHandlers<WebSocketChannel> {
	// ...
    for (const connectionHandler of connectionHandlers.getContributions(true)) {
        connectionChannelHandlers.push(connectionHandler.path, (_, channel) => {
            const connection = createWebSocketConnection(channel, new ConsoleLogger());
            connectionHandler.onConnection(connection);
        });
    }
    return connectionChannelHandlers;
}
```

> `createWebSocketConnection`为`vscode-ws-jsonrpc`提供的。

接着建立了消息处理函数:

```ts
socket.on('message', data => {
	// ...
	if (message.kind === 'open') {
        const { id, path } = message;
        const channel = this.createChannel(id, socket);
		/* 在这里会通过route调用onConnection方法
		 *
		 * onConnection(connection: MessageConnection): void {
         *     const factory = new this.factoryConstructor();
         *     const proxy = factory.createProxy();
         *     factory.target = this.targetFactory(proxy);
         *     factory.listen(connection);
         * }
		 */
        if (channelHandlers.route(path, channel)) {
            // ...
            channels.set(id, channel);
            // ...
        } else {
            // ...
        }
    } else {
        const { id } = message;
        const channel = channels.get(id);
        if (channel) {
            channel.handleMessage(message);
        } else {
            console.error('The ws channel does not exist', id);
        }
    }
}
```

在收到消息时，先根据消息`kind`判断是第一次打开还是已经打开，如果是`open`，则通过`path`判断是否在`channelHandlers`中存在，也就是是否注册过，如：`new JsonRpcConnectionHandler<ILoggerClient>("/services/logger", client => {`，其中`path`为`"/services/logger"`，如果注册过则通过唯一的`id`保存到叫做`channels`的`Map`中；如果非`open`，则从`Map`中获取对应的`channel`并调用其`handleMessage`方法进行消息处理。

> 其中`id`为`vscode-ws-jsonrpc`包生成的数据格式中的一个字段，在`open`时并非JSON-RPC，而在非`open`时的`message`则为JSON-RPC格式的数据，同样由`vscode-ws-jsonrpc`生成。

> 有关`channel`的内容会在后文提到。

#### 后端如何处理消息

在看后端如何处理消息前，需要先了解`channel`是什么，下面我们通过下面的代码切入：

```ts
const channel = this.createChannel(id, socket);
```

上面代码创建了一个`channel`，实现入下：

```ts
protected createChannel(id: number, socket: ws): WebSocketChannel {
    return new WebSocketChannel(id, content => {
        if (socket.readyState < ws.CLOSING) {
            socket.send(content, err => {
                if (err) {
                    throw err;
                }
            });
        }
    });
}
```

这里我们发现这个`channel`实际上是一个`WebSocketChannel`，下面我们看`WebSocketChannel`的代码：

```ts
export class WebSocketChannel implements IWebSocket {
	static wsPath = '/services';
	// ...
	constructor(
        readonly id: number,
        protected readonly doSend: (content: string) => void
    ) { }
	// ...
	handleMessage(message: WebSocketChannel.Message): void {
        if (message.kind === 'ready') {
            this.fireOpen();
        } else if (message.kind === 'data') {
            this.fireMessage(message.content);
        } else if (message.kind === 'close') {
            this.fireClose(message.code, message.reason);
        }
    }

	open(path: string): void {
        this.checkNotDisposed();
        this.doSend(JSON.stringify(<WebSocketChannel.OpenMessage>{
            kind: 'open',
            id: this.id,
            path
        }));
    }

	ready(): void {
        this.checkNotDisposed();
        this.doSend(JSON.stringify(<WebSocketChannel.ReadyMessage>{
            kind: 'ready',
            id: this.id
        }));
    }

    send(content: string): void {
        this.checkNotDisposed();
        this.doSend(JSON.stringify(<WebSocketChannel.DataMessage>{
            kind: 'data',
            id: this.id,
            content
        }));
    }
	// ...
	protected fireOpen: () => void = () => { };
    onOpen(cb: () => void): void {
        this.checkNotDisposed();
        this.fireOpen = cb;
        this.toDispose.push(Disposable.create(() => this.fireOpen = () => { }));
    }

    protected fireMessage: (data: any) => void = () => { };
    onMessage(cb: (data: any) => void): void {
        this.checkNotDisposed();
        this.fireMessage = cb;
        this.toDispose.push(Disposable.create(() => this.fireMessage = () => { }));
    }
	// ...
}
```

接着回到上面处理消息的代码，如下：

```ts
channel.handleMessage(message);
```

表示在接到消息后传递给了`channel`的`handleMessage`方法处理，并且可以通过`WebSocketChannel`找到处理函数的实现，这里我们看处理JSON-RPC消息的部分，如下：

```ts
if (message.kind === 'data') {
    this.fireMessage(message.content);
}
```

但是却没在工程中找到`fireMessage`方法的定义，其实这个方法可以通过`channel`的`onMessage`方法进行赋值，这里在`vscode-ws-jsonrpc`会有一次赋值，如下：

**vscode-ws-jsonrpc/src/socket/reader.ts**
```ts
export class WebSocketMessageReader extends AbstractMessageReader {
	// ...
	constructor(protected readonly socket: IWebSocket) {
        super();
        this.socket.onMessage(message =>
            this.readMessage(message)
        );
		// ...
	}
	// ...
	protected readMessage(message: any): void {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { message });
        } else if (this.state === 'listening') {
            const data = JSON.parse(message);
            this.callback!(data);
        }
    }
	// ...
}
```

最终通过`vscode-jsonrpc`会触发`connection.onRequest((prop, ...args) => this.onRequest(prop, ...args));`绑定的回调函数，有关这段代码会在后文看到。

### 前端如何连接到后端的WS并处理消息

以日志模块为例，前端与后端建立连接主要代码如下：

```ts
bind(ILoggerServer).toDynamicValue(ctx => {
    const loggerWatcher = ctx.container.get(LoggerWatcher);
    const connection = ctx.container.get(WebSocketConnectionProvider);
    const target = connection.createProxy<ILoggerServer>(loggerPath, loggerWatcher.getLoggerClient());
    function get<K extends keyof ILoggerServer>(_: ILoggerServer, property: K): ILoggerServer[K] | ILoggerServer['log'] {
        // ...
        return target[property];
    }
    return new Proxy(target, { get });
}).inSingletonScope();
```

接着我们先看下面这行代码：

```ts
const connection = ctx.container.get(WebSocketConnectionProvider);
```

下面来看`WebSocketConnectionProvider`的实现，代码如下：

**ws-connection-provider.ts**
```ts
export class WebSocketConnectionProvider extends AbstractConnectionProvider<WebSocketOptions> {
    // ...
    static createProxy<T extends object>(container: interfaces.Container, path: string, arg?: object): JsonRpcProxy<T> {
        return container.get(WebSocketConnectionProvider).createProxy<T>(path, arg);
    }
    // ...
    constructor() {
        super();
        const url = this.createWebSocketUrl(WebSocketChannel.wsPath);
        const socket = this.createWebSocket(url);
        // ...
        socket.onmessage = ({ data }) => {
            this.websocketErrorCounter = 0;
			// 此处为调用父类AbstractConnectionProvider中的方法
            this.handleIncomingRawMessage(data);
        };
        this.socket = socket;
        // ...
    }

    protected createChannel(id: number): WebSocketChannel {
        const httpUrl = this.createHttpWebSocketUrl(WebSocketChannel.wsPath);
        return new WebSocketChannel(id, content => {
            if (this.useHttpFallback) {
                // ...
            } else if (this.socket.readyState < WebSocket.CLOSING) {
                this.socket.send(content); // ⬅
            }
        });
    }
}
```

**abstract-connection-provider.ts**
```ts
export abstract class AbstractConnectionProvider<AbstractOptions extends object> {
	// ...
	createProxy<T extends object>(path: string, arg?: object): JsonRpcProxy<T> {
        const factory = arg instanceof JsonRpcProxyFactory ? arg : new JsonRpcProxyFactory<T>(arg);
        this.listen({
            path,
            onConnection: c => factory.listen(c)
        });
        return factory.createProxy();
    }

	/**
     * Install a connection handler for the given path.
     */
    listen(handler: ConnectionHandler, options?: AbstractOptions): void {
        this.openChannel(handler.path, channel => {
            const connection = createWebSocketConnection(channel, this.createLogger());
            connection.onDispose(() => channel.close());
            handler.onConnection(connection);
        }, options);
    }

    openChannel(path: string, handler: (channel: WebSocketChannel) => void, options?: AbstractOptions): void {
        const id = this.channelIdSeq++;
        const channel = this.createChannel(id);
        this.channels.set(id, channel);
        channel.onClose(() => {
            if (this.channels.delete(channel.id)) {
                const { reconnecting } = { reconnecting: true, ...options };
                if (reconnecting) {
                    this.openChannel(path, handler, options);
                }
            } else {
                console.error('The ws channel does not exist', channel.id);
            }
        });
        channel.onOpen(() => handler(channel));
        channel.open(path);
    }

    protected abstract createChannel(id: number): WebSocketChannel;

    protected handleIncomingRawMessage(data: string): void {
        const message: WebSocketChannel.Message = JSON.parse(data);
        const channel = this.channels.get(message.id);
        if (channel) {
            channel.handleMessage(message);
        } else {
            console.error('The ws channel does not exist', message.id);
        }
        this.onIncomingMessageActivityEmitter.fire(undefined);
    }
	// ...
}
```

### JSON-RPC代理

通过JSON-RPC代理可以实现在客户端直接调用服务端方法及服务端直接调用客户端方法。下面通过theia中的一段代码注释即可对用法有个大概认识。

**proxy-factory.ts**
```ts
/**
 * Factory for JSON-RPC proxy objects.
 *
 * A JSON-RPC proxy exposes the programmatic interface of an object through
 * JSON-RPC.  This allows remote programs to call methods of this objects by
 * sending JSON-RPC requests.  This takes place over a bi-directional stream,
 * where both ends can expose an object and both can call methods each other's
 * exposed object.
 *
 * For example, assuming we have an object of the following type on one end:
 *
 *     class Foo {
 *         bar(baz: number): number { return baz + 1 }
 *     }
 *
 * which we want to expose through a JSON-RPC interface.  We would do:
 *
 *     let target = new Foo()
 *     let factory = new JsonRpcProxyFactory<Foo>('/foo', target)
 *     factory.onConnection(connection)
 *
 * The party at the other end of the `connection`, in order to remotely call
 * methods on this object would do:
 *
 *     let factory = new JsonRpcProxyFactory<Foo>('/foo')
 *     factory.onConnection(connection)
 *     let proxy = factory.createProxy();
 *     let result = proxy.bar(42)
 *     // result is equal to 43
 *
 * One the wire, it would look like this:
 *
 *     --> {"jsonrpc": "2.0", "id": 0, "method": "bar", "params": {"baz": 42}}
 *     <-- {"jsonrpc": "2.0", "id": 0, "result": 43}
 *
 * Note that in the code of the caller, we didn't pass a target object to
 * JsonRpcProxyFactory, because we don't want/need to expose an object.
 * If we had passed a target object, the other side could've called methods on
 * it.
 *
 * @param <T> - The type of the object to expose to JSON-RPC.
 */
export class JsonRpcProxyFactory<T extends object> implements ProxyHandler<T> {
	// ...
}
```

那么是具体是如何实现这种效果的呢？下面结合用法一点一点来看`JsonRpcProxyFactory`到底是做了什么事。回到上面使用的地方，代码如下：

**前端**
```ts
createProxy<T extends object>(path: string, arg?: object): JsonRpcProxy<T> {
    const factory = arg instanceof JsonRpcProxyFactory ? arg : new JsonRpcProxyFactory<T>(arg);
    this.listen({
        path,
        onConnection: c => factory.listen(c)
    });
    return factory.createProxy();
}
```

**后端**
```ts
// readonly factoryConstructor: new () => JsonRpcProxyFactory<T> = JsonRpcProxyFactory
onConnection(connection: MessageConnection): void {
    const factory = new this.factoryConstructor();
    const proxy = factory.createProxy();
    factory.target = this.targetFactory(proxy);
    factory.listen(connection);
}
```

通过上面的代码发现`JsonRpcProxyFactory`通过`createProxy`生成一个代理对象，可以理解为前后端对象的代理，通过操作此代理可以达到上述的效果，其中被代理的对象就是`target`。

```ts
export class JsonRpcProxyFactory<T extends object> implements ProxyHandler<T> {
	// ...
	/**
     * Build a new JsonRpcProxyFactory.
     *
     * @param target - The object to expose to JSON-RPC methods calls.  If this
     *   is omitted, the proxy won't be able to handle requests, only send them.
     */
    constructor(public target?: any) {
        this.waitForConnection();
    }
	// ...
	/**
     * Connect a MessageConnection to the factory.
     *
     * This connection will be used to send/receive JSON-RPC requests and
     * response.
     */
    listen(connection: MessageConnection): void {
        connection.onRequest((prop, ...args) => this.onRequest(prop, ...args));
        connection.onNotification((prop, ...args) => this.onNotification(prop, ...args));
        connection.onDispose(() => this.waitForConnection());
        connection.listen();
        this.connectionPromiseResolve(connection);
    }
	/**
     * Process an incoming JSON-RPC method call.
     *
     * onRequest is called when the JSON-RPC connection received a method call
     * request.  It calls the corresponding method on [[target]].
     *
     * The return value is a Promise object that is resolved with the return
     * value of the method call, if it is successful.  The promise is rejected
     * if the called method does not exist or if it throws.
     *
     * @returns A promise of the method call completion.
     */
    protected async onRequest(method: string, ...args: any[]): Promise<any> {
        // ...
		return await this.target[method](...args);
		// ...
    }
	// ...
	/**
     * Create a Proxy exposing the interface of an object of type T.  This Proxy
     * can be used to do JSON-RPC method calls on the remote target object as
     * if it was local.
     *
     * If `T` implements `JsonRpcServer` then a client is used as a target object for a remote target object.
     */
    createProxy(): JsonRpcProxy<T> {
        const result = new Proxy<T>(this as any, this);
        return result as any;
    }

	get(target: T, p: PropertyKey, receiver: any): any {
		if (p === 'setClient') {
            return (client: any) => {
                this.target = client;
            };
        }
        if (p === 'getClient') {
            return () => this.target;
        }
		// ...
		return (...args: any[]) => {
			// ...
			const resultPromise = connection.sendRequest(method, ...args) as Promise<any>;
			// ...
		}
	}
}
```

### 前后端如何互相发送消息

- 可直接通过`channel.send(message)`发送消息
- 可通过代理对象的`get`方法

通过`channel.send`在上面已经说过了，下面我们来看如何使用代理对象发送消息。

有上文创建代理对象的工厂函数可知，读取代理对象上的属性会触发内部声明的`get`方法，通过代码我们发现会执行到下面方法：

```ts
const resultPromise = connection.sendRequest(method, ...args) as Promise<any>;
```

其中`sendRequest`方法在`vscode-jsonrpc/lib/main.js`中，相关代码如下：

**vscode-jsonrpc/lib/main.js**
```js
sendRequest: (type, ...params) => {
	// ...
	messageWriter.write(requestMessage);
	// ...
}
```

**vscode-ws-jsonrpc/src/socket/writer.ts**
```ts
class WebSocketMessageWriter extends messageWriter_1.AbstractMessageWriter {
    constructor(protected readonly socket: IWebSocket) {
        super();
    }
    write(msg) {
        // ...
		this.socket.send(content);
		// ...
    }
}
```

**vscode-ws-jsonrpc/src/socket/connection.ts**
```ts
export function createWebSocketConnection(socket: IWebSocket, logger: Logger): MessageConnection {
    const messageReader = new WebSocketMessageReader(socket);
    const messageWriter = new WebSocketMessageWriter(socket);
    const connection = createMessageConnection(messageReader, messageWriter, logger);
    connection.onClose(() => connection.dispose());
    return connection;
}
```

`createWebSocketConnection`则是在上文中通过`channel`创建`connection`的关键方法。

### 小结

至此已将theia的JSON-RPC大概的实现思路进行了介绍，包括前端和后端如何建立连接，如何互相发送消息和如何处理消息等。