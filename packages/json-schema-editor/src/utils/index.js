/** js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj) {
  const newObj = JSON.stringify(targetObj);
  return JSON.parse(newObj);
}

/** 对比两个json数据是否相等 */
export function isEqual(targetObj, nextTargetObj) {
  return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export function hasProperties(targetPropertie) {
  let hasProperties = false;
  if (targetPropertie !== undefined) {
    // targetPropertie为""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

/** 根据className判断是否是基本类型元素
 *  基本类型元素：input、boolean、 date、date-time、 time、 url、
 *  textarea、number、 radio、 select、color、quantity
 * */
export function isBaseSchemaElem(elemClassName) {
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
 * */
export function isBoxSchemaElem(elemClassName) {
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
 * */
export function isArray(curObj) {
  let isArray = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    isArray = true;
  }
  return isArray;
}

/**
 *  判断是否是对象类型
 * */
export function isObject(curObj) {
  let isObject = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是函数类型
 * */
export function isFunction(curObj) {
  let isFunction = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }
  return isFunction;
}

/**
 *  将数据缓存到sessionStorage中
 * */
export function saveWebCacheData(cacheKey, targetSourceIndex) {
  if (window.sessionStorage) {
    window.sessionStorage.setItem(cacheKey, targetSourceIndex);
  }
}

/**
 *  从sessionStorage中读取此前缓存的数据
 * */
export function getWebCacheData(cacheKey) {
  if (window.sessionStorage) {
    return window.sessionStorage.getItem(cacheKey);
  }
}

/**
 *  从sessionStorage中删除此前缓存的数据
 * */
export function deleteWebCacheData(cacheKey) {
  if (window.sessionStorage) {
    return window.sessionStorage.removeItem(cacheKey);
  }
}
