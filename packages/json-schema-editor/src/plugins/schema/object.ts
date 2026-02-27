import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import ObjectSchema from '$schemaRenderer/ObjectSchema/index';

/**
 * object 元素描述文件
 * 对象类型（容器）
 */
const objectDescriptor: SchemaDescriptor = {
  type: 'object',
  label: '对象(Object)',
  isContainer: true,
  wrapWithPanel: true, // 是否包装在面板中

  defaultSchema: {
    type: 'object',
    title: '对象Object',
    description: '',
    properties: {
      a: {
        type: 'input',
        title: '单文本框',
        default: '',
        description: '',
        placeholder: '',
      },
    },
    propertyOrder: ['a'],
  },

  propsSchema: buildPropsSchema({
    showCodeViewBtn: {
      type: 'boolean',
      title: '源码模式',
      description: '用于控制是否显示源码模式切换按钮，默认显示',
    },
  }),

  renderer: ObjectSchema,
};

schemaRegistry.register(objectDescriptor);

export default objectDescriptor;
