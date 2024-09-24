# abx-ab4Entry
使用说明
=======================

## 1. 引入

``` javascript
import { ab4Entry } from 'abx-ab4Entry'
```

## 2. 使用

``` javascript

async function(){
  /**
   *  描述: 调用 ab4 技术组件的统一入口方法
   *  参数: 
   *      type:  ab4 技术组件的名称
   *      options: Object(包含技术组件所需的参数)
  */
  let result = await ab4Entry(type, options)
}

```