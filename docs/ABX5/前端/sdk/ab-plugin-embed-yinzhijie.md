---
outline: deep
---
# ab-plugin-embed-yinzhijie@前端内嵌银之杰控件

## 1. 引入

```js
import { YinZhiJie } from '@agree/ab-plugin-embed-yinzhijie';
```

## 2. 使用

### 2.1 yzjYanyinInit --验印模块初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = 'yzj'; //当前内嵌组件id
let res = await YinZhiJie.yzjYanyinInit(id);
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 默认值 | 说明            |
| ---- | ------ | -------- | ------ | --------------- |
| id   | string | √        | x      | 当前内嵌组件 id |

- 返回值: `Object`

| 参数   | 类型   | 说明            |
| ------ | ------ | --------------- |
| id     | string | 当前内嵌组件 id |
| msg    | string | 窗口句柄信息    |
| result | string | "success"       |

> <font color ='red' style="font-weight:bold">无</font>

---

### 2.2 yzjYanyinFinish --验印模块销毁

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = 'yzj'; //id
let res = YinZhiJie.yzjYanyinFinish(id);
```

- 参数列表:

| 参数 | 类型   | 必填参数 | 默认值 | 说明            |
| ---- | ------ | -------- | ------ | --------------- |
| id   | string | √        | x      | 当前内嵌组件 id |

- 返回值: `Object`

| 参数   | 类型   | 说明            |
| ------ | ------ | --------------- |
| id     | string | 当前内嵌组件 id |
| msg    | string | 操作状态信息    |
| result | string | "success"       |

> <font color ='red' style="font-weight:bold">无</font>

---

### 2.3 yzjYanyinInvoke --验印内部指令调用

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = 'yzj';
let value = '{"CMD":"Close","Params":""}';
let res = await YinZhiJie.yzjYanyinInvoke(id, value);
```

- 参数列表:

| 参数  | 类型   | 必填参数 | 默认值 | 说明            |
| ----- | ------ | -------- | ------ | --------------- |
| id    | string | √        | x      | 当前内嵌组件 id |
| value | string | √        | x      | 报文信息        |

- 返回值: `Object`

| 参数   | 类型   | 说明      |
| ------ | ------ | --------- |
| result | string | "success" |

> <font color ='red' style="font-weight:bold">无</font>

---
