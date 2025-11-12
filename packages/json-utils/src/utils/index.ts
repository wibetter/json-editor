import {
  cloneDeep,
  isEqual as _isEqual,
  truncate as truncateStr,
} from 'lodash';
import qs from 'qs';
import { isObject } from '$utils/typeof';

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
export function urlStringify(urlParams: any) {
  let urlStr = '';
  if (urlParams) {
    urlStr = qs.stringify(urlParams);
  }
  return urlStr;
}

/** js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj: any) {
  // const newObj = JSON.stringify(targetObj);
  // return JSON.parse(newObj);
  return cloneDeep(targetObj);
}

/** 对比两个json数据是否相等 */
export function isEqual(targetObj: any, nextTargetObj: any) {
  if (
    (hasProperties(targetObj) && !hasProperties(nextTargetObj)) ||
    (!hasProperties(targetObj) && hasProperties(nextTargetObj)) ||
    typeof targetObj !== typeof nextTargetObj
  ) {
    return false;
  }
  if (
    isObject(targetObj) &&
    (targetObj.id !== nextTargetObj.id ||
      targetObj.lastUpdateTime !== nextTargetObj.lastUpdateTime)
  ) {
    return false;
  }
  const curTime = new Date().getTime();
  if (
    isObject(targetObj) &&
    targetObj.lastUpdateTime &&
    targetObj.lastUpdateTime === nextTargetObj.lastUpdateTime &&
    curTime - targetObj.lastUpdateTime < 500
  ) {
    // 当两个对象的时间戳相同，且和当前时间的时间戳数值相差不到500毫秒，则直接认为两者数据相同
    return true;
  }
  return _isEqual(targetObj, nextTargetObj);
}

// 根据 id 或 lastUpdateTime 判断 数据是否相等
export function isEqualByIdT(targetObj: any, nextTargetObj: any) {
  if (
    (hasProperties(targetObj) && !hasProperties(nextTargetObj)) ||
    (!hasProperties(targetObj) && hasProperties(nextTargetObj)) ||
    typeof targetObj !== typeof nextTargetObj
  ) {
    return false;
  }
  if (
    isObject(targetObj) &&
    (targetObj.id !== nextTargetObj.id ||
      targetObj.lastUpdateTime !== nextTargetObj.lastUpdateTime)
  ) {
    return false;
  }

  const curTime = new Date().getTime();
  if (
    isObject(targetObj) &&
    targetObj.lastUpdateTime &&
    targetObj.lastUpdateTime === nextTargetObj.lastUpdateTime &&
    curTime - targetObj.lastUpdateTime < 500
  ) {
    // 当两个对象的时间戳相同，且和当前时间的时间戳数值相差不到500毫秒，则直接认为两者数据相同
    return true;
  }

  if (
    isObject(targetObj) &&
    ((hasProperties(targetObj.id) && targetObj.id === nextTargetObj.id) ||
      (hasProperties(targetObj.lastUpdateTime) &&
        targetObj.lastUpdateTime === nextTargetObj.lastUpdateTime))
  ) {
    return true;
  } else {
    return _isEqual(targetObj, nextTargetObj);
  }
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export function hasProperties(targetProperties: any) {
  let hasProperties = false;
  if (targetProperties !== undefined && targetProperties !== null) {
    // targetProperties 等于""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

// 截断字符串，避免撑开元素
// https://www.lodashjs.com/docs/lodash.truncate
export function truncate(str: string, paramConfig: any) {
  if (str) {
    return truncateStr(str, paramConfig);
  }
  return truncateStr(str, paramConfig);
}

/**
 * 支持属性表达式
 */
export function evalExpression(expressionStr: string, data: any) {
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
