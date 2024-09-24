---
outline: deep
---
# ab-plugin-embed-panel@前端内嵌组件桥接面板sdk

直接使用原始内嵌有太多需要交易自己处理的场景。比如位置刷新、遮挡弹窗、不支持垂直滚动等等。交易处理的场景太过繁琐庞杂。所以封装了 `embedpanel` 组件，帮助交易处理这些场景。

## 1. 引入

```js
import { EmbedPanels } from "@agree/ab-plugin-embed-panel"
Vue.use(EmbedPanels)
```

## 2. 属性 / 方法

### 2.1 属性

| 属性名             | 描述                                                         | 类型    | 默认值  |
| ------------------ | ------------------------------------------------------------ | ------- | ------- |
| addMask            | 是否添加蒙板。截图时置灰，并添加播放键图示。                 | boolean | true    |
| eventAntiShakeTime | 发消息显示内嵌的防抖时间间隔。（避免频繁调用截图方法导致卡顿或卡死）如果调用显示后，在此间隔时间内，再次触发隐藏则不进行显示。 | number  | 300     |
| width              | 内嵌组件宽度。                                               | string  | "100%"  |
| height             | 内嵌组件高度。                                               | string  | "650px" |

### 2.2 函数

| 方法名           | 描述             | 参数                       |
| ---------------- | ---------------- | -------------------------- |
| createEmbedFrame | 初始化内嵌窗口   | handle：所内嵌的元素的句柄 |
| embeddedDestroy  | 销毁当前内嵌窗口 | —                          |

## 3. 使用

### 3.1 初始化

`embed-panel` 初始化，通过 `createEmbedFrame()` 创建内嵌面板，需要一个参数：第三方控件的句柄。

```js
<template>
  <embed-panel ref="embed"></embed-panel>
</template>

/* 初始化。 以第三方影像控件为例。*/
async init() {
	let id = "sunyard" + Math.random();
	let appId = "Y002"
	let tradeId = "JKDS"
  // 1. 调用第三方影像控件的初始化函数，获取句柄。
  let result1 = await SunYard.sunYardInit(id);
  let hwnd = result1.msg + ""; // 句柄。
  // 2. 调用 embedpanel 的 createEmbedFrame() 初始化内嵌窗口，参数是句柄。
  let result = await this.$refs.embed.createEmbedFrame(hwnd);
  // 3. 内嵌成功，调用影像控件的方法进行显示。
  let result2 = await SunYard.sunYardCreateSunScan(id, appId, tradeId);
},
```

### 3.2 销毁

`<embed-panel>` 组件不能重复初始化。再次初始化前需要先通过 `embeddedDestroy()` 销毁。

```js
<template>
  <embed-panel ref="embed"></embed-panel>
</template>

// 销毁 embedpanel。
this.$refs.embed.embeddedDestroy();
```

### 3.3 完整示例

1. 在`<template>`中加入`<embed-panel>`
2. 创建初始化方法，调用`embed-panel`组件的`createEmbedFrame`方法传入第三方控件的句柄。
3. 创建内嵌窗口销毁方法。

**注意：不能重复初始化。如果需要重新初始化，需要先将前面初始化的内嵌窗口销毁，否则会同时出现两个内嵌组件并且其中一个不受控制。**

```js
<template>
  <embed-panel
    ref="embed"
    :height="height"
    :width="width"
    :addMask="addMask"
  ></embed-panel>
</template>

<script>
import { SunYard } from "@agree/ab-plugin-embed-sunyard";

export default {
  props: {
    width: {
      default: "100%",
      type: String,
    },
    height: {
      default: "300px",
      type: String,
    },
    addMask: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    /** 初始化 */
    async init() {
      let id = "sunyard" + Math.random();
      let appId = "Y002"
      let tradeId = "JKDS"
      // 1. 调用影像控件的初始化函数，获取句柄。
      let result1 = await SunYard.sunYardInit(id);
      let hwnd = result1.msg + ""; // 句柄。
      // 2. 调用 embedpanel 的 createEmbedFrame() 初始化内嵌窗口，参数是句柄。
      let result = await this.$refs.embed.createEmbedFrame(hwnd);
      // 3. 内嵌成功，调用影像控件的方法进行显示。
      let result2 = await SunYard.sunYardCreateSunScan(id, appId, tradeId);
    },
    /** 关闭影像控件 */
    sunYardFinish() {
      SunYard.sunYardFinish(this.id);
      // 销毁 embedpanel。
      this.$refs.embed.embeddedDestroy();
      this.info("销毁影像控件： ", this.id);
    },
    /** 其他影像控件私有接口…… */
    /** 影像控件提交 */
    submit() {
      return new Promise((resolve, reject) => {
        SunYard.sunYardCommOcxFunction(
          this.id
          // 其他参数
          // new OnlyTradecode("td0003").sendData
        )
          .then((res) => {
            // TODO
          })
          .catch((err) => {
            // TODO
            resolve(ResultInfo.failResult("TEC001", "提交异常"));
          });
      });
    },
    // ……
  },
  beforeDestroy() {
    this.sunYardFinish();
  },
};
</script>

<style></style>

```

封装好影像控件后，就可以在交易中引用并使用了。

```js
<template>
  <div>
    <aui-row>
      <aui-col :span="24" :offset="0">
        <sun-yard ref="sunyard" height="600px"></sun-yard>
      </aui-col>
    </aui-row>
  </div>
</template>

<script>
import SunYard from "@Project/components/technology/sunyard/Sunyard.vue";
export default {
  components: { SunYard },
  mounted() {
      // 初始化 Sunyard
      this.$refs.sunyard.init();
  },
};
</script>
<style></style>

```

## 4.内嵌遮挡处理

由于内嵌是漂浮在abc之上的，所以会出现内嵌组件遮挡到abc内一些其他组件的场景。对于一些场景aui-web组件库已经做了相应处理，比如`aui-search`、`messagebox`、`menu`、`loading`、`aui-cascader` 等。

对于其他组件，没有在组件内部做相应处理。此时需要在交易中手动隐藏、显示内嵌组件。如 `aui-popover` 。

以`aui-popover`为例：

当打开`aui-popover`并被遮挡时，需要在交易中调用 `EventBus` 发送消息截图并隐藏内嵌组件，

当关闭时，再发送消息通知展示内嵌组件。

```js
<aui-popover
  ref="popover1"
  title="标题"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
	@show='show'
	@hide='hide'>
</aui-popover>

// 引用 EventBus
import { EventBus } from '@agree/ab-manager-eventbus';

<script>
export default {
  methods: {
    show() {
      // 通知截图、隐藏内嵌。
			EventBus.$emit("event-popup", { active: true, source: "xxx" })
    },
    hide() {
      // 通知显示内嵌。
			EventBus.$emit("event-popup", { active: false, source: "xxx" })
    }
  }
}
</script>

// source表示消息来源，由什么组件发送。
// 发送消息要一一对应。只发送 { active: true } ,不发送与之对应的 { active: false } 可能会导致判定错误，无法显示。
```

除了上述消息场景外，还有个消息类型处理：`hotkey`。`embedpanel`接收到这个消息类型时，会直接切换当前的内嵌组件的显示和隐藏状态。

主要用于加在热键上，在出现内嵌遮挡时，可以通过热键发送消息，来实现应急性处理，去隐藏内嵌控件。

```js
// 引用 EventBus
import { EventBus } from '@agree/ab-manager-eventbus';
//注册全局热键
this.$setHotkey('global', 
  'ctrl+m', function(){
  	EventBus.$emit("event-popup", { source: "hotkey" })
})

// 注意不要重复注册。并且退出登录时要删除热键。
```

## 5.使用原则

1. 同一个交易面板内只能使用一个内嵌组件。
2. 垂直滚动只支持在有内嵌组件所在的面板上产生滚动条的场景。其他特殊场景不支持。（比如：交易A中加入single-panel展示子交易B，交易B中有内嵌，滚动条在交易A。此种场景垂直滚动不支持。）
3. 如果有滚动条，只有在滚动条在最上方时才能正常使用，否则只是图片。
4. 内嵌被截图替换时，点击图片可以切换回内嵌组件，并且滚动条会移动到最上方。
5. 不得重复初始化。重新初始化前需要先销毁原先的。

