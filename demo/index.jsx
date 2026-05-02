import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Select } from 'antd';
import JSONSchemaEditor from '../packages/json-schema-editor/lib/index'; // 正式环境请使用 '@wibetter/json-schema-editor'
import JSONEditor from '../packages/json-editor/lib/index'; // 正式环境请使用 '@wibetter/json-editor'
import '../packages/json-schema-editor/lib/index.css';
import '../packages/json-editor/lib/index.css';
import './demo.scss';

const initialSchema = {
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
          "default": "top",
          "readOnly": false,
          "isRequired": false,
          "multiple": false,
          "defaultActiveFirstOption": false,
          "withLabel": false,
          "showKey": false,
          "titleStyle": {}
        },
        "legend": {
          "title": "图例字段",
          "type": "input",
          "default": "type"
        },
        "rating": {
          "title": "图表评分",
          "type": "input-rate",
          "default": 3,
          "description": "对该图表进行评分",
          "count": 5,
          "allowHalf": true,
          "allowClear": true,
          "size": "default",
          "tooltips": "差,较差,一般,良好,优秀"
        }
      },
      "propertyOrder": [
        "legendAlign",
        "legend",
        "rating"
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
              "maximum": "10000"
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
              "maximum": "10000"
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
        "color": {
          "type": "color",
          "title": "字体颜色",
          "default": "#ffffff",
          "description": ""
        }
      },
      "propertyOrder": [
        "width",
        "height",
        "color"
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
            "data": {
              "title": "数据内容",
              "type": "json",
              "default": "{}",
              "description": "用于存放 DynamicData 的数据内容",
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
            "data",
            "localFilter"
          ]
        },
        "xfield_x": {
          "type": "select",
          "title": "x轴字段",
          "options": [
            {
              "label": "name",
              "value": "a"
            },
            {
              "label": "选项b",
              "value": "b"
            },
            {
              "label": "选项c",
              "value": "c"
            }
          ],
          "description": "",
          "readOnly": false,
          "isRequired": false,
          "multiple": false,
          "defaultActiveFirstOption": false,
          "withLabel": false,
          "default": "name",
          "showKey": false,
          "titleStyle": {}
        },
        "field_y": {
          "type": "select",
          "title": "y轴字段",
          "options": [
            {
              "label": "pv",
              "value": "a"
            },
            {
              "label": "uv",
              "value": "b"
            },
            {
              "label": "orders",
              "value": "c"
            }
          ],
          "description": "",
          "readOnly": false,
          "isRequired": false,
          "multiple": false,
          "defaultActiveFirstOption": false,
          "withLabel": false,
          "default": "pv",
          "showKey": false,
          "titleStyle": {}
        }
      },
      "propertyOrder": [
        "chartDataList",
        "xfield_x",
        "field_y"
      ]
    }
  },
  "propertyOrder": [
    "data",
    "props",
    "style"
  ],
  "lastUpdateTime": 1777736615634
};

const initialJsonData = {
  data: {
    chartDataList: {
      type: 'local',
      data: '{}',
      localFilter: 'return data;',
    },
  },
  props: {
    legendAlign: 'top',
    legend: 'type',
    rating: 3,
  },
  style: {
    width: '220px',
    height: '220px',
  },
};

class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema: initialSchema,
      jsonData: initialJsonData,
      options: {
        GlobalOptions: [{ value: 'default0' }, { value: 'default1' }, { value: 'default2' }],
        wideScreen: false,
        jsonView: false,
        viewStyle: 'tabs',
        tabPosition: 'top',
        tabType: 'line',
        jsonViewReadOnly: true,
      },
      schemaCodeView: false,
      schemaViewReadOnly: true,
    };
  }

  updateOption = (key, value) => {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        [key]: value,
      },
    }));
  };

  render() {
    const { jsonSchema, jsonData, options, schemaCodeView, schemaViewReadOnly } = this.state;
    const { wideScreen, jsonView, viewStyle, tabPosition, tabType, jsonViewReadOnly } = options;

    return (
      <div className="showcase-page">
        <header className="showcase-header">
          <h1>json-editor 示例页</h1>
          <p>提供 JSON 与 JSON Schema 的可视化编辑能力，内置 JSONEditor、SchemaEditor，可通过表单化界面维护
          schema 和 json 数据，可用于支持组件与页面的配置可视化。</p>
        </header>

        <section className="showcase-intro">
          <div className="showcase-card showcase-card--full">
            <h3>功能概览</h3>
            <ul>
              <li>SchemaEditor：以表单的形式编辑 schema 数据，可用于在线设计组件的配置面板。</li>
              <li>JSONEditor：以表单的形式编辑 json 数据，可用于充当组件的配置面板。</li>
            </ul>
          </div>
        </section>

        <section className="showcase-controls">
          <h2>配置开关</h2>
          <div className="showcase-controls__groups">
            <div className="showcase-controls__group">
              <h3>SchemaEditor 配置（左）</h3>
              <div className="showcase-controls__grid">
                <div className="showcase-controls__item">
                  <div className="showcase-controls__meta">
                    <div className="showcase-controls__label">源码模式</div>
                    <div className="showcase-controls__desc">开启后展示对应的 schema 数据。</div>
                  </div>
                  <div className="showcase-controls__control">
                    <Switch
                      checked={schemaCodeView}
                      checkedChildren="code"
                      unCheckedChildren="view"
                      onChange={(checked) => this.setState({ schemaCodeView: checked })}
                    />
                  </div>
                </div>

                {schemaCodeView && (
                  <div className="showcase-controls__item">
                    <div className="showcase-controls__meta">
                      <div className="showcase-controls__label">可编辑</div>
                      <div className="showcase-controls__desc">开启后 schema 内容支持编辑。</div>
                    </div>
                    <div className="showcase-controls__control">
                      <Switch
                        checked={!schemaViewReadOnly}
                        checkedChildren="开"
                        unCheckedChildren="关"
                        onChange={(checked) => this.setState({ schemaViewReadOnly: !checked })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="showcase-controls__group">
              <h3>JSONEditor 配置（右）</h3>
              <div className="showcase-controls__grid">
                <div className="showcase-controls__item">
                  <div className="showcase-controls__meta">
                    <div className="showcase-controls__label">宽屏模式</div>
                    <div className="showcase-controls__desc">开启后编辑器以PC宽屏模式展示配置内容。</div>
                  </div>
                  <div className="showcase-controls__control">
                    <Switch
                      checked={wideScreen}
                      checkedChildren="开"
                      unCheckedChildren="关"
                      onChange={(checked) => this.updateOption('wideScreen', checked)}
                    />
                  </div>
                </div>

                <div className="showcase-controls__item">
                  <div className="showcase-controls__meta">
                    <div className="showcase-controls__label">源码模式</div>
                    <div className="showcase-controls__desc">开启后展示对应的 json 数据。</div>
                  </div>
                  <div className="showcase-controls__control">
                    <Switch
                      checked={jsonView}
                      checkedChildren="code"
                      unCheckedChildren="view"
                      onChange={(checked) => this.updateOption('jsonView', checked)}
                    />
                  </div>
                </div>

                {jsonView && (
                  <div className="showcase-controls__item">
                    <div className="showcase-controls__meta">
                      <div className="showcase-controls__label">可编辑</div>
                      <div className="showcase-controls__desc">开启后 json 内容支持编辑。</div>
                    </div>
                    <div className="showcase-controls__control">
                      <Switch
                        checked={!jsonViewReadOnly}
                        checkedChildren="开"
                        unCheckedChildren="关"
                        onChange={(checked) => this.updateOption('jsonViewReadOnly', !checked)}
                      />
                    </div>
                  </div>
                )}

                <div className="showcase-controls__item">
                  <div className="showcase-controls__meta">
                    <div className="showcase-controls__label">展示模式</div>
                    <div className="showcase-controls__desc">tabs 或折叠面板分组展示模式。</div>
                  </div>
                  <div className="showcase-controls__control">
                    <Select value={viewStyle} onChange={(value) => this.updateOption('viewStyle', value)}>
                      <Select.Option value="tabs">tabs</Select.Option>
                      <Select.Option value="fold">fold</Select.Option>
                    </Select>
                  </div>
                </div>

                {viewStyle === 'tabs' && (
                  <div className="showcase-controls__item">
                    <div className="showcase-controls__meta">
                      <div className="showcase-controls__label">Tab 位置</div>
                      <div className="showcase-controls__desc">控制 tabs 展示在上、下、左、右位置。</div>
                    </div>
                    <div className="showcase-controls__control">
                      <Select value={tabPosition} onChange={(value) => this.updateOption('tabPosition', value)}>
                        <Select.Option value="top">top</Select.Option>
                        <Select.Option value="bottom">bottom</Select.Option>
                        <Select.Option value="left">left</Select.Option>
                        <Select.Option value="right">right</Select.Option>
                      </Select>
                    </div>
                  </div>
                )}

                {viewStyle === 'tabs' && (
                  <div className="showcase-controls__item">
                    <div className="showcase-controls__meta">
                      <div className="showcase-controls__label">Tab 样式</div>
                      <div className="showcase-controls__desc">设置 tab 使用 line 或 card 视觉风格。</div>
                    </div>
                    <div className="showcase-controls__control">
                      <Select value={tabType} onChange={(value) => this.updateOption('tabType', value)}>
                        <Select.Option value="line">line</Select.Option>
                        <Select.Option value="card">card</Select.Option>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="showcase-editors">
          <div className="showcase-panel">
            <div className="showcase-panel__title">SchemaEditor</div>
            <div className="showcase-panel__desc">用于设计配置面板结构，变更后会实时驱动右侧 JSONEditor 渲染。</div>
            <div className="showcase-panel__body">
              <JSONSchemaEditor
                data={jsonSchema}
                jsonView={schemaCodeView}
                jsonViewReadOnly={schemaViewReadOnly}
                onChange={(nextSchema) => this.setState({ jsonSchema: nextSchema })}
              />
            </div>
          </div>

          <div className={`showcase-panel${!wideScreen ? ' showcase-panel--narrow' : ''}`}>
            <div className="showcase-panel__title">JSONEditor</div>
            <div className="showcase-panel__desc">用于编辑 JSON 配置数据，编辑器行为由上方 options 配置实时控制。</div>
            <div className="showcase-panel__body">
              <JSONEditor
                schemaData={jsonSchema}
                jsonData={jsonData}
                options={options}
                onChange={(nextData) => this.setState({ jsonData: nextData })}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<IndexDemo />, document.getElementById('root'));
