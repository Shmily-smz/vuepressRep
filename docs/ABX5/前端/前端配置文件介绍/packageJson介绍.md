---
outline: deep
---

# package.json 说明介绍

## name

当前工程名称, `String`

## author

当前工程作者, `String`

## version

当前工程版本, `String`

## type

当前工程类型(Module 为交易模块), `String`

## style

描述当前工程需要加载的样式文件, `Array`

## moduleDependencies

描述当前工程的依赖工程, `Object`

**示例:**

```json
"moduleDependencies": {
  "BaseModule": "1.0.0"
}
```

## channels

> 工程内多渠道配置说明

- **字段类型:** `Object` ,默认为{}

- **详细信息:**

  工程编译时,不同渠道端所包含的文件(仅匹配当前工程下的渠道端文件)

  1. 柜面端(te)

  - include: `Array` ,一组匹配所要包含文件的匹配规则
  - exclude: `Array` ,一组匹配需排除文件的匹配规则

  2. 移动端(mt) (同上)

  结合 include 与 exclude 内的文件匹配规则，匹配到当前渠道端所属文件进行编译.

- **示例:**

```json
  "channels": {
    // 柜面端
    "te": {
      // 包含文件的匹配规则
      "include": [
        "BankModule/**/*"
      ],
      // 排除文件的匹配规则
      "exclude": [
        "BankModule/pages/mt/**/*"
      ]
    },
    // 移动端
    "mt": {
      "include": [
        "BankModule/pages/mt/**/*"
      ],
      "exclude": []
    }
  }
```

## extensions

> 工程的扩展项说明

---

### launcher

- **字段类型:** `Object` ,默认为{}
- **详细信息:**
  1. appEntry, `String` ,工程加载主画面文件路径.
  2. launcherEntry, `String` ,工程加载的主入口文件路径.
- **示例:**

```json
"launcher": {
  // path:// + 主入口画面在工程内的相对路径
  "appEntry": "path://BankModule/pages/主框架/App.vue",
  // path:// + 主入口文件在工程内的相对路径
  "launcherEntry": "path://BankModule/pages/主框架/app-loader.ts"
}
```

---

### htmlConfig

> `index.html`属性配置，非必需配置，默认{}

#### 字段类型

| name    | 类型   | 说明                          | required | default          |
| ------- | ------ | ----------------------------- | -------- | ---------------- |
| title   | string | `<title>{title}</title>`      | false    | 赞同科技智能柜台 |
| loading | object | 加载时启动画面                | false    | {}               |
| links   | array  | 需要全局加载的 `css` 资源文件 | false    | []               |
| scripts | array  | 需要全局加载的 `js` 资源文件  | false    | []               |

#### 示例

```json
// BankModule/package.json
{
  "extensions": {
    "htmlConfig": {
      "title": "赞同科技智能柜台",
      "loading": {
        "backgroundUrl": "BankModule/pages/static/img/login/登陆页.png"
      },
      "links": ["BankModule/pages/index.css"],
      "scripts": [
        {
          "src": "node_modules/rrweb/index.js",
          "global": true
        },
        "BankModule/pages/common/constants/soft-algorithm-min.js"
      ]
    }
  }
}
```

#### title

> 即`html`内的标签`title`

```html{4}
<html>
  <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
  </head>
</html>
```

#### loading

> 配置初始化资源时的`图片`，防止出现白屏，需要手动销毁

| name          | 类型   | 说明             | required | default |
| ------------- | ------ | ---------------- | -------- | ------- |
| backgroundUrl | string | 图片路径         | false    | ""      |
| time          | number | 销毁时的动画时长 | false    | 1.5s    |

```json
{
  "htmlConfig": {
    "loading": {
      "backgroundUrl": "BankModule/pages/static/img/login/登陆页.png",
      "time": 1.5
    }
  }
}
```

:::warning
初始化防白屏动画需要手动销毁，请在合适时机调用，例如登录页初始化前

```ts
window.x5.loading.destroy();
```

:::

#### links

> 需要全局加载的 `css` 资源文件

```json
{
  "htmlConfig": {
    "links": ["node_modules/rrweb-player/dist/style.css"]
  }
}
```

#### scripts {#htmlConfig-scripts}

> 需要全局加载的 `js` 资源文件

```ts
interface ScriptItem{
  src: string;
  global?: boolean = false;
}
type ScriptOptions = string | ScriptItem

htmlConfig.scripts: ScriptOptions;
```

| name   | 类型   | 说明                               | required | default |
| ------ | ------ | ---------------------------------- | -------- | ------- |
| src    | string | `js`资源路径                       | true     |         |
| global | number | 加载的资源文件是否定义了`全局变量` | false    | false   |

```json
{
  "htmlConfig": {
    "scripts": [
      {
        "src": "node_modules/rrweb/index.js",
        "global": true
      },
      "BankModule/pages/common/constants/soft-algorithm-min.js"
    ]
  }
}
```

- **global 说明**

如果引用的某资源文件内容结构如下,则说明此资源的使用方式为调用全局变量`window.rrweb`

```js
var rrrweb = (function (exports) {
  return exports;
})({});
```

1. 出现上述类似的资源，则需要配置`global`参数为`true`
   <!-- FIXME:编译需要额外的配置文件，让用户可配置 -->
   <!-- 2. 编译需要配置参数`externalsRegistryPackage: ['rrweb']` -->

### pluginConfig

- **字段类型:** `Object` ,默认为{}
- **详细信息:**
  1. 所需配置的插件名称,如: `postcss-px-to-viewport`.
  2. 根据不同渠道端设置不同的配置项(选填,根据所需添加配置项,其余配置项会走默认的配置).
  3. 某一渠道端若不需要添加插件，则将其删除即可(赋空对象仍会根据插件默认配置进行编译).
- **示例:**

```json
"pluginConfig": {
  // 插件名称
  "postcss-px-to-viewport": {
    // 柜面端 pxToVw 配置项 (不需要时,全部删除)
    // "te": {
    //   "viewportWidth": 1920,
    //   "viewportHeight": 1080,
    //   "unitPrecision": 3
    // },
    // 移动端 pxToVw 配置项
    "mt": {
      "viewportWidth": 2560,
      "viewportHeight": 1600
    }
  }
}
```

---

### 工程名.package-name-alias

- **字段类型:** `Array`,默认为[]
- **详细信息:**
  配置工程内所用的别名、别名所对应的目录
- **示例:**

```json
"BankModule.package-name-alias": [
  {
    "from": "@Base",
    "to": "BaseModule"
  },
  {
    "from": "@/@Bank",
    "to": "BankModule",
    "注释":"为了auf使用，auf的路径原来是有@/"
  },
  {
    "from": "@Bank",
    "to": "BankModule"
  },
  {
    "from": "@Msg",
    "to": "BankModule/pages/common/message"
  },
  {
    "from": "@BankUtil",
    "to": "BankModule/pages/common/utils"
  },
  {
    "from": "@BaseUtil",
    "to": "BaseModule/pages/common/utils"
  },
  {
    "from": "@BankMixin",
    "to": "BankModule/pages/common/mixins"
  },
  {
    "from": "@BaseMixin",
    "to": "BaseModule/pages/common/mixins"
  },
  {
    "from": "@BankStatic",
    "to": "BankModule/pages/static"
  },
  {
    "from": "@BaseStatic",
    "to": "BaseModule/pages/static"
  }
]
```

---

## dependencies

描述当前工程依赖的第三方 sdk, `Object`

**示例:**

```json
"dependencies": {
  "agree-public-client":"^2.0.2",
  "@agree/ab-manager-codec":"^2.0.3",
  "@agree/ab-plugin-device":"^2.0.8",
  "@agree/ab-manager-service":"^2.0.12",
  "vue-i18n":"8.27.0",
  "@agree/aui-m":"^1.5.20",
  "vuedraggable":"2.24.3"
}
```
