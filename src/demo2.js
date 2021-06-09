import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'antd';
import JSONEditor from './main';
import './index.scss';

/**
 * JSONEditor的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema1: {
        type: 'object',
        name: 'column',
        title: '列级容器',
        'ui-type': 'ui-box',
        'ui-name': 'box',
        'ui-framework': 'base',
        format: 'object',
        properties: {
          props: {
            type: 'object',
            format: 'func',
            title: '属性设置',
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '样式设置',
            readOnly: false,
            properties: {
              margin: {
                type: 'object',
                format: 'box-style',
                title: '外边距',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '0',
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
              padding: {
                type: 'object',
                format: 'box-style',
                title: '内边距',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '0',
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
              height: {
                type: 'object',
                format: 'quantity',
                title: '高度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 200,
                    minimum: 0,
                    maximum: '10000',
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
                hiddenRule: {
                  conditionProp: {
                    key: 'fixedHeight',
                    keyRoute: 'style-fixedHeight',
                    title: '定高',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              backgroundColor: {
                type: 'string',
                title: '背景颜色',
                format: 'color',
                default: '#ffffff',
                description: '',
                isRequired: false,
                readOnly: false,
              },
              fixedHeight: {
                type: 'boolean',
                title: '定高',
                format: 'boolean',
                default: false,
                description: '是否设置为固定高度',
                isRequired: false,
                readOnly: false,
              },
              flexDirection: {
                type: 'string',
                title: '内容排列方向',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['column', 'row'],
                  enumextra: ['竖排(默认)', 'row'],
                },
                description:
                  'flex-direction属性：决定主轴的方向（即列级容器内部元素的排列方向）',
                isRequired: false,
                readOnly: false,
                default: 'column',
              },
              justifyContent: {
                type: 'string',
                title: '主轴对齐',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                  ],
                  enumextra: [
                    '左对齐(默认)',
                    '右对齐',
                    '居中',
                    '两端对齐',
                    '间隔相等',
                  ],
                },
                description:
                  'justify-content属性：定义内部元素在主轴上的对齐方式',
                isRequired: false,
                readOnly: false,
                default: 'flex-start',
              },
              alignItems: {
                type: 'string',
                title: '交叉轴',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'stretch',
                  ],
                  enumextra: [
                    '起点对齐',
                    '终点对齐',
                    '中点对齐',
                    '基线对齐',
                    '弹性铺开',
                  ],
                },
                description:
                  'align-items属性：定义内部元素在交叉轴上的对齐方式',
                isRequired: false,
                readOnly: false,
                default: 'center',
              },
              flex: {
                type: 'string',
                title: '定宽',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['0 0 160px', '1 1 auto'],
                  enumextra: ['固定宽度', '弹性宽度'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
                default: '1 1 auto',
              },
              flexBasis: {
                type: 'object',
                format: 'quantity',
                title: '宽度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 160,
                    minimum: '0',
                    maximum: '100000',
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
              hasBorder: {
                type: 'boolean',
                title: '展示边框',
                format: 'boolean',
                default: false,
                description: '是否显示边框，开启后可以设置边框相关配置项',
                isRequired: false,
                readOnly: false,
              },
              borderStyle: {
                type: 'string',
                title: '边框样式',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'dotted',
                    'dashed',
                    'solid',
                    'double',
                    'groove',
                    'ridge',
                    'inset',
                    'outset',
                  ],
                  enumextra: [
                    '点线边框',
                    '虚线边框',
                    '实线边框',
                    '双边框',
                    '3D沟槽边框',
                    '3D脊边框',
                    '3D的嵌入边框',
                    '3D突出边框',
                  ],
                },
                description: '边框样式属性指定要显示什么样的边界',
                isRequired: false,
                readOnly: false,
                default: 'solid',
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              borderWidth: {
                type: 'object',
                format: 'box-style',
                title: '边框宽度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '1',
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
                description: ' border-width 属性为边框指定宽度',
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              borderColor: {
                type: 'string',
                title: '边框颜色',
                format: 'color',
                default: '#878787',
                description: 'border-color属性用于设置边框的颜色',
                isRequired: false,
                readOnly: false,
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
            },
            required: [
              'margin',
              'padding',
              'height',
              'backgroundColor',
              'fixedHeight',
              'flexDirection',
              'justifyContent',
              'alignItems',
              'flex',
              'flexBasis',
              'hasBorder',
              'borderStyle',
              'borderWidth',
              'borderColor',
            ],
            propertyOrder: [
              'margin',
              'padding',
              'flex',
              'flexBasis',
              'fixedHeight',
              'height',
              'backgroundColor',
              'flexDirection',
              'justifyContent',
              'alignItems',
              'hasBorder',
              'borderStyle',
              'borderWidth',
              'borderColor',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
          event: {
            type: 'object',
            format: 'event-schema',
            title: '事件设置',
            isFixedSchema: true,
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
        },
        required: ['props', 'style', 'data', 'event'],
        propertyOrder: ['props', 'style', 'data', 'event'],
        lastUpdateTime: '2021-04-29T05:51:26.253Z',
        conditionProps: {
          'style-fixedHeight': {
            key: 'fixedHeight',
            keyRoute: 'style-fixedHeight',
            title: '定高',
            format: 'boolean',
            type: 'boolean',
          },
          'style-hasBorder': {
            key: 'hasBorder',
            keyRoute: 'style-hasBorder',
            title: '展示边框',
            format: 'boolean',
            type: 'boolean',
          },
        },
      }, // 用于组件配置的schema
      jsonSchema2: {
        type: 'object',
        name: 'column',
        title: '列级容器',
        'ui-type': 'ui-box',
        'ui-name': 'box',
        'ui-framework': 'base',
        format: 'object',
        properties: {
          props: {
            type: 'object',
            format: 'func',
            title: '属性设置',
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '样式设置',
            readOnly: false,
            properties: {
              margin: {
                type: 'object',
                format: 'box-style',
                title: '外边距',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '0',
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
              padding: {
                type: 'object',
                format: 'box-style',
                title: '内边距1',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '0',
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
              height: {
                type: 'object',
                format: 'quantity',
                title: '高度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 200,
                    minimum: 0,
                    maximum: '10000',
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
                hiddenRule: {
                  conditionProp: {
                    key: 'fixedHeight',
                    keyRoute: 'style-fixedHeight',
                    title: '定高',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              backgroundColor: {
                type: 'string',
                title: '背景颜色',
                format: 'color',
                default: '#ffffff',
                description: '',
                isRequired: false,
                readOnly: false,
              },
              fixedHeight: {
                type: 'boolean',
                title: '定高',
                format: 'boolean',
                default: false,
                description: '是否设置为固定高度',
                isRequired: false,
                readOnly: false,
              },
              flexDirection: {
                type: 'string',
                title: '内容排列方向',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['column', 'row'],
                  enumextra: ['竖排(默认)', 'row'],
                },
                description:
                  'flex-direction属性：决定主轴的方向（即列级容器内部元素的排列方向）',
                isRequired: false,
                readOnly: false,
                default: 'column',
              },
              justifyContent: {
                type: 'string',
                title: '主轴对齐',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                  ],
                  enumextra: [
                    '左对齐(默认)',
                    '右对齐',
                    '居中',
                    '两端对齐',
                    '间隔相等',
                  ],
                },
                description:
                  'justify-content属性：定义内部元素在主轴上的对齐方式',
                isRequired: false,
                readOnly: false,
                default: 'flex-start',
              },
              alignItems: {
                type: 'string',
                title: '交叉轴',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'stretch',
                  ],
                  enumextra: [
                    '起点对齐',
                    '终点对齐',
                    '中点对齐',
                    '基线对齐',
                    '弹性铺开',
                  ],
                },
                description:
                  'align-items属性：定义内部元素在交叉轴上的对齐方式',
                isRequired: false,
                readOnly: false,
                default: 'center',
              },
              flex: {
                type: 'string',
                title: '定宽',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['0 0 160px', '1 1 auto'],
                  enumextra: ['固定宽度', '弹性宽度'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
                default: '1 1 auto',
              },
              flexBasis: {
                type: 'object',
                format: 'quantity',
                title: '宽度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 160,
                    minimum: '0',
                    maximum: '100000',
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
              hasBorder: {
                type: 'boolean',
                title: '展示边框',
                format: 'boolean',
                default: false,
                description: '是否显示边框，开启后可以设置边框相关配置项',
                isRequired: false,
                readOnly: false,
              },
              borderStyle: {
                type: 'string',
                title: '边框样式',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: [
                    'dotted',
                    'dashed',
                    'solid',
                    'double',
                    'groove',
                    'ridge',
                    'inset',
                    'outset',
                  ],
                  enumextra: [
                    '点线边框',
                    '虚线边框',
                    '实线边框',
                    '双边框',
                    '3D沟槽边框',
                    '3D脊边框',
                    '3D的嵌入边框',
                    '3D突出边框',
                  ],
                },
                description: '边框样式属性指定要显示什么样的边界',
                isRequired: false,
                readOnly: false,
                default: 'solid',
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              borderWidth: {
                type: 'object',
                format: 'box-style',
                title: '边框宽度',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    format: 'string',
                    default: '1',
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
                description: ' border-width 属性为边框指定宽度',
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
              borderColor: {
                type: 'string',
                title: '边框颜色',
                format: 'color',
                default: '#878787',
                description: 'border-color属性用于设置边框的颜色',
                isRequired: false,
                readOnly: false,
                hiddenRule: {
                  conditionProp: {
                    key: 'hasBorder',
                    keyRoute: 'style-hasBorder',
                    title: '展示边框',
                    format: 'boolean',
                    type: 'boolean',
                  },
                  conditionValue: false,
                },
              },
            },
            required: [
              'margin',
              'padding',
              'height',
              'backgroundColor',
              'fixedHeight',
              'flexDirection',
              'justifyContent',
              'alignItems',
              'flex',
              'flexBasis',
              'hasBorder',
              'borderStyle',
              'borderWidth',
              'borderColor',
            ],
            propertyOrder: [
              'margin',
              'padding',
              'flex',
              'flexBasis',
              'fixedHeight',
              'height',
              'backgroundColor',
              'flexDirection',
              'justifyContent',
              'alignItems',
              'hasBorder',
              'borderStyle',
              'borderWidth',
              'borderColor',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
          event: {
            type: 'object',
            format: 'event-schema',
            title: '事件设置',
            isFixedSchema: true,
            readOnly: false,
            properties: {},
            required: [],
            propertyOrder: [],
          },
        },
        required: ['props', 'style', 'data', 'event'],
        propertyOrder: ['props', 'style', 'data', 'event'],
        lastUpdateTime: '2021-04-29T05:51:26.253Z',
        conditionProps: {
          'style-fixedHeight': {
            key: 'fixedHeight',
            keyRoute: 'style-fixedHeight',
            title: '定高',
            format: 'boolean',
            type: 'boolean',
          },
          'style-hasBorder': {
            key: 'hasBorder',
            keyRoute: 'style-hasBorder',
            title: '展示边框',
            format: 'boolean',
            type: 'boolean',
          },
        },
      }, // 用于组件配置的schema
      jsonData1: {},
      jsonData2: {},
      schemaCodeView1: false, // schema源码模式
      schemaCodeView2: false, // schema源码模式
    };
  }

  render() {
    const {
      jsonSchema1,
      jsonSchema2,
      jsonData1,
      jsonData2,
      schemaCodeView1,
      schemaCodeView2,
    } = this.state;
    return (
      <>
        <div className="title-container">
          <div className="title1-box">
            <p>
              <b className="title-name">JSONEditor 1</b>
            </p>
            <div>
              <b>自定义展示</b>: &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={schemaCodeView1}
                checkedChildren="code"
                unCheckedChildren="view"
                onChange={(checked) => {
                  this.setState({
                    schemaCodeView1: checked,
                  });
                }}
              />
            </div>
          </div>
          <div className={`title2-box`}>
            <p>
              <b className="title-name">JSONEditor 2</b>
            </p>
            <div>
              <b>自定义展示</b>: &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={schemaCodeView2}
                checkedChildren="code"
                unCheckedChildren="view"
                onChange={(checked) => {
                  this.setState({
                    schemaCodeView2: checked,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-schema-box">
            <JSONEditor
              key="JSONEditor1"
              viewStyle={'tabs'}
              jsonView={schemaCodeView1} // code模式
              schemaData={jsonSchema1}
              jsonData={jsonData1}
              onChange={(newJsonData) => {
                console.log('jsonDataChange1', JSON.stringify(newJsonData));
                this.setState({
                  jsonData1: newJsonData,
                });
              }}
            />
          </div>
          <div className={`json-editor-box`}>
            <JSONEditor
              key="JSONEditor2"
              viewStyle={'tabs'}
              jsonView={schemaCodeView2} // code模式
              schemaData={jsonSchema2}
              jsonData={jsonData2}
              onChange={(newJsonData) => {
                console.log('jsonDataChange2', JSON.stringify(newJsonData));
                this.setState({
                  jsonData2: newJsonData,
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
    <h1 className="demoTitle">多个JSONEditor使用示例</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
