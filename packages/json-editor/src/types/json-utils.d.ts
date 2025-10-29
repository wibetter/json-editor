// @wibetter/json-utils 模块类型声明
declare module '@wibetter/json-utils' {
  // 字符串截断函数
  export function truncate(
    str: string | number | null | undefined,
    paramConfig?: {
      length?: number;
      omission?: string;
      separator?: string | RegExp;
    },
  ): string;

  // 类型判断函数
  export function isArray(value: any): value is any[];
  export function isString(value: any): value is string;
  export function isNumber(value: any): value is number;
  export function isBoolean(value: any): value is boolean;
  export function isObject(value: any): value is Record<string, any>;
  export function isURL(value: any): boolean;
  export function isSelect(value: any): boolean;
  export function isQuantity(value: any): boolean;
  export function isColor(value: any): boolean;
  export function isDateStr(value: any): boolean;
  export function isDateTimeStr(value: any): boolean;
  export function isTimeStr(value: any): boolean;
  export function isFunction(value: any): value is Function;

  // 工具函数
  export function objClone<T>(targetObj: T): T;
  export function isEqual(targetObj: any, nextTargetObj: any): boolean;
  export function hasProperties(targetProperties: any): boolean;
  export function urlParse(): Record<string, any>;
  export function urlStringify(urlParams: Record<string, any>): string;
  export function evalExpression(
    expressionStr: string,
    data: Record<string, any>,
  ): any;

  // 其他导出的函数和类型（根据需要可以继续扩展）
  export function getJsonDataByKeyRoute(keyRoute: string, jsonData: any): any;
  export function getSchemaByIndexRoute(
    indexRoute: string,
    jsonSchema: any,
  ): any;
  export function getSchemaByKeyRoute(keyRoute: string, jsonSchema: any): any;
  export function indexRoute2keyRoute(
    indexRoute: string,
    jsonSchema: any,
  ): string;
  export function keyRoute2indexRoute(
    keyRoute: string,
    jsonSchema: any,
  ): string;
  export function json2schema(jsonData: any, options?: any): any;
  export function schema2json(jsonSchema: any, options?: any): any;
  export function oldSchemaToNewSchema(oldSchema: any): any;
  export function schemaMetaList(): any[];
  export function metaElemAnalyzer(jsonData: any, jsonSchema: any): any;
  export function json2treeData(jsonData: any, jsonSchema: any): any[];
  export function getExpectType(value: any): string;
  export function schema2conditionValue(jsonSchema: any): any;
}
