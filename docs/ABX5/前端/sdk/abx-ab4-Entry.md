# abx-ab4Entry

> abx 内调用 ab4 客户端技术组件入口

---

  ## 1. 引入
  ``` javascript
  import { ab4Entry } from 'abx-ab4Entry'
  ```

  ---

  ## 2. 使用
  > 调用 ab 技术组件的统一入口方法

  **参数:**
    1. *type(String)*: 调用的技术组件名称
    2. *options(Object)*: 技术组件执行所需的参数

  **返回**

    *(Object)*: 返回带有组件结果与错误码的对象

  **例子**

  ``` javascript
  let result = await ab4Entry(type, options)
  // result 内存在校验码判断是否成功
  ```
---