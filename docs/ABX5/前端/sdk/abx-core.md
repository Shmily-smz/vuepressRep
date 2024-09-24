---
outline: deep
---
# abx-core

## 1. 生命周期函数

全局级
模块级别
交易级
画面级

onGlobalMessage

// C 端
beforeClosePage
afterClosedPage

isPageInsideMsg:此字段为服务端返回，用来区分下发的 socket 消息是属于渲染画面的，还是仅仅是交易内部的一段数据；此字段的应用仅在交易级别

onSocketMessage：
executeAsync：.js/.ts 文件，如果服务端返回的为逻辑文件，则会默认查找当前文件的 executeAsync 方法，传入参数并执行

// 梳理执行顺序
### 1.1 创建
[hooks][globalhooks][beforeUpdatePage][hooks] [TradeHooks][beforeupdatepage]

[hooks][basicpage][beforeCreateFrame][hooks] [GlobalFrameHooks][beforecreateframe] // 此处的执行顺序有问题

[hooks][basicpage][onCreated][hooks] [BasicPage][aftercreatedframe]

[hooks][globalframehooks][afterCreatedFrame][hooks] [BasicPage][beforemountframe]

[hooks][globalframehooks][beforeMountFrame][hooks] [BasicPage][beforecreatepage]
[hooks][globalpagehooks][beforeCreatePage]

[hooks][basicpage][onCreated][hooks] [FramePageHooks][basicpage][onCreated][hooks] [BasicPage][aftercreatedpage]
[hooks][basicpage][afterCreatedPage][hooks] [BasicPage][beforemountpage]
[hooks][globalpagehooks][beforeMountPage][hooks] [BasicPage][onmounted]

[hooks][basicpage][afterMountedPage][hooks] [GlobalPageHooks][aftermountedpage]
[hooks][basicpage][onMounted][模板][onMounted][hooks] [BasicPage][aftermountedframe]
[hooks][globalframehooks][afterMountedFrame][hooks] [TradeHooks][afterupdatedpage]
[hooks][globalhooks][afterUpdatedPage]

### 1.2 销毁
[hooks][basicpage][beforeDestroyFrame][hooks] [GlobalFrameHooks][beforedestroyframe]
[hooks][basicpage][beforeDestroyPage][hooks] [GlobalPageHooks][beforedestroypage]
[hooks][basicpage][onDestroy][hooks] [FramePageHooks][basicpage][onDestroy][hooks] [BasicPage][afterdestroyedpage]
[hooks][globalpagehooks][afterDestroyedPage][hooks] [BasicPage][ondestroy]
[模板][页面销毁]
[hooks][basicpage][afterDestroyedFrame][hooks] [GlobalFrameHooks][afterdestroyedframe]
[afterAbortedTrade][frame]

所以钩子函数的执行是异步，到达某个时机就会触发，即使上一个钩子函数没有完成也不关系，只关心当前的时机要确保钩子函数被执行即可

// onCreated onMounted : page frame 以及 vue 原本的
1 先看下 vue 本身的执行顺序是否异步 // 异步
2 frame 和 page 的顺序：这个顺序不可以修改，确定后就要按照平台提供的顺序执行

frame:onCreated:args: 服务端的参数
page:onCreated: args: 服务端的参数
page:onMounted
frame:onMounted
onDestroy： 先执行 page 然后执行 frame

和 vue 原生的周期函数相比，执行顺序:
mixins 优先执行
// 钩子函数需要的参数
// 平台的默认处理: 不需要处理
错误处理：不用处理，用户自行处理，只需要进行记录即可

## 2. callPreDoPost

> 触发事件，并执行交易画面或框架画面内对应的事件方法。

### 2.1 **参数:**

- {string} name，触发的事件名称
- {any} task，需要传递给 do 方法的参数

### 2.2 **示例:**

> 事件对应的 pre、post 及 onError 方法非必须方法，根据需求进行添加。

```html
<aui-button @click="callPreDoPost('commit', task)">提交</aui-button>
```

```javascript
methods: {
  preCommit() {
    console.log("[当前执行方法为][preCommit]")
    return {
      preCommitRes: true
    }
  },
  /**
   * @param {any} task > callPreDoPost('commit', task) 调用时的第二个参数 task
   * @param {any} preRes > preCommit 方法执行完成后的返回值
  */
  doCommit(task, preRes) {
    console.log("[当前执行方法为][doCommit]")
    console.log("[doCommit][task]", task)
    console.log("[doCommit][preRes]", preRes)
    return {
      doCommitRes: true
    }
  },
  /**
   * @param {any} doRes > doCommit 方法执行完成后的返回值
  */
  postCommit(doRes) {
    console.log("[当前执行方法为][postCommit]")
    console.log("[postCommit][doRes]", doRes)
  },
  onCommitError(err) {
    console.log("[callPreDoPost][onCommitError]", err)
  }
}
```

### 2.3 **返回值:**

无
