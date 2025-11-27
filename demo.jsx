import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'antd';
import JSONSchemaEditor from './packages/json-schema-editor/lib/index';
import JSONEditor from './packages/json-editor/lib/index';
import './packages/json-schema-editor/lib/index.css';
import './packages/json-editor/lib/index.css';
import './index.scss';

/**
 * JSONSchemaEditor和JSONEditor的测试Demo
 * 备注：构建产物调试模式
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema: {
        "type": "object",
        "name": "circle",
        "title": "circle 圆环图",
        "ui-type": "ui-materiel",
        "ui-name": "AntV",
        "ui-framework": "AntV",
        "properties": {
          "props": {
            "type": "object",
            "title": "属性",
            "isFixed": true,
            "properties": {
              "legendAlign": {
                "title": "图例位置",
                "type": "select",
                "options": [
                  {
                    "label": "上",
                    "value": "top"
                  },
                  {
                    "label": "右",
                    "value": "right"
                  },
                  {
                    "label": "下",
                    "value": "bottom"
                  },
                  {
                    "label": "左",
                    "value": "left"
                  }
                ],
                "description": "",
                "default": "top"
              },
              "legend": {
                "title": "图例字段",
                "type": "input",
                "default": "type",
                "description": "",
                "placeholder": ""
              }
            },
            "propertyOrder": [
              "legendAlign",
              "legend"
            ]
          },
          "style": {
            "type": "object",
            "title": "外观",
            "isFixed": true,
            "properties": {
              "width": {
                "type": "quantity",
                "title": "宽",
                "properties": {
                  "unit": {
                    "type": "number",
                    "title": "单位数值",
                    "default": 220,
                    "minimum": 0,
                    "maximum": "10000",
                    "description": ""
                  },
                  "quantity": {
                    "type": "select",
                    "default": "px",
                    "options": [
                      {
                        "label": "px",
                        "value": "px"
                      },
                      {
                        "label": "rem",
                        "value": "rem"
                      },
                      {
                        "label": "em",
                        "value": "em"
                      },
                      {
                        "label": "%",
                        "value": "%"
                      }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": [
                  "unit",
                  "quantity"
                ]
              },
              "height": {
                "type": "quantity",
                "title": "高",
                "properties": {
                  "unit": {
                    "type": "number",
                    "title": "单位数值",
                    "default": 220,
                    "minimum": 0,
                    "maximum": "10000",
                    "description": ""
                  },
                  "quantity": {
                    "type": "select",
                    "default": "px",
                    "options": [
                      {
                        "label": "px",
                        "value": "px"
                      },
                      {
                        "label": "rem",
                        "value": "rem"
                      },
                      {
                        "label": "em",
                        "value": "em"
                      },
                      {
                        "label": "%",
                        "value": "%"
                      }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": [
                  "unit",
                  "quantity"
                ]
              },
              "paddingMargin": {
                "type": "padding-margin",
                "title": "边距设置",
                "isContainer": false,
                "properties": {
                  "margin": {
                    "title": "外边距",
                    "type": "input",
                    "default": "0",
                    "description": ""
                  },
                  "padding": {
                    "title": "内边距",
                    "type": "input",
                    "default": "0",
                    "description": ""
                  },
                  "quantity": {
                    "type": "select",
                    "default": "px",
                    "options": [
                      {
                        "label": "px",
                        "value": "px"
                      },
                      {
                        "label": "rem",
                        "value": "rem"
                      },
                      {
                        "label": "em",
                        "value": "em"
                      },
                      {
                        "label": "%",
                        "value": "%"
                      }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": [
                  "margin",
                  "padding",
                  "quantity"
                ],
                "description": ""
              }
            },
            "propertyOrder": [
              "width",
              "height",
              "paddingMargin"
            ]
          },
          "data": {
            "type": "object",
            "title": "数据",
            "isFixed": true,
            "properties": {
              "chartDataList": {
                "type": "dynamic-data",
                "title": "图表数据",
                "properties": {
                  "type": {
                    "default": "local",
                    "type": "select",
                    "options": [
                      {
                        "label": "本地数据",
                        "value": "local"
                      },
                      {
                        "label": "接口数据",
                        "value": "remote"
                      }
                    ],
                    "title": "数据类型"
                  },
                  "config": {
                    "type": "object",
                    "title": "接口配置",
                    "description": "用于存放接口的配置数据(url、请求参数等)",
                    "isRequired": true,
                    "properties": {
                      "dataName": {
                        "default": "local",
                        "type": "select",
                        "options": [
                          {
                            "label": "本地数据",
                            "value": "local"
                          },
                          {
                            "label": "接口数据",
                            "value": "remote"
                          }
                        ],
                        "title": "数据类型"
                      },
                      "body": {
                        "type": "object",
                        "title": "请求参数配置",
                        "description": "用于配置当前接口的请求参数数值",
                        "isRequired": true,
                        "properties": {},
                        "propertyOrder": []
                      },
                      "filter": {
                        "title": "过滤器函数体",
                        "type": "codearea",
                        "default": "return data;",
                        "description": "用于定义过滤接口数据",
                        "isRequired": true
                      }
                    },
                    "propertyOrder": [
                      "dataName",
                      "body",
                      "filter"
                    ]
                  },
                  "data": {
                    "title": "数据内容",
                    "type": "json",
                    "default": "{}",
                    "description": "用于存放DynamicData的数据内容",
                    "isRequired": true
                  },
                  "localFilter": {
                    "title": "过滤器",
                    "type": "codearea",
                    "default": "return data;",
                    "description": "用于定义过滤本地数据",
                    "isRequired": true
                  }
                },
                "propertyOrder": [
                  "type",
                  "config",
                  "data",
                  "localFilter"
                ]
              },
              "xAxis": {
                "title": "x轴字段",
                "type": "input",
                "default": "x",
                "description": "",
                "placeholder": ""
              },
              "yAxis": {
                "title": "y轴字段",
                "type": "input",
                "default": "y",
                "description": "",
                "placeholder": ""
              }
            },
            "propertyOrder": [
              "chartDataList",
              "xAxis",
              "yAxis"
            ]
          },
          "event": {
            "type": "object",
            "title": "事件",
            "isFixed": true,
            "properties": {},
            "propertyOrder": []
          }
        },
        "propertyOrder": [
          "data",
          "props",
          "style",
          "event"
        ],
        "lastUpdateTime": 1746805475633
      },
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
      options: {
        widgetType: 'page', // 组件类型 comp / page
        eventListenConfig: [
          {
            name: 'changeTab',
            desc: 'TabMenu菜单切换',
            code: 'TPLTabMenu_1720691304950_tabChange',
            listenName: 'TPLTabMenu_1720691304950',
          },
        ],
        eventEmitConfig: [
          {
            name: 'click',
            desc: '点击事件',
            code: 'CompTest1_1720691304953_click',
            compCode: 'CompTest1_1720691304953',
          },
        ], // 组件触发事件
        allEmitEventList: [
          {
            name: 'changeTab',
            desc: 'TabMenu菜单切换',
            code: 'TPLTabMenu_1720691304950_tabChange',
            compCode: 'TPLTabMenu_1720691304950',
          },
          {
            name: 'changeTab',
            desc: 'TabMenu菜单切换2',
            code: 'TPLTabMenu_1720691304952_tabChange',
            compCode: 'TPLTabMenu_1720691304952',
          },
          {
            name: 'click',
            desc: '点击事件',
            code: 'CompTest1_1720691304953_click',
            compCode: 'CompTest1_1720691304953',
          },
        ], // 全局可用事件列表
        metaContentKeyList: [
          {
            label: '全部内容',
            value: 'ALLCONTENT',
          },
          {
            label: 'title',
            value: 'title',
          },
          {
            label: 'id',
            value: 'id',
          },
          {
            label: 'newsMeta',
            value: 'newsMeta',
          },
        ],
        globalMetaConfig: [],
        GlobalOptions: [
          { value: '$Spacing-112' },
          { value: '$Spacing-23' },
          { value: '$Spacing-3' },
        ]
      },
      wideScreen: false,
      jsonView: false,
      schemaCodeView: false, // schema源码模式
      viewStyle: 'tabs', // 默认折叠模式
      curTypeList: {},
      jsonViewReadOnly: true,
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
      options,
      jsonViewReadOnly,
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
              {schemaCodeView && (
                <>
                  &nbsp;&nbsp;
                  <b>开启编辑模式</b>: &nbsp;&nbsp;
                  <Switch
                    style={{ display: 'inline-block' }}
                    defaultChecked={!jsonViewReadOnly}
                    checkedChildren="false"
                    unCheckedChildren="true"
                    onChange={(checked) => {
                      this.setState({
                        jsonViewReadOnly: !checked,
                      });
                    }}
                  />
                </>
              )}
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
            <JSONSchemaEditor
              jsonView={schemaCodeView}
              jsonViewReadOnly={jsonViewReadOnly}
              data={jsonSchema}
              typeList={curTypeList}
              onChange={(newJsonSchema) => {
                console.log('newJsonSchema', newJsonSchema);
                this.setState({
                  jsonSchema: newJsonSchema,
                });
              }}
            />
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
              options={options}
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
