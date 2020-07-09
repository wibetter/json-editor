/** dataSource字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initDataSourceData = {
  type: 'object',
  format: 'datasource',
  title: '数据源',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'local',
      format: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['local', 'remote'],
      title: '数据源类型',
    },
    data: {
      type: 'string',
      title: '本地json数据',
      format: 'json',
      default: '{}', // 默认值
      description: '用于设置本地的静态json数据',
      isRequired: true,
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};
