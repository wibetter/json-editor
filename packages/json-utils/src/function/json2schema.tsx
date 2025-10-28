/**
 * json2schema：根据json数据内容获取对应的schema数据
 * 当前包含三个转换方法：baseJson2Schema、objectJson2Schema、arrayJson2Schema
 * */
import { objClone } from '$utils/index';
import {
  EventTypeDataList,
  DataSourceTypeList,
  TypeDataList,
} from '$data/TypeDataList';
import {
  isURL,
  isColor,
  isNumber,
  isBoolean,
  isQuantity,
  isDateStr,
  isDateTimeStr,
  isTimeStr,
  isArray,
  isSelect,
  isObject,
} from '$utils/typeof';

/**
 * 基础类型的jsonData转schema
 * 备注：目前可转换Boolean、Number、URL、Date、DateTime、Time、color、json类型
 * 其中textarea、radio、codearea和htmlarea的数值不好和input区分，故均转换为input类型
 * */
function baseJson2Schema(jsonData) {
  let curJsonSchema = '';
  if (isBoolean(jsonData)) {
    // 1、Boolean类型
    curJsonSchema = objClone(TypeDataList.boolean);
  } else if (isNumber(jsonData)) {
    // 2、Number类型
    curJsonSchema = objClone(TypeDataList.number);
  } else if (isURL(jsonData)) {
    // 3、URL类型
    curJsonSchema = objClone(TypeDataList.url);
  } else if (isDateStr(jsonData)) {
    // 4、Date类型
    curJsonSchema = objClone(TypeDataList.date);
  } else if (isDateTimeStr(jsonData)) {
    // 5、DateTime类型
    curJsonSchema = objClone(TypeDataList['date-time']);
  } else if (isTimeStr(jsonData)) {
    // 6、Time类型
    curJsonSchema = objClone(TypeDataList.time);
  } else if (isColor(jsonData)) {
    // 7、Color类型
    curJsonSchema = objClone(TypeDataList.color);
  } else {
    try {
      // json数据类型：进行格式化（检查是否是合格的json字符串数据）
      const jsonDataObj = JSON.parse(jsonData);
      if (isNumber(jsonDataObj)) {
        // 简单数字字符串类型数值统一认为是字符串类型
        curJsonSchema = objClone(TypeDataList.input);
      } else {
        // 排除简单数字字符串类型数值
        curJsonSchema = objClone(TypeDataList.json);
      }
    } catch (err) {
      // textarea类型
      if (jsonData && jsonData.length > 30) {
        // 字符串长度超过50则认为是codearea类型
        curJsonSchema = objClone(TypeDataList.textarea);
      } else {
        // 其他类型(input、radio、codearea、htmlarea)
        curJsonSchema = objClone(TypeDataList.input);
      }
    }
  }
  return curJsonSchema;
}

/**
 * Object类型的jsonData转schema
 * 备注：目前可转换datasource、event、quantity、object四种对象类型
 * */
function objectJson2Schema(jsonData) {
  let curJsonSchema;
  if (isObject(jsonData)) {
    const properties = Object.keys(jsonData);
    if (jsonData.data && jsonData.filter && properties.length === 2) {
      // DataSource数据源类型
      if (isArray(jsonData.data) || isObject(jsonData.data)) {
        // 本地数据源类型
        curJsonSchema = objClone(DataSourceTypeList.local);
      } else {
        // 远程数据源类型
        curJsonSchema = objClone(DataSourceTypeList.remote);
      }
    } else if (
      jsonData.trigger &&
      jsonData.eventData &&
      properties.length === 2
    ) {
      // 触发事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.emit);
    } else if (
      jsonData.register &&
      jsonData.actionFunc &&
      properties.length === 2
    ) {
      // 注册事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.on);
    } else if (
      jsonData.quantity &&
      isQuantity(jsonData.quantity) &&
      properties.length === 2
    ) {
      // 计量单位类型（固定格式的Object类型）
      curJsonSchema = objClone(TypeDataList.quantity);
    } else {
      // 其他非固定格式的Object类型
      curJsonSchema = objClone(TypeDataList['empty-object']); // 新建空数组对象schema
      // 遍历子数据项目
      Object.keys(jsonData).map((jsonKey) => {
        const curJsonItem = jsonData[jsonKey];
        curJsonSchema.properties[jsonKey] = json2schema(curJsonItem);
      });
    }
  }
  return curJsonSchema;
}

/**
 * Array类型的jsonData转schema
 * 备注：目前可转换select、array两种数组类型
 * */
function arrayJson2Schema(jsonData) {
  let curJsonSchema;
  // 判断是否是数组类型
  if (jsonData && isArray(jsonData)) {
    // 判断是否select类型（select类型是字符串类型的array）
    if (isSelect(jsonData)) {
      curJsonSchema = objClone(TypeDataList.select);
      // 将当前jsonData的值设置为select的选项值
      curJsonSchema.items.enum = jsonData;
      const enumextraLength = curJsonSchema.items.enumextra.length;
      const arrLength = jsonData.length;
      if (arrLength > enumextraLength) {
        // 如果当前jsonDats的数值个数大于selectSchemaData的选项个数，则需要进行补充
        for (let ind = enumextraLength, size = arrLength; ind < size; ind++) {
          curJsonSchema.items.enumextra.push(`选项${jsonData(ind)}`);
        }
      }
    } else {
      curJsonSchema = objClone(TypeDataList['empty-array']); // 新建空数组对象schema
      // 根据第一个数组项获取items的schema对象
      const arrItemObj = json2schema(jsonData[0]); // 正常情况下，Array的一级子对象是Object类型
      curJsonSchema.items.properties = arrItemObj.properties;
    }
  }
  return curJsonSchema;
}

/**
 * 根据jsonData生成一份对应的jsonSchema
 * */
export function json2schema(jsonData) {
  let curJsonSchema = {};
  if (jsonData && isObject(jsonData)) {
    curJsonSchema = objectJson2Schema(jsonData);
  } else if (jsonData && isArray(jsonData)) {
    curJsonSchema = arrayJson2Schema(jsonData);
  } else {
    curJsonSchema = baseJson2Schema(jsonData);
  }
  return curJsonSchema;
}
