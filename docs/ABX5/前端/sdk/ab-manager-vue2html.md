---
outline: deep
---
# ab-manager-vue2html@vue转html功能

用于交易还原vue转html功能，将带有数据的html字符串、style标签内css样式、以及link外联css文件路径组装成新html文件内容返回。

## 1. 引入
```js
import { Vue2htmlManager } from '@agree/ab-manager-vue2html';
let vue2html = new Vue2htmlManager();
```

## 2. 获取交易内信息
```js
  let { html } = vue2html.resolve(vm, htmlTitle)
```
### 2.1 例如vue文件内调用
```js
  //this为当前交易的VueComponent
  <template>
    <div>
      <p class="test">
        test-demo ab-manager-vue2html. hello world ! 
      </p>
    </div>
  </template>

  <script>
  import { Vue2htmlManager } from '@agree/ab-manager-vue2html';
  let vue2html = new Vue2htmlManager();
    export default {
      mounted () {
        let { html } = vue2html.resolve(this, "new-title")
        // 此时打印html为生成的html文件代码字符串
        //console.log(html)
      }
    }
  </script>

  <style lang="scss" scoped>
  .test{
    width:100%;
    height:500px;
    background:#add8e6;
    text-align:center;
    line-height:500px;
  }
  </style>
```
### 2.2 生成html文件代码字符串：
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>new-title</title>
  <style type="text/css">
    .test[data-v-f064c7fe] {
      width: 100%;
      height: 500px;
      background: rgb(173, 216, 230);
      text-align: center;
      line-height: 500px;
    }
    .restore-view {
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
  </style>
</head>
<body>
  <div class="restore-view">
    <p data-v-f064c7fe="" class="test">
      test-demo ab-manager-vue2html. hello world ! 
    </p>
  </div>
</body>
</html>
```

- 参数:

| 参数 | 类型 | 说明 |
| -------- | --- | --- |
| htmlTitle | string | 还原html文件标题 |
| vm | VueComponent | 当前交易的VueComponent |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| html | string | html文件内容字符串 |


