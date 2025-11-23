import {
  objClone as _objClone,
  isEqual as _isEqual,
  evalExpression,
  isArray,
  isObject,
  isString,
  isURL,
  isColor,
} from '@wibetter/json-utils';
import camelCase from 'lodash/camelCase';
import {
  saveJSONEditorCache,
  getJSONEditorCache,
  deleteJSONEditorCache,
} from './webCache';

export function buildStyle(
  style: Record<string, any> | undefined,
): Record<string, any> {
  const curStyle: Record<string, any> = {};
  if (style) {
    Object.keys(style).forEach((styleKey: string) => {
      // 将属性短横线命名转换为驼峰命名，如 background-color => backgroundColor
      if (styleKey.indexOf('-') > 0) {
        curStyle[camelCase(styleKey)] = (style as any)[styleKey];
      } else {
        curStyle[styleKey] = (style as any)[styleKey];
      }
    });
  }
  return curStyle;
}

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

/*
 * 判断当前属性是否存在
 * 备注：要识别boolean类型的数值
 */
export function hasProperties(targetPropertie: any): boolean {
  let hasProperties = false;
  if (targetPropertie !== undefined && targetPropertie !== null) {
    // targetPropertie 等于""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

/** 是否需要设置成两栏布局
 * 比较适合固定宽度的元素，
 * 比如：boolean、date、date-time、time、number、color、quantity
 * 呈现：element-title 和 content-item 在同一行展示
 * */
export function isNeedTwoColWarpStyle(format: string): boolean {
  let isNeedTwoColWarp = false;
  if (
    format === 'boolean' ||
    format === 'date' ||
    format === 'date-time' ||
    format === 'time' ||
    format === 'number' ||
    format === 'color' ||
    format === 'quantity' ||
    format === 'select'
  ) {
    isNeedTwoColWarp = true;
  }
  return isNeedTwoColWarp;
}

/** 根据className判断是否是基本类型元素
 *  基本类型元素：input、boolean、 date、date-time、 time、 url、
 *  textarea、number、 radio、 select、color、quantity
 * */
export function isBaseSchemaElem(elemClassName: string): boolean {
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
export function isBoxSchemaElem(elemClassName: string): boolean {
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

/** 根据className判断是否是一级固定类型元素
 *  容器类型元素：func、style、data
 * */
export function isFirstSchemaElem(elemClassName: string): boolean {
  let isFirstSchema = false;
  if (
    elemClassName.indexOf('func-schema') >= 0 ||
    elemClassName.indexOf('style-schema') >= 0 ||
    elemClassName.indexOf('data-schema') >= 0
  ) {
    isFirstSchema = true;
  }
  return isFirstSchema;
}
/**
 * 获取当前url中的所有参数
 */
export function getParams(): Record<string, string> {
  let params = window.location.search;
  if (!params) {
    const currentHref = window.location.href;
    const startIndex = currentHref.lastIndexOf('?');
    params = currentHref.substring(startIndex);
  }
  const paramsObj: Record<string, string> = {};
  if (params) {
    const arr = params.substr(1).split('&');
    for (let i = 0, size = arr.length; i < size; i++) {
      const data = arr[i].split('=');
      if (data[0] && data[1]) {
        paramsObj[data[0]] = data[1];
      }
    }
  }
  return paramsObj;
}
/**
 * 获取当前url中的指定参数
 */
export function getURLParam(key: string): string {
  const params = window.location.search;
  if (params) {
    const arr = params.substr(1).split('&');
    for (let i = 0, size = arr.length; i < size; i++) {
      const data = arr[i].split('=');
      if (data[0] === key) {
        return data[1];
      }
    }
  }
  return '';
}

/**
 *  将数据缓存到sessionStorage中
 */
export function saveWebCacheData(valueKey: string, value: any): void {
  saveJSONEditorCache(valueKey, value, 'json-editor-formData');
}

/**
 *  从sessionStorage中读取此前缓存的数据
 */
export function getWebCacheData(valueKey: string): any {
  return getJSONEditorCache(valueKey, 'json-editor-formData');
}

/**
 *  从sessionStorage中删除此前缓存的数据
 */
export function deleteWebCacheData(valueKey: string): void {
  deleteJSONEditorCache(valueKey, 'json-editor-formData');
}

/**
 * 处理 Props 数据，所有以 On 或者 Expr 结尾的 prop 都进行一次计算
 *
 * xxxOn
 * xxxExpr
 */
export function getExprProperties(
  schema: any,
  data: any,
  ignoreList: string[] = ['name'],
): any {
  Object.getOwnPropertyNames(schema).forEach((key: string) => {
    if (ignoreList && ~ignoreList.indexOf(key)) {
      return;
    }

    let parts = /^(.*)(On|Expr)$/.exec(key) || [];
    const type = parts[2];
    let value = schema[key];

    if (
      value &&
      typeof value === 'string' &&
      parts[1] &&
      (type === 'On' || type === 'Expr')
    ) {
      key = parts[1];
      schema[key] = evalExpression(value, data || {});
    }
  });

  return schema;
}

// options 异常格式 处理，自动转成可用列表格式
export function formatOptions(options: any): {
  options: any[];
  optionValue: Record<string, any>;
} {
  let curOptions: any[] = [];
  let optionValue: Record<string, any> = {}; // 记录对象类型的value
  if (isArray(options)) {
    // curOptions = options;
    options.forEach((option: any) => {
      if (isObject(option.value)) {
        const valueStr = JSON.stringify(option.value);
        curOptions.push({
          label: option.label || option.name,
          value: valueStr,
        });
        optionValue[valueStr] = option.value;
      } else {
        curOptions.push(option);
      }
    });
  } else if (isString(options)) {
    try {
      curOptions = JSON.parse(options);
      const formatResult = formatOptions(curOptions);
      curOptions = formatResult.options;
      optionValue = formatResult.optionValue;
    } catch (error) {
      console.warn('options 异常数据格式转换失败：', options);
    }
  }
  return {
    options: curOptions,
    optionValue,
  };
}

export function formatOptions1(options: any): {
  options: any[];
  optionValue: Record<string, any>;
} {
  let curOptions: any[] = [];
  let optionValue: Record<string, any> = {}; // 记录对象类型的value
  if (isArray(options)) {
    // curOptions = options;
    options.forEach((option: any, index: number) => {
      if (isObject(option)) {
        if (isObject(option.value)) {
          let valueStr = JSON.stringify(option.value);
          valueStr.replaceAll(' ', '');
          curOptions.push({
            label: option.label || option.name,
            value: valueStr,
          });
          optionValue[valueStr] = option.value;
        } else {
          curOptions.push(option);
        }
      } else if (isString(option)) {
        // 兼容异常 option 数据
        try {
          const curOption = JSON.parse(option);
          if (isObject(curOption.value)) {
            let valueStr = JSON.stringify(curOption.value);
            valueStr.replaceAll(' ', '');
            curOptions.push({
              label: curOption.label || curOption.name,
              value: valueStr,
            });
            optionValue[valueStr] = curOption.value;
          } else {
            curOptions.push(curOption);
          }
        } catch (error) {
          console.warn('option 异常数据格式转换失败：', option);
        }
      }
    });
  } else if (isString(options)) {
    try {
      curOptions = JSON.parse(options);
      const formatResult = formatOptions(curOptions);
      curOptions = formatResult.options;
      optionValue = formatResult.optionValue;
    } catch (error) {
      console.warn('options 异常数据格式转换失败：', options);
    }
  }
  return {
    options: curOptions,
    optionValue,
  };
}

export function getObjectTitle(objItem: any): string | any {
  if (objItem && isObject(objItem)) {
    let curObjectTitle =
      objItem.label || objItem.title || objItem.description || objItem.desc;
    if (curObjectTitle) {
      return curObjectTitle;
    }
    const objItemKeys = Object.keys(objItem);
    for (let index = 0, size = objItemKeys.length; index < size; index++) {
      const itemVal = objItem[objItemKeys[index]];
      if (
        itemVal &&
        isString(itemVal) &&
        !isURL(itemVal) &&
        !isColor(itemVal)
      ) {
        return itemVal;
      }
    }
  } else {
    return objItem;
  }
}

/**
 * options 数据处理
 * 将 options 列表中的普通 option 自动包裹一层：
 * 比如：[{label: 'xxLabel', value: 123}] => [{label: 'xxLabel', value: {label: 'xxLabel', value: 123}}]
 */
export function getWrapOptions(options: any[]): any[] {
  let curOptions: any[] = [];
  if (isArray(options)) {
    options.forEach((option: any) => {
      curOptions.push({
        label: getObjectTitle(option),
        value: option, // isObject(option.value) ? option.value : option,
      });
      /*
      if (isObject(option)) {
        curOptions.push({
          label: getObjectTitle(option),
          value: option // isObject(option.value) ? option.value : option,
        });
      } else {
        curOptions.push(option);
      }
      */
    });
  }
  return curOptions;
}
