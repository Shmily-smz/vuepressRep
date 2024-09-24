---
outline: deep
---
# abc-starter

提供模块扫描,执行js文件等API功能

## 1. 引入

```js
import Vue from 'vue'
import starter from 'abc-starter'
Vue.use(starter)
```

## 2. API用法说明

注:以下API方法均可以使用`window.abc.starter.***` 或者 `Vue.prototype.starter.***` 进行调用

### 2.1 扫描模块

```js
  await window.abc.starter.$extensionsScan()
```

注:extensionFolders可以通过`configuration/aui.properties`配置

    cn.com.agree.ab.a5.client.web/extensionFolders =  jsPlugins,workspace/www/ABX5
    ,前后不要有空格

### 2.2 获取模块的扩展信息

```js
  let res = window.abc.starter.$getExtensions(type)
```

注：在执行$getExtensions方法前需要执行过$extensionsScan方法

- 参数列表:

| 参数    | 类型    | 说明    |
| ------- | ------ | ------------------ |
| type | string | 扩展点名 |


### 2.3 拼接路径

```js
  let res = window.abc.starter.resolveX5ResourcePath(path,type)
```

- 参数列表:

| 参数    | 类型    | 说明    |
| ------- | ------ | ------------------ |
| path | string | 需要拼接的路径 |

注:ABX5模块放置路径和远程路径可以通过`configuration/aui.properties`配置

    cn.com.agree.ab.a5.client.web/ABX5ModuleRootDir = workspace/www/ABX5
    cn.com.agree.ab.a5.client.web/ABX5HttpUrl = http://***.***.*.*

### 2.4 执行js

```js
  await window.abc.starter.$jsExecuter(path)
```

- 参数列表:

| 参数    | 类型    | 说明    |
| ------- | ------ | ------------------ |
| path | string | 执行的js文件路径 |


### 2.5 获取模块的moduleDependencies

```js
  window.abc.starter.$getModuleDependencies(moduleName)
```


### 2.6 获取配置信息

```js
  window.abc.starter.$getOption(type)
```

- 参数列表:

| 参数    | 类型    | 说明    |
| ------- | ------ | ------------------ |
| type | string | 可选参数:'alias'(别名信息),'serviceEndPoint'(aarm地址),'channel'(渠道信息),'resource'(资源加载模式),'timeout'(requirejs加载超时时间),'startCompatible'(是否开启兼容AB4) |

注:aarm地址和资源加载模式可以通过`configuration/aui.properties`配置

    cn.com.agree.ab.a5.client.communication/mainAarmUrl =  http://192.168.71.111:58273/

    cn.com.agree.ab.a5.client.web/resource = remote


### 2.7 获取客户端根路径

```js
  let res = window.abc.starter.$syncGetClientRootPath()
```

注：在执行$syncGetClientRootPath方法前需要执行过$extensionsScan方法







