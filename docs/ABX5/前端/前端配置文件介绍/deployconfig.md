---
outline: deep
---

# deployconfig {#deployconfig}

> 用于配置客户端运行时所需要的配置

:::tip

1. 客户端通过接口`getFrontEndConfig`访问此配置
2. 路径 `/aarm/config/deployconfig.json`

:::

## 配置说明 {#配置说明}

| name                                                                 | 类型      | 说明                                             | required | default                                       |
| -------------------------------------------------------------------- | --------- | ------------------------------------------------ | -------- | --------------------------------------------- |
| [resourceServiceEndPoint](./deployconfig.md#resourceServiceEndPoint) | string    | 服务地址                                         | false     | 无                                            |
| [messageUrl](./deployconfig.md#messageUrl)                           | string    | 建立长连接的地址                                 | true     | 无                                            |
| [commitUrl](./deployconfig.md#commitUrl)                             | string    | `bpmn`流程发送请求的`http`地址                   | true     | 无                                            |
| [deployEnv](./deployconfig.md#deployEnv)                             | DeployEnv | 部署环境                                         | false    | <Badge type="danger" text="默认容器化部署" /> |
| [publicPath](./deployconfig.md#publicPath)                           | string    | 资源加载时的`baseUrl`                            | true     | 无                                            |
| [manifestPath](./deployconfig.md#manifestPath)                       | string    | 依赖信息文件保存地址                             | true     | 无                                            |
| [mode](./deployconfig.md#mode)                                       | string    | 运行模式                                         | true     | 无                                            |
| [consolelog](./deployconfig.md#consolelog)                           | boolean   | 是否在控制台内记录日志                           | false    | 无配置情况下和 mode 相关                      |
| [localization](./deployconfig.md#localization)                       | boolean   | 是否本地加载 <Badge type="danger" text="废弃" /> | false    | false                                         |
| terminalType                                                         | string    | 渠道 <Badge type="danger" text="废弃" />         | false    | 无                                            |
| resolve                                                              | any       | 路径解析 <Badge type="danger" text="废弃" />     | false    | 无                                            |
| suffixCollectionWithFileContent                                      | any       | 资源后缀<Badge type="danger" text="废弃" />      | false    | 无                                            |

**deployconfig.json 示例**

```json
{
  "resourceServiceEndPoint": "http://192.168.70.10/abxmlh/demo-aarm/aarm",
  "messageUrl": "ws://192.168.70.10/abxmlh/demo-message/message/websocket",
  "commitUrl": "http://192.168.70.10/abxmlh/demo-",
  "publicPath": "ABX",
  "manifestPath": "abx/dependencies.manifest.json",
  "mode": "dev"
}
```

### resourceServiceEndPoint {#resourceServiceEndPoint}

> 服务地址:资源加载地址

- **类型**

```
{
  resourceServiceEndPoint: string;
}
```

- **示例**

```json
{
  "resourceServiceEndPoint": "http://192.168.70.10/abxmlh/demo-aarm/aarm"
}
```

- **详细说明**

1. 服务地址
2. 为资源加载地址

### messageUrl {#messageUrl}

> 建立长连接的地址

- **类型**

```
{
  messageUrl: string;
}
```

- **示例**

```json
{
  "messageUrl": "ws://192.168.70.10/abxmlh/demo-message/message/websocket"
}
```

- **详细说明**

1. 建立长连接的地址, `bpmn`类型交易用于接受`socket`消息时使用

### commitUrl {#commitUrl}

> `bpmn`流程发送请求的`http`地址

- **类型**

```
{
  commitUrl: string;
}
```

- **示例**

```json
{
  "commitUrl": "http://192.168.70.10/abxmlh/demo-"
}
```

- **详细说明**

1. `bpmn`流程发送请求的`http`地址

### deployEnv {#deployEnv}

> 部署环境配置，默认是容器云

- **类型**

```ts
enum DeployEnv = {
  "vm" = 'vm', // 虚机部署
  "boyun" = 'boyun', // 博云环境部署
  "docker" = "docker", // 容器化部署（默认）
}
```

- **示例**

```json
{
  "deployEnv": "vm" // 博云环境部署
}
```

:::tip
部署方式代表着不同的请求路径
:::

- **详细说明**

1. `vm`: 请求地址使用`commitUrl/url`
2. `boyun`:请求地址使用`commitUrl/url`
3. `docker`: 请求地址使用`commitUrl/moduleName-aase/aase/url`

### publicPath {#publicPath}

> 资源加载时的`baseUrl`

- **类型**

```
{
  publicPath: string;
}
```

- **示例**

```json
{
  "publicPath": "ABX"
}
```

- **详细说明**

1. 加载资源时会拼接`publicPath`: `root/publicPath/filePath`

### manifestPath {#manifestPath}

> 加载依赖信息表的路径

- **类型**

```
{
  manifestPath: string;
}
```

- **示例**

```json
{
  "manifestPath": "abx/dependencies.manifest.json"
}
```

- **详细说明**

1. 加载依赖信息表的路径

### mode {#mode}

> 客户端运行时的模式

- **类型**

```ts
enum Mode {
  DEV = "dev", // 开发模式
  PROD = "prod", // 生产模式
}
```

- **示例**

```json
{
  "mode": "dev"
}
```

- **详细说明**

1. `dev`: 开发模式，日志输出到控制台，启动开发模式的热更新热更新
2. `prod`: 生产模式，日志禁止输出到控制台，并将日志记录到日志文件，启动生产模式的热更新

:::tip
开发以及生产模式的热更新区别请查看[热更新](../深入平台/热更新)
:::

### consolelog {#consolelog}

> 是否输出日志到控制台

:::tip
由于生产模式禁止输出日志到控制台，不便于调试，此时可以用此参数在准生产环境调试
:::

- **类型**

```ts
{
  consolelog: boolean;
}
```

- **示例**

```json
{
  "consolelog": true
}
```

- **详细说明**

1. 无配置情况下和 `mode` 相关

### localization {#localization}

> 是否本地加载

- **类型**

```ts
{
  localization: boolean;
}
```

- **示例**

```json
{
  "localization": true
}
```

- **详细说明**

1.  此参数用于配置资源的加载来源：如在壳子环境下，将资源下载到本地，则视为本地加载，为`true`；如果是直接加载服务器的资源，则认为是服务端加载,为`false`
2.  此参数决定加载资源的路径
