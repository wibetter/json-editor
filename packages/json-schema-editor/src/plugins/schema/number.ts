import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * number 元素描述文件
 * 数值类型
 */
const numberDescriptor: SchemaDescriptor = {
  type: 'number',
  label: 'Number数值',
  isContainer: false,

  defaultSchema: {
    type: 'number',
    title: '数量number',
    default: 1,
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    'number 高级配置',
    {
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'number',
        title: '默认值',
        placeholder: '请输入默认数值',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        placeholder: '请输入输入提示',
      },
      minimum: {
        type: 'number',
        title: '最小值',
        description: '设置最小值后，用户输入的数值必须大于当前最小值',
      },
      maximum: {
        type: 'number',
        title: '最大值',
        description: '设置最大值后，用户输入的数值必须小于当前最大值',
      },
    },
    [
      'isConditionProp',
      'readOnly',
      'isRequired',
      'default',
      'placeholder',
      'minimum',
      'maximum',
    ],
  ),
};

schemaRegistry.register(numberDescriptor);

export default numberDescriptor;
