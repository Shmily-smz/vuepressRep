---
outline: deep
---
# abx-layer

> abx 内各处需要显示信息的弹窗处理
## 1. 引入
``` javascript
// 若已加载 abx 资源,则无需引入,直接使用即可.
import 'abx-layer'
```
## 2. 使用
### 2.1 showError

**参数**

  1. *message(String)*: 错误信息
  2. *retry(Function)*: 重试所执行的方法
  3. *cancel(Function)*: 关闭所执行的方法
  4. *cancelText(String)*: 关闭按钮内的文字
  5. *retryText(String)*: 重试按钮内的文字
  6. *titleText(String)*: 弹窗主题内容
  7. *id(String)*: 唯一的`id`
  8. *updatedCallback(Boolean)*: 是否更新按钮绑定事件

**返回值**

**例子**
``` javascript
// 直接通过 window.abx.layer 来进行调用
window.abx.layer.showError({ 
  message, 
  retry, 
  cancel, 
  cancelText, 
  retryText, 
  titleText, 
  id, 
  updatedCallback, 
})
```
### 2.2 showErrorMobile

**参数**

  1. *message(String)*: 错误信息
  2. *retry(Function)*: 重试所执行的方法
  3. *cancel(Function)*: 关闭所执行的方法
  4. *cancelText(String)*: 关闭按钮内的文字
  5. *retryText(String)*: 重试按钮内的文字
  6. *titleText(String)*: 弹窗主题内容
  7. *id(String)*: 唯一的`id`
  8. *updatedCallback(Boolean)*: 是否更新按钮绑定事件

**返回值**

**例子**

``` javascript
// 直接通过 window.abx.layer 来进行调用
window.abx.layer.showErrorMobile({ 
  message, 
  retry, 
  cancel, 
  cancelText, 
  retryText, 
  titleText, 
  id, 
  updatedCallback, 
})
```
<!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| message | 错误信息 | string |
| retry | 重试所执行的方法 | function |
| cancel | 关闭所执行的方法 | function |
| cancelText | 关闭按钮内的文字 | string |
| retryText | 重试按钮内的文字 | string |
| titleText | 弹窗主题内容 | string |
| id | 唯一的 id | string |
| updatedCallback | 是否更新按钮绑定事件 | boolean | -->
### 2.3 tipInfo

**参数**

  1. *message(String)*: 提示信息
  2. *close(Function)*: 关闭弹窗时执行的方法
  3. *buttonText(String)*: 按钮内的文字
  4. *titleText(String)*: 弹窗主题内容
  5. *id(String)*: 唯一的`id`

**返回值**

**例子**

``` javascript
// 直接通过 window.abx.layer 来进行调用
window.abx.layer.tipInfo({ 
  message, 
  close, 
  buttonText, 
  titleText, 
  id 
})
```
### 2.4 tipInfoMobile
**参数**

  1. *message(String)*: 提示信息
  2. *close(Function)*: 关闭弹窗时执行的方法
  3. *buttonText(String)*: 按钮内的文字
  4. *titleText(String)*: 弹窗主题内容
  5. *id(String)*: 唯一的`id`

**返回值**

**例子**

``` javascript
// 直接通过 window.abx.layer 来进行调用
window.abx.layer.tipInfo({ 
  message, 
  close, 
  buttonText, 
  titleText, 
  id 
})
```
<!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| message | 提示信息 | string |
| close | 关闭弹窗时执行的方法 | function |
| buttonText | 按钮内的文字 | string |
| titleText | 弹窗主题内容 | string |
| id | 唯一的 id | string | -->
###  2.5 loadingMobile

**参数**

  *无参数*

**返回值**

**例子**

``` javascript
// 直接通过 window.abx.layer 来进行调用
// 移动端加载中弹窗
window.abx.layer.loadingMobile()
```
