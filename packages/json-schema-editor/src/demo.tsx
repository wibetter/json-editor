import * as React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'antd';
// @ts-ignore
import JSONEditor from '@wibetter/json-editor';
import JSONSchemaEditor from './main';
import '@wibetter/json-editor/lib/index.css';
import '../../../index.scss';

// 导入自定义 Schema
// import './custom';

/**
 * json-schema-editor的测试Demo：含json-editor
 */
interface IndexDemoState {
  jsonSchema: any;
  jsonData: any;
  wideScreen: boolean;
  jsonView: boolean;
  schemaCodeView: boolean;
  viewStyle: 'tabs' | 'fold';
  jsonViewReadOnly: boolean;
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
                  {
                    label: '竖排(默认)',
                    value: 'column',
                  },
                  {
                    label: '横排',
                    value: 'row',
                  },
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
      wideScreen: false,
      jsonView: false,
      schemaCodeView: false, // schema源码模式
      viewStyle: 'tabs', // 默认折叠模式
      jsonViewReadOnly: true,
    };
  }

  render() {
    const {
      jsonSchema,
      jsonData,
      wideScreen,
      schemaCodeView,
      jsonView,
      viewStyle,
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
            <JSONSchemaEditor
              data={jsonSchema}
              jsonView={schemaCodeView}
              jsonViewReadOnly={jsonViewReadOnly}
              onChange={(newJsonSchema) => {
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
              tabPosition="top"
              tabType="line"
              onChange={(newJsonData: any) => {
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
    <h1 className="demoTitle">JSON数据可视化/JSONSchema Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
