/** dynamic-data: 动态数据
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export declare const initDynamicData: {
  type: string;
  title: string;
  isContainer: boolean;
  properties: {
    type: {
      default: string;
      type: string;
      options: {
        label: string;
        value: string;
      }[];
      title: string;
    };
    config: {
      title: string;
      type: string;
      description: string;
      isRequired: boolean;
      properties: {
        url: {
          type: string;
          title: string;
          default: string;
          description: string;
          isRequired: boolean;
        };
        method: {
          type: string;
          title: string;
          default: string;
          options: {
            label: string;
            value: string;
          }[];
          isRequired: boolean;
        };
        headers: {
          type: string;
          title: string;
          default: string;
          description: string;
        };
        data: {
          type: string;
          title: string;
          default: string;
          description: string;
        };
        dataType: {
          type: string;
          title: string;
          default: string;
          options: {
            label: string;
            value: string;
          }[];
        };
        cache: {
          type: string;
          title: string;
          default: undefined;
          description: string;
        };
      };
      propertyOrder: string[];
    };
    data: {
      title: string;
      type: string;
      default: string;
      description: string;
      isRequired: boolean;
    };
    localFilter: {
      title: string;
      type: string;
      default: string;
      description: string;
      isRequired: boolean;
    };
  };
  propertyOrder: string[];
};
export declare const EmptyDynamicDataCont: {
  type: string;
  config: {
    url: string;
    method: string;
    headers: {};
    data: {};
    dataType: string;
  };
  data: string;
  localFilter: string;
};
