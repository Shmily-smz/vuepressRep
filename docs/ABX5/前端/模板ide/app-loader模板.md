# app-loader模板文件

```typescript
/*
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-13 09:50:29
*/
import { preDataHandler } from '@agree/ab-manager-data2'

// 仅对全局数据做限定
preDataHandler([
  {
    // 声明后的数据名称
    model: '全局数据',
    // 要初始化的数据模型
    path: '全局数据.adm',
    context: {
      // 工程名
      moduleName: 'DemoModule',
    },
  }
])

// 初始化交易配置
window.abx.initTradeConfig({
  // 可重复打开的交易列表
  canRepeatList: [],
  // auf 交易的配置
  auf: {
    //aufSDK具体参数可参考[ab-manager-auf文档](../../sdk/ab-manager-auf.md)
    $aufAlias: {}, //auf需要的别名
    $canRightClickDirective: true, //控制右键菜单显示
    $isConsoleLog: true, //是否在控制台打印log,默认为true
    $callback: (log) => { }, //打印日志的回调函数,log为当前返回的信息
    $stepTimeout: 10000, //步进式loadUId的timeout,不设置默认10000
  },
})

// 初始化 SDM、DM 数据配置
window.abx.initDataConfig({
  // 数据大小限制
  sizeLimit: {
    sdm: 2048000,
    dm: 4096000,
    localData: 3145728,
  },
  // 共享数据模型
  sharedDataModels: [],
  // SDM 数据记录到 sessionStorage 的列表
  SDMToSessionStorageList: [],
  // 数据初始话数据
  dataInitialization: [],
})

// 初始化 aui 组件库配置
window.abx.initAuiConfig({
  // 引入的组件库类型 aui-web为柜面组件库 aui-m为移动组件库
  name: 'aui-web',
})
```