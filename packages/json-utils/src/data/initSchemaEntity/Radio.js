/* radio类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  options：用于设置选择项
 *  isRequired：是否是必填项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
export const initRadioData = {
  type: 'radio',
  title: '单选',
  options: [
    {
      label: '选项a',
      value: 'a',
    },
    {
      label: '选项b',
      value: 'b',
    },
    {
      label: '选项c',
      value: 'c',
    },
  ],
  default: 'a',
  description: '',
  isRequired: false,
  readOnly: false,
};
