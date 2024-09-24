---
outline: deep
---
# ab-manager-hotkey@热键管理

用于注册及删除热键。

## 1. 引入

```js
import {hotkeyManager} from '@agree/ab-manager-hotkey'
Vue.use(hotkeyManager)
```

## 2. 注册

### 2.1 交易开发人员注册热键方法
```js
this.$setHotkey(vm, shortcut, function);
```

```html
// App.vue
<template>
    <aui-input ref="input_1"></aui-input>
</template>
<script>
export default {
  mounted() {
    this.$setHotkey(this.$refs['input_1'], 
      'ctrl+m', function(){
      //TODO
    })
    //注册全局热键
    this.$setHotkey('global', 
      'ctrl+m', function(){
      //TODO
    })
  }
}
</script>
```
## 3. 删除热键

```js
this.$delHotkey(vm, shortcut,function);
```

```html
// 当前vue文件
<template>
    <aui-input ref="input_1"></aui-input>
</template>
<script>
export default {
  mounted() {
    this.$setHotkey(this.$refs['input_1'], 
      'ctrl+m', function(){
      //TODO
    })
    //注册全局热键
    this.$setHotkey('global', 
      'ctrl+m', function(){
      //TODO
    })
    // 删除
    this.$delHotkey(this.$refs['input_1'], 'ctrl+m');
    // 删除全局热键
    this.$delHotkey('global', 'ctrl+m');
}
}
</script>
```

| 参数 | 类型 | 可选值 | 说明 |
| ------- | ------ | - |------------------ |
| vm | vm / string | - | 绑定热键的vue实例 / 'global'(全局热键)|
| shortcut | string | - | 热键短语，如：'ctrl+e' |
| function | Function | - | 热键方法 |

## 4. 补充说明

1. 页面元素有焦点时,页面和页面内元素注册的非全局热键才会触发
2. 相同元素注册key值相同的热键，后注册的覆盖前注册的热键方法
3. 注册的全局热键方法,无论交易页面是否存在焦点,都会触发
4. 不允许注册相同key值的全局热键方法
