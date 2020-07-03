/* input类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
export const initInputData = {
  type: 'string',
  title: '单文本框',
  format: 'input',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};
