---
outline: deep
---
# abx-plugin-video

## 1. 引入
``` javascript
import { VideoPlugin } from '@agree/abx-plugin-video'
let video = new VideoPlugin()
```
## 2. 使用
### 2.1 initVideoBankAsync
初始化SDK

**参数**

  *params(Object)*: 初始化`SDK`所需的参数，包括服务器`url`，心跳链接间隔，重新链接发送间隔以及重新链接次数

**返回**

  *(Object)*: 返回初始化成功后的事件对象
  ```JSON
  {
    serviceName:'',
    oid:'',
    resultCode:'',
    message:''
  }
  ```

**例子**

``` javascript
let params = {
  url: '', // 服务器URL
  heartBeat: '', // 心跳链接间隔(ms)
  reconnectTime: '', // 重新连接发送间隔(ms)
  reconnectTimes: '' // 重新连接次数
}
await video.initVideoBankAsync(params)
```
  
### 2.2 loginAsync
登录系统

**参数**

  *params(Object)*: 登录系统所需的参数，包括用户名，用户`id`，用户角色以及业务数据

**返回**

  *(Object)*: 返回登录的结果 
  ```JSON
  {
    resultCode: '',
    message: ''
  }
  ```

**例子**

``` javascript
let params = {
  username: '',  //用户名
  userid: '',    //用户id
  role: '',      //用户角色
  businessData: { //业务数据
      signstr:'',
      timestamp:''
  }
}
await video.initVideoBankAsync(params)
```
    
### 2.3 joinRoomAsync
进入房间

**参数**

  *params(Object)*: 进入房间所需的参数，包括房间`id`，业务数据

**返回**

  *(Object)*: 返回进入房间后的事件对象
  ```JSON
  {
    coturnUrl:　'',
    joinRoomUserids:[],
    mediaStreamInfo:[],
    resultCode:'',
    message:''
  }
  ```

**例子**

``` javascript
let params = {
  roomid: '',       //房间id
  businessData: ''  //业务数据
}
await video.joinRoomAsync(params)
```

### 2.4 sendCameraViedoAsync
发送摄像头媒体流

**参数**

  *params(Object)*: 发送摄像头媒体流所需的参数，包括流别名，录制标志，广播标志，码率，编码，`ice`配置，视频约束，发送视频类型 

**返回**

  *(Object)*: 返回发送结果
  ```JSON
  {
    resultCode: '',
    message: ''
  }
  ```

**例子**

``` javascript
let params = {
  streamAlias: '',			//流别名
  recordStreamFlag: '',	//录制标志
  broadcastSign: '',		//广播标志
  videoBitrate: '',     //码率
  preferCodec: '',      //编码
  iceServersConfig: '',	//ice配置
  constraints: '',      //视频约束
  sendSource: ''				//发送视频类型(桌面或摄像头)
}
await video.sendCameraViedo(params)
```
    
### 2.5 sendDesktopVideoAsync
发送桌面流

**参数**

  *params(Object)*: 发送桌面流所需的参数，包括流别名，录制标志，广播标志，码率，编码，`ice`配置，视频约束，视频父`view`，发送视频类型(桌面或摄像头)

**返回**

  *(Object)*: 返回发送结果
  ```JSON
  {
    resultCode: '',
    message: ''
  }
  ```


**例子**

``` javascript
let params = {
  streamAlias: '',			//流别名
  recordStreamFlag: '',			//录制标志
  broadcastSign: '',			//广播标志
  videoBitrate:	'',				//码率
  preferCodec: '',				//编码
  iceServersConfig:	'',			//ice配置
  constraints: '',				//视频约束
  videoView: '',				//视频父view
  sendSource: ''				//发送视频类型(桌面或摄像头)
}
await video.sendDesktopVideoAsync(params)
```
    
### 2.6 releaseVideoAsync
停止发送视频流

**参数**

  *params(Object)*: 停止发送所需的参数，包括用户名，房间名，流别名

**返回**

  *(Object)*: 返回暂停结果

  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  userid: '', // 用户名
  roomid: '', // 房间名
  streamAlias: '' // 流别名
}
await video.releaseVideoAsync(params)
```

### 2.7 receiveVideoAsync
接收媒体流

**参数**

  *params(Object)*: 接收媒体流所需的参数，包括发送者`id`，流别名，码率，编码

**返回**

  *(Object)*: 返回接收结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  senderUserid: '', // 发送者 id
  streamAlias: '', // 流别名
  videoBitrate: '', // 码率
  preferCodec: '', // 编码
}
await video.receiveVideoAsync(params)
```
    
### 2.8 reloadVideoAsync
重载媒体流

**参数**

  *params(Object)*: 重载是所需的参数，包括发送者`id`，流别名，码率，编码，`ice`配置

**返回**

  *(Object)*: 重载结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  senderUserid: '', // 发送者id
  streamAlias: '', // 流别名
  videoBitrate: '', // 码率
  preferCodec: '', // 编码
  iceServersConfig: '', // ice配置
}
await video.reloadVideoAsync(params)
```

### 2.9 streamControlAsync
流媒体挂起恢复

**参数**

  *params(Object)*: 流媒体挂起恢复时所需的参数，包括流别名，控制类型，是否同步到录像，业务数据以及操作类型

**返回**

  *(Object)*: 返回恢复结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  streamAlias: '', // 流别名
  controlType: '', // 控制类型
  synRecordProcess: '', // 是否同步到录像
  businessData: '', // 业务数据
  actionType: '', // 操作类型
}
await video.streamControlAsync(params)
```

### 2.10 starRecordStreamAsync
开始录制

**参数**

  *params(Object)*: 录制所需的参数，包括流别名，录制路径，录制名称，业务数据

**返回**

  *(Object)*: 返回录制结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  streamAlias: '', // 流别名
  recordFileName: '', // 录制名称
  recordFilePath: '', // 录制路径
  businessData: '', // 业务数据
}
await video.starRecordStreamAsync(params)
```

### 2.11 stopRecordStreamAsync
停止录制

**参数**

  *params(Object)*: 停止录制所需的参数，包括流别名，业务数据

**返回**

  *(Object)*: 返回停止录制的结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  streamAliasArray: '', // 流别名
  businessData: '' // 业务数据
}
await video.stopRecordStreamAsync(params)
```

### 2.12 leaveRoomAsync
离开房间

**参数**

  *params(Object)*: 离开房间所需的参数，包括业务数据

**返回**

  *(Object)*: 返回离开的结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

``` javascript
let params = {
  businessData: '' // 业务数据
}
await video.leaveRoomAsync(params)
```

### 2.13 screenCaptureWithInfoAsync
拍摄远程用户当前帧图像

**参数**

  *params(Object)*: 远程拍摄所需的参数，包括远程用户`id`，远程用户流别名，当前时间戳

**返回**

  *(Object)*: 返回拍摄结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  let params = {
    userid: '', // 远程用户id
    streamAlias: '', // 远程用户流别名
    timeStamp: '' // 当前时间戳
  }
  await video.screenCaptureWithInfoAsync(params)
  ```

### 2.14 sendCustomizeMessageAsync
发送自定义消息

**参数**

  *params(Object)*: 发送消息所需的参数，包括远程用户`id`，远程用户流别名，当前时间戳，消息内容

**返回**

  *(Object)*: 返回发送消息结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  let params = {
    messageType: '', // 远程用户id
    sendMessageUserid: '', // 远程用户流别名
    recvMessageUserid: '', // 当前时间戳
    data: '' // 消息内容
  }
  await video.sendCustomizeMessageAsync(params)
  ```

### 2.15 logoutAsync
退出系统

**参数**

  *params(Object)*: 退出系统所需的参数，包括业务数据

**返回**

  *(Object)*: 返回退出结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  let params = {
    businessData: '' // 业务数据
  }
  await video.logoutAsync(params)
  ```

### 2.16 closeConnectAsync
退出系统

**参数**

  *无参数* 

**返回**

  *(Object)*: 返回退出结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.closeConnectAsync()
  ```

### 2.17 viewConvertAsync
切换

**参数**

  *无参数*

**返回**

  *(Object)*: 返回切换结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.viewConvertAsync()
  ```

### 2.18 videoLayerConvertAsync
切换

**参数**

  *无参数*

**返回**

  *(Object)*: 返回切换结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.videoLayerConvertAsync()
  ```

### 2.19 backMenuAsync
返回菜单页

**参数**

  *无参数*

**返回**

  *(Object)*: 返回菜单页事件对象
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.backMenuAsync()
  ```

### 2.20 faceCircleAsync

**参数**

  *无参数*

**返回**

  *(Object)*
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.faceCircleAsync()
  ```

### 2.21 getPhotoByCameraAsync
拍照

**参数**

  *无参数*

**返回**

  *(Object)*: 返回拍摄结果
  ```JSON
    {
      resultCode: '',
      message: ''
    }
  ```

**例子**

  ``` javascript
  await video.getPhotoByCameraAsync()
  ```
    