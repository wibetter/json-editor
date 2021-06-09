import { observable, computed, action, toJS } from 'mobx';
import {
  schema2json,
  isNewSchemaData,
  indexRoute2keyRoute,
  keyRoute2indexRoute,
  oldSchemaToNewSchema,
  getSchemaByIndexRoute,
  isEqual,
  objClone,
  TypeDataList,
} from '@wibetter/json-utils';

const initJSONSchemaData = TypeDataList.jsonschema;

/**
 * 用于管控JSON结构的全局store
 * */

export default class JSONSchemaStore {
  // 构造函数
  constructor(rootJSONStore) {
    this.state = {
      rootJSONStore: rootJSONStore, // 初始化一份rootJSONStore
    };
  }

  /**
   * 宽屏（wideScreen） or 小屏（mobileScreen）
   */
  @observable pageScreen = 'mobileScreen'; // 默认小屏，宽屏: wideScreen，小屏：mobileScreen

  /**
   * jsonSchema: JSONSchema数据对象
   */
  @observable jsonSchema = {};

  /**
   * 设置当前屏幕模式：大屏 or 小屏
   */
  @action.bound
  setPageScreen(pageScreen) {
    if (pageScreen === 'wideScreen' || pageScreen) {
      this.pageScreen = 'wideScreen';
    } else {
      this.pageScreen = 'mobileScreen'; // 默认宽屏
    }
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  initJSONSchemaData(jsonSchemaData) {
    if (!jsonSchemaData || JSON.stringify(jsonSchemaData) === '{}') {
      // 使用默认的jsonschema数据进行初始化
      this.jsonSchema = objClone(initJSONSchemaData);
    } else if (!isEqual(jsonSchemaData, this.JSONSchemaObj)) {
      if (jsonSchemaData && isNewSchemaData(jsonSchemaData)) {
        // 如果有lastUpdateTime则说明是新版jsonSchema数据，无需转换直接进行赋值
        this.jsonSchema = jsonSchemaData;
      } else {
        // 进行一次转换，以便兼容旧版数据
        const newJSONSchema = oldSchemaToNewSchema(jsonSchemaData);
        this.jsonSchema = newJSONSchema;
      }
    }
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  JSONSchemaChange(jsonSchemaData) {
    if (!isEqual(jsonSchemaData, this.JSONSchemaObj)) {
      if (!jsonSchemaData || JSON.stringify(jsonSchemaData) === '{}') {
        // 使用默认的jsonschema数据进行初始化
        this.jsonSchema = objClone(initJSONSchemaData);
      } else if (jsonSchemaData && isNewSchemaData(jsonSchemaData)) {
        /** 如果有lastUpdateTime则说明是新版jsonSchema数据，无需转换直接进行赋值 */
        this.jsonSchema = jsonSchemaData;
      } else {
        // 进行一次转换，以便兼容旧版数据
        const newJSONSchema = oldSchemaToNewSchema(jsonSchemaData);
        this.jsonSchema = newJSONSchema;
      }
      const curJsonData =
        this.state.rootJSONStore.JSONEditorStore.JSONEditorObj;
      /** 根据jsonSchema生成对应的最新jsonData */
      const newJsonData = schema2json(this.JSONSchemaObj, curJsonData);
      /** 更新当前的jsonData */
      this.state.rootJSONStore.JSONEditorStore.jsonData = newJsonData;
      this.state.rootJSONStore.JSONEditorStore.jsonDataTemp =
        objClone(curJsonData); // 备份过滤钱的数据对象
      /** jsonSchem变动的时候触发一次jsonDataChange
       * jsonSchem变动意味着jsonData也需要进行对应的结构更新
       * */
      this.state.rootJSONStore.JSONEditorStore.jsonDataChange();
    }
  }

  @computed get JSONSchemaObj() {
    return toJS(this.jsonSchema);
  }

  /** 获取当前jsonSchema的最新编辑时间的对应时间戳 */
  @computed get lastUpdateTime() {
    let curLastUpdateTime = this.jsonSchema.lastUpdateTime;
    curLastUpdateTime = curLastUpdateTime
      ? new Date(curLastUpdateTime).getTime()
      : new Date().getTime();
    return curLastUpdateTime;
  }

  /** 根据索引路径获取对应的key值路径 */
  @action.bound
  indexRoute2keyRoute(indexRoute) {
    return indexRoute2keyRoute(indexRoute, this.jsonSchema);
  }

  /** 根据key值路径获取对应的index索引路径 */
  @action.bound
  keyRoute2indexRoute(keyRoute) {
    return keyRoute2indexRoute(keyRoute, this.jsonSchema);
  }

  /** 根据索引路径获取对应的schema数据[非联动式数据获取]  */
  @action.bound
  getSchemaByIndexRoute(indexRoute) {
    return getSchemaByIndexRoute(indexRoute, this.jsonSchema, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key值路径获取对应的schema数据[非联动式数据获取]  */
  @action.bound
  getSchemaByKeyRoute(keyRoute) {
    const indexRoute = this.keyRoute2indexRoute(keyRoute);
    return getSchemaByIndexRoute(indexRoute, this.jsonSchema, true); // useObjClone: true 避免后续产生数据联动
  }
}
