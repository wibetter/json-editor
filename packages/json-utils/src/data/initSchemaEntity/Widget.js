/* widget类型字段
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
export const initWidgetData = {
  type: 'string',
  title: '内嵌组件数据',
  format: 'widget',
  default: '{}', // 默认值
  description: '用于存放内嵌组件的渲染相关数据', // 字段项的说明和描述
  isRequired: false,
  readOnly: true, // 默认只读
};
