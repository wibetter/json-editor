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
        type: 'object',
        name: 'TPLSearch',
        title: '头部组件',
        properties: {
          props: {
            type: 'object',
            title: '属性',
            isFixed: true,
            properties: {
              name: {
                title: '组件名称',
                type: 'input',
                default: 'x',
                description: '',
                placeholder: '',
                showSearch: true,
                titleStyle: {
                  'font-weight': 600,
                  color: '#070c14',
                },
              },
              select1: {
                title: 'cascader',
                type: 'cascader',
                description: '',
                placeholder: '',
                showSearch: true,
                allowClear: true,
                options: [
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                          {
                            value: 'xihu',
                            label: 'West Lake',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                      {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                          {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                          },
                        ],
                      },
                    ],
                  },
                ],
                titleStyle: {
                  'font-weight': 600,
                  color: '#070c14',
                },
              },
              imgUrl: {
                title: '组件预览图1',
                type: 'input-image',
                accept: '.jpeg,.jpg,.png',
                multiple: true,
                description: '',
                placeholder: '',
              },
              description: {
                title: '组件描述',
                type: 'input',
                default: 'x',
                description: '组件的描述，该值会外显至mp后台',
                placeholder: '',
              },
              renderMethod: {
                title: '渲染方式',
                type: 'radio',
                description:
                  '组件的渲染方式，支持客户端和服务端。首屏内容选择服务端，非首屏内容选择客户端',
                options: [
                  {
                    label: '客户端',
                    value: 'client',
                  },
                  {
                    label: '服务端',
                    value: 'server',
                  },
                ],
                default: 'client',
              },
              field_1: {
                type: 'dynamic-config',
                title: '动态配置',
                description: '',
                isContainer: false,
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '内容Meta数据',
                        value: 'Content',
                      },
                      {
                        label: '全局配置数据',
                        value: 'RuntimeConst',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  value: {
                    title: '数据值',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    onShow:
                      'type === "DevDefaults" || type === "Content" || type === "RuntimeConst"',
                  },
                  description: {
                    title: '属性名称',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                    onShow:
                      'type === "ContentStaticConfig" || type === "ResourceCenter"',
                  },
                  valueType: {
                    type: 'radio',
                    title: '配置方式',
                    options: [
                      {
                        label: '填写',
                        value: 'string',
                      },
                      {
                        label: '选择',
                        value: 'select',
                      },
                    ],
                    default: 'string',
                    isConditionProp: true,
                    description: '',
                    onShow:
                      'type === "ContentStaticConfig" || type === "ResourceCenter"',
                  },
                  range: {
                    type: 'select',
                    title: '可选项',
                    multiple: true,
                    options: [],
                    onShow:
                      '(type === "ContentStaticConfig" || type === "ResourceCenter") && valueType === "select"',
                    description: '这里会使用value中的配置选项作为options',
                  },
                },
                propertyOrder: [
                  'type',
                  'value',
                  'description',
                  'valueType',
                  'range',
                ],
                showCodeViewBtn: false,
              },
              pagebgimg: {
                type: 'object',
                title: '背景图',
                description: '',
                isContainer: false,
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  value: {
                    title: '背景图',
                    type: 'input-image',
                    description: '',
                    placeholder: '',
                    onShow: 'type === "DevDefaults"',
                  },
                },
                propertyOrder: ['type', 'value'],
                showCodeViewBtn: false,
                showKey: true,
              },
              themeSource: {
                type: 'object',
                title: '主题包',
                description: '',
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  description: {
                    title: '自定义配置名称',
                    type: 'input',
                    default: '主题包配置',
                    description: '',
                    placeholder: '',
                    onShow:
                      'type === "ContentStaticConfig" || type === "ResourceCenter"',
                  },
                  attrs: {
                    type: 'array',
                    title: '属性列表',
                    description: '可用于设置需要配置的属性Key、描述和类型',
                    items: {
                      type: 'object',
                      title: '数组项',
                      description: '',
                      properties: {
                        attr: {
                          type: 'input',
                          title: '属性Key',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        description: {
                          title: '描述',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        type: {
                          type: 'select',
                          title: '属性类型',
                          options: [
                            {
                              label: '图片类型',
                              value: 'image',
                            },
                            {
                              label: '字符串',
                              value: 'string',
                            },
                            {
                              label: '数字',
                              value: 'number',
                            },
                          ],
                          default: 'string',
                          description: '',
                        },
                        value: {
                          title: '数值',
                          typeOn:
                            "type === 'image' ? 'input-image' : type === 'number' ? 'number' : 'input'",
                          default: '',
                          description: '',
                          placeholder: '',
                          onShow: "props.themeSource.type === 'DevDefaults'",
                        },
                      },
                      propertyOrder: ['attr', 'description', 'type', 'value'],
                    },
                    'minimum-child': 1,
                    showCodeViewBtn: false,
                  },
                },
                propertyOrder: ['type', 'description', 'attrs'],
                showCodeViewBtn: false,
                showKey: true,
              },
              globalTheme: {
                type: 'object',
                title: '页面主题',
                description: '',
                isContainer: false,
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  value: {
                    type: 'select',
                    title: '数据值',
                    options: [
                      {
                        label: '选项a',
                        value: 'a',
                      },
                      {
                        label: '选项b',
                        value: 'b',
                      },
                      {
                        label: '选项c',
                        value: 'c',
                      },
                    ],
                    default: 'a',
                    description: '',
                    onShow: 'type === "DevDefaults"',
                  },
                },
                propertyOrder: ['type', 'value'],
                showCodeViewBtn: false,
                showKey: true,
              },
              isHomePage: {
                type: 'object',
                title: '是否为首页',
                description: '',
                isContainer: false,
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  value: {
                    type: 'boolean',
                    title: '设置成首页',
                    default: false,
                    description: '',
                    onShow: 'type === "DevDefaults"',
                  },
                  description: {
                    title: '属性名称',
                    type: 'input',
                    default: '设置成首页',
                    description: '',
                    placeholder: '',
                    onShow:
                      'type === "ContentStaticConfig" || type === "ResourceCenter"',
                  },
                },
                propertyOrder: ['type', 'value', 'description'],
                showCodeViewBtn: false,
                showKey: true,
              },
              globalMetaTabList: {
                type: 'object',
                title: '全局Tab配置',
                description: '',
                properties: {
                  type: {
                    type: 'select',
                    title: '数据来源',
                    options: [
                      {
                        label: '模板直接设置',
                        value: 'DevDefaults',
                      },
                      {
                        label: 'mp后台配置',
                        value: 'ContentStaticConfig',
                      },
                      {
                        label: '资源中心配置',
                        value: 'ResourceCenter',
                      },
                    ],
                    default: 'DevDefaults',
                    isConditionProp: true,
                    description:
                      '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
                  },
                  description: {
                    title: '属性名称',
                    type: 'input',
                    default: 'Tab全局配置',
                    description: '',
                    placeholder: '',
                    onShow:
                      'type === "ContentStaticConfig" || type === "ResourceCenter"',
                  },
                  tabNums: {
                    title: 'Tab配置数',
                    type: 'number',
                    default: 1,
                    description: '需要配置的Tab数量',
                    placeholder: '',
                    onShow:
                      "type === 'ContentStaticConfig' || type === 'ResourceCenter'",
                  },
                  attrs: {
                    type: 'array',
                    title: 'Tab属性',
                    description: 'Tab需要配置的属性',
                    items: {
                      type: 'object',
                      title: '数组项',
                      description: '',
                      properties: {
                        attr: {
                          type: 'input',
                          title: '属性Key',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        description: {
                          title: '描述',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                      },
                      propertyOrder: ['attr', 'description'],
                    },
                    'minimum-child': 1,
                    onShow:
                      "type === 'ContentStaticConfig' || type === 'ResourceCenter'",
                    showCodeViewBtn: false,
                  },
                  value: {
                    type: 'array',
                    title: 'Tab配置',
                    description: '',
                    items: {
                      type: 'object',
                      title: '数组项',
                      description: '',
                      properties: {
                        title: {
                          type: 'input',
                          title: '名称',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        id: {
                          title: 'id',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        value: {
                          title: '数值',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                      },
                      propertyOrder: ['title', 'value', 'id'],
                    },
                    'minimum-child': 1,
                    onShow: "type === 'DevDefaults'",
                    showCodeViewBtn: false,
                  },
                },
                propertyOrder: [
                  'type',
                  'value',
                  'description',
                  'attrs',
                  'tabNums',
                ],
                showCodeViewBtn: false,
                showKey: false,
              },
            },
            propertyOrder: [
              'select1',
              'themeSource',
              'globalMetaTabList',
              'pagebgimg',
              'globalTheme',
              'isHomePage',
              'name',
              'imgUrl',
              'description',
              'renderMethod',
              'field_1',
            ],
          },
          style: {
            type: 'object',
            title: '样式',
            isFixed: true,
            properties: {
              margin: {
                type: 'box-style',
                title: '外边距',
                isContainer: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    default: '15px',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              width: {
                type: 'quantity',
                title: '宽',
                isContainer: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    default: 220,
                    minimum: 0,
                    maximum: '10000',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              padding: {
                type: 'box-style',
                title: '内边距',
                isContainer: false,
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    default: '15px',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              padding2: {
                title: '内边距',
                type: 'select',
                options: [
                  {
                    label: '无间距',
                    value: '',
                  },
                  {
                    label: '上下左右（间距-4,8px）',
                    value: '$Spacing-4,$Spacing-4,$Spacing-4,$Spacing-4',
                  },
                  {
                    label: '上下左右（间距-8,20px）',
                    value: '$Spacing-8,$Spacing-8,$Spacing-8,$Spacing-8',
                  },
                  {
                    label: '上（间距-8,20px）',
                    value: '$Spacing-8,0,0,0',
                  },
                  {
                    label: '上（间距-12,40x）',
                    value: '$Spacing-12,0,0,0',
                  },
                  {
                    label: '上（间距-13,48px）',
                    value: '$Spacing-13,0,0,0',
                  },
                  {
                    label: '右（间距-15,60px）',
                    value: '0,$Spacing-15,0,0',
                  },
                  {
                    label: '右（间距-18,80px）',
                    value: '0,$Spacing-18,0,0',
                  },
                  {
                    label: '下（间距-12,40px）',
                    value: '0,0,$Spacing-12,0',
                  },
                  {
                    label: '左（间距-15,60）',
                    value: '0,0,0,$Spacing-15',
                  },
                ],
              },
              margin2: {
                title: '外边距',
                type: 'select',
                options: [
                  {
                    label: '无间距',
                    value: '',
                  },
                  {
                    label: '上下0，左右居中',
                    value: '0,auto,0,auto',
                  },
                  {
                    label: '上下左右（间距-8,20px） 20px',
                    value: '$Spacing-8,$Spacing-8,$Spacing-8,$Spacing-8',
                  },
                  {
                    label: '上（间距-12,40px）',
                    value: '$Spacing-12,0,0,0',
                  },
                  {
                    label: '上（间距-13,48px）',
                    value: '$Spacing-13,0,0,0',
                  },
                  {
                    label: '右（间距-15,60px）',
                    value: '0,$Spacing-15,0,0',
                  },
                  {
                    label: '右（间距-18,80px）',
                    value: '0,$Spacing-18,0,0',
                  },
                  {
                    label: '下（间距-12,40px）',
                    value: '0,0,$Spacing-12,0',
                  },
                  {
                    label: '左（间距-15,60px）',
                    value: '0,0,0,$Spacing-15',
                  },
                ],
              },
              mianAlignment: {
                title: '主轴对齐',
                type: 'select',
                options: [
                  {
                    label: '无',
                    value: '',
                  },
                  {
                    label: '起始位置开始排列',
                    value: 'start',
                  },
                  {
                    label: '结束位置开始排列',
                    value: 'end',
                  },
                  {
                    label: '居中对齐',
                    value: 'center',
                  },
                  {
                    label: '拉伸以适应容器的尺寸',
                    value: 'stretch',
                  },
                  {
                    label: '以基线对齐',
                    value: 'baseline',
                  },
                ],
                default: 'start',
              },
              crossAlignment: {
                title: '交叉轴对齐',
                type: 'select',
                options: [
                  {
                    label: '无',
                    value: '',
                  },
                  {
                    label: '起始位置开始排列',
                    value: 'start',
                  },
                  {
                    label: '结束位置开始排列',
                    value: 'end',
                  },
                  {
                    label: '居中对齐',
                    value: 'center',
                  },
                  {
                    label: '均匀分布，首尾不留白',
                    value: 'space-between',
                  },
                  {
                    label: '均匀分布，两侧间隔相等',
                    value: 'space-around',
                  },
                ],
                default: 'start',
              },
            },
            propertyOrder: [
              'width',
              'margin',
              'padding',
              'margin2',
              'padding2',
              'mianAlignment',
              'crossAlignment',
            ],
          },
          data: {
            type: 'object',
            title: '数据',
            isFixed: true,
            properties: {
              field_2: {
                type: 'sohu-source',
                title: '组件动态数据',
                description: '',
                isContainer: false,
                properties: {
                  mainConfig: {
                    type: 'object',
                    title: '主要配置',
                    description: '',
                    isContainer: false,
                    properties: {
                      type: {
                        type: 'select',
                        title: '数据来源',
                        isConditionProp: true,
                        options: [
                          {
                            label: '模板直接配置',
                            value: 'RuntimeDataSelfDefine',
                          },
                          {
                            label: 'mp后台配置',
                            value: 'ContentStaticConfig',
                          },
                          {
                            label: '请求当前页面数据',
                            value: 'RuntimeDataSelfContent',
                          },
                          {
                            label: '资源中心配置',
                            value: 'ResourceCenter',
                          },
                        ],
                        default: 'ContentStaticConfig',
                        description: '',
                      },
                      description: {
                        title: '数据源名称',
                        type: 'input',
                        default: '',
                        description: '',
                        placeholder: '',
                        onShow: 'type === "ContentStaticConfig"',
                      },
                      dataType: {
                        type: 'radio',
                        title: '请求方式',
                        options: [
                          {
                            label: '批量请求',
                            value: 'FROMCIS',
                          },
                          {
                            label: '组件内部请求',
                            value: 'FROMCOMPCIS',
                          },
                          {
                            label: '不请求',
                            value: 'false',
                          },
                        ],
                        description: '',
                      },
                      CONTENTID: {
                        title: '数据源ID',
                        type: 'input',
                        default: '',
                        description: '',
                        placeholder: '',
                        onShow: 'type === "RuntimeDataSelfDefine"',
                      },
                      CONTENTTYPE: {
                        type: 'select',
                        title: '数据源类型',
                        options: [
                          {
                            label: 'channle',
                            value: 'channle',
                          },
                          {
                            label: 'topic',
                            value: 'topic',
                          },
                          {
                            label: 'block',
                            value: 'block',
                          },
                        ],
                        description: '',
                        onShow: 'type === "RuntimeDataSelfDefine"',
                      },
                    },
                    propertyOrder: [
                      'type',
                      'description',
                      'dataType',
                      'CONTENTID',
                      'CONTENTTYPE',
                    ],
                    showCodeViewBtn: false,
                  },
                  outConfig: {
                    type: 'object',
                    title: '出流配置',
                    description: '',
                    isContainer: false,
                    properties: {
                      PRO: {
                        type: 'select',
                        title: '内容类型',
                        options: [
                          {
                            label: '置顶+加精',
                            value: '4',
                          },
                          {
                            label: '长效置顶',
                            value: '5',
                          },
                        ],
                        description: '',
                      },
                      FEEDTYPE: {
                        type: 'select',
                        title: '排序类型',
                        options: [
                          {
                            label: '综合',
                            value: 'XTOPIC_SYNTHETICAL',
                          },
                          {
                            label: '最新',
                            value: 'XTOPIC_LATEST',
                          },
                          {
                            label: '相关',
                            value: 'XTOPIC_RELATED',
                          },
                        ],
                        description: '',
                      },
                      VIEW: {
                        type: 'select',
                        title: '数据裁剪',
                        options: [
                          {
                            label: '相关推荐模式',
                            value: 'articleFeedMode',
                          },
                          {
                            label: '文字链裁剪方式',
                            value: 'textMode',
                          },
                          {
                            label: '短内容摘录方式',
                            value: 'excerptMode',
                          },
                          {
                            label: '互动（点赞/评论）裁剪方式',
                            value: 'interactMode',
                          },
                          {
                            label: '评论文字链裁剪方式',
                            value: 'commentTextMode',
                          },
                          {
                            label: '摘录方式（无点赞）',
                            value: 'excerptCommentMode',
                          },
                          {
                            label: '无限流卡片模式',
                            value: 'dynamicFeedMode',
                          },
                          {
                            label: '时间线模式',
                            value: 'timeLineMode',
                          },
                          {
                            label: '复合内容流模式',
                            value: 'multiFeedMode',
                          },
                          {
                            label: '搜狐号推荐模式',
                            value: 'recommendFeedMode',
                          },
                          {
                            label: '作者页内容流模式',
                            value: 'operateFeedMode',
                          },
                          {
                            label: '标签内容流模式',
                            value: 'tagsFeedMode',
                          },
                          {
                            label: '评论链裁剪方式',
                            value: 'commentMode',
                          },
                          {
                            label: '标签摘录方式',
                            value: 'excerptTagsMode',
                          },
                          {
                            label: '内容流模式',
                            value: 'feedMode',
                          },
                        ],
                        description: '',
                      },
                      CONTENTCONTEXT: {
                        type: 'select',
                        title: 'mKey参数',
                        options: [
                          {
                            label: '作者ID+栏目ID',
                            value: 'authorColumnId_${#authorColumnId}',
                          },
                          {
                            label: '账号ID',
                            value: 'accountId_${#contentData_account_id}',
                          },
                          {
                            label: 'mkeyID',
                            value: 'mid_${#mkeyConst_mid}',
                          },
                          {
                            label: 'mkey名称',
                            value: 'mname_${#mkeyConst_mname}',
                          },
                          {
                            label: '城市Code码',
                            value: 'cityCode_${#cityInfo_cityCode}',
                          },
                          {
                            label: '城市名称',
                            value: 'cityName_${#cityInfo_cityName}',
                          },
                          {
                            label: '焦点城市Code码',
                            value: 'focusCityCode_${#focusCityInfo_cityCode}',
                          },
                        ],
                        description: '',
                      },
                      CONTENTPARAMS: {
                        title: '动态参数',
                        type: 'json',
                        default: '{}',
                        description: '请填写JSON格式的参数',
                        placeholder: '',
                      },
                    },
                    propertyOrder: [
                      'PRO',
                      'FEEDTYPE',
                      'VIEW',
                      'CONTENTCONTEXT',
                      'CONTENTPARAMS',
                    ],
                    showCodeViewBtn: false,
                  },
                  otherConfig: {
                    type: 'object',
                    title: '选配内容',
                    description: '',
                    isContainer: false,
                    properties: {
                      SIZE: {
                        type: 'number',
                        title: '容量',
                        default: 1,
                        minimum: 0,
                        maximum: 1000,
                        description: '',
                      },
                      TITLE: {
                        title: '标题',
                        type: 'input',
                        default: '',
                        description: '',
                        placeholder: '',
                      },
                      CODE: {
                        title: 'Code参数',
                        type: 'input',
                        default: '',
                        description: '',
                        placeholder: '',
                      },
                      URL: {
                        type: 'url',
                        title: '跳转链接',
                        default: '',
                        description: '',
                        placeholder: '',
                      },
                    },
                    propertyOrder: ['SIZE', 'TITLE', 'URL', 'CODE'],
                    showCodeViewBtn: false,
                  },
                  adConfig: {
                    type: 'object',
                    title: '广告配置',
                    description: '',
                    properties: {
                      type: {
                        type: 'select',
                        title: '数据源类型',
                        isConditionProp: true,
                        options: [
                          {
                            label: '模板直接设置',
                            value: 'DevDefaults',
                          },
                          {
                            label: '资源中心配置',
                            value: 'ResourceCenter',
                          },
                        ],
                        description: '',
                      },
                      value: {
                        type: 'object',
                        title: '广告规则',
                        description: '',
                        onShow: 'type === "DevDefaults"',
                        properties: {
                          id: {
                            title: '广告ID',
                            type: 'number',
                            default: '',
                            description: '',
                            placeholder: '',
                          },
                          rule: {
                            type: 'radio',
                            title: '规则类型',
                            isConditionProp: true,
                            options: [
                              {
                                label: '固定位置',
                                value: 1,
                              },
                              {
                                label: '隔几出几',
                                value: 2,
                              },
                              {
                                label: '固定位置隔几出几',
                                value: 3,
                              },
                            ],
                            default: 1,
                            description: '',
                          },
                          fixArray: {
                            type: 'select',
                            title: '固定位置',
                            default: [1],
                            description: '',
                            onShow: 'rule === 1 || rule === 3',
                            multiple: true,
                            options: [
                              {
                                label: '1',
                                value: 1,
                              },
                              {
                                label: '2',
                                value: 2,
                              },
                              {
                                label: '3',
                                value: 3,
                              },
                              {
                                label: '4',
                                value: 4,
                              },
                              {
                                label: '5',
                                value: 5,
                              },
                              {
                                label: '6',
                                value: 6,
                              },
                              {
                                label: '7',
                                value: 7,
                              },
                              {
                                label: '8',
                                value: 8,
                              },
                              {
                                label: '9',
                                value: 9,
                              },
                              {
                                label: '10',
                                value: 10,
                              },
                              {
                                label: '11',
                                value: 11,
                              },
                              {
                                label: '12',
                                value: 12,
                              },
                              {
                                label: '13',
                                value: 13,
                              },
                              {
                                label: '14',
                                value: 14,
                              },
                              {
                                label: '15',
                                value: 15,
                              },
                              {
                                label: '16',
                                value: 16,
                              },
                              {
                                label: '17',
                                value: 17,
                              },
                              {
                                label: '18',
                                value: 18,
                              },
                              {
                                label: '19',
                                value: 19,
                              },
                              {
                                label: '20',
                                value: 20,
                              },
                              {
                                label: '21',
                                value: 21,
                              },
                              {
                                label: '22',
                                value: 22,
                              },
                              {
                                label: '23',
                                value: 23,
                              },
                              {
                                label: '24',
                                value: 24,
                              },
                              {
                                label: '25',
                                value: 25,
                              },
                              {
                                label: '26',
                                value: 26,
                              },
                              {
                                label: '27',
                                value: 27,
                              },
                              {
                                label: '28',
                                value: 28,
                              },
                              {
                                label: '29',
                                value: 29,
                              },
                              {
                                label: '30',
                                value: 30,
                              },
                              {
                                label: '31',
                                value: 31,
                              },
                              {
                                label: '32',
                                value: 32,
                              },
                              {
                                label: '33',
                                value: 33,
                              },
                              {
                                label: '34',
                                value: 34,
                              },
                              {
                                label: '35',
                                value: 35,
                              },
                              {
                                label: '36',
                                value: 36,
                              },
                              {
                                label: '37',
                                value: 37,
                              },
                              {
                                label: '38',
                                value: 38,
                              },
                              {
                                label: '39',
                                value: 39,
                              },
                              {
                                label: '40',
                                value: 40,
                              },
                              {
                                label: '41',
                                value: 41,
                              },
                              {
                                label: '42',
                                value: 42,
                              },
                              {
                                label: '43',
                                value: 43,
                              },
                              {
                                label: '44',
                                value: 44,
                              },
                              {
                                label: '45',
                                value: 45,
                              },
                              {
                                label: '46',
                                value: 46,
                              },
                              {
                                label: '47',
                                value: 47,
                              },
                              {
                                label: '48',
                                value: 48,
                              },
                              {
                                label: '49',
                                value: 49,
                              },
                              {
                                label: '50',
                                value: 50,
                              },
                            ],
                          },
                          begin: {
                            type: 'number',
                            title: '开始位置',
                            default: 1,
                            minimum: '1',
                            maximum: '50',
                            description: '',
                            onShow: 'rule === 2 || rule === 3',
                          },
                          turn: {
                            type: 'number',
                            title: '间隔/隔',
                            default: 1,
                            minimum: '1',
                            maximum: '50',
                            description: '',
                            onShow: 'rule === 2 || rule === 3',
                          },
                          number: {
                            type: 'number',
                            title: '间隔/出',
                            default: 1,
                            minimum: '1',
                            maximum: '50',
                            description: '',
                            onShow: 'rule === 2 || rule === 3',
                          },
                          mergeType: {
                            type: 'radio',
                            title: '插入规则',
                            options: [
                              {
                                label: '覆盖',
                                value: 0,
                              },
                              {
                                label: '插入',
                                value: 1,
                              },
                            ],
                            default: 0,
                            description: '',
                          },
                        },
                        propertyOrder: [
                          'id',
                          'rule',
                          'fixArray',
                          'begin',
                          'turn',
                          'number',
                          'mergeType',
                        ],
                      },
                      range: {
                        type: 'array',
                        title: '广告规则列表',
                        description: '',
                        onShow: 'type === "ResourceCenter"',
                        items: {
                          type: 'object',
                          title: '数组项',
                          description: '',
                          properties: {
                            rule: {
                              type: 'radio',
                              title: '规则类型',
                              isConditionProp: true,
                              options: [
                                {
                                  label: '固定位置',
                                  value: 1,
                                },
                                {
                                  label: '隔几出几',
                                  value: 2,
                                },
                                {
                                  label: '固定位置隔几出几',
                                  value: 3,
                                },
                              ],
                              default: 1,
                              description: '',
                            },
                            fixArray: {
                              type: 'select',
                              title: '固定位置',
                              default: [1],
                              description: '',
                              onShow: 'rule === 1 || rule === 3',
                              multiple: true,
                              options: [
                                {
                                  label: '1',
                                  value: 1,
                                },
                                {
                                  label: '2',
                                  value: 2,
                                },
                                {
                                  label: '3',
                                  value: 3,
                                },
                                {
                                  label: '4',
                                  value: 4,
                                },
                                {
                                  label: '5',
                                  value: 5,
                                },
                                {
                                  label: '6',
                                  value: 6,
                                },
                                {
                                  label: '7',
                                  value: 7,
                                },
                                {
                                  label: '8',
                                  value: 8,
                                },
                                {
                                  label: '9',
                                  value: 9,
                                },
                                {
                                  label: '10',
                                  value: 10,
                                },
                                {
                                  label: '11',
                                  value: 11,
                                },
                                {
                                  label: '12',
                                  value: 12,
                                },
                                {
                                  label: '13',
                                  value: 13,
                                },
                                {
                                  label: '14',
                                  value: 14,
                                },
                                {
                                  label: '15',
                                  value: 15,
                                },
                                {
                                  label: '16',
                                  value: 16,
                                },
                                {
                                  label: '17',
                                  value: 17,
                                },
                                {
                                  label: '18',
                                  value: 18,
                                },
                                {
                                  label: '19',
                                  value: 19,
                                },
                                {
                                  label: '20',
                                  value: 20,
                                },
                                {
                                  label: '21',
                                  value: 21,
                                },
                                {
                                  label: '22',
                                  value: 22,
                                },
                                {
                                  label: '23',
                                  value: 23,
                                },
                                {
                                  label: '24',
                                  value: 24,
                                },
                                {
                                  label: '25',
                                  value: 25,
                                },
                                {
                                  label: '26',
                                  value: 26,
                                },
                                {
                                  label: '27',
                                  value: 27,
                                },
                                {
                                  label: '28',
                                  value: 28,
                                },
                                {
                                  label: '29',
                                  value: 29,
                                },
                                {
                                  label: '30',
                                  value: 30,
                                },
                                {
                                  label: '31',
                                  value: 31,
                                },
                                {
                                  label: '32',
                                  value: 32,
                                },
                                {
                                  label: '33',
                                  value: 33,
                                },
                                {
                                  label: '34',
                                  value: 34,
                                },
                                {
                                  label: '35',
                                  value: 35,
                                },
                                {
                                  label: '36',
                                  value: 36,
                                },
                                {
                                  label: '37',
                                  value: 37,
                                },
                                {
                                  label: '38',
                                  value: 38,
                                },
                                {
                                  label: '39',
                                  value: 39,
                                },
                                {
                                  label: '40',
                                  value: 40,
                                },
                                {
                                  label: '41',
                                  value: 41,
                                },
                                {
                                  label: '42',
                                  value: 42,
                                },
                                {
                                  label: '43',
                                  value: 43,
                                },
                                {
                                  label: '44',
                                  value: 44,
                                },
                                {
                                  label: '45',
                                  value: 45,
                                },
                                {
                                  label: '46',
                                  value: 46,
                                },
                                {
                                  label: '47',
                                  value: 47,
                                },
                                {
                                  label: '48',
                                  value: 48,
                                },
                                {
                                  label: '49',
                                  value: 49,
                                },
                                {
                                  label: '50',
                                  value: 50,
                                },
                              ],
                            },
                            begin: {
                              type: 'number',
                              title: '开始位置',
                              default: 1,
                              minimum: '1',
                              maximum: '50',
                              description: '',
                              onShow: 'rule === 2 || rule === 3',
                            },
                            turn: {
                              type: 'number',
                              title: '间隔/隔',
                              default: 1,
                              minimum: '1',
                              maximum: '50',
                              description: '',
                              onShow: 'rule === 2 || rule === 3',
                            },
                            number: {
                              type: 'number',
                              title: '间隔/出',
                              default: 1,
                              minimum: '1',
                              maximum: '50',
                              description: '',
                              onShow: 'rule === 2 || rule === 3',
                            },
                            mergeType: {
                              type: 'radio',
                              title: '插入规则',
                              options: [
                                {
                                  label: '覆盖',
                                  value: 0,
                                },
                                {
                                  label: '插入',
                                  value: 1,
                                },
                              ],
                              default: 0,
                              description: '',
                            },
                          },
                          propertyOrder: [
                            'rule',
                            'fixArray',
                            'begin',
                            'turn',
                            'number',
                            'mergeType',
                          ],
                        },
                      },
                    },
                    propertyOrder: ['type', 'value', 'range'],
                  },
                },
                propertyOrder: [
                  'mainConfig',
                  'otherConfig',
                  'outConfig',
                  'adConfig',
                ],
                showCodeViewBtn: false,
              },
            },
            propertyOrder: ['field_2'],
          },
          event: {
            type: 'object',
            title: '事件',
            isFixed: true,
            properties: {
              sohuEvent: {
                type: 'sohu-event',
                title: 'sohu组件事件',
                showCodeViewBtn: false,
                isContainer: false,
                properties: {
                  globalEventMap: {
                    type: 'object',
                    title: '全局事件Map',
                    description: '',
                    properties: {},
                    propertyOrder: [],
                    showCodeViewBtn: false,
                  },
                  event: {
                    type: 'array',
                    title: '监听事件',
                    description: '当前组件监听事件列表',
                    default: [],
                    items: {
                      type: 'object',
                      title: '数组项',
                      description: '',
                      properties: {
                        name: {
                          type: 'input',
                          title: '事件',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        code: {
                          title: '事件code',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        listenName: {
                          title: '事件名称',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                        desc: {
                          title: '事件描述',
                          type: 'input',
                          default: '',
                          description: '',
                          placeholder: '',
                        },
                      },
                      propertyOrder: ['name', 'code', 'listenName', 'desc'],
                    },
                    showCodeViewBtn: false,
                  },
                },
                propertyOrder: ['globalEventMap', 'event'],
              },
            },
            propertyOrder: ['sohuEvent'],
          },
        },
        propertyOrder: ['props', 'data', 'style', 'event'],
        lastUpdateTime: '2024-12-28T15:50:23.659Z',
      },
      jsonSchema2: {
        type: 'object',
        name: 'circle',
        title: 'circle 圆环图',
        'ui-type': 'ui-materiel',
        'ui-name': 'AntV',
        'ui-framework': 'AntV',
        properties: {
          props: {
            type: 'object',
            title: '属性设置',
            isFixed: true,
            properties: {
              legendAlign: {
                title: '图例位置',
                type: 'select',
                options: [
                  {
                    label: '上',
                    value: 'top',
                  },
                  {
                    label: '右',
                    value: 'right',
                  },
                  {
                    label: '下',
                    value: 'bottom',
                  },
                  {
                    label: '左',
                    value: 'left',
                  },
                ],
                description: '',
                default: 'top',
              },
            },
            propertyOrder: ['legendAlign'],
          },
          style: {
            type: 'object',
            title: '外观设置',
            isFixed: true,
            properties: {
              margin: {
                type: 'box-style',
                title: '外边距',
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    default: '15px',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              width: {
                type: 'quantity',
                title: '宽',
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    default: 220,
                    minimum: 0,
                    maximum: '10000',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              height: {
                type: 'quantity',
                title: '高',
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    default: 220,
                    minimum: 0,
                    maximum: '10000',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
              padding: {
                type: 'box-style',
                title: '内边距',
                properties: {
                  unit: {
                    type: 'string',
                    title: '单位数值',
                    default: '15px',
                    description: '',
                  },
                  quantity: {
                    type: 'select',
                    default: 'px',
                    options: [
                      {
                        label: 'px',
                        value: 'px',
                      },
                      {
                        label: 'rem',
                        value: 'rem',
                      },
                      {
                        label: 'em',
                        value: 'em',
                      },
                      {
                        label: '%',
                        value: '%',
                      },
                    ],
                    title: '单位类型',
                  },
                },
                propertyOrder: ['unit', 'quantity'],
              },
            },
            propertyOrder: ['width', 'height', 'margin', 'padding'],
          },
          data: {
            type: 'object',
            title: '数据设置',
            isFixed: true,
            properties: {
              chartDataList: {
                type: 'dynamic-data',
                title: '图表数据',
                properties: {
                  type: {
                    default: 'local',
                    type: 'select',
                    options: [
                      {
                        label: '本地数据',
                        value: 'local',
                      },
                      {
                        label: '接口数据',
                        value: 'remote',
                      },
                    ],
                    title: '数据类型',
                  },
                  config: {
                    type: 'object',
                    title: '接口配置',
                    description: '用于存放接口的配置数据(url、请求参数等)',
                    isRequired: true,
                    properties: {
                      dataName: {
                        default: 'local',
                        type: 'select',
                        options: [
                          {
                            label: '本地数据',
                            value: 'local',
                          },
                          {
                            label: '接口数据',
                            value: 'remote',
                          },
                        ],
                        title: '数据类型',
                      },
                      body: {
                        type: 'object',
                        title: '请求参数配置',
                        description: '用于配置当前接口的请求参数数值',
                        isRequired: true,
                        properties: {},
                        propertyOrder: [],
                      },
                      filter: {
                        title: '过滤器函数体',
                        type: 'codearea',
                        default: 'return data;',
                        description: '用于定义过滤接口数据',
                        isRequired: true,
                      },
                    },
                    propertyOrder: ['dataName', 'body', 'filter'],
                  },
                  data: {
                    title: '数据内容',
                    type: 'json',
                    default: '{}',
                    description: '用于存放DynamicData的数据内容',
                    isRequired: true,
                  },
                  localFilter: {
                    title: '过滤器',
                    type: 'codearea',
                    default: 'return data;',
                    description: '用于定义过滤本地数据',
                    isRequired: true,
                  },
                },
                propertyOrder: ['type', 'config', 'data', 'localFilter'],
              },
              xAxis: {
                title: 'x轴字段',
                type: 'input',
                default: 'x',
                description: '',
                placeholder: '',
              },
              yAxis: {
                title: 'y轴字段',
                type: 'input',
                default: 'y',
                description: '',
                placeholder: '',
              },
              legend: {
                title: '图例字段',
                type: 'input',
                default: 'type',
                description: '',
                placeholder: '',
              },
            },
            propertyOrder: ['chartDataList', 'xAxis', 'yAxis', 'legend'],
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
        lastUpdateTime: '2021-03-29T02:08:03.551Z',
      },
      jsonData: {
        event: {
          sohuEvent: {
            event: [
              {
                name: 'changeTab',
                listenName: 'TPLTabMenu_1720691304950_tabChange',
              },
            ],
            globalEventMap: {
              TPLTabMenu_1720691304950_tabChange: 'TabMenu菜单切换',
              TPLTabMenu_1720691304952_tabChange: 'TabMenu菜单切换2',
              CompTest1_1720691304953_click: '自定义点击事件',
            },
          },
        },
      },
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
