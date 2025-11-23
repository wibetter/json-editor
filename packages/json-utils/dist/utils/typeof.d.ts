export declare function isURL(s: any): boolean;
export declare function isString(o: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isBoolean(o: any): boolean;
export declare function isDateStr(dateStr: string): boolean;
export declare function isDateTimeStr(dateStr: string): boolean;
export declare function isTimeStr(dateStr: string): boolean;
/**
 *  判断是否是数组类型
 * */
export declare function isArray(curObj: any): boolean;
/**
 *  判断是否是select多选类型(基础类型的array)
 *  select类型一定是一个array类型
 * */
export declare function isSelect(curObj: any): boolean;
/**
 *  判断是否是对象类型
 * */
export declare function isObject(curObj: any): boolean;
/**
 *  判断是否是单位类型
 * */
export declare function isQuantity(val: string): boolean;
/**
 *  判断是否是颜色值
 * */
export declare function isColor(colorVal: string): boolean;
/**
 *  判断是否是函数类型
 * */
export declare function isFunction(curObj: any): boolean;
