---
outline: deep
---
# ab-plugin-lockview 手势图案解锁组件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

九宫格手势图案解锁组件，该组件属于定制组件，样式需要在原生层修改。

## 1. 引入

```js
import { LockView } from '@agree/ab-plugin-lockview';
```

集成aar

[api-gesture-lock-view-1.0.0-1.aar](http://192.168.180.26:50151/agreesdk/android/lockview/)
[lib-gesture-lock-view-1.0.0-1.aar](http://192.168.180.26:50151/agreesdk/android/lockview/)

添加插件配置

config.xml中添加配置：

```xml
<feature name="LockView">
    <param name="android-package"
        value="cn.com.agree.abc.sdk.api.lockview.LockViewFeatureImpl" />
</feature>
```

## 2. 使用

###  2.1 show -- 显示手势图案弹框

```js
let params = {
    status: 3,
}
LockView.show(params);
```

**params入参**

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| status  | number | √  | 0表示还未设置，3表示需要验证 |


###  2.2 dismiss -- 关闭手势图案弹框

```js
LockView.dismiss();
```

###  2.3 setMessage -- 设置提示信息

当绘制手势密码错误时，会提示该信息。

```js
LockView.setMessage("手势密码错误，请重试");
```

###  2.4 监听手势

需要在mounted生命周期函数里添加代码：

```javascript
mounted() {
    document.addEventListener("onLockView", async (res) => {
      let data = res.data;
      data = JSON.parse(data);
      let type = data.type;
      let password = data.password;
      switch (type) {
        case "onEdit": // 点击修改手势密码按钮，会弹出一个H5的输入框，输入柜员密码
          LockView.dismiss();
          alert("修改手势密码，验证服务端密码")
          let params = {
            status: 0,
          }
          LockView.show(params);
          break;
        case "onConfirm": // 表示新设置或者修改后点击确认按钮，前端会获取该密码上传到服务端存储
          alert("确认修改手势密码")
          break;
        case "onCheck": // 表示校验密码，如果绘制的密码跟服务器密码一致，则关闭手势密码弹框
          if (password === "0125") {
            await LockView.dismiss();
          } else {
            await LockView.setMessage("手势密码错误，请重试");
          }
          break;
      }
    }, false);
}
```

- onEdit

该监听表示点击了修改手势密码按钮。
前端业务层会弹出一个H5的输入框，输入柜员密码，密码校验通过后，再显示手势图案解锁弹框。

- onConfirm

表示新设置或者修改后点击确认按钮，前端会获取该密码上传到服务端存储

- onCheck

表示校验密码，如果绘制的密码跟服务器密码一致，则关闭手势密码弹框

-------------------------------------------------
