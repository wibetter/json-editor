import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import SelectSchema from '$schemaRenderer/SelectSchema/index';

/**
 * checkboxes 元素描述文件
 * 多选框类型
 */
const checkboxesDescriptor: SchemaDescriptor = {
  type: 'checkboxes',
  label: '多选框',
  isContainer: false,

  defaultSchema: {
    type: 'checkboxes',
    title: '多选',
    options: [
      { label: '选项a', value: 'a' },
      { label: '选项b', value: 'b' },
      { label: '选项c', value: 'c' },
    ],
    default: ['a'],
    description: '',
  },

  renderer: SelectSchema,

  propsSchema: buildPropsSchema({
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    default: {
      type: 'json',
      title: '默认值',
      description: '默认选中的选项值数组，格式为 ["value1", "value2"]',
    },
  }),
};

schemaRegistry.register(checkboxesDescriptor);

export default checkboxesDescriptor;
