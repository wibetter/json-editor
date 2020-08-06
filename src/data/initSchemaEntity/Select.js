/* select类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  items：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
export const initSelectData = {
  type: 'array',
  title: '多选',
  format: 'select',
  items: {
    type: 'string', // 不可编辑
    enum: ['a', 'b', 'c'],
    enumextra: ['选项a', '选项b', '选项c'],
  },
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};
