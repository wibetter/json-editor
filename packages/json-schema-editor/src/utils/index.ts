import {
  objClone as _objClone,
  isEqual as _isEqual,
} from '@wibetter/json-utils';

/** js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj: any) {
  // const newObj = JSON.stringify(targetObj);
  // return JSON.parse(newObj);
  return _objClone(targetObj);
}

/** 对比两个json数据是否相等 */
export function isEqual(targetObj: any, nextTargetObj: any) {
  // return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
  return _isEqual(targetObj, nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export function hasProperties(targetProperties: any) {
  let hasProperties = false;
  if (targetProperties !== undefined) {
    // ""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

/** 根据className判断是否是基本类型元素
 *  基本类型元素：input、boolean、 date、date-time、 time、 url、
 *  textarea、number、 radio、 select、color、quantity
 */
export function isBaseSchemaElem(elemClassName: string) {
  let isBaseSchema = false;
  if (
    elemClassName.indexOf('input-schema') >= 0 ||
    elemClassName.indexOf('boolean-schema') >= 0 ||
    elemClassName.indexOf('date-schema') >= 0 ||
    elemClassName.indexOf('date-time-schema') >= 0 ||
    elemClassName.indexOf('time-schema') >= 0 ||
    elemClassName.indexOf('url-schema') >= 0 ||
    elemClassName.indexOf('textarea-schema') >= 0 ||
    elemClassName.indexOf('number-schema') >= 0 ||
    elemClassName.indexOf('radio-schema') >= 0 ||
    elemClassName.indexOf('select-schema') >= 0 ||
    elemClassName.indexOf('color-schema') >= 0 ||
    elemClassName.indexOf('quantity-schema') >= 0
  ) {
    isBaseSchema = true;
  }
  return isBaseSchema;
}

/** 根据className判断是否是容器类型元素
 *  容器类型元素：func、style、data、object
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 */
export function isBoxSchemaElem(elemClassName: string) {
  let isBoxSchema = false;
  if (
    elemClassName.indexOf('func-schema') >= 0 ||
    elemClassName.indexOf('style-schema') >= 0 ||
    elemClassName.indexOf('data-schema') >= 0 ||
    elemClassName.indexOf('object-schema') >= 0
  ) {
    isBoxSchema = true;
  }
  return isBoxSchema;
}

/**
 *  判断是否是数组类型
 */
export function isArray(curObj: any) {
  let isArray = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    isArray = true;
  }
  return isArray;
}

/**
 *  判断是否是对象类型
 */
export function isObject(curObj: any) {
  let isObject = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是函数类型
 */
export function isFunction(curObj: any) {
  let isFunction = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }
  return isFunction;
}

/**
 *  将数据缓存到sessionStorage中
 */
export function saveWebCacheData(cacheKey: string, targetSourceIndex: string) {
  if (window.sessionStorage) {
    window.sessionStorage.setItem(cacheKey, targetSourceIndex);
  }
}

/**
 *  从sessionStorage中读取此前缓存的数据
 */
export function getWebCacheData(cacheKey: string): string | null | undefined {
  if (window.sessionStorage) {
    return window.sessionStorage.getItem(cacheKey);
  }
  return undefined;
}

/**
 *  从sessionStorage中删除此前缓存的数据
 */
export function deleteWebCacheData(cacheKey: string) {
  if (window.sessionStorage) {
    return window.sessionStorage.removeItem(cacheKey);
  }
}
