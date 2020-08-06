// 判断是否是URL地址类型
export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s);
};
// 判断是否是字符串类型
export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
};
// 判断是否是数字类型
export function isNumber(value) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[object Number]'
  );
}
// 判断是否是Boolean类型
export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};

// 判断是否是年月日的时间类型
export function isDateStr(dateStr) {
  return dateStr.match(/\d{4}-\d{2}-\d{2}/);
}

// 判断是否是年月日时分的时间类型
export function isDateTimeStr(dateStr) {
  return dateStr.match(/\d{4}-\d{2}-\d{2}\s\d{2}-\d{2}/);
}

// 判断是否是时分的时间类型
export function isTimeStr(dateStr) {
  return dateStr.match(/\d{2}-\d{2}/);
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
