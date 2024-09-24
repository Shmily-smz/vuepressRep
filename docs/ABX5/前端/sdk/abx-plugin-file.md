---
outline: deep
---
# abx-plugin-file

## 1. 引入

``` javascript
import { FileManager } from 'abx-plugin-file'
let FileManager = new FileManager()
```
## 2. 使用
### 2.1 getInstallPathAsync
获取客户端根路径

**返回：**

  *(object)*: 

**例子**
``` javascript
const result = FileManager.getInstallPathAsync()
```
   
### 2.2 getFileMD5Async
获取客户端文件的md5值

**参数：**

  *options(Object)*: 初始化获取客户端文件 md5 值的参数，包括技术组件，客户端文件路径，所需的 md5 值类型

**返回**



**例子**
``` javascript
let options = {
  url: "", // 客户端文件路径
  type: "", // 所需的 md5 值类型
}
const result = FileManager.getFileMD5Async(options)
```
   

### 2.3 uploadABXFileAsync
上传文件至 abx 内 aase 服务器

**参数:**

  *options(Object)*: 初始化向 abx 内的 aase 服务器文件上传所需的参数，包括服务全路径，服务端文件存储路径，客户端文件存储路径

**返回**


**例子**
``` javascript
let options = {
  serverPath: "", // 服务全路径
  remotePath: "", // 服务端文件存储路径
  localPath: "", // 客户端文件存储路径
}
const result = FileManager.uploadABXFileAsync(options)
```
   
### 2.4 downloadABXFileAsync
下载 abx 内 aase 服务器上的文件

**参数:**

  *options(Object)*: 初始化向 abx 内的 aase 服务器下载文件所需的参数，包括服务全路径，服务端文件存储路径，客户端文件存储路径

**返回**


**例子**
``` javascript
let options = {
  serverPath: "", // 服务全路径
  remotePath: "", // 服务端文件存储路径
  localPath: "", // 客户端文件存储路径
}
const result = FileManager.downloadABXFileAsync(options)
```
   
### 2.5 uploadABSFileAsync
上传文件至 abs 服务器

**参数**

  *options(Object)*: 初始化向 ab5 服务器上传文件所需的参数，包括服务端文件存储路径，客户端文件存储路径

**返回**


**例子**
``` javascript
let options = {
  remotePath: "", // 服务端文件存储路径
  localPath: "", // 客户端文件存储路径
}
const result = FileManager.uploadABSFileAsync(options)
```
   
### 2.6 downloadABSFileAsync
下载 abs 服务器上的文件

**参数**

  *options(Object)*: 初始化向 ab5 服务器下载文件所需的参数，包括服务端文件存储路径，客户端文件存储路径

**返回**


**例子**
``` javascript
let options = {
  remotePath: "", // 服务端文件存储路径
  localPath: "", // 客户端文件存储路径
}
const result = FileManager.downloadABSFileAsync(options)
```

### 2.7 downloadABXAARMFileAsync
下载 abx 内 aarm 服务器上的文件

**参数**

  *options(Object)*: 初始化向 abx 内的 aarm 服务器下载文件所需的参数，包括服务器全路径，服务端文件存储路径，客户端文件存储路径，是否为服务器绝对路径，下载完成后是否需要删除文件

**返回**


**例子**
``` javascript
let options = {
  serverPath: "", // 服务器全路径
  remotePath: "", // 服务端文件存储路径
  localPath: "", // 客户端文件存储路径
  isAbsolutePath: "", // 是否为服务器绝对路径
  isDelete: "", // 下载完成后是否需要删除文件
}
const result = FileManager.downloadABSFileAsync(options)
```
    