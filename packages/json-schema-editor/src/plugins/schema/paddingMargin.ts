import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import ObjectSchema from '$schemaRenderer/ObjectSchema/index';

/**
 * padding-margin 元素描述文件
 * 边距设置类型
 */
const paddingMarginDescriptor: SchemaDescriptor = {
  type: 'padding-margin',
  label: '边距设置',
  isContainer: false,

  defaultSchema: {
    type: 'padding-margin',
    title: '边距设置',
    isContainer: false,
    properties: {
      margin: {
        title: '外边距',
        type: 'input',
        default: '0', // 默认值为'0'：'0px 0px 0px 0px'；为'5px': '5px 5px 5px 5px'
        description: '',
      },
      padding: {
        title: '内边距',
        type: 'input',
        default: '0',
        description: '',
      },
      quantity: {
        type: 'select', // 选择列表
        default: 'px',
        options: [
          {
            label: 'px',
            value: 'px',
          },
          {
            label: 'rem',
            value: 'rem',
          },
          {
            label: 'em',
            value: 'em',
          },
          {
            label: '%',
            value: '%',
          },
        ],
        title: '单位类型',
      },
    },
    propertyOrder: ['margin', 'padding', 'quantity'],
  },

  propsSchema: buildPropsSchema(
    {
      autoComplete: {
        type: 'boolean',
        title: '开启可选项',
        description: '开启后支持添加可选项，并支持 autoComplete',
      },
    },
    ['autoComplete'],
  ),

  renderer: ObjectSchema,
};

schemaRegistry.register(paddingMarginDescriptor);

export default paddingMarginDescriptor;
