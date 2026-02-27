import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import SelectSchema from '$schemaRenderer/SelectSchema/index';

/**
 * radio 元素描述文件
 * 单选类型
 */
const radioDescriptor: SchemaDescriptor = {
  type: 'radio',
  label: '单选',
  isContainer: false,

  defaultSchema: {
    type: 'radio',
    title: '单选',
    options: [
      { label: '选项a', value: 'a' },
      { label: '选项b', value: 'b' },
      { label: '选项c', value: 'c' },
    ],
    default: '',
    description: '',
  },

  renderer: SelectSchema,

  propsSchema: buildPropsSchema({
    isConditionProp: EDITABLE_PROPS.isConditionProp,
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    defaultActiveFirstOption: {
      type: 'boolean',
      title: '选中第一项',
      description: '是否默认高亮第一个选项',
    },
    default: {
      type: 'input',
      title: '默认值',
      placeholder: '请输入默认选中项的 value 值',
    },
  }),
};

schemaRegistry.register(radioDescriptor);

export default radioDescriptor;
