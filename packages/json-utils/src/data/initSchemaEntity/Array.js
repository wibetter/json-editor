/* array类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  items：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
export const initArrayData = {
  type: 'array',
  title: '数组Array',
  description: '', // 字段项的说明和描述
  default: [],
  items: {
    type: 'object',
    title: '数组项',
    description: '', // 字段项的说明和描述
    properties: {
      name: {
        type: 'input',
        title: '名字',
        default: '', // 默认值
        description: '', // 字段项的说明和描述
        placeholder: '', // 输入提示
      },
    },
    propertyOrder: ['name'],
  },
};
