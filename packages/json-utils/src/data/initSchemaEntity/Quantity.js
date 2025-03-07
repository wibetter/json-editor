/** quantity字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initQuantityData = {
  type: 'quantity',
  title: '单位计量',
  isContainer: false,
  properties: {
    unit: {
      type: 'number',
      title: '单位数值',
      default: 50, // 默认值
      minimum: 0, // 在高级设置中配置
      maximum: 1000, // 在高级设置中配置
      description: '', // 字段项的说明和描述
    },
    quantity: {
      type: 'select', // 选择列表
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
};
