import {
  cloneDeep,
  isEqual as _isEqual,
  truncate as truncateStr,
} from 'lodash';
import qs from 'qs';

/**
 * 获取 URL 上的所有参数
 * 例如：比如当前页面的地址为 xx?a1=123 则 urlParse() => {a1: 123}
 */
export function urlParse() {
  let urlParams = {};
  if (location.search) {
    urlParams = qs.parse(location.search.substring(1));
  }
  return urlParams;
}

/**
 * 转换成 URL 上的参数字符串
 * @param {*} urlParams
 * 例如：{a1: 123} => a1=123
 */
export function urlStringify(urlParams) {
  let urlStr = '';
  if (url) {
    urlStr = qs.stringify(urlParams);
  }
  return urlStr;
}

/** js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj) {
  // const newObj = JSON.stringify(targetObj);
  // return JSON.parse(newObj);
  return cloneDeep(targetObj);
}

/** 对比两个json数据是否相等 */
export function isEqual(targetObj, nextTargetObj) {
  // return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
  return _isEqual(targetObj, nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export function hasProperties(targetProperties) {
  let hasProperties = false;
  if (targetProperties !== undefined && targetProperties !== null) {
    // targetProperties 等于""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

// 截断字符串，避免撑开元素
// https://www.lodashjs.com/docs/lodash.truncate
export function truncate(str, paramConfig) {
  if (str) {
    return truncateStr(str, paramConfig);
  }
  return truncateStr(str, paramConfig);
}

/**
 * 支持属性表达式
 */
export function evalExpression(expressionStr, data) {
  const curData = data || {};
  if (!expressionStr) return false;
  const expressionFunc = new Function(
    'data',
    `with(data) { return (${expressionStr});}`,
  );
  let expressionResult = '';
  try {
    expressionResult = expressionFunc(curData);
  } catch (error) {
    console.warn(`表达式运算出错: ${expressionStr}，报错信息：`, error);
    return expressionResult;
  }

  return expressionResult;
}
