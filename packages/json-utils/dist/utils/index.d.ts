/**
 * 获取 URL 上的所有参数
 * 例如：比如当前页面的地址为 xx?a1=123 则 urlParse() => {a1: 123}
 */
export declare function urlParse(): {};
/**
 * 转换成 URL 上的参数字符串
 * @param {*} urlParams
 * 例如：{a1: 123} => a1=123
 */
export declare function urlStringify(urlParams: any): string;
/** js对象数据深拷贝，避免数据联动 */
export declare function objClone(targetObj: any): any;
/** 对比两个json数据是否相等 */
export declare function isEqual(targetObj: any, nextTargetObj: any): boolean;
export declare function isEqualByIdT(
  targetObj: any,
  nextTargetObj: any,
): boolean;
/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export declare function hasProperties(targetProperties: any): boolean;
export declare function truncate(str: string, paramConfig: any): string;
/**
 * 支持属性表达式
 */
export declare function evalExpression(
  expressionStr: string,
  data: any,
): string | false;
