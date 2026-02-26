import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * url 元素描述文件
 * URL 链接类型
 */
const urlDescriptor: SchemaDescriptor = {
  type: 'url',
  label: 'URL数值',
  isContainer: false,

  defaultSchema: {
    type: 'url',
    title: '链接地址url',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    {
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'input',
        title: '默认值',
        placeholder: '请输入默认 URL',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        placeholder: '请输入输入提示',
      },
    },
    ['isConditionProp', 'readOnly', 'isRequired', 'default', 'placeholder'],
  ),
};

schemaRegistry.register(urlDescriptor);

export default urlDescriptor;
