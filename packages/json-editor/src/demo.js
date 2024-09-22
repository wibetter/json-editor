import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'antd';
import JSONSchemaEditor from '@wibetter/json-schema-editor';
import JSONEditor from './main';
// import JSONEditor from '../lib/index';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import '@wibetter/json-schema-editor/lib/index.css';
import '../../../index.scss';

/**
 * JSONEditor的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema: {
        type: 'object',
        name: 'circle',
        title: 'circle 圆环图',
        'ui-type': 'ui-materiel',
        'ui-name': 'AntV',
        'ui-framework': 'AntV',
        format: 'object',
        properties: {
          props: {
            type: 'object',
            format: 'func',
            title: '属性设置',
            readOnly: false,
            properties: {
              legendAlign: {
                type: 'string',
                title: '图例位置',
                format: 'single-select',
                items: {
                  type: 'string',
                  enum: ['top', 'right', 'bottom', 'left'],
                  enumextra: ['上', '右', '下', '左'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
                default: 'top',
              },
            },
            required: ['legendAlign'],
            propertyOrder: ['legendAlign'],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '外观设置',
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
                    default: '15px',
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
              width: {
                type: 'object',
                format: 'quantity',
                title: '宽',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 220,
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
              },
              height: {
                type: 'object',
                format: 'quantity',
                title: '高',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 220,
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
                    default: '15px',
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
            },
            required: ['margin', 'width', 'height', 'padding'],
            propertyOrder: ['width', 'height', 'margin', 'padding'],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: false,
            properties: {
              chartDataList: {
                type: 'object',
                format: 'dynamic-data',
                title: '图表数据',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['本地数据', '接口数据'],
                    title: '数据类型',
                  },
                  config: {
                    type: 'object',
                    title: '接口配置',
                    format: 'object',
                    description: '用于存放接口的配置数据(url、请求参数等)',
                    isRequired: true,
                    properties: {
                      dataName: {
                        type: 'string',
                        default: 'local',
                        format: 'typeSelect',
                        enum: ['local', 'remote'],
                        enumextra: ['本地数据', '接口数据'],
                        title: '数据类型',
                      },
                      body: {
                        type: 'object',
                        title: '请求参数配置',
                        format: 'object',
                        description: '用于配置当前接口的请求参数数值',
                        isRequired: true,
                      },
                      filter: {
                        type: 'string',
                        title: '过滤器函数体',
                        format: 'codearea',
                        default: 'return data;',
                        description: '用于定义过滤接口数据',
                        isRequired: true,
                      },
                    },
                    required: ['dataName', 'body', 'filter'],
                    propertyOrder: ['dataName', 'body', 'filter'],
                  },
                  data: {
                    type: 'string',
                    title: '数据内容',
                    format: 'json',
                    default: '{}',
                    description: '用于存放DynamicData的数据内容',
                    isRequired: true,
                  },
                  localFilter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: 'return data;',
                    description: '用于定义过滤本地数据',
                    isRequired: true,
                  },
                },
                required: ['type', 'config', 'data', 'localFilter'],
                propertyOrder: ['type', 'config', 'data', 'localFilter'],
              },
              xAxis: {
                type: 'string',
                title: 'x轴字段',
                format: 'input',
                default: 'x',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              yAxis: {
                type: 'string',
                title: 'y轴字段',
                format: 'input',
                default: 'y',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
              legend: {
                type: 'string',
                title: '图例字段',
                format: 'input',
                default: 'type',
                description: '',
                placeholder: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['chartDataList', 'xAxis', 'yAxis', 'legend'],
            propertyOrder: ['chartDataList', 'xAxis', 'yAxis', 'legend'],
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
        required: ['data', 'props', 'style', 'event'],
        propertyOrder: ['data', 'props', 'style', 'event'],
        lastUpdateTime: '2021-03-29T02:08:03.551Z',
      }, // 用于组件配置的schema
      jsonData: {},
      dynamicDataList: [
        {
          id: 1,
          projectId: 88,
          name: 'getAttrs',
          type: '1',
          desc: '获取属性列表',
          url: 'http://yapi.com/mock/522/test',
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
          url: 'http://yapi.com/mock/522/test2',
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
              <b className="title-name">json-schema-editor</b>:
              JSON数据可视化/JSONSchema，以表单的形式编辑 json
              schema。可用于在线设计组件的配置面板。
            </p>
            <div>
              <b>开启源码模式</b>: &nbsp;&nbsp;
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
              <b className="title-name">json-editor</b>:
              JSON数据可视化/JSONEditor，以表单的形式编辑 json
              数据。可用于支持组件或页面可视化配置。
            </p>
            <div>
              <b>开启源码模式</b>: &nbsp;&nbsp;
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
