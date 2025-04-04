/** dataSource字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initDataSourceData = {
  type: 'datasource',
  title: '数据源',
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
      title: '数据源类型',
    },
    data: {
      title: '本地json数据',
      placeholder: '请输入静态json数据', // 输入提示
      type: 'json',
      default: '{}', // 默认值
      description: '用于设置本地的静态json数据',
      isRequired: true,
    },
    filter: {
      title: '过滤器',
      type: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  propertyOrder: ['type', 'data', 'filter'],
};

// 默认是用于展示local本地数据源的，如果展示远程数据源使用initDataSourceDataV2
export const initDataSourceDataV2 = {
  type: 'object',
  type: 'datasource',
  title: '数据源',
  isContainer: false,
  properties: {
    type: {
      type: 'select',
      default: 'remote',
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
      title: '数据源类型',
    },
    data: {
      type: 'url',
      title: '远程json数据',
      placeholder: '请输入远程json数据源地址', // 输入提示
      default: 'http://xxx', // 默认值
      isRequired: true,
      description: '用于设置获取元素数据的请求地址',
    },
    filter: {
      type: 'codearea',
      title: '过滤器',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  propertyOrder: ['type', 'data', 'filter'],
};
