---
outline: deep
---
# ab-logger-upload @前端LogUpload

## 1. 引入

```js
import { LogUpload } from '@agree/ab-logger-upload';
```

## 2. 使用
###  2.1 zipUploadLog --日志打包上传

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
1.abc日志上传，上传log/目录下的所有日志
```js
let res = await LogUpload.zipUploadLog("./uploadClientLog","abc");
```
2.ads日志上传，上传ads/logs目录下所有日志
```js
let res = await LogUpload.zipUploadLog("./uploadClientLog","ads");
```
3.evs日志上传，上传evs/log目录下所有日志
```js
let res = await LogUpload.zipUploadLog("./uploadClientLog","evs");
```
4.fileList，上传由localPathList指定的所有日志，路径为相对于客户端根路径
```js
let res = await LogUpload.zipUploadLog("./uploadClientLog","fileList",["log/client.log","log/aui.log"]);
```

日志上传文件名 命名为${logType}-20211125160223.zip

- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| remotePath | string | true| |远程文件路径存放目录，可以为相对路径或绝对路径，相对路径相对于服务端根路径 |
| logType | string | true| |日志类型，支持abc、ads、evs、fileList日志 |
| localPathList | string[] | false| |当logType为fileList时，用于指定上传那些文件日志 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result  | string |  成功的标识  |
| res.zipFileName  | string |  上传文件名  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: 无</font>
