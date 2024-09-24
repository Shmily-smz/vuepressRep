---
outline: deep
---
# ab-manager-lfc
## 1. 引入

注：此文档为auf交易中的lfc页面文档

```js
import { Lfc } from "@agree/ab-manager-lfc"
```

## 2. lfc文件格式示例

```js
class XXX extends Lfc {
  $options: Options = {
    metadata: {
      caption: "", // 功能描述
      globalArgs: { // 可操作的dm数据声明
        USERNAME: {
        },
      },
      outlets: {
        normal: '正常',
        close: '关闭'
      }, // 出口声明
      inArgs: {},  // 入参描述
      outArgs: {}  // 出参描述
    }
  };
  constructor(tradeId: string) {
    super(tradeId)
  }
  run(App: Vue) { // lfc文件的执行方法,入参为上一个页面的vue实例
      return {
        output: 'normal',
        outArgs: {
        },
      }
    } 
}

```

## 3. LFC的编写规则

### 3.1 lfc相关

1. lfc文件中必须定义$options属性、配置方式与vue UI页面中metadata完全一致（相关用法参考[ab-manager-auf文档](../sdk/ab-manager-auf.md)）

2. 构造函数必写

3. run方法为auf实际调用的方法。该方法有一个入参，为上一个vue界面的vue实例

