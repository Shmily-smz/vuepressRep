---
outline: deep
---
# abx-logger

## 1. 引入
```javascript
import { TradeLog } from "abx-logger"
```
## 2. 使用
### 2.1 info
提示信息

**参数**

  1. *message(String)*: 信息
  2. *exception(LogException)*: 异常对象

**返回**

  *无返回值*

**例子**

```javascript
TradeLog.info(message, exception)
```

### 2.2 warn
警告信息

**参数**

  1. *message(String)*: 信息
  2. *exception(LogException)*: 异常对象

**返回**

  *无返回值*

**例子**

```javascript
TradeLog.warn(message, exception)
```

### 2.3 debug
调试信息

**参数**

  1. *message(String)*: 信息
  2. *exception(LogException)*: 异常对象

**返回**

  *无返回值*

**例子**

```javascript
TradeLog.debug(message, exception)
```

### 2.4 error
错误信息

**参数**

  1. *message(String)*: 信息
  2. *exception(LogException)*: 异常对象

**返回**

  *无返回值*

**例子**

```javascript
TradeLog.error(message, exception)
```

### 2.5 fatal
致命信息

**参数**

  1. *message(String)*: 信息
  2. *exception(LogException)*: 异常对象

**返回**

  *无返回值*

**例子**

```javascript
TradeLog.fatal(message, exception)
```

