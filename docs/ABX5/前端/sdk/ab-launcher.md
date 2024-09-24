# ab-launcher
## 1. 平台引入的sdk

@agree/ab-manager-data  @agree/ab-plugin-message @agree/ab-manager-auf @agree/ab-manager-trade

## 2. 使用方法
```js
window.abx.initConfig({
  "tradeManager":{
    "canRepeatList":[] //配置可重复打开的交易
  },
  "dataManager":{
    "sizeLimit":{
       "sdm": 2048000,
        "dm": 4096000,
        "localData": 3145728,
    }, // sdm,dm,localData的大小限制
    "sharedDataModels":[],//初始化的SDM
    "SDMToSessionStorageList": [], //需要同步session的sdm    
    "dataInitialization":[]//初始化的数据
    // 例：dataInitialization：[
    //  {
    //   model:'全局数据',
    //   path:'全局数据.adm',
    //   context:{
    //     moduleName:'BankModule'
    //   },
    // },
    // {
    //   model:'UserInfo',
    //   data:{
    //     name:'xiaoming'
    //   },
    //   sdm:true
    // },
    // {
    //   model:'TellerInfo',
    //   data:new TellerInfo(),
    //   sdm:true
    // },
    // {
    //   model:'CustomerInfo',
    //   data:new CustomerInfo(),
    //   sdm:true
    // }]
  },
  "aufManager":{
    "$aufAlias":{},//auf需要的别名
    "$canRightClickDirective":true, //控制右键菜单显示
    "$isConsoleLog":true,//是否在控制台打印log,默认为true
    "$callback":(log)=>{},//打印日志的回调函数,log为当前返回的信息
    "$stepTimeout":10000,////步进式loadUId的timeout,不设置默认10000
  },
  "messageManager":{
    "parentMsgUrl":"",//ws地址
    "tellerId":00001, //柜员号
    "clientMap":{},//登陆柜员对应的信息 
    "onMessage":(msg)=>{},//默认时消息回调 
    "onException":(e)=>{},//默认时异常回调 
    "forceCreateWebsocket":true,//true 为使用 js websocket，false 为使用壳子的 websocket
    "options":{},//额外定义的操作属性
  },
  "aui":{
    "name":"aui-web", //引入的组件库类型
    "throttleButton": 500, //按钮的防抖时间
    "showDefaultPlaceholder": false, //展示默认的占位文字
    "selectedWhenFocus": true // 焦点进入后全选
  }
})

window.abx.initTradeConfig({
  "canRepeatList": [],
})

window.abx.initDataConfig({
  "sizeLimit": {
    "sdm": 2048000,
    "dm": 4096000,
    "localData": 3145728,
  },
  "sharedDataModels": ['UserInfo', 'TellerInfo', 'CustomerInfo', 'AgentInfo', 'TransactorInfo',],
  "SDMToSessionStorageList": [],
})

window.abx.initAufConfig({
  "$aufAlias": {},
  "$aufVisibleRefs": {},
  "aufPathPublicPath": "@",
})

window.abx.initAuiConfig({
    "name":'aui-web',
    "throttleButton": 500,
    "showDefaultPlaceholder": false, 
    "selectedWhenFocus": true 
})


```


