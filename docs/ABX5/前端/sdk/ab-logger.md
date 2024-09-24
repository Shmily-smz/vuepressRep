---
outline: deep
---
# ab-logger@日志管理

## 1. 日志级别

| 参数 | 说明 |
| ------ | ------ |
| silence | 禁用所有信息，仅仅用于控制台的输出控制(v2.0.14新增),仅禁用调用loggerSDK输出的信息，原生console方法未禁用 |
| error | 错误信息 |
| warn | 警告信息 |
| info | 普通信息 |
| debug | 调试信息 | 

## 2. 使用说明

### 2.1 引入依赖

① 前端引入相应依赖

```js
import { logger } from "@agree/ab-logger"
```

② 移动基座引入相应插件

[点击查看引入文档](http://192.168.180.26:50150/third-api/alog.html) 

## 3. 接口调用

日志格式示例：
```javascript
`[20210408 10:37:40.010][C][12345678][0000][00]INFO Thread-38 ConsoleNativeLogger:write - register finish`
```
**格式**：
`[时间][C][tradeId][serviceId][stepId]日志级别 线程名 业务类型:执行动作 - 日志内容`

`[20210408 10:37:40.010]`：时间，21位，格式按照yyyyMMdd HH:mm:ss.SSS格式；

`[C]`：端标识，1位，C端使用`[C]`，S端使用`[S]`；

`[tradeId]`：16位（暂定），交易id，正常情况下由C端生成。消息推送等S端发起的场景由S端生成，不重复；

`[serviceId]`：4位，通讯id，每个交易从0开始，客户端每次发送通讯时加1，收到响应当次id按服务端返回的报文中id记录到日志；

`[stepId]`：2位，客户端每次发送通讯时从0开始，服务端每跳转一个节点加1，如abc调用abs1，abs1调用abs2，则abc发送时为00，收到时为02。

### 3.1 写入info信息或者/debug/warn信息

**logger.info(message, args1, args2);**

- message: 日志的相关描述信息，例如上面的示例：`[tradeId][serviceId][stepId]`表示这部分内容，会写入到日志文件对应的格式中;
- args1：表示日志的真正内容，会写到每一条日志的末尾;
- args2：多参数设定，通args1一样。

```javascript
async logInfo() {
      let args = [];
      args.push("测试1");
      args.push("测试2");
      let demo = { head: { user: "liming" }, info: { detail: "liming" } };
      args.push(demo);
      let message = "[12345678][0000][00]";
      logger.info(message, args, "1433223");
      logger.debug(message, args, "1433223");
      logger.warn(message, args, "1433223");
}
```

### 3.2 写入error信息

接口说明：

logger.error(message, args1, args2);

参数说明同info接口。

```javascript
let message = "[12345678][0000][00]";
logger.error(message, "this is error");
logger.error(message, new Error("this is error"), "1433223");
```

### 3.3 刷新日志（移动端调用，可正常调用，PC端为空实现）

将缓存中的日志内容刷新到日志文件中。

```javascript
logger.flush();
```

### 3.4 发送日志到服务端(目前只移动端支持,包版本>=2.0.11)

logger.send(url, unionId, date, headers);

- url: 上传的文件接口
- unionId: 用户ID
- date对应的日志文件日期，格式`yyyy-MM-dd`
- headers发送的自定义请求头，与服务端对应

[点击查看详细说明](http://192.168.180.26:50150/third-api/alog.html#版本管理) 

示例如下：

```javascript
async send() {
  let url = "http://192.168.187.136:50002/alog/native/create";
  let unionId = "tellerR100";
  let date = "2021-08-05";
  let branchId = "AgreeR100";
  let headers = {
    "branchId":"AgreeR100",
    "relativePath": `${branchId}/${unionId}/${date}` // 定义相对路径，/home/abs/relativePath/20210805152530.log, /home/abs/AgreeR100/tellerR100/20210805152530.log
  }
  try{
        let ret = await logger.send(url, unionId, date, headers);
        console.log("上传成功："+JSON.stringify(ret))
      }catch (e) {
        console.log("上传失败：" + JSON.stringify(e))
      }
  }
```

### 3.5 设置输出日志级别(仅在 >=2.0.14 版本后适用)

调用 logger 的所有信息都会发送到壳子进行记录，也会传递过去信息的级别。下列设置不影响壳子的记录。

在开发过程中，可以通过参数配置，设置是否在控制台输出信息，输出哪些信息。

**生产环境请设置输出日志级别为silence**

```js
import { logger } from "@agree/ab-logger"

// 输出 error / warn / info / debug 级别的信息
logger.config({
    level: 'debug'
})

// 输出 error / warn / info 级别的信息
logger.config({
    level: 'info' // 默认
})

// 输出 error / warn 级别的信息 
logger.config({
    level: 'warn'
})

// 仅输出 error 级别的信息 
logger.config({
    level: 'error'
})

// 不显示任何输出
logger.config({
    level: 'silence'
})
```

### 3.6 设置日志输出环境

```js
//开发环境,控制台打印日志
logger.config({
    mode: 'development'
})

//生产环境,控制台不打印日志
logger.config({
    mode: 'production'
})
```

## 4. 废弃说明

以下导出或 api 已被废弃

```js
import { FrameLogger } from "@agree/ab-logger"  // 已废弃
import { TradeLogger } from "@agree/ab-logger" // 已废弃

logger.fatal() // 已废弃
```

## 5. abx5新增
```js
import { LogMixin } from '@agree/ab-logger'

mixins: [LogMixin]

this._info(message)
this._debug(message)
this._warn(message)
this._error(message)
```
