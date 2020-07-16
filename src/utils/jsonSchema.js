import { EventTypeDataList } from '$data/TypeDataList';
/**
 * JSONSchema数据对象的通用操作方法【非响应式数据操作方法集合】
 */
import { objClone, isObject } from '$utils/index';
import { isArray } from './index';

/** 获取当前字段的类型（format）
 *  如果当前字段没有format字段，则根据type字段赋予默认的类型 */
export function getCurrentFormat(targetJsonData) {
  let currentType = targetJsonData.format;
  if (!currentType) {
    if (targetJsonData.type) {
      currentType = targetJsonData.type;
    } else {
      currentType = 'input';
    }
  }
  return currentType;
}

/** 【校验是否是合法的JsonSchema数据格式】
 *  主要判断当前JSON对象中是否有预先定义的属性：
 *  Object类型必须有的属性：type、format、title、properties、required、propertyOrder；
 *  Array类型必须有的属性：type、format、title、properties、propertyOrder；
 *  基本数据类型必须有的属性：type、title、format
 * */
export function isJSONSchemaFormat(targetJsonObj) {
  let isFormat = false;
  if (targetJsonObj.type) {
    if (
      targetJsonObj.type === 'object' &&
      targetJsonObj.format &&
      targetJsonObj.title &&
      targetJsonObj.properties &&
      targetJsonObj.required &&
      targetJsonObj.propertyOrder
    ) {
      isFormat = true;
    } else if (
      targetJsonObj.type === 'array' &&
      targetJsonObj.format &&
      targetJsonObj.title &&
      targetJsonObj.properties &&
      targetJsonObj.propertyOrder
    ) {
      isFormat = true;
    } else if (targetJsonObj.format && targetJsonObj.title) {
      isFormat = true;
    }
  }
  return isFormat;
}

/** 判断是否为空的jsonSchema
 * 备注：一级字段必须为object，用于规避非法的jsonSchema数据，以及结构单一的jsonSchema数据，
 * 后续再单独考虑如何兼容单一结构的jsonSchema数据。
 * */
export function isEmptySchema(targetJsonObj) {
  let isEmpty = true;
  if (targetJsonObj) {
    const curType = getCurrentFormat(targetJsonObj);
    if (
      curType === 'object' &&
      targetJsonObj.properties &&
      targetJsonObj.propertyOrder &&
      targetJsonObj.propertyOrder.length > 0
    ) {
      const funcSchema = targetJsonObj.properties.func;
      const styleSchema = targetJsonObj.properties.style;
      const dataSchema = targetJsonObj.properties.data;
      if (
        (funcSchema.propertyOrder && funcSchema.propertyOrder.length > 0) ||
        (styleSchema.propertyOrder && styleSchema.propertyOrder.length > 0) ||
        (dataSchema.propertyOrder && dataSchema.propertyOrder.length > 0)
      ) {
        isEmpty = false;
      }
    }
  }
  return isEmpty;
}

/** 判断是否为用于区块配置的jsonSchema数据（
 * 备注：一级字段必须为object（用于规避非法的jsonSchema数据，以及结构单一的jsonSchema数据）
 * 且具备固定的三个子属性（func、style、data）
 * */
export function isUsedToJDWconfig(targetJsonObj) {
  let isUsed = false;
  if (targetJsonObj) {
    const curType = getCurrentFormat(targetJsonObj);
    if (
      curType === 'object' &&
      targetJsonObj.properties &&
      targetJsonObj.func &&
      targetJsonObj.style &&
      targetJsonObj.data
    ) {
      isUsed = true;
    }
  }
  return isUsed;
}

/** 根据索引路径获取对应的json数据  */
export function getJSONDataByIndex(
  indexRoute,
  targetJsonSchemaObj,
  useObjClone,
) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (indexRoute) {
    const indexRouteArr = indexRoute.split('-');
    for (let index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据，使用isJSONSchemaFormat进行校验）
      const curIndex = indexRouteArr[index];
      if (
        curIndex === '0' &&
        (curJsonSchemaObj.format === 'array' ||
          curJsonSchemaObj.format === 'radio' ||
          curJsonSchemaObj.format === 'select') &&
        curJsonSchemaObj.items
      ) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.items;
      } else {
        // 1、先根据路径值获取key值
        const curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}

/** 根据format判断是否是容器类型字段
 *  容器类型字段：func、style、data、object
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 * */
export function isBoxSchemaData(format) {
  let isBoxSchema = false;
  if (
    format === 'func' ||
    format === 'style' ||
    format === 'data' ||
    format === 'object'
  ) {
    isBoxSchema = true;
  }
  return isBoxSchema;
}

/** 根据format判断是否是一级类型字段
 *  一级类型字段：func、style、data
 *  备注：一级类型字段不允许拖拽和复制
 * */
export function isFirstSchemaData(format) {
  let isFirstSchema = false;
  if (format === 'func' || format === 'style' || format === 'data') {
    isFirstSchema = true;
  }
  return isFirstSchema;
}

/** 【旧版jsonSchema转新版jsonSchema】
 * 新版有propertyOrder属性，旧版的required需要根据properties重新生成一份
 * 新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */
export function oldJSONSchemaToNewJSONSchema(oldJSONSchema) {
  let newJSONSchema = objClone(oldJSONSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值
  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  }
  // 2.当format为空时重新进行赋值
  if (!newJSONSchema.format) {
    newJSONSchema.format = getCurrentFormat(newJSONSchema);
  }
  // 转换旧版的radio类型的数据结构
  if (newJSONSchema.format === 'radio') {
    newJSONSchema.type = 'string';
    if (newJSONSchema.enum && newJSONSchema.enumextra) {
      // 统一转换至items
      newJSONSchema.items = {
        type: 'string',
        enum: objClone(newJSONSchema.enum),
        enumextra: objClone(newJSONSchema.enumextra),
      };
      // 删除此前的enum、enumextra
      delete newJSONSchema.enum;
      delete newJSONSchema.enumextra;
    }
  }
  // 转换旧版的datasource类型的数据结构
  if (newJSONSchema.format === 'datasource') {
    const curProperties = newJSONSchema.properties;
    curProperties.type.title = '数据源类型';
    curProperties.filter.title = '过滤器';
    curProperties.filter.format = 'codearea';
    if (curProperties.type.default === 'remote') {
      curProperties.data.title = '用于设置获取元素数据的请求地址';
      curProperties.data.format = 'url';
    } else {
      curProperties.data.title = '本地静态json数据';
      curProperties.data.format = 'json';
    }
  }
  // 转换旧版的quantity类型的数据结构
  if (newJSONSchema.format === 'quantity') {
    const curProperties = newJSONSchema.properties;
    curProperties.quantity.title = '单位类型';
    curProperties.quantity.format = 'typeSelect';
    curProperties.unit.format = 'number';
  }
  // 转换旧版的event类型的数据结构
  if (newJSONSchema.format === 'event') {
    const curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    const eventType = curProperties.type.default;
    const eventFunc =
      (curProperties.filter && curProperties.filter.default) || '() => {}';
    // 重构Event的数据结构
    if (eventType === 'in') {
      // 注册类事件
      // newJSONSchema = Object.assign(newJSONSchema, EventTypeDataList.on);
      newJSONSchema = objClone(EventTypeDataList.on);
      newJSONSchema.properties.actionFunc.default = objClone(eventFunc);
    } else {
      // 其他，则默认为触发事件
      // 注册类事件
      // newJSONSchema = Object.assign(newJSONSchema, EventTypeDataList.emit);
      newJSONSchema = objClone(EventTypeDataList.emit);
      newJSONSchema.properties.eventData.default = eventFunc;
    }
  }
  // 判断是否有propertyOrder属性
  if (newJSONSchema.properties) {
    // 3.重新生成required属性
    newJSONSchema.required = Object.keys(newJSONSchema.properties);
    if (!newJSONSchema.propertyOrder) {
      // 4.生成propertyOrder属性
      newJSONSchema.propertyOrder = newJSONSchema.required;
    }
    // 5.继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map((jsonKey) => {
      newJSONSchema.properties[jsonKey] = oldJSONSchemaToNewJSONSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  // 判断是否有items属性
  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldJSONSchemaToNewJSONSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}

/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
export function schema2JsonData(jsonSchema, jsonData) {
  const curJsonData = {};
  if (isObject(jsonSchema)) {
    // 判断是否有propertyOrder属性
    if (jsonSchema.properties) {
      jsonSchema.propertyOrder.map((jsonKey) => {
        const jsonItem = jsonSchema.properties[jsonKey];
        let oldValue =
          jsonData && jsonData[jsonKey] ? jsonData[jsonKey] : undefined;
        if (
          oldValue &&
          jsonItem.default &&
          typeof oldValue !== typeof jsonItem.default
        ) {
          // 表示当前数据类型发生变化，则丢弃旧版数据
          oldValue = undefined;
        }
        /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
        const curValue = oldValue !== undefined ? oldValue : jsonItem.default;
        switch (jsonItem.type) {
          case 'string':
            if (
              jsonItem.format === 'codearea' ||
              jsonItem.format === 'json' ||
              jsonItem.format === 'htmlarea' ||
              jsonItem.format === 'color'
            ) {
              // 特殊类型尽可能避免出现空字符串
              curJsonData[jsonKey] = oldValue || jsonItem.default || '';
            } else {
              // 其他类型
              curJsonData[jsonKey] = curValue !== undefined ? curValue : '';
            }
            break;
          case 'boolean':
            curJsonData[jsonKey] = curValue !== undefined ? curValue : false;
            break;
          case 'number':
            curJsonData[jsonKey] = curValue !== undefined ? curValue : 1;
            break;
          case 'array':
            if (jsonItem.format === 'array') {
              if (isArray(oldValue)) {
                curJsonData[jsonKey] = [];
                oldValue.map((arrItem) => {
                  curJsonData[jsonKey].push(
                    schema2JsonData(jsonItem.items, arrItem),
                  );
                });
              } else {
                const childItems = schema2JsonData(jsonItem.items, oldValue);
                curJsonData[jsonKey] = [childItems];
              }
            } else {
              curJsonData[jsonKey] = curValue !== undefined ? curValue : [];
            }
            break;
          case 'object':
            if (jsonItem.format === 'datasource') {
              // 数据源类型
              if (
                jsonItem.properties &&
                jsonItem.properties.type &&
                jsonItem.properties.type.default &&
                jsonItem.properties.type.default === 'local'
              ) {
                // 本地数据源类型
                curJsonData[jsonKey] = oldValue || {
                  data: '{}',
                  filter: '() => {}',
                };
                // 纠正data中的默认数据
                if (curJsonData[jsonKey].data === 'http://xxx') {
                  curJsonData[jsonKey].data = '{}';
                }
              } else {
                // 远程数据类型
                curJsonData[jsonKey] = oldValue || {
                  data: 'http://xxx',
                  filter: '() => {}',
                };
                // 纠正data中的默认数据
                if (curJsonData[jsonKey].data === '{}') {
                  curJsonData[jsonKey].data = 'http://xxx';
                }
              }
            } else if (jsonItem.format === 'event') {
              // 事件类型
              if (
                jsonItem.properties &&
                jsonItem.properties.type &&
                jsonItem.properties.type.default &&
                jsonItem.properties.type.default === 'emit'
              ) {
                // 触发事件类型
                if (oldValue && oldValue.type === 'emit') {
                  curJsonData[jsonKey] = oldValue;
                } else {
                  curJsonData[jsonKey] = {
                    trigger: (oldValue && oldValue.filter) || '', // 兼容旧版数据
                    eventData: '{}',
                  };
                }
              } else {
                // 注册事件类型-触发事件类型
                if (oldValue && oldValue.type === 'on') {
                  curJsonData[jsonKey] = oldValue;
                } else {
                  curJsonData[jsonKey] = {
                    register: '',
                    actionFunc: (oldValue && oldValue.filter) || '() => {}', // 兼容旧版数据
                  };
                }
              }
            } else {
              // 普通对象类型
              curJsonData[jsonKey] = schema2JsonData(jsonItem, oldValue);
            }
            break;
          default:
            curJsonData[jsonKey] = curValue !== undefined ? curValue : '';
        }
      });
    }
  }
  return curJsonData;
}
