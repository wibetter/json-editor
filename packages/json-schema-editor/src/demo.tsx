import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Select } from 'antd';
// @ts-ignore
import JSONEditor from '@wibetter/json-editor';
import JSONSchemaEditor from './main';
import '@wibetter/json-editor/lib/index.css';
import '../../../index.scss';

// 导入自定义 Schema
// import './custom';

/** JSONEditor 的 options 配置 */
interface EditorOptions {
  viewStyle: 'tabs' | 'fold';
  wideScreen: boolean;
  tabPosition: 'top' | 'bottom' | 'left' | 'right';
  tabType: 'line' | 'card';
  jsonView: boolean;
  jsonViewReadOnly: boolean;
}

/**
 * json-schema-editor的测试Demo：含json-editor
 */
interface IndexDemoState {
  jsonSchema: any;
  jsonData: any;
  options: EditorOptions;
  schemaCodeView: boolean;
  schemaViewReadOnly: boolean;
}

class IndexDemo extends React.PureComponent<{}, IndexDemoState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      jsonSchema: {
        type: 'object',
        name: 'circle',
        title: 'circle 圆环图',
        properties: {
          props: {
            type: 'object',
            title: '属性设置',
            isFixed: true,
            properties: {
              flexDirection: {
                type: 'select',
                title: '内容排列方向',
                options: [
                  { label: '竖排(默认)', value: 'column' },
                  { label: '横排', value: 'row' },
                ],
                description:
                  'flex-direction属性：决定主轴的方向（即列级容器内部元素的排列方向）',
                default: 'column',
              },
              field_10: {
                title: 'json数据',
                type: 'json',
                default: '{\n"t1": 123\n}',
              },
            },
            propertyOrder: ['flexDirection', 'field_10'],
          },
          style: {
            type: 'object',
            title: '外观设置',
            isFixed: true,
            properties: {},
            propertyOrder: [],
          },
          data: {
            type: 'object',
            title: '数据设置',
            isFixed: true,
            properties: {},
            propertyOrder: [],
          },
          event: {
            type: 'object',
            title: '事件设置',
            isFixed: true,
            properties: {},
            propertyOrder: [],
          },
        },
        propertyOrder: ['data', 'props', 'style', 'event'],
        lastUpdateTime: '2024-10-13T02:08:03.551Z',
      },
      jsonData: {},
      options: {
        viewStyle: 'tabs',
        wideScreen: false,
        tabPosition: 'top',
        tabType: 'line',
        jsonView: false,
        jsonViewReadOnly: true,
      },
      schemaCodeView: false,
      schemaViewReadOnly: true,
    };
  }

  render() {
    const {
      jsonSchema,
      jsonData,
      options,
      schemaCodeView,
      schemaViewReadOnly,
    } = this.state;
    const {
      wideScreen,
      jsonView,
      viewStyle,
      tabPosition,
      tabType,
      jsonViewReadOnly,
    } = options;

    return (
      <div className="demo-layout">
        {/* 顶部标题栏 */}
        <header className="demo-header">
          <h1 className="demo-header__title">JSON Schema Editor Demo</h1>
          <p className="demo-header__subtitle">
            可视化 JSON Schema 设计 &amp; JSON 数据编辑工具
          </p>
        </header>

        {/* 左右分屏主体 */}
        <div className="demo-split">
          {/* 左侧：JSONSchemaEditor */}
          <div className="demo-panel demo-panel--left">
            <div className="demo-panel__header">
              <div className="demo-panel__title-row">
                <span className="demo-panel__badge demo-panel__badge--schema">
                  SchemaEditor
                </span>
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
                      defaultChecked={!schemaViewReadOnly}
                      checkedChildren="开"
                      unCheckedChildren="关"
                      onChange={(checked) => {
                        this.setState({ schemaViewReadOnly: !checked });
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="demo-panel__body">
              <JSONSchemaEditor
                data={jsonSchema}
                jsonView={schemaCodeView}
                jsonViewReadOnly={schemaViewReadOnly}
                onChange={(newJsonSchema: any) => {
                  this.setState({ jsonSchema: newJsonSchema });
                }}
              />
            </div>
          </div>

          {/* 分割线 */}
          <div className="demo-divider" />

          {/* 右侧：JSONEditor */}
          <div
            className={`demo-panel demo-panel--right${!wideScreen ? ' demo-panel--mobile' : ''}`}
          >
            <div className="demo-panel__header">
              <div className="demo-panel__title-row">
                <span className="demo-panel__badge demo-panel__badge--editor">
                  JSONEditor
                </span>
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
                      options: {
                        ...prev.options,
                        viewStyle: checked ? 'tabs' : 'fold',
                      },
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
                {jsonView && (
                  <>
                    <label className="demo-control-label">编辑模式</label>
                    <Switch
                      size="small"
                      defaultChecked={!jsonViewReadOnly}
                      checkedChildren="开"
                      unCheckedChildren="关"
                      onChange={(checked) => {
                        this.setState((prev) => ({
                          options: {
                            ...prev.options,
                            jsonViewReadOnly: !checked,
                          },
                        }));
                      }}
                    />
                  </>
                )}
                {viewStyle === 'tabs' && (
                  <>
                    <label className="demo-control-label">标签位置</label>
                    <Select
                      size="small"
                      style={{ width: 72 }}
                      value={tabPosition}
                      onChange={(value: EditorOptions['tabPosition']) => {
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
                      onChange={(value: EditorOptions['tabType']) => {
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
                onChange={(newJsonData: any) => {
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

ReactDOM.render(<IndexDemo />, document.getElementById('root'));
