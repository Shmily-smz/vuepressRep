# auf 交易相关模板

## App.vue 模板
```vue
<!--
 * @Description:
 * @Author: Chengbotao
 * @Date: 2021-03-15 15:21:41
 * @LastEditors: Chengbotao
 * @LastEditTime 2023-07-20 10:38:39
 * @FilePath: DemoModule/scene/auf交易模板/App.vue
-->
<template>
  <auf-panel ref="auf-panel" :_tradeId="_tradeId" :getDomain="aufData"></auf-panel>
</template>

<script>
import { DataManagerMixin } from '@agree/ab-manager-data2'
import { FocusManager } from '@agree/ab-manager-focus2'
import Auf from 'DemoModule/scene/auf交易模板/auf交易模板.auf.json'
export default {
  name: 'auf', //ide生成
  mixins: [FocusManager, DataManagerMixin],
  inject: ['getContext'],
  data() {
    return {
      aufData: {
        // showType: 'step',
        // stepShow: true,
      },
      tradeId: this.getContext().getTradeId(),
    }
  },
  methods: {
    // 加载前钩子函数
    _onBeforeMount() {},
    // 加载后钩子函数
    _onMounted() {
      // 初始化焦点
      this._activeFocus()
      // 初始化AUF
      this.$refs['auf-panel']._initAuf(Auf)
    },
    // 销毁前钩子函数
    _onBeforeUnmount() {},
    // 销毁后钩子函数
    _onUnmounted() {},
  },
};
</script>

<style scoped></style>

```

## auf 画面模板
```vue
<!--
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-20 10:07:44
-->
<template>
  <aui-group></aui-group>
</template>

<script>
import { DataManagerMixin } from '@agree/ab-manager-data2'
import { inject } from '@agree/ab-manager-focus2'
export default {
  name: 'demo', //ide生成
  inject: ['getContext'],
  mixins: [inject, DataManagerMixin],
  metadata: {
    caption: '', //ide生成
    globalArgs: {},
    inArgs: {},
    outArgs: {},
    outlets: {
      normal: '正常',
      close: '关闭',
    },
  },
  data() {
    return {}
  },
  methods: {
    abort() {
      // 退出交易
      this.getContext().destroy()
    },
    next() {
      // 下一步
      this._next()
    },
    back() {
      // 返回上一步
      this._back()
    },

    // 以下钩子函数请结合实际需求进行调用
    // // 画面加载前的钩子函数
    // _onBeforeMount() {},
    // // 画面加载后的钩子函数
    // _onMounted() {},
    // // 画面销毁前的钩子函数
    // _onBeforeUnmount() {},
    // // 画面销毁后的钩子函数
    // _onUnmounted() {},
    // // 交易销毁前的钩子函数
    // _onBeforeUnmountTrade() {},
    // // 交易销毁后的钩子函数
    // _onUnmountedTrade() {},
    // // 当前交易激活时的钩子函数
    // _onActived() {},
    // // 当前交易被停用时的钩子函数
    // _onDeactived() {},
    // // 交易运行出错时的钩子函数
    // _onErrorCaptured() {},
  },
}
</script>

<style scoped></style>
```

## auf.json 模板
```json
{
  "caption": "画面流程",
  "start": {
    "id": 0,
    "geometry": {
      "x": 70,
      "y": 80,
      "width": 60,
      "height": 60,
      "lane": 1
    }
  },
  "nodes": [],
  "lanes": [
    {
      "id": 1,
      "name": "泳道",
      "description": "",
      "contain": [],
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "geometry": {
        "x": 0,
        "y": 0,
        "height": 700,
        "width": 200
      }
    }
  ],
  "end": {
    "id": 1001,
    "geometry": {
      "x": 40,
      "y": 540,
      "width": 140,
      "height": 40,
      "lane": 1
    }
  },
  "globalArgs": {},
  "inArgs": {},
  "outArgs": {},
  "outlets": {
    "normal": "正常",
    "close": "关闭",
    "error": "异常"
  }
}
```

# lfc 模板(auf)

``` typescript
/*
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-11 17:27:52
*/
import { Lfc } from "@agree/ab-manager-lfc"
import Vue from 'vue'
interface Options
{
  [key: string]: any;
}
class demo extends Lfc
{
  $options: Options = {
    metadata: {
      caption: "", //ide生成
      globalArgs: {

      },
      outlets: {
        normal: '正常',
        close: '关闭',
      },
      inArgs: {
      },
      outArgs: {
      },
    },
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(tradeId: string) {
    super(tradeId)
  }
  // lfc执行方法,执行完成后将结果返回
  run(App: Vue) {
    return {
      output: 'close',
      outArgs: {
      },
    }
  }
}

export { demo, }
```
