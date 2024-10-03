/** quantity字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initQuantityData = {
  type: 'object',
  format: 'quantity',
  title: '单位计量',
  isRequired: false,
  readOnly: false,
  properties: {
    unit: {
      type: 'number',
      title: '单位数值',
      format: 'number',
      default: 50, // 默认值
      minimum: 0, // 在高级设置中配置
      maximum: 1000, // 在高级设置中配置
      description: '', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
    quantity: {
      type: 'string',
      format: 'typeSelect', // 选择列表
      default: 'px',
      enum: ['px', 'rem', 'em', '%'],
      enumextra: ['px', 'rem', 'em', '%'],
      title: '单位类型',
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['unit', 'quantity'],
};
