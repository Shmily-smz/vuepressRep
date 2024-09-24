# abx-channel

> abx 根据传入的参数不同,将其所对应的 channel 值进行保存,以便调用其他 sdk.
> 需要在其他 sdk 内对其进行引入及继承.

## 引入
``` javascript
import Channel from 'abx-channel';

class 对象名 extends Channel {
  channel: string,
  // 根据 this.channel 区分不同的端,并进行当前端sdk调用
}
```