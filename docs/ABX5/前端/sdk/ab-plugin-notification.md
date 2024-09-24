---
outline: deep
---
# ab-plugin-notificaiton 提醒模块

## 1. 引入

```js
import { Notification } from '@agree/ab-plugin-notificaiton';
```

## 2. 使用
###  2.1 beep -- 设备响铃

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
let times= 3;
Notification.beep(times);
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| times     | number | √  | 蜂鸣次数 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.beep()</font>
--------------------------------------------------------
###  2.2 vibrate -- 设备震动

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
let time= 3*1000;
Notification.vibrate(time);
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| time     | number | √  | 震动毫秒数 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.vibrate()</font>
-------------------------------------------------------
###  2.3 cancelVibration -- 取消震动

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
Notification.cancelVibration();
```

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.cancelVibration()</font>
-------------------------------------------------------

###  2.4 createMessage -- 创建通知栏消息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
let title = "标题";
let content = "内容";
let progress = 50;
let data = {
  name: "push",
  url: "https://www.baidu.com"
}
Notification.createMessage(title, content,progress, data);
```

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.createMessage()</font>
-------------------------------------------------------
