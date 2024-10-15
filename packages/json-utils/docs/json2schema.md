# json2schema(jsonData)

根据json内容数据生成对应的schema数据（json结构数据）

- `jsonData` `<Object>` json内容数据对象。

## Example:

```js
import { json2schema } from '@wibetter/json-utils';
const jsonData = {
  a: 'text1',
  field_2: 'text2',
  field_3: 'text13',
};
const curJsonSchema = json2schema(jsonData);
```

**node端使用方法**

```js
const { json2schema } = require('@wibetter/json-utils');
const jsonData = {
  a: 'text1',
  field_2: 'text2',
  field_3: 'text13',
};
const curJsonSchema = json2schema(jsonData);
```

***输出的curJsonSchema数据***
```json
{
  "type": "object",
  "format": "object",
  "title": "对象类型",
  "description": "",
  "properties": {
    "a": {
      "type": "input",
      "title": "单文本框",
      "default": "",
      "description": "",
      "placeholder": "",
      "isRequired": false,
      "readOnly": false
    },
    "field_2": {
      "type": "input",
      "title": "单文本框",
      "default": "",
      "description": "",
      "placeholder": "",
      "isRequired": false,
      "readOnly": false
    },
    "field_3": {
      "type": "input",
      "title": "单文本框",
      "default": "",
      "description": "",
      "placeholder": "",
      "isRequired": false,
      "readOnly": false
    }
  }
}
```
