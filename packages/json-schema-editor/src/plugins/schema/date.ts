import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

const datePropsSchema = (title: string) =>
  buildPropsSchema(
    title,
    {
      isConditionProp: EDITABLE_PROPS.isConditionProp,
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: 'input',
        title: '默认值',
        placeholder: '请输入默认日期值',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        placeholder: '请输入输入提示',
      },
    },
    ['isConditionProp', 'readOnly', 'isRequired', 'default', 'placeholder'],
  );

/**
 * date 元素描述文件
 */
export const dateDescriptor: SchemaDescriptor = {
  type: 'date',
  label: '日期',
  isContainer: false,

  defaultSchema: {
    type: 'date',
    title: '日期Date',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,
  propsSchema: datePropsSchema('date 高级配置'),
};

/**
 * date-time 元素描述文件
 */
export const dateTimeDescriptor: SchemaDescriptor = {
  type: 'date-time',
  label: '日期时间',
  isContainer: false,

  defaultSchema: {
    type: 'date-time',
    title: '日期时间',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,
  propsSchema: datePropsSchema('date-time 高级配置'),
};

/**
 * time 元素描述文件
 */
export const timeDescriptor: SchemaDescriptor = {
  type: 'time',
  label: '时间',
  isContainer: false,

  defaultSchema: {
    type: 'time',
    title: '时间Time',
    default: '',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,
  propsSchema: datePropsSchema('time 高级配置'),
};

schemaRegistry.registerAll([
  dateDescriptor,
  dateTimeDescriptor,
  timeDescriptor,
]);
