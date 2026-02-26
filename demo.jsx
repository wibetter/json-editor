import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Select, Tag } from 'antd';
import JSONSchemaEditor, { registerSchema, buildPropsSchema } from './packages/json-schema-editor/lib/index'; // 正式环境请使用 '@wibetter/json-schema-editor'
import JSONEditor, { registerRenderer } from './packages/json-editor/lib/index'; // 正式环境请使用 '@wibetter/json-editor'
import './packages/json-schema-editor/lib/index.css';
import './packages/json-editor/lib/index.css';
import './index.scss';

/*
说明：以下代码为添加自定义配置项的示例
// 添加自定义配置项
class ColorPickerRenderer extends React.Component {
  render() {
    const { targetJsonSchema, jsonStore, keyRoute } = this.props;
    const { title, description } = targetJsonSchema;
    const currentValue = jsonStore.getJSONDataByKeyRoute(keyRoute) ?? '#ffffff';

    return (
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
        <span style={{ marginRight: 8 }}>{title}</span>
        <input
          type="color"
          value={currentValue}
          title={description}
          onChange={(e) => {
            jsonStore.updateFormValueData(keyRoute, e.target.value);
          }}
        />
        <span style={{ marginLeft: 8 }}>{currentValue}</span>
      </div>
    );
  }
}

// 注册成json-editor配置项
registerRenderer({
  type: 'color-picker',
  component: ColorPickerRenderer
});

// 定义 ColorPicker 类型描述文件
const ColorPickerDescriptor = {
  type: 'color-picker',
  label: '颜色选择器',
  isContainer: false,

  // 新建该类型时的初始 schema
  defaultSchema: {
    type: 'color-picker',
    title: '颜色选择器'
  },

  // 高级配置面板的 schema（由 buildPropsSchema 构建，会自动合并通用配置项）
  propsSchema: buildPropsSchema(
    {},
    [],
  ),
};

// 注册成 json-schema-editor 可用配置项
registerSchema(ColorPickerDescriptor);

*/

/**
 * JSONSchemaEditor 和 JSONEditor 示例
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
                  { "label": "上", "value": "top" },
                  { "label": "右", "value": "right" },
                  { "label": "下", "value": "bottom" },
                  { "label": "左", "value": "left" }
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
            "propertyOrder": ["legendAlign", "legend"]
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
                      { "label": "px", "value": "px" },
                      { "label": "rem", "value": "rem" },
                      { "label": "em", "value": "em" },
                      { "label": "%", "value": "%" }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": ["unit", "quantity"]
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
                      { "label": "px", "value": "px" },
                      { "label": "rem", "value": "rem" },
                      { "label": "em", "value": "em" },
                      { "label": "%", "value": "%" }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": ["unit", "quantity"]
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
                      { "label": "px", "value": "px" },
                      { "label": "rem", "value": "rem" },
                      { "label": "em", "value": "em" },
                      { "label": "%", "value": "%" }
                    ],
                    "title": "单位类型"
                  }
                },
                "propertyOrder": ["margin", "padding", "quantity"],
                "description": ""
              },
              "bgColor": {
                type: 'color-picker',  // 对应自定义渲染器的 type
                title: '背景颜色',
                default: '#ffffff',
              },
            },
            "propertyOrder": ["width", "height", "paddingMargin", "bgColor"]
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
                      { "label": "本地数据", "value": "local" },
                      { "label": "接口数据", "value": "remote" }
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
                          { "label": "本地数据", "value": "local" },
                          { "label": "接口数据", "value": "remote" }
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
                    "propertyOrder": ["dataName", "body", "filter"]
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
                "propertyOrder": ["type", "config", "data", "localFilter"]
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
            "propertyOrder": ["chartDataList", "xAxis", "yAxis"]
          }
        },
        "propertyOrder": ["data", "props", "style"],
        "lastUpdateTime": 1746805475633
      },
      jsonData: {},
      options: {
        GlobalOptions: [
          { value: 'default0' },
          { value: 'default1' },
          { value: 'default2' },
        ],
        wideScreen: false,
        jsonView: false,
        viewStyle: 'tabs',
        tabPosition: 'top',
        tabType: 'line',
        jsonViewReadOnly: true,
      },
      schemaCodeView: false,
      curTypeList: {},
    };
  }

  render() {
    const {
      jsonSchema,
      jsonData,
      schemaCodeView,
      curTypeList,
      options,
    } = this.state;
    const { wideScreen, jsonView, viewStyle, tabPosition, tabType, jsonViewReadOnly } = options;

    return (
      <div className="demo-layout">
        {/* 全局顶部标题栏 */}
        <header className="demo-header">
          <h1 className="demo-header__title">JSON Editor Demo</h1>
          <p className="demo-header__subtitle">可视化 JSON Schema 设计 &amp; JSON 数据编辑工具</p>
        </header>

        {/* 左右分屏主体 */}
        <div className="demo-split">

          {/* 左侧：JSONSchemaEditor */}
          <div className="demo-panel demo-panel--left">
            <div className="demo-panel__header">
              <div className="demo-panel__title-row">
                <span className="demo-panel__badge demo-panel__badge--schema">SchemaEditor</span>
                <span className="demo-panel__name">json-schema-editor</span>
              </div>
              <p className="demo-panel__desc">
                以表单形式编辑 JSON Schema，可用于在线设计组件配置面板。
              </p>
              <div className="demo-panel__controls">
                <label className="demo-control-label">源码模式</label>
                <Switch
                  size="small"
                  defaultChecked={schemaCodeView}
                  checkedChildren="code"
                  unCheckedChildren="view"
                  onChange={(checked) => {
                    this.setState({ schemaCodeView: checked });
                  }}
                />
                {schemaCodeView && (
                  <>
                    <label className="demo-control-label">编辑模式</label>
                    <Switch
                      size="small"
                      defaultChecked={!jsonViewReadOnly}
                      checkedChildren="开"
                      unCheckedChildren="关"
                      onChange={(checked) => {
                        this.setState((prev) => ({
                          options: { ...prev.options, jsonViewReadOnly: !checked },
                        }));
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="demo-panel__body">
              <JSONSchemaEditor
                jsonView={schemaCodeView}
                jsonViewReadOnly={jsonViewReadOnly}
                data={jsonSchema}
                typeList={curTypeList}
                onChange={(newJsonSchema) => {
                  console.log('newJsonSchema', newJsonSchema);
                  this.setState({ jsonSchema: newJsonSchema });
                }}
              />
            </div>
          </div>

          {/* 分割线 */}
          <div className="demo-divider" />

          {/* 右侧：JSONEditor */}
          <div className={`demo-panel demo-panel--right${!wideScreen ? ' demo-panel--mobile' : ''}`}>
            <div className="demo-panel__header">
              <div className="demo-panel__title-row">
                <span className="demo-panel__badge demo-panel__badge--editor">JSONEditor</span>
                <span className="demo-panel__name">json-editor</span>
              </div>
              <p className="demo-panel__desc">
                以表单形式编辑 JSON 数据，可用于支持组件或页面可视化配置。
              </p>
              <div className="demo-panel__controls">
                <label className="demo-control-label">宽屏</label>
                <Switch
                  size="small"
                  defaultChecked={wideScreen}
                  checkedChildren="大"
                  unCheckedChildren="小"
                  onChange={(checked) => {
                    this.setState((prev) => ({
                      options: { ...prev.options, wideScreen: checked },
                    }));
                  }}
                />
                <label className="demo-control-label">视图</label>
                <Switch
                  size="small"
                  defaultChecked={viewStyle === 'tabs'}
                  checkedChildren="tabs"
                  unCheckedChildren="fold"
                  onChange={(checked) => {
                    this.setState((prev) => ({
                      options: { ...prev.options, viewStyle: checked ? 'tabs' : 'fold' },
                    }));
                  }}
                />
                <label className="demo-control-label">源码</label>
                <Switch
                  size="small"
                  defaultChecked={jsonView}
                  checkedChildren="code"
                  unCheckedChildren="view"
                  onChange={(checked) => {
                    this.setState((prev) => ({
                      options: { ...prev.options, jsonView: checked },
                    }));
                  }}
                />
                {viewStyle === 'tabs' && (
                  <>
                    <label className="demo-control-label">标签位置</label>
                    <Select
                      size="small"
                      style={{ width: 72 }}
                      value={tabPosition}
                      onChange={(value) => {
                        this.setState((prev) => ({
                          options: { ...prev.options, tabPosition: value },
                        }));
                      }}
                    >
                      <Select.Option value="top">上</Select.Option>
                      <Select.Option value="bottom">下</Select.Option>
                      <Select.Option value="left">左</Select.Option>
                      <Select.Option value="right">右</Select.Option>
                    </Select>
                    <label className="demo-control-label">标签样式</label>
                    <Select
                      size="small"
                      style={{ width: 72 }}
                      value={tabType}
                      onChange={(value) => {
                        this.setState((prev) => ({
                          options: { ...prev.options, tabType: value },
                        }));
                      }}
                    >
                      <Select.Option value="line">线条</Select.Option>
                      <Select.Option value="card">卡片</Select.Option>
                    </Select>
                  </>
                )}
              </div>
            </div>
            <div className="demo-panel__body">
              <JSONEditor
                schemaData={jsonSchema}
                jsonData={jsonData}
                options={options}
                onChange={(newJsonData) => {
                  console.log('jsonDataChange', JSON.stringify(newJsonData));
                  this.setState({ jsonData: newJsonData });
                }}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <IndexDemo />,
  document.getElementById('root'),
);
