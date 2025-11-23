import { observable, computed, action, toJS } from 'mobx';
import { message } from 'antd';
import {
  schema2json,
  getJsonDataByKeyRoute,
  getParentKeyRoute_CurKey,
  isEmptySchema,
} from '@wibetter/json-utils';
import { isEqual, objClone, saveWebCacheData } from '$utils/index';
import { isArray, isFunction, isObject } from '$utils/typeof';

interface RootJSONStore {
  JSONSchemaStore?: {
    jsonSchema?: any;
    getSchemaByKeyRoute?: (keyRoute: string) => any;
  };
}

interface DynamicData {
  name: string;
  [key: string]: any;
}

interface StoreState {
  rootJSONStore: RootJSONStore;
}

/**
 * 用于管控JSON数据内容的全局store
 * */

export default class JSONEditorStore {
  state: StoreState;

  // 构造函数
  constructor(rootJSONStore: RootJSONStore) {
    this.state = {
      rootJSONStore: rootJSONStore, // 初始化一份rootJSONStore
    };
  }
  /**
   * rootJSONStore: store根数据对象
   */
  @observable rootJSONStore: RootJSONStore = {};

  /**
   * triggerChange: 用于强制触发更新事件
   */
  @observable triggerChange = false;

  /**
   * 记录当前JSONEditor的更新时间
   */
  @observable lastUpdateTime = new Date().getTime();

  /**
   * jsonData: jsonData数据对象
   * 备注：没有多余数据的jsonData
   */
  @observable jsonData: any = null;

  /**
   * initJsonData: jsonData的初始数据对象
   * 备注：用于记录schema结构变动前的数据内容
   */
  @observable initJsonData: Record<string, any> = {};

  /**
   * dynamicDataList: 动态数据源列表
   * 备注：主要在DynamicDataSchema的接口数据/数据源选择列表中使用
   */
  @observable dynamicDataList: DynamicData[] = []; // 数据源的配置
  @observable dynamicDataObj: Record<string, DynamicData> = {}; // 数据源的配置对象（主要用于方便取值）

  /**
   * 存放当前配置类对象数据
   */
  @observable options: Record<string, any> = {};

  /**
   * DynamicData中支持的请求参数类型: 动态请求参数
   * 固定值参数（scope: static）： eg: 写死固定参数 => framework=1
   * URL 参数（scope: url）： eg: pages?projectId=xxx => projectId=xxx
   * Hash 参数（scope: hash）： eg: /pages/:pageId => pageId=xxx
   * 环境变量（scope: window）： eg: 代码上下文里的变量 => env=dev
   * 接口下发（scope: dynamic）： eg: 另一个接口返回结果字段 =>
   * 页面参数（scope: page）： eg: 事件流设置参数
   * 需要用户输入的参数（scope: input）： eg: 事件流设置参数
   */
  @observable dynamicDataApiScopeList = {
    static: '固定值',
    url: 'URL参数',
    hash: 'Hash参数',
    window: '环境变量',
    dynamic: '接口下发',
    page: '页面参数',
    input: '用户输入',
  };

  /**
   * onChange: jsonData数据变动触发的onChange
   */
  @observable onChange: (data: any) => void = () => {}; // 函数类型

  /**
   * 更新lastUpdateTime
   */
  @action.bound
  updateLastTime() {
    this.lastUpdateTime = new Date().getTime();
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
  initJSONData(jsonData: any) {
    // 避免相同的数据重复渲染(备注：自身数据的变动也会触发componentWillReceiveProps)
    const jsonSchema =
      this.state.rootJSONStore.JSONSchemaStore?.jsonSchema || {};
    // 过滤jsonData内部数据变动时触发initJSONData的事件
    if (!isEqual(jsonData, this.JSONEditorObj)) {
      this.initJsonData = objClone(this.jsonData); // 备份过滤前的数据对象
      // 根据jsonSchema生成一份对应的jsonData
      if (jsonSchema && !isEmptySchema(jsonSchema)) {
        const newJsonData = schema2json(jsonSchema, jsonData || {});
        this.jsonData = Object.assign({}, jsonData, newJsonData);
        // this.jsonData = newJsonData;
        // 记录当前初始化的时间
        this.updateLastTime();
      }
    }
    // console.info('[json-editor]initJSONData:', toJS(this.jsonData));
  }

  /** 初始化jsonData  */
  @action.bound
  initOnChange(newOnChangeFunc: ((data: any) => void) | null | undefined) {
    if (newOnChangeFunc || isFunction(newOnChangeFunc)) {
      this.onChange = newOnChangeFunc as (data: any) => void;
    }
  }

  /** 设置动态数据源列表  */
  @action.bound
  setDynamicDataList(dynamicDataList: DynamicData[]) {
    if (!isEqual(dynamicDataList, this.dynamicDataList)) {
      this.dynamicDataList = objClone(dynamicDataList);
      // 重新对 赋值
      const dynamicDataObjTemp: Record<string, DynamicData> = {};
      dynamicDataList.map((dynamicData: DynamicData) => {
        dynamicDataObjTemp[dynamicData.name] = dynamicData;
      });
      this.dynamicDataObj = dynamicDataObjTemp;
    }
  }

  @action.bound
  setOptions(optionsData: Record<string, any> | null | undefined) {
    if (optionsData) {
      this.options = optionsData;
    }
  }

  @computed get JSONEditorObj() {
    return toJS(this.jsonData);
  }

  /** 触发onChange  */
  @action.bound
  jsonDataChange() {
    if (this.jsonData) {
      this.jsonData.lastUpdateTime = new Date().getTime(); // 记录当前更新时间戳
    }
    this.onChange(this.JSONEditorObj);
  }

  @action.bound
  jsonChange(newJsonData: any) {
    this.jsonData = newJsonData;
    this.jsonDataChange();
  }

  /** 根据key索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  getJSONDataByKeyRoute(keyRoute: string, jsonDataParam?: any) {
    const curJsonData = jsonDataParam || this.jsonData;
    return getJsonDataByKeyRoute(keyRoute, curJsonData, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key索引路径获取对应的json数据[非联动式数据获取]
   * 备注：从initJsonData获取数据
   * */
  @action.bound
  getInitJsonDataByKeyRoute(keyRoute: string, jsonDataParam?: any) {
    const curJsonData = jsonDataParam || this.initJsonData;
    return getJsonDataByKeyRoute(keyRoute, curJsonData, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key路径更新对应的json数据
   * 备注：从jsonData中获取数据，需要先获取父级对象（以便产生数据联动），
   * 再根据最近的key值对当前数据进行编辑
   * */
  @action.bound
  updateFormValueData(keyRoute: string, newVal: any, ignoreChange?: boolean) {
    let curElemSchema = null;
    if (this.state.rootJSONStore.JSONSchemaStore?.getSchemaByKeyRoute) {
      curElemSchema =
        this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(keyRoute);
    }
    // 保存缓存：在更新数据之前保存当前的keyRoute到缓存中
    if (keyRoute !== '' && newVal && curElemSchema) {
      if (curElemSchema && curElemSchema.type) {
        // 缓存key格式：${keyRoute}-${type}，值：keyRoute
        saveWebCacheData(`${keyRoute}-${curElemSchema.type}`, newVal);
      }
    }

    if (keyRoute !== '') {
      // 1. 获取父级key路径和最近的有一个key
      const parentKeyRoute_CurKey = getParentKeyRoute_CurKey(keyRoute);
      const parentKeyRoute: string = parentKeyRoute_CurKey[0];
      const curKey = parentKeyRoute_CurKey[1];
      // 2. 获取父级数据对象
      const parentJsonDataObj = getJsonDataByKeyRoute(
        parentKeyRoute,
        this.jsonData,
      );
      // 3. 数值更新
      if (parentJsonDataObj) {
        parentJsonDataObj[curKey] = newVal;
      } else {
        this.updateFormValueData(parentKeyRoute, {
          [curKey]: newVal,
        });
      }
    } else {
      // 当keyRoute为空时直接修改当前schemaData
      this.jsonData = newVal;
    }

    if (curElemSchema && curElemSchema.isConditionProp) {
      // 判断条件字段的快捷通道：如果是条件字段则更新LastInitTime
      this.updateLastTime();
      // this.triggerChangeAction(); // 用于主动触发组件更新
    }

    if (!ignoreChange) {
      // 4. 触发onChange事件
      this.jsonDataChange();
    }
  }

  /**
   * 根据key索引路径值(keyRoute)和数组值所在位置(arrayIndex)删除对应的数组元素
   * */
  @action.bound
  deleteArrayIndex(keyRoute: string, arrayIndex: number) {
    // 1. 获取数组数据对象
    const arrJsonData = getJsonDataByKeyRoute(keyRoute, this.jsonData);
    if (isArray(arrJsonData)) {
      if (arrJsonData.length > 0) {
        // 2. 删除对应的数据项
        arrJsonData.splice(arrayIndex, 1);
        this.triggerChangeAction(); // 用于主动触发组件更新
        // 3. 触发onChange事件
        this.jsonDataChange();
      } else {
        message.warning('删除失败，空数组对象暂无可删除子项。');
      }
    }
  }

  /**
   * 根据key索引路径值(keyRoute)在数组中新增数据项
   * */
  @action.bound
  addArrayItem(keyRoute: string, curArrIndex?: number) {
    // 1. 获取数组数据对象
    let arrJsonData = getJsonDataByKeyRoute(keyRoute, this.jsonData);
    /*
    if (!isArray(arrJsonData)) {
      arrJsonData = [];
    }
    */
    // const _arrJsonData = toJS(arrJsonData);
    if (isArray(arrJsonData)) {
      // 2. 获取数组的第一个数据项
      let newArrItem = arrJsonData[curArrIndex || 0]; // 复制一个数组项
      if (isObject(newArrItem)) {
        newArrItem = Object.assign({}, newArrItem);
      }
      if (curArrIndex || curArrIndex === 0) {
        // 先记录插入位置之后的数据
        const endArr = arrJsonData.slice(Number(curArrIndex) + 1);
        const newArrJsonData = [newArrItem, ...endArr];
        // 删除插入位置之后的数据
        arrJsonData.splice(Number(curArrIndex) + 1);
        // 重新插入
        arrJsonData.push(...newArrJsonData);
      } else {
        arrJsonData.push(newArrItem);
      }
      this.triggerChangeAction(); // 用于主动触发组件更新
      // 3. 触发onChange事件
      this.jsonDataChange();
    } else {
      message.warning('数据操作异常：当前元素不是数组类型。');
    }
  }

  /**
   * 移动指定数据项顺序
   * keyRoute：根据key索引路径值(keyRoute)查找当前数组元素
   * curArrIndex：当前需要移动位置的数组项位置
   * sortAction：
   * */
  @action.bound
  sortArrayItem(keyRoute: string, curArrIndex: number, sortAction?: string) {
    // 1. 获取数组数据对象
    const arrJsonData = getJsonDataByKeyRoute(keyRoute, this.jsonData);
    // const _arrJsonData = toJS(arrJsonData);
    if (isArray(arrJsonData)) {
      const curArrItem = objClone(arrJsonData[curArrIndex || 0]); // 2. 获取当前数组项
      let exchangeArrIndex = curArrIndex;
      if (sortAction === 'up' && exchangeArrIndex > 0) {
        // 向上移动
        exchangeArrIndex -= 1;
      } else if (sortAction === 'up' && exchangeArrIndex === 0) {
        message.warning('数据操作异常：当前数组项已经是第一个元素了。');
        return;
      } else if (sortAction === 'down' || !sortAction) {
        // 默认向下移动
        exchangeArrIndex += 1;
        if (
          sortAction === 'down' &&
          exchangeArrIndex > arrJsonData.length - 1
        ) {
          message.warning('数据操作异常：当前数组项已经是最后一个元素了。');
          return;
        }
      }
      const exchangeArrItem = objClone(arrJsonData[exchangeArrIndex]); // 3. 获取互换数组项
      // 2. 获取数组的第一个数据项

      if (curArrItem !== undefined && exchangeArrItem !== undefined) {
        arrJsonData[curArrIndex] = exchangeArrItem;
        arrJsonData[exchangeArrIndex] = curArrItem;
        message.success(
          `原有数据项${curArrIndex + 1}对应的数据内容已${
            sortAction === 'up' ? '向上' : '向下'
          }移动一级`,
          5,
        );
        // 更新LastInitTime
        this.updateLastTime();
        this.triggerChangeAction(); // 用于主动触发组件更新
        // 4. 触发onChange事件
        this.jsonDataChange();
      }
    } else {
      message.warning('数据操作异常：当前元素不是数组类型。');
    }
  }
}
