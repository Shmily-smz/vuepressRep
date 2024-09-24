---
outline: deep
---

# config.json {#config.json}

> 用于编译时的配置

:::tip

1. 文件地址：与交易工程同级

:::

```json
{
  "devConfig": {
    "env": "web",
    "serviceEndPoint": "http://localhost:9050/",
    "resourcePath": "http://localhost:9050/",
    "publicPath": "ABX"
  },
  "requireContextSyntax": ["BaseModule/pages/test/index.js"]
}
```

## 配置参数

### devConfig
开发时配置

#### devConfig.env
配置环境，可选参数: `web` ｜ `abc`

```json
{
  "devConfig": {
    "env": "web"
  }
}
```

#### devConfig.serviceEndPoint
获取服务端 getFrontEndConfig 配置信息路径

```json
{
  "devConfig": {
    "serviceEndPoint": "http://localhost:9050/",
  }
}
```

#### devConfig.resourcePath
获取资源路径配置

```json
{
  "devConfig": {
    "resourcePath": "http://localhost:9050/",
  }
}
```

#### devConfig.publicPath
资源公共路径配置

```json
{
  "devConfig": {
    "publicPath": "ABX"
  }
}
```

### requireContextSyntax
webpack require.context 语法兼容。对于 js 文件来说，x5采用 swc 编译，如果使用 require.context 语法，指定该文件路径

```json
{
  "requireContextSyntax": ["BaseModule/pages/test/index.js"]
}
```