import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * boolean 元素描述文件
 * 开关/布尔类型
 */
const booleanDescriptor: SchemaDescriptor = {
  type: 'boolean',
  label: 'Boolean/开关',
  isContainer: false,

  defaultSchema: {
    type: 'boolean',
    title: '布尔值',
    default: false,
    description: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    {
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'boolean',
        title: '默认值',
      },
    },
    ['isConditionProp', 'readOnly', 'isRequired', 'default'],
  ),
};

schemaRegistry.register(booleanDescriptor);

export default booleanDescriptor;
