import { getExpectType } from '$function/getExpectType';

/**
 * 收集当前schema中的所有条件子字段，根据其数值拼接成对应的 conditionValue
 */
export function schema2conditionValue(jsonSchema: any, jsonData: any) {
  let conditionValue = '';
  if (getExpectType(jsonSchema.type) === 'object' && jsonSchema.properties) {
    let curPropertyOrder = [];
    if (jsonSchema.propertyOrder) {
      curPropertyOrder = jsonSchema.propertyOrder;
    } else {
      curPropertyOrder = Object.keys(jsonSchema.properties);
    }
    curPropertyOrder.map((jsonKey: string) => {
      const curJsonItem = jsonSchema.properties[jsonKey];
      let curConditionValue = jsonData[jsonKey];
      if (
        getExpectType(curJsonItem.type) !== 'array' ||
        getExpectType(curJsonItem.type) !== 'object'
      ) {
        if (curConditionValue && curJsonItem.isConditionProp) {
          // 仅记录条件字段数值
          if (conditionValue.indexOf('-') > 0) {
            conditionValue += `-${curConditionValue}`;
          } else {
            conditionValue = curConditionValue;
          }
        }
      }
    });
  }
  return conditionValue;
}
