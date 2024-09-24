---
outline: deep
---
# ab-plugin-message @消息管理类

## 0. 说明 

该组件封装发送消息功能，主要为使用websocket与服务端通讯，接收服务端推送的消息。
组件中会在打开连接后先进行register，注册成功后再进行updateInfo。

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
> <font color ='red' style="font-weight:bold">支持浏览器环境</font>


## 1. 引入

```js
import { MessageManager } from '@agree/ab-plugin-message'
```

## 2. 使用

**创建消息通信**

```javascript
let onMessage = (msg) => {
    console.log(msg);
}
let onException = (e) => {
    console.log(e);
}
let options = {
    reconnectTimeOut: 5000, // 重连间隔时间, 单位毫秒
    reconnectFrequency: 5, // 重连尝试次数
    pingTimeOut: 10000, // 心跳间隔时间, 单位毫秒
    pingMsg: "heartbeat"    //心跳消息内容
}
this.webSocket = new MessageManager("ws://192.9.200.101:44004/websocket", "000038", {
    app: "TE", branch: "2039", corporation: "1011"
}, onMessage, onException, false, options);
} catch (e) {
    console.log(e)
}
```

**关闭通信**

```javascript
this.webSocket.close();
```

- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| url    | string | true   |  |连接websocket地址，使用壳子链接传空    |
| tellerId | string | true |  |登陆柜员号 |
| clientMap | map | true  |  |登陆柜员对应的信息 |
| onMessage | function | true  |  |消息回调 |
| onEception | function | true |  |异常回调 |
| forceCreateWebsocket | boolean | false |  false |强制使用js websocket，默认为false |
| options | object | false |  false |额外定义的操作属性，默认可不传 |

- options参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| reconnectTimeOut | number | 5000  |  |重连间隔时间，单位毫秒 |
| reconnectFrequency | number | 5 |  |重连尝试次数 |
| pingTimeOut | number | false |  10000 |心跳间隔时间, 单位毫秒 |
| pongTimeOut | number | false |  10000 |当reconnetWhenstopHeart为true时生效, 判断网络连接中断的心跳超时时间, 单位毫秒 |
| reconnetWhenstopHeart | boolean | false |  false | 当pongTimeOut时间内心跳未返回则认为网络中断,重新连接|
| pingMsg | string | false |  heartbeat |心跳消息内容 |

- MessageManager 方法

| 方法名    | 参数类型   | 返回值  |说明    |
| ------- | ------ | ---|------------------- |
| close    | | 无   |  关闭连接，使用壳子的模式下是退出柜员    |
| updateInfo | map | 无 |  更新柜员对应信息 |
| send | any | 无  |  发送消息 |
| register |  | 无  |  根据客户信息注册到abs |


## 3. ab-plugin-message 适配ABX5新增功能

### 3.1 引入

```js
import { MessageManager } from '@agree/ab-plugin-message'
```

### 3.2 方法说明

#### 3.2.1 初始化

```js
MessageManager.init(
  'ws://192.168.70.10:30896/websocket',
  '',
  {},
  (msg) => {},
  (msg) => {},
  false,
  {}
)
```

参数列表:

| 参数                 | 类型     | 必填参数 | 默认值 | 说明                                                   |
| -------------------- | -------- | -------- | ------ | ------------------------------------------------------ |
| url                  | string   | true     |        | 连接 websocket 地址                                    |
| tellerId             | string   | true     |        | 登陆柜员号                                             |
| clientMap            | map      | true     |        | 登陆柜员对应的信息                                     |
| onMessage            | function | true     |        | 默认时消息回调                                         |
| onEception           | function | true     |        | 默认时异常回调                                         |
| forceCreateWebsocket | boolean  | false    | false  | true 为使用 js websocket，false 为使用壳子的 websocket |
| options              | object   | false    | false  | 额外定义的操作属性，默认可不传                         |

注:使用壳子的ws时,通过`configuration/aui.properties`配置ws地址`cn.com.agree.ab.a5.client.communication/parentMsgUrl = ws://192.168.70.10:30896/websocket`


#### 3.2.2 获取 ws 实例

```js
MessageManager.getInstance()
```

#### 3.2.3 注册渠道回调

```js
MessageManager.getInstance().registerCellunit(
  'ABX',
  (msg) => {
    console.log('abxMsg', msg)
  },
  (msg) => {
    console.log('abxError', msg)
  }
)
```

参数列表:

| 参数       | 类型     | 说明         |
| ---------- | -------- | ------------ |
| cellUnit   | string   | 渠道名称     |
| onMessage  | function | 渠道消息回调 |
| onEception | function | 渠道异常回调 |


#### 3.2.4 注销渠道

```js
MessageManager.getInstance().unRegisterCellunit(
  'ABX'
)
```

参数列表:

| 参数       | 类型     | 说明         |
| ---------- | -------- | ------------ |
| cellUnit   | string   | 渠道名称     |


#### 3.2.5 获取oid

```js
await MessageManager.getInstance().getOid()
```


#### 3.2.6 获取websocketState

```js
await MessageManager.getInstance().getWebsocketState()
```

注: 返回类型为`FAILED`,`STARTING`,`STARTED`,`STOPPING`,`STOPPED`

