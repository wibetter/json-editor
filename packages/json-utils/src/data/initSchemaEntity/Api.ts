// Define the schema for API configuration
export const initApiData = {
  type: 'api',
  title: 'API 配置',
  isContainer: false,
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
};

// Empty content for api type
export const EmptyApiCont = {
  url: '',
  method: 'get',
  headers: {},
  data: {},
};
