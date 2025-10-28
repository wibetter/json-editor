/**
 * metaElemAnalyzer: 根据当前的schema，统计当前json里面用到的元数据情况
 * 【方法参数说明】
 * schemaData: 必填项，schema数据
 * 【返回数据格式说明】
 * metaElemAnalyzer: {
 *   input: 3,
 *   color: 1,
 *   event: {
 *     emit: 1,
 *     on: 2
 *   },
 *   datasource: {
 *     local: 1,
 *     remote: 1,
 *     interfaceData: 2
 *   }
 * }
 */
import { isObject } from '$utils/typeof';

/**
 * Object类型的schema元数据分析
 * */
function objectSchema2JsonData(jsonSchema, analyzerResult) {
  let curAnalyzerResult = analyzerResult || {};
  if (
    isObject(jsonSchema) &&
    getExpectType(jsonSchema.type) === 'object' &&
    jsonSchema.properties
  ) {
    let curPropertyOrder = [];
    if (jsonSchema.propertyOrder) {
      curPropertyOrder = jsonSchema.propertyOrder;
    } else {
      curPropertyOrder = Object.keys(jsonSchema.properties);
    }
    curPropertyOrder.map((jsonKey) => {
      const curSchema = jsonSchema.properties[jsonKey];
      curAnalyzerResult = metaElemAnalyzer(curSchema, curAnalyzerResult);
    });
  }
  return curAnalyzerResult;
}

/** 主方法 */
export function metaElemAnalyzer(curJsonSchemaObj, analyzerResult) {
  // 根据analyzerResult是否为空，判断是否是最外层的调用
  const isFirstAnalyzer = !analyzerResult ? true : false;
  let curAnalyzerResult = analyzerResult || {};
  // 根据当前schem数据分析使用到的元数据情况
  if (curJsonSchemaObj && JSON.stringify(curJsonSchemaObj) !== '{}') {
    const curType = curJsonSchemaObj.type;
    if (
      curType === 'object' ||
      curType === 'func' ||
      curType === 'style' ||
      curType === 'data'
    ) {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['object']) {
        curAnalyzerResult['object'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['object'] = 1;
      }
      curAnalyzerResult = objectSchema2JsonData(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
    } else if (curType === 'array') {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['array']) {
        curAnalyzerResult['array'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['array'] = 1;
      }
      curJsonSchemaObj = curJsonSchemaObj.items;
      curAnalyzerResult = objectSchema2JsonData(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
    } else {
      if (!isFirstAnalyzer && curAnalyzerResult[curType]) {
        curAnalyzerResult[curType] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult[curType] = 1;
      }
    }
  }
  return curAnalyzerResult;
}
