/** event字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
// 旧版Event数据
export const initEventDataV1 = {
  type: 'object',
  format: 'event',
  title: '事件',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'out',
      format: 'typeSelect',
      enum: ['in', 'out'],
      enumextra: ['in', 'out'],
      title: '事件类型',
      readOnlyInJson: false,
    },
    filter: {
      type: 'string',
      format: 'textarea',
      default: 'return data;',
      title: '过滤器',
    },
  },
  propertyOrder: ['type', 'data', 'filter'],
};

/** 新版EventData
 * type: emit 的默认数据 */
export const initEventData = {
  type: 'object',
  format: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'emit',
      format: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false,
    },
    trigger: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '触发事件',
      description: '用于输入触发事件的名称',
      placeholder: '请输入触发事件的名称',
      isRequired: false,
      readOnly: false,
    },
    eventData: {
      type: 'string',
      title: '事件数据',
      format: 'json',
      default: '{}', // 默认值
      description: '传递给触发事件的数据对象', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['type', 'trigger', 'eventData'],
};

/** 新版EventData
 * type: on 的默认数据 */
export const initEventDataTypeON = {
  type: 'object',
  format: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'on',
      format: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false,
    },
    register: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '注册事件',
      description: '用于输入注册事件的名称',
      placeholder: '请输入注册事件的名称',
      isRequired: false,
      readOnly: false,
    },
    actionFunc: {
      type: 'string',
      title: '执行函数',
      format: 'codearea',
      default: '() => {}', // 默认值
      description: '', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['type', 'register', 'actionFunc'],
};
