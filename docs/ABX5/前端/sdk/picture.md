# Picture

## 基本使用

`Picture.validate(value, picture)` 判断一个值是否符合 picture 规则。

```js
import Picture from '@agree/picture';

Picture.validate('123', '5"9"'); // true

Picture.validate('123456', '5"9"'); // false

Picture.validate('123a', '5"9"'); // false

Picture.validate('123', '5"0"'); // false

Picture.validate('123a', '5"0"'); // false

Picture.validate('123456', '5"0"'); // false

Picture.validate('12345', '5"0"'); // true
```