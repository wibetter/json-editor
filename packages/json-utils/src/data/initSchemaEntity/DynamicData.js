/** dynamic-data: 动态数据
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initDynamicData = {
  type: 'dynamic-data',
  title: '动态数据源',
  isContainer: false,
  properties: {
    type: {
      default: 'local',
      type: 'select',
      options: [
        {
          label: '本地数据',
          value: 'local',
        },
        {
          label: '接口数据',
          value: 'remote',
        },
      ],
      title: '数据类型',
    },
    config: {
      title: '接口配置',
      type: 'api',
      description: '用于存放接口的配置数据(url、请求参数等)',
      isRequired: true,
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
            { label: 'PATCH', value: 'patch' },
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
        dataType: {
          type: 'select',
          title: '数据格式',
          default: 'json',
          options: [
            { label: 'JSON', value: 'json' },
            { label: 'FormData', value: 'form-data' },
            { label: 'Form', value: 'form' },
          ],
        },
        cache: {
          type: 'number',
          title: '缓存时间',
          default: undefined,
          description: '缓存时间（ms），不设置则不缓存',
        },
      },
      propertyOrder: ['url', 'method', 'headers', 'data', 'dataType', 'cache'],
    },
    data: {
      title: '数据内容',
      type: 'json',
      default: '{}', // 默认值
      description: '用于存放DynamicData的数据内容',
      isRequired: true,
    },
    localFilter: {
      title: '过滤器',
      type: 'codearea',
      default: 'return data;',
      description: '用于定义过滤本地数据',
      isRequired: true,
    },
  },
  propertyOrder: ['type', 'config', 'data', 'localFilter'],
};

// 动态数据对应的空json数据内容
export const EmptyDynamicDataCont = {
  type: 'local',
  config: {
    url: '',
    method: 'get',
    headers: {},
    data: {},
    dataType: 'json',
  },
  data: '{}', // 用于存储结果数据
  localFilter: 'return data;',
};

// 示例对象: 动态数据类型-接口数据 对应的json数据内容
const DynamicDataContDemo = {
  type: 'remote',
  config: {
    id: 0, // 动态数据源id
    dataName: 'data-12', // 动态数据源名称
    title: 'xxx数据源', // 数据源中文名称
    desc: 'xxx数据源描述', //  数据源中文描述
    url: 'https://api.thecatapi.com/v1/images/search', // 动态数据源请求地址
    method: 'get',
    option: {},
    header: {}, // 请求头
    body: {
      // 请求参数相关
      param1: {
        title: '参数名称',
        scope: 'static', // 固定参数
        value: '111', // 固定值
      },
      param2: {
        title: '参数名称',
        scope: 'window',
        name: 'PARAM1',
        value: '111', // 默认值
      },
      pageId: {
        title: '页面id',
        scope: 'hash',
        name: 'pId',
        value: '111', // 默认值
      },
      param7: {
        title: '参数名称',
        scope: 'dynamic', // 接口下发
        dataName: 'api3',
        body: {
          param2: {
            title: '参数名称',
            scope: 'static',
            value: '222',
          },
          param3: {
            title: '参数名称',
            scope: 'static',
            value: '333',
          },
        },
      },
    },
    mock: '{}',
    filter: 'return data;',
  },
  data: '{}', // 用于存储结果数据
  localFilter: 'return data;',
};
