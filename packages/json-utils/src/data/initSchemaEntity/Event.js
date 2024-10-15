/** event字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
// 旧版Event数据
export const initEventDataV1 = {
  type: 'event',
  title: '事件',
  properties: {
    type: {
      default: 'out',
      type: 'select',
      options: [
        {
          label: 'in',
          value: 'in',
        },
        {
          label: 'out',
          value: 'out',
        },
      ],
      title: '事件类型',
      readOnlyInJson: false,
    },
    filter: {
      type: 'textarea',
      default: 'return data;',
      title: '过滤器',
    },
  },
  propertyOrder: ['type', 'data', 'filter'],
};

/** 新版EventData
 * type: emit 的默认数据 */
export const initEventData = {
  type: 'event',
  title: '事件',
  properties: {
    type: {
      default: 'emit',
      type: 'select',
      options: [
        {
          label: 'on',
          value: 'on',
        },
        {
          label: 'emit',
          value: 'emit',
        },
      ],
      title: '事件类型',
    },
    trigger: {
      type: 'input',
      default: 'eventName',
      title: '触发事件',
      description: '用于输入触发事件的名称',
      placeholder: '请输入触发事件的名称',
    },
    eventData: {
      title: '事件数据',
      type: 'json',
      default: '{}', // 默认值
      description: '传递给触发事件的数据对象', // 字段项的说明和描述
    },
  },
  propertyOrder: ['type', 'trigger', 'eventData'],
};

/** 新版EventData
 * type: on 的默认数据 */
export const initEventDataTypeON = {
  type: 'event',
  title: '事件',
  properties: {
    type: {
      default: 'on',
      type: 'select',
      options: [
        {
          label: 'on',
          value: 'on',
        },
        {
          label: 'emit',
          value: 'emit',
        },
      ],
      title: '事件类型',
    },
    register: {
      type: 'input',
      default: 'eventName',
      title: '注册事件',
      description: '用于输入注册事件的名称',
      placeholder: '请输入注册事件的名称',
    },
    actionFunc: {
      title: '执行函数',
      type: 'codearea',
      default: '() => {}', // 默认值
      description: '', // 字段项的说明和描述
    },
  },
  propertyOrder: ['type', 'register', 'actionFunc'],
};
