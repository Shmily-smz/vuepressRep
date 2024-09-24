# ab-core@事件总线

## 1. 引入

```js
    import { EventHub } from '@agree/ab-core';
```

## 2. 事件方法使用说明

> **订阅事件方法**
```js
    EventHub.current.subscribe(topic, fun);
```
例：
```js
    let topic = "testTopic"; // 订阅/发布的标题
    let testFn = function(msg, data) { // 订阅事件方法的回调函数
        console.log(msg, "hello " + data); // "testTopic" "hello agree"
    }
    EventHub.current.subscribe(topic, testFn);
```

> **发布事件方法**

```js
    EventHub.current.publish(topic, data); // 发布消息
```
例：
```js
    let topic = "testTopic"; // 订阅/发布的标题
    let data = "agree"; // 发布的内容
    EventHub.current.publish("testTopic", data);
```

> **取消订阅**

```js
    EventHub.current.unsubscribe(topic); // topic为空取消所有订阅
```
例：
```js
    EventHub.current.unsubscribe("testTopic");
    EventHub.current.unsubscribe();
```


## 3. 切换ab-core内部使用的端代码ts

> **工程入口main.js配置端ts**

```js
    EventHub.current=new AndroidEventHub()
```
例：
```js
    import { EventHub } from '@agree/ab-core'
    import { AndroidEventHub } from '@agree/ab-core/lib/event-hub-android'
    EventHub.current=new AndroidEventHub()
```    




|事件名|说明|参数|
|-----|:----:|:---:|
|subscribe|订阅事件|topic, fun|
|publish|发布事件|topic, data|
|unsubscribe|取消订阅|topic|


| 参数     | 类型 | 说明 |
| -------- | :-----: | :---: |
| topic | string | 订阅/发布/取消的主题/标题 |
| fun | function | 订阅的回调方法,需要传入两个参数<br>msg:返回的订阅的标题<br>data:订阅拿到发布的内容|
| data | - | 发布的内容信息 |
