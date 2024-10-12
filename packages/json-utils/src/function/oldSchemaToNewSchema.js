/**
 * oldSchemaToNewSchema：旧版jsonSchema转新版jsonSchema
 * 新版新增propertyOrder属性（排序展示需要），因此旧版的required需要根据properties生成对应的propertyOrder属性
 * 备注：新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */
import { objClone, hasProperties } from '$utils/index';
import { isObject } from '$utils/typeof';
import {
  DataSourceTypeList,
  EventTypeDataList,
  TypeDataList,
} from '$data/TypeDataList';

// 2020-07-29
export function oldSchemaToNewSchemaV1(oldSchema) {
  let newJSONSchema = objClone(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值
  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  }
  // 2.当format为空时重新进行赋值
  if (!newJSONSchema.type) {
    newJSONSchema.type = newJSONSchema.format;
  }
  // 3.不需要default属性的类型自动删除
  if (
    (newJSONSchema.type === 'quantity' ||
      newJSONSchema.type === 'array' ||
      newJSONSchema.type === 'datasource' ||
      newJSONSchema.type === 'event' ||
      newJSONSchema.type === 'object' ||
      newJSONSchema.type === 'radio' ||
      newJSONSchema.type === 'checkboxes') &&
    hasProperties(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  }
  // 转换旧版的radio类型的数据结构
  if (newJSONSchema.type === 'radio') {
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
  if (newJSONSchema.type === 'quantity') {
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
  if (newJSONSchema.type === 'datasource') {
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
  if (newJSONSchema.type === 'event') {
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
    if (!newJSONSchema.propertyOrder) {
      // 生成propertyOrder属性
      newJSONSchema.propertyOrder = Object.keys(newJSONSchema.properties);
    }
    // 继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map((jsonKey) => {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  // 判断是否有items属性
  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}

// 2024-10-05 之前的旧版转新版schema
export function oldSchemaToNewSchema(oldSchema) {
  let newJSONSchema = objClone(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 删除不需要的属性
  if (!newJSONSchema.required) {
    delete newJSONSchema.required;
  }
  if (newJSONSchema.type && newJSONSchema.type) {
    newJSONSchema.type = newJSONSchema.type;
  }
  // 不需要default属性的类型自动删除
  if (
    (newJSONSchema.type === 'quantity' ||
      newJSONSchema.type === 'array' ||
      newJSONSchema.type === 'datasource' ||
      newJSONSchema.type === 'event' ||
      newJSONSchema.type === 'object' ||
      newJSONSchema.type === 'radio' ||
      newJSONSchema.type === 'checkboxes') &&
    hasProperties(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  }
  // 转换旧版的选择类型的数据结构
  if (
    newJSONSchema.type === 'radio' ||
    newJSONSchema.type === 'checkboxes' ||
    newJSONSchema.type === 'single-select'
  ) {
    if (
      newJSONSchema.items &&
      newJSONSchema.items.enum &&
      newJSONSchema.items.enumextra
    ) {
      newJSONSchema.options = [];
      newJSONSchema.items.enum.forEach((option, optionIndex) => {
        newJSONSchema.options.push({
          label: newJSONSchema.items.enumextra[optionIndex] || option,
          value: option,
        });
      });
      // 删除此前的items
      delete newJSONSchema.items;
    }
  }
  // 判断是否有propertyOrder属性
  if (newJSONSchema.properties) {
    if (!newJSONSchema.propertyOrder) {
      // 生成propertyOrder属性
      newJSONSchema.propertyOrder = Object.keys(newJSONSchema.properties);
    }
    // 继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map((jsonKey) => {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  if (newJSONSchema.type === 'array' && newJSONSchema.items) {
    // 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}
