/* number类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number），字段值的数据类型
 *  title：字段项的label值
 *  format：用于标识字段项的UI展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  minimum：最小值
 *  maximum：最大值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
export const initNumberData = {
  type: 'number',
  title: '数值',
  format: 'number',
  default: 50, // 默认值
  minimum: 0, // 在高级设置中配置
  maximum: 1000, // 在高级设置中配置
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};
