/** Object字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initObjectData = {
  type: 'object',
  title: '对象Object',
  description: '', // 字段项的说明和描述
  properties: {
    a: {
      type: 'input',
      title: '单文本框',
      default: '', // 默认值
      description: '', // 字段项的说明和描述
      placeholder: '', // 输入提示
    },
  },
  propertyOrder: ['a'],
};
