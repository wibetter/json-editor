import { observable, computed, action, toJS } from 'mobx';
import { message } from 'antd';
import {
  getParentIndexRoute,
  getParentIndexRoute_CurIndex,
  getJSONDataByIndex,
  oldJSONSchemaToNewJSONSchema,
} from '$utils/jsonSchema';
import { objClone } from '$utils/index';
import { TypeList } from '$data/TypeList';
import { isBoxSchemaData } from '$utils/jsonSchema';
import { initJSONSchemaData, initInputData } from '$data/index';

/**
 * 用于管控JSON结构的全局store
 * */

export default class JSONSchemaStore {
  /** 主要用于自动生成jsonKey中的index */
  curJsonKeyIndex = 1; // 非响应式
  /**
   * triggerChange: 用于强制触发更新事件
   */
  @observable triggerChange = false;
  /**
   * jsonSchema: JSONSchema数据对象
   */
  @observable jsonSchema = {};

  /**
   * triggerChangeAction: 用于主动触发更新事件
   */
  @action.bound
  triggerChangeAction() {
    this.triggerChange = !this.triggerChange;
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  initJSONSchemaData(jsonSchemaData) {
    if (!jsonSchemaData || JSON.stringify(jsonSchemaData) === '{}') {
      // 使用默认的jsonschema数据进行初始化
      this.jsonSchema = objClone(initJSONSchemaData);
    } else {
      // 进行一次转换，以便兼容旧版数据
      const newJSONSchema = oldJSONSchemaToNewJSONSchema(jsonSchemaData);
      this.jsonSchema = newJSONSchema;
    }
    this.curJsonKeyIndex = 1; // 每次初始化，都需要重置curJsonKeyIndex值
  }

  @computed get JSONSchemaObj() {
    return toJS(this.jsonSchema);
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  getJSONDataByIndex(indexRoute) {
    return getJSONDataByIndex(indexRoute, this.jsonSchema, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据parentJSONObj自动生成jsonKey */
  @action.bound
  getNewJsonKeyIndex(parentJSONObj, prefix) {
    let newJsonKeyIndex = `${prefix ? prefix : 'field'}_${
      this.curJsonKeyIndex
    }`;
    if (parentJSONObj.propertyOrder.indexOf(newJsonKeyIndex) >= 0) {
      // 表示存在相同的jsonKey
      this.curJsonKeyIndex += 1;
      newJsonKeyIndex = this.getNewJsonKeyIndex(parentJSONObj);
    }
    this.curJsonKeyIndex += 1;
    return newJsonKeyIndex;
  }

  /** 判断是否有重名key值 */
  @action.bound
  isExitJsonKey(indexRoute, jsonKey) {
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = this.getJSONDataByIndex(parentIndexRoute);
    if (
      parentJSONObj.propertyOrder &&
      parentJSONObj.propertyOrder.indexOf(jsonKey) >= 0
    ) {
      // 表示存在相同的jsonKey
      return true;
    }
    return false;
  }

  /** 判断是否支持当前类型 */
  @action.bound
  isSupportCurType(indexRoute, curType) {
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = this.getJSONDataByIndex(parentIndexRoute);
    const parantTypeList = TypeList[parentJSONObj.format];
    if (parantTypeList && parantTypeList.indexOf(curType) >= 0) {
      // 表示支持当前类型
      return true;
    }
    return false;
  }

  /** 根据索引路径值(indexRoute)插入新的子元素-json数据对象(childJson)
   *  备注：关键字(childKey)自动生成，json数据对象(childJson)默认使用initInputData
   * */
  @action.bound
  addChildJson(curIndexRoute) {
    const curJSONObj = getJSONDataByIndex(curIndexRoute, this.jsonSchema);
    if (isBoxSchemaData(curJSONObj.format)) {
      const childKey = this.getNewJsonKeyIndex(curJSONObj);
      curJSONObj.required.push(childKey);
      curJSONObj['propertyOrder'].push(childKey);
      curJSONObj.properties[childKey] = initInputData;
    } else {
      // 注：非数组和对象类型字段不允许插入子元素
      message.warning('非对象类型字段不允许插入子元素');
    }
  }

  /** 根据索引路径值(indexRoute)编辑对应的json数据对象
   *  备注：用于编辑对应的属性值（type、title、description、placeholder、isRequired、default、readOnly）
   * */
  @action.bound
  editJsonData(curIndexRoute, jsonKey, newJsonDataObj) {
    const parentIndexRoute = getParentIndexRoute(curIndexRoute);
    const parentJSONObj = getJSONDataByIndex(parentIndexRoute, this.jsonSchema);
    parentJSONObj.properties[jsonKey] = Object.assign(
      {},
      objClone(parentJSONObj.properties[jsonKey]),
      newJsonDataObj,
    );
    console.log(this.JSONSchemaObj);
  }

  /** 根据索引路径值(indexRoute)编辑对应的json数据对象
   *  备注：用于覆盖整个json对象
   * */
  @action.bound
  updateJsonData(curIndexRoute, newJsonDataObj) {
    const curJSONObj = getJSONDataByIndex(curIndexRoute, this.jsonSchema);
    Object.assign(curJSONObj, objClone(newJsonDataObj));
    console.log(this.JSONSchemaObj);
  }

  /** 根据索引路径值(indexRoute)编辑对应的jsonKey
   *  备注：仅用于修改jsonKey值
   * */
  @action.bound
  editJsonKey(curIndexRoute, newJsonKey) {
    const curJSONObj = getJSONDataByIndex(curIndexRoute, this.jsonSchema, true); // 最后参数true用于避免数据关联
    // 先插入对象值
    this.insertJsonData(curIndexRoute, newJsonKey, curJSONObj);
    // 再删除原有的json数据对象
    this.deleteJsonByIndex(curIndexRoute);
    console.log(this.JSONSchemaObj);
  }

  /** 根据索引路径值(indexRoute)插入新的兄弟节点元素-json数据对象
   *  备注：关键字(childKey)自动生成，json数据对象默认使用initInputData
   * */
  @action.bound
  addNextJsonData(curIndexRoute) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute = getParentIndexRoute(curIndexRoute);
    // 2.生成新的jsonKey值
    const parentJSONObj = getJSONDataByIndex(parentIndexRoute, this.jsonSchema);
    /** 如果没有设置jsonKey，则自动生成一个新的jsonKey */
    const newJsonKey = this.getNewJsonKeyIndex(parentJSONObj);
    this.insertJsonData(curIndexRoute, newJsonKey, initInputData); // 默认新增input类型字段
  }

  /** 根据索引路径值(indexRoute)插入指定的json数据对象（jsonKey、curJSONObj）
   * position（非必填）: after（表示插入到指定位置后面，默认值）、before（表示插入到指定位置前面）
   * */
  @action.bound
  insertJsonData(curIndexRoute, jsonKey, curJSONObj, position) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute_CurIndex = getParentIndexRoute_CurIndex(
      curIndexRoute,
    );
    const parentIndexRoute = parentIndexRoute_CurIndex[0];
    const curIndex = parentIndexRoute_CurIndex[1];
    // 2.获取父级元素
    const parentJSONObj = getJSONDataByIndex(parentIndexRoute, this.jsonSchema);
    // 3.插入新增的对象数据
    parentJSONObj.required.push(jsonKey);
    parentJSONObj.properties[jsonKey] = curJSONObj;
    // 4.在propertyOrder的对应位置插入newJsonKey【有序插入newJsonKey】
    const currentPropertyOrder = parentJSONObj['propertyOrder'];
    // 5.获取插入位置
    const positionIndex =
      position === 'before' ? Number(curIndex) : Number(curIndex) + 1;
    const startArr = currentPropertyOrder.slice(0, positionIndex);
    const endArr = currentPropertyOrder.slice(positionIndex);
    parentJSONObj['propertyOrder'] = [...startArr, jsonKey, ...endArr];
  }

  /** 根据索引路径值(indexRoute)和关键字(childKey)删除对应的json数据对象 */
  @action.bound
  deleteJsonByIndex_CurKey(indexRoute, curKey) {
    // 1.获取当前元素的父元素路径值
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJsonObj = getJSONDataByIndex(parentIndexRoute, this.jsonSchema);
    // 2.根据curKey删除在properties中删除对应的字段对象
    delete parentJsonObj.properties[curKey];
    // 3.删除propertyOrder中对应的curKey
    const deleteIndex = parentJsonObj.propertyOrder.indexOf(curKey);
    parentJsonObj.propertyOrder.splice(deleteIndex, 1);
    // 4.删除required中对应的curKey
    const deleteIndex2 = parentJsonObj.required.indexOf(curKey);
    parentJsonObj.required.splice(deleteIndex2, 1);
  }

  /** 根据索引路径值(indexRoute)删除对应的json数据对象 */
  @action.bound
  deleteJsonByIndex(indexRoute) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute_CurIndex = getParentIndexRoute_CurIndex(indexRoute);
    const parentIndexRoute = parentIndexRoute_CurIndex[0];
    const curIndex = parentIndexRoute_CurIndex[1];
    const parentJsonObj = getJSONDataByIndex(parentIndexRoute, this.jsonSchema);
    const curKey = parentJsonObj.propertyOrder[curIndex];
    // 2.根据curKey删除在properties中删除对应的字段对象
    delete parentJsonObj.properties[curKey];
    // 3.删除propertyOrder中对应的curKey
    const deleteIndex = parentJsonObj.propertyOrder.indexOf(curKey);
    parentJsonObj.propertyOrder.splice(deleteIndex, 1);
    // 4.删除required中对应的curKey
    const deleteIndex2 = parentJsonObj.required.indexOf(curKey);
    parentJsonObj.required.splice(deleteIndex2, 1);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素
   * */
  @action.bound
  updateEnumItem(indexRoute, enumIndex, newEnumKey, newEnumText) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum && itemJSONObj.enumextra) {
      itemJSONObj.enum[enumIndex] = newEnumKey;
      itemJSONObj.enumextra[enumIndex] = newEnumText;
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)判断是否存在对应的key值
   * */
  @action.bound
  isExitEnumKey(indexRoute, enumIndex, newEnumKey) {
    let isExit = false;
    // 1.获取当前元素的父元素
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum) {
      // 2.获取对应的key清单
      const enumKeys = objClone(itemJSONObj.enum);
      if (enumIndex >= 0) {
        // 3.剔除原有位置的key值
        enumKeys.splice(enumIndex, 1);
      }
      // 4.判断其他位置是否有重复的key值
      if (enumKeys.indexOf(newEnumKey) >= 0) {
        isExit = true;
      }
    }
    return isExit;
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素的key值
   * */
  @action.bound
  updateEnumKey(indexRoute, enumIndex, newEnumKey) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum) {
      // 2.更新对应的key
      itemJSONObj.enum[enumIndex] = newEnumKey;
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素的text值
   * */
  @action.bound
  updateEnumText(indexRoute, enumIndex, newEnumText) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enumextra) {
      // 2.更新对应的text
      itemJSONObj.enumextra[enumIndex] = newEnumText;
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)删除对应的enum枚举元素
   * */
  @action.bound
  deleteEnumItem(indexRoute, enumIndex) {
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum && itemJSONObj.enumextra) {
      itemJSONObj.enum.splice(enumIndex, 1);
      itemJSONObj.enumextra.splice(enumIndex, 1);
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)插入对应的enum枚举元素
   * position: 设置插入指定位置的前面还是后面，默认插入指定位置的后面
   * */
  @action.bound
  insertEnumItem(indexRoute, enumIndex, newEnumKey, newEnumText, position) {
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum && itemJSONObj.enumextra) {
      const positionIndex =
        position === 'before' ? Number(enumIndex) : Number(enumIndex) + 1;
      // 在enum中的指定位置插入新的key值（newEnumKey）
      const startKeys = itemJSONObj.enum.slice(0, positionIndex);
      const endKeys = itemJSONObj.enum.slice(positionIndex);
      itemJSONObj.enum = [...startKeys, newEnumKey, ...endKeys];
      // 在enum中的指定位置插入newEnumText
      const startTexts = itemJSONObj.enumextra.slice(0, positionIndex);
      const endTexts = itemJSONObj.enumextra.slice(positionIndex);
      itemJSONObj.enumextra = [...startTexts, newEnumText, ...endTexts];
    }
  }

  /** 根据parentJSONObj自动生成jsonKey */
  @action.bound
  getNewEnumIndex(enumKeys, prefix) {
    let newEnumKey = `${prefix ? prefix : 'enum'}_${this.curJsonKeyIndex}`;
    if (enumKeys.indexOf(newEnumKey) >= 0) {
      // 表示存在相同的jsonKey
      this.curJsonKeyIndex += 1;
      newEnumKey = this.getNewEnumIndex(enumKeys, prefix);
    }
    this.curJsonKeyIndex += 1;
    return newEnumKey;
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)新增enum枚举值
   * */
  @action.bound
  addEnumItem(indexRoute, enumIndex) {
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum) {
      const newEnumKey = this.getNewEnumIndex(itemJSONObj.enum);
      const newEnumText = `选项${this.curJsonKeyIndex - 1}`;
      this.insertEnumItem(indexRoute, enumIndex, newEnumKey, newEnumText); // 插入新的元素
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)复制对应的enum枚举值
   * */
  @action.bound
  copyEnumItem(indexRoute, enumIndex) {
    const itemJSONObj = getJSONDataByIndex(indexRoute, this.jsonSchema);
    if (itemJSONObj.enum) {
      const curEnumKey = itemJSONObj.enum[enumIndex];
      const curEnumText = itemJSONObj.enumextra[enumIndex];
      const newEnumKey = this.getNewEnumIndex(itemJSONObj.enum, curEnumKey);
      const newEnumText = `${curEnumText}_${this.curJsonKeyIndex - 1}`;
      this.insertEnumItem(indexRoute, enumIndex, newEnumKey, newEnumText); // 插入copy的枚举元素
    }
  }
}
