## json2treeData(jsonData)

根据当前的json数据，转换成treeData（供antd的TreeSelect使用）

- `jsonData` `<Object>` json内容数据对象。

## Example:

```js
import { json2treeData } from '@wibetter/json-utils';
const jsonData = {
  field_1: 'text1',
  field_2: true,
  field_11: [
  {
    name: 'name',
    field_1: 'lisi',
  }],
  field_12: {
    a: 'text1',
    field_2: 'text2',
    field_3: 'text13',
  },
};
const treeData = json2treeData(jsonData);
```

**node端使用方法**

```js
const { json2treeData } = require('@wibetter/json-utils');
const jsonData = {
                   field_1: 'text1',
                   field_2: true,
                   field_11: [
                   {
                     name: 'name',
                     field_1: 'lisi',
                   }],
                   field_12: {
                     a: 'text1',
                     field_2: 'text2',
                     field_3: 'text13',
                   },
                 };
const treeData = json2treeData(jsonData);
```

***输出的treeData数据***
```json
[
  {
    "title": "field_1",
    "value": "field_1",
    "key": "field_1"
  },
  {
    "title": "field_2",
    "value": "field_2",
    "key": "field_2"
  },
  {
    "title": "field_11",
    "value": "field_11",
    "key": "field_11",
    "children": [
      {
        "title": 0,
        "value": "field_11-0",
        "key": "field_11-0",
        "children": [
          {
            "title": "name",
            "value": "field_11-0-name",
            "key": "field_11-0-name"
          },
          {
            "title": "field_1",
            "value": "field_11-0-field_1",
            "key": "field_11-0-field_1"
          }
        ]
      }
    ]
  },
  {
    "title": "field_12",
    "value": "field_12",
    "key": "field_12",
    "children": [
      {
        "title": "a",
        "value": "field_12-a",
        "key": "field_12-a"
      },
      {
        "title": "field_2",
        "value": "field_12-field_2",
        "key": "field_12-field_2"
      },
      {
        "title": "field_3",
        "value": "field_12-field_3",
        "key": "field_12-field_3"
      }
    ]
  }
]
```
