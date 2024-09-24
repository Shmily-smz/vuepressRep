# ab-manager-error@异常处理插件

用于上报异常信息到服务器的插件

## 引入

```js
import {ErrorManager} from "@agree/ab-manager-error"
Vue.use(ErrorManager, {
  isUpLoadError: false, //可选，默认为true,
  cb: () => {
    // 上传到服务器的代码
  }
});
```

| 参数     | 说明                            | 必填   | 类型     | 默认值  |
| :------ | :------------------------------ | :---- | :------- | :----- |
| isUpLoadError   | 是否开启上报异常    | 可选 | Boolean  | true |
| cb | 错误发生时的回调函数 | 可选 | function | - | 


