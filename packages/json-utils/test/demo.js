const { keyRoute2indexRoute } = require('../dist/index.js');
const jsonSchema = {
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
        backtitle: {
          type: 'string',
          description: '图标title',
          format: 'input',
          title: '图标title',
        },
        bottomIconUrl: {
          type: 'string',
          format: 'url',
          description: '底部图标',
          title: '底部图标',
        },
        backIcon: {
          type: 'string',
          format: 'url',
          description: '背景图标',
          title: '背景图标',
        },
        backImageUrl: {
          type: 'string',
          format: 'url',
          description: '背景图',
          title: '背景图',
        },
      },
      required: [
        'mainTitle',
        'subTitle',
        'backtitle',
        'bottomIconUrl',
        'backIcon',
        'backImageUrl',
      ],
      title: '功能设置',
      propertyOrder: [
        'mainTitle',
        'subTitle',
        'backtitle',
        'bottomIconUrl',
        'backIcon',
        'backImageUrl',
      ],
    },
    style: {
      type: 'object',
      format: 'style',
      description: '样式设置',
      readOnly: true,
      properties: {
        isShowSubTitle: {
          type: 'string',
          format: 'radio',
          description: '展示副标题',
          title: '展示副标题',
          items: {
            type: 'string',
            enum: ['show', 'hide'],
            enumextra: ['展示', '隐藏'],
            format: 'string',
          },
        },
        wrapPadding: {
          type: 'object',
          format: 'quantity',
          title: '单位计量',
          properties: {
            unit: {
              type: 'number',
              title: '单位数值',
              format: 'number',
              default: 50,
              minimum: 0,
              maximum: 1000,
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
          required: ['unit', 'quantity'],
          propertyOrder: ['unit', 'quantity'],
        },
        backColor: {
          type: 'string',
          format: 'color',
          description: '背景色',
          title: '背景色',
        },
        titlePosition: {
          type: 'array',
          format: 'checkboxes',
          items: {
            type: 'string',
            enum: ['left', 'center', 'right'],
            enumextra: ['居左', '居中', '居右'],
            format: 'string',
          },
          uniqueItems: true,
          description: '标题位置',
          title: '标题位置',
        },
      },
      required: ['isShowSubTitle', 'wrapPadding', 'backColor', 'titlePosition'],
      title: '样式设置',
      propertyOrder: [
        'isShowSubTitle',
        'wrapPadding',
        'backColor',
        'titlePosition',
      ],
    },
    data: {
      type: 'object',
      format: 'data',
      description: '数据设置',
      readOnly: true,
      properties: {
        event: {
          type: 'object',
          format: 'event',
          title: '事件',
          properties: {
            type: {
              type: 'select',
              default: 'emit',
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
              title: '事件类型',
            },
            trigger: {
              type: 'string',
              format: 'input',
              default: 'eventName',
              title: '触发事件',
              description: '用于输入触发事件的名称',
              placeholder: '请输入触发事件的名称',
            },
            eventData: {
              type: 'string',
              title: '事件数据',
              format: 'json',
              default: '{}',
              description: '传递给触发事件的数据对象',
            },
          },
          required: ['type', 'trigger', 'eventData'],
          propertyOrder: ['type', 'trigger', 'eventData'],
        },
        getData: {
          type: 'object',
          format: 'datasource',
          title: '数据源',
          properties: {
            type: {
              type: 'select',
              default: 'local',
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
              title: '数据源类型',
            },
            data: {
              type: 'string',
              title: '本地json数据',
              placeholder: '请输入静态json数据',
              format: 'json',
              default: 'local',
              description: '用于设置本地的静态json数据',
              isRequired: true,
            },
            filter: {
              type: 'string',
              title: '过滤器',
              format: 'codearea',
              default: 'return data;',
              description: '用于定义过滤当前数据的函数',
              isRequired: true,
            },
          },
          required: ['type', 'data', 'filter'],
          propertyOrder: ['type', 'data', 'filter'],
        },
      },
      required: ['event', 'getData'],
      title: '数据设置',
      propertyOrder: ['event', 'getData'],
    },
    widgets: {
      type: 'object',
      format: 'widgets',
      title: '嵌套组件',
      properties: {
        widgetUUID: {
          type: 'string',
          title: '嵌套组件UUID',
          format: 'input',
          default: 'box-widget-e33b3258-6d73-4c07-a6e1-4f67457dafd3',
          description: '唯一标识，用于标记当前可嵌套组件',
          placeholder: '',
        },
        embedWidgetA: {
          type: 'string',
          title: '内嵌组件A',
          format: 'widget',
          default: '{}',
          description: '用于存放内嵌组件的渲染数据',
        },
        embedWidgetB: {
          type: 'string',
          title: '内嵌组件B',
          format: 'widget',
          default: '{}',
          description: '用于存放内嵌组件的渲染数据',
        },
      },
      required: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
      propertyOrder: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
    },
  },
  required: ['func', 'style', 'data', 'widgets'],
  format: 'object',
  propertyOrder: ['func', 'style', 'data', 'widgets'],
  lastUpdateTime: '2020-10-13T09:19:20.980Z',
};
const indexRoute = keyRoute2indexRoute('func-backtitle', jsonSchema);
console.log(indexRoute);
