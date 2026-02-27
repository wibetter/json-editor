import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema } from '$core/schema';
import QuantitySchema from '$schemaRenderer/QuantitySchema/index';

/**
 * box-style 元素描述文件
 * 盒子模型/边距设置类型
 */
const boxStyleDescriptor: SchemaDescriptor = {
  type: 'box-style',
  label: '盒子模型/边距设置',
  isContainer: false,

  defaultSchema: {
    type: 'box-style',
    title: '盒子模型',
    description: '',
    properties: {
      unit: {
        title: '单位数值',
        type: 'input',
        default: '0',
        description: '',
      },
      quantity: {
        type: 'select',
        title: '单位类型',
        options: [
          { label: 'px', value: 'px' },
          { label: 'rem', value: 'rem' },
          { label: 'em', value: 'em' },
          { label: '%', value: '%' },
        ],
        default: 'px',
      },
    },
    propertyOrder: ['unit', 'quantity'],
  },

  propsSchema: buildPropsSchema(),

  renderer: QuantitySchema,
};

schemaRegistry.register(boxStyleDescriptor);

export default boxStyleDescriptor;
