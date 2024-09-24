# ab-manager-mock@数据Mock

## 1. 安装

```sh
npm i @agree/ab-manager-mock
```

## 2.使用

```js
import { interceptor } from '@agree/ab-manager-mock';
interceptor({
    data: [{
        url: 'http://127.0.0.1:3344/test',
        path: '/user',
        headers: {},
        request: '',
        responseHeaders: {},
        response: {
            "ph": "ph:password"
        },
        responseURL: 'http://127.0.0.1:3344/test',
        status: 200,
        statusText: 'OK',
        responseType: '',
        responseText: '{"ph": "ph:password"}',
        responseXML: ''
    }]
});
```