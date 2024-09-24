# ab-manager-adaas

和adaas进行交互,调用外设。

## 1. 引入并初始化

::: code-group

```js [defaultAdaas]
import { getAdaasManager }  from '@agree/ab-manager-adaas'
// 根据客户端的 Adaas 配置来进行管理
let adaasManager = getAdaasManager.getInstance()
```

```js [customAdaas]
import { AdaasManager }  from '@agree/ab-manager-adaas'

// 传入自定义的 Adaas 配置来进行管理
let adaasManager = new AdaasManager({
  grant_type: 'client_credentials',
  scope: 'device',
  client_id: 'client_credentials',
  client_secret: '123456',
  deviceURL: 'https://192.9.210.7:30000',
  tokenURL: 'https://192.9.210.7:30007',
})
```

:::

**Adaas 配置项说明**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| grant_type | String | 授权类型 |
| scope | String | 范围 |
| client_id | String | 客户端ID |
| client_secret | String | 客户端密码 |
| deviceURL | String | 调用外设的服务地址 |
| tokenURL | String | 获取token的服务地址 |

## 2. 方法

| 方法名 | 传参 | 默认值 | 说明 |
|-------|-------|-------|-------|
| readIdr | - | - | 读身份证 |
| readMsf | - | - | 读刷卡器MSF |
| readFic | - | - | 读刷卡器FIC |
| evaluator | 调用该方法时的vue实例 | 无 | 评价器 |
| readPin | Time(String) | 无 | 读密码键盘 |
| print | xml,要打印的 aft 内容 | 无 | 打印 |
| printImg | base64,要打印图片的 base64 码 | 无 | 打印图片 |
| frontCamera | type | - | 前置摄像头拍照 |
| backCamera | type | - | 后置摄像头拍照 |
| sign | pdfPath,要签字的 pdf 文件路径 | 无 | pdf加签 |
| uploadFile | base64,上传文件的 base64 | - | 上传 |

### readIdr

> 读身份证

```js
adaasManager.readIdr()
```

### readMsf

> 读刷卡器MSF

```js
adaasManager.readMsf()
```

### readFic

> 读刷卡器FIC

```js
adaasManager.readFic()
```

### evaluator

> 评价器

```js
// this 为当前 vue 实例
adaasManager.evaluator(this)
```

### readPin

> 读密码键盘

```js
adaasManager.readPin()
```

### print

> 打印

```js
adaasManager.print("<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Root caption='test'><Setting><Page name='A4(210*297)'><ColInterval>1.84</ColInterval><LineInterval>5.14</LineInterval><PrintBackgroundImage/><CodeTitleFile>DG_convert.dat</CodeTitleFile></Page></Setting><Content><Constant Width='29.9' Height='5.03' Left='10.0' Top='20.0' TextAlign='Align_Left' VerticalAlign='Align_Middle' LineSeparate='5.14' Pos='Absolute'>交易日期</Constant></Content></Root>")
```

### printImg

> 打印图片

```js
adaasManager.readPin(base64)
```

### frontCamera

> 前置摄像头拍照

```js
adaasManager.frontCamera()
```

### backCamera

> 后置摄像头拍照

```js
adaasManager.backCamera()
```

### sign

> pdf加签

```js
adaasManager.sign(pdfPath)
```

### uploadFile

> 上传

```js
adaasManager.uploadFile(base64)
```





<!-- > **调用读卡器**

```js

adaasManager.readMsf('ReadSecondTrace')

```

**参数说明**
| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| Trace | String | ReadSecondTrace\|ReadThirdTrace\|ReadSecondAndThirdTrace |  读磁道 2\|读磁道 3\|读磁道 23|

> **调用密码键盘**

```js

adaasManager.readPin('ReadOnce')

```

**参数说明**
| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| Time | String | ReadOnce\|ReadTwice |  第一次读密码\|第二次读密码|


> **调用打印**

```js

adaasManager.print("<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Root caption='test'><Setting><Page name='A4(210*297)'><ColInterval>1.84</ColInterval><LineInterval>5.14</LineInterval><PrintBackgroundImage/><CodeTitleFile>DG_convert.dat</CodeTitleFile></Page></Setting><Content><Constant Width='29.9' Height='5.03' Left='10.0' Top='20.0' TextAlign='Align_Left' VerticalAlign='Align_Middle' LineSeparate='5.14' Pos='Absolute'>交易日期</Constant></Content></Root>")

```

**参数说明**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| aftContent | String | 打印的内容 | -->
