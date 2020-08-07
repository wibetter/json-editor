import {
  DataSourceTypeList,
  EventTypeDataList,
  TypeDataList,
} from '$data/TypeDataList';
/**
 * JSONSchema数据对象的通用操作方法【非响应式数据操作方法集合】
 */
import {
  objClone,
  isObject,
  isFunction,
  isArray,
  exitPropertie,
} from '$utils/index';

/** 获取当前字段的类型（format）
 *  如果当前字段没有format字段，则根据type字段赋予默认的类型 */
export function getCurrentFormat(targetJsonData) {
  let currentType = targetJsonData && targetJsonData.format;
  if (!currentType) {
    if (targetJsonData && targetJsonData.type) {
      currentType = targetJsonData.type;
    } else {
      currentType = 'input';
    }
  }
  return currentType;
}

/** 判断是否为空的Schema
 *
 * 包括 通用schema和区块配置专用的schema
 * */
export function isEmptySchema(targetJsonSchema) {
  let isEmpty = true;
  if (!targetJsonSchema) {
    return isEmpty;
  }
  const curType = getCurrentFormat(targetJsonSchema);
  if (
    curType === 'object' &&
    targetJsonSchema.properties &&
    targetJsonSchema.propertyOrder &&
    targetJsonSchema.propertyOrder.length > 0
  ) {
    // Object对象类型
    isEmpty = false;
  } else if (
    curType === 'array' &&
    targetJsonSchema.items &&
    targetJsonSchema.items.properties &&
    targetJsonSchema.items.propertyOrder &&
    targetJsonSchema.items.propertyOrder.length > 0
  ) {
    // Array数组类型
    isEmpty = false;
  } else if (targetJsonSchema.type || targetJsonSchema.format) {
    // 其他基本类型
    isEmpty = false;
  }
  return isEmpty;
}

/** 判断是否为空的WidgetSchema
 * 备注：WidgetSchema 一级字段必须为object，且有三个子属性：func、style、data
 * */
export function isEmptyWidgetSchema(targetJsonSchema) {
  let isEmpty = true;
  if (targetJsonSchema) {
    const curType = getCurrentFormat(targetJsonSchema);
    if (
      curType === 'object' &&
      targetJsonSchema.properties &&
      targetJsonSchema.propertyOrder &&
      targetJsonSchema.propertyOrder.length > 0
    ) {
      const funcSchema = targetJsonSchema.properties.func || {};
      const styleSchema = targetJsonSchema.properties.style || {};
      const dataSchema = targetJsonSchema.properties.data || {};
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
export function isUsedToWidgetConfig(targetJsonSchema) {
  let isWidgetConfig = false;
  if (targetJsonSchema) {
    const curType = getCurrentFormat(targetJsonSchema);
    if (
      curType === 'object' &&
      targetJsonSchema.properties &&
      targetJsonSchema.propertyOrder &&
      targetJsonSchema.properties.func &&
      targetJsonSchema.properties.style &&
      targetJsonSchema.properties.data
    ) {
      isWidgetConfig = true;
    }
  }
  return isWidgetConfig;
}

/**
 *  判断是否是最新版的schema数据
 *  备注：确保当前schema数据是通过@wibetter/json-schema-editor生成的
 * */
export function isNewSchemaData(schemaData) {
  let isNewVersion = false;
  const { lastUpdateTime } = schemaData;
  // 从那一刻开始就认为是新版JSONSchema
  const newVersionTime = new Date('2020-07-29T07:30:00.691Z').getTime();
  if (lastUpdateTime && new Date(lastUpdateTime).getTime() >= newVersionTime) {
    isNewVersion = true;
  }
  return isNewVersion;
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
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
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
      } else if (curIndex) {
        // 1、先根据路径值获取key值
        const curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}

/** 根据索引路径获取对应的key值路径 */
export function indexRoute2keyRoute(indexRoute, targetJsonSchemaObj) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  let curKeyRoute = '';
  const indexRouteArr = indexRoute.split('-');
  for (let index = 0, size = indexRouteArr.length; index < size; index++) {
    // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
    const curIndex = indexRouteArr[index];
    if (curIndex === '0' && curJsonSchemaObj.items) {
      // 从items中获取数据
      curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? `${curKeyRoute}-items` : 'items';
    } else if (curIndex) {
      // 1、先根据路径值获取key值
      const curKey = curJsonSchemaObj.propertyOrder[curIndex];
      // 2、根据key值获取对应的json数据对象
      curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? `${curKeyRoute}-${curKey}` : curKey;
    }
  }
  return curKeyRoute;
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
  // 3.不需要default属性的类型自动删除
  if (
    (newJSONSchema.format === 'quantity' ||
      newJSONSchema.format === 'array' ||
      newJSONSchema.format === 'datasource' ||
      newJSONSchema.format === 'event' ||
      newJSONSchema.format === 'object' ||
      newJSONSchema.format === 'radio' ||
      newJSONSchema.format === 'select') &&
    exitPropertie(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
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
  // 转换旧版的quantity类型的数据结构
  if (newJSONSchema.format === 'quantity') {
    const curProperties = newJSONSchema.properties;
    const newQuantitySchema = objClone(TypeDataList.quantity); // 新版quantity的schema数据对象
    if (
      curProperties.quantity &&
      isObject(curProperties.quantity) &&
      curProperties.quantity.default
    ) {
      const oldDefault = curProperties.quantity.default;
      // percent 自动转换成 %
      newQuantitySchema.properties.quantity.default =
        oldDefault === 'percent' ? '%' : oldDefault;
    }
    // 融合新版schema数据
    newJSONSchema = newQuantitySchema;
  }
  // 转换旧版的datasource类型的数据结构
  if (newJSONSchema.format === 'datasource') {
    const curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    const typeProp = curProperties.type && curProperties.type.default;
    const dataProp = curProperties.data && curProperties.data.default;
    const filterProp = curProperties.filter && curProperties.filter.default;
    if (typeProp === 'local') {
      newJSONSchema = objClone(DataSourceTypeList.local);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : '{}';
    } else {
      newJSONSchema = objClone(DataSourceTypeList.remote);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : 'http://xxx';
    }
    newJSONSchema.properties.filter.default = filterProp
      ? objClone(filterProp)
      : '() => {}';
  }
  // 转换旧版的event类型的数据结构
  if (newJSONSchema.format === 'event') {
    const curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    const eventType = curProperties.type && curProperties.type.default;
    // 重构Event的数据结构
    if (eventType === 'in' || eventType === 'on') {
      // 兼容旧版的'in'和新版的'on'
      // 注册类事件: 新版type改成'on'
      const eventFunc =
        (curProperties.filter && curProperties.filter.default) || '() => {}';
      newJSONSchema = objClone(EventTypeDataList.on);
      if (curProperties.actionFunc && isObject(curProperties.actionFunc)) {
        newJSONSchema.properties.actionFunc.default =
          curProperties.actionFunc.default || objClone(eventFunc);
      }
    } else {
      // 其他，则默认为触发事件
      // 注册类事件: 新版type改成'emit'
      const eventFunc =
        (curProperties.filter && curProperties.filter.default) || '{}';
      newJSONSchema = objClone(EventTypeDataList.emit);
      if (curProperties.eventData && isObject(curProperties.eventData)) {
        newJSONSchema.properties.eventData.default =
          curProperties.eventData.default || objClone(eventFunc);
      }
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
 * 基础类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
export function baseSchema2JsonData(jsonSchema, jsonData) {
  let curJsonData = '';
  let oldValue = jsonData;

  if (
    exitPropertie(oldValue) &&
    exitPropertie(jsonSchema.default) &&
    typeof oldValue !== typeof jsonSchema.default
  ) {
    // 表示当前数据类型发生变化，则丢弃旧版数据
    oldValue = undefined;
  }
  /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
  let curValue = exitPropertie(oldValue) ? oldValue : jsonSchema.default;
  switch (jsonSchema.type) {
    case 'string':
      if (jsonSchema.format === 'typeSelect') {
        // 选择类型的字段直接使用schema中的数值
        curJsonData = jsonSchema.default;
      } else if (jsonSchema.format === 'color') {
        if (curValue === '#fff' || curValue === '#FFF') {
          curValue = '#ffffff'; // 避免出现#fff类型的值，type=color不能识别
        }
        curJsonData = curValue || '#ffffff';
      } else if (jsonSchema.format === 'json') {
        /** 转成json类型进行特殊处理
         * 需要保证json类型的数值是json对象 */
        let curJsonItemData = ''; // 字符串类型的json数据
        // 判断当前jsonData是否是对象类型
        if (isObject(jsonData) || isArray(jsonData)) {
          curJsonItemData = jsonData;
        } else if (isFunction(jsonData) || jsonData === '') {
          // 函数类型自动替换成默认的json数据"{}"
          curJsonItemData = {};
        } else {
          /** 当前的curJsonData是一个字符串，需要判断是否可以系列化成一个json对象
           * 如果不能系列化一个json对象，则自动转换成一个默认的json数据"{}"
           */
          try {
            // 进行格式化（检查是否是合格的json数据）
            curJsonItemData = JSON.parse(jsonData);
          } catch (err) {
            // 不合格的json数据自动转换成一个默认的json数据"{}"
            curJsonItemData = {};
          }
        }
        curJsonData = curJsonItemData;
      } else {
        // 其他类型允许出现空字符串
        curJsonData = exitPropertie(curValue) ? curValue : '';
      }
      break;
    case 'boolean':
      curJsonData = exitPropertie(curValue) ? curValue : false;
      break;
    case 'number':
      curJsonData = exitPropertie(curValue) ? curValue : 1;
      break;
    default:
      curJsonData = exitPropertie(curValue) ? curValue : '';
  }

  return curJsonData;
}

/**
 * Object类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
export function objectSchema2JsonData(jsonSchema, jsonData) {
  let curJsonData = {};
  const curType = getCurrentFormat(jsonSchema);
  if (isObject(jsonSchema) && jsonSchema.type === 'object') {
    const jsonItem = jsonSchema;
    let oldValue = jsonData;
    if (
      exitPropertie(oldValue) &&
      exitPropertie(jsonItem.default) &&
      typeof oldValue !== typeof jsonItem.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = exitPropertie(oldValue) ? oldValue : jsonItem.default;

    if (curType === 'datasource') {
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
    } else if (jsonSchema.properties && jsonSchema.propertyOrder) {
      // 其他非固定格式的Object类型
      jsonSchema.propertyOrder.map((jsonKey) => {
        const curJsonItem = jsonSchema.properties[jsonKey];
        const curOldValue = jsonData && jsonData[jsonKey];
        switch (curJsonItem.type) {
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
export function arraySchema2JsonData(jsonSchema, jsonData) {
  let curJsonData = [];
  // 判断是否是数组类型
  if (jsonSchema && jsonSchema.type === 'array') {
    // Array数据对象类型
    let oldValue = jsonData;
    if (
      exitPropertie(oldValue) &&
      exitPropertie(jsonSchema.default) &&
      typeof oldValue !== typeof jsonSchema.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = exitPropertie(oldValue) ? oldValue : jsonSchema.default;

    if (jsonSchema.format === 'array') {
      if (isArray(curValue)) {
        curValue.map((arrItem) => {
          curJsonData.push(objectSchema2JsonData(jsonSchema.items, arrItem));
        });
      } else {
        const childItems = objectSchema2JsonData(jsonSchema.items, curValue);
        curJsonData.push(childItems);
      }
    } else {
      // 考虑select类型（多选的数值也是以array对象记录）
      curJsonData = exitPropertie(curValue) ? curValue : [];
    }
  }
  return curJsonData;
}

/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
export function schema2JsonData(jsonSchema, jsonData) {
  let curJsonData = {};
  if (jsonSchema.type === 'object') {
    curJsonData = objectSchema2JsonData(jsonSchema, jsonData);
  } else if (jsonSchema.type === 'array') {
    curJsonData = arraySchema2JsonData(jsonSchema, jsonData);
  } else {
    curJsonData = baseSchema2JsonData(jsonSchema, jsonData);
  }
  return curJsonData;
}
