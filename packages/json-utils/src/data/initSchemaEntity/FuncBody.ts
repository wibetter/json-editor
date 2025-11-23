/* FuncBody类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
export const initFuncBody = {
  title: '函数体',
  type: 'func-body',
  placeholder: '请直接可执行的函数体', // 输入提示
  default: 'return data;', // 默认值
  description: '用于定义函数体', // 字段项的说明和描述
};
