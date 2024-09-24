---
outline: deep
---
# ab-plugin-tools@工具类

## 1. 引入

```js
import { Tools } from "@agree/ab-plugin-tools"
```

## 2. 使用

###  2.1 cutFileReadLine --截取正文内容读取文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath="d://a.txt";
let res = await Tools.cutFileReadLine(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 读取的内容信息 |

----------------------------------------------------
###  2.2 openCal --柜面自有：扩展工具（打开计算器）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.openCal();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  2.3 startScreenCap --开始录屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let videoName="luping";
let filePath="d://";
let res = await Tools.startScreenCap(videoName,filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| videoName | string | √ | 生成视频的名称 |
| filePath | string | √ | 生成视频的保存路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息:"交易开始被记录!!!,录屏已经开始." |

----------------------------------------------------
###  2.4 stopScreenCap --停止录屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.stopScreenCap();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息:filepath(成功);"错误操作！！！"(失败) |

----------------------------------------------------
###  2.5 catchScreen --截屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath="d://a.jpg";
let res = await Tools.catchScreen(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 生成图片路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":截图成功 |

----------------------------------------------------
###  2.6 csvToMap --CsvToMap

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let csv="d://a.jpg";
let res = await Tools.csvToMap(csv);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| csv | string | √ | 需要转化得csv |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转化的结果 |

----------------------------------------------------
###  2.7 mapToCsv --mapToCsv

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let map="d://a.jpg";
let res = await Tools.mapToCsv(map);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| map | string | √ | 需要转化得map |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转化的结果 |

----------------------------------------------------
###  2.8 addBorderToImg --addBorderToImg

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let borderPara="d://a.jpg";
let imgPath="d://a.jpg";
let res = await Tools.addBorderToImg(para,imgpath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| borderPara | string | √ | 圈化参数 |
| imgPath | string | √ | 图片路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 新路径 |

----------------------------------------------------
###  2.9 getEhcache --获取缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let key="";
let childkey="";
let locale="";
let res = await Tools.getEhcache(key, childkey, locale);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| key | string | √ | 缓存key |
| childkey | string | √ | 缓存 |
| locale | string | √ | locale |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  2.10 setEhcache --设置缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let key="";
let value="";
let res = await Tools.setEhcache(key, value);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| key | string | √ | 缓存key |
| value | string | √ | 缓缓存value存 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  2.11 createGif --创建gif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId = new Date().getDate() + "_test"; //gifId
this.gifId = gifId; //id号
let delay = 2000; // 每一帧延迟
let quality = 50; // 总质量
let repeat=1;//播放次数，0为循环播放，默认1
try {
  // let res = await Tools.createGif(gifId, delay, quality,repeat);
  let res = await Tools.createGif(gifId, delay, quality);
  console.log(res);
} catch(e) {
  console.log(e);
}
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| delay | int | √ | 每一帧显示时间ms 默认2000 |
| quality | int | √ | 生成质量1-100,越小越好 默认100 |
| repeat | int | X | 播放次数，0为循环播放，默认1 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | gifId |

----------------------------------------------------
###  2.12 addFrameGif --addFrameGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId = this.gifId;
let data = ""; // 这一帧的base64图片，如果没有就截屏且其他参数无效
let scale = 0.8; // 缩放，0-1 默认0.8
let quality = 0.8; // 质量，0-1 默认1.0
let x = undefined; //位置信息，x,y,height,width，不传默认截全屏
let y = undefined; //
let height = undefined; //
let width = undefined; //
let frameId = 123456

try {
  let res = await Tools.addFrameGif(
    gifId,
    data,
    scale,
    quality,
    x,
    y,
    height,
    width,
    frameId
  );
  console.log(res);
} catch (e) {
  console.log(e);
}
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| data | string | √ | data |
| scale | string | √ | 缩放大小，0-1 默认0.8 |
| quality | double | √ | 生成质量 0-1 默认 1 |
| position | int | √ | 位置信息 {x,y,width,height} 均为整数，x,y相对于abc左上角位置 |
| frameId | number | √ | frameId信息(2.0.18版本新增参数) |


- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  2.13 getGif --getGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId = this.gifId; //gifId
let gifFilePath;
if(OsManager.android) {
    gifFilePath = "test4.gif"; // android传带后缀的文件名称
} else {
    gifFilePath = "test4.gif"; // 文件保存路径,从abc根路径开始
}
try {
  let res = await Tools.getGif(gifId, gifFilePath);
  // this.img = "data:image/gif;base64," + res.result;
  console.log(res);
} catch (e) {
  console.log(e);
}
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| gifFilePath | string | √ | 路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | base64字符串 |
| res.path | string | gif存储地址 |

----------------------------------------------------
###  2.14 deleteGif --deleteGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId = this.gifId; //gifId
try {
  let res = await Tools.deleteGif(gifId);
  console.log(res);
} catch (e) {
  console.log(e);
}
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功删除 |

----------------------------------------------------
###  2.15 taskClientCache --定时任务加载缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.taskClientCache();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  2.16 fileToZip1 --压缩文件夹为zip文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let srcDir = "";
let outDir = "";
let res = await Tools.fileToZip1(srcDir,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  2.17 fileToZip2 --压缩文件列表为zip文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePaths = "";
let outDir = "";
let res = await Tools.fileToZip2(filePaths,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  2.18 zipToFile --解压zip文件到指定目录

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let zipFile = "";
let outDir = "";
let res = await Tools.zipToFile(zipFil,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  2.19 startUpExe --启动本地的exe程序

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let exePath = "";
let args = "";
let res = await Tools.startUpExe(exePath,args);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |

----------------------------------------------------
###  2.20 startUpExe --导出ABC当前页面为PDF文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let pdfPath = "";
let landscape = "";
let res = await Tools.capturePDF(exePath,args);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |

----------------------------------------------------
### 2.21 imageCompress --图片压缩

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let sourcefilePath = "";
let targetfilePath = "";
let compressScale = "";
let res = await Tools.imageCompress(
  sourcefilePath,
  targetfilePath,
  compressScale
);
```

- 返回值: `Object`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| sourcefilePath | string | 源文件路径   |
| targetfilePath | string | 目标文件路径 |
| compressScale  | string | 压缩比例     |

----------------------------------------------------
### 2.22 stringToPicture --根据字符串生成指定的防伪图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let width = "130"; // 图片宽
let height = "85"; // 图片高
let fontStr = "黑体"; // 字体
let size = "35"; // 字体大小
let isChangeLine = "true";// 是否换行
let num = "5"; // 每行几个字符
let rate = "1.5"; // 字符间距（倍）
let content = "0123456789"; // 字符内容
let outFile = "D:\\test\\6.png"; // 输出路径
let res = await Tools.stringToPicture(width,height,fontStr,size,isChangeLine,num,rate,content,outFile);
```

- 返回值: `Object`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| result | string | "true"   |

----------------------------------------------------
### 2.23 playWav --播放提示音

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.playWav();
```

- 返回值: `Object`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| result | string | "true"   |

----------------------------------------------------
### 2.24 generateQRCodeImage --根据字符串生成二维码

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let text = "www.baidu.com"; // 将转成二维码图片的内容,字符串
let path = "C://abc/abc.jpg"; // 二维码图片存放的绝对路径
let format = "jpg"; // 图片格式 jpg,png,gif,bmp.jpeg.pnm，和imgName的后缀要一致
let logoPath = "C://abc/logo"; //  需要加入的logo存放的绝对路径 
let imgName = "abc";// 生成的二维码文件名
let height = 50; //  生成图片的高度,整型,单位:像素
let width = 50; //  生成图片的宽度,整型,单位:像素
let res = await Tools.generateQRCodeImage(text, path, format, logoPath, imgName, width, height);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| text | string | √ | 将转成二维码图片的内容,字符串 |
| path | string | √ | 二维码图片存放的绝对路径 |
| format | string | √ | 图片格式 jpg,png,gif,bmp.jpeg.pnm，和imgName的后缀要一致 |
| logoPath | string | √ | 需要加入的logo存放的绝对路径  |
| imgName | string | √ | 生成的二维码文件名 |
| height | number | √ | 生成图片的高度,整型,单位:像素 |
| width | number | √ | 生成图片的宽度,整型,单位:像素 |


- 返回值: `Object`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| result | string | "true"   |

----------------------------------------------------
### 2.25 stringBase64Encode --字符串Base64编码

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let source = "测试"; // 源字符串
let codeset = "GBK"; // 编码集（默认：UTF-8）
let res = await Tools.stringBase64Encode(source, codeset)
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| source | string | √ | 源字符串 |
| codeset | string | × | 自定义编码集（默认：UTF-8） |


- 返回值: `String`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| res | string | 编码后字符串   |

----------------------------------------------------
### 2.26 stringBase64Decode --字符串Base64解码

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let source = "suLK1A=="; // 源字符串
let codeset = "GBK"; // 编码集（默认：UTF-8）
let res = await Tools.stringBase64Decode(source, codeset)
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| source | string | √ | 源字符串 |
| codeset | string | × | 自定义编码集（默认：UTF-8） |


- 返回值: `String`

| 参数           | 类型   | 说明         |
| -------------- | ------ | ------------ |
| res | string | 解码后字符串   |