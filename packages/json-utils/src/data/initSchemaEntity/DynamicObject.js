/** dynamic-object: 动态对象，支持在json-editor 中动态添加属性。
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initDynamicObject = {
  type: 'dynamic-object',
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
        '目前支持的数据来源包括： 1)模版直接设置: 在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置: 选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据: 支持内容meta数据的获取，页面meta数据。 4)全局配置数据: 目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
    },
    value: {
      title: '数据值',
      type: 'input',
      default: '',
      description: '',
      placeholder: '',
      onShow: 'type === "Content" || type === "RuntimeConst"',
    },
    description: {
      title: '自定义配置名称',
      type: 'input',
      default: '主题包配置',
      description: '',
      placeholder: '',
      onShow: 'type === "ContentStaticConfig" || type === "ResourceCenter"',
    },
    attrs: {
      type: 'array',
      title: '属性列表',
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
          value: {
            title: '数值',
            typeOn:
              "type === 'image' ? 'input-image' : type === 'number' ? 'number' : 'input'",
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
        },
        propertyOrder: ['attr', 'description', 'type', 'value'],
      },
      'minimum-child': 1,
      showCodeViewBtn: false,
      onShow:
        'type === "DevDefaults" || type === "ContentStaticConfig" || type === "ResourceCenter"',
    },
  },
  propertyOrder: ['type', 'description', 'attrs', 'value'],
  showCodeViewBtn: false,
  showKey: true,
};
