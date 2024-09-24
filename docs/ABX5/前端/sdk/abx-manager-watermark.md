---
outline: deep
---
# abx-manager-watermark

> abx 内给画面添加水印信息

## 1. 引入
```js
import { watermark } from "abx-manager-watermark"
```
## 2. 使用
### 2.1 showWatermark
传入参数,控制水印生成的范围与水印的内容.

**参数:**
  1. *isShow(Boolean)*: 是否将水印进行显示,默认为 true.
  2. *fillStyle(String)*: 水印所显示的背景颜色,默认为 #ccc.
  3. *container(String)*: 挂载的元素 ID .
  4. *content(String)*: 水印内所显示的字体内容,默认Microsoft Yahei.
  5. *rotate(Number)*: 水印字体的旋转角度,默认45度.
  6. *width(String)*: 水印区域的宽度,默认150px.
  7. *height(String)*: 水印区域的高度,默认100px.
  8. *font(String)*: 水印内显示字体,默认.
  9. *opacity(Number)*: 水印显示的透明度,默认0.5.
  10. *zIndex(Number)*: 生成的水印区域所对应的 zIndex 值,默认9999.
  11. *textAlign(String)*: 水印内字体的对齐方式,默认为center.
  12. *fontSize(Number)*: 水印字体的大小,默认20px.

**返回:**

  无返回值

**示例**
```javascript
  //展示水印
  watermark.showWatermark({
    isShow: true,
    fillStyle: '#ccc',
    container: id,
    content: "我是水印",
    rotate: 40,
    width: '200px',
    height: '150px'
  });
```

### 2.2 clearWatermark
清楚所创建的水印信息

**参数:**
  
  无入参

**返回:**

  无返回值

**示例**
```javascript
  //清除水印
  watermark.clearWatermark();
```








