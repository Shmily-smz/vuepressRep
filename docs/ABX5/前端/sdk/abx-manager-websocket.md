---
outline: deep
---
# abx-manager-websocket

> abx 内 socket 通讯插件

## 1. 引入
```javascript
import { ServeManager } from 'abx-manager-websocket'
```
## 2. 使用
### 2.1 factory
socket 连接的单例,未连接则新建,已连接则返回已创建的连接.

**参数:**
  
  *options(Object)*: 初始化 socket 连接所需的参数,包括服务地址、客户端唯一 id、客户端信息、发送一次心跳请求的间隔时间、没收到后端消息便会认为连接断开的时间、ping消息内容、尝试重连的间隔时间、最大重连次数

**返回:**

  无返回值

**例子:**
```javascript
let options = {
  messageUrl: "ws://......", // socket 远程地址
  id: "", // 唯一 ID
  data: {
    app: "",
    branch: "",
    corporation: ""
  }, // 客户端信息, 包含 app、branch、corporation 信息
  pingTimeOut: 15000, // 每隔 pingTimeOut 毫秒发送一条心跳请求，默认15秒
  pongTimeOut: 8000, // 最长未接收消息的间隔，在心跳请求发送 pongTimeOut 毫秒内未收到响应关闭连接，默认8秒
  pingMsg: "heartbeat", // 心跳消息内容
  reconnectLimit: 1000, // 最大重连次数，默认 1000
  reconnectTimeOut: 5000 // 发起重连的间隔，默认5秒
}
ServeManager.factory(options)
```
> 初始化时触发
  ```javascript
  ServeManager.init = function() {
    // TODO
  }
  ```
> 连接建立时触发
  ```javascript
  ServeManager.onopen = function() {
    // TODO
  }
  ```
> 客户端接收服务端数据时触发
  ```javascript
  ServeManager.onmessage = function(e) {
    console.log(`onmessage: ${e}`);
  }
  ```
> 通信发生错误时触发
  ```javascript
  ServeManager.onerror = function (e) {
    console.log(`onerror: ${e}`);
  }
  ```
> 连接关闭时触发
  ```javascript
  ServeManager.onclose = function (e) {
    console.log('close...');
  }
  ```
> 发生重连触发
  ```javascript
  ServeManager.onreconnect = function () {
    console.log('reconnecting...');
  }
  ```
