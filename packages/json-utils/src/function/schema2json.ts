/**
 * schema2Json：根据schema数据内容生成一份对应的json数据
 * 当前包含三个转换方法：baseSchema2JsonData、objectSchema2JsonData、arraySchema2JsonData
 * 【方法参数说明】
 * jsonSchema: schema数据对象，主要根据此对象生成对应的json数据
 * jsonData: json数据对象，会优先使用此jsonData对应的数值
 * */
import { hasProperties, objClone } from '$utils/index';
// import { toJS } from 'mobx';
import { isArray, isObject, isFunction } from '$utils/typeof';
import { EmptyDynamicDataCont } from '$data/index';
import { getDefaultOptionVal } from '$utils/jsonSchema';
import { getExpectType } from '$function/getExpectType';

// 用于区分 对象 和 数组 类型
function isEqualByType(value1: any, value2: any) {
  return (
    `${isObject(value1)}-${isArray(value1)}` ===
    `${isObject(value2)}-${isArray(value2)}`
  );
}

/**
 * 基础类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function baseSchema2JsonData(jsonSchema: any, jsonData: any) {
  let curJsonData: any = undefined;
  let oldValue = jsonData;

  if (
    hasProperties(oldValue) &&
    hasProperties(jsonSchema.default) &&
    (typeof oldValue !== typeof jsonSchema.default ||
      !isEqualByType(oldValue, jsonSchema.default))
  ) {
    // 表示当前数据类型发生变化，则丢弃旧版数据
    oldValue = undefined;
  }
  /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
  let curValue = hasProperties(oldValue) ? oldValue : jsonSchema.default;
  switch (jsonSchema.type) {
    case 'select':
    case 'radio':
      curJsonData = curValue ?? getDefaultOptionVal(jsonSchema);
      break;
    case 'checkboxes':
      curJsonData = curValue ?? getDefaultOptionVal(jsonSchema, true);
      break;
    case 'color':
      if (curValue === '#fff' || curValue === '#FFF') {
        curValue = '#ffffff'; // 避免出现#fff类型的值，type=color不能识别
      }
      curJsonData = hasProperties(curValue) ? curValue : '#ffffff';
      break;
    case 'boolean':
      curJsonData = hasProperties(curValue) ? curValue : false;
      break;
    case 'number':
      curJsonData = hasProperties(curValue) ? curValue : undefined;
      break;
    case 'json':
      /* 转成json类型进行特殊处理，需要保证json类型的数值是json对象 */
      let curJsonItemData: any = ''; // 字符串类型的json数据
      // 判断当前jsonData是否是对象类型
      if (isObject(curValue) || isArray(curValue)) {
        curJsonItemData = curValue;
      } else if (isFunction(curValue) || curValue === '') {
        // 函数类型自动替换成默认的json数据"{}"
        curJsonItemData = {};
      } else {
        /** 当前的curJsonData是一个字符串，需要判断是否可以系列化成一个json对象
         * 如果不能系列化一个json对象，则自动转换成一个默认的json数据"{}"
         */
        try {
          // 进行格式化（检查是否是合格的json数据）
          curJsonItemData = JSON.parse(curValue);
        } catch (err) {
          // 不合格的json数据自动转换成一个默认的json数据"{}"
          curJsonItemData = {};
        }
      }
      curJsonData = curJsonItemData;
      break;
    default:
      if (jsonSchema.type === 'input' && jsonSchema.default === '0') {
        // 兼容处理：解决box-style默认值丢失问题
        curJsonData = curValue ? curValue : jsonSchema.default;
      } else {
        curJsonData = hasProperties(curValue) ? curValue : undefined;
      }
  }
  return curJsonData;
}

/**
 * Object类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function objectSchema2JsonData(jsonSchema: any, jsonData: any) {
  let curJsonData: any = {};
  const curType = jsonSchema.type;
  if (isObject(jsonSchema) && getExpectType(jsonSchema.type) === 'object') {
    const jsonItem = jsonSchema;
    let oldValue = jsonData;
    if (
      hasProperties(oldValue) &&
      ((hasProperties(jsonItem.default) &&
        typeof oldValue !== typeof jsonSchema.default) ||
        !isObject(oldValue))
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = hasProperties(oldValue) ? oldValue : jsonItem.default;

    if (curType === 'dynamic-data') {
      // 动态数据源类型（固定格式的Object类型）
      curJsonData = objClone(EmptyDynamicDataCont);
      if (curValue && isObject(curValue) && JSON.stringify(curValue) !== '{}') {
        curJsonData = Object.assign(curJsonData, curValue);
      }
    } else if (curType === 'datasource') {
      // 数据源类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'local'
      ) {
        // 本地数据源类型
        curJsonData = {
          data: '{}',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === 'http://xxx') {
          curJsonData.data = '{}';
        }
      } else {
        // 远程数据类型
        curJsonData = {
          data: 'http://xxx',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === '{}') {
          curJsonData.data = 'http://xxx';
        }
      }
    } else if (curType === 'event') {
      // 事件类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'emit'
      ) {
        // 触发事件类型
        if (curValue && curValue.type === 'out') {
          curJsonData = {
            trigger: (curValue && curValue.filter) || 'eventName', // 兼容旧版数据
            eventData: '{}',
          };
        } else {
          curJsonData = {
            trigger: 'eventName', // 兼容旧版数据
            eventData: '{}',
          };
          // 读取旧值
          if (curValue && curValue.trigger) {
            curJsonData.trigger = curValue.trigger;
          }
          if (curValue && curValue.eventData) {
            curJsonData.eventData = curValue.eventData;
          }
        }
      } else {
        // 注册事件类型-触发事件类型
        if (curValue && curValue.type === 'in') {
          curJsonData = {
            register: 'eventName',
            actionFunc: (curValue && curValue.filter) || '() => {}', // 兼容旧版数据
          };
        } else {
          curJsonData = {
            register: 'eventName', // 兼容旧版数据
            actionFunc: '() => {}',
          };
          // 读取旧值
          if (curValue && curValue.register) {
            curJsonData.register = curValue.register;
          }
          if (curValue && curValue.actionFunc) {
            curJsonData.actionFunc = curValue.actionFunc;
          }
        }
      }
    } else if (
      jsonSchema.isContainer === false &&
      curValue &&
      isObject(curValue) &&
      JSON.stringify(curValue) !== '{}'
    ) {
      curJsonData = Object.assign(curJsonData, curValue);
    } else if (
      oldValue === undefined &&
      jsonItem.default &&
      isObject(jsonItem.default)
    ) {
      curJsonData = jsonItem.default;
    } else if (jsonSchema.properties) {
      let curPropertyOrder = [];
      if (jsonSchema.propertyOrder) {
        curPropertyOrder = jsonSchema.propertyOrder;
      } else {
        curPropertyOrder = Object.keys(jsonSchema.properties);
      }
      // 其他非固定格式的Object类型
      curPropertyOrder.map((jsonKey: string) => {
        const curJsonItem = jsonSchema.properties[jsonKey];
        const curOldValue = jsonData && jsonData[jsonKey];
        switch (getExpectType(curJsonItem.type)) {
          case 'array':
            curJsonData[jsonKey] = arraySchema2JsonData(
              curJsonItem,
              curOldValue,
            );
            break;
          case 'object':
            // 普通对象类型
            curJsonData[jsonKey] = objectSchema2JsonData(
              curJsonItem,
              curOldValue,
            );
            break;
          default:
            // 其他基础类型
            curJsonData[jsonKey] = baseSchema2JsonData(
              curJsonItem,
              curOldValue,
            );
        }
      });
    }
  }
  return curJsonData;
}

/**
 * Array类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function arraySchema2JsonData(jsonSchema: any, jsonData: any) {
  let curJsonData = [];
  // 判断是否是数组类型
  if (jsonSchema && getExpectType(jsonSchema.type) === 'array') {
    // Array数据对象类型
    let oldValue = jsonData;
    if (
      hasProperties(oldValue) &&
      ((hasProperties(jsonSchema.default) &&
        typeof oldValue !== typeof jsonSchema.default) ||
        !isArray(oldValue))
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = hasProperties(oldValue) ? oldValue : jsonSchema.default;

    if (getExpectType(jsonSchema.type) === 'array') {
      if (isArray(curValue)) {
        curValue.map((arrItem: any) => {
          curJsonData.push(objectSchema2JsonData(jsonSchema.items, arrItem));
        });
      } else if (curValue) {
        curJsonData = curValue;
      } else {
        const childItems = objectSchema2JsonData(jsonSchema.items, curValue);
        curJsonData.push(childItems);
      }
    } else {
      // 考虑select类型（多选的数值也是以array对象记录）
      curJsonData = hasProperties(curValue) ? curValue : [];
    }
  }
  return curJsonData;
}

/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
export function schema2json(jsonSchema: any, jsonData: any) {
  let curJsonData = {};
  if (getExpectType(jsonSchema.type) === 'object') {
    curJsonData = objectSchema2JsonData(jsonSchema, jsonData);
  } else if (getExpectType(jsonSchema.type) === 'array') {
    curJsonData = arraySchema2JsonData(jsonSchema, jsonData);
  } else {
    curJsonData = baseSchema2JsonData(jsonSchema, jsonData);
  }
  return curJsonData;
}
