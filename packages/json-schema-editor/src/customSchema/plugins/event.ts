import { SchemaDescriptor } from '$core/types';
import { buildPropsSchema } from '$core/schema';
import { registerSchema } from '$core/index';
import EventSchema from '$customSchema/renderers/EventSchema/index';

/**
 * event 元素描述文件
 * 事件类型（旧版，固有容器）
 */
const eventDescriptor: SchemaDescriptor = {
  type: 'event',
  label: '事件(旧版)',
  isContainer: false,
  isFixed: true,
  keyIsFixed: true,
  typeIsFixed: true,

  defaultSchema: {
    type: 'event',
    title: '事件',
    description: '',
    properties: {
      type: {
        type: 'select',
        title: '事件类型',
        options: [
          { label: '注册事件(on)', value: 'on' },
          { label: '触发事件(emit)', value: 'emit' },
        ],
        default: 'on',
      },
    },
    propertyOrder: ['type'],
  },

  propsSchema: buildPropsSchema(),

  renderer: EventSchema,
};

export default eventDescriptor;

// 注册自定义Schema
registerSchema(eventDescriptor);
