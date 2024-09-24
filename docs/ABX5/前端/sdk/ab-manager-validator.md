# ab-manager-validator@校验管理

输入校验，对输入的内容进行验证。

## 1. 引入

```js
import { ValidatorManager } from "@agree/ab-manager-validator";
```

## 2. 基本用法

```js
<template>
    <valid-template property="phone">
        <input v-model="phone">
    </valid-template>
</template>

<script>
import { ValidatorManager } from "@agree/ab-manager-validator";

export default {
  mixins: [ValidatorManager],
  validators: {
    phone: [
      "required",
      {
        test: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/g,
        errorMsg: "请输入正确的手机号类型"
      },
      {
        test(val){
          return val.length === 11;
        },
        errorMsg: "手机位数为11位"
      }
    ]
  },
  data() {
      return {
          phone: ''
      }
  }
}
</script>
```

## 3. 修改校验规则

```js
this.$setValidate(validateName, (rules) => return newRules);
```

**例：**

```js
<script>
methods: {
  setValidate() {
    this.$setValidate('phone', (rules) => {
      console.log(rules)
      return rules;
    });
  }
}
</script>
```

## 4. 设置默认校验规则
```js
// 定义规则
import { Rules } from '@agree/ab-manager-validator'
let defaultRules = {
    idCard: ['required'],
    email: {
        test: /.+@.+\..+/g,
        errMsg: '请输入正确的邮箱类型'
    }
};

//增加规则
Rules.add(defaultRules);

//使用规则
export default {
    validators: {
        idCard: Rules.idCard,
        email: [
          'required',
          Rules.email
        ]
    }
}
```

## 5. 事件

| 事件 | 说明 | 参数 |
|-------|-------|-------|
| $validateUnit | 校验单个输入框 | validateName |
| $validate | 校验多个输入框，不传参数则为校验所有 | validateName[] / 空 |
| $clearUnitValidation | 清除单个输入框的错误信息 | validateName |
| $clearValidation | 清除多个输入框的错误信息，不传参数则清除所有 | validateName[] / 空 |
| $resetUnitValidation | 重置单个输入内容（清空内容和错误信息） | validateName |
| $resetValidation | 重置单个输入内容（清空内容和错误信息），不传参数则重置所有 | validateName[] / 空 |
| $setValidate | 修改校验规则 | (validateName, (rules) => return newRules) |


## 6. 参数

**Validators 选项中的内容**

| 参数 | 类型 | 说明 | 默认值 |
|-------|-------|-------|-------|
| "required"(可选) | string | 只能是"required"，表示“必输”，不设置表示“不必输” | — |
| test(可选) | regex | 正则表达式，表示验证规则 | — |
| errorMsg(可选) | string | 不满足验证提示的错误信息 | "必输项" |

**参数`validateRule`中的字段：**

| 参数 | 类型 | 说明 | 默认值 |
|-------|-------|-------|-------|
| required | boolean | 是否必输 | — |
| test | regexp / function | 校验规则 | — |
| errorMsg | string | 错误提示信息 | — |