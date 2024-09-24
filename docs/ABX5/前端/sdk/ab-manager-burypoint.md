---
outline: deep
---
# ab-manager-burypoint@埋点调试

用于调试交易、panel、lfc、aui组件、通讯的埋点数据。

## 1. 引入
```js
// main.js
import { BurypointManager, event } from "@agree/ab-manager-burypoint"
let burypointManager = new BurypointManager()
Vue.use(burypointManager)
```

## 2. 更新/设置callback：
### 2.1 方式一
```js
  Vue.use(burypointManager,{
    callback:function(res){
      //todo...
    }
  })
```
### 2.2 方式二
```js
  // callbackRegister函数的参数为一个函数，成为新的回调函数
  burypointManager.callbackRegister(function(res){
    //todo...
  })
```

## 3. 埋点标识
```js
event.$emit('burypoint',{type:'OPENTRADE',url,tradeId}) 
```

## 4.注意事项
> 埋点记录auf交易,每一步的页面当作一个panel拆分开来记录(该功能仅在>=`2.0.8`版本后适用)
> 
> 如需使用@agree/ab-manager-burypoint >= `2.0.8`的版本需要注意和下面这些包配套使用:
>
> @agree/ab-manager-auf >= `2.0.31`
>
> @agree/ab-manager-trade >= `2.0.81`
>
> @agree/aui-web >= `1.7.28`
>
> @agree/aui-m >= `1.5.17`
>
> BREAKING CHANGE: 埋点返回的数据里,组件对应的数据里name字段改成了label字段

## 5. 参数

| 参数 | 类型 | 说明 |
| -------- | --- | --- |
| url | string | 路径 |
| tradeId | string | 交易id |


## 6. type 可选值

| 类型 | 说明 |
| -------- | --- |
| OPENTRADE | 添加交易埋点 |
| OPENPANEL | 添加panel埋点 |
| OPENLFC | 添加LFC埋点 |
| EXITTRADE | 退出交易埋点 |
| EXITPANEL | 退出panel埋点 |
| EXITLFC | 退出LFC埋点 |





