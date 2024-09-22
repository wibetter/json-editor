/** image图片类型字段
 *  用户可以使用此组件上传图片，最后返回对应的图片资源地址
 * */
export const initIMGData = {
  type: 'string',
  title: '图片',
  format: 'image',
  default: '', // 默认值
  description: '上传图片', // 字段项的说明和描述
  imgWidth: 200, // 图片默认的宽度，单位默认px
  imgHeight: 200, // 图片默认的高度，单位默认px
  imgRatioReadOnly: true, // 图片宽高比例是否可调整
  templateId: '', // 图片模板ID，用于玲珑制图中选择使用对应的图片模板
  isRequired: false,
};
