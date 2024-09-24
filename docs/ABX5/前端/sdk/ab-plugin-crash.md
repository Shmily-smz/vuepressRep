---
outline: deep
---
# ab-plugin-crash 崩溃日志组件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

客户端崩溃日志组件。

## 1. 引入

```js
import {Crash} from '@agree/ab-plugin-crash';
```

打包壳添加插件配置

config.xml中添加配置：

```xml
    <!--崩溃日志组件-->
<feature name="AGCrash">
    <param name="android-package" value="cn.com.agree.abc.sdk.api.crash.CrashFeatureImpl"/>
</feature>
```

## 2. 使用

### 2.1 switch -- 崩溃日志开关

```js
let flag = true;
Crash.switch(true);
```

**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| flag  | bool | √  | 默认true，true表示启用组件，false表示停用组件 |

**出参**

设置为false之后，后面的所有接口调用都会报如下错：

```json
{
  "code":-1,
  "message":"ACrash开关未打开!"
}
```


### 2.2 defaultConfig -- 使用壳子默认设置(推荐使用)

会自动检测崩溃文件，自动上传服务端，自动删除已上传的崩溃文件

```js
try {
    let url = "http://192.9.200.101:60000/alog/crash/upload"; // 上传的服务地址
    let unionId = "admin"; // 用户名或用户ID
    let isDelete = true; // 表示是否上传完就删除该文件，一般要删除，测试的时候别删除
    let headers = { // 请求头，可选
        "X-AmebaCloud-Token": "12345678", // 设置token
        "X-AmebaCloud-RandomNumber": Math.random().toString(), // 设置随机数
        "X-AmebaCloud-VerifyTime": "12345678",
    };
    let ret = await Crash.defaultConfig(url, unionId, isDelete, headers);
    console.log(ret);
} catch (e) {
    console.log(JSON.stringify(e));
}
```
**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| url  | string | √  | 上传的服务地址 |
| unionId  | string | X  | 用户名或用户ID |
| isDelete  | bool | X  | 表示是否上传完就删除该文件，一般要删除，测试的时候别删除 |
| headers  | object | X  | 请求头，可选，可以使用该参数与服务端配合定制额外功能 |

**出参**

上传成功

```json
{
  "ResponseResult": {
    "code": "000000",
    "msg": "文件上传成功：storeFile = /home/abs/abs_ocu_master/aarm/alog/c0d4b482f379442ebf3f43c3ef4e78bb/cn.com.agree.sdk.runtime.component.crash/crash/tombstone_00001674025870609000_1.0.0__cn.com.agree.sdk.runtime.component.crash.java.xcrash"
  }
}
```

上传失败

```json
{
  "code":"-1",
  "message":"cn.com.agree.sdk.request.exception.HttpException: network error! http response code is 404 or 5xx!"
}
```

### 2.3 check -- 检测是否有崩溃文件

```js
try {
    let ret = await Crash.check();
    console.log(ret); // 返回崩溃文件数量 1
} catch (e) {
    console.log(JSON.stringify(e));
}
```

**出参**

返回崩溃文件的数量

### 2.4 getFileList -- 获取崩溃文件列表

```javascript
try {
    let type = "java";
    //let ret = await Crash.getFileList(type);
    let ret = await Crash.getFileList();
    console.log(JSON.stringify(ret));
} catch (e) {
    console.log(JSON.stringify(e));
}
```

**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| type  | string | X  | 崩溃类型：java、anr、native，默认全部 |

**出参**

返回崩溃文件路径数组

```json
["/data/user/0/cn.com.agree.sdk.runtime.component.crash/files/tombstones/tombstone_00001674025870609000_1.0.0__cn.com.agree.sdk.runtime.component.crash.java.xcrash"]
```

### 2.5 deleteFiles -- 删除崩溃文件

```javascript
try {
    let crashFileList = await Crash.getFileList("java");
    let ret = await Crash.deleteFiles(crashFileList);
    console.log(ret);
} catch (e) {
    console.log(JSON.stringify(e));
}
```
**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| crashFileList  | array | √  | 删除的崩溃日志列表 |

**出参**

返回删除成功的文件路径列表

```json
["/data/user/0/cn.com.agree.s….agree.sdk.runtime.component.crash.java.xcrash"]
```

### 2.6 upload -- 上传崩溃文件

```javascript
try {
    let url = "http://192.9.200.101:60000/alog/crash/upload"; // 上传的服务地址
    let unionId = "admin"; // 用户名或用户ID
    let filePath = ""; // 文件路径
    let isDelete = false; // 表示是否上传完就删除该文件，一般要删除，测试的时候别删除
    let headers = { // 请求头，可选
        "X-AmebaCloud-Token": "12345678", // 设置token
        "X-AmebaCloud-RandomNumber": Math.random().toString(), // 设置随机数
        "X-AmebaCloud-VerifyTime": "12345678",
    };
    let ret = await Crash.upload(url, unionId, filePath, isDelete, headers);
    console.log(ret);
} catch (e) {
    console.log(JSON.stringify(e));
}
```

**params入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| url  | string | √  | 上传的服务地址 |
| unionId  | string | √  | 用户名或用户ID |
| filePath  | string | √  | 遍历出的文件路径 |
| isDelete  | bool | √  | 表示是否上传完就删除该文件，一般要删除，测试的时候别删除 |
| headers  | object | X  | 请求头，可选，可以使用该参数与服务端配合定制额外功能 |

接口推荐使用defaultConfig接口，壳子会做默认处理，也可以前端自定义业务功能，例如：

```javascript
try {
    // 1. 先获取崩溃日志数组
    let fileArr = await Crash.getFileList("java");
    // 如果返回结果数组长度大于0，表示有崩溃日志
    if (fileArr && fileArr.length) {
        // 2、遍历每一个崩溃文件
        for (let i = 0; i < fileArr.length; i++) {
            let file = fileArr[i];
            let url = "http://192.9.200.101:60000/alog/crash/upload"; // 上传的服务地址
            let unionId = "admin"; // 用户名或用户ID
            let filePath = "";
            let isDelete = false; // 表示是否上传完就删除该文件，一般要删除，测试的时候别删除
            let headers = { // 请求头，可选
                "X-AmebaCloud-Token": "12345678", // 设置token
                "X-AmebaCloud-RandomNumber": Math.random().toString(), // 设置随机数
                "X-AmebaCloud-VerifyTime": "12345678",
            };
            let ret = await Crash.upload(url, unionId, filePath, isDelete, headers);
            console.log(ret);
        }
    }
} catch (e) {
    console.log(JSON.stringify(e));
}
```

-------------------------------------------------
