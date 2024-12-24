/* input类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
export const initInputImageData = {
  title: '图片地址',
  type: 'input-image',
  description: '', // 字段项的说明和描述
  accept: '.jpeg,.jpg,.png',
  multiple: true,
};
