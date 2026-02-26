import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Select } from 'antd';
// @ts-ignore
import JSONSchemaEditor from '@wibetter/json-schema-editor';
// @ts-ignore
import { urlParse } from '@wibetter/json-utils';
import JSONEditor from './main';
// import JSONEditor from '../lib/index';
import '@wibetter/json-schema-editor/lib/index.css';
import '../../../index.scss';

/**
 * JSONEditor的测试Demo
 */
class IndexDemo extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    const urlParams: any = urlParse();

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
        GlobalOptions: [
          { value: 'default0' },
          { value: 'default1' },
          { value: 'default2' },
        ],
        wideScreen: false,
        jsonView: urlParams['jsonView'] === 'true',
        viewStyle: urlParams['viewStyle'] ?? 'tabs',
        jsonViewReadOnly: true,
        tabPosition: 'top',
        tabType: 'line',
      },
      schemaCodeView: false,
      curTypeList: {},
      schemaViewReadOnly: true,
    };
  }

  render() {
    const {
      jsonSchema,
      jsonData,
      schemaCodeView,
      curTypeList,
      options,
      schemaViewReadOnly,
    } = this.state;
    const {
      wideScreen,
      jsonView,
      viewStyle,
      jsonViewReadOnly,
      tabPosition,
      tabType,
    } = options;

    return (
      <div className="demo-layout">
        {/* 顶部标题栏 */}
        <header className="demo-header">
          <h1 className="demo-header__title">JSON Editor Demo</h1>
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
                jsonView={schemaCodeView}
                jsonViewReadOnly={schemaViewReadOnly}
                data={jsonSchema}
                typeList={curTypeList}
                onChange={(newJsonSchema: any) => {
                  console.log(
                    'schemaDataChange',
                    JSON.stringify(newJsonSchema),
                  );
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
                    this.setState((prev: any) => ({
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
                    this.setState((prev: any) => ({
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
                    this.setState((prev: any) => ({
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
                        this.setState((prev: any) => ({
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
                      onChange={(value: string) => {
                        this.setState((prev: any) => ({
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
                      onChange={(value: string) => {
                        this.setState((prev: any) => ({
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

ReactDOM.render(<IndexDemo />, document.getElementById('root'));
