---
outline: deep
---
# ab-manager-service@服务管理

管理页面调用的服务，包括向服务器发送请求以及外设调用。

## 1. 引入并初始化

```js
import { ServiceManager } from '@agree/ab-manager-service'

let services = [{
        desc: '登录请求',
        name: 'login',
        url: '/login',
        baseURL: 'http://187.0.0.1:8087',
        type: 'post',
        customData: (...args) => args,
        customConfig: (...args) => args
    },{
        desc: '关于',
        name: 'about',
        url: '/about',
        type: 'post',
    }],
    errorHandle = (error) => {},
    config = {
        baseURL: 'http://127.0.0.1:8087',
        headers: {
            atoken: 'sdklglglknlnlmd='
        }
    };

let serviceManager = new ServiceManager({ services, errorHandle, config });
```

## 2. 发送请求

### 2.1 方法1
```js
serviceManager.getService(serviceName[, parameter, config]).then(res => {
    // 回调函数
});
```
 
> 数组中参数可省略，当 `customData` 和 `customConfig` 不存在时，传递的参数就是最终的传参结果。当 `customData` 和 `customConfig` 存在时，两个参数分别对应 `customData` 和 `customConfig` 中自定的方法的入参，最终传参结果为两个自定义函数的返回值

### 2.2 方法2

```js
let response =  await serviceManager.post(serviceItem,{ data, config})

let response =  await serviceManager.get(serviceItem, { data, config})

```

| 参数 | 类型 | 说明 | 默认值
|-------|-------|-------|
| serviceItem | service 对象(见参数结构中service 对象)| 服务描述 | --- |
| data | — | 请求中的参数 | --- |
| config | — | 服务配置 | --- |

>config参数中可以配置inherit参数, true的话继承初始化时全局配置的参数, 默认为true

> serviceItem参数中的`customData` 和 `customConfig` 为function类型


## 3. 自定义形式

> 如果配置config属性，config中的baseURL会覆盖原有的baseURL。baseURL 的优先级是 config 参数的 baseURL > 单个 service 的 baseURL > new 时传递的总的 baseURL

### 3.1 自定义参数形式(customData)

如果设置customData属性，表示自定义参数形式，最终的参数类型就是customData函数的返回值。

例3 —— 自定义参数形式：

```js
serviceManager.getService('login', {name: 'Jack', age: 20}).then(res => {
    // 回调函数
});
```

```js
customData: function(param) {
    param.height = 180;
    return param;
}
```

最终传参为：

```js
{
    name: "Jack",
    age: 20,
    height: 180
}
```

### 3.2 自定义config形式(customConfig)

如果设置customConfig属性，表示自定义config形式，最终的config类型就是customConfig函数的返回值。

例3 —— 自定义config形式：

```js
serviceManager.getService('login', {name: 'Jack', age: 20}, {headers:{"X-AmebaCloud-Token":""}}).then(res => {
    // 回调函数
});
```

```js
customConfig: function(config) {
    config.timeout = 15000;
    return config;
}
```

最终传参为：

```js
{
    headers: {"X-AmebaCloud-Token":""},
    timeout: 15000
}
```

## 4. 错误处理

errorHandle 参数接收一个错误处理函数，请求失败时会被调用。也可以在拦截器里处理。

## 5. 拦截器

可定义请求/响应拦截器

```js
// 注册请求拦截器
serviceManager.interceptors.request((state, arg) => {
    if(state === 'success') {
        // do something
        return arg;
    }
    if(state === 'error') {
        // do something
        return Promise.reject(arg);
    }
});

// 注册响应拦截器
serviceManager.interceptors.response((state, arg) => {
    if(state === 'success') {
        // do something
        return arg;
    }
    if(state === 'error') {
        // do something
        return Promise.reject(arg);
    }
});
```

## 6. 开启一机一密
通过参数设置是否开启一机一密

**一机一密在>=2.0.12的版本中将SM2加密顺序配合服务端改为C1C3C2，之前是C1C2C3**

```js
import { ServiceManager } from '@agree/ab-manager-service'

let services = [],
    errorHandle = (error) => {},
    config = {
        baseURL: 'http://127.0.0.1:8087',
        isOpenEncrypt: true, //true表示开启一机一密
        encryptUrlMsg: {     //开启一机一密需要配置 获取SM2公钥和上送SM4key的服务地址
            pubkey: '/abs/getPublicKey',  //获取SM2公钥的服务地址
            postPrivateKey: '/abs/negotiationKey' //上送SM4key的服务地址
        }
    };

let serviceManager = new ServiceManager({ services, errorHandle, config });
```

## 7. 初始化完成的回调
可以传入一个初始化的回调，在初始化完成后会调用这个回调。例如在开启一机一密后，可以在初始化结束后再去进行之后的请求。

```js
import { ServiceManager } from '@agree/ab-manager-service'

let services = [],
    errorHandle = (error) => {},
    config = {
        baseURL: 'http://127.0.0.1:8087',
        isOpenEncrypt: true, //true表示开启一机一密
        encryptUrlMsg: {     //开启一机一密需要配置 获取SM2公钥和上送SM4key的服务地址
            pubkey: '/abs/getPublicKey',  //获取SM2公钥的服务地址
            postPrivateKey: '/abs/negotiationKey' //上送SM4key的服务地址
        }
    },
    hooks = {
        init: () => {
                //do something
            }
    };

let serviceManager = new ServiceManager({ services, errorHandle, config, hooks });
```

## 8. 方法

### 8.1 getServiceList 获取服务列表

```js
let res = serviceManager.getServiceList()
```

### 8.2 addService 新增服务

```js
serviceManager.addService(
    {
        desc: '登录请求',
        name: 'login',
        url: '/login',
        baseURL: 'http://187.0.0.1:8087',
        type: 'post',
    }
)
```

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| services | service | 服务描述对象|

### 8.3 deleteService 删除服务

```js
serviceManager.deleteService('login')
```

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| serviceName | string | 服务名 |

### 8.4 setServiceTimeout 设置超时时间

```js
serviceManager.setServiceTimeout(1000)
```

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| timeout | Number | 超时时间 |

### 8.5 getServiceTimeout 获取超时时间

```js
let res = serviceManager.getServiceTimeout()
```

### 8.6 getInstance 获取服务管理器实例

```js
let res = serviceManager.getInstance()
```


## 9. 参数结构

**构造函数参数对象**

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| services | Array | 服务描述对象数组 |
| errorHandle | Function | 错误处理函数 |
| config | Object | 配置信息 |

**service 对象**

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| desc | string | 请求描述 |
| type | string | 请求类型 |
| name | string | 定义的服务名称 |
| url | string | 请求路径 |
| baseURL(可选) | string | 请求路径的 baseURL |
| customData(可选) | function | 自定义参数的方法 |
| customConfig(可选) | function | 自定义配置的方法 |

**getService参数**

| 参数 | 类型 | 说明 |
|-------|-------|-------|
| serviceName | string | 服务名称 |
| parameter | — | 请求中的参数 |
| config | — | 服务配置 |

**interceptors参数**

| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| state | string | 'error','success' | 当前拦截器所在操作状态 |
| arg | — | — | state为success时，request拦截器为其配置，response拦截器为相应结果 \n state为error时，表示错误信息 |

## 10. 常见问题

**1. 缺少 @agree/ab-manager-codec、uuid 之类的包依赖报错**

报错内容：<br>
`Uncaught Error: Script error for "uuid", needed by: @agree/ab-manager-service/dist/lib/utils`<br>
`Uncaught Error: Script error for "@agree/ab-manager-codec", needed by: @agree/ab-manager-service/dist/lib/service-manager`

解决办法：<br>
安装 `@agree/ab-manager-codec`、`uuid` 即可。版本即为ab-manager-service/package.json里面dependencies写的对应版本

```bash
npm i @agree/ab-manager-codec@2.0.3
npm i uuid@8.3.2
```

安装后如果还报错请检查工程TEClient下package.json里面的dependencies里是否有对应依赖的配置，如没有，则需要配置。如果配置了之后还报依赖uuid找不到需要去工程TEClient根目录下script文件夹下修改两个文件(如script下没有这两个文件，则代表已经配置好了)，具体为：<br>
`TEClient/script/build/settings/template-setting/require-config-setting/packages-setting.js` 里的`packagesSetting`中添加：

```js
{
    name: "uuid",
    main: 'dist/umd/uuid.min'
}
```

`TEClient/script/build/settings/template-setting/require-config-setting/paths-setting.js`里的`modulesPathsSetting`中添加：

```js
'uuid': '../node_modules/uuid'
```