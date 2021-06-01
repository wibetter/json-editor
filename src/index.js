import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'antd';
import JSONSchemaEditor from '@wibetter/json-schema-editor/dist/index.umd';
import JSONEditor from './main';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import '@wibetter/json-schema-editor/dist/index.css';
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
      jsonData: {},
      dynamicDataList: [
        {
          id: 1,
          projectId: 88,
          name: 'getAttrs',
          type: '1',
          desc: '获取属性列表',
          url: 'http://yapi.jd.com/mock/522/test',
          method: 'GET',
          title: '属性列表',
          headers: '',
          options: '',
          body: {
            param1: {
              title: '参数名称',
              scope: 'static',
              value: '111',
            },
            param2: {
              title: '参数名称',
              scope: 'window',
              name: 'PARAM1',
              value: '111',
            },
            pageId: {
              title: '页面id',
              scope: 'hash',
              name: 'pId',
              value: '111',
            },
            param5: {
              title: '参数名称',
              scope: 'url',
              name: 'pageId',
              value: '111',
            },
            param7: {
              title: '参数名称',
              scope: 'dynamic',
              dataName: 'api3',
              body: {
                param2: {
                  title: '参数名称',
                  scope: 'static',
                  value: '222',
                },
                param3: {
                  title: '参数名称',
                  scope: 'static',
                  value: '333',
                },
              },
            },
          },
          respMock:
            '{ "code": 0, "data": [ { "attrId": 1, "attrName": "名称1" }, { "attrId": 2, "attrName": "名称2" } ] }',
          creatorId: '2',
          createdTime: null,
          updatedTime: null,
          deletedTime: null,
        },
        {
          id: 2,
          projectId: 89,
          name: 'getAttrs2',
          type: '1',
          desc: '获取轮播图片列表',
          url: 'http://yapi.jd.com/mock/522/test2',
          method: 'GET',
          title: '轮播图列表',
          headers: '',
          options: '',
          body: {
            param1: {
              title: '参数名称222',
              scope: 'static',
              value: '111',
            },
            param2: {
              title: '参数名称22',
              scope: 'window',
              name: 'PARAM1',
              value: '111',
            },
            pageId: {
              title: '页面id22',
              scope: 'hash',
              name: 'pId',
              value: '111',
            },
            param5: {
              title: '参数名称22',
              scope: 'url',
              name: 'pageId',
              value: '111',
            },
            param7: {
              title: '参数名称22',
              scope: 'dynamic',
              dataName: 'api3',
              body: {
                param2: {
                  title: '参数名称',
                  scope: 'static',
                  value: '222',
                },
                param3: {
                  title: '参数名称',
                  scope: 'static',
                  value: '333',
                },
              },
            },
          },
          respMock:
            '{ "code": 0, "data": [ { "attrId": 1, "attrName": "名称1" }, { "attrId": 2, "attrName": "名称2" } ] }',
          creatorId: '2',
          createdTime: null,
          updatedTime: null,
          deletedTime: null,
        },
      ],
      wideScreen: false,
      jsonView: false,
      schemaCodeView: false, // schema源码模式
      viewStyle: 'tabs', // 默认折叠模式
      curTypeList: {
        func: [
          'input',
          'boolean',
          'number',
          'color',
          'url',
          'textarea',
          'text-editor',
          'radio',
          'single-select',
          'select',
          'date',
          'date-time',
          'time',
          'quantity',
          'json',
          'codearea',
          'htmlarea',
          'event',
          'array',
          'object',
        ],
        style: [
          'color',
          'quantity',
          'input',
          'boolean',
          'number',
          'radio',
          'single-select',
          'select',
          'box-style',
        ],
        data: [
          'json',
          'codearea',
          'htmlarea',
          'text-editor',
          'dynamic-data',
          'datasource',
          'object',
          'array',
        ],
        'event-schema': ['event'],
        object: [
          'input',
          'boolean',
          'color',
          'date',
          'date-time',
          'time',
          'url',
          'textarea',
          'number',
          'object',
          'array',
        ],
        'array-object': [
          'input',
          'boolean',
          'color',
          'date',
          'date-time',
          'time',
          'url',
          'textarea',
          'number',
          'object',
          'array',
        ],
        all: [
          'input',
          'boolean',
          'number',
          'color',
          'url',
          'textarea',
          'text-editor',
          'radio',
          'single-select',
          'select',
          'date',
          'date-time',
          'time',
          'quantity',
          'json',
          'codearea',
          'htmlarea',
          'event',
          'array',
          'object',
        ],
      },
    };
  }

  render() {
    const {
      jsonSchema,
      jsonData,
      dynamicDataList,
      wideScreen,
      jsonView,
      schemaCodeView,
      viewStyle,
      curTypeList,
    } = this.state;
    return (
      <>
        <div className="title-container">
          <div className="title1-box">
            <p>
              <b className="title-name">JSONSchema</b>:
              提供可视化界面编辑json格式/结构；
              <br />
              用于可视化模型设置（定义可配置项）。
            </p>
            <div>
              <b>自定义展示</b>: &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={schemaCodeView}
                checkedChildren="code"
                unCheckedChildren="view"
                onChange={(checked) => {
                  this.setState({
                    schemaCodeView: checked,
                  });
                }}
              />
            </div>
          </div>
          <div className={`title2-box ${!wideScreen ? 'mobile-view' : ''}`}>
            <p>
              <b className="title-name">JSONEditor</b>:
              提供可视化界面编辑json数据内容，用于可视化配置，避免用户直接编辑json数据内容。
            </p>
            <div>
              <b>自定义展示</b>: &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={wideScreen}
                checkedChildren="大屏"
                unCheckedChildren="小屏"
                onChange={(checked) => {
                  this.setState({
                    wideScreen: checked,
                  });
                }}
              />
              &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={viewStyle === 'tabs' ? true : false}
                checkedChildren="tabs"
                unCheckedChildren="fold"
                onChange={(checked) => {
                  this.setState({
                    viewStyle: checked ? 'tabs' : 'fold',
                  });
                }}
              />
              &nbsp;&nbsp;
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={jsonView}
                checkedChildren="code"
                unCheckedChildren="view"
                onChange={(checked) => {
                  this.setState({
                    jsonView: checked,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-schema-box">
            {!schemaCodeView && (
              <JSONSchemaEditor
                data={jsonSchema}
                typeList={curTypeList}
                onChange={(newJsonSchema) => {
                  this.setState({
                    jsonSchema: newJsonSchema,
                  });
                }}
              />
            )}
            {schemaCodeView && (
              <AceEditor
                id="json_area_ace"
                value={JSON.stringify(jsonSchema, null, 2)}
                className="json-view-ace"
                mode="json"
                theme="solarized_light"
                name="JSON_CODE_EDIT"
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                readOnly={false}
                minLines={5}
                maxLines={33}
                width={'100%'}
                setOptions={{
                  useWorker: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            )}
          </div>
          <div
            className={`json-editor-box ${!wideScreen ? 'mobile-view' : ''}`}
          >
            <JSONEditor
              viewStyle={viewStyle}
              jsonView={jsonView} // code模式
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              dynamicDataList={dynamicDataList}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', JSON.stringify(newJsonData));
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
    <h1 className="page-title">JSON数据可视化/JSONEditor Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
