import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import QuantitySchema from '$schemaRenderer/QuantitySchema/index';

/**
 * quantity 元素描述文件
 * 数值单位设置类型（带单位的数字输入）
 */
const quantityDescriptor: SchemaDescriptor = {
  type: 'quantity',
  label: '数值单位设置',
  isContainer: false,

  defaultSchema: {
    type: 'quantity',
    title: '单位计量',
    description: '',
    properties: {
      unit: {
        type: 'number',
        title: '单位数值',
        default: 50,
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

  showAdvanceBtn: false,

  renderer: QuantitySchema,

  propsSchema: buildPropsSchema(
    {
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      autoComplete: {
        type: 'boolean',
        title: '开启可选项',
        description: '开启后支持添加可选项，并支持 autoComplete',
      },
      options: {
        type: 'json',
        title: '可选项',
        description: '可选项数据列表（数组格式）',
        onShow: 'autoComplete === true',
      },
    },
    ['readOnly', 'isRequired', 'autoComplete', 'options'],
  ),
};

schemaRegistry.register(quantityDescriptor);

export default quantityDescriptor;
