/** dynamicConfig: 动态配置
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initDynamicConfig = {
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
      onShow: 'type === "ContentStaticConfig" || type === "ResourceCenter"',
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
      description: '在MP后台或资源中心配置时的交互方式，推荐使用"选择"',
      onShow: 'type === "ContentStaticConfig" || type === "ResourceCenter"',
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
  propertyOrder: ['type', 'value', 'description', 'valueType', 'range'],
  showCodeViewBtn: false,
};
