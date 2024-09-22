## getJsonDataByKeyRoute(keyRoute, targetJsonDataObj[, useObjClone])

根据key值路径获取对应的json数据

- `keyRoute` `<String>` 必填项，key值索引路径
- `targetJsonDataObj` `<Object>` 必填项，json数据对象
- `useObjClone` `<Boolean>` 非必填项，是否进行深拷贝，避免影响原有数据。（默认为false，不进行深拷贝）

## Example:

```js
import { getJsonDataByKeyRoute } from '@wibetter/json-utils';
const jsonData = {
  field_1: 'text1',
  field_2: true,
  field_3: '2020-08-08',
  field_4: '2020-08-22 10:57',
  field_5: '00:05:00',
  field_7: 'hello.world!',
  field_8: 51,
  field_9: 'a',
  field_10: ['a', 'b'],
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
const curValue = getJsonDataByKeyRoute('field_12-field_3', jsonData); // curValue = text13
```

**node端使用方法**

```js
const { getJsonDataByKeyRoute } = require('@wibetter/json-utils');
const jsonData = {
  field_1: 'text1',
  field_2: true,
  field_3: '2020-08-08',
  field_4: '2020-08-22 10:57',
  field_5: '00:05:00',
  field_7: 'hello.world!',
  field_8: 51,
  field_9: 'a',
  field_10: ['a', 'b'],
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
const curValue = getJsonDataByKeyRoute('field_12-field_3', jsonData); // curValue = text13
```
