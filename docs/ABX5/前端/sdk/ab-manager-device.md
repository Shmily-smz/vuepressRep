# ab-manager-device@外设调用及配置

**注: 文档中的出现的*`URL`*接口都为demo测试地址,使用时请根据市场`ADS`服务接口自行替换**

## 1. 引入

```js
import { DeviceManager } from "@agree/ab-manager-device"
```

## 2. 使用

> **获取外设配置信息**

```js
    DeviceManager.getDeviceList({
        url: "http://ip:port/config/devicelist"
    }).then(res=>{
        //todo
    });
```
> **获取全部设备配置**

```js
    DeviceManager.getAllDevConfig({
        url: "http://ip:port/config/devallconfig"
    }).then(res=>{
        //todo
    });
```
> **保存全部设备配置**

```js
    DeviceManager.saveAllDevConfig({
        url: "http://ip:port/config/devallconfig",
        params: "外设的配置数据"
    }).then(res=>{
        //todo
    });
```

> **获取指定设备配置**

```js
    DeviceManager.getDevConfig({
        url: "http://ip:port/config/devconfig",
        params: "指定的设备名称"
    }).then(res=>{
        //todo
    });
```
> **保存指定设备配置**

```js
    DeviceManager.saveDevConfig({
        url: "http://ip:port/config/devconfig",
        params: "指定的设备配置数据"
    }).then(res=>{
        //todo
    });
```
> **获取系统硬件端口**

```js
    DeviceManager.getAllHardWare({
        url: "http://ip:port/config/hardware"
    }).then(res=>{
        //todo
    });
```
> **关闭外设服务**

```js
    DeviceManager.shutDown({
        url: "http://ip:port/config/shutDown"
    }).then(res=>{
        //todo
    });
```
> **解除设备占用**

```js
    DeviceManager.deoccupy({
        url: "http://ip:port/config/deoccupy",
        params: "设备名称"
    }).then(res=>{
        //todo
    });
```
> **获取设备状态**

```js
    DeviceManager.getAllDevStatus({
        url: "http://ip:port/config/devstatus"
    }).then(res=>{
        //todo
    });
```
**调用外设**

```js
DeviceManager.getDevice({
    url: "http://ip:port/req/"
    devType: "外设类型",
    printArg: "打印的数据",
    devParams: "ADS外设调用的参数"
}).then(res => {
    // todo
});
```

**全屏打印**
```js
// 全屏打印 没有回调方法
DeviceManager.getDevice({
    devType: "printTradePage",
})

```

> **DeviceManager Methods**

|方法名|说明|参数|参数类型|
|---|----|---|---|
|pushDeviceTypes|新增外设类型| 默认值:`["Id", "Msf", "Ic", "Ic_iccall", "Fp", "Pin", "PinEncrypt", "USBKey", "Gwq", "Scan", "Print", "Prt", "Deoccupy","Ykj","Aqd","ZP"]` |`string \|string[]`|

> **DeviceManager Events**

|事件|说明|参数|返回值参数|返回值类型|返回值说明|
|------|:------:|:-----:|:-----:|:-----:|:-----:|
| getDeviceList | 获取外设列表 | url:`http://ip:port/config/devicelist` | res.data | object | 例:`{外设名称BackClip:[{Name:"BackClip",CN:"移动背夹",Kind:[{Factory:"ZJYL",CN:"中金银利",LoadPath:"dll/BJYL/BackClip/YL_BackClip.dll"}]}`]}
| getAllDevConfig | 获取全部设备配置 | url:`http://ip:port/config/devallconfig` | res.data | object | 例:`{外设名称BackClip:{Factory:"",Port:"",ExtPort:""}}`
| saveAllDevConfig | 保存全部设备配置 | url:`http://ip:port/config/devallconfig` |
| getDevConfig | 获取指定设备配置 | url:`http://ip:port/config/devconfig`,params:指定的设备 | 例:`设备名称BackClip: "{"Factory":"","Port":"","ExtPort":""}"`
| saveDevConfig | 保存指定设备配置 | url:`http://ip:port/config/devconfig`,params:指定的设备配置 |
| getAllHardWare | 获取系统硬件端口 | url:`http://ip:port/config/hardware` | res.data | object | 例:`端口类型:{USB,HTTP://127.0.0.1:30102,FILE}`
| shutDown | 关闭外设服务 | url:`http://ip:port/config/shutdown` | res.date | string | 例:"ok"
| deoccupy | 解除设备占用 | url:`http://ip:port/config/deoccupy`,params:不传解除所有外设,传值->解除指定外设 |
| getAllDevStatus | 获取设备状态 | url:`http://ip:port/config/devstatus` |
| getDevice | 调用外设|devType:设备类型;printArg:调用打印外设所需参数,icParam:调用刷卡器所需参数 | res.data | object |
| pushDeviceTypes | 新增外设类型 | res.data | object |


getDevice 参数说明

|参数|说明|默认|
|---|---|---|
|url|调用外设的 URL **http://ip:port/req**/|null|
|devType|外设列表中name字段的值，(特殊全屏打印为printTradePage)|-|
|printArg|xml字符串，打印数据|-|
|devParams|ads 外设调用的配置(具体的查看ads的外设配置)| `{Id: "", Method: "Test", Args: "{}", ReadTimeout: 20, WriteTimeout: 20, Key: "", IsOccupy: "0", ListenPort: ""}` |



