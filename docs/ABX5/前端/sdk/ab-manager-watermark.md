---
outline: deep
---
# ab-manager-watermark@增加水印

用于给页面增加水印信息

## 1. 引入
```js
import { watermarkManager } from "@agree/ab-manager-watermark"
```

## 2. 使用
```js
  //展示水印
  watermarkManager.showWatermark({
    transparency:0.5,
    fontSize:14,
    text:'测试信息',
    el:this.$el
  })
  //清除水印
  watermarkManager.clearWatermark(this.$el)
```

## 3. 参数
### 3.1 showWatermark方法参数

| 参数 | 类型 | 说明 |默认值
| -------- | --- | --- | --- |
| transparency | number | 水印透明度 | 0.5 |
| fontSize | number | 水印字体大小 | 14 |
| text | string | 水印内容(可以通过\<br\>对内容进行换行) | 水印测试 |
| el | HTMLElement | 展示水印的区域 | document.body |
| width | number | 水印展示区域宽 | - |
| height | number | 水印展示区域高 | - |
### 3.2 clearWatermark方法参数

| 参数 | 类型 | 说明 |默认值
| -------- | --- | --- | --- |
| el | HTMLElement | 清除水印的区域 | document.body |







