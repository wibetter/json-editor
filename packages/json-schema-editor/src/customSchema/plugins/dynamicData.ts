import { SchemaDescriptor } from '$core/types';
import { buildPropsSchema } from '$core/schema';
import { registerSchema } from '$core/registry';
import DynamicDataSchema from '$customSchema/renderers/DynamicDataSchema/index';

/**
 * dynamic-data 元素描述文件
 * 动态数据源类型（旧版，固有容器）
 */
const dynamicDataDescriptor: SchemaDescriptor = {
  type: 'dynamic-data',
  label: '动态数据源(旧版)',
  isContainer: false,
  isFixed: true,
  keyIsFixed: true,
  typeIsFixed: true,

  defaultSchema: {
    type: 'dynamic-data',
    title: '动态数据源',
    description: '',
    properties: {},
    propertyOrder: [],
  },

  propsSchema: buildPropsSchema({
    showCodeViewBtn: {
      type: 'boolean',
      title: '源码模式',
      description: '用于控制是否显示源码模式切换按钮',
    },
  }),

  renderer: DynamicDataSchema,
};

export default dynamicDataDescriptor;

// 注册自定义Schema
registerSchema(dynamicDataDescriptor);
