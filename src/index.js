import * as React from 'react';
import ReactDOM from 'react-dom';
import JSONEditor from './main';
import './index.scss';

/**
 * JSONEditor的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema: {
        type: 'object',
        title: 'jsonSchemaObject',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            title: '功能设置',
            readOnly: true,
            properties: {
              field_1: {
                type: 'string',
                title: '设置颜色',
              },
              field_4: {
                type: 'string',
                format: 'date',
                title: 'Date',
              },
              field_5: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
              },
              field_6: {
                type: 'string',
                format: 'date-time',
                title: 'Datetime',
              },
              field_7: {
                type: 'string',
                format: 'time',
                title: 'Time',
              },
              field_8: {
                type: 'string',
                format: 'url',
                title: 'Url',
              },
              field_9: {
                type: 'string',
                format: 'textarea',
                title: '多行文本框',
              },
              field_10: {
                type: 'number',
                default: '50',
                minimum: 0,
                maximum: 100,
                title: 'Number',
              },
              field_11: {
                type: 'string',
                format: 'radio',
                enum: ['a', 'b'],
                enumextra: ['选项a', '选项b'],
                title: '单选',
              },
              field_12: {
                type: 'array',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                uniqueItems: true,
                title: '多选',
              },
              field_131: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                  },
                },
                title: '普通对象',
                required: ['b'],
              },
              field_13: {
                type: 'array',
                format: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                    },
                  },
                  title: '数组项',
                },
                title: '数组',
                required: ['type'],
              },
              field_14: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                  },
                },
                title: '普通对象',
                required: ['a'],
              },
            },
            required: [
              'field_1',
              'field_4',
              'field_5',
              'field_6',
              'field_7',
              'field_8',
              'field_9',
              'field_10',
              'field_11',
              'field_12',
              'field_13',
              'field_14',
            ],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '样式设置',
            readOnly: true,
            properties: {
              field_15: {
                type: 'string',
                title: '单文本框',
                format: 'input',
              },
              field_16: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
              },
              field_17: {
                type: 'string',
                format: 'color',
                title: 'Color',
              },
              field_18: {
                type: 'string',
                format: 'url',
                title: 'Url',
              },
              field_19: {
                type: 'number',
                default: '50',
                minimum: 0,
                maximum: 100,
                title: 'Number',
              },
              field_21: {
                type: 'string',
                format: 'radio',
                enum: ['a', 'b'],
                enumextra: ['选项a', '选项b'],
                title: '单选',
              },
              field_22: {
                type: 'array',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                uniqueItems: true,
                title: '多选',
              },
              field_23: {
                type: 'object',
                format: 'quantity',
                properties: {
                  unit: {
                    type: 'number',
                    title: '数量',
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'quantitySelect',
                    enum: ['px', 'rem', 'em', 'percent'],
                    enumextra: ['px', 'rem', 'em', 'percent'],
                    title: '单位',
                  },
                },
                title: '单位计量输入',
                required: ['unit', 'quantity'],
              },
              field_24: {
                type: 'array',
                format: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                    },
                  },
                  title: '数组项',
                },
                title: '数组',
                required: ['type'],
              },
            },
            required: [
              'field_15',
              'field_16',
              'field_17',
              'field_18',
              'field_19',
              'field_21',
              'field_22',
              'field_23',
              'field_24',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: true,
            properties: {
              field_25: {
                type: 'string',
                title: '单文本框',
                format: 'input',
              },
              field_26: {
                type: 'number',
                default: '50',
                minimum: 0,
                maximum: 100,
                title: 'Number',
              },
              field_27: {
                type: 'string',
                format: 'json',
                title: 'JSON',
              },
              field_28: {
                type: 'object',
                format: 'datasource',
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '类型',
                  },
                  data: {
                    type: 'string',
                    format: 'typeSelectData',
                    default: 'local',
                    readOnlyInJson: false,
                  },
                  filter: {
                    type: 'string',
                    format: 'textarea',
                    default: 'return data;',
                    title: '过滤器',
                  },
                },
                title: '数据源',
                required: ['name', 'filter', 'type'],
              },
              field_29: {
                type: 'object',
                format: 'event',
                properties: {
                  type: {
                    type: 'string',
                    default: 'out',
                    format: 'typeSelect',
                    enum: ['in', 'out'],
                    enumextra: ['in', 'out'],
                    title: '类型',
                    readOnlyInJson: false,
                  },
                  filter: {
                    type: 'string',
                    format: 'textarea',
                    default: 'return data;',
                    title: '过滤器',
                  },
                },
                title: '事件',
                required: ['name', 'filter', 'type'],
              },
              field_30: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                  },
                },
                title: '普通对象',
                required: ['a'],
              },
            },
            required: [
              'a a',
              'field_25',
              'field_26',
              'field_27',
              'field_28',
              'field_29',
              'field_30',
            ],
          },
        },
        required: ['func', 'style', 'data'],
      },
      jsonData: {},
    };
  }

  render() {
    const { jsonSchema, jsonData } = this.state;
    return (
      <JSONEditor
        schemaData={jsonSchema}
        jsonData={jsonData}
        onChange={(e) => {
          console.log('changeValue', e);
        }}
      />
    );
  }
}

ReactDOM.render(
  <div>
    <h1>JSONEditor Demo</h1>

    <br />
    <h2>Example:</h2>
    <hr />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
