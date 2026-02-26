import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema } from '$core/schema';
import ApiSchema from '$schemaRenderer/ApiSchema/index';

/**
 * api 元素描述文件
 * API 配置类型（固有容器）
 */
const apiDescriptor: SchemaDescriptor = {
  type: 'api',
  label: 'API 配置',
  isContainer: false,
  isFixed: false,
  keyIsFixed: false,
  typeIsFixed: false,

  defaultSchema: {
    type: 'api',
    title: 'API 配置',
    properties: {
      url: {
        type: 'url',
        title: '请求地址',
        default: '',
        description: 'API 的 URL',
        isRequired: true,
      },
      method: {
        type: 'select',
        title: '请求方式',
        default: 'get',
        options: [
          { label: 'GET', value: 'get' },
          { label: 'POST', value: 'post' },
          { label: 'PUT', value: 'put' },
          { label: 'DELETE', value: 'delete' },
        ],
        isRequired: true,
      },
      headers: {
        type: 'json',
        title: '请求头',
        default: '{}',
        description: '请求头对象',
      },
      data: {
        type: 'json',
        title: '请求参数',
        default: '{}',
        description: '请求体或查询参数',
      },
    },
    propertyOrder: ['url', 'method', 'headers', 'data'],
  },

  propsSchema: buildPropsSchema({}, []),

  renderer: ApiSchema,
};

schemaRegistry.register(apiDescriptor);

export default apiDescriptor;
