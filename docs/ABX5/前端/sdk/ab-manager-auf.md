---
outline: deep
---
# ab-manager-auf@轻量级画面流管理

## 1. 使用

**需要手动引入注册的部分**

> 在app-loaderjs里面
```js
//ab-manager-auf
import '@agree/ab-manager-auf/dist/auf-panel/index.css'
import { AufPlugin } from "@agree/ab-manager-auf"
Vue.use(AufPlugin,{
  $aufAlias:{
    // 项目中的别名
    '@FM': 'TEClientFM',
    '@TETrade': 'TEClientTrade',
    '@Trade': 'TEClientTrade',
    '@METrade': 'MEClientTrade',
    '@SSTrade': 'SSClientTrade',
    '@Project': 'TEProject',
  },
  //gulp打包需要添加此方法
  $loadAuf(path){
    return new Promise((resolve,reject)=>{
      require([`json!@/${path}.auf.json`],(module)=>{
        resolve(module)
      })
    })
  },
  //控制右键菜单显示，默认为true
  $canRightClickDirective:true,
  //是否在控制台打印log,默认为true
  $isConsoleLog:true,
  //打印日志的回调函数,log为当前返回的信息
  $callback:(log)=>{
    //XXX:对当前返回信息的处理
  },
  //步进式loadUId的timeout,不设置默认10000
  $stepTimeout:10000,
  //过滤属性不克隆(循环引用的对象) 
  $aufNotCopyKeys:[]
}) 
```

### 1.1 创建一个`xxx.auf.json`
> [具体json格式说明在后面会有详细介绍](#aufjson-文件的说明)

### 1.2 在主交易中使用如下

```vue
<template>
  <auf-panel
    ref="auf-panel"
    :_tradeId="tradeId"
    :getDomain="aufData"
  ></auf-panel>
</template>
<script>
import AUF from "xxx.auf.json";
export default {
  data(){
    return {
      tradeId: "",
      aufData: null
    }
  },
  mounted(){
    this.$refs["auf-panel"]._initAuf(AUF,{
      closeFunction:this.close,
      isShowAll:true||false,
      initVarMap:{},
      initArgs:{
        UserName:'张三'
      }
    });
  }
}
</script>
```

### 1.3 创建`UI`节点

```vue
<template>
  <div>
    <!-- 交易开发部分 TODO -->
    <!-- 交易尾部 -->
    <div class="section_footer" v-if="$showType == 'step'">
      <aui-button class="btn" plain @click="exit">退出</aui-button>
      <aui-button class="btn" plain @click="back">上一步</aui-button>
      <aui-button class="btn" plain type="primary" @click="next">下一步</aui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectService", // UI 节点必须有 name 名
  metadata: { // 声明全局数据,且对全局数据做权限管理
    globalArgs: {
      SeviceType: {
        desc: "业务类型",
      },
    },
    inArgs: {
      arg1: {
        desc: '入参1',
        default: ''
      }
    },
    outArgs: {},
    outlets: {
      normal: "正常",
      close: "关闭",
    }
  },
  data() {
    return {
    }
  },
  
};
</script>

```



### 1.4 创建`LFC`节点

```typescript
import { Lfc } from "@agree/ab-manager-auf"
import Vue from 'vue'

class TestLfc extends Lfc {
    $options: Options = {
      metadata: {
        caption: "是否需要身份核查",
        globalArgs: {},
        outlets: {
          normal: "正常",
          close: "关闭",
        },
        inArgs: {
        },
        outArgs: {

        }
      }
    };
    constructor(tradeId: string) {
        super(tradeId)
    }
    run(App: Vue) {
      //todo:此处output为lfc的出口名称
      return {
          output: 'normal',
          outArgs: {
          },
          dm: {
          }
      }

    }
}

export { TestLfc }

```

### 1.5 创建`AUF`节点

- 创建auf节点即创建一个新的auf交易，path绑定新auf交易的json文件


### 1.6 `AUF.JSON` 文件的说明

- 结构如下

```json
{
  "start": {
    "id": 19,
    "geometry": {
      "x": 40,
      "y": 70,
      "width": 60,
      "height": 60,
      "lane": 2
    }
  },
  "nodes": [
    {
      "id": 19,
      "type": "UI",
      "name": "One",
      "cname": "One",
      "alias": "",
      "path": "@TETrade/modules/demo/auf-demo/One",
      "defaultShow": true,
      "keywords": [],
      "inArgs": {
        "arg1": ""
      },
      "outArgs": {},
      "mapping": {},
      "output": {
        "normal": {
          "description": "正常",
          "type": "UI",
          "id": 18
        },
        "close": {
          "description": "关闭"
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 30,
        "y": 330,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 18,
      "type": "UI",
      "name": "提交测试页面",
      "cname": "One",
      "alias": "",
      "path": "@TETrade/modules/demo/One",
      "defaultShow": true,
      "keywords": [
        "dm.Amount"
      ],
      "inArgs": {},
      "outArgs": {},
      "mapping": {},
      "output": {
        "normal": {
          "description": "",
          "type": "LFC",
          "id": 14
        },
        "close": {
          "description": ""
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 300,
        "y": 390,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 20,
      "type": "AUF",
      "name": "画面流程",
      "cname": "test",
      "alias": "",
      "path": "@TETrade/modules/demo/test/test",
      "inArgs": {},
      "outArgs": {},
      "mapping": {},
      "output": {
        "normal": {
          "description": "正常",
          "type": "UI",
          "id": 15
        },
        "close": {
          "description": "关闭"
        },
        "error": {
          "description": "异常"
        }
      },
      "geometry": {
        "x": 520,
        "y": 480,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 16,
      "type": "UI",
      "name": "CheckId",
      "cname": "CheckId",
      "alias": "",
      "path": "@TETrade/modules/demo/auf-demo/CheckId",
      "defaultShow": true,
      "keywords": [],
      "inArgs": {
        "arg1": ""
      },
      "outArgs": {},
      "mapping": {},
      "output": {
        "normal": {
          "description": "正常",
          "type": "AUF",
          "id": 20
        },
        "close": {
          "description": "关闭"
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 510,
        "y": 350,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 14,
      "type": "LFC",
      "name": "是否需要身份核查",
      "cname": "TestLfc",
      "alias": "",
      "path": "@TETrade/modules/demo/auf-demo/TestLfc",
      "inArgs": {
        "Currency": "",
        "Amount": "",
        "CNYThreshold": "",
        "FCThreshold": ""
      },
      "outArgs": {},
      "mapping": {},
      "output": {
        "ver": {
          "description": "需要核查",
          "type": "UI",
          "id": 16
        },
        "noVer": {
          "description": "无需核查",
          "type": "UI",
          "id": 15
        },
        "error": {
          "description": "",
          "type": "UI",
          "id": 18
        }
      },
      "geometry": {
        "x": 510,
        "y": 140,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 15,
      "type": "UI",
      "name": "finished",
      "cname": "finished",
      "alias": "",
      "path": "@TETrade/modules/demo/auf-demo/finished",
      "defaultShow": true,
      "keywords": [],
      "inArgs": {
        "arg1": ""
      },
      "outArgs": {},
      "mapping": {},
      "output": {
        "normal": {
          "description": "正常",
          "id": 1001,
          "next": "normal"
        },
        "close": {
          "description": "关闭"
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 730,
        "y": 440,
        "width": 140,
        "height": 40
      }
    }
  ],
  "lanes": [
    {
      "id": 2,
      "name": "第一步",
      "description": "",
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "defaultPity": true,
      "defaultReplay": true,
      "contains": [
        19
      ],
      "geometry": {
        "x": 0,
        "y": 0,
        "height": 900,
        "width": 280
      }
    },
    {
      "id": 3,
      "name": "第二步",
      "description": "",
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "defaultPity": true,
      "defaultReplay": true,
      "contains": [
        18
      ],
      "geometry": {
        "x": 280,
        "y": 0,
        "height": 900,
        "width": 200
      }
    },
    {
      "id": 4,
      "name": "第三步",
      "description": "",
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "defaultPity": true,
      "defaultReplay": true,
      "contains": [
        20,
        16,
        14
      ],
      "geometry": {
        "x": 480,
        "y": 0,
        "height": 900,
        "width": 200
      }
    },
    {
      "id": 5,
      "name": "泳道",
      "description": "",
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "defaultPity": true,
      "defaultReplay": true,
      "contains": [
        15
      ],
      "geometry": {
        "x": 680,
        "y": 0,
        "height": 900,
        "width": 210
      }
    }
  ],
  "end": {
    "id": 1001,
    "geometry": {
      "x": 760,
      "y": 580,
      "width": 120,
      "height": 40,
      "lane": 5
    }
  },
  "globalArgs": {
  },
  "inArgs": {
    "PWD": {
      "desc": "密码",
      "default": "038432"
    }
  },
  "outArgs": {},
  "outlets": {}
}
```

- `start`

  | 属性名     | 说明                           |
  | ---------- | ------------------------------ |
  | `id`       | 交易的第一个节点`ID`           |
  | `geometry` | 配合`IDE`使用时,泳道展示的坐标 |

- `end`

  | 属性名     | 说明                           |
  | ---------- | ------------------------------ |
  | `id`       | 交易的结束节点`ID` 为 `1001`   |
  | `geometry` | 配合`IDE`使用时,泳道展示的坐标 |

- `nodes`

  | 属性名        | 说明                           | 默认值              |
  | ------------- | ------------------------------ | ------------------- |
  | `id`          | 节点唯一标志                   | -                   |
  | `type`        | 节点的类型(`UI`|`LFC`|`AUF`)   | -                   |
  | `name`        | 节点名称                       | 文件名,不可修改     |
  | `cname`       | 文件夹名                       | 文件名,不可修改     |
  | `alias`       | 节点的别名                     | 默认是文件名,可修改  |
  | `path`        | 节点的路径                     | -                   |
  | `defaultShow` | 节点默认是否显示               | `true`              |
  | keywords      | 关键字                         | -                   |
  | inArgs        | 入参                           | -                   |
  | outArgs       | 出参                           | -                   |
  | mapping       | 全局数据的映射                 | -                   |
  | output        | 出口                           | -                   |
  | geometry      | 配合`IDE`使用时,节点展示的坐标 | -                   |

- `lanes`

  | 属性名        | 说明                                       | 默认值 |
  | ------------- | ----------------------------------------- | ------ |
  | id            | 泳道的唯一标志                             | -      |
  | name          | 泳道的title                                | -      |
  | description   | 描述                              | -      |
  | defaultShow   | 是否显示                                   | `true` |
  | defaultOpen   | 是否展开                                   | `true` |
  | defaultJump   | 是否可回跳                                 | `true` |
  | defaultReset  | 是否可重置                                 | `true` |
  | defaultPity   | 是否可触发怜悯之心【缓存输入的数据】         | `true` |
  | defaultReplay | 是否可回放                                 | `true` |
  | contains      | 泳道展示节点的数组                          | -      |
  | geometry      | 配合`IDE`使用时,泳道展示的坐标              | -      |

### 1.7 `UI`节点的注意事项

> 确保节点都有 `name` 属性  
>
> 当前节点只能修改 `metadata`  中声明的全局数据

### 1.8 `LFC` 节点的说明

> `lfc`的逻辑写在`run`函数内,且都保证都有`return`返回值  
>
> `lfc`的返回值格式如下

| 属性名    | 说明                 |
| --------- | -------------------- |
| `output`  | 节点出口             |
| `outArgs` | 向下个节点传递的出参 |


## 2. 节点中可使用的方法

| 方法名       | 说明                                 | 参数                                |
| ------------ | ------------------------------------| ----------------------------------- |
| _next        | 跳转下一个                           | 节点出口的名字                      |
| _back        | 回到上一个                           | -                                   |
| $setKeyWords | 设置关键字                           | data包含的属性                      |
| $setIsReset  | 设置是否可重置                       | val : boolean<br />laneName: 泳道名 |
| $setIsReplay | 设置是否可回放                       | val : boolean<br />laneName: 泳道名 |
| $setIsPity   | 设置是否触发怜悯之心【缓存输入的数据】| val : boolean<br />laneName: 泳道名 |
| $setIsJump   | 设置是否可以回跳                     | val : boolean<br />laneName: 泳道名 |

## 3. 节点中可以使用的属性

| 属性名    | 说明                       | 默认值 |
| --------- | -------------------------- | ------ |
| $showType | 交易展示的类型(平铺\|泳道) |        |
| $isFirstUI          |     第一个UI节点                       |        |
| $isLastUI       |           有可能是最后一个UI节点                 |        |

