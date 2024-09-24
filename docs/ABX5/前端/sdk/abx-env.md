---
outline: deep
---
# abx-env

## 使用
### \_\_abxLoad\_\_\_
静态加载

**参数**

  1. *moduleName(String)*: 交易模块的全路径
  2. *context(Object)*: 加载交易模块的上下文

**返回**

  *(Object)*: 需要加载的交易模块

**例子**

```javascript

```

### \_\_requireJSAsync\_\_

**参数**

  *moduleName(String)*: 交易模块的全路径

**返回**

  *(Promise)*

**例子**

### \_\_getResource\_\_


### \_\_loadResource\_\_


### \_\_install\_\_
请求资源

**参数**
  **args(Object)**: 

### \_\_abxImport\_\_
动态加载

**参数**
  1. *moduleName(String)*: 交易模块的全路径
  2. *context(Object)*: 加载交易模块的上下文

**返回**

  *(Object)*: 需要加载的交易模块

**例子**

```javascript
```

### \_\_getLoader\_\_
返回loader


### \_\_register\_\_
模块注册函数

### \_\_projectEnvRegister\_\_
交易工程包含依赖，样式

### \_\_getArgsType\_\_

**参数**

  *args(Object)*: 需要判断类型的参数

**返回**

  *(Number)*: 字符串：0 ，对象：1 ，错误： -1

### \_\_postAsync\_\_


### \_\_getAsync\_\_


### \_\_getJsonDataAsync\_\_
获取Json文件数据


### \_\_abxDynImport\_\_
动态加载


### \_\_mountedModule\_\_


### \_\_resolveResourcePath\_\_


### \_\_mixins\_\_
混入动作

**参数**

  1. *instance()*: 需要进行混入操作的实例
  2. *mixins(Object)*: 需要混入的对象

**返回**

  *无返回值*

**例子**

```javascript
```

### \_\_defaultMixins\_\_
平台默认需要混入的部分

**参数**

  *无参数*

**返回**

  *[Array]*: 返回平台默认需要混入的sdk

**例子**

```javascript
```


### \_\_handleSocketMessage\_\_


### \_\_getTradeModuleAsync\_\_


### \_\_registerLauncherFn\_\_


### \_\_devMode\_\_

**参数**

  *无参数*

**返回**

  *[Boolean]*: 


### \_\_prodMode\_\_

**参数**

  *无参数*

**返回**

  *[Boolean]*: 


### \_\_require\_\_



### hotUpdate

### \_\_genUuid\_\_

**参数**

  *无参数*

**返回**

  *(String)*: 

**例子**
