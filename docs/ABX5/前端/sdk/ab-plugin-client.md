---
outline: deep
---
# ab-plugin-client @客户端类组件

## 1. 引入

```js
import { Client } from '@agree/ab-plugin-client'
```

## 2. 使用

### 2.1 getAppVersionName --获取应用版本名

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font>

示例：

```js
try {
  let ret = await Client.getAppVersionName()
  console.log(ret)
} catch (e) {
  console.log(JSON.stringify(e))
}
```

出参示例：

```javascript
1.0.0
```

### 2.2 getAppVersionCode --获取应用版本号

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font>

示例：

```js
try {
  let ret = await Client.getAppVersionCode()
  console.log(ret)
} catch (e) {
  console.log(JSON.stringify(e))
}
```

出参示例：

```javascript
1
```

### 2.3 openClient --打开客户端子应用

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

示例：

```js
try {
  let appId = 'ydzy'
  let ret = await Client.openClient(appId)
  console.log(ret)
} catch (e) {
  console.log(JSON.stringify(e))
}
```

- 参数列表:

| 参数        | 类型   | 必填参数 | 说明                                                                |
| ----------- | ------ | -------- | ------------------------------------------------------------------- |
| appId       | string | √        | 应用 Id，对应 apps 目录下的子应用目录名称                           |
| url         | string | x        | 应用 Id，对应 apps 目录下的子应用目录名称                           |
| orientation | string | x        | Activity 的横屏和竖屏,PORTRAIT 为竖屏，LANDSCAPE 为横屏（默认横屏） |

> <font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.openChildApp</font>

### 2.4 closeClient --关闭客户端

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let isFinish = true
let res = await Client.closeClient(isFinish)
```

- 参数列表:

| 参数     | 类型    | 必填参数 | 说明     |
| -------- | ------- | -------- | -------- |
| isFinish | boolean | x        | 是否关闭 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.app.quitApp(isFinish)</font>

### 2.5 postValue --向子应用传值

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

```js
let key = 'key_app1'
let value = 'value_app222'
Client.postValue(key, value)
```

- 参数列表:

| 参数  | 类型   | 必填参数 | 说明                 |
| ----- | ------ | -------- | -------------------- |
| key   | string | √        | 要传的值的唯一识别键 |
| value | string | √        | 要传的值             |

> <font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.postValue(key, value);</font>

### 2.6 getValue --获取子应用传的值

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font>

```js
let key = 'key_app1'
let ret = await Client.getValue(key)
console.log('getValue=' + JSON.stringify(ret))
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明           |
| ---- | ------ | -------- | -------------- |
| key  | string | √        | 要获取的值的键 |

> <font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.getValue(key);</font>

### 2.7 getOid --获取客户端 oid

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getOid()
```

- 移动渠道返回值: `Object`

| 参数       | 类型   | 说明         |
| ---------- | ------ | ------------ |
| res.result | string | 获取到的 oid |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明         |
| ---------- | ------ | ------------ |
| res.result | string | 获取到的 oid |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font>

### 2.8 getClientIp --获取客户端 ip 地址

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientIp()
```

- 移动渠道返回值: `Object`

| 参数       | 类型   | 说明              |
| ---------- | ------ | ----------------- |
| res.result | string | 获取到的客户端 ip |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明              |
| ---------- | ------ | ----------------- |
| res.result | string | 获取到的客户端 ip |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font>

### 2.9 getAppID --获取客户端应用唯一标识

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let clientIp = ''
let res = await Client.getAppID(clientIp)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 参数差异                                 | 说明           |
| -------- | ------ | -------- | ---------------------------------------- | -------------- |
| clientIp | string | √        | <font color='green'> 移动端可缺省</font> | 客户端 ip 地址 |

- 返回值: `Object`

| 参数       | 类型   | 说明           |
| ---------- | ------ | -------------- |
| res.result | string | 获取到的 appId |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.app.getAppId </font>

### 2.10 getMac --获取客户端 Mac 地址

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let clientIp = ''
let res = await Client.getMac(clientIp)
```

- 参数列表

| 参数     | 类型   | 必填参数 | 参数差异                                 | 说明           |
| -------- | ------ | -------- | ---------------------------------------- | -------------- |
| clientIp | string | √        | <font color='green'> 移动端可缺省</font> | 客户端 ip 地址 |

- 返回值: `Object`

| 参数       | 类型   | 说明              |
| ---------- | ------ | ----------------- |
| res.result | string | 获取到的 mac 地址 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font>

### 2.11 getClientRootPath --获取客户端根路径

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientRootPath()
```

- 返回值: `Object`

| 参数       | 类型   | 说明                 |
| ---------- | ------ | -------------------- |
| res.result | string | 获取到的客户端根路径 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.workspaceDirectory</font>

### 2.12 getClientOSName --获取客户端操作系统名称

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientOSName()
```

- 返回值: `Object`

| 参数       | 类型   | 说明                       |
| ---------- | ------ | -------------------------- |
| res.result | string | 获取到的客户端操作系统名称 |

> <font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font>

### 2.13 setThemePreference -- 设置主题

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let theme = '#FFF'
let result = await Client.setThemePreference(theme)
```

- 参数列表:

| 参数  | 类型   | 必填参数 | 说明     |
| ----- | ------ | -------- | -------- |
| theme | string | √        | 主题颜色 |

- 返回值: `Object`

| 参数       | 类型   | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

### 2.14 setLegalNum --设置柜面渠道法人号

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let legalNum = '0010'
let result = await Client.setLegalNum(legalNum)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明           |
| -------- | ------ | -------- | -------------- |
| legalNum | string | √        | 柜面渠道法人号 |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

### 2.15 setMina --设置是否与服务端通讯

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let MINA = 'true'
let result = await Client.setMina(MINA)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明             |
| ---- | ------ | -------- | ---------------- |
| MINA | string | √        | 是否与服务端通讯 |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

### 2.16 setMode --设置连接服务端环境

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let MODE = 'dev'
let result = await Client.setMode(MODE)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明               |
| ---- | ------ | -------- | ------------------ |
| MODE | string | √        | 设置连接服务端环境 |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

### 2.17 setCommPreference --设置通讯配置

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let name = 'hg'
let httpUrlList = ['http://3.1.11.76:8867']
let aarmUrlList = ['ws://127.0.0.1:51003/websocket']
let msgUrlList = ['ws://127.0.0.1:51004/websocket']
let result = await Client.setCommPreference(name, httpUrlList, aarmUrlList, msgUrlList)
```

- 参数列表:

| 参数        | 类型   | 必填参数 | 说明                               |
| ----------- | ------ | -------- | ---------------------------------- |
| name        | string | √        | oid 名称                           |
| httpUrlList | string | √        | aase 的 http 的 url                |
| aarmUrlList | List   | √        | aarm 的 websocket 资源更新 url     |
| msgUrlList  | List   | √        | amessage 的 websocket 消息推送 url |

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

### 2.18 getProperties --读取客户端配置

> <font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let qualifier = 'cn.com.agree.ab.a4.client.web'
let key = 'port'
let type = 'String'
let result = await Client.getProperties(qualifier, key, type)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明                                      |
| --------- | ------ | -------- | ----------------------------------------- |
| qualifier | string | √        | 插件标识前缀                              |
| key       | string | √        | 配置名称                                  |
| type      | string | √        | 类型:Boolean,String,int,double,float,long |

- 柜面渠道返回值: `Object`
- 安卓渠道修改配置方式：请修改 manifest.json 中 preference/abx5 下的相关配置
  例如：

```json
//www/manifest.json
...
  "preference": {
    "abx5": {
      "ABX5ModuleRootDir": "www/ABX5",
      "ABX5HttpUrl": "http://***.***.*.*",
      "jsPluginsRootDir": "www/jsPlugins",
      "extensionFolders": "www/jsPlugins,www/ABX5",
      "mainAarmUrl": "http://192.168.71.111:58273/",
      "resource": "local"
    }
    ...
  }
...
```

| 参数       | 类型 | 说明         |
| ---------- | ---- | ------------ |
| res.result |      | 读取到的内容 |

### 2.19 closeSubscribe --关闭客户端事件订阅

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.closeSubscribe(()=>{
    TODO:do something to clean the cache
    Client.closeClient();
});
```

- 参数列表:

| 参数 | 类型     | 必填参数 | 说明                                          |
| ---- | -------- | -------- | --------------------------------------------- |
| fun  | function | √        | 关闭客户端方法(可以添加其他方法,例如清楚缓存) |

### 2.20 setMinimized --最小化客户端

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.setMinimized()
```

### 2.21 setMaxmized --最大化客户端

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.setMaxmized()
```

### 2.22 closeSystem --关机操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.closeSystem()
```

### 2.23 restartSystem --重启操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.restartSystem()
```

### 2.24 getClientNowSystemTime --获取客户端当前系统时间

> <font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let format = 'yyyy-MM-dd'
let res = await Client.getClientNowSystemTime(format)
```

- 参数列表:

| 参数   | 类型   | 必填参数 | 说明     |
| ------ | ------ | -------- | -------- |
| format | string | √        | 时间格式 |

- 柜面渠道返回值: `Object`

| 参数       | 类型 | 说明       |
| ---------- | ---- | ---------- |
| res.result |      | 获取的时间 |

### 2.25 getClientFileLastModified --获取客户端文件最后修改时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = 'D:\\test.txt'
let res = await Client.getClientFileLastModified(filePath)
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明           |
| -------- | ------ | -------- | -------------- |
| filePath | string | √        | 客户端文件地址 |

- 柜面渠道返回值: `Object`

| 参数       | 类型 | 说明       |
| ---------- | ---- | ---------- |
| res.result |      | 获取的时间 |

### 2.26 openSysPage --打开客户端系统配置页面

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.openSysPage()
```

### 2.27 setShellClosable --窗口关闭按钮是否可以关闭

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let ifClose = true
let res = await Client.setShellClosable(ifClose)
```

- 参数列表:

| 参数    | 类型    | 必填参数 | 说明                                         |
| ------- | ------- | -------- | -------------------------------------------- |
| ifClose | boolean | √        | 是否关闭变量:true 可以关闭，false 不允许关闭 |

### 2.28 startLockScreen --一段时间不操作界面跳转锁屏界面

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let time = 3
let res = await Client.startLockScreen(time)
```

- 参数列表:

| 参数 | 类型 | 必填参数 | 说明     |
| ---- | ---- | -------- | -------- |
| time | int  | √        | 单位：秒 |

### 2.29 stopLockScreen --停止锁屏计时

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.stopLockScreen()
```

### 2.30 clientToTop --霸屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let keepInTop = 'true'
let res = await Client.clientToTop(keepInTop)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明                                  |
| --------- | ------ | -------- | ------------------------------------- |
| keepInTop | string | √        | 是否霸屏 true 为霸屏 false 为结束霸屏 |

### 2.31 setSystemDate --设置系统时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let date = '2021-01-01'
let time = '12:00:00'
let res = await Client.setSystemDate(date, time)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 说明                      |
| ---- | ------ | -------- | ------------------------- |
| date | string | √        | 日期，日期格式 2021-03-08 |
| time | string | √        | 时间，时间格式 12:00:00   |

### 2.32 getMultiProperties --获取多个配置

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let list = []
let defaultTradePath = `cn.com.agree.ab.a5.client.gui.aui/defaultTradePath/String`
let parentMsgUrl = `cn.com.agree.ab.a5.client.communication/parentMsgUrl/String`
let accessKey = `cn.com.agree.ab.a5.client.communication/accessKey/String`
let secretKey = `cn.com.agree.ab.a5.client.communication/secretKey/String`
let mode = `Platform,MODE,String`
list.push(defaultTradePath)
list.push(parentMsgUrl)
list.push(accessKey)
list.push(secretKey)
list.push(mode)
let result = await Client.getMultiProperties(list)
```

- 参数列表:

| 参数 | 类型          | 必填参数 | 说明 |
| ---- | ------------- | -------- | ---- |
| list | array[string] | √        |      |

- 柜面渠道返回值: `Object`

| 参数 | 类型    | 说明           |
| ---- | ------- | -------------- |
| res  | promise | 返回的多个配置 |

### 2.33 getWindowInfo --获取设备屏幕的高度和宽度，ABC 窗口的高度和宽度方法

> <font color ='red' style="font-weight:bold">支持柜面渠道</font> > <font color ='red' style="font-weight:bold">支持移动渠道基座 1.7.7 以上版本</font>

示例：

```js
let result = await Client.getWindowInfo()
```

移动端返回结果：

```json
{
  "screenWidth": 533,
  "screenHeight": 853,
  "windowWidth": 533,
  "windowHeight": 829,
  "pixelRatio": 3,
  "pixelWidth": 1600,
  "pixelHeight": 2560,
  "statusBarHeight": 24,
  "statusBarPixelHeight": 72,
  "navigateBarHeight": 36,
  "navigateBarPixelHeight": 108
}
```

- 移动渠道返回值: `Object`

| 参数                   | 类型   | 说明                                   |
| ---------------------- | ------ | -------------------------------------- |
| screenWidth            | number | 屏幕物理宽度,这个是约数值              |
| screenHeight           | number | 屏幕物理高度,这个是约数值              |
| windowWidth            | number | 窗口可用宽度,这个是约数值              |
| windowHeight           | number | 窗口可用高度 ,这个是约数值             |
| pixelRatio             | number | 设备像素比(每英寸长度能够排列的像素数) |
| pixelWidth             | number | 设备逻辑像素宽度                       |
| pixelHeight            | number | 设备逻辑像素高度                       |
| statusBarHeight        | number | 状态栏物理高度                         |
| statusBarPixelHeight   | number | 状态栏逻辑像素高度                     |
| navigateBarHeight      | number | 导航栏物理高度                         |
| navigateBarPixelHeight | number | 导航栏逻辑像素高度                     |

### 2.33 catchScopeScreen --截取区域屏幕接口

> <font color ='red' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    fileName: '111', // 文件名称，可选，默认是时间戳，不需要带后缀名
    imageType: 'jpg', // png jpg/jpeg 默认jpg
    quality: 90, // 图片质量，质量越高，图片越大
    newWidth: 300, // 自定义宽度, 默认不处理，可选
    newHeight: 400, // 自定义高度, 默认不处理，可选
    maxLength: 200 // 宽高不能超过200,按比例缩放, 默认不处理，可选
  }
  // 带参数
  let path = await Client.catchScopeScreen(params)
  // 不带参数
  // let path = await Client.catchScopeScreen();
  // 返回截图图片的路径
  console.log(path)
} catch (e) {
  console.log(e)
}
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明                                                   |
| --------- | ------ | -------- | ------------------------------------------------------ |
| fileName  | String | X        | 保存后的文件名称，可选，默认是时间戳，不需要带后缀名   |
| imageType | String | X        | 图片类型 png jpg/jpeg 可选，默认 jpg                   |
| quality   | Number | X        | 图片质量，质量越高，图片越大 范围 1-100 可选，默认 100 |
| newWidth  | Number | X        | 自定义宽度, 默认不处理，可选                           |
| newHeight | Number | X        | 自定义高度, 默认不处理，可选                           |
| maxLength | Number | X        | 宽高不能超过 200,按比例缩放, 默认不处理，可选          |

移动端返回结果：

```javascript
file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.apps/files/image/20221011/111.jpg"
```

- 移动渠道返回值: `Object`

| 参数 | 类型   | 说明                 |
| ---- | ------ | -------------------- |
| path | String | 直接返回截图文件路径 |

### 2.34 getCommandLineArgs --获取启动客户端命令中的参数

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getCommandLineArgs()
```

- 参数列表:

| 参数 | 类型 | 必填参数 | 说明 |
| ---- | ---- | -------- | ---- |

- 柜面渠道返回值: `Object`

| 参数   | 类型 | 说明                           |
| ------ | ---- | ------------------------------ |
| result | list | 返回启动客户端脚本中传入的参数 |

### 2.35 toppingAbcShell --置顶 ABC 窗口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.toppingAbcShell()
```

- 参数列表:

| 参数 | 类型 | 必填参数 | 说明 |
| ---- | ---- | -------- | ---- |

- 柜面渠道返回值: `Object`

| 参数   | 类型   | 说明      |
| ------ | ------ | --------- |
| result | string | "success" |

### 2.36 deactiveToppingAbcShell --取消置顶 ABC 窗口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.deactiveToppingAbcShell()
```

- 参数列表:

| 参数 | 类型 | 必填参数 | 说明 |
| ---- | ---- | -------- | ---- |

- 柜面渠道返回值: `Object`

| 参数   | 类型   | 说明      |
| ------ | ------ | --------- |
| result | string | "success" |

### 2.37 enableScreenshot --是否关闭截屏功能

> <font color ='green' style="font-weight:bold">支持 Android 渠道</font>

```js
let enable = true
let res = await Client.enableScreenshot(enable)
```

- 参数列表:

| 参数   | 类型    | 必填参数 | 说明     |
| ------ | ------- | -------- | -------- |
| enable | boolean | √        | 是否关闭 |

###  2.38 getDockStatus --  获取 pad 在 adaas 基座上的状态

> <font color ='green' style="font-weight:bold">支持 Android 渠道</font>

```js
let res = await Client.getDockStatus()
```

###  2.39 startDockObserver --   开启 dock 监听，监听 pad 在 adaas 上的状态

> <font color ='green' style="font-weight:bold">支持 Android 渠道</font>

```js
document.addEventListener('onDockStatus', function (data) {
  //获取监听状态
})

let res = await Client.startDockObserver()
```

### 2.40 restartApp --   重启 app

> <font color ='green' style="font-weight:bold">支持 Android 渠道</font>

```js
let res = await Client.restartApp()
```

### 2.41 geteth0Mac --   有线网卡的 mac 地址

> <font color ='green' style="font-weight:bold">支持 Android 渠道</font>

```js
let res = await Client.geteth0Mac()
```

### 2.42 getResourceRequestHeader -- 获取资源下载 header 信息

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font>

```js
let res = await Client.getResourceRequestHeader()
```

### 2.43 setResourceRequestHeader -- 设置资源下载 header 信息

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font>

```js
let headerMap = {
  XXX: XXX
}
let res = await Client.setResourceRequestHeader(headerMap)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 说明               |
| --------- | ------ | -------- | ------------------ |
| headerMap | Object | √        | 自定义 header 信息 |

### 2.44 getClientGrmVersion -- 获取 GRM 版本信息

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font>

```js
let res = await Client.getClientGrmVersion()
```

- 参数列表:

| 参数     | 类型   | 必填参数 | 说明     |
| -------- | ------ | -------- | -------- |
| encoding | string | ×        | 编码格式 |

### 2.45 zipUploadLog -- 打包上传客户端日志

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.29 新增）</font>

```js
let remotePath = "./uploadLog",
let logType = "abc",
let res = await Client.zipUploadLog(remotePath, logType);
```

- 参数列表:

| 参数       | 类型   | 必填参数 | 说明                                                                                             |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------ |
| remotePath | string | √        | 指定上传到服务端的目录                                                                           |
| logType    | string | √        | 指定打包模式，支持字段 abc、evs、ads、fileList                                                   |
| fileList   | list   | ×        | 当打包模式为 fileList 时，需要指定需要打包的日志，例如["log/client.log","log/communication.log"] |


### 2.46 getRealClientIp --获取客户端 ip 地址

> <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.31 新增）</font>

```js
let res = await Client.getRealClientIp()
```

- 柜面渠道返回值: `Object`

| 参数       | 类型   | 说明              |
| ---------- | ------ | ----------------- |
| res.result | string | 获取到的客户端 ip (排除虚拟网卡影响) |

