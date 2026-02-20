import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * textarea 元素描述文件
 * 多行文本类型
 */
const textareaDescriptor: SchemaDescriptor = {
  type: 'textarea',
  label: '多行文本',
  isContainer: false,

  defaultSchema: {
    type: 'textarea',
    title: '多行文本框',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    'textarea 高级配置',
    {
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'textarea',
        title: '默认值',
        placeholder: '请输入默认值',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        placeholder: '请输入输入提示',
      },
    },
    ['readOnly', 'isRequired', 'default', 'placeholder'],
  ),
};

schemaRegistry.register(textareaDescriptor);

export default textareaDescriptor;
