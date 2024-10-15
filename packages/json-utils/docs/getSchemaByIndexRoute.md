## getSchemaByIndexRoute(indexRoute, targetJsonSchemaObj[, useObjClone])

根据key值路径获取对应的json数据

- `indexRoute` `<String>` 必填项，index索引路径
- `targetJsonSchemaObj` `<Object>` 必填项，schema数据对象
- `useObjClone` `<Boolean>` 非必填项，是否进行深拷贝，避免影响原有数据。（默认为false，不进行深拷贝）

## Example:

```js
import { getSchemaByIndexRoute } from '@wibetter/json-utils';

const jsonSchema = {
  type: 'object',
  format: 'data',
  title: '数据设置',
  properties: {
    field_28: {
      type: 'string',
      title: 'json数据项',
      format: 'json',
      default: '{}',
      description: '',
      placeholder: ''
    },
    field_29: {
      type: 'object',
      title: '数据源',
      format: 'datasource',
      default: '',
      description: '',
      placeholder: '',
      properties: {
        type: {
          type: 'select',
          default: 'local',
          options: [{
            label: '本地数据',
            value: 'local',
          },
          {
            label: '接口数据',
            value: 'remote',
          }],
          title: '数据源类型',
        },
        data: {
          type: 'string',
          format: 'json',
          default: 'local',
          readOnlyInJson: false,
          title: '本地静态json数据',
        },
        filter: {
          type: 'string',
          format: 'codearea',
          default: 'return data;',
          title: '过滤器',
        },
      },
      required: ['type', 'data', 'filter'],
      propertyOrder: ['type', 'data', 'filter'],
    },
  }
};
const curSchema = getSchemaByIndexRoute('1-2', jsonSchema);
```

**node端使用方法**

```js
const { getSchemaByIndexRoute } = require('@wibetter/json-utils');

const jsonSchema = {
  type: 'object',
  format: 'data',
  title: '数据设置',
  properties: {
    field_28: {
      type: 'string',
      title: 'json数据项',
      format: 'json',
      default: '{}',
      description: '',
      placeholder: ''
    },
    field_29: {
      type: 'object',
      title: '数据源',
      format: 'datasource',
      default: '',
      description: '',
      placeholder: '',
      properties: {
        type: {
          type: 'select',
          default: 'local',
          options: [{
            label: '本地数据',
            value: 'local',
          },
          {
            label: '接口数据',
            value: 'remote',
          }],
          title: '数据源类型',
        },
        data: {
          type: 'string',
          format: 'json',
          default: 'local',
          readOnlyInJson: false,
          title: '本地静态json数据',
        },
        filter: {
          type: 'string',
          format: 'codearea',
          default: 'return data;',
          title: '过滤器',
        },
      },
      required: ['type', 'data', 'filter'],
      propertyOrder: ['type', 'data', 'filter'],
    },
  }
};
const curSchema = getSchemaByIndexRoute('1-2', jsonSchema);
```

***输出的curSchema数据***
```json
{
  "type": "codearea",
  "default": "return data;",
  "title": "过滤器"
}
```
