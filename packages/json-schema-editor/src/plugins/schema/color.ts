import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * color 元素描述文件
 * 颜色选择类型
 */
const colorDescriptor: SchemaDescriptor = {
  type: 'color',
  label: '颜色数值',
  isContainer: false,

  defaultSchema: {
    type: 'color',
    title: '颜色color',
    default: '#ffffff',
    description: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema({
    isConditionProp: EDITABLE_PROPS.isConditionProp,
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    default: {
      type: 'color',
      title: '默认颜色值',
    },
  }),
};

schemaRegistry.register(colorDescriptor);

export default colorDescriptor;
