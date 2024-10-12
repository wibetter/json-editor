## metaElemAnalyzer(curJsonSchemaObj)

根据当前的schema，统计当前json里面用到的元数据情况

- `schemaData` `<Object>` 必填项，schema数据对象

## Example:

```js
import { metaElemAnalyzer } from '@wibetter/json-utils';
const jsonSchema = {
  type: 'object',
  format: 'func',
  title: '功能设置',
  properties: {
    field_1: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
    field_2: {
      type: 'boolean',
      title: '布尔值',
      format: 'boolean',
      default: true,
      description: '',
      placeholder: ''
    },
    field_3: {
      type: 'string',
      title: '日期',
      format: 'date',
      default: '',
      description: '',
      placeholder: ''
    },
    field_4: {
      type: 'string',
      title: '日期',
      format: 'date-time',
      default: '',
      description: '',
      placeholder: ''
    },
    field_5: {
      type: 'string',
      title: '时间',
      format: 'time',
      default: '',
      description: '',
      placeholder: ''
    },
    field_6: {
      type: 'string',
      title: 'URL',
      format: 'url',
      default: '',
      description: '',
      placeholder: ''
    },
    field_7: {
      type: 'string',
      title: '多行文本框',
      format: 'textarea',
      default: '',
      description: '',
      placeholder: ''
    },
    field_8: {
      type: 'number',
      title: '数值',
      format: 'number',
      default: 50,
      description: '',
      placeholder: '',
      minimum: 0,
      maximum: 100,
    },
    field_9: {
      type: 'string',
      title: '单选',
      format: 'radio',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumextra: ['选项a', '选项b', '选项c'],
        format: 'string',
      },
    },
    field_10: {
      type: 'array',
      title: '多选',
      format: 'checkboxes',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumextra: ['选项a', '选项b', '选项c'],
        format: 'string',
      },
    },
    field_11: {
      type: 'array',
      title: '数组',
      format: 'array',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'object',
        format: 'object',
        title: '数组项',
        description: '',
        properties: {
          name: {
            type: 'string',
            format: 'input',
            title: '名字',
            default: '',
            description: '',
            placeholder: ''
          },
          field_1: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            default: '',
            description: '',
            placeholder: ''
          },
        },
        required: ['name', 'field_1'],
        propertyOrder: ['name', 'field_1'],
      },
    },
    field_12: {
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
    },
  },
  required: [
    'field_1',
    'field_2',
    'field_3',
    'field_4',
    'field_5',
    'field_6',
    'field_7',
    'field_8',
    'field_9',
    'field_10',
    'field_11',
    'field_12',
  ],
  propertyOrder: [
    'field_1',
    'field_2',
    'field_3',
    'field_4',
    'field_5',
    'field_6',
    'field_7',
    'field_8',
    'field_9',
    'field_10',
    'field_11',
    'field_12',
  ],
};
const result = metaElemAnalyzer(jsonSchema);
```

**node端使用方法**

```js
const { metaElemAnalyzer } = require('@wibetter/json-utils');
const jsonSchema = {
  type: 'object',
  format: 'func',
  title: '功能设置',
  properties: {
    field_1: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      description: '',
      placeholder: ''
    },
    field_2: {
      type: 'boolean',
      title: '布尔值',
      format: 'boolean',
      default: true,
      description: '',
      placeholder: ''
    },
    field_3: {
      type: 'string',
      title: '日期',
      format: 'date',
      default: '',
      description: '',
      placeholder: ''
    },
    field_4: {
      type: 'string',
      title: '日期',
      format: 'date-time',
      default: '',
      description: '',
      placeholder: ''
    },
    field_5: {
      type: 'string',
      title: '时间',
      format: 'time',
      default: '',
      description: '',
      placeholder: ''
    },
    field_6: {
      type: 'string',
      title: 'URL',
      format: 'url',
      default: '',
      description: '',
      placeholder: ''
    },
    field_7: {
      type: 'string',
      title: '多行文本框',
      format: 'textarea',
      default: '',
      description: '',
      placeholder: ''
    },
    field_8: {
      type: 'number',
      title: '数值',
      format: 'number',
      default: 50,
      description: '',
      placeholder: '',
      minimum: 0,
      maximum: 100
    },
    field_9: {
      type: 'string',
      title: '单选',
      format: 'radio',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumextra: ['选项a', '选项b', '选项c'],
        format: 'string',
      },
    },
    field_10: {
      type: 'array',
      title: '多选',
      format: 'checkboxes',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumextra: ['选项a', '选项b', '选项c'],
        format: 'string',
      },
    },
    field_11: {
      type: 'array',
      title: '数组',
      format: 'array',
      default: '',
      description: '',
      placeholder: '',
      items: {
        type: 'object',
        format: 'object',
        title: '数组项',
        description: '',
        properties: {
          name: {
            type: 'string',
            format: 'input',
            title: '名字',
            default: '',
            description: '',
            placeholder: ''
          },
          field_1: {
            type: 'string',
            title: '单文本框',
            format: 'input',
            default: '',
            description: '',
            placeholder: ''
          },
        },
        required: ['name', 'field_1'],
        propertyOrder: ['name', 'field_1'],
      },
    },
    field_12: {
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
    },
  },
  required: [
    'field_1',
    'field_2',
    'field_3',
    'field_4',
    'field_5',
    'field_6',
    'field_7',
    'field_8',
    'field_9',
    'field_10',
    'field_11',
    'field_12',
  ],
  propertyOrder: [
    'field_1',
    'field_2',
    'field_3',
    'field_4',
    'field_5',
    'field_6',
    'field_7',
    'field_8',
    'field_9',
    'field_10',
    'field_11',
    'field_12',
  ],
};
const result = metaElemAnalyzer(jsonSchema);
```

***输出的结果数据***
```json
{
  "input": 6,
  "boolean": 1,
  "date": 1,
  "date-time": 1,
  "time": 1,
  "url": 1,
  "textarea": 1,
  "number": 1,
  "radio": 1,
  "select": 1,
  "array": 1,
  "object": 1
}
```
