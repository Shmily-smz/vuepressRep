# ab-manager-ofd@ofd文件显示

## 1. 引入

```js
import {getOfdDocumentObj} from '@agree/ab-manager-ofd'
```

## 2. 使用

```js
    getOfdDocumentObj(this.file,this.screenWidth).then(res=>{
        this.xxx = res;
    }).catch(error=>{
        console.log(error,'error')
     });
```

getOfdDocumentObj参数说明

|参数|说明|默认|
|---|---|---|
|file|所上传的文件|null|
|screenWidth|所展示区域的宽度|区域宽度|
