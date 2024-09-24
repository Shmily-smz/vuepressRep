---
outline: deep
---
# abx-plugin-entry

> 根据当前端标志,选择所需要执行的入口方法,调用宿主端暴露出的方法.

## 1. 引入
``` javascript
  import { EntryPlugin, } from "abx-plugin-entry"
```
## 2. 使用
### 2.1 ab4EntryAsync

**参数**

  1. *type(String)*: 组件名称
  2. *type(Object)*: 组件执行所需的参数

**返回**

  *无返回值*

**例子**

  ```javascript
  const result = new EntryPlugin().ab4EntryAsync(type, options)
  ```

<!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| type | 组件名称 | string |
| options | 组件执行所需的参数 | object | -->