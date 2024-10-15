## indexRoute2keyRoute(indexRoute, targetJsonSchemaObj)

根据index索引路径获取对应的key值路径

- `indexRoute` `<String>` 必填项，index索引路径
- `targetJsonSchemaObj` `<Object>` 必填项，schema数据对象

## Example:

```js
import { indexRoute2keyRoute } from '@wibetter/json-utils';
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
const keyRoute = indexRoute2keyRoute('1-2', jsonSchema); // keyRoute = field_29-filter
```

**node端使用方法**

```js
const { indexRoute2keyRoute } = require('@wibetter/json-utils');
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
const keyRoute = indexRoute2keyRoute('1-2', jsonSchema); // keyRoute = field_29-filter
```
