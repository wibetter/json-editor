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
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {
              mainTitle: {
                type: 'string',
                description: '设置主title',
                format: 'input',
                title: '设置主title',
              },
              subTitle: {
                type: 'string',
                description: '设置副title',
                format: 'input',
                title: '设置副title',
              },
              bgImg: {
                type: 'string',
                format: 'url',
                description: '背景图',
                title: '背景图',
              },
              tabDataSource: {
                type: 'array',
                format: 'array',
                title: 'tab数据',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    icons: {
                      type: 'array',
                      format: 'array',
                      title: '图标和文案',
                      description: '',
                      isRequired: false,
                      readOnly: false,
                      items: {
                        type: 'object',
                        format: 'object',
                        title: '数组项',
                        description: '',
                        isRequired: false,
                        readOnly: false,
                        properties: {
                          icon: {
                            type: 'string',
                            title: '图标URL',
                            format: 'url',
                            default: '',
                            description: '',
                            placeholder: '',
                            isRequired: false,
                            readOnly: false,
                          },
                          text: {
                            type: 'string',
                            title: '图标文案',
                            format: 'input',
                            default: '',
                            description: '',
                            placeholder: '',
                            isRequired: false,
                            readOnly: false,
                          },
                        },
                        required: ['icon', 'text'],
                        propertyOrder: ['icon', 'text'],
                      },
                    },
                    title: {
                      type: 'string',
                      title: '标题',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                    content: {
                      type: 'string',
                      title: '内容',
                      format: 'input',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['icons', 'title', 'content'],
                  propertyOrder: ['icons', 'title', 'content'],
                },
              },
            },
            required: ['mainTitle', 'subTitle', 'bgImg', 'tabDataSource'],
            title: '功能设置',
            propertyOrder: ['mainTitle', 'subTitle', 'bgImg', 'tabDataSource'],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              paddingTop: {
                type: 'object',
                format: 'quantity',
                properties: {
                  unit: {
                    type: 'number',
                    description: '数量',
                    format: 'number',
                    title: '数量',
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'typeSelect',
                    enum: ['px', 'rem', 'em', 'percent'],
                    enumextra: ['px', 'rem', 'em', 'percent'],
                    description: '单位',
                    title: '单位类型',
                  },
                },
                required: ['unit', 'quantity'],
                description: '容器内边距',
                title: '容器内边距',
                propertyOrder: ['unit', 'quantity'],
              },
            },
            required: ['paddingTop'],
            title: '样式设置',
            propertyOrder: ['paddingTop'],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {},
            required: [],
            title: '数据设置',
            propertyOrder: [],
          },
        },
        required: ['func', 'style', 'data'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data'],
        lastUpdateTime: '2020-07-22T03:14:42.164Z',
      },
      jsonData: {
        func: {
          mainTitle: '行业解决方案',
          subTitle: '深耕细分行业，提供更加垂直的行业解决方案',
          bgImg:
            'https://img13.360buyimg.com/imagetools/jfs/t1/118843/39/12791/28400/5f1692adEf4f9500b/6ec3e2dfc977e4ec.png',
          tabDataSource: [
            {
              icons: [
                {
                  icon:
                    'https://img13.360buyimg.com/imagetools/jfs/t1/128081/12/4820/523/5ee4cdc1E369067c6/4c0347e9d56ae83a.png',
                  text: '在线商城',
                },
                {
                  icon:
                    'https://img13.360buyimg.com/imagetools/jfs/t1/118041/20/10031/1114/5ee4cdc0E747ca7cb/e326895a96bbeff0.png',
                  text: '门店管理',
                },
                {
                  icon:
                    'https://img14.360buyimg.com/imagetools/jfs/t1/143711/28/575/869/5ee4cdc0E04a14edf/f4f6816386a66d83.png',
                  text: '前置仓',
                },
                {
                  icon:
                    'https://img14.360buyimg.com/imagetools/jfs/t1/128330/23/4777/406/5ee4cdc1E2360cd72/19c812103f1156d1.png',
                  text: '进销存',
                },
                {
                  icon:
                    'https://img11.360buyimg.com/imagetools/jfs/t1/135438/32/2190/1290/5ee4cdc0E89d67821/ab1f299b1454b17e.png',
                  text: '客户管理',
                },
                {
                  icon:
                    'https://img12.360buyimg.com/imagetools/jfs/t1/120167/19/4838/428/5ee4cdc1Eb814e25e/8f45b2f059fd4e54.png',
                  text: '裂变分销',
                },
                {
                  icon:
                    'https://img10.360buyimg.com/imagetools/jfs/t1/144879/4/602/602/5ee4cdc0E66eee319/96de2f57f83219d5.png',
                  text: '拼团砍价',
                },
                {
                  icon:
                    'https://img10.360buyimg.com/imagetools/jfs/t1/136688/33/2162/399/5ee4cdc0Ed5b35457/6ffc9d37797f0acf.png',
                  text: '营销插件',
                },
              ],
              title: '智慧线下解决方案',
              content:
                '智慧零售解决方案是一款面向线下零售门店的一体化多渠道零售解决方案。智慧零售以在线商城、门店收银、多渠道进销存、客户管理、互动营销、数据分析在内的六大核心服务，实现线上线下商品、会员、场景的互联互通，助推企业快速实现营销、服务、效率转型升级。',
            },
            {
              icons: [
                {
                  icon:
                    'https://img13.360buyimg.com/imagetools/jfs/t1/128081/12/4820/523/5ee4cdc1E369067c6/4c0347e9d56ae83a.png',
                  text: '在线商城1',
                },
                {
                  icon:
                    'https://img13.360buyimg.com/imagetools/jfs/t1/118041/20/10031/1114/5ee4cdc0E747ca7cb/e326895a96bbeff0.png',
                  text: '门店管理',
                },
                {
                  icon:
                    'https://img14.360buyimg.com/imagetools/jfs/t1/143711/28/575/869/5ee4cdc0E04a14edf/f4f6816386a66d83.png',
                  text: '前置仓',
                },
                {
                  icon:
                    'https://img14.360buyimg.com/imagetools/jfs/t1/128330/23/4777/406/5ee4cdc1E2360cd72/19c812103f1156d1.png',
                  text: '进销存',
                },
                {
                  icon:
                    'https://img11.360buyimg.com/imagetools/jfs/t1/135438/32/2190/1290/5ee4cdc0E89d67821/ab1f299b1454b17e.png',
                  text: '客户管理',
                },
                {
                  icon:
                    'https://img12.360buyimg.com/imagetools/jfs/t1/120167/19/4838/428/5ee4cdc1Eb814e25e/8f45b2f059fd4e54.png',
                  text: '裂变分销',
                },
                {
                  icon:
                    'https://img10.360buyimg.com/imagetools/jfs/t1/144879/4/602/602/5ee4cdc0E66eee319/96de2f57f83219d5.png',
                  text: '拼团砍价',
                },
                {
                  icon:
                    'https://img10.360buyimg.com/imagetools/jfs/t1/136688/33/2162/399/5ee4cdc0Ed5b35457/6ffc9d37797f0acf.png',
                  text: '营销插件',
                },
              ],
              title: '占位用途方案11',
              content:
                '11智慧零售解决方案是一款面向线下零售门店的一体化多渠道零售解决方案。智慧零售以在线商城、门店收银、多渠道进销存、客户管理、互动营销、数据分析在内的六大核心服务，实现线上线下商品、会员、场景的互联互通，助推企业快速实现营销、服务、效率转型升级。',
            },
          ],
        },
        style: {
          paddingTop: {
            unit: 111,
            quantity: 'px',
          },
        },
        data: {},
      },
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
