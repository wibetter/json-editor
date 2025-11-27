/**
 * 收集当前schema中的所有条件子字段，根据其数值拼接成对应的 conditionValue
 */
export declare function schema2conditionValue(
  jsonSchema: any,
  jsonData: any,
): string;
