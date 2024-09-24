---
outline: deep
---
# ab-plugin-yanyin 验印组件

## 1. 引入

```js
import { YanYin } from '@agree/ab-plugin-yanyin';
```

## 2. 使用

###  2.1 callYanYin -- 调用打开验印组件

<!-- > <font color ='green' style="font-weight:bold">支持柜面渠道</font> -->

```js
    let message = `{}`; // 调用验印组件传入的参数
    let generatePath = ""; // 验印结果生成路径
    let exePath = ""; // 验印应用路径
    try {
        let ret = YanYin.callYanYin(message, generatePath, exePath);
    }catch (e) {
        console.log(e);
    }
```

**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| message     | string | √  | 调用验印组件传入的参数 |
| generatePath    | string | √   | 验印结果生成路径       |
| exePath    | string | √   | 验印应用路径       |

**返回值**

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| ret | string | 验印组件是否打开成功 |

-------------------------------------------------
