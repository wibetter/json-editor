import { observable, computed, action, toJS } from 'mobx';
import { message } from 'antd';
import { getJSONDataByIndex } from '$utils/jsonSchema';
import { objClone } from '$utils/index';

/**
 * 用于管控JSON数据内容的全局store
 * */

export default class JSONEditorStore {
  /** 主要用于自动生成jsonKey中的index */
  curJsonKeyIndex = 1; // 非响应式
  /**
   * triggerChange: 用于强制触发更新事件
   */
  @observable triggerChange = false;
  /**
   * jsonSchema: JSONSchema数据对象
   */
  @observable jsonData = {};

  /**
   * triggerChangeAction: 用于主动触发更新事件
   */
  @action.bound
  triggerChangeAction() {
    this.triggerChange = !this.triggerChange;
  }

  /** 初始化jsonData  */
  @action.bound
  initJSONData(jsonData, jsonSchema) {
    if (!jsonData || JSON.stringify(jsonData) === '{}') {
      // 根据jsonSchema生成一份对应的jsonData
      /** 待开发 */
      this.jsonData = {};
    } else {
      this.jsonData = jsonData;
    }
    this.curJsonKeyIndex = 1; // 每次初始化，都需要重置curJsonKeyIndex值
  }

  @computed get JSONSchemaObj() {
    return toJS(this.jsonData);
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  getJSONDataByIndex(indexRoute) {
    return getJSONDataByIndex(indexRoute, this.jsonData, true); // useObjClone: true 避免后续产生数据联动
  }
}
