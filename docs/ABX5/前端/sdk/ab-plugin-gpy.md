---
outline: deep
---
# ab-plugin-gpy 高拍仪组件

## 1. 引入

```js
import { GPY } from '@agree/ab-plugin-gpy';
```

## 2. 使用

###  2.1 open -- 打开高拍仪

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let wifiName = "";
    let dpi = "200";// 默认200 可不传
    // GPY.open(wifiName);
    try {
        let ret = GPY.open(wifiName, dpi);
    }catch (e) {
        console.log(e);
    }
```

**入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| wifiName     | string | √  | 打开高拍仪wifi名称 |
| dpi    | string | x   | 高拍仪的分辨率       |

**返回值**

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| ret | string | 返回文件路径 |

-------------------------------------------------
