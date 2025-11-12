import { TypeDataList } from '$data/TypeDataList';

// 判断是否是URL地址类型
export function isURL(s: any) {
  return /^http[s]?:\/\/.*/.test(s);
}
// 判断是否是字符串类型
export function isString(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}
// 判断是否是数字类型
export function isNumber(value: any) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[object Number]'
  );
}
// 判断是否是Boolean类型
export function isBoolean(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}

// 判断是否是年月日的时间类型
export function isDateStr(dateStr: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

// 判断是否是年月日时分的时间类型
export function isDateTimeStr(dateStr: string) {
  return (
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(dateStr) ||
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateStr)
  );
}

// 判断是否是时分的时间类型
export function isTimeStr(dateStr: string) {
  return /^\d{2}:\d{2}:\d{2}$/.test(dateStr) || /^\d{2}:\d{2}$/.test(dateStr);
}

/**
 *  判断是否是数组类型
 * */
export function isArray(curObj: any) {
  let isArray = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    isArray = true;
  }
  return isArray;
}

/**
 *  判断是否是select多选类型(基础类型的array)
 *  select类型一定是一个array类型
 * */
export function isSelect(curObj: any) {
  if (!isArray(curObj)) {
    return false;
  }
  for (let ind = 0, size = curObj.length; ind < size; ind++) {
    const arrItem = curObj[ind];
    if (!isString(arrItem)) {
      // 只要有一个不是string类型就认为不是select
      return false;
    }
  }
  return true;
}

/**
 *  判断是否是对象类型
 * */
export function isObject(curObj: any) {
  let isObject = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是单位类型
 * */
export function isQuantity(val: string) {
  let isObject = false;
  // 获取当前计量单位元素可选的单位类型
  const quantityList = TypeDataList.quantity.properties.quantity.enum;
  if (quantityList.indexOf(val) >= 0) {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是颜色值
 * */
export function isColor(colorVal: string) {
  return /^#[0-9a-f]{6}$/.test(colorVal) || /^#[0-9a-f]{3}$/.test(colorVal);
}

/**
 *  判断是否是函数类型
 * */
export function isFunction(curObj: any) {
  let isFunction = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }
  return isFunction;
}
