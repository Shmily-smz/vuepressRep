---
outline: deep
---
# ab-plugin-media 多媒体组件

## 1. 引入

```js

import { MapManage } from '@agree/ab-plugin-map'

```


## 2. 使用

###  2.1 getCurrentPosition -- 获取当前定位信息

```js
 let res = await MapManage.getCurrentPosition()
```

- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| provider    | string | ×   |  | 定位选择：原生，高德，百度；为空时则为当前集成的定位    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  当前位置信息  |


