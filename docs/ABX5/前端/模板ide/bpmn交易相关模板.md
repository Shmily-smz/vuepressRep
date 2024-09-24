# bpmn交易模板

## 基础布局

### frame(基础布局) 说明 {#frame说明}

对 `bpmn` 交易来说, 打开时都存在一个 `frame` , `frame` 是用来串联整个交易流程的, 包括交易内流程的操作按钮(`上一步`、`下一步`、`跳转`、`提交`)、公共的逻辑处理、流程节点展示与计算等。
实际上它就是 `bpmn` 交易的所有交易画面的容器。

:::tip
交易工程内设置 `bpmn` 交易的 `frame` 有以下三种方式:

优先级: 交易画面内 > 打开交易时 > 工程/pages/index.ts

1. `工程/pages/index.ts` 下导出一个方法 `setDefaultFrame` ,将要设置为 `frame` 的画面路径返回即可。
```ts
export default {
  setDefaultFrame() {
    return 'BankModule/pages/基础布局.vue'
  }
}
```

2. 打开交易时对 `frame` 进行设置:
```ts
let tradeOptions = {
  setDefaultFrame: function() {
    return "BankModule/pages/基础布局.vue";
  },
};
createTradeAsync(tradeOptions);
```

3. 交易页面内对 `frame` 进行指定:
```vue
<script>
export default {
  frame: 'BankModule/pages/基础布局.vue',
}
</script>
```
:::

示例: 
```vue
<!--
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-13 10:47:30
-->
<template>
  <aui-group>
    <aui-step class="section_step" :active="isActiveStep" finish-status="success" align-center :flat="true">
      <aui-step-item v-for="(item, index) in setpsQueue" :key="index" :title="attachTitle(item)"
        @click="jump(index)">
      </aui-step-item>
    </aui-step>

    <abx-page></abx-page>

    <!-- 尾部-流程按钮 -->
    <aui-row style="margin-left:-180px;">
      <aui-col :span="3" :offset="4">
        <aui-button class="btn" plain @click="abort">退出交易</aui-button>
      </aui-col>
      <aui-col :span="3" :offset="4">
        <aui-button class="btn" plain @click="back">上一步</aui-button>
      </aui-col>
      <aui-col :span="3" :offset="4">
        <aui-button class="btn" plain @click="next">下一步</aui-button>
      </aui-col>
    </aui-row>
  </aui-group>
</template>

<script>
// 交易日志记录
import { LogMixin } from '@agree/ab-logger'
// 组件焦点控制
import { FocusManager } from '@agree/ab-manager-focus2'
export default {
  // 混入焦点与日志
  mixins: [LogMixin, FocusManager],
  // 注入从父级传递来的变量
  inject: ['_parcelProps', "getContext"],
  data() {
    return {
      args: null,
      curStepNumber: 0,
      curStepsKey: "",
    }
  },
  computed: {
    // 步骤条信息获取
    setpsQueue: {
      get() {
        // 若消息返回无节点数组时,异常情况处理
        if (!this.args.pathInfoList || !this.args.pathInfoList.length) return this.steps
        this.steps = this._setSteps(this.args.pathInfoList)
        return this.steps
      },
    },
    // 步骤条当前激活的步骤计算
    isActiveStep: {
      get() {
        // 若消息返回无节点数组时,异常情况处理
        if (!this.args.pathInfoList || !this.args.pathInfoList.length) return this.curStepNumber
        let curStepIndex
        // 修改当前激活节点的判断逻辑 20221118
        for (curStepIndex = 0; curStepIndex < this.args.pathInfoList.length; curStepIndex++) {
          if (this.taskKey.endsWith(this.args.pathInfoList[curStepIndex].pathTaskKey)) {
            break
          }
        }
        this.curStepNumber = curStepIndex
        return curStepIndex
      },
    },
  },
  methods: {
    async _onBeforeMount(e) {
      this.args = e.detail

      this.setpsQueue = this.args.pathInfoList || []
      this.taskId = this.args.data.meta.taskId
      this.taskKey = this.args.data.meta.taskKey.replace(/^.*:/, "") || this.taskKey

      // 记录 info 级别日志
      this._info("message")
      // 记录 warn 级别日志
      this._warn("message")
      // 记录 debug 级别日志
      this._debug("message")
      // 记录 error 级别日志
      this._error("message")
    },
    // 挂载
    _onMounted() {
      this._activeFocus()
    },
    // // 卸载
    // _onUnmounted() {},
    async next() {
      // 下一步
      await this._next()
    },
    async back() {
      // 上一步
      await this._back(this.args)
    },
    async abort() {
      // 退出
      this.getContext().destroy()
    },
    async jump(index) {
      // 不允许向之后的步骤跳转
      if (index > this.isActiveStep) return

      this.curStepsKey = this.args.pathInfoList[index].pathTaskKey
      // 重置跳转需要确定要跳转到哪个节点,这里需要计算,具体查看文档
      // taskKey 是要目标步骤的 stepKey,taskId 是当前步骤的 taskId,可在 this.args 内进行获取

      if (index == this.isActiveStep) {
        // 重置
        await this._reset({
          taskKey: this.curStepsKey,
          taskId: this.taskId,
        })
      } else {
        // 跳转
        await this._jump({
          taskKey: this.curStepsKey,
          taskId: this.taskId,
        })
      }
    },
    // // 执行过程内异常信息处理
    // _onErrorCaptured(err) {},
  },
}
</script>
```

## focus/blur.ts 模板
```typescript
/*
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-13 10:51:04
*/
import { LFC } from "@agree/ab-manager-lfc"

class lfc_demo extends LFC {
  run(context: any) {
    return {
      output: "",
      outArgs: {},
    }
  }
}

export {
  lfc_demo,
}
```

## bpmn 画面模板
```vue
<!--
* @FileDescription: 该文件的描述信息
* @Author: 作者信息
* @Date: 文件创建时间
* @LastEditors: 最后更新作者
* @LastEditTime 2023-07-11 17:23:48
-->
<template>
  <aui-group></aui-group>
</template>

<script>
export default {
  // frame 模版
  // frame: '',
  inject: ['getContext'],
  data() {
    return {}
  },
  methods: {
    // 组件加载时触发
    async _onMounted() {
      // // 获取交易数据
      // this._getModel('key')
      // // 设置交易数据
      // this._setModel('key', 'value')
      // // 获取全局数据
      // this._getGlobalModel('key')
      // // 设置全局数据
      // this._setGlobalModel('key', 'value')
    },
    // 组件卸载时触发
    async _onUnmounted() {},
  },
};
</script>

```