---
outline: deep
---
# ab-plugin-compatible @兼容操作类组件

## 1. 引入

```js
import { Compatible } from "@agree/ab-plugin-compatible"
```
## 2. 使用

###  2.1 compatibleCreateComposite--兼容模式下创建交易复合容器
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =  await Compatible.compatibleCreateComposite()
return res;
```
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  true代表创建复合容器成功false代表创建复合容器失败  |
-------------------------------------------------------
###  2.2 compatibleUpdateViewFocus--刷新焦点（在兼容模式下交易切换使用）
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =  await Compatible.compatibleCreateComposite(trade,tradeCode);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| trade | any | √  | x |交易    |
| tradeCode | string | √  | x |交易路径    |

-------------------------------------------------------
###  2.3 compatibleOpenTrade--兼容打开交易
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let path  = "EMBED";  //标识ID
let result = await Embed.embeddedDestroy(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| trade | any | √  | x |交易对象    |
| handle | any | √ | x |返回3.0交易的关键要素 |
| tradeCode | string | √ | x |交易码 |
| title | string | √ | x |交易标题 |
| importVarsJson | any | √ | x |交易入参 |

-------------------------------------------------------
###  2.4 compatibleCloseTrade--兼容关闭交易
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleCloseTrade(trade,tradeCode);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| trade | any | √  | x |交易对象    |
| tradeCode | string | √ | x |交易码 |
-------------------------------------------------------
###  2.5 compatibleUpdateTellerInfo--兼容修改柜员信息
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleUpdateTellerInfo(tellerInfo);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tellerInfo | any | √  | x |柜员信息    |

-------------------------------------------------------
###  2.6 compatibleOpen3xConfig--打开3.0外设配置
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleOpen3xConfig();
```
-------------------------------------------------------
###  2.7 compatibleSendMessage--给3.0发送消息
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
await Compatible.compatibleSendMessage(destinationUnitOid,props,app,content)
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| destinationUnitOid | string | √  | x |老oid    |
| props | any | √ | x |消息入参 |
| app | string | √ | x |消息类型 |
| content | any | √ | x |消息内容 |

-------------------------------------------------------
###  2.8 compatibleGetLtsOid--兼容获取老oid
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleGetLtsOid()
```
-------------------------------------------------------

###  2.9 compatibleClearTellerInfo --清空3.0tellerinfo信息
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleClearTellerInfo();
```
--------------------------------------------------------
###  2.10 compatibleHideDomainDialog --兼容隐藏弹窗
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleHideDomainDialog(trade,visible)
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| trade | any | √  | x |交易对象    |
| visible | boolean | √ | x |是否可见 |

-------------------------------------------------------
###  2.11 compatibleOpenTradeWindow --以windows方式打开兼容交易
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
await Compatible.compatibleOpenTradeWindow(tradeCode,title,importVars,style);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tradeCode | string | √  | x |交易码    |
| title | string | √ | x |标题 |
| importVars | any | √ | x |交易入参 |
| style | any | √ | x |风格 |

-------------------------------------------------------
###  2.12 compatibleGetLtsStarted--兼容获取老客户端启动状态
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res =await Compatible.compatibleGetLtsStarted()
```
-------------------------------------------------------
