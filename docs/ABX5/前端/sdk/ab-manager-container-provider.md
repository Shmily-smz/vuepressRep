# ab-manager-container-provider
## 1. 声明挂载的面板元素

### 1.1兼容tradeSDK的面板
```html
 <book-panel id="test"></book-panel>
 <multiple-panel id="test"></multiple-panel>
```

### 1.2使用div作为面板
```html
<div id="test"></div>
```

## 2. 配合打开交易相关逻辑使用
```js
createTradeAsync({
  config: {
    title: '个人开卡', // 交易标题
    type: 'bpmn', // 交易类型
    microName: 'ABX5', // 微应用名称
    tradeName: 'scene/个人开卡/开卡', // 交易技术维度的路径
    moduleName: 'BankModule', // 交易所属的工程信息
    containerType:'book'  // 交易的展现类型
    containerOptions:{
      activeBook:true,
      near:false,
      showMax: true,
      showMinus: true,
      showClose: true,
      fullscreen: true,
      customStyle: {},
      maxTradeSize: 20
      change: (e)=>{
        console.log(e.detail.getStatus())
      }
    }
  },
  targetId:'test' // 交易挂载的元素id
})
```

### 相关参数说明
| 参数 | 类型 | 可选值 | 说明 |
| ------- | ------ | - |------------------ |
| containerType | string | ['base','book','tab','dialog'] | ['基础面板','书签面板','多交易面板','弹窗面板']|
| activeBook | boolean | - | book面板特有,打开交易时是否立即显示，默认值为false |
| near | boolean | - | tab面板特有,打开交易的签页的位置，true为当前激活页面的签页的下一位,false为防止到所有签页的最后,默认值是false |
| showMax | boolean | - | window面板特有,展示最大化按钮|
| showMinus | boolean | - | window面板特有,展示最小化按钮 |
| showClose | boolean | - | window面板和tab面板特有,展示关闭按钮 |
| fullscreen | boolean | - | window面板特有,是否全屏|
| customStyle | Object | - | window面板特有,面板自定义样式 |
| maxTradeSize | number | - | tab面板和book面板特有,最大打开交易数,默认值为20 |
| change | Function | - | 面板切换时触发的方法,可以通过e.detail.getStatus()获取当前面板的状态|
| targetId | string | - | 挂载面板的id |


## 3. 新增全局设置容器样式的方法
```js
import  {setContainerStyle}  from '@agree/ab-manager-container-provider'

setContainerStyle({height:'100vh'})

```
