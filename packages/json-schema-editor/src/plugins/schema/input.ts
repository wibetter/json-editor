import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/**
 * input 元素描述文件
 * 单行文本输入类型
 */
const inputDescriptor: SchemaDescriptor = {
  type: 'input',
  label: '字符串/单行文本',
  isContainer: false,

  defaultSchema: {
    type: 'input',
    title: '单文本框',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,

  propsSchema: buildPropsSchema(
    {
      ...EDITABLE_PROPS,
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      default: {
        type: 'input',
        title: '默认值',
        placeholder: '请输入默认值',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        description: '输入提示内容将作为输入区域的提示信息展示给用户',
        placeholder: '请输入输入提示',
      },
      autoComplete: {
        type: 'boolean',
        title: '开启可选项',
        description: '开启后支持添加可选项，并支持 autoComplete',
      },
      options: {
        type: 'json',
        title: '可选项',
        description: '开启可选项后，可在此设置可选数据列表（数组格式）',
        onShow: 'autoComplete === true',
      },
    },
    [
      'isConditionProp',
      'readOnly',
      'isRequired',
      'default',
      'placeholder',
      'autoComplete',
      'options',
    ],
  ),
};

schemaRegistry.register(inputDescriptor);

export default inputDescriptor;
