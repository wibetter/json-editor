import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * input-image 元素描述文件
 * 图片上传类型
 */
const inputImageDescriptor: SchemaDescriptor = {
  type: 'input-image',
  label: '图片上传',
  isContainer: false,

  defaultSchema: {
    type: 'input-image',
    title: '图片地址',
    default: '',
    description: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema({
    isConditionProp: EDITABLE_PROPS.isConditionProp,
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    default: {
      type: 'input',
      title: '默认图片URL',
      placeholder: '请输入默认图片地址',
    },
  }),
};

schemaRegistry.register(inputImageDescriptor);

export default inputImageDescriptor;
