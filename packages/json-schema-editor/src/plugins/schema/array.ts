import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema } from '$core/schema';
import ArraySchema from '$schemaRenderer/ArraySchema/index';

/**
 * array 元素描述文件
 * 数组类型（容器）
 */
const arrayDescriptor: SchemaDescriptor = {
  type: 'array',
  label: '数组(Array)',
  isContainer: false,

  defaultSchema: {
    type: 'array',
    title: '数组Array',
    description: '',
    items: {
      type: 'object',
      title: '数组项',
      description: '',
      properties: {
        name: {
          type: 'input',
          title: '名字',
          default: '',
          description: '',
          placeholder: '',
        },
      },
      propertyOrder: ['name'],
    },
  },

  propsSchema: buildPropsSchema(
    {
      showCodeViewBtn: {
        type: 'boolean',
        title: '源码模式',
        description: '用于控制是否显示源码模式切换按钮，默认显示',
      },
      'minimum-child': {
        type: 'number',
        title: '最小数据项',
        description: '用于限制数据项最小个数',
      },
      'maximum-child': {
        type: 'number',
        title: '最多数据项',
        description: '用于限制数据项最多个数',
      },
    },
    ['showCodeViewBtn', 'minimum-child', 'maximum-child'],
  ),

  renderer: ArraySchema,
};

schemaRegistry.register(arrayDescriptor);

export default arrayDescriptor;
