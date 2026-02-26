import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import SelectSchema from '$schemaRenderer/SelectSchema/index';

/**
 * select 元素描述文件
 * 下拉选择/多选类型
 */
const selectDescriptor: SchemaDescriptor = {
  type: 'select',
  label: '下拉选择/多选',
  isContainer: false,

  defaultSchema: {
    type: 'select',
    title: '下拉选择',
    options: [
      { label: '选项a', value: 'a' },
      { label: '选项b', value: 'b' },
      { label: '选项c', value: 'c' },
    ],
    description: '',
  },

  renderer: SelectSchema,

  propsSchema: buildPropsSchema(
    {
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      multiple: {
        type: 'boolean',
        title: '支持多选',
        description: '开启多选后，select 下拉列表支持选择多个选项',
      },
      defaultActiveFirstOption: {
        type: 'boolean',
        title: '选中第一项',
        description: '是否默认高亮第一个选项',
      },
      withLabel: {
        type: 'boolean',
        title: '附带label数值',
        description: '开启后，选中选项时，其数值会带上当前选项的 label 数值',
      },
      default: {
        type: 'input',
        title: '默认值',
        placeholder: '请输入默认选中项的 value 值',
      },
    },
    [
      'isConditionProp',
      'readOnly',
      'isRequired',
      'multiple',
      'defaultActiveFirstOption',
      'withLabel',
      'default',
    ],
  ),
};

schemaRegistry.register(selectDescriptor);

export default selectDescriptor;
