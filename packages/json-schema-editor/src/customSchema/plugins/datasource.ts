import { SchemaDescriptor } from '$core/types';
import { registerSchema } from '$core/index';
import { buildPropsSchema } from '$core/schema';
import DataSourceSchema from '$customSchema/renderers/DataSourceSchema/index';

/**
 * datasource 元素描述文件
 * 静态数据源类型（旧版，固有容器）
 */
const datasourceDescriptor: SchemaDescriptor = {
  type: 'datasource',
  label: '静态数据源(旧版)',
  isContainer: true,
  isFixed: true,
  keyIsFixed: true,
  typeIsFixed: true,

  defaultSchema: {
    type: 'datasource',
    title: '静态数据源',
    description: '',
    properties: {},
    propertyOrder: [],
  },

  propsSchema: buildPropsSchema(
    {
      showCodeViewBtn: {
        type: 'boolean',
        title: '源码模式',
        description: '用于控制是否显示源码模式切换按钮',
      },
    },
    ['showCodeViewBtn'],
  ),

  renderer: DataSourceSchema,
};

export default datasourceDescriptor;

// 注册自定义Schema
registerSchema(datasourceDescriptor);
