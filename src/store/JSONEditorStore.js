import { observable, computed, action, toJS } from 'mobx';
import { message } from 'antd';
import {
  getJSONDataByKeyRoute,
  getParentKeyRoute_CurKey,
} from '$utils/jsonData';
import { schema2JsonData } from '$utils/jsonSchema';
import { isEqual, objClone, isArray, isFunction } from '$utils/index';

/**
 * 用于管控JSON数据内容的全局store
 * */

export default class JSONEditorStore {
  // 构造函数
  constructor(rootJSONStore) {
    this.rootJSONStore = rootJSONStore;
  }
  /**
   * rootJSONStore: store根数据对象
   */
  @observable rootJSONStore = {};
  /**
   * triggerChange: 用于强制触发更新事件
   */
  @observable triggerChange = false;

  /**
   * 记录当前JSONEditor的更新时间
   */
  @observable lastInitTime = new Date().getTime();
  /**
   * jsonData: jsonData数据对象
   */
  @observable jsonData = {};

  /**
   * onChange: jsonData数据变动触发的onChange
   */
  @observable onChange = () => {}; // 函数类型

  /**
   * 更新lastInitTime
   */
  @action.bound
  updateLastInitTime() {
    this.lastInitTime = new Date().getTime();
  }

  /**
   * triggerChangeAction: 用于主动触发更新事件
   */
  @action.bound
  triggerChangeAction() {
    this.triggerChange = !this.triggerChange;
  }

  /** 初始化jsonData  */
  @action.bound
  initJSONData(jsonData) {
    if (!isEqual(jsonData, this.JSONEditorObj)) {
      // 避免相同的数据重复渲染(备注：自身数据的变动也会触发componentWillReceiveProps)
      const jsonSchema = this.rootJSONStore.JSONSchemaStore.JSONSchemaObj || {};
      if (!jsonData || JSON.stringify(jsonData) === '{}') {
        // 根据jsonSchema生成一份对应的jsonData
        /** 1、根据jsonSchema生成对应的jsonData */
        this.jsonData = schema2JsonData(jsonSchema, {});
      } else {
        this.jsonData = schema2JsonData(jsonSchema, jsonData);
      }
      // 记录当前初始化的时间
      this.updateLastInitTime();
    }
  }

  /** 初始化jsonData  */
  @action.bound
  initOnChange(newOnChangeFunc) {
    if (newOnChangeFunc || isFunction(newOnChangeFunc)) {
      this.onChange = newOnChangeFunc;
    }
  }

  @computed get JSONEditorObj() {
    return toJS(this.jsonData);
  }

  /** 触发onChange  */
  @action.bound
  jsonDataChange() {
    this.onChange(this.JSONEditorObj);
  }

  /** 根据key索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  getJSONDataByKeyRoute(keyRoute) {
    return getJSONDataByKeyRoute(keyRoute, this.jsonData, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key路径更新对应的json数据
   * 备注：从jsonData中获取数据，需要先获取父级对象（以便产生数据联动），
   * 再根据最近的key值对当前数据进行编辑
   * */
  @action.bound
  updateFormValueData(keyRoute, newVal) {
    // 1. 获取父级key路径和最近的有一个key
    const parentKeyRoute_CurKey = getParentKeyRoute_CurKey(keyRoute);
    const parentKeyRoute = parentKeyRoute_CurKey[0];
    const curKey = parentKeyRoute_CurKey[1];
    // 2. 获取父级数据对象
    const parentJsonDataObj = getJSONDataByKeyRoute(
      parentKeyRoute,
      this.jsonData,
    );
    // 3. 数值更新
    parentJsonDataObj[curKey] = newVal;
    // 4. 触发onChange事件
    this.jsonDataChange();
  }

  /**
   * 根据key索引路径值(keyRoute)和数组值所在位置(arrayIndex)删除对应的数组元素
   * */
  @action.bound
  deleteArrayIndex(keyRoute, arrayIndex) {
    // 1. 获取数组数据对象
    const arrJsonDataObj = getJSONDataByKeyRoute(keyRoute, this.jsonData);
    if (isArray(arrJsonDataObj)) {
      if (arrJsonDataObj.length > 1) {
        // 2. 删除对应的数据项
        arrJsonDataObj.splice(arrayIndex, 1);
        this.triggerChangeAction(); // 用于主动触发组件更新
        // 3. 触发onChange事件
        this.jsonDataChange();
      } else {
        message.warning('删除失败，至少保留一个数据项。');
      }
    }
  }

  /**
   * 根据key索引路径值(keyRoute)在数组中新增数据项
   * */
  @action.bound
  addArrayItem(keyRoute) {
    // 1. 获取数组数据对象
    const arrJsonDataObj = getJSONDataByKeyRoute(keyRoute, this.jsonData);
    if (isArray(arrJsonDataObj)) {
      // 2. 获取数组的第一个数据项
      const newArrItem = objClone(arrJsonDataObj[0]);
      arrJsonDataObj.push(newArrItem);
      this.triggerChangeAction(); // 用于主动触发组件更新
      // 3. 触发onChange事件
      this.jsonDataChange();
    } else {
      message.warning('数据操作异常：当前数据不是数组类型。');
    }
  }
}
