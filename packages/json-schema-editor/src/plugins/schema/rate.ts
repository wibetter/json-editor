import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * input-rate 元素描述文件
 * 评分类型，基于 antd Rate 组件
 */
const rateDescriptor: SchemaDescriptor = {
  type: 'input-rate',
  label: '评分',
  isContainer: false,

  defaultSchema: {
    type: 'input-rate',
    title: '评分',
    default: 0,
    description: '',
    count: 5,
    allowHalf: false,
    allowClear: true,
    size: 'default',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema({
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    default: {
      type: 'number',
      title: '默认值',
      description: '评分的默认数值',
      minimum: 0,
    },
    count: {
      type: 'number',
      title: 'star 总数',
      description: '评分 star 的总数量，默认为 5',
      minimum: 1,
    },
    allowHalf: {
      type: 'boolean',
      title: '允许半选',
      description: '是否允许选择半星',
    },
    allowClear: {
      type: 'boolean',
      title: '允许清除',
      description: '是否允许再次点击后清除评分',
    },
    size: {
      type: 'button-group-select',
      title: '尺寸',
      description: '评分组件的尺寸大小',
      options: [
        { label: '小', value: 'small' },
        { label: '默认', value: 'default' },
        { label: '大', value: 'large' },
      ],
      default: 'default',
    },
    tooltips: {
      type: 'input',
      title: '提示文案',
      description:
        '自定义每项的提示信息，多个值用英文逗号分隔，如：差,较差,一般,良好,优秀',
      placeholder: '差,较差,一般,良好,优秀',
    },
  }),
};

schemaRegistry.register(rateDescriptor);

export default rateDescriptor;
