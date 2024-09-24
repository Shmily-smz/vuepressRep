---
outline: deep
---
# ab-plugin-aft @前端 AFT 类组件

## 1. 引入

```js
import { Aft } from '@agree/ab-plugin-aft'
```

## 2. 使用

### 2.1 printPreviewXmlString --xml 打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let xmlString = `<xml?XXXXXX>` //打印xml入参
let res = await Aft.printPreviewXmlString(xmlString)
```

- 参数列表:

| 参数      | 类型   | 必填参数 | 默认值 | 说明                |
| --------- | ------ | -------- | ------ | ------------------- |
| xmlString | string | √        | x      | 打印 xml 字符串入参 |

- 返回值: `Object`

| 参数       | 类型   | 说明           |
| ---------- | ------ | -------------- |
| res.result | string | 预览页面的 url |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printPreviewXmlString(xmlString)</font>

---

### 2.2 printWordPreview --word 打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'd://test.docx' //word文件路径
let res = await Aft.printWordPreview(path)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 默认值 | 说明          |
| ---- | ------ | -------- | ------ | ------------- |
| path | string | √        | x      | word 文件路径 |

- 返回值: `Object`

| 参数       | 类型   | 说明   |
| ---------- | ------ | ------ |
| res.result | string | "true" |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printWordPreview(path)</font>

---

### 2.3 printExcelPreview --excel 打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'd://test.xlsx' //excel文件路径
let res = await Aft.printExcelPreview(path)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 默认值 | 说明           |
| ---- | ------ | -------- | ------ | -------------- |
| path | string | √        | x      | excel 文件路径 |

- 返回值: `Object`

| 参数       | 类型   | 说明   |
| ---------- | ------ | ------ |
| res.result | string | "true" |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printExcelPreview(path)</font>

---

### 2.4 parseAft --解析 aft 文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = 'www/test.aft' //aft资源文件路径
let map = {
  account: '1,230.00',
  text: 'test',
  namelist: [
    {
      name: 'hg',
      sexual: 'male',
      age: '29'
    },
    {
      name: 'ly',
      sexual: 'famle',
      age: '18'
    }
  ],
  huangguan: ['123', '456'],
  male: ['nan', 'nv', 'other']
} //映射mapping
let controlParam = {
  notRepeatPrintHeaderFooter: '6,10'
} //打印配置，详细请参考打印文件aft说明
let result = await Aft.parseAft(path, map, controlParam)
```

- 参数列表:

| 参数         | 类型   | 必填参数 | 默认值 | 说明                                  |
| ------------ | ------ | -------- | ------ | ------------------------------------- |
| path         | string | √        | x      | aft 资源文件路径                      |
| map          | obj    | √        | x      | 映射 mapping                          |
| controlParam | obj    | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |

- 返回值: `Object`

| 参数                | 类型   | 说明                |
| ------------------- | ------ | ------------------- |
| res.transferContent | string | 解析后的 xml 字符串 |
| res.totalHeight     | string | 解析后 xml 的高度   |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.parseAft(path, map, controlParam)</font>

---

### 2.5 parseMultiPageAft --解析循环打印文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = '/www/FCClient/print/1/T00401017.aft' //aft资源文件路径
let map = {
  ORG_NUM: '12',
  ORG_NO: '34',
  PRT_DT: '2019-09',
  data: {
    //[序号，扣款日期，待报解账户，批次号，证件号码，姓名，扣款账号，扣款金额，扣款结果]
    tablePrintSerach_Id: [
      ['1', '20200518', '371342289', '23023'],
      ['2', '20200519', '222222223', '234023'],
      ['3', '20200511', '2122222313', '23423'],
      ['4', '20200512', '2132222122', '23423'],
      ['5', '20200513', '213222222', '23'],
      ['6', '20200514', '213222214', '2023'],
      ['7', '20200515', '2132222412', '234223'],
      ['8', '20200516', '212222342', '2343'],
      ['9', '20200516', '212222342', '2343'],
      ['0', '20200516', '212222342', '2343']
    ]
  }
} //映射mapping
let para = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //打印配置，详细请参考打印文件aft说明
let prtRes = await Aft.parseMultiPageAft(path, map, para)
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 默认值 | 说明                                  |
| ---- | ------ | -------- | ------ | ------------------------------------- |
| path | string | √        | x      | aft 资源文件路径                      |
| map  | obj    | √        | x      | 映射 mapping                          |
| para | obj    | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |

- 返回值: `Object`

| 参数       | 类型  | 说明                    |
| ---------- | ----- | ----------------------- |
| res.result | array | 解析后的 xml 字符串数组 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.parseMultiPageAft(path, map, para)</font>

---

### 2.6 combineAndClipAft --拼接并分割已解析好的 aft 字符串，合并多个利用 ParseAftCommandHandler 解析出的 Xml 字符串.根据参数切割并返回可供打印的 xml 字符串 List

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let aftXmls = this.prtlist //解析好的aft字符串List 必输
let gaps = ['2', '2', '2'] //合并时每页面之间域的间距List 必输
let insertElemMarginTop = '15' //insertXml插入新页时距离顶部的偏移量 undefined时视作0
let insertElemMarginBottom = '5' //insertXml插入新页时底部距离下一field的偏移量,insertXml为空时可视作页面顶部偏移量 必输
let insertXml = this.head //每次换页时在头部插入的aft Xml String,可以为null
let clipThreshold = '250' //切割切割限制,合并时位置超出此高度的域会被加入下页的大小
let result = await Aft.combineAndClipAft(aftXmls, gaps, insertElemMarginTop, insertElemMarginBottom, insertXml, clipThreshold)
```

- 参数列表:

| 参数                   | 类型   | 必填参数 | 默认值 | 说明                                                    |
| ---------------------- | ------ | -------- | ------ | ------------------------------------------------------- |
| aftXmls                | list   | √        | x      | 解析好的 aft 字符串 List                                |
| gaps                   | list   | √        | x      | 合并时每页面之间域的间距 List                           |
| insertElemMarginTop    | string | x        | x      | insertXml 插入新页时距离顶部的偏移量                    |
| insertElemMarginBottom | string | √        | x      | insertXml 插入新页时底部距离下一 field 的偏移量         |
| insertXml              | string | x        | x      | 每次换页时在头部插入的 aft                              |
| clipThreshold          | string | √        | x      | 切割切割限制,合并时位置超出此高度的域会被加入下页的大小 |

- 返回值: `Object`

| 参数       | 类型  | 说明                    |
| ---------- | ----- | ----------------------- |
| res.result | array | 解析后的 xml 字符串数组 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAndClipAft(aftXmls, gaps, insertElemMarginTop, insertElemMarginBottom, insertXml, clipThreshold)</font>

---

### 2.7 combineAftWithHeadAndTail --拼接 Aft 包含头和尾

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let head = this.head //解析后的xml字符串
let tail = this.tail //解析后的xml字符串
let aftXmls = this.prtlist //解析后的xml字符串数组
let offsets = [
  ['10', '0'],
  ['10', '0'],
  ['10', '0']
]
let pageTop = '10.0'
let pageBottom = '250.0'
let gap = '10.0'
let result = await Aft.combineAftWithHeadAndTail(aftXmls, head, tail, offsets, pageTop, pageBottom, gap)
```

- 参数列表:

| 参数       | 类型   | 必填参数 | 默认值 | 说明                                            |
| ---------- | ------ | -------- | ------ | ----------------------------------------------- |
| aftXmls    | list   | √        | x      | 解析后的 xml 字符串数组                         |
| head       | string | √        | x      | 解析后的 xml 字符串                             |
| tail       | string | √        | x      | 解析后的 xml 字符串                             |
| offsets    | array  | √        | x      | insertXml 插入新页时底部距离下一 field 的偏移量 |
| pageTop    | string | √        | x      | 距离头部的距离                                  |
| pageBottom | string | √        | x      | 距离底部的距离                                  |
| gap        | string | √        | x      | 暂时未知                                        |

- 返回值: `Object`

| 参数       | 类型  | 说明                    |
| ---------- | ----- | ----------------------- |
| res.result | array | 解析后的 xml 字符串数组 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAftWithHeadAndTail(aftXmls,head,tail,offsets,pageTop,pageBottom,gap)</font>

---

### 2.8 combineAft --拼接 Aft 字符串

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let aftPaths = ['/www/FCClient/print/1/T00401017.aft', '/www/FCClient/print/1/T00401018.aft'] //aft资源文件路径数组
let mapping = {
  ORG_NUM: '12',
  ORG_NO: '34',
  PRT_DT: '2019-09'
} //映射mapping
let controlParams = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //打印配置，详细请参考打印文件aft说明
let bodyOffsetTop = '10'
let tailOffsetTop = '10'
let res = await Aft.combineAft(aftPaths, mapping, controlParams, bodyOffsetTop, tailOffsetTop)
```

- 参数列表:

| 参数          | 类型   | 必填参数 | 默认值 | 说明                                  |
| ------------- | ------ | -------- | ------ | ------------------------------------- |
| aftPaths      | array  | √        | x      | aft 资源文件路径数组                  |
| mapping       | map    | √        | x      | 映射 mapping                          |
| controlParams | map    | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |
| bodyOffsetTop | string | √        | x      | body 距离头部的距离                   |
| tailOffsetTop | string | √        | x      | 底部到头部的距离                      |

- 返回值: `Object`

| 参数       | 类型   | 说明                |
| ---------- | ------ | ------------------- |
| res.result | string | 解析后的 xml 字符串 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAft(aftPaths,mapping,controlParams,bodyOffsetTop,tailOffsetTop)</font>

---

### 2.9 aftToPdf --aft 转换为 pdf （壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath = 'D://test.aft' //aft文件路径 相对路径
let pdfPath = 'D://test.pdf' //pdf文件路径 绝对路径
let mapping = { ORG_NUM: '12', ORG_NO: '34', PRT_DT: '2019-09' } //所有文本框的赋值
let controlParams = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //打印配置，详细请参考打印文件aft说明
let waterMarkName = '' //水印值
let font = '' //水印字体大小
let res = await Aft.aftToPdf(aftPath, pdfPath, mapping, controlParams, waterMarkName, font)
```

| 参数          | 类型 | 必填参数 | 默认值 | 说明                                  |
| ------------- | ---- | -------- | ------ | ------------------------------------- |
| aftPath       | any  | √        | x      | aft 文件路径                          |
| pdfPath       | any  | √        | x      | pdf 文件路径                          |
| mapping       | any  | √        | x      | 所有文本框的赋值                      |
| controlParams | any  | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |
| waterMarkName | any  | √        | x      | 水印值                                |
| font          | any  | √        | x      | 水印字体大小                          |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.aftToPdf(aftPath,pdfPath,mapping,controlParams,waterMarkName,font)</font>

---

### 2.10 looperAftToPdf --循环打印 PDF（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath = 'D://test.aft' //aft文件路径 相对路径
let pdfPath = 'D://test.pdf' //pdf文件路径 绝对路径
let jointString = '' //一页中aft的数量，false确认一页一个
let mapping = { ORG_NUM: '12', ORG_NO: '34', PRT_DT: '2019-09' } //所有文本框的赋值
let controlParams = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //打印配置，详细请参考打印文件aft说明
let waterMarkName = '' //水印值
let font = '' //水印字体大小
let res = await Aft.looperAftToPdf(aftPath, pdfPath, jointString, mapping, controlParams, waterMarkName, font)
```

| 参数          | 类型 | 必填参数 | 默认值 | 说明                                  |
| ------------- | ---- | -------- | ------ | ------------------------------------- |
| aftPath       | any  | √        | x      | aft 文件路径                          |
| pdfPath       | any  | √        | x      | pdf 文件路径                          |
| jointString   | any  | √        | x      | 一页中 aft 的数量，false 确认一页一个 |
| mapping       | any  | √        | x      | 所有文本框的赋值                      |
| controlParams | any  | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |
| waterMarkName | any  | √        | x      | 水印值                                |
| font          | any  | √        | x      | 水印字体大小                          |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.looperAftToPdf(aftPath,pdfPath,jointString,mapping,controlParams,waterMarkName,font)</font>

---

### 2.11 selectDirector --选择文件夹目录（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let mkdirOrGet = '' //文件夹目录判断变量 mkdir 打开弹窗 get 返回路径
let result = await Aft.selectDirector(mkdirOrGet)
```

| 参数       | 类型   | 必填参数 | 默认值 | 说明               |
| ---------- | ------ | -------- | ------ | ------------------ |
| mkdirOrGet | string | √        | x      | 文件夹目录判断变量 |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.selectDirector(mkdirOrGet)</font>

---

### 2.12 concatAft --合并 aft（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftList = ['/www/FCClient/print/1/T00401017.aft', '/www/FCClient/print/1/T00401018.aft'] //所有aft文件路径 相对路径
let pdfString = 'D://test.pdf' //pdf文件路径 绝对路径
let mapping = { ORG_NUM: '12', ORG_NO: '34', PRT_DT: '2019-09' } //所以文本框的赋值 list<map>
let controlParams = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //打印配置，详细请参考打印文件aft说明
let waterMarkName = '' //水印值
let font = '' //水印字体大小
let result = await Aft.concatAft(aftList, pdfString, mapping, controlParams, waterMarkName, font)
```

| 参数          | 类型   | 必填参数 | 默认值 | 说明                                  |
| ------------- | ------ | -------- | ------ | ------------------------------------- |
| aftList       | list   | √        | x      | 所有 aft 文件路径                     |
| pdfString     | string | √        | x      | pdf 文件路径                          |
| mapping       | map    | √        | x      | 所有文本框的赋值                      |
| controlParams | map    | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |
| waterMarkName | string | √        | x      | 水印值                                |
| font          | string | √        | x      | 水印字体大小                          |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.concatAft(aftList,pdfString,mapping,controlParams,waterMarkName,font)</font>

---

### 2.13 looperAddPicture --Aft 中按需求添加图片（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath = 'D://test.aft' //本体表单的aft路径，图片的aft路径
let pdfPath = 'D://test.pdf' //pdf文件路径 绝对路径
let mapping = { ORG_NUM: '12', ORG_NO: '34', PRT_DT: '2019-09' } //所有文本框的赋值 list<map>
let ImgSrcKey = '' //图片src的值
let controlParams = {
  //控制分页有两种参数
  // notRepeatPrintHeaderFooter: "6,10",
  TableRowNumOfPage: '34',
  TableColWidth: ['30', '30', '30', '30']
} //Map<String, Object>
let waterMarkName = '' //水印值
let font = '' //水印字体大小
let result = await Aft.looperAddPicture(aftPath, pdfPath, mapping, ImgSrcKey, controlParams, waterMarkName, font)
```

| 参数          | 类型   | 必填参数 | 默认值 | 说明                                  |
| ------------- | ------ | -------- | ------ | ------------------------------------- |
| aftPath       | list   | √        | x      | 本体表单的 aft 路径，图片的 aft 路径  |
| pdfPath       | string | √        | x      | pdf 文件路径                          |
| mapping       | map    | √        | x      | 所有文本框的赋值                      |
| ImgSrcKey     | map    | √        | x      | 图片 src 的值                         |
| controlParams | map    | √        | x      | 打印配置，详细请参考打印文件 aft 说明 |
| waterMarkName | string | √        | x      | 水印值                                |
| font          | string | √        | x      | 水印字体大小                          |

- 返回值: `Object`

| 参数       | 类型   | 说明     |
| ---------- | ------ | -------- |
| res.result | string | 暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.looperAddPicture(aftPath,pdfPath,mapping,ImgSrcKey,controlParams,waterMarkName,font)</font>

---

### 2.14 printTable --通用表格打印（不带线）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let dataList = [
  ['柜员号', '身份证号码', '柜员类型', '库管员标志', '现金业务类型'],
  ['002001', '371481198303070032', 'A', 'N-否', 'Y-是'],
  ['002002', '371481198303070032', '1-一般柜员', 'Y-是', 'Y-是']
] //表格数据
let encoding = 'GBK' //字符编码
let separator = '  ' //单元要素分隔符
let columnLenList = '' //单元格宽度List
let endWithSeparator = '*' //结束符
let flushRight = true //是否右对齐 是true 否false
let maxLength = 100 //单行最大长度
let data = 'hello world' //额外要素内容
let result = await Aft.printTable(dataList, encoding, separator, columnLenList, endWithSeparator, flushRight, maxLength, data)
```

| 参数             | 类型    | 必填参数 | 默认值 | 说明            |
| ---------------- | ------- | -------- | ------ | --------------- |
| dataList         | list    | √        | x      | 表格数据        |
| encoding         | string  | √        | x      | 字符编码        |
| separator        | string  | √        | x      | 单元要素分隔符  |
| columnLenList    | string  | √        | x      | 单元格宽度 List |
| endWithSeparator | string  | √        | x      | 结束符          |
| flushRight       | bollean | √        | x      | 是否右对齐      |
| maxLength        | number  | √        | x      | 单行最大长度    |
| data             | string  | √        | x      | 额外要素内容    |

- 返回值: `Object`

| 参数       | 类型   | 说明                |
| ---------- | ------ | ------------------- |
| res.result | string | 解析后的 xml 字符串 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printTable(dataList, encoding, separator, columnLenList, endWithSeparator, flushRight, maxLength, data)</font>

---

### 2.15 printTableWithLine --通用表格打印（带线）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = '/www/FCClient/print/1/T00501003.aft' //aft资源文件路径
let map = {
  //变量数据
  USER_NAME: '用户名称',
  TOTL_STKCNT: '总笔数',
  TOTL_AMT: '总金额',
  SUCC_STKCNT: '成功笔数',
  FAIL_STKCNT: '失败笔数',
  SUCC_TOTL_AMT: '成功金额',
  FAIL_TOTL_AMT: '失败金额',
  SerialNum1: '0',
  //表格数据
  data: {
    //表格ID
    WaterTable: [
      //[序号，缴费日期，欠费金额，违约金，实缴金额，渠道，状态]
      ['1', '20200518', '371342289', '2302', '32243', '线上', '1'],
      ['2', '20200519', '222222223', '2340', '43243', '线上', '1'],
      ['3', '20200511', '212222231', '2342', '43243', '线上', '1'],
      ['4', '20200512', '213222212', '2342', '43243', '线上', '1'],
      ['5', '20200513', '213222222', '2389', '43243', '线上', '1'],
      ['6', '20200514', '213222214', '2023', '43243', '线上', '1']
    ]
  }
} //映射mapping
let controlParam = {
  TableRowNumOfPage: 24
  // TableColWidth:[24,24,24,24,24,24,24]
} //打印配置，详细请参考打印文件aft说明
let ret = await Aft.printTableWithLine(path, map, controlParam)
```

| 参数         | 类型   | 必填参数 | 默认值 | 说明          |
| ------------ | ------ | -------- | ------ | ------------- |
| path         | list   | √        | x      | 通用 aft 路径 |
| map          | string | √        | x      | 数据映射关系  |
| controlParam | string | √        | x      | 配置参数      |

- 返回值: `Object`

| 参数       | 类型  | 说明                    |
| ---------- | ----- | ----------------------- |
| res.result | array | 解析后的 xml 字符串数组 |

> <font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printTableWithLine(path,map,data,colWidth,controlParam)</font>

---

### 2.16 printAftWindows --打印 AFTwindows 方式

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let AftContentList = ['', ''] //需要打印的AFT解析后的xml数组
let ImagesList = [null] //需要打印的解析后的xml数组带图片的
let PrinterName = '' //打印机名称，不传默认打印机
let PaperSize = '210,297' //纸张大小
let ShowConfigWindow = true //是否显示打印提示框
let HorizontalOffset = '0' //水平偏移数值
let VerticalOffset = '0' //纵向偏移数值
let ret = await Aft.printAftWindows(AftContentList, ImagesList, PrinterName, PaperSize, ShowConfigWindow, HorizontalOffset, VerticalOffset)
```

| 参数             | 类型          | 必填参数 | 默认值 | 说明                                |
| ---------------- | ------------- | -------- | ------ | ----------------------------------- |
| AftContentList   | Array[string] | √        | x      | 需要打印的 AFT 解析后的 xml 数组    |
| ImagesList       | Array[obj]    | √        | x      | 需要打印的解析后的 xml 数组带图片的 |
| PrinterName      | string        | √        | x      | 打印机名称，不传默认打印机          |
| PaperSize        | string        | √        | x      | 纸张大小                            |
| ShowConfigWindow | boolean       | √        | x      | 是否显示打印提示框                  |
| HorizontalOffset | string        | √        | x      | 水平偏移数值                        |
| VerticalOffset   | string        | √        | x      | 纵向偏移数值                        |

- 返回值: `Object`

| 参数       | 类型   | 说明             |
| ---------- | ------ | ---------------- |
| res.result | string | success 成功标识 |

> <font color ='red' style="font-weight:bold"></font>

---
