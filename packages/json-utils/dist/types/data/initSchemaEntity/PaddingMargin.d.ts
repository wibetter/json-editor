/** padding-margin 字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export declare const initPaddingMarginData: {
  type: string;
  title: string;
  isContainer: boolean;
  properties: {
    margin: {
      title: string;
      type: string;
      default: string;
      description: string;
    };
    padding: {
      title: string;
      type: string;
      default: string;
      description: string;
    };
    quantity: {
      type: string;
      default: string;
      options: {
        label: string;
        value: string;
      }[];
      title: string;
    };
  };
  propertyOrder: string[];
};
