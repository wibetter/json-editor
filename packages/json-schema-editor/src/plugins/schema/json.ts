import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

const jsonCodePropsSchema = (defaultSchemaType: string = 'textarea') =>
  buildPropsSchema(
    {
      readOnly: EDITABLE_PROPS.readOnly,
      isRequired: EDITABLE_PROPS.isRequired,
      default: {
        type: defaultSchemaType,
        title: '默认值',
        placeholder: '请输入默认值',
      },
      placeholder: {
        type: 'input',
        title: '输入提示',
        placeholder: '请输入输入提示',
      },
    },
    ['readOnly', 'isRequired', 'default', 'placeholder'],
  );

/**
 * json 元素描述文件
 * JSON 内容编辑类型
 */
export const jsonDescriptor: SchemaDescriptor = {
  type: 'json',
  label: 'json内容',
  isContainer: false,

  defaultSchema: {
    type: 'json',
    title: 'json数据',
    default: '{}',
    description: '',
    placeholder: '',
  },

  renderer: GeneralSchema,
  propsSchema: jsonCodePropsSchema('json'),
};

/**
 * codearea 元素描述文件
 * 代码编辑器类型
 */
export const codeareaDescriptor: SchemaDescriptor = {
  type: 'codearea',
  label: 'code内容',
  isContainer: false,

  defaultSchema: {
    type: 'codearea',
    title: '函数类型',
    default: 'function func() { console.log("hello, world!"); }',
    description: '用于定义函数方法',
    placeholder: '请输入函数方法',
  },

  renderer: GeneralSchema,
  propsSchema: jsonCodePropsSchema('codearea'),
};

/**
 * htmlarea 元素描述文件
 * HTML 内容编辑类型
 */
export const htmlareaDescriptor: SchemaDescriptor = {
  type: 'htmlarea',
  label: 'html内容',
  isContainer: false,

  defaultSchema: {
    type: 'htmlarea',
    title: '富文本',
    default: '<p>hello,world!</p>',
    description: '用于放置html代码片段',
    placeholder: '请输入html代码片段',
  },

  renderer: GeneralSchema,
  propsSchema: jsonCodePropsSchema('htmlarea'),
};

schemaRegistry.registerAll([
  jsonDescriptor,
  codeareaDescriptor,
  htmlareaDescriptor,
]);
