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
              backImageUrl: {
                type: 'string',
                format: 'url',
                description: '背景图',
              },
            },
            required: ['field_10', 'field_11', 'backImageUrl'],
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
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'quantitySelect',
                    enum: ['px', 'rem', 'em', 'percent'],
                    enumextra: ['px', 'rem', 'em', 'percent'],
                    description: '单位',
                  },
                },
                description: '上边距',
                required: ['unit', 'quantity'],
                default: 'wrapPadding',
              },
              paddingBottom: {
                type: 'object',
                format: 'quantity',
                properties: {
                  unit: {
                    type: 'number',
                    description: '数量',
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'quantitySelect',
                    enum: ['px', 'rem', 'em', 'percent'],
                    enumextra: ['px', 'rem', 'em', 'percent'],
                    description: '单位',
                  },
                },
                description: '下边距',
                required: ['unit', 'quantity'],
              },
            },
            required: [
              'field_4',
              'field_5',
              'backColor',
              'titlePosition',
              'inner',
              'paddingBottom',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              exhibitionData: {
                type: 'object',
                format: 'datasource',
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    description: '类型',
                  },
                  data: {
                    type: 'string',
                    format: 'typeSelectData',
                    default: 'local',
                    readOnlyInJson: true,
                  },
                  filter: {
                    type: 'string',
                    format: 'textarea',
                    default: 'return data;',
                    description: '过滤器',
                  },
                },
                description: '数据源',
                required: ['data', 'filter', 'type'],
              },
            },
            required: ['a a', 'jsonItem', 'exhibitionData'],
          },
        },
        required: ['func', 'style', 'data'],
      },
      jsonData: {
        func: {
          backImageUrl:
            'https://img12.360buyimg.com/imagetools/jfs/t1/130978/26/2156/2976318/5ee4e1c0E883919f3/c6386ca41014414d.png',
        },
        style: {
          paddingTop: {
            unit: 124,
            quantity: 'px',
          },
          paddingBottom: {
            unit: 124,
            quantity: 'px',
          },
        },
        data: {
          exhibitionData: {
            type: 'local',
            data: [
              {
                mainTitle: '玩法介绍',
                subTitle: '多种玩法一网打尽',
                cards: [
                  {
                    icon:
                      'https://img14.360buyimg.com/imagetools/jfs/t1/118610/37/10140/2261/5ee4e1bdE2eaebab5/04ad51848c96e7ff.png',
                    title: '获客拉新',
                    content: '多人拼团、销售员、瓜分券、团购返现',
                  },
                  {
                    icon:
                      'https://img12.360buyimg.com/imagetools/jfs/t1/125369/32/4859/2199/5ee4e1beEc3dad33f/ff678ee0a973a3f0.png',
                    title: '下单转化',
                    content: '限时折扣、优惠券、降价拍、秒杀',
                  },
                  {
                    icon:
                      'https://img12.360buyimg.com/imagetools/jfs/t1/133121/38/2148/3060/5ee4e1bdE488f3e96/bb531776302e43c1.png',
                    title: '提高客单',
                    content: '打包一口价、优惠套餐、满减送',
                  },
                  {
                    icon:
                      'https://img10.360buyimg.com/imagetools/jfs/t1/131174/3/2136/1034/5ee4e1bdE9cbc6384/309e668fa0723fcb.png',
                    title: '留存复购',
                    content: '积分商城、会员储值、会员卡、签到',
                  },
                ],
              },
              {
                mainTitle: '服务',
                subTitle: '360°全方位一站式服务',
                cards: [
                  {
                    icon:
                      'https://img10.360buyimg.com/imagetools/jfs/t1/129279/1/4730/2526/5ee4e1bdEd0574a8d/9d43d93514943ee0.png',
                    title: '专业客服答疑',
                    content: '7*12小时专业指导 答疑解惑',
                  },
                  {
                    icon:
                      'https://img12.360buyimg.com/imagetools/jfs/t1/127069/11/4761/2448/5ee4e1bdE4b6c12ba/b2589f17c5259899.png ',
                    title: '一对一运维支持',
                    content: '随时随地学习，提升能力',
                  },
                  {
                    icon:
                      'https://img11.360buyimg.com/imagetools/jfs/t1/119895/29/4849/1742/5ee4e1bdEca596e26/5b146d5d8069a73a.png',
                    title: '同行交流活动',
                    content: '直播、社区、商盟、实战分享',
                  },
                  {
                    icon:
                      'https://img14.360buyimg.com/imagetools/jfs/t1/117427/23/10090/2241/5ee4e1bdEcd3ba707/4bb1d794a89b5354.png',
                    title: '运营者特训营',
                    content: '培训优良运营人群，轻松招人',
                  },
                ],
              },
            ],
            filter: '() => {}',
          },
        },
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
    <h1>JSON数据可视化/JSONEditor Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
