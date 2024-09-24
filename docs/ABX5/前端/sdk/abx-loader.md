---
outline: deep
---
# abx-loader

## 使用
### onAssetsLoaded


### initialize

**参数**

  1. *loadPageData(String)*: 部署配置地址
  2. *channel(String)*: 渠道
  3. *themes(Array)*: 主题
  4. *moduleAssets(Array)*: 交易模块
  5. *deviceService(Object)*: 外设
  6. *remoteAccess(Boolean)*: 是否访问远端资源, 默认为 `true`
  7. *frame(Boolean)*: AW 取消长连接，默认为 `false`
  8. *commitUrl(String)*: 
  9. *bridge(Object)*: 调用底层功能的一个桥接对象
  10. *platformInitialized(Function)*: 平台资源加载完执行的钩子函数
  11. *beforeInitializing(Function)*: 平台资源初始化前调用的钩子函数
  12. *afterInitialized(Function)*: 平台资源初始化后调用的钩子函数
  13. *registryHooks(Function)*: 生命周期函数
  14. *tradeNoneRepeated*: 判断交易是否重复打开

**返回**

  *(Boolean)*: 

**例子**


### reload


### hotUpdate


### \_\_load\_\_


### loadPage


### loadPageData


### runtimeLoad


### \_\_tip\_\_


