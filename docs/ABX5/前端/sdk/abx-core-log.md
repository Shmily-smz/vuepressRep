---
outline: deep
---
# abx-core-log

> abx 日志封装插件,控制并记录平台运行时日志.

---
## 使用
### list
列举当前支持的日志开关.

**参数**

  *无参数*

**返回**

  *无返回值*

**例子**

``` javascript
log.list()
```

---

### open
打开日志开关

**参数**

  *logModules(String|Array)*: 需要打开的日志模块

**返回**

  *无返回值*

**例子**
``` javascript
log.open(logModules)
```

---

### openAll
打开所有的日志开关

**参数**

  *无参数*

**返回值**

  *无返回值*

**例子**
``` javascript
log.openAll()
```

---

### writeLog
写入日志信息

**参数**

  1. *logType(String)*: 日志级别
  2. *logModule(String)*: 所属日志模块
  3. *message(String)*: 记录的日志信息

**返回**

  *无返回值*

**例子**

``` javascript
log.writeLog(logType, logModule, message)
```

---

### info
info 级别日志记录

**参数**

  1. *logModule(String)*: 所属日志模块
  2. *message(String)*: 记录的日志信息

**返回值**

  *无返回值*

**例子**

```javascript
log.info(logModule, message)
```

---

### error
error 级别日志记录
**参数**

  1. *logModule(String)*: 所属日志模块
  2. *message(String)*: 记录的日志信息

**返回值**

  *无返回值*

**例子**

```javascript
log.error(logModule, message)
```

---

### warn
warn 级别日志记录

**参数**

  1. *logModule(String)*: 所属日志模块
  2. *message(String)*: 记录的日志信息

**返回值**

  *无返回值*

**例子**

```javascript
log.warn(logModule, message)
```

---

### debug
debug 级别日志记录

**参数**

  1. *logModule(String)*: 所属日志模块
  2. *message(String)*: 记录的日志信息

**返回值**

  *无返回值*

**例子**

```javascript
log.debug(logModule, message)
```

---

### fatal
fatal 级别日志记录

**参数**

  1. *logModule(String)*: 所属日志模块
  2. *message(String)*: 记录的日志信息

**返回值**

  *无返回值*

**例子**

```javascript
log.fatal(logModule, message)
```

---

### 日志级别
| 日志级别 | 说明 |
| :---    | :--- |
| info    | 提示 |
| warn    | 警告 |
| error   | 错误 |
| debug   | 调试 |
| fatal   | 致命 |

---

### 日志模块
| 日志模块        | 说明 |
| :---           | :--- |
| initialize     |  资源初始化 |
| LoadSource     |  加载资源 |
| runtimeLoad    |  资源初始化 |
| createTrade    |  打开交易 |
| closeTrade     |  关闭交易 |
| abortTrade     |  终止交易 |
| createSubTrade |  打开子交易 |
| closeSubTrade  |  关闭子交易 |
| communicate    |  通讯 |
| renderPage     |  渲染画面 |
| hooks          |  生命周期 |
| tradeProcess   |  交易过程 |
| tradeFlow      |  交易流程 |
| flowError      |  流程异常 |
| hotUpdate      |  流程异常 |
| unknown        |  未知 |

