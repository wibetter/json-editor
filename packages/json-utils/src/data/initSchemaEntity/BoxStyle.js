/** box-style字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initBoxStyleData = {
  type: 'object',
  format: 'box-style',
  title: '盒子模型',
  isRequired: false,
  readOnly: false,
  properties: {
    unit: {
      type: 'string',
      title: '单位数值',
      format: 'string',
      default: '0', // 默认值为'0'：'0px 0px 0px 0px'；为'5px': '5px 5px 5px 5px'
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
  required: ['unit', 'quantity'],
  propertyOrder: ['unit', 'quantity'],
};
