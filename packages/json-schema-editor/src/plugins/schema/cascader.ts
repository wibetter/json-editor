import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * cascader 元素描述文件
 * 级联选择类型
 */
const cascaderDescriptor: SchemaDescriptor = {
  type: 'cascader',
  label: '级联选择',
  isContainer: false,

  defaultSchema: {
    type: 'cascader',
    title: '级联选择',
    options: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{ value: 'xihu', label: 'West Lake' }],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
          },
        ],
      },
    ],
    default: 'a',
    description: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    'cascader 高级配置',
    {
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      multiple: {
        type: 'boolean',
        title: '支持多选',
        description: '开启多选后，级联选择支持选择多个选项',
      },
      options: {
        type: 'json',
        title: 'options 配置',
        description: '用于添加级联选择组件的 options 数据',
      },
      default: {
        type: 'input',
        title: '默认值',
        placeholder: '请输入默认值',
      },
    },
    ['readOnly', 'isRequired', 'multiple', 'options', 'default'],
  ),
};

schemaRegistry.register(cascaderDescriptor);

export default cascaderDescriptor;
