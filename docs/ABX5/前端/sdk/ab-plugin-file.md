---
outline: deep
---
# ab-plugin-file@文件操作类

## 1. 引入

```js
import { File } from '@agree/ab-plugin-file'
```

## 2. 使用

### 2.1 获取客户端跟路径

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

```js
// 外置存储卡的根路径  file:///storage/emulated/0
let externalRootDirectory = File.externalRootDirectory

// app缓存路径 file:///storage/emulated/0/Android/data/<appId>/cache
let cacheDirectory = File.cacheDirectory

// app私有目录路径 file:///storage/emulated/0/Android/data/<appId>/files
let workspaceDirectory = File.workspaceDirectory

// app资产目录路径(只读)  file:///android_asset/
let assetsDirectory = File.assetsDirectory
```

> <font color ='green' style="font-weight:bold">对应移动(Android)原SDK:AgreeSDK.file.xxx</font>

---

### 2.2 readClientFile --读取客户端文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let encoding = 'gbk'
let offset = 0
let size = -1
let res = await File.readClientFile(filePath, encoding, offset, size)
```

- 参数列表:

| 参数     | 类型          | 必填参数 | 参数差异                                | 说明                |
| -------- | ------------- | -------- | --------------------------------------- | ------------------- |
| filePath | string        | √        | -----                                   | 文件路径            |
| encoding | boolstringean | √        | -----                                   | 例"gbk"             |
| offset   | number        | √        | <font color='green'>移动端可缺省</font> | 偏移量 0(不偏移)    |
| size     | number        | √        | <font color='green'>移动端可缺省</font> | 读取量 -1(全部读取) |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 读取结果 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原SDK:let fileReader = new AgreeSDK.file.FileReader(); fileReader.readAsText()</font>

---

### 2.3 clientDirCreate --创建深度遍历客户端文件夹

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a'
let res = await File.clientDirCreate(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明           |
| -------- | ------ | -------- | -------------- |
| filePath | string | √        | 文件夹绝对路径 |

- 返回值: `Object`

| 参数       | 类型   | 说明                             |
| ---------- | ------ | -------------------------------- |
| res.result | string | 'true':创建成功;'false':创建失败 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.mkdirSync()</font>

---

### 2.4 clientFileCreate --创建客户端文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let res = await File.clientFileCreate(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明     |
| -------- | ------ | -------- | -------- |
| filePath | string | √        | 文件路径 |

- 返回值: `Object`

| 参数             | 类型    | 说明                         |
| ---------------- | ------- | ---------------------------- |
| clientFileCreate | boolean | true:创建成功;false:创建失败 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.createFile() </font>

---

### 2.5 clientFileDelete --删除客户端文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let res = await File.clientFileDelete(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明     |
| -------- | ------ | -------- | -------- |
| filePath | string | √        | 文件路径 |

- 返回值: `Object`

| 参数             | 类型    | 说明                         |
| ---------------- | ------- | ---------------------------- |
| clientFileDelete | boolean | true:删除成功;false:删除失败 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.deleteFile()</font>

---

### 2.6 isFileExist --文件是否存在

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'd://a.txt'
let res = await File.isFileExist(path)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明     |
| ---- | ------ | -------- | -------- |
| path | string | √        | 文件路径 |

- 返回值: `Object`

| 参数            | 类型   | 说明                 |
| --------------- | ------ | -------------------- |
| clientFileExist | object | 文件是否存在结果对象 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.isFileExist</font>

---

### 2.7 clientFileIsDir -- 判断当前路径是否为文件夹

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let res = await File.clientFileIsDir(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明     |
| -------- | ------ | -------- | -------- |
| filePath | string | √        | 文件路径 |

- 返回值: `Object`

| 参数       | 类型   | 说明                 |
| ---------- | ------ | -------------------- |
| res.result | string | "true":是;"false":否 |

---

### 2.8 getFileLength -- 获取文件大小

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'd://a.txt'
let unitType = 'M'
let res = await File.getFileLength(path, unitType)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 参数差异                                | 说明     |
| -------- | ------ | -------- | --------------------------------------- | -------- |
| path     | string | √        | ---                                     | 文件路径 |
| unitType | string | √        | <font color='green'>移动端不支持</font> | 类型     |

- 返回值: `Object`

| 参数     | 类型   | 说明                |
| -------- | ------ | ------------------- |
| res.size | string | "0.0"(文件大小结果) |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.getFileInfo</font>

---

### 2.9 clientFileReadLines --柜面自有：按行读取客户端文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let startLines = 1
let endLines = 2
let res = await File.clientFileReadLines(filePath, startLines, endLines)
```

- 参数列表:

| 参数       | 类型   | 必填参数 | 说明         |
| ---------- | ------ | -------- | ------------ |
| filePath   | string | √        | 文件路径     |
| startLines | int    | √        | 首行行数     |
| endLines   | int    | √        | 最后一行行数 |

- 返回值: `Object`

| 参数                 | 类型   | 说明     |
| -------------------- | ------ | -------- |
| res.clientFileCreate | string | 读取结果 |

---

### 2.10 clientFileRename --客户端文件重命名

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let oldName = 'd://a.txt'
let newName = 'd://b.txt'
let res = await File.clientFileRename(oldName, newName)
```

- 参数列表:

| 参数    | 类型   | 必填参数 | 说明               |
| ------- | ------ | -------- | ------------------ |
| oldName | string | √        | 旧客户端文件全路径 |
| newName | string | √        | 新客户端文件全路径 |

- 返回值: `Object`

| 参数                 | 类型    | 说明                 |
| -------------------- | ------- | -------------------- |
| res.clientFileRename | boolean | true:成功;false:失败 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.rename()</font>

---

### 2.11 clientFilesGetList --获取文件列表

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'd://a.txt'
let fileTypes = ['.3gp', '.mp4', '.txt']
let res = await File.clientFilesGetList(filePath, fileTypes)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明         |
| --------- | ------ | -------- | ------------ |
| filePath  | string | √        | 文件路径     |
| fileTypes | string | √        | 获取文件格式 |

- 返回值: `list`

| 参数 | 类型   | 说明                                                                            |
| ---- | ------ | ------------------------------------------------------------------------------- |
| obj  | object | 例:{"name":"XXX","size":176,"path":"XXXX"} |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.getFilesFromDirectory()</font>

---

### 2.12 downloadFile --文件下载

> <font color ='green' style="font-weight:bold">支持移动渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

**文件下载调用示例**

```js
async
downloadFile()
{
  let serviceName = '/downService/downloadFile'
  // android端传整个url
  if (OsManager.android) {
    // 该接口连公司内网可以测试使用
    serviceName = 'http://192.9.200.101:50002/downService/downloadFile'
  }
  let remotePath = '/aarm.zip'
  let fileName = 'aarm.zip'
  let localPath = 'D:\\test\\b' // 下载保存的本地目录，移动端不需要
  try {
    let res = await File.downloadFile(remotePath, localPath, serviceName, fileName)
    // 下载成功信息
    console.log('文件下载：' + JSON.stringify(res))
  } catch (e) {
    // 下载错误信息
    console.log(JSON.stringify(e))
  }
}
```

**文件下载成功返回结果**

```json
{
  "downloadFile": true,
  "filePath": "file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211009/aarm.zip"
}
```

- 参数列表:

| 参数        | 类型   | 必填参数 | 说明                              |
| ----------- | ------ | -------- | --------------------------------- |
| remotePath  | string | √        | 服务端文件地址                    |
| localPath   | string | √        | 本地文件地址(移动端不起作用)      |
| fileName    | string | √        | 文件名称                          |
| serviceName | string | √        | 服务端名称 (移动端需传完整的 url) |

- 返回值: `Object`

| 参数         | 类型    | 说明               |
| ------------ | ------- | ------------------ |
| downloadFile | boolean | 是否下载成功       |
| filePath     | string  | 下载后文件存储路径 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: api-file-transfer-1.0.1-2: AgreeSDK.ft.downloadFile() </font>

---

### 2.13 downloadFileNormal --文件下载标准接口

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

downloadFileNormal 和 downloadFile 接口调用的是同一个服务的接口，但是 downloadFileNormal 同时支持多种下载方式和传参方式，更强大、更灵活。

**文件下载调用示例**

```javascript
async
downloadFileNormal()
{
  let serviceName = '/downService/downloadFile'
  // android端传参
  if (OsManager.android) {
    // serviceName = "http://192.9.200.101:50002/downService/downloadFile";
    serviceName = 'http://192.9.200.136:59102/downloadFile?isAbsolutePath=true&filePath=mp/ad/version/IDE/IDE/source/static/weather/207.png'
  }
  let remotePath = '/aarm.zip'
  let fileName = 'aarm.zip'
  let localPath = 'image/2021' // 下载保存的本地目录，移动端传沙箱内的相对路径，/appId/files/下路径
  let isAbsolutePath = false
  let params = {}
  let headers = {}
  try {
    // 完整的下载参数
    // let res = await File.downloadFileNormal(serviceName, localPath, fileName, remotePath, isAbsolutePath, params, headers);
    // 通过url下载文件，文件名是url结尾的文件命名，并指定保存路径
    //let res = await File.downloadFileNormal(serviceName, localPath);
    // 通过url下载文件，文件名是url结尾的文件命名，保存路径是默认的download/日期下
    // let res = await File.downloadFileNormal(serviceName);
    // 通过url下载文件，并保存自定义相对路径，并重命名下载文件的名称
    let res = await File.downloadFileNormal(serviceName, localPath, fileName)
    console.log('通过url下载：' + JSON.stringify(res))
  } catch (e) {
    console.log(JSON.stringify(e))
  }
}
```

**文件下载成功返回结果**

```json
{
  "downloadFile": true,
  "filePath": "file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211009/aarm.zip"
}
```

- 参数列表:

| 参数           | 类型    | 必填参数 | 说明                              |
| -------------- | ------- | -------- | --------------------------------- |
| serviceName    | string  | √        | 服务端名称 (移动端需传完整的 url) |
| localPath      | string  | X        | 本地文件地址                      |
| fileName       | string  | X        | 文件名称                          |
| remotePath     | string  | X        | 服务端文件地址                    |
| isAbsolutePath | boolean | X        | 是否是绝对路径                    |
| params         | object  | X        | 其他参数                          |
| headers        | object  | X        | 请求头                            |

- 返回值: `Object`

| 参数         | 类型    | 说明               |
| ------------ | ------- | ------------------ |
| downloadFile | boolean | 是否下载成功       |
| filePath     | string  | 下载后文件存储路径 |

### 2.14 getClientFileAsSavePath --柜面自有:获取客户端打开文件路径

> <font color ='green' style="font-weight:bold">支持移动渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let fileTypesList = ['*.jpeg', '*.txt', '*.doc']
let behavior = 'open'
let fileName = 'test.txt'
let filterPath = 'D://'
let res = await File.getClientFileAsSavePath(fileTypesList, behavior, fileName, filterPath)
```

- 参数列表:

| 参数          | 类型   | 必填参数 | 说明                                              |
| ------------- | ------ | -------- | ------------------------------------------------- |
| fileTypesList | list   | √        | 支持打开文件的类型 默认不传值可以打开全部类型文件 |
| behavior      | string | √        | 模态对话框打开样式 默认为 open                    |
| fileName      | string | √        | 文件名称                                          |
| filterPath    | string | √        | 文件路径                                          |

- 返回值: `Object`

| 参数     | 类型   | 说明     |
| -------- | ------ | -------- |
| res.path | string | 路径结果 |

---

### 2.15 listToExcel -- 柜面自有：导出表格

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let data = [
  ['1', 'name', 'sexual', 'age'],
  ['2', 'huangguan', 'male', '30'],
  ['3', 'liudexin', 'male', '29']
]
let excelFilePath = 'D://test.xls'
let head = ''
let sheetName = 'sheet1'
let fontSize = 10
let fontName = '宋体'
let FontColor = 'black'
let backgroundColor = -1
let res = await File.listToExcel(data, excelFilePath, head, sheetName, fontSize, fontName, FontColor, backgroundColor)
```

- 参数列表:

| 参数            | 类型   | 必填参数 | 说明                   |
| --------------- | ------ | -------- | ---------------------- |
| data            | list   | √        | list 格式 data         |
| excelFilePath   | string | √        | excel 导出文件路径     |
| head            | string | √        | 头部                   |
| sheetName       | string | x        | 内部 sheet 名称,非必输 |
| fontSize        | number | x        | 字体大小,非必输        |
| fontName        | string | x        | 字体名称,非必输        |
| FontColor       | string | x        | FontColor,非必输       |
| backgroundColor | string | x        | 背景颜色,非必输        |

- 返回值: ``

| 参数       | 类型   | 说明        |
| ---------- | ------ | ----------- |
| res.result | string | "true":成功 |

---

### 2.16 pdfToTxt -- pdf 转 txt

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let pdfPath = 'D:\\dq\\hg.pdf'
let txtPath = 'D:\\dq\\hg.txt'
let encoding = 'UTF-8'
let res = await File.pdfToTxt(pdfPath, txtPath, encoding)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明               |
| -------- | ------ | -------- | ------------------ |
| pdfPath  | string | √        | pdf 文件绝对路径   |
| txtPath  | string | √        | txt 文件绝对路径   |
| encoding | string | √        | 编码，默认为 UTF-8 |

- 返回值: `Object`

| 参数       | 类型   | 说明        |
| ---------- | ------ | ----------- |
| res.result | string | "true":成功 |

---

### 2.17 readClientExcel -- 读取客户端 excel

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let excelPath = 'C:/a.xls'
let index = 1
let res = await File.readClientExcel(excelPath, index)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明                              |
| --------- | ------ | -------- | --------------------------------- |
| excelPath | string | √        | excel 文件绝对路径                |
| index     | number | √        | sheet index(例:index=1 从 1 开始) |

- 返回值: ``

| 参数       | 类型   | 说明        |
| ---------- | ------ | ----------- |
| res.result | string | "true":成功 |

---

### 2.18 readClientFileBase64 -- 读取客户端文件，返回 base64 字符串

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'C:/test.log'
let res = await File.readClientFileBase64(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明     |
| -------- | ------ | -------- | -------- |
| filePath | string | √        | 文件路径 |

- 返回值: `Object`

| 参数          | 类型   | 说明                                |
| ------------- | ------ | ----------------------------------- |
| res.Base64Str | string | 例"MjEzMzMzMzMzMzMz"(base64 字符串) |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.fileToBase64</font>

---

### 2.19 uploadFile -- 上传文件

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>
>
> 目前新版 ABS 支持两种上传方式，之前支持的是通过将参数拼接到 url 上进行上传，后来新增了表单形式的文件上传。
> 推荐使用表单形式。

**1、url 拼接参数上传(不推荐)**

```javascript
let localPath = 'file:///storage/emulated/0/download/demo.jpg'
let remotePath = '/home/pad/abs/workspace'
let url = 'http://192.9.200.101:51002/upService/uploadFile'
// url形式传参-老版功能支持
let urlOptions = {
  // 自定义参数，移动端支持，柜面不支持，可不传
  params: {
    // url形式上传需要将参数拼接到params上
    isAbsolutePath: true, // 是否是绝对路径
    override: true, // 是否覆盖原文件
    filePath: '/home/pad/abs/workspace' // 服务端保存的地址
  }, // 自定义参数
  headers: {} //自定义请求头
}
try {
  // 柜面端的options参数不生效，只有移动端有效
  let ret = await File.uploadFile(localPath, remotePath, url, options)
  console.log(ret)
} catch (e) {
  console.log(e)
}
```

**2、表单形式文件上传(推荐使用)**

```js
// 1、表单形式，推荐使用
let url = 'http://192.9.200.101:51002/upService/uploadFileForm'
let localPath = 'file:///storage/emulated/0/download/demo.jpg'
let remotePath = '/home/pad/abs/workspace'
// 表单形式传参-新版abs支持，推荐
let options = {
  // 自定义参数，移动端支持，柜面不支持，可不传
  isAbsolutePath: true, // 是否绝对路径
  override: true, // 是否覆盖已存在文件
  params: {}, // 自定义参数
  headers: {} //自定义请求头
}
try {
  // 柜面端的options参数不生效，只有移动端有效
  let ret = await File.uploadFile(localPath, remotePath, url, options)
  console.log(ret)
} catch (e) {
  console.log(e)
}
```

成功返回结果：

```json
{
  "res": {
    "ResponseResult": {
      "code": "000000",
      "msg": "文件上传成功！文件名:demo.jpg,文件类型:multipart/form-data,文件大小:35406 Bytes"
    }
  }
}
```

失败返回结果：

```json
{
  "code": "-1",
  "message": "java.net.ConnectException: Failed to connect to /192.9.200.101:50002"
}
```

- 参数列表:

| 参数        | 类型   | 必填参数 | 说明                             |
| ----------- | ------ | -------- | -------------------------------- |
| localPath   | string | √        | 本地文件路径                     |
| remotePath  | string | √        | 保存到服务端路径                 |
| serviceName | string | √        | 服务器接口地址                   |
| options     | object | X        | 自定义参数（目前仅移动渠道需要） |

- Options 参数列表:

| 参数           | 类型    | 必填参数 | 说明                                                                    |
| -------------- | ------- | -------- | ----------------------------------------------------------------------- |
| isAbsolutePath | boolean | X        | 是否保存到绝对路径，默认 true（仅移动渠道需要）                         |
| override       | boolean | X        | 是否覆盖已有文件，默认 true（仅移动渠道需要）                           |
| params         | object  | X        | 自定义额外参数，选填，如果是 url 传参方式接口，则需要使用该参数，默认{} |
| headers        | object  | X        | 自定义请求头，选填, 默认{}                                              |

- 返回值: `Object`

| 参数       | 类型   | 说明         |
| ---------- | ------ | ------------ |
| res.result | string | 是否更新成功 |

> <font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.ft.uploadFile</font>

---

### 2.20 wordToTxt -- word 转 txt

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let wordPath = 'D:\\dq\\hg.doc'
let txtPath = 'D:\\dq\\hg.txt'
let encoding = 'UTF-8'
let res = await File.wordToTxt(wordPath, txtPath, encoding)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明               |
| -------- | ------ | -------- | ------------------ |
| wordPath | string | √        | word 文件绝对路径  |
| txtPath  | string | √        | txt 文件绝对路径   |
| encoding | string | √        | 编码，默认为 UTF-8 |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 文本内容 |

---

### 2.21 writeClientFile -- 写客户端文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'D:\\dq\\hg.doc'
let content = 'hello'
let append = 'true'
let res = await File.writeClientFile(filePath, content, append)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明           |
| -------- | ------ | -------- | -------------- |
| filePath | string | √        | 文件路径       |
| content  | string | √        | 写入文件的内容 |
| append   | string | √        | 是否追加写入   |
| encoding | string | -        | 编码格式       |

- 返回值: `Object`

| 参数                | 类型    | 说明     |
| ------------------- | ------- | -------- |
| res.clientFileWrite | boolean | 写入结果 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.createFile()</font>

---

### 2.22 clientFileCopy -- 复制客户端文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let sourceFile = 'D:\\dq\\hg.doc'
let destinationFile = 'D:\\dq\\test.doc'
let res = await File.clientFileCopy(sourceFile, destinationFile)
```

- 参数列表:

| 参数            | 类型   | 必填参数 | 说明         |
| --------------- | ------ | -------- | ------------ |
| sourceFile      | string | √        | 原文件全路径 |
| destinationFile | string | √        | 文件全路径   |

- 返回值: `Object`

| 参数       | 类型   | 说明                               |
| ---------- | ------ | ---------------------------------- |
| res.result | string | 复制结果("true":成功;"false":失败) |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.copyFile() </font>

---

### 2.23 文件断点下载

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

**创建下载器**

`File.createDownloader`

创建下载器会初始化入参，当下载成功后，会返回下载文件信息。

**示例**

```javascript
// 断点下载方法，目前仅android支持
async
createDownloader()
{
  let url = 'http://192.9.200.101:50002/downService/downloadFile'
  let fileName = 'aarm.zip'
  let filePath = '/aarm.zip'
  let priority = 1 // 优先级
  let poolSize = 3 // 同时下载的任务数
  this.tag = url + filePath // tag是每一个下载任务的唯一标志
  let params = {
    isBreakpoint: 'true',
    isAbsolutePath: 'false',
    filePath
  }
  let headers = {}
  try {
    let ret = await File.createDownloader(url, priority, poolSize, this.tag, fileName, headers, params)
    console.log('下载返回:' + JSON.stringify(ret))
  } catch (e) {
    console.error(JSON.stringify(e))
  }
}
```

下载完成返回结果：

```json
{
  "path": "file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip",
  "name": "aarm.zip",
  "downloadedSize": 25485464,
  "totalSize": 25485464,
  "progress": 1,
  "tag": "http://192.9.200.101:50002/downService/downloadFile/aarm.zip"
}
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明                   |
| -------- | ------ | -------- | ---------------------- |
| url      | string | √        | 服务器下载接口         |
| priority | string | √        | 下载优先级             |
| poolSize | string | √        | 线程池同时下载任务数量 |
| tag      | string | √        | 下载任务的唯一识别标识 |
| fileName | string | √        | 下载后文件存储的名称   |
| headers  | object | √        | 请求头信息             |
| params   | object | √        | 需要传的参数           |

abs 接口需要传递的参数 params 字段

| 参数           | 类型   | 必填参数 | 说明                                         |
| -------------- | ------ | -------- | -------------------------------------------- |
| isBreakpoint   | string | √        | 是否是断点下载                               |
| isAbsolutePath | string | √        | 是否是绝对路径                               |
| filePath       | string | √        | 文件的路径，根据是否是绝对路径来传对应的参数 |

- 返回值: `Object`

| 参数           | 类型   | 说明                 |
| -------------- | ------ | -------------------- |
| path           | string | 文件下载后保存的路径 |
| name           | string | 文件名称             |
| downloadedSize | string | 已下载文件大小       |
| totalSize      | string | 文件总大小           |
| progress       | string | 当前下载进度         |
| tag            | string | 当前下载任务唯一标识 |

**开始下载**

开始下载也就是继续下载，在开始下载之前必须先调用`File.createDownloader`接口。

```javascript
File.startDownload(this.tag)
```

**暂停下载**

暂停下载，会停止当前下载任务，本地会记录当前下载任务进度信息，如需继续下载，调用`File.startDownload`即可。

```javascript
File.pauseDownload(this.tag)
```

**移除下载**

移除当前下载任务，移除后，将不存在断点下载信息。

```javascript
File.removeDownload(this.tag)
```

**获取下载信息**

返回指定 tag 的下载任务信息，便于展示下载 UI 信息，比如初始化进度信息。

```javascript
let ret = await File.getDownloaderInfo(this.tag)
console.log('获取下载信息:' + JSON.stringify(ret))
```

返回结果：

```json
{
  "path": "file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip",
  "name": "aarm.zip",
  "downloadedSize": 3861408,
  "totalSize": 25485464,
  "progress": 0.12894001603126526,
  "tag": "http://192.9.200.101:50002/downService/downloadFile/aarm.zip"
}
```

**注册监听**

- onFileBreakDownloadProgress 文件断点下载的进度监听，能够返回文件下载进度和下载信息。如果前端需要动态显示下载进度，可以在该监听方法里写进度 UI 展示。

- onFileBreakDownloadRemove 文件断点下载任务被移除时的监听，当调用移除下载方法时，监听会被触发。

```javascript
mounted()
{
  // 断点下载文件进度监听
  document.addEventListener(
    'onFileBreakDownloadProgress',
    res => {
      console.log('onFileBreakDownloadProgress==' + JSON.stringify(res.data))
      let data = res.data
      let tag = data.tag
      if (tag === 'tag1') {
        // 展示tag1进度UI
      } else if (tag === 'tag2') {
        // 展示tag2进度UI
      }
    },
    false
  )
  // 断点下载文件移除任务监听
  document.addEventListener(
    'onFileBreakDownloadRemove',
    res => {
      console.log('onFileBreakDownloadRemove==' + JSON.stringify(res.data))
      let data = res.data
      let tag = data.tag
      if (tag === 'tag1') {
        // 触发tag1移除监听
      } else if (tag === 'tag2') {
        // 触发tag2移除监听
      }
    },
    false
  )
}
```

**监听返回结果**

获取 res.data 的值，返回结果如下：

```json
{
  "path": "file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip",
  "name": "aarm.zip",
  "downloadedSize": 3861408,
  "totalSize": 25485464,
  "progress": 0.12894001603126526,
  "tag": "http://192.9.200.101:50002/downService/downloadFile/aarm.zip"
}
```

### 2.24 获取文件 MD5-getClientFileMD5

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

接口调用：

```javascript
File.getClientFileMD5(filePath, resultType)
```

示例：

```javascript
async
getClientFileMD5()
{
  let filePath = ''
  let resultType = 'MD5String'
  if (OsManager.android) {
    filePath = 'file:///storage/emulated/0/download/demo.jpg'
  }
  try {
    // 第二个参数是返回值类型，可以返回字符串类型的MD5/字节类型的MD5/Base64类型的MD5
    // let ret = await File.getClientFileMD5(filePath, resultType);
    // 默认是返回字符串类型的md5，可以不传第二个参数
    let ret = await File.getClientFileMD5(filePath)
    // 返回值： { result: "f1802c81c98e3f2a3cb258be17ee989c"}
    console.log('获取文件MD5:' + ret.result)
  } catch (e) {
    console.error(JSON.stringify(e))
  }
}
```

返回结果：

```json
{
  "result": "f1802c81c98e3f2a3cb258be17ee989c"
}
```

- 参数列表:

| 参数       | 类型   | 必填参数 | 说明                                                                         |
| ---------- | ------ | -------- | ---------------------------------------------------------------------------- |
| filePath   | string | √        | 文件的绝对路径                                                               |
| resultType | string | X        | 返回值类型：MD5String(字符串类型), Md5Byte(字节类型), Md5Base64(base64 类型) |

- 返回值: `Object`

| 参数   | 类型   | 说明          |
| ------ | ------ | ------------- |
| result | string | 文件的 md5 值 |

---

### 2.25 downGrmFiles -- 下载指定文件夹 aarm 资源

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let relativeDirPath = '/www/TEClient/TEClientFM/static/'
let res = await File.downGrmFiles(relativeDirPath)
```

- 参数列表:

| 参数            | 类型   | 必填参数 | 说明                             |
| --------------- | ------ | -------- | -------------------------------- |
| relativeDirPath | string | √        | 文件夹相对路径，相对于 workspace |

- 返回值: `Object`

| 参数       | 类型    | 说明     |
| ---------- | ------- | -------- |
| res.result | boolean | 下载结果 |

---

### 2.26 readJsonFile -- 读取指定 JSON 文件返回 JSON 对象

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'D:\\a\\1.json'
let res = await File.readJsonFile(path)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明                |
| ---- | ------ | -------- | ------------------- |
| path | string | √        | json 文件的绝地路径 |

- 返回值: `Object`

| 参数       | 类型   | 说明      |
| ---------- | ------ | --------- |
| res.result | object | JSON 对象 |

---

### 2.27 readFolderList -- 读取指定目录返回文件列表

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'D:\\a\\b'
let res = await File.readFolderList(path)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明           |
| ---- | ------ | -------- | -------------- |
| path | string | √        | 文件夹绝对路径 |

- 返回值: `Object`

| 参数       | 类型      | 说明     |
| ---------- | --------- | -------- |
| res.result | JSONArray | 文件列表 |

---

### 2.28 CheckAndDownload -- 判断资源是否需要更新的方法

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.25 新增）</font>

```js
let paths = ['www/index.html', 'www/main.js']
let res = await File.CheckAndDownload(paths)
```

- 参数列表:

| 参数  | 类型  | 必填参数 | 说明                   |
| ----- | ----- | -------- | ---------------------- |
| paths | array | √        | 需要判断的资源路径数组 |

- 返回值: `Object`

| 参数             | 类型  | 说明                   |
| ---------------- | ----- | ---------------------- |
| res.downloadKeys | Array | 需要更新的资源路径数组 |

---

### 2.29 openFile -- 打开文件

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.31 新增）</font>

```js
try{
    let type = "word",
    let fileName = "file:///www/static/test.doc"
    let res = await File.openFile(fileName, type);
}catch(err){

}
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明                                                          |
| -------- | ------ | -------- | ------------------------------------------------------------- |
| fileName | string | √        | 文件的绝对路径                                                |
| type     | string | X        | type 打开文档类型，可选参数包括：word,excel,ppt,txt,pdf,image |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 打开结果 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.openFile() </font>

---

### 2.30 CreateImgByBase64 -- 根据 base64 生成 img

> <font color ='green' style="font-weight:bold">2.0.28 版本后支持</font>

```js
try {
  let filePath = 'C:\\Users\\Desktop\\test.png'
  let base64Str = 'iVBORw0KGgoAAAANSUhEUgAAAwMAAAO9CAIAAABRgCxxAAAAAXNSR0IArs4c6……'
  let res = await File.CreateImgByBase64(filePath, base64Str)
} catch (err) {}
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明      |
| --------- | ------ | -------- | --------- |
| filePath  | string | √        | 文件路径  |
| base64Str | string | √        | base64 值 |

- 返回值: `Object`

| 参数       | 类型    | 说明 |
| ---------- | ------- | ---- |
| res.result | boolean | 结果 |

### 2.31 writeFileToUploadTask -- 写埋点日志上传文件

> <font color ='green' style="font-weight:bold">2.0.30 版本后支持</font>

```js
let filePath = 'D:\\dq\\hg.doc'
let content = 'hello'
let append = 'true'
let res = await File.writeFileToUploadTask(filePath, content, append)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明           |
| -------- | ------ | -------- | -------------- |
| filePath | string | √        | 文件路径       |
| content  | string | √        | 写入文件的内容 |
| append   | string | √        | 是否追加写入   |
| encoding | string | -        | 编码格式       |

- 返回值: `Object`

| 参数       | 类型    | 说明 |
| ---------- | ------- | ---- |
| res.result | boolean | 结果 |
