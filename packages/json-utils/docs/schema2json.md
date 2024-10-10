# schema2json(jsonSchema[, jsonData])

根据schema结构数据生成一份对应的json数据内容

- `jsonSchema` `<Object>` 根据jsonSchema的json结构生成一份对应的json数据。
- `jsonData` `<Object>` 非必填，当jsonData不为空时，会优先使用jsonData中对应的数值（数据融合）。

## Example:

```js
import { schema2json } from '@wibetter/json-utils';
const jsonSchema = {
  type: 'object',
  title: '对象类型',
  format: 'object',
  default: '',
  description: '',
  placeholder: '',
  properties: {
    a: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
    field_2: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
    field_3: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
  },
  required: ['a', 'field_2', 'field_3'],
  propertyOrder: ['a', 'field_2', 'field_3'],
};

const jsonData = {
  a: 'text1',
  field_3: 'text13',
  field_5: 'text5',
};
const curJsonData = schema2json(jsonSchema, jsonData);
```

**node端使用方法**

```js
const { schema2json } = require('@wibetter/json-utils');
const jsonSchema = {
  type: 'object',
  title: '对象类型',
  format: 'object',
  default: '',
  description: '',
  placeholder: '',
  properties: {
    a: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: '',
    },
    field_2: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
    field_3: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
  },
  required: ['a', 'field_2', 'field_3'],
  propertyOrder: ['a', 'field_2', 'field_3'],
};
const jsonData = {
  a: 'text1',
  field_3: 'text13',
  field_5: 'text5',
};
const curJsonData = schema2json(jsonSchema, jsonData);
```


***输出的curJsonData数据***
```json
{
  "a": "text1",
  "field_2": "",
  "field_3": "text13"
}
```
