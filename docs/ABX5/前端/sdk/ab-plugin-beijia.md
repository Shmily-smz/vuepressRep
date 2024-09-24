---
outline: deep
---
# ab-plugin-beijia 背夹组件

## 1. 引入

```js
import { BeiJia } from "@agree/ab-plugin-beijia";
```

## 2. 使用


## 3. 蓝牙和其他

### 3.1 openBluetooth --打开蓝牙

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let ret = await BeiJia.openBluetooth();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 返回参数列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| code | int    | 0 打开成功，-1 打开失败  |
| name | string | 错误信息，成功时无返回值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.openBluetooth</font>

---

### 3.2 closeBluetooth --关闭蓝牙

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let ret = await BeiJia.closeBluetooth();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 返回参数列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| code | int    | 0 关闭成功，-1 关闭失败  |
| name | string | 错误信息，成功时无返回值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeBluetooth</font>

---

### 3.3 searchDevice --搜索蓝牙设备，获取附近蓝牙，包括配对和不配对的

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10
  };
  let ret = await BeiJia.searchDevice(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|---------|--------- |
| timeout | int | √ | 10   | 应用Id，对应apps目录下的子应用目录名称 |

- success 返回参数列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------------- |
| address | String | 蓝牙 Mac 地址                |
| name    | String | 蓝牙名称，这个名称可能不存在 |

- fail 返回参数列表:

| 参数    | 类型   | 说明                 |
| ------- | ------ | -------------------- |
| code    | String | 错误码               |
| message | String | 错误信息，蓝牙未开启 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.searchDevice</font>

---

### 3.4 stopSearchDevice --停止搜索蓝牙设备

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let ret = await BeiJia.stopSearchDevice();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- success 返回参数列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------------- |
| code | String | 0              |
| message    | String | - |

- fail 返回参数列表:

| 参数    | 类型   | 说明                 |
| ------- | ------ | -------------------- |
| code    | String | 错误码               |
| message | String | 错误信息，蓝牙未开启 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.stopSearchDevice</font>

---

### 3.5 getCurrentDevice --获取匹配的蓝牙

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {};
  let ret = await BeiJia.getCurrentDevice(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- success 返回参数列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------------- |
| address | String | 蓝牙 Mac 地址                |
| name    | String | 蓝牙名称，这个名称可能不存在 |

- fail 返回参数列表:

| 参数    | 类型   | 说明                 |
| ------- | ------ | -------------------- |
| code    | String | 错误码               |
| message | String | 错误信息，蓝牙未开启 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getCurrentDevice</font>

---

### 3.6 getBluetoothStatus --查询蓝牙连接状态

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {};
  let ret = await BeiJia.getBluetoothStatus(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- success 返回参数列表:

| 参数 | 类型 | 说明                  |
| ---- | ---- | --------------------- |
| code | int  | 1：蓝牙开 0：蓝牙关闭 |

- fail 返回参数列表:

| 参数    | 类型   | 说明     |
| ------- | ------ | -------- |
| code    | String | 错误码   |
| message | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getBluetoothStatus</font>

---

## 4. 基础接口

### 4.1 openDevice --连接背夹设备

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
     type: 1, 
     device: "huaxin", // 厂商名称,需要根据蓝牙名称判断
     mac: "" // 背夹的mac地址
  }
  let ret = await BeiJia.openDevice(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| -----| ------ | ---|-------|----------- |
| type | int | √ |   -   | 连接方式：0-USB 连接，1-蓝牙连接 |
| name | String | √ |   -   | 同时支持蓝牙名称或者mac |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.openDevice</font>

---

### 4.2 closeDevice --关闭设备连接

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let ret = await BeiJia.closeDevice();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeDevice</font>

---

### 4.3 getBatteryInfo --获取电池信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {}
  let ret = await BeiJia.getBatteryInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |
| isBatteryExist | int | 有无电池：0-无电池，1-有电池 |
| direction | int | 电池电流方向：0-放电，1-充电 |
| electricity | String | 电量百分比 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getBatteryInfo</font>

---

### 4.4 getDeviceSerialID --获取设备序列号

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.getDeviceSerialID(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| sn | String | 各厂商自定义的设备序列号。该序列号应该同设备外观上注明的设备编号相同 |
| errMsg | String | 错误信息 |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceSerialID</font>

---

### 4.5 isConnect --设备是否连接

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.isConnect(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| errMsg | String | 错误信息 |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.isConnect</font>

---

### 4.6 getDeviceState --检测设备模块信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    moduleName: "SR,FR",
    timeout: 10
  }
  let ret = await BeiJia.getDeviceState(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

入参列表

| 参数    | 类型 | 必填参数 | 默认值 | 说明  |
| ------- | ---- | ------ | ---- | -------------------- |
| timeout | int  | -     | -   | 通讯超时时间,单位:秒，范围0~100 |
| moduleName |String | -     | - |模块名称（如需查询多个模块，以逗号分隔），读卡器：CR （所有读卡器的总称，如需查询指定读卡器，请填写具体读卡器模块名称 ），非接触式身份证读卡器：IDC，非接触式IC卡读卡器：ICC，接触式IC卡读卡器：ICCX，指纹仪：FR，签名版：SR，磁条卡：MR，密码键盘：PR |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| errMsg | String | 错误信息 |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| 模块名（SR/MR等）| int | 状态码（0，-1） |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceState</font>

---

### 4.7 getDeviceVersion --获取外设版本 

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    timeout: 20
  }
  let ret = await BeiJia.getDeviceVersion(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | - |   -   | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int | 成功返回 0，失败返回错误码 |
| errMsg | String | 错误信息 |
| version | String | 版本信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceVersion</font>

---

### 4.8 updateDevice --更新外设

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    osPath: ""
  }
  let ret = await BeiJia.updateDevice(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| osPath | String | √ |   -   | 背夹的系统文件 |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |成功返回 0，失败返回错误码 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.updateDevice</font>

---

## 5. 身份证

### 5.1 getIDCardInfo --获取身份证信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20
  }
  let ret = await BeiJia.getIDCardInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|-------|----------- |
| timeout | int | - |   -   | 通讯超时时间,单位:秒，范围0~100 |


- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|code	           | int	    |返回对应错误码，若成功，该值为 0|
|errMsg	         | 	 String   | 错误信息 |
|cardType	       | int	    |0：大陆居民 1：外国剧名，2：港澳台居民|
|chineseName	   |  String	|中文姓名|
|englishName	   |   String	|英文名|
|sex	           |   String	  |  性别: 男 ，女 |
|nationality	   |   String	|民族|
|birthday	       | String	  |出生日期（YYYYMMDD）|
|address	       |   String	|住址|
|idcardNO	       | String	|身份证号码（通行证号码）|
|passportNO	     | String	|签证版本号（外国人身份证信息才有此属性）|
|organizationCode|	String|	签发机关|
|expiryDate	     | String	|有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)|
|idPhoto	       |   JSON	|  身份证照片(本地存储路径)|
|fpld	           | String	|身份证指纹仪信息（1024 字节指纹信息 base64 编码）|

- idPhoto参数列表

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|frontImagePath	|String| 正面照片路径|
|backImagePath	|String| 背面照片路径|
|mergeImagePath	|String| 合成照片路径|
|avatarImagePath	|String	| 裁剪后头像照片路径|
|frontImageBase64	|String	| 正面照片base64编码|
|backImageBase64	|String	| 背面照片base64编码|
|mergeImageBase64	|String	| 合成照片base64编码|
|avatarImageBase64	|String	| 裁剪后头像照片base64编码|

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font>

---

### 5.2 getIDCardInfo --读取港澳台居民居住证信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20
  }
  let ret = await BeiJia.getIDCardInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|-------|----------- |
| timeout | int | √ |   -   | 超时时间，单位（S） |


- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|code	           | int	    |返回对应错误码，若成功，该值为 0|
|errMsg	         | 	 String   | 错误信息 |
|chineseName	   |  String	|中文姓名|
|sex	           |   String	  |  性别: 男 ，女 |
|idcardNO	       | String	|身份证号码（通行证号码）|
|birthday	       | String	  |出生日期（YYYYMMDD）|
|organizationCode|	String|	签发机关|
|address	       |   String	| 居住地址 |
|expiryDate	     | String	|有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)|
|passCheck 	     | -	| 通行证号 |
|checkTimes  	     | -	| 签发次数 |
|idPhoto	       |   JSON	|  身份证照片(本地存储路径)|
|fpld	           | String	|身份证指纹仪信息（1024 字节指纹信息 base64 编码）|
|cardType	       | int	    |0：大陆居民 1：外国剧名，2：港澳台居民|

- idPhoto参数列表

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|frontImagePath	|String| 正面照片路径|
|backImagePath	|String| 背面照片路径|
|mergeImagePath	|String| 合成照片路径|
|avatarImagePath	|String	| 裁剪后头像照片路径|
|frontImageBase64	|String	| 正面照片base64编码|
|backImageBase64	|String	| 背面照片base64编码|
|mergeImageBase64	|String	| 合成照片base64编码|
|avatarImageBase64	|String	| 裁剪后头像照片base64编码|

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font>

---

### 5.3 getIDCardInfo --读取外国人永久居留身份证信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20
  }
  let ret = await BeiJia.getIDCardInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|-------|----------- |
| timeout | int | √ |   -   | 超时时间，单位（S） |


- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|code	           | int	    |返回对应错误码，若成功，该值为 0|
|errMsg	         | 	 String   | 错误信息 |
|chineseName	   |  String	|中文姓名|
|sex	           |   String	  |  性别: 男 ，女 |
|idcardNO	       | -	|身份证号码（通行证号码）|
|birthday	       | -	  |出生日期（YYYYMMDD）|
|organizationCode|	-|	签发机关|
|areaNO |	-|	国籍或所在地区代码 |
|expiryDate	     | String	|有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)|
|cardVersion 	       | int	    |证件版本|
|idPhoto	       |   JSON	|  身份证照片(本地存储路径)|
|fpld	           | String	|身份证指纹仪信息（1024 字节指纹信息 base64 编码）|
|cardType 	       |   int	|  0：大陆居民 1：外国剧名，2：港澳台居民 |

- idPhoto参数列表

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
|frontImagePath	|String| 正面照片路径|
|backImagePath	|String| 背面照片路径|
|mergeImagePath	|String| 合成照片路径|
|avatarImagePath	|String	| 裁剪后头像照片路径|
|frontImageBase64	|String	| 正面照片base64编码|
|backImageBase64	|String	| 背面照片base64编码|
|mergeImageBase64	|String	| 合成照片base64编码|
|avatarImageBase64	|String	| 裁剪后头像照片base64编码|

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font>

---

### 5.4 cancelReadIDCard --取消读身份证

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.cancelReadIDCard(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadIDCard</font>

---

## 6. IC卡

### 6.1 getICCardInfo --IC卡读取基本信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20,
    icType: 3,
    aidList: "A000000333010101|A000000333010102|A000000333010103|A000000333010106",
    tagList: "AB"
  }
  let ret = await BeiJia.getICCardInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | √ |   -  | 请求超时时间 |
| ictype | int | √ |   -  | IC卡类型，1接触，2非接，3自动 |
| aidList | String | √ |   -  | 值为金融IC卡的应用列表，借记卡为“A000000333010101”，贷记卡为“A000000333010102”，也可以传入空，NULL或“”。 |
| tagList | String | √ |   -  | 要读取的信息标签，例:”A” 详细标签及其说明见统一规范文档 |

- tagList标签列表:

| 数据元    | 来自IC卡的数据 | 标签 |  标签ASCII码  |
| ------- | ------ | -------|--------------- |
| 卡号 |	 	| 0x41 | 	A   |
| 姓名 |	 	| 0x42 | 	B   |
| 证件类型  |	HEX值: 00-身份证 01-军官证 02-护照 03-入境证 04-临时身份证 05-其它| 0x43| 	C |
| 证件号码 	| 	0x44 |	D  |
| 余额 |	不带小数点 	| 0x45 |	E  |
| 余额上限 	|不带小数点 |	0x46 |	F  |
| 单笔交易限额 	| 	|0x47 |	G |
| 交易货币代码 	| 	|0x48 |	H |
| 失效日期 	 |	   |0x49 	| I |
| IC卡序列号 	| 	|0x4A 	| J |
| 二磁道信息 	| 	|0x4B 	| K |
| 一磁道信息 	 |	|0x4C 	| L |
| 返回所有信息 	 |	 	|  | ALL  |
 
- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |是否刷卡成功，成功为 0，失败为对应错误码 |
| errMsg | String | 错误信息  |
| A | String | 格式：标签（1个字节）+ 十进制长度（3个字节）+数据（N字节）|

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCardInfo</font>

---

### 6.2 iccPowerOn --IC卡上电

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10,
    icType: 1
  }
  let ret = await BeiJia.iccPowerOn();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|---------|--------- |
| timeout | int | √ | -   | 超时时间 |
| icType | int | √ | -   | IC卡类型，1 接触，2 非接，3 自动识别  |

- 返回参数列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| code | int    | 若失败，返回对应错误码，若成功，该值为0  |
| errMsg | string | 错误信息 |
| attrs | string | Attrs 数据 hex string |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.iccPowerOn</font>

---

### 6.3 iccPowerOff --IC卡下电

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    icType: 1
  }
  let ret = await BeiJia.iccPowerOff();
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|---------|--------- |
| icType | int | √ | -   | IC卡类型，1 接触，2 非接，3 自动识别  |

- 返回参数列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| code | int    | 0 打开成功，-1 打开失败  |
| errMsg | string | 错误信息，成功时无返回值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.iccPowerOff</font>

---

### 6.4 getICCARQC --IC卡读取ARQC

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    icType: 1,
    tradeData:"A000000333010101|A000000333010102",
    aidList:"AB"
  }
  let ret = await BeiJia.getICCARQC(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| icType | int | - |   -   | IC卡类型，1 接触，2 非接，3 自动识别  |
| aidList | String | - |  -  | 值为金融 IC 卡的应用列表，借记卡为“A000000333010101”，贷记卡为“A000000333010102”，也可以传入空，NULL 或“”。 |
| tradeData | String | - |   -  | 交易数据，产生ARQC的数据，包含多个标签变量，参考下面标签列表 |

- tradeData标签列表:

|  数据元    | 来自终端的数据   | 标签  | 标签ASCII码 |
| ------- | ------ | ------------|---------- |
| 授权金额 	| 不带小数点，单位为分 |	0x50 |	P |
| 其它金额 	| 不带小数点，单位为分 |	0x51 |	Q |
| 交易货币代码 |	0x0156 (人民币 CNY ) |	0x52 | 	R |
| 交易日期 |	YYMMDD |	0x53 |	S |
| 交易类型 |	《中国银联银行卡联网联合技术规范V2.1 第2部分 报文接口规范.pdf》6.4 域3 交易处理码 |	0x54 |	T |
| 交易时间 |	时分秒中间无分隔符 如：“110530”|	0x55 |	U |
| 商户名称 	| 	   | 0x57 | 	W  |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |成功返回 0，失败返回错误码 |
| errMsg | String | 错误信息 |
| ARQC | String | 授权请求密文及其相关数据，按银联规范中 55 域的数据, ASCII 码的形式 |
| tradeAppData | String | 交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K字节 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCARQC</font>

---

### 6.5 getICCTradeDetail --IC 卡读取交易明细 

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    icType: 1,
    aidList: ""
  }
  let ret = await BeiJia.getICCTradeDetail(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| icType  | int | √ |   -   | IC卡类型，0接触，1非接  |
| aidList   | String | √ |   -   | 值为金融IC卡的应用列表，借记卡为"A000000333010101"，贷记卡为"A000000333010102"也可以传入空，NULL或“”  |

- tradeDetail标签列表:

|  数据元    | 来自终端的数据   | 标签  | 标签ASCII码 |
| ------- | ------ | ------------|---------- |
| 授权金额 |	不带小数点,单位为分 |	0x50 |	P |
| 其它金额 |	不带小数点,单位为分 |	0x51 |	Q |
| 交易货币代码 	| 	0x52 |	R |
| 交易日期 |	YYMMDD|	0x53 |	S |
| 交易类型 |	2字节 |	0x54 |	T |
| 交易时间 |	HHMMSPDB |	0x55 |	U |
| 终端国家代码 	|     |	0x56 |	V |
| 商户名称 	|     |	0x57 |	W |
| 应用交易计数器（ATC） |	按十进制输出 |	0x58 |	X |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |成功返回 0，失败返回错误码 |
| errMsg | String | 错误信息 |
| tradeDetail | - | 返回的交易日志，每条日志数据包含多个标签变量。数据组合形式为：明细条数（2 位）+明细总长度（3 位）+各条明细数据。各条明细数据组合形式为：标签（1 位）+长度（3 位）+数据 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCTradeDetail</font>

---

### 6.6 getICCardInfoAndARQC --IC 卡读取全部信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    icType: 1,
    aidList: "",
    timeout: 20,
    tagList:"A",
    tradeData: ""
  }
  let ret = await BeiJia.getICCardInfoAndARQC(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| icType | int | √ |   -   | IC卡类型，1 接触，2 非接，3 自动识别  |
| aidList | String | √ |   ""  | 值为金融 IC 卡的应用列表，借记卡为"A000000333010101"，贷记卡"A000000333010102"，也可以传入空，NULL 或""。 |
| tagList | String | √ |   -   | 要读取的信息标签，例:”A” |
| timeout | int | √ |   -   | 超时时间，单位（S）  |
| tradeData | String | √ |   ""  | 交易数据，产生ARQC的数据，包含多个标签变量，参考下面标签列表 |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |
| ARQC | String | 授权请求密文及其相关数据，按银联规范中 55 域的数据, ASCII 码的形式 |
| tradeAppData | - | 交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K 字节 |
| A | String | “A”: “0196228231825021494762” ，格式：标签（1个字节）+ 十进制长度（3个字节）+数据（N字节），（标签为A，长度为019，内容为6228231825021494762） |
| 55field | String | 字符串"arqc_9F26"：55field格式为键值对格式 |

- 55域JSON对象: 

| 返回值    | 返回值说明  |
| ------- | ------ |
| arqc_9F26| 应用密文 |
| arqc_9F27| 密文信息数据  |
| arqc_9F10| 发卡行应用数据 |
| arqc_9F37	| 随机数(4 字节) | 
| arqc_9F36	| ATC  |
| arqc_95	 | 终端验证结果  |
| arqc_9A	| 终端验证结果 |
| arqc_9C	| 交易类型 |
| arqc_9F02	| 授权金额 |
| arqc_5F2A	| 交易货币代码 |
| arqc_82	| 应用交互特征 |
| arqc_9F1A	| 终端国家代码 |
| arqc_9F03	| 其它金额 |
| arqc_9F33	| 终端性能 |
| arqc_9F13	| 上次联机应用交易计数器寄存器 |
| arqc_5A	| 应用主账号 |
| arqc_5F34	| 应用 PAN 序列号  |
| arqc_CVR	| 卡片验证结果 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCardInfoAndARQC</font>

---

### 6.7 cancelReadICCard --取消读IC卡

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.cancelReadICCard(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadICCard</font>

---

### 6.8 writeARPCExeICScript --向IC卡发送ARPC，发送写卡脚本

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    strTxData: "",
    strARPC: "",
    CDol2: "",
    timeout: ""
  }
  let ret = await BeiJia.writeARPCExeICScript(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | ---|---------|--------- |
| strTxData | String | √ | -   | 交易数据，与ARQC交易数据相同 |
| strARPC | String | √ | - | 授权响应密文，后台返回的银联规范的55域数据，ASCII码的形式。若执行脚本需在后面添加脚本域数据 |
| CDol2 | String | √ | -   | 交易应用数据，在取ARQC时输出的交易应用数据 |
| timeout | String | - | -   | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| scriptReslut | - | 交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K 字节 |
| errMsg | String | 错误信息 |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.writeARPCExeICScript</font>

---

## 7. 磁条卡

### 7.1 getMCCardInfo --获取MC磁条卡信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    tracks: 23,
    timeout: 20
  }
  let ret = await BeiJia.getMCCardInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| tracks | int | √ |   -  | 1：读取1磁道，2：读取2磁道， 3：读取三磁道， 23：读取23磁道   |
| timeout | int | - |   -  | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |是否刷卡成功，成功为0，失败为对应错误码 |
| errMsg | String | 错误信息 |
| pan | String | 主账号（卡号） |
| track1 | String | 磁道1数据 |
| track2 | String | 磁道2数据 |
| track3 | String | 磁道3数据 |
| expiredDate | String | 卡片有效期(yyMM) |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getMCCardInfo</font>

---

### 7.2 cancelReadMCCard --取消读MC卡

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.cancelReadMCCard(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadMCCard</font>

---

## 8. 指纹

### 8.1 getFpBuffer --获取上传指纹状态

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    timeout: 10
  }
  let ret = await BeiJia.getFpBuffer(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | - |   -  | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getFpBuffer</font>

---

### 8.2 getFpInfo --获取指纹信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20
  }
  let ret = await BeiJia.getFpInfo(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | Number | √ |   -  | 请求超时时间 |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |
| picture | String | 指纹特征图片储存路径 |
| pictureBase64	| String | 指纹特征图片Base64 |
| fpld | - | 指纹特征值 |
| factory | - | 厂商代码，tc: 天成   zz:中正 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getFpInfo</font>

---

### 8.3 cancelReadFp --取消读指纹卡

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.cancelReadFp(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int |成功返回 0，失败返回错误码 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadFp</font>

---

## 9. 密码键盘

### 9.1 resetKeys --重置密码键盘

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    timeout: 10
  }
  let ret = await BeiJia.resetKeys(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```
- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | Number | - |   -  | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.resetKeys</font>

---


### 9.2 resetInitKeys --重置密码键盘(金华)



> <font color ='green' style="font-weight:bold">支持移动渠道</font>



示例：



```js
try {
  let params = { 
    strInitKey: ""
  }
  let ret = await BeiJia.resetInitKeys(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```
- 入参列表:



| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| strInitKey | String | Y|   -  | key1 初始密钥 |



- 出参列表:



| 参数    | 类型   | 说明                         |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String | 错误信息 |



> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.resetInitKeys</font>



---

### 9.3 updateTMK --柜外清方式更新主秘钥

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    keyType : 1,
    TMKIndex : 0,
    mKey : ""
  }
  let ret = await BeiJia.updateTMK(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| keyType     | int | - |   -  | 主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4   |
| TMKIndex | int | - |   -  | 主密钥索引 0-7 |
| mKey  | String | - |   -  | 主密钥 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| errMsg | String | 错误信息 |
| checkValue | - | 校验值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.updateTMK</font>

---

### 9.4 downloadTMK --柜外清方式下载主秘钥

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    keyType : 1,
    TMKIndex : 0,
    mKey : ""
  }
  let ret = await BeiJia.downloadTMK(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| keyType     | int | - |   -  | 主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4   |
| TMKIndex | int | - |   -  | 主密钥索引 0-7 |
| mKey  | String | - |   -  | 主密钥 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| errMsg | String | 错误信息 |
| checkValue | - | 校验值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadTMK</font>

---

### 9.5 downloadMasterKey --下载主密钥 (金华银行新增)


> <font color ='green' style="font-weight:bold">支持移动渠道</font>


示例：


```js
try {
  let params = { 
    keyType : 1,
    TMKIndex : 0,
    strKey : "",
	strHex:""
  }
  let ret = await BeiJia.downloadMasterKey(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```


- 入参列表:


| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| keyType     | int | - |   -  | 主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4   |
| TMKIndex | int | - |   -  | 主密钥索引 0-7 |
| strKey  | String | - |   -  | 主密钥 |
| strHex  | String | - |   -  | 校验值 |

- 出参列表:


| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| errMsg | String | 错误信息 |



> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadMasterKey</font>


---
### 9.6 downloadTPK --柜外清方式下载工作秘钥

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    keyType : 1,
    TMKIndex : 0,
    TPKIndex: 0,
    wKey : ""
  }
  let ret = await BeiJia.downloadTPK(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| keyType     | int | - |   -  | 主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4   |
| TMKIndex | int | - |   -  | 主密钥索引 0-7 |
| TPKIndex  | int | - |   -  | 工作密钥索引 0-7 |
| wKey  | String | - |   -  | 工作密钥密文 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| errMsg | String | 错误信息 |
| checkValue | - | 校验值 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadTPK</font>

---

### 9.7 downloadWorkKey --下载工作密钥 (金华银行新增)


> <font color ='green' style="font-weight:bold">支持移动渠道</font>


示例：


```js
try {
  let params = { 
    keyType : 1,
    TMKIndex : 0,
    TPKIndex: 0,
    wKey : "",
	strHex:""
  }
  let ret = await BeiJia.downloadWorkKey(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```


- 入参列表:


| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| keyType     | int | - |   -  | 主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4   |
| TMKIndex | int | - |   -  | 主密钥索引 0-7 |
| TPKIndex  | int | - |   -  | 工作密钥索引 0-7 |
| wKey  | String | - |   -  | 工作密钥密文 |
| strHex  | String| - |   -  | 校验值 |

- 出参列表:


| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| errMsg | String | 错误信息 |



> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadWorkKey</font>


---
### 9.8 getSessionKey --读取会话密钥

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    pubKeyType: 1,
    sessionKeyType: 0,
    pubKey : ""
  }
  let ret = await BeiJia.getSessionKey(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| pubKeyType  | int | - |   -  | 公钥类型 0--RSA， 1--SM2 |
| sessionKeyType  | int | - | - | 生成的会话密钥类型，1—DES 单倍长，2-DES 双倍长，3—DES 三倍长，4-SM4 |
| pubKey   | String | - |   -  | 公钥 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若成功，该值为 0，若失败，该值为对应错误码 |
| data | String |	会话密钥 |
| errMsg | String |	 错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getSessionKey</font>

---

### 9.9 getPassword --获取密码键盘输入信息(读取密码)

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10,
    account: "000",
    wKeyIndex: 1,
    encryptType: 1,
    times: 10,
    minLength: 6,
    maxLength: 20
  }
  let ret = await BeiJia.getPassword(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | √ |   -  | 超时时间(秒) |
| account  | String | - |   -  | 账号 |
| wKeyIndex  | int | - |   -  | 工作密钥索引 (DES--0，SM4--1) |
| encryptType  | int | - |   -  | 加密类型：0-不加密，1-DES 加密，2-SM4 加密  |
| times  | int | - |   -  | 可输入的次数  |
| minLength  | int | - |   -  | 密码最小长度 |
| maxLength  | int | - |   -  | 密码最大长度 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| password | String | 若成功，返回加密后的密码 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getPassword</font>

---

### 9.10 getPassword --读取带校验弱密码的密码(读取密码)

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10,
    account: "000",
    wKeyIndex: 1,
    encryptType: 1,
    times: 10,
    minLength: 6,
    maxLength: 20,
    validate: false
  }
  let ret = await BeiJia.getPassword(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | √ |   -  | 超时时间(秒) |
| account  | String | - |   -  | 账号 |
| wKeyIndex  | int | - |   -  | 工作密钥索引 (DES--0，SM4--1) |
| encryptType  | int | - |   -  | 加密类型：0-不加密，1-DES 加密，2-SM4 加密  |
| times  | int | - |   -  | 可输入的次数  |
| minLength  | int | - |   -  | 密码最小长度 |
| maxLength  | int | - |   -  | 密码最大长度 |
| validate | Boolean | - |   -  | 是否对弱密码进行校验 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| password | String | 若成功，返回加密后的密码 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getPassword</font>

---

### 9.11 cancelReadPin --取消键盘输入

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.cancelReadPin(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadPin</font>

---

### 9.12 calcMac --计算MAC

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    nAlgType: 1,
    zakIndex: 1,
    timeout: 10,
    src: ""
  }
  let ret = await BeiJia.calcMac(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```
- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| nAlgType	|	int | - | - |		1国际，2国密|
| zakIndex	|	int | - | - |		MAC密钥索引，即工作密钥索引，上层在下载工作密钥接口根据工作密钥索引管理对应密钥的类型（包括密码加密密钥、Mac密钥），对应索引一般是固定即可 |
| timeout	| int | - | - |		通讯超时时间,单位:秒，范围0~100 |
| src	| String |- | - |	数据源 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| data | String | Mac数据 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.calcMac</font>

---

### 9.13 getKeypadUseAlgorithm --获取密钥加密方式

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    
  }
  let ret = await BeiJia.getKeypadUseAlgorithm(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| algorithm | int | 加密类型, 0 为 DES，1 为 SM4   |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeypadUseAlgorithm</font>

---

### 9.14 getKeypadID --获取密钥安全节点

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.getKeypadID(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |当等于 0 时表示返回正确，其他情况用错误码表示 |
| errMsg | String |	错误信息 |
| UID | String |序列号 |
| companyID | String |厂商名称 |
| SN  | - |设备编号 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeypadID</font>

---

### 9.15 encryptPin --明文转密文

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    wKeyIndex: 1,
    account: "11",
    password: "11"
  }
  let ret = await BeiJia.encryptPin(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| password 	|	String | - | - |	明文密码 |
| account 	| String | - | - |	账号 |
| wKeyIndex 	| int |- | - |	工作密钥索引  |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| password | String | 加密后的密码 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.encryptPin</font>

---

### 9.16 getKeysStatus --获取密钥下载状态

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    mKeyIndex: 0,
    wKeyIndex : 0
  }
  let ret = await BeiJia.getKeysStatus(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| mKeyIndex | int | - |   -  | 主密钥索引，预留值为 0  |
| wKeyIndex   | int | - |   -  | 工作密钥索引，预留值为 0  |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| initKey | int | 1<存在>，0<不存在>   |
| ZMK | int | 1<存在>，0<不存在>  |
| ZPK | int | 1<存在>，0<不存在>  |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeysStatus</font>

---

### 9.17 getVerification --读取验证码(不发声)

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10,
    length: 20
  }
  let ret = await BeiJia.getVerification(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | - |   -  | 超时时间(秒) |
| length  | int | - |   -  | 可输入长度 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| password | String | 结果 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getVerification</font>

---

## 10. 电子签名

### 10.1 startHWScreen --启动手写屏

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 10,
  }
  let ret = await BeiJia.startHWScreen(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout | int | - |   -  | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数 | 类型   | 说明                     |
| ---- | ------ | ------------------------ |
| code | int    | 若失败，返回对应错误码，若成功，该值为0  |
| errMsg | String |	错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.startHWScreen</font>

---

### 10.2 getHWScreenData --获取屏幕签名信息（手写屏数据）

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = {
    timeout: 20
  }
  let ret = await BeiJia.getHWScreenData(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| timeout    | int | - |   -  | 通讯超时时间,单位:秒，范围0~100 |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |
| picture | - | 返回储存到本地的签名图片路径，需要保存到应用沙箱中 |
| pictureBase64 | - | 签名图片对应的Base64数据 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getHWScreenData</font>

---

### 10.3 closeHWScreen --关闭手写屏

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { }
  let ret = await BeiJia.closeHWScreen(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeHWScreen</font>

---

## 11. 声音和灯控

### 11.1 makeVoice --发起语音

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    voiceType : 1
  }
  let ret = await BeiJia.makeVoice(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| voiceType | int | - |   -  | 声音类型，0：请输入密码，1：请再次输入密码，2：密码错误，请重新输入密码，3：请放置身份证，4：请放置IC卡，5：请插入IC卡，6：请刷磁条卡，7：请签字，8：请录入指纹，9：请重新录入指纹，a：操作成功  |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.makeVoice</font>

---

### 11.2 makeBeep --发起蜂鸣

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    times : 1,
    timeout : 1
  }
  let ret = await BeiJia.makeBeep(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| times | int | - |   -  | 次数 |
| timeout | int | - |   -  | 蜂鸣时间,100毫秒的倍数  |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int | 若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.makeBeep</font>

---

### 11.3 ledOnOrOff --LED灯控制

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

示例：

```js
try {
  let params = { 
    ledNo : 1,
    onOrOff: 1,
    color : 0
  }
  let ret = await BeiJia.ledOnOrOff(params);
  console.log(ret);
} catch (e) {
  console.log(JSON.stringify(e));
}
```

- 入参列表:

| 参数    | 类型   | 必填参数 |默认值    |说明    |
| ------- | ------ | -------|---------|------ |
| ledNo  | int | - |   -  | IC灯0；磁条卡灯1；身份证灯2；指纹灯3  |
| onOrOff  | int | - |   -  | 亮灭：亮1；灭2  |
| color   | int | - |   -  | 0  |

- 出参列表:

| 参数    | 类型   | 说明   |
| ------- | ------ | ---------------------- |
| code | int |若失败，返回对应错误码，若成功，该值为0 |
| errMsg | String |	错误信息 |

> <font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.ledOnOrOff</font>

---

## 12. 错误码

| 错误代码 | 描述 |
| -------- | ----- |
| 0	|操作成功 |
| -1	| 参数异常 |
| -2	| 超时异常 |
| -3	| 读卡异常 |
| -4	| 连接异常 |
| -5	| 密钥未下发 |
| -6	| 密码键盘用户取消输入 |
| -7	| 两次录入密码不一致 |
| -8	| 未进行配置远程设备蓝牙地址，android设置配对列表中也没有找到已配对设备 |
| -9	| 配对失败 |
| -10	| 写报文失败   |
| -11	| 读报文失败 |
| -12	| 读报文被取消 |
| -13	| 枚举USB设备失败 |
| -14	| 未找到USB接口 |
| -15	| 未找到USB通讯端点 |
| -16	| USB授权失败 |
| -17	| 厂商内部缓冲区不足 |
| -18	| 启动签名失败 |
| -19	| 客户未签名   |
| -20	| 操作被取消 |
| -21	| 操作失败 |
| -22	| 从设备获取文件的信息失败 |
| -23	| md5 校 验失败  |
| -24	| 开卡机动画失败 |
| -25	| 读磁卡失败 |
| -26	| 3个磁道都没有数据   |
| -27	| 未知错误，刷卡超时 |
| -28	| 下载文件失败  |
| -29	| 继续执行这条指令 |
| -30	| 指纹仪连接异常或配置指纹仪驱动异常 |
| -31	| 不支持接触用户卡  |
| -32	| 接触用户卡未插到位  |
| -33	| 接触用户卡上电失败 |
| -34	| 不支持 PSAM 卡 |
| -35	| PSAM 卡上电失败 |
| -36	| 不支持非接触用户卡 |
| -37	| 非接触用户卡激活失败 |
| -38	| 等待卡进入感应区超时 |
| -39	| 有多张卡在感应区  |
| -40	| 读取身份证信息失败 |
| -41	| 启 动升级失败 |
| -42	| 删除文件失败 |
| -43	| 厂商驱动内部调用发生异常，异常将写入log文件 |
| -45	| 身份证信息解析错误 |
| -46	| 身份证信息解析错误 |
| -47	| 找卡失败 |
| -48	| IC卡未找到短文件 |
| -49	| IC卡短文件读取失败 |
| -50	| so申请空间失败 |
| -51	| IC卡未找到DOL文件 |
| -52	| IC卡未找到DOL文件 |
| -53	| IC卡没有DOL数据 |
| -54	| IC应用初始化失败 |
| -55	| IC卡没有交易日志 |
| -56	| IC卡没有记录 |
| -57	| IC卡GAC失败 |
| -58	| IC卡命令交互失败 |
| -59	| IC卡GAC无响应 |
| -60	| IC卡认证信息读取失败 |
| -61	| IC卡交易信息读取失败 |
| -62	| IC卡卡号读取失败 |
| -63	| 写IC卡失败 |
| -64	| IC卡指令执行失败 |
| -65	| 主密钥未下发 |
| -66	| 工作密钥未下发 |
| -67	| MAC密钥未下发 |
| -68	| 初始密钥未下发 |
| -69	| 获取设备序列号失败  |
| -70	| 找到磁卡 |
| -71	| 报文校验失败 |
| -72	| 密钥校验失败 |
| -73	| 打开吸入式身份证阅读器失败| 
| -74	| 需要采集的指纹仪与背夹连接的指纹仪不匹配 |
| -75	| 合成正反面照错误 |
| -76	| 设置不支持蓝牙 |
| -77	| 缓冲区不足 |
| -78	| 读卡失败 |
| -80	| 解密失败 |
| -81	| 验签失败 |
| -82	| 数据源编码错误 |
| -83	| 密钥自加密失败 |
| -84	| 证件错误 |
| -85	| 指令校验错误 |
| -86	| 公钥不存在 |
| -87	| 播报内容转换失败 |
| -88	| 轨迹下发失败 |
| -89	| 轨迹格式校验失败 |
| -90	| 当前无执行任务 |
| -91	| 指纹仪采集失败 |
| -92	| 加密芯片自毁，通讯密钥丢失 |
| -93	| 蓝牙加密通讯密钥库加解密失败 |
| -94	| 生成失败 |
| -100 |	主密钥不存在 |
| -101 |	工作密钥不存在 |
| -103 |	enc密钥不存在 |
| -104 |	密钥id不正确 |
| -105 |	MAC密钥不存在 |
| -308 |	未检测到PSAM卡 |
| -997 |	蓝牙使能失败 |
| -998 |	设备忙 |
| -999 |	调用模块外设异常 |
