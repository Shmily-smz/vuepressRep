---
outline: deep
---
# ab-plugin-embed @前端内嵌类组件

## 1. 引入

```js
import { CefBrowser } from "@agree/ab-plugin-embed"
import { MfcIe } from "@agree/ab-plugin-embed"
import { OleIe } from "@agree/ab-plugin-embed"
import { OleFrame } from "@agree/ab-plugin-embed"
import { MfcOcx } from "@agree/ab-plugin-embed"
import { Embed } from "@agree/ab-plugin-embed"
```
## 2. 使用

Embed
--------------------------------------------------------
###  2.1 creatEmbedFrame --76版创建内嵌画面
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = ''+this.pub;
let intersectionSize = { 
        x: 50, 
        y: 120, 
        w: 1500, 
        h: 500 
      };
let actualSize = { 
        x: 50, 
        y: 120, 
        w: 1500, 
        h: 500 
      };
let path  = "EMBED";
let actualSize2 = JSON.stringify(actualSize);
let intersectionSize2 = JSON.stringify(intersectionSize);
let result = await Embed.creatEmbedFrame(handle,path,intersectionSize2,actualSize2);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| intersectionSize | string |  √  | x |内嵌形成的外围画布的坐标和大小 |
| actualSize| string | √  | x |内嵌的窗体的坐标和大小    |
| path| string | √  | x |内嵌对象的标识ID    |
| handle| string | √  | x |需要内嵌的窗口的句柄    |
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  true代表内嵌成功false代表内嵌失败  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.creatEmbedFrame(handle,path,intersectionSize2,actualSize2)</font>
-------------------------------------------------------
###  2.2 embeddedRefresh --刷新内嵌画面的大小和位置
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let intersectionSize = { 
        x: 50, 
        y: 120, 
        w: 1500, 
        h: 500 
      };
let actualSize = { 
        x: 50, 
        y: 120, 
        w: 1500, 
        h: 500 
      };
let path  = "EMBED";
let actualSize2 = JSON.stringify(actualSize);
let intersectionSize2 = JSON.stringify(intersectionSize);
let result = await Embed.embeddedRefresh(path,intersectionSize2,actualSize2);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| intersectionSize | string | √  | x |内嵌形成的外围画布的坐标和大小    |
| actualSize| string | √  | x |内嵌的窗体的坐标和大小    |
| path| string | √  | x |内嵌对象的标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  内嵌画面刷新的返回值  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedRefresh(path,intersectionSize2,actualSize2)</font>
-------------------------------------------------------
###  2.3 embeddedDestroy --销毁指定的内嵌画面
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let path  = "EMBED";  //标识ID
let result = await Embed.embeddedDestroy(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path | string | √  | x |内嵌对象的标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  success代表销毁成功，fail代表销毁失败。  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedDestroy(path)</font>
-------------------------------------------------------
###  2.4 embeddedVisible --显示指定内嵌画面
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let path  = "EMBED";
let result = await Embed.embeddedVisible(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path | string | √  | x |内嵌对象的标识ID    |
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  显示内嵌画面的返回值  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedVisible(path)</font>
-------------------------------------------------------
###  2.5 embedVisibleScreenshot --隐藏对应的内嵌画面
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let path  = "EMBED";  
let visible = true; 
let result = await Embed.embedVisibleScreenshot(path,visible);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path | string | √  | x |内嵌对象的标识ID    |
| visible | Boolean | √  | x |是否需要返回内嵌画面截图的base64字符串    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  执行结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embedVisibleScreenshot(path,visible)</font>
-------------------------------------------------------
###  2.6 getVisibleStatus --获取内嵌窗体的状态
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let path  = "EMBED";  //标识ID
let result = await Embed.getVisibleStatus(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path | string | √  | x |内嵌对象的标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  执行结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK:EMBED.getVisibleStatus(path)</font>
-------------------------------------------------------
###  2.7 HideWindow --隐藏传入句柄对应的窗口
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle  = "00020808"; 
let result = await Embed.HideWindow(handle);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | string | √  | x |窗口的句柄    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  执行结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK:  EMBED.HideWindow(handle)</font>
-------------------------------------------------------
###  2.8 screenShoot --内嵌截图
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id  = "EMBED";  //内嵌对象的标识ID
let result = await Embed.screenShoot(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |内嵌对象的标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  执行结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK:  EMBED.screenShoot(id)</font>
-------------------------------------------------------

MfcIe

###  2.9 init --发送请求初始化
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";
let res = await MfcIe.initMfcIE(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功标识  |
| res.msg| string |  返回句柄  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.initMfcIE(id)</font>
--------------------------------------------------------
###  2.10 refreshUrl --网页刷新
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";
let res = await MfcIe.refreshUrl(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.refreshUrl(id)</font>
-------------------------------------------------------
###  2.11 getLocationURL --获取当前浏览器url地址
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";
let res = await MfcIe.getLocationURL(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功标识  |
| res.msg| string |  返回url地址  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.getLocationURL(id)</font>
-------------------------------------------------------
###  2.12 setSilent --设置ie是否禁用警告窗口
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let silent = true;  //是否禁用标识S
let res = await MfcIe.setSilent(id,silent);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| silent| string | √  | x |是否禁用标识S    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK:MFC_IE.setSilent(id,silent)</font>
-------------------------------------------------------
###  2.13 setUrl --设置ie浏览器地址
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let url = "http://www.baidu.com/";  //访问地址
let res = await MfcIe.setUrl(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| url| string | √  | x |访问地址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.setUrl(id,url)</font>
-------------------------------------------------------
###  2.14 execute --执行浏览器脚本
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let script = `document.getElementById('username').value='${this.username}';document.getElementById('userTypePwd').value='${this.password}';`;   //执行script脚本
let res = await MfcIe.execute(id,script);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| script| string | √  | x |执行script脚本    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.execute(id,script)</font>
-------------------------------------------------------
###  2.15 finish --执行销毁浏览器 注意：不允许在vue beforeDestroy中使用
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let res = await MfcIe.finish(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.finish(id)</font>
-------------------------------------------------------
###  2.16 delay_finish --延迟执行销毁浏览器 注意：不允许在vue beforeDestroy中使用
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let delayTime = 1000; //延时时间(毫秒)
let res = await MfcIe.delay_finish(id,delayTime);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| delayTime| int | √  | x |延时时间(毫秒)    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.delay_finish(id,delayTime)</font>
-------------------------------------------------------
###  2.17 setValue --为浏览器中某个dom对象设置值
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let componentId = "MFC_IE";  //当前内嵌组件id
let id = "username"; //浏览器内操作dom元素的id
let value ="wang";  //浏览器内操作dom元素的value值
let res = await MfcIe.setValue(componentId,id,value);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |浏览器内操作dom元素的id    |
| componentId| string | √  | x |当前内嵌组件id   |
| value| string | √  | x |浏览器内操作dom元素的value值   |
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.setValue(componentId,id,value)</font>
-------------------------------------------------------
###  2.18 submit --浏览器中提交表单
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let formName = "login";  //浏览器内操作表单的dom元素名称
let res = await  MfcIe.submit(id,formName);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| formName| string | √  | x |浏览器内操作表单的dom元素名称    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.submit(id,formName)</font>
-------------------------------------------------------
###  2.19 submitById --根据浏览器中提交表单提交按钮dom-id来触发表单提交
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let formId = "test";  //浏览器内操作表单的dom元素Id
let res = await  MfcIe.submitById(id,formId);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| formId| string | √  | x |浏览器内操作表单的dom元素Id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.submitById(id,formId)</font>
-------------------------------------------------------
###  2.20 getHtml --获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_IE";  //当前内嵌组件id
let res = await MfcIe.getHtml(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  success成功标识  |
| res.htmlScript| string |  html的base64字符串  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.getHtml(id)</font>
-------------------------------------------------------

OleIe

###  2.21 init --OLE_IE初始化
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let res = await OleIe.init(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  获取到的handle  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.init(id)</font>
-------------------------------------------------------
###  2.22 setUrl --给浏览器设置url地址
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let url = "http://www.baidu.com/" //url地址
let res = await OleIe.setUrl(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| url| string | √  | x |设置的网址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识true字符串  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.setUrl(id,url)</font>
-------------------------------------------------------
###  2.23 execute --OLE_IE执行浏览器脚本
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";
let script = `document.getElementById('username').value='${this.username}';document.getElementById('userTypePwd').value='${this.password}';`;
let res = await OleIe.execute(id,script);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| script| string | √  | x |脚本命令    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.execute(id,script)</font>
-------------------------------------------------------
###  2.24 finish --OLE_IE执行销毁浏览器
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";
let res = await OleIe.finish(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.finish(id)</font>
-------------------------------------------------------
###  2.25 delay_finish --OLE_IE延迟执行销毁浏览器
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let delayTime = 1000; //延时时间(毫秒)
let res = await OleIe.delay_finish(id,delayTime);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| delayTime| int | √  | x |延迟时间    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识true或false  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.delay_finish(id,delayTime)</font>
-------------------------------------------------------
###  2.26 setValue --OLE_IE为浏览器中某个dom对象设置值
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let componentId = "OLE_IE";  //当前内嵌组件id
let id = "username"; //浏览器内操作dom元素的id
let value ="wang";  //浏览器内操作dom元素的value值
let res = await OleIe.setValue(componentId,id,value);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| componentId| string | √  | x |电脑标识ID    |
| value| string | √  | x |value值    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.setValue(componentId,id,value)</font>
-------------------------------------------------------
###  2.27 submit --OLE_IE浏览器中提交表单
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";
let formName = "login";
let res = await OleIe.submit(id,formName);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| formName| string | √  | x |浏览器内操作表单的dom元素名称    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.submit(id,formName)</font>
-------------------------------------------------------
###  2.28 submitById --OLE_IE根据浏览器中提交表单提交按钮dom-id来触发表单提交
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";
let formId = "test";
let res = await OleIe.submitById(id,formId);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| formId | string | √  | x |浏览器内操作表单的dom元素Id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.submitById(id,formId)</font>
-------------------------------------------------------
###  2.29 doLogin --OLE_IE浏览器登录操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let url = "mail.agree.com.cn"; //登录url路径
let res = await OleIe.doLogin(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| url| string | √  | x |设置的网址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回信息 |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.doLogin(id,url)</font>
-------------------------------------------------------
###  2.30 doLogout --OLE_IE浏览器登出操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let url = "mail.agree.com.cn"; //退出url路径
let res = await OleIe.doLogout(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |
| url| string | √  | x |设置的网址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.doLogout(id,url)</font>
-------------------------------------------------------
###  2.31 getHtml --OLE_IE获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_IE";  //当前内嵌组件id
let res = await OleIe.getHtml(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功标识  |
| res.htmlScript| string |  html脚本  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.getHtml(id)</font>
-------------------------------------------------------

OleFrame

###  2.32 init --oleFrame初始化操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_Frame"; 
let res = await OleFrame.init(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  获取到的handle  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.init(id)</font>
-------------------------------------------------------
###  2.33 dispose --oleFrame销毁操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_Frame"; 
let res = await OleFrame.dispose(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.dispose(id)</font>
-------------------------------------------------------
###  2.34 openFile --打开文件
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_Frame";
let filePath = 'C:/Users/CrownHwang/Desktop/test.docx'
let res = await OleFrame.openFile(id,filePath);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| filePath| string | √  | x |文件路径    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.openFile</font>
-------------------------------------------------------
###  2.35 searchWords --查找文字
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "OLE_Frame";  //当前内嵌组件id
let words = 'hello'
let res = await OleFrame.searchWords(id,words)
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | string | √  | x |标识id    |
| words| string | √  | x |查找的文字    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.searchWords</font>
-------------------------------------------------------

MfcOcx

###  2.36 init --MFC_OCX初始化操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id = "MFC_OCX";  //当前内嵌组件id
let res = await MfcOcx.init(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id | String | √  | x |标识ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回handle结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.init(id)</font>
-------------------------------------------------------
###  2.37 finish --MFC_OCX销毁操作
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res = await MfcOcx.finish();
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| 无 | 无 | x  | x |无    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无| 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.finish()</font>
-------------------------------------------------------
###  2.38 retMsg --有返回值，发送信息。
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let param = "";  //对应的参数
let res = await MfcOcx.retMsg(param);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| param | string | √  | x |请求参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  执行结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.retMsg(param)</font>
-------------------------------------------------------
###  2.39 noRetMsg --无返回值，发送信息。
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let param = "";  //对应的参数
let res = await MfcOcx.noRetMsg(param);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| param | string | √ | x |请求参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.noRetMsg(param)</font>
-------------------------------------------------------

CefBrowser

###  2.40 createCefBrowserHandle --创建cef并返回句柄
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let tradeId = this.$getTradeId();  // 标识ID
let res = await CefBrowser.createCefBrowserHandle(tradeId);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tradeId | String | x  | x |标识ID    |
| isLstOpen | String | x | x | 是否监听url的打开和关闭|

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回handle结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.createCefBrowserHandle(tradeId)</font>
-------------------------------------------------------

###  2.41 cefBrowserSetUrl --设置cef打开的url
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = '123';  // 句柄
let url = 'https://www.baidu.com/'
let res = await CefBrowser.cefBrowserSetUrl(handle, url);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | String | ✔  | x |需要设置的窗口的句柄    |
| url | String | ✔ | x | 需要设置的url|

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserSetUrl(handle, url)</font>
-------------------------------------------------------

###  2.42 cefBrowserGetUrl --获取cef打开的url
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = '123';  // 句柄
let res = await CefBrowser.cefBrowserGetUrl(handle);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | String | ✔  | x |需要获取url的窗口的句柄    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回url结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserGetUrl(handle)</font>
-------------------------------------------------------

###  2.43 cefBrowserClose --关闭cef
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = '123';  // 句柄
let res = await CefBrowser.cefBrowserClose(handle);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | String | ✔  | x |需要关闭的窗口的句柄   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserClose(handle)</font>
-------------------------------------------------------

###  2.44 cefBrowserSyncExecuteScript --cef执行脚本
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = '123';  // 句柄
let script = 'window.open("https://www.baidu.com/")'
let res = await CefBrowser.cefBrowserSyncExecuteScript(handle, script);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | String | ✔  | x | 需要执行脚本的窗口的句柄   |
| script | String | ✔ | x | 执行的脚本内容|

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserSyncExecuteScript(handle, script)</font>
-------------------------------------------------------

###  2.45 cefBrowserAsyncExecuteScript --cef执行脚本
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let handle = '123';  // 句柄
let script = 'window.open("https://www.baidu.com/")'
let res = await CefBrowser.cefBrowserAsyncExecuteScript(handle, script);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| handle | String | ✔  | x | 需要执行脚本的窗口的句柄   |
| script | String | ✔ | x | 执行的脚本内容|

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回结果  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserAsyncExecuteScript(handle, script)</font>
-------------------------------------------------------