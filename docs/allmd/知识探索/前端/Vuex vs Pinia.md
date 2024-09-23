## 前言

目前组件库和SDK都是基于Vue 2进行开发和适配的，项目中也都是使用的Vue 2，配套的是Vuex 3，Vue 3配套的是Vuex 4，而Pinia是既可以在Vue 2也可以在Vue 3中使用。
![vuex-and-pinin-support](../../images/知识探索/前端/Vuex%20vs%20Pinia/1.png)
本文将说明 Pinia 与 Vuex 的功能点对比。

## 功能点对比列举

打开 Pinia 文档，首先便是下图中的6大特点：

![pinia-feature-en](../../images/知识探索/前端/Vuex%20vs%20Pinia/2.png)

下面根据图中6点及其他8个功能点，共计14个功能点对 Pinia 和 Vuex 进行对比，后面会针对每个功能点进行详细介绍。

| 功能点 | Pinia 2 (2.0.17) | Vuex 3 (3.6.2) | Vuex 4 (4.0.2) |
| :--- | ---: | ---: | ---: |
| 体积 | 29kb | 37kb/13kb | 43kb |
| store编写 | 更直观 | 较直观 | 较直观 |
| 可扩展 | 是 | 是 | 是 |
| 模块化设计 | 有 | 无 | 无 |
| DevTools | 有 | 无 | 无 |
| 类型安全 | 是 | 否 | 是 |
| States | 有 | 有 | 有 |
| Getters | 有 | 有 | 有 |
| Mutations | 无 | 有 | 有 |
| Actions | 有 | 有 | 有 |
| Modules | 无 | 有 | 有 |
| Composition API 支持 | 是 | 否 | 是 |
| TypeScript 支持 | 是 | 否 | 是 |
| 热更新支持 | 是 | 是 | 是 |
| 插件支持 | 是 | 是 | 是 |
| 服务端渲染 | 有 | 无 | 无 |

###   体积

> Pinia weighs around 1kb, you will forget it's even there!

官网号称 Pinia 的体积只有`1kb`，实际安装的包如上表中，整体压缩后的体积为`29kb`。由于`Tree-Shaking`的存在，可能在只使用核心较少功能时，打包后的体积会达到`1kb`；由此推算，在同样的项目中，Vuex 在打包后的体积可能不到`10kb`甚至`5kb`，在没有极致要求的情况下，影响可忽略。

###  store编写

> Stores are as familiar as components. API designed to let you write well organized stores.

Pinia 中的store写法与 Vuex 的写法有所不同，与 Vue 3 中定义组件的方式有些相似，更好组织。

**Vuex 中定义store代码如下**

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  }
})
```

**Pinia 中定义store代码如下**

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0
    }
  },
})
```

**声明一个Vue组件代码如下**

```js
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
  	return {
		counter: 0
	}
  }
})
```

使用上 Pinia 在 Vue 2 和 Vue 3 中使用有所不同，Vue2 中使用 Pinia 与 使用 Vuex 有些相似，Vue 3中使用 Pinia 有所不同。

**Vuex 使用store的方式**

```js
new Vue({
  el: '#app',
  store: store,
})
```

**Pinia 在 Vue 2 中使用store的方式**

> 需要额外安装`@vue/composition-api`包。

```js
import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: '#app',
  pinia
})
```

**Pinia 在 Vue 3 中使用store的方式**

```js
import { defineComponent } from 'vue'
import { useStore } from '@/stores/counter'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore()

    return {
      // 您可以返回整个 store 实例以在模板中使用它
      store,
    }
  },
}
```

###   扩展性

> React to store changes to extend Pinia with transactions, local storage synchronization, etc.

扩展性主要是通过 Plugin （插件）功能，无论是 Vuex 还是 Pinia 都支持编写 Plugin，但写法和功能上有所不同。

在 Vuex 的 Plugin 中，会暴露出每次修改`state`的`mutation`钩子，通过`subscribe`函数传入钩子回调。在 Plugin 中不能直接修改`state`，需要在内部提交`mutation`来修改，写法如下：

```js
// 定义一个插件
const myPlugin = store => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
	store.commit('receive', 'hello')
  })
}
// 使用插件
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```

Pinia 的 [Plugin](https://pinia.vuejs.org/core-concepts/plugins.html) 能做的事情更多，操作更灵活，能做的操作有：

- 向 Store 添加新属性
- 定义 Store 时添加新选项
- 为 Store 添加新方法
- 包装现有方法
- 更改甚至取消操作
- 实现本地存储等副作用
- **仅**适用于特定 Store

其中**“实现本地存储等副作用”**在 Vuex 中也可以实现，下面是 Pinia 的 Plugin 写法示例：

```js
import { createPinia } from 'pinia'

// 定义插件
function MyPiniaPlugin(context) {
  /*
   * context.pinia // 使用 `createPinia()` 创建的 pinia
   * context.app // 使用 `createApp()` 创建的当前应用程序（仅限 Vue 3）
   * context.store // 插件正在扩充的 store
   * context.options // 定义存储的选项对象传递给`defineStore()`
   */
  context.store.hello = 'world'
}

const pinia = createPinia()

// 使用插件，将插件提供给 pinia
pinia.use(MyPiniaPlugin)
```

###  模块化设计

> Build multiple stores and let your bundler code split them automatically.

Pinia 对store有模块化的设计，而 Vuex 本身没有，模块化的设计从store的编写方式体现。

回顾一下在 Vuex 中的写法：

```js
const store = new Vuex.Store({
  state: {
    counter: 0
  }
})

new Vue({
  el: '#app',
  store: store,
})
```

在看下 Pinia 中的写法，可以单独导出不同的store，也可以分布在不同的文件中：

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    user: 'Jack'
  })
})

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  })
})

export const useSyetemStore = defineStore('systemStore', {
  state: () => ({
    time: 1000
  })
})
```

### ⚙️ DevTools

Pinia 与 Vue Devtools相结合，为开发和调试增加了遍历。

![pinia-in-vue-devtools](../../images/知识探索/前端/Vuex%20vs%20Pinia/3.png)

Vuex 的 Timeline：
<img alt="vuex-devtools-mutation" src="../../images/知识探索/前端/Vuex vs Pinia/4.png" width="300"/> <img alt="vuex-devtools-action" src="../../images/知识探索/前端/Vuex vs Pinia/5.png" width="300"/>

Pinia 的 Timeline：
<img alt="pinia-devtools-action" src="../../images/知识探索/前端/Vuex vs Pinia/6.png" width="300"/> <img alt="pinia-devtools-patch" src="../../images/知识探索/前端/Vuex vs Pinia/7.png" width="300"/>

###  类型安全

> Types are inferred, which means stores provide you with autocompletion even in JavaScript!

得益于对 TypeSctipt 的支持，Pinia 有着更好的类型检查（Vuex 4 也支持 TypeScript），同时 Pinia 的类型安全还包括，即使在**使用 JavaScript 时**也可以进行类型检查和自动补全。

```js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type 会自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动完成! ✨
      return state.todos.filter((todo) => todo.isFinished)
    }
  }
})
```

### 核心概念

Vue 的状态管理工具中，无论是 Vuex 还是 Pinia 都有一些核心概念，总体有一下几个：

- `state`: Vuex 使用[单一状态树](https://vuex.vuejs.org/zh/guide/state.html#%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91)，应用全部的状态都保存在一个`store`里面，`state`就是定义这些状态数据的地方。

- `getters`: 用来从`state`中派生出一些状态，比如对数据进行过滤和计数。

- `mutations`: 更改 Vuex 的`store`中的状态的唯一方法，只能通过`mutation`修改状态，且`mutation`是同步的。

- `actions`: 异步操作写在`actions`中，但`action`不直接修改`state`，在`action`中提交的是`mutation`，也就是`action`是触发了`mutation`进而修改的`state`状态。

- `modules`: 由于项目的逐渐增大，`store`会越来越大，越臃肿且不易维护，所以允许应用定义不同的`module`，将状态分割，每个`module`中都有自己的`state`、`getters`、`mutations`和`actions`，并且还可以嵌套子模块，而且没个模块间的数据不用担心重名的问题。

在 Pinia 中移除了`mutations`和`modules`，`mutations`被认为是冗长的，而`modules`得益于“模块化设计”，使得store都是扁平化的，所以不再需要`modules`的嵌套结构。

![modules-vs-pinia-store](../../images/知识探索/前端/Vuex%20vs%20Pinia/8.png)

除了移除的特性外，已有的特性也有所不同，具体如下：

**state**
Pinia 提供了重置 state 数据的方法`store.$reset()`，
可以直接通过`store.$patch()`方法修改 state 中的一个或多个条目，
另外还可以通过`store.$state = { counter: 666, name: 'Paimon' }`直接替换整个 state 的状态。

**getters**
都支持参数传递，Pinia 由于是模块化设计，所以可以使用其他模块的 getters ，使用其他 getter 的功能写法有所不同。

getter 传参：
```js
getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    }
}
```

使用其他 getter：
```js
// Pinia
getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    }
}

// Vuex
getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne(state, getters) {
      return getters.doubleCount + 1
    }
}
```

使用其他 store 的 getters：
```
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

**actions**

Vuex 中 actions 不能直接修改 state，需要提交 mutation，图示和代码如下：

![vuex-action-flow](../../images/知识探索/前端/Vuex%20vs%20Pinia/9.png)

```js
// 定义 action
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

// 触发 action
store.dispatch('increment')
```

Pinia 也支持访问其他 store 的 action，可以在 action 中直接修改 state，并且可以直接调用 action，代码如下：

```js
// 定义 action
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})

// 触发 action
export default defineComponent({
  setup() {
    const main = useMainStore()
    // actions 像 methods 一样被调用：
    main.randomizeCounter()

    return {}
  },
})
```

Pinia 新增了 action 订阅功能，允许通过`store.$onAction()`注册 action 的回调，回调会在 action 函数触发之前执行，同时可在回调用注册`after`和`onError`，`after`会在 action 完成后执行，`onError`会在抛出错误或者`reject`的时候执行。图示和代码如下：

![pinia-action-subscribe](../../images/知识探索/前端/Vuex%20vs%20Pinia/10.png)

```js
const unsubscribe = someStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// manually remove the listener
unsubscribe()
```

### Composition API 支持

Composition API 是 Vue 3 的特性，所以只要支持 Vue 3 都支持 Composition API，所以 Vuex 4 和 Pinia 都支持，而 Vuex 3 不支持。Composition API 相关介绍，可查看[什么是 Composition API ?](https://vuejs.org/guide/extras/composition-api-faq.html)

```js
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),

      // 在 computed 函数中访问 getter
      double: computed(() => store.getters.double)
    }
  }
}
```

### TypeScript 支持

Vuex 3 不支持 TypeScript，Vuex 4 和 Pinia 均支持 TypeScript。
不同的是，Vuex 虽然提供了类型声明，所以不需要特殊的 TypeScript 配置，但还需要按照一定的要求才能在使用 TypeScript 编写 Vue 组件时正确的为`store`提供类型声明。与`$router`相同，Vuex 也没有为`this.$store`  属性提供开箱即用的类型声明，所以需要先定义一个 Vue 的类型声明，如下：

```ts
// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```

> Pinia 由于不会使用 Vue 原型上的`$store`所以也需额外的类型声明。

### 热更新

Vuex 和 Pinia 均支持热更新。
Vuex 使用的是webpack 的 [Hot Module Replacement API](https://webpack.js.org/guides/hot-module-replacement/)，对于`mutation`和`module`需要调用`store.hotUpdate()`方法，如下：

```js
if (module.hot) {
  module.hot.accept(['./mutations', './modules/a'], () => {
    // 加载新模块
    store.hotUpdate({
      mutations: newMutations,
      modules: {
        a: newModuleA
      }
    })
  })
}
```

Pinia 的热更新需要使用官方的构建工具 [Vite](https://vitejs.dev/)，以及任何实现了`import.meta.hot`的构建工具，写法大致如下：

```js
import { defineStore, acceptHMRUpdate } from 'pinia'

const useAuth = defineStore('auth', {
  // options...
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
```

### 服务端渲染（SSR）

Vuex 不支持服务端渲染，Pinia支持服务端渲染。
Pinia 可以基于 Vite 手动在修改代码或者通过三方包实现SSR，或者通过 [Nuxt.js](https://nuxtjs.org/)，因为 Nuxt.js 在服务端渲染方便做了一些事，所以使用起来会相对简单。

## 总结

Pinia 于 Vuex 相比，官方是这样说的：

![pinia-vs-vuex](../../images/知识探索/前端/Vuex%20vs%20Pinia/11.png)

> 官方的建议是，后续如果是新的项目，希望“毫不犹豫”的选择 Pinia。

对于我们现有情况来说，由于没使用 Vue 3 所以项目中并未使用 Vuex 4，所以主要是 Vuex 3 和 Pinia 之间的比较。

相比于 Vuex 3，Pinia
新增了**更直观的store编写**、**模块化的设计**、**JavaScript的类型安全和自动补全**、**支持 Composition API**、**支持 TypeScript** 和**服务端渲染**；
优化了**包体积**、**Vue DevTools的关联**、**更灵活的扩展方式**和**热更新方式**；
移除了**mutations**和**modules**。

针对现状来看，如果将 Vuex 3 升级为 Pinia，由于新的功能点并未使用，所以主要的改动点在“移除了**mutations**和**modules**”，而且是比较常用的两个功能点，有一定的改造成本。当然，如果改造完成，后续可以享受 Pinia 的新功能，比如：**模块化的设计**、**JavaScript的类型安全和自动补全**和**更灵活的扩展方式**等。
