import * as React from 'react';
import ReactDOM from 'react-dom';
import JSONEditor from './main';
import { Switch } from 'antd';
import JSONSchemaEditor from '@jdwork/json-schema-editor/dist/index.umd';
import '@jdwork/json-schema-editor/dist/index.css';
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
              tabList: {
                type: 'array',
                format: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      description: 'tab头部展示内容',
                      format: 'input',
                      title: 'tab头部展示内容',
                    },
                    link: {
                      type: 'string',
                      description: '填写要跳转的页面hash值',
                      format: 'input',
                      title: '填写要跳转的页面hash值',
                    },
                  },
                  description: '数组项',
                  required: ['title', 'link'],
                  title: '数组项',
                  format: 'object',
                  propertyOrder: ['title', 'link'],
                },
                description: 'tab头部数据',
                required: ['type'],
                title: 'tab头部数据',
              },
              activeIndex: {
                type: 'number',
                default: 1,
                minimum: 1,
                maximum: 100,
                description: '激活第几个tab',
                title: '激活第几个tab',
                format: 'number',
              },
            },
            required: ['tabList', 'activeIndex'],
            title: '功能设置',
            propertyOrder: ['activeIndex', 'tabList'],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              backColor: {
                type: 'string',
                format: 'color',
                description: '背景色',
                title: '背景色',
              },
              field_4: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['backColor', 'field_4'],
            title: '样式设置',
            propertyOrder: ['backColor', 'field_4'],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              field_1: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_2: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['field_1', 'field_2'],
            title: '数据设置',
            propertyOrder: ['field_1', 'field_2'],
          },
        },
        required: ['func', 'style', 'data'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data'],
        lastUpdateTime: '2020-07-20T07:34:51.670Z',
      },
      jsonData: {
        func: {
          activeIndex: 1,
          tabList: [
            {
              title: '我的审批',
              link: '#myApproval',
            },
            {
              title: '我的申请',
              link: '#myApply',
            },
          ],
        },
        style: {
          backColor: '#ffffff',
          field_4: '',
        },
        data: {
          field_1: '111',
          field_2: '111',
        },
      },
      wideScreen: false,
    };
    /*this.state = {
      jsonSchema: window.PAGEDATA.jsonSchema || {
        type: 'object',
        title: 'jsonSchemaObject',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            title: '功能设置',
            readOnly: true,
            properties: {
              field_2: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_3: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
                default: true,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_4: {
                type: 'string',
                title: '日期',
                format: 'date',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_5: {
                type: 'string',
                title: '日期',
                format: 'date-time',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_6: {
                type: 'string',
                title: '时间',
                format: 'time',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_7: {
                type: 'string',
                title: 'URL',
                format: 'url',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_8: {
                type: 'string',
                title: '多行文本框',
                format: 'textarea',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_9: {
                type: 'number',
                title: '数值',
                format: 'number',
                default: 50,
                minimum: 0,
                maximum: 1000,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_10: {
                type: 'string',
                title: '单选',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_11: {
                type: 'array',
                title: '多选',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_12: {
                type: 'string',
                title: '函数类型',
                format: 'codearea',
                default: 'function func() { console.log("hello, world!"); }',
                description: '用于定义函数方法体',
                isRequired: false,
                readOnly: false,
              },
              field_13: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['name'],
                  propertyOrder: ['name'],
                },
              },
              field_14: {
                type: 'object',
                format: 'object',
                title: '对象类型',
                description: '',
                isRequired: false,
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
            },
            required: [
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
              'field_13',
              'field_14',
            ],
            propertyOrder: [
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
              field_23: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_24: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
                default: true,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_25: {
                type: 'string',
                title: '颜色值',
                format: 'color',
                default: '#ffffff',
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_26: {
                type: 'string',
                title: 'URL',
                format: 'url',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_27: {
                type: 'number',
                title: '数值',
                format: 'number',
                default: 50,
                minimum: 0,
                maximum: 1000,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_28: {
                type: 'string',
                title: '单选',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_29: {
                type: 'array',
                title: '多选',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_30: {
                type: 'object',
                format: 'quantity',
                title: '单位计量输入',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 50,
                    minimum: 0,
                    maximum: 1000,
                    description: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  quantity: {
                    type: 'string',
                    format: 'typeSelect',
                    default: 'px',
                    enum: ['px', 'rem', 'em', '%'],
                    enumextra: ['px', 'rem', 'em', '%'],
                    title: '单位类型',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['unit', 'quantity'],
                propertyOrder: ['unit', 'quantity'],
              },
              field_31: {
                type: 'string',
                title: '富文本类型',
                format: 'htmlarea',
                default: '<p>hello,world!</p>',
                description: '用于放置html代码片段',
                isRequired: false,
                readOnly: false,
              },
              field_32: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['name'],
                  propertyOrder: ['name'],
                },
              },
              field_33: {
                type: 'object',
                format: 'object',
                title: '对象类型',
                description: '',
                isRequired: false,
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  field_44: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['a', 'field_44'],
                propertyOrder: ['a', 'field_44'],
              },
              field_45: {
                type: 'object',
                format: 'object',
                title: '对象类型',
                description: '',
                isRequired: false,
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  field_46: {
                    type: 'array',
                    format: 'array',
                    title: '数组',
                    description: '',
                    isRequired: false,
                    readOnly: false,
                    items: {
                      type: 'object',
                      format: 'object',
                      title: '数组项',
                      description: '',
                      isRequired: false,
                      readOnly: false,
                      properties: {
                        name: {
                          type: 'string',
                          format: 'input',
                          title: '名字',
                          default: '',
                          description: '',
                          placeholder: '',
                          isRequired: false,
                          readOnly: false,
                        },
                        field_47: {
                          type: 'string',
                          title: '单文本框',
                          format: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                          isRequired: false,
                          readOnly: false,
                        },
                      },
                      required: ['name', 'field_47'],
                      propertyOrder: ['name', 'field_47'],
                    },
                  },
                },
                required: ['a', 'field_46'],
                propertyOrder: ['a', 'field_46'],
              },
              field_48: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                    field_49: {
                      type: 'array',
                      format: 'array',
                      title: '数组',
                      description: '',
                      isRequired: false,
                      readOnly: false,
                      items: {
                        type: 'object',
                        format: 'object',
                        title: '数组项',
                        description: '',
                        isRequired: false,
                        readOnly: false,
                        properties: {
                          name: {
                            type: 'string',
                            format: 'input',
                            title: '名字',
                            default: '',
                            description: '',
                            placeholder: '',
                            isRequired: false,
                            readOnly: false,
                          },
                          field_50: {
                            type: 'boolean',
                            title: '布尔值',
                            format: 'boolean',
                            default: true,
                            description: '',
                            isRequired: false,
                            readOnly: false,
                          },
                          field_51: {
                            type: 'string',
                            title: '单文本框',
                            format: 'input',
                            default: '',
                            description: '',
                            placeholder: '',
                            isRequired: false,
                            readOnly: false,
                          },
                        },
                        required: ['name', 'field_50', 'field_51'],
                        propertyOrder: ['name', 'field_50', 'field_51'],
                      },
                    },
                  },
                  required: ['name', 'field_49'],
                  propertyOrder: ['name', 'field_49'],
                },
              },
            },
            required: [
              'field_23',
              'field_24',
              'field_25',
              'field_26',
              'field_27',
              'field_28',
              'field_29',
              'field_30',
              'field_31',
              'field_32',
              'field_33',
              'field_45',
              'field_48',
            ],
            propertyOrder: [
              'field_23',
              'field_24',
              'field_25',
              'field_26',
              'field_27',
              'field_28',
              'field_29',
              'field_30',
              'field_31',
              'field_32',
              'field_48',
              'field_45',
              'field_33',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: true,
            properties: {
              field_34: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              field_35: {
                type: 'number',
                title: '数值',
                format: 'number',
                default: 50,
                minimum: 0,
                maximum: 1000,
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_36: {
                type: 'string',
                title: 'json数据项',
                format: 'json',
                default: '{}',
                description: '',
                isRequired: false,
                readOnly: false,
              },
              field_37: {
                type: 'string',
                title: '函数类型',
                format: 'codearea',
                default: 'function func() { console.log("hello, world!"); }',
                description: '用于定义函数方法体',
                isRequired: false,
                readOnly: false,
              },
              field_38: {
                type: 'string',
                title: '富文本类型',
                format: 'htmlarea',
                default: '<p>hello,world!</p>',
                description: '用于放置html代码片段',
                isRequired: false,
                readOnly: false,
              },
              field_39: {
                type: 'object',
                format: 'datasource',
                title: '数据源',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '数据源类型',
                  },
                  data: {
                    type: 'string',
                    title: '本地json数据',
                    format: 'json',
                    default: '{}',
                    description: '用于设置本地的静态json数据',
                    isRequired: true,
                  },
                  filter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: '() => {}',
                    description: '用于定义过滤当前数据的函数',
                    isRequired: true,
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
              field_40: {
                type: 'object',
                format: 'event',
                title: '事件',
                isRequired: false,
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'emit',
                    format: 'typeSelect',
                    enum: ['on', 'emit'],
                    enumextra: ['on', 'emit'],
                    title: '事件类型',
                    isRequired: false,
                    readOnly: false,
                  },
                  trigger: {
                    type: 'string',
                    format: 'input',
                    default: 'eventName',
                    title: '触发事件',
                    description: '用于输入触发事件的名称',
                    placeholder: '请输入触发事件的名称',
                    isRequired: false,
                    readOnly: false,
                  },
                  eventData: {
                    type: 'string',
                    title: '事件数据',
                    format: 'json',
                    default: '{}',
                    description: '传递给触发事件的数据对象',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['type', 'trigger', 'eventData'],
                propertyOrder: ['type', 'trigger', 'eventData'],
              },
              field_41: {
                type: 'array',
                format: 'array',
                title: '数组',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['name'],
                  propertyOrder: ['name'],
                },
              },
              field_42: {
                type: 'object',
                format: 'object',
                title: '对象类型',
                description: '',
                isRequired: false,
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
            },
            required: [
              'field_34',
              'field_35',
              'field_36',
              'field_37',
              'field_38',
              'field_39',
              'field_40',
              'field_41',
              'field_42',
            ],
            propertyOrder: [
              'field_34',
              'field_35',
              'field_36',
              'field_37',
              'field_38',
              'field_39',
              'field_40',
              'field_42',
              'field_41',
            ],
          },
        },
        required: ['func', 'style', 'data'],
        propertyOrder: ['func', 'style', 'data'],
        format: 'object',
        lastUpdateTime: '2020-07-15T02:04:47.537Z',
      },
      jsonData: window.PAGEDATA.jsonData || {},
      wideScreen: window.PAGEDATA.wideScreen || false,
    };*/
  }

  render() {
    const { jsonSchema, jsonData, wideScreen } = this.state;
    return (
      <>
        <div className="title-container">
          <div className="title1-box">
            <p>
              <b>JSONSchema</b>:
              提供可视化界面编辑json格式/结构；(目前主要用于区块的模型设置，定义区块的配置项)
            </p>
          </div>
          <div className="title2-box">
            <p>
              <b>JSONEditor</b>:
              提供可视化界面编辑json数据内容，用于区块的可视化配置，避免用户直接编辑json数据内容；
              (目前主要用于区块的配置) 。
            </p>
            <div>
              展示模式：
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={wideScreen}
                checkedChildren="宽屏"
                unCheckedChildren="小屏"
                onChange={(checked) => {
                  this.setState({
                    wideScreen: checked,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-schema-box">
            <JSONSchemaEditor
              data={jsonSchema}
              onChange={(newJsonSchema) => {
                console.log('jsonSchemaChange', newJsonSchema);
                this.setState({
                  jsonSchema: newJsonSchema,
                });
              }}
            />
          </div>
          <div className="json-editor-box">
            <JSONEditor
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', newJsonData);
                this.setState({
                  jsonData: newJsonData,
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>JSON数据可视化/JSONSchema&JSONEditor Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
