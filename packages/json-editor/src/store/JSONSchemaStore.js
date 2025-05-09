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
 * 用于管控JsonSchema的全局store
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
    // console.info('[json-editor]initJSONSchemaData:', toJS(this.jsonSchema));
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  JSONSchemaChange(jsonSchemaData) {
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
    const JSONEditorStore = this.state.rootJSONStore.JSONEditorStore;
    const curJsonData = JSONEditorStore.jsonData;
    let newJsonData = {};
    /** 根据jsonSchema生成对应的最新jsonData */
    if (this.jsonSchema.reset) {
      // schema 变动不保留旧版 jsonData 数据
      newJsonData = schema2json(this.jsonSchema, {});
    } else {
      // 默认保留旧版jsonData数据
      newJsonData = schema2json(this.jsonSchema, curJsonData);
    }
    /** 更新当前的jsonData */
    this.state.rootJSONStore.JSONEditorStore.jsonData = newJsonData;
    this.state.rootJSONStore.JSONEditorStore.initJsonData =
      objClone(curJsonData); // 备份此前的数据对象
    /** jsonSchema变动的时候触发一次jsonDataChange
     * jsonSchema变动意味着jsonData也需要进行对应的结构更新
     * */
    // this.state.rootJSONStore.JSONEditorStore.jsonDataChange();
    // console.info('[json-editor]JSONSchemaChange:', toJS(this.jsonSchema));
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
