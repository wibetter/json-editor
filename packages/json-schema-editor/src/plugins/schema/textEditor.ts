import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * text-editor 元素描述文件
 * 富文本编辑器类型
 */
const textEditorDescriptor: SchemaDescriptor = {
  type: 'text-editor',
  label: '富文本内容',
  isContainer: false,

  defaultSchema: {
    type: 'text-editor',
    title: '富文本',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    {
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'text-editor',
        title: '默认值',
        placeholder: '请输入默认富文本内容',
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

schemaRegistry.register(textEditorDescriptor);

export default textEditorDescriptor;
