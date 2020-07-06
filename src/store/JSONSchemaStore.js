import { observable, computed, action, toJS } from 'mobx';
import {
  getJSONDataByIndex,
  oldJSONSchemaToNewJSONSchema,
} from '$utils/jsonSchema';
import { objClone } from '$utils/index';
import { initJSONSchemaData } from '$data/index';

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
   * 宽屏（wideScreen） or 小屏（mobileScreen）
   */
  @observable pageScreen = 'wideScreen'; // 默认宽屏: wideScreen，小屏：mobileScreen
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

  /**
   * 设置当前屏幕模式：大屏 or 小屏
   */
  @action.bound
  setPageScreen(pageScreen) {
    if (pageScreen === 'mobileScreen') {
      this.pageScreen = 'mobileScreen';
    } else {
      this.pageScreen = 'wideScreen'; // 默认宽屏
    }
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
}
