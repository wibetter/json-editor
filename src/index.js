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
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {
              message: {
                type: 'string',
                format: 'input',
                description: '设置提示内容',
              },
              linkText: {
                type: 'string',
                format: 'input',
                description: '设置跳转链接文字',
              },
              msgType: {
                type: 'string',
                format: 'radio',
                enum: ['succ', 'warn', 'error'],
                enumextra: ['成功', '提醒', '错误'],
                description: '提示类型',
              },
              field_1: {
                type: 'string',
                description: '单文本框',
                format: 'input',
              },
              field_2: {
                type: 'string',
                format: 'date',
                description: 'Date',
              },
              field_3: {
                type: 'boolean',
                description: '布尔值',
                format: 'boolean',
              },
              field_4: {
                type: 'string',
                format: 'date-time',
                description: 'Datetime',
              },
              field_5: {
                type: 'string',
                format: 'time',
                description: 'Time',
              },
              field_6: {
                type: 'string',
                format: 'url',
                description: 'Url',
              },
              field_7: {
                type: 'string',
                format: 'textarea',
                description: '多行文本框',
              },
              field_8: {
                type: 'number',
                default: '50',
                minimum: 0,
                maximum: 100,
                description: 'Number',
              },
              field_9: {
                type: 'string',
                format: 'radio',
                enum: ['a', 'b'],
                enumextra: ['选项a', '选项b'],
                description: '单选',
              },
              field_10: {
                type: 'array',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                uniqueItems: true,
                description: '多选',
              },
              field_11: {
                type: 'array',
                format: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      description: '名字',
                    },
                    field_12: {
                      type: 'string',
                      description: '单文本框',
                      format: 'input',
                    },
                  },
                  description: '数组项',
                  required: ['field_12'],
                },
                description: '数组',
                required: ['type'],
              },
              field_13: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                  field_14: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                },
                description: '普通对象',
                required: ['a', 'field_14'],
              },
            },
            required: [
              'message',
              'linkText',
              'msgType',
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
              'field_13',
            ],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              isShowLink: {
                type: 'boolean',
                description: '是否显示跳转链接',
                format: 'boolean',
              },
              backColor: {
                type: 'string',
                format: 'color',
                description: '背景色',
              },
              field_15: {
                type: 'string',
                description: '单文本框',
                format: 'input',
              },
              field_16: {
                type: 'boolean',
                description: '布尔值',
                format: 'boolean',
              },
              field_17: {
                type: 'object',
                format: 'quantity',
                properties: {
                  unit: {
                    type: 'number',
                    description: '单位数值',
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'quantitySelect',
                    enum: ['px', 'rem', 'em', 'percent'],
                    enumextra: ['px', 'rem', 'em', 'percent'],
                    description: '单位',
                  },
                },
                description: '单位计量输入',
                required: ['unit', 'quantity'],
              },
              field_18: {
                type: 'array',
                format: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      description: '名字',
                    },
                    field_19: {
                      type: 'string',
                      description: '单文本框',
                      format: 'input',
                    },
                  },
                  description: '数组项',
                  required: ['field_19'],
                },
                description: '数组',
                required: ['type'],
              },
              field_22: {
                type: 'string',
                format: 'color',
                description: 'Color',
              },
              field_20: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                  field_21: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                },
                description: '普通对象',
                required: ['a', 'field_21'],
              },
            },
            required: [
              'backColor',
              'isShowLink',
              'field_15',
              'field_16',
              'field_17',
              'field_18',
              'field_20',
              'field_22',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              linkHref: {
                type: 'string',
                description: '设置跳转链接地址',
                format: 'input',
              },
              field_23: {
                type: 'string',
                format: 'json',
                description: 'JSON',
              },
              field_24: {
                type: 'object',
                format: 'datasource',
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    description: '类型',
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
                    description: '过滤器',
                  },
                },
                description: '数据源',
                required: ['name', 'filter', 'type'],
              },
              field_25: {
                type: 'object',
                format: 'event',
                properties: {
                  type: {
                    type: 'string',
                    default: 'out',
                    format: 'typeSelect',
                    enum: ['in', 'out'],
                    enumextra: ['in', 'out'],
                    description: '类型',
                    readOnlyInJson: false,
                  },
                  filter: {
                    type: 'string',
                    format: 'textarea',
                    default: 'return data;',
                    description: '过滤器',
                  },
                },
                description: '事件',
                required: ['name', 'filter', 'type'],
              },
              field_26: {
                type: 'object',
                format: 'object',
                properties: {
                  a: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                  field_27: {
                    type: 'string',
                    description: '单文本框',
                    format: 'input',
                  },
                },
                description: '普通对象',
                required: ['a', 'field_27'],
              },
            },
            required: [
              'a a',
              'jsonItem',
              'linkHref',
              'field_23',
              'field_24',
              'field_25',
              'field_26',
            ],
          },
        },
        required: ['func', 'style', 'data'],
        propertyOrder: ['func', 'style', 'data'],
      },
      jsonData: {
        func: {
          message: '提交成功，查看',
          linkText: '需求详情',
          msgType: 'succ',
          field_1: '',
          field_2: '2020-07-03',
          field_3: false,
          field_4: '2020-07-03 17:10',
          field_5: '17:10:50',
          field_6: 'https://',
          field_7: '',
          field_8: '50',
          field_9: '',
          field_10: [],
          field_11: [
            {
              name: '',
              field_12: '',
            },
          ],
          field_13: {
            a: '',
            field_14: '',
          },
        },
        style: {
          isShowLink: true,
          backColor: '#fcfcfc',
          field_15: '',
          field_16: false,
          field_17: {
            quantity: 'px',
            unit: 0,
          },
          field_18: [
            {
              name: '',
              field_19: '',
            },
          ],
          field_22: '#3460fa',
          field_20: {
            a: '',
            field_21: '',
          },
        },
        data: {
          linkHref: '#applyInfo',
          field_23: '',
          field_24: {
            filter: '() => {}',
            type: 'local',
            data: {},
          },
          field_25: {
            name: 'type',
            filter: '() => {}',
            type: 'out',
          },
          field_26: {
            a: '',
            field_27: '',
          },
        },
      },
    };
  }

  render() {
    const { jsonSchema, jsonData } = this.state;
    return (
      <JSONEditor
        wideScreen={false}
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
