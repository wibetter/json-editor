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
        title: 'jsonSchemaObject',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            title: '功能设置',
            readOnly: true,
            properties: {
              a: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '', // 默认值
                description: '', // 字段项的说明和描述
                placeholder: '', // 输入提示
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['a'],
            propertyOrder: ['a'],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '样式设置',
            readOnly: true,
            properties: {
              b: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '', // 默认值
                description: '', // 字段项的说明和描述
                placeholder: '', // 输入提示
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['b'],
            propertyOrder: ['b'],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: true,
            properties: {
              c: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                default: '', // 默认值
                description: '', // 字段项的说明和描述
                placeholder: '', // 输入提示
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['c'],
            propertyOrder: ['c'],
          },
        },
        required: ['func', 'style', 'data'],
        propertyOrder: ['func', 'style', 'data'],
      },
      jsonData: {},
      wideScreen: false,
    };
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
