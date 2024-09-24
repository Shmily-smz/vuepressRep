---
outline: deep
---
# ab-plugin-evs@无纸化操作类

## 1. 引入

```js
import { Evs } from "@agree/ab-plugin-evs";
```

## 2. 使用
###  2.1 evsPrintPdf --打印PDF

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsPrintPdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.2 evsPdfSign --PDF签名

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>


```js
let parameter = ""; 
let res = await Evs.evsPdfSign(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.3 evsGetVectorImg --获取矢量图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>


```js
let parameter = ""; 
let res = await Evs.evsGetVectorImg(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.4 evsAddWatermark --添加水印

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddWatermark(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.5 evsExAttas --拆分附件 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsExAttas(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.6 evsAddAttaToPdf --添加附件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddAttaToPdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.7 evsCreateSeal --生成电子印章

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCreateSeal(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.8 evsCreatePdf --生成电子凭证

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
> <font color ='green' style="font-weight:bold">支持Android渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCreatePdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.9 evsAddImage --添加图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddImage(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.10 evsPrintSeal --打印电子印章

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsPrintSeal(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.11 evsCallFileServer --传输无纸化文件到AFA 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCallFileServer(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.12 evsCreateEContract --生成电子合同 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCreateEContract(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.13 evsCombinePdfs --合并多张PDF
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCombinePdfs(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.14 evsFo2Pdf --FO2PDF

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsFo2Pdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: ``

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| |  |  |

----------------------------------------------------
