import { observable, computed, action, toJS } from 'mobx';
import { message } from 'antd';
import {
  schema2json,
  getJsonDataByKeyRoute,
  getParentKeyRoute_CurKey,
} from '@wibetter/json-utils';
import { isEqual, objClone } from '$utils/index';
import { isArray, isFunction } from '$utils/typeof';

/**
 * 用于管控JSON数据内容的全局store
 * */

export default class JSONEditorStore {
  // 构造函数
  constructor(rootJSONStore) {
    this.state = {
      rootJSONStore: rootJSONStore, // 初始化一份rootJSONStore
    };
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
  @observable lastUpdateTime = new Date().getTime();

  /**
   * jsonData: jsonData数据对象
   * 备注：没有多余数据的jsonData
   */
  @observable jsonData = null;

  /**
   * jsonDataTemp: jsonData的临时数据对象
   * 备注：包含schema结构变动前的数据内容
   */
  @observable jsonDataTemp = {};

  /**
   * dynamicDataList: 动态数据源列表
   * 备注：主要在DynamicDataSchema的接口数据/数据源选择列表中使用
   */
  @observable dynamicDataList = []; // 数据源的配置
  @observable dynamicDataObj = {}; // 数据源的配置对象（主要用于方便取值）

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
  @observable onChange = () => {}; // 函数类型

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
  initJSONData(jsonData) {
    // 避免相同的数据重复渲染(备注：自身数据的变动也会触发componentWillReceiveProps)
    const jsonSchema =
      this.state.rootJSONStore.JSONSchemaStore.JSONSchemaObj || {};
    // 过滤jsonData内部数据变动时触发initJSONData的事件
    if (!isEqual(jsonData, this.jsonData)) {
      // 根据jsonSchema生成一份对应的jsonData
      /** 1、根据jsonSchema生成对应的jsonData */
      this.jsonDataTemp = objClone(this.JSONEditorObj); // 备份过滤钱的数据对象
      // 判断当前schema是否为空
      if (jsonSchema) {
        this.jsonData = schema2json(jsonSchema, jsonData || {});
        // 记录当前初始化的时间
        this.updateLastTime();
      }
    }
  }

  /** 初始化jsonData  */
  @action.bound
  initOnChange(newOnChangeFunc) {
    if (newOnChangeFunc || isFunction(newOnChangeFunc)) {
      this.onChange = newOnChangeFunc;
    }
  }

  /** 设置动态数据源列表  */
  @action.bound
  setDynamicDataList(dynamicDataList) {
    if (!isEqual(dynamicDataList, this.dynamicDataList)) {
      this.dynamicDataList = objClone(dynamicDataList);
      // 重新对 赋值
      const dynamicDataObjTemp = {};
      dynamicDataList.map((dynamicData) => {
        dynamicDataObjTemp[dynamicData.name] = dynamicData;
      });
      this.dynamicDataObj = dynamicDataObjTemp;
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
  getJSONDataByKeyRoute(keyRoute, jsonDataParam) {
    const curJsonData = jsonDataParam || toJS(this.jsonData);
    return getJsonDataByKeyRoute(keyRoute, curJsonData, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key索引路径获取对应的json数据[非联动式数据获取]
   * 备注：从jsonDataTemp获取数据
   * */
  @action.bound
  getJSONDataTempByKeyRoute(keyRoute, jsonDataParam) {
    const curJsonData = jsonDataParam || toJS(this.jsonDataTemp);
    return getJsonDataByKeyRoute(keyRoute, curJsonData, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key路径更新对应的json数据
   * 备注：从jsonData中获取数据，需要先获取父级对象（以便产生数据联动），
   * 再根据最近的key值对当前数据进行编辑
   * */
  @action.bound
  updateFormValueData(keyRoute, newVal, ignoreChange) {
    if (keyRoute !== '') {
      // 1. 获取父级key路径和最近的有一个key
      const parentKeyRoute_CurKey = getParentKeyRoute_CurKey(keyRoute);
      const parentKeyRoute = parentKeyRoute_CurKey[0];
      const curKey = parentKeyRoute_CurKey[1];
      // 2. 获取父级数据对象
      const parentJsonDataObj = getJsonDataByKeyRoute(
        parentKeyRoute,
        this.jsonData,
      );
      // 3. 数值更新
      parentJsonDataObj[curKey] = newVal;
    } else {
      // 当keyRoute为空时直接修改当前schemaData
      this.jsonData = newVal;
    }
    if (
      this.state.rootJSONStore.JSONSchemaStore &&
      this.state.rootJSONStore.JSONSchemaStore.jsonSchema
    ) {
      // 获取当前schema的条件字段
      const curJsonSchema = this.state.rootJSONStore.JSONSchemaStore.jsonSchema;
      const conditionProps = curJsonSchema.conditionProps;
      const curElemSchema =
        this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(keyRoute);
      if (curElemSchema && curElemSchema.isConditionProp) {
        // 判断条件字段的快捷通道：如果是条件字段则更新LastInitTime
        this.updateLastTime();
      } else if (conditionProps) {
        // 判断当前字段是否为条件字段
        Object.keys(conditionProps).map((propKey) => {
          const conditionItem = conditionProps[propKey];
          if (conditionItem.keyRoute === keyRoute) {
            // 更新LastInitTime
            this.updateLastTime();
          }
        });
      }
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
  deleteArrayIndex(keyRoute, arrayIndex) {
    // 1. 获取数组数据对象
    const arrJsonDataObj = getJsonDataByKeyRoute(keyRoute, this.jsonData);
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
  addArrayItem(keyRoute, curArrIndex) {
    // 1. 获取数组数据对象
    const arrJsonDataObj = getJsonDataByKeyRoute(keyRoute, this.jsonData);
    const _arrJsonDataObj = toJS(arrJsonDataObj);
    if (isArray(arrJsonDataObj)) {
      // 2. 获取数组的第一个数据项
      const newArrItem = _arrJsonDataObj[curArrIndex || 0]; // 复制一个数组项
      if (curArrIndex || curArrIndex === 0) {
        // 先记录插入位置之后的数据
        const endArr = _arrJsonDataObj.slice(Number(curArrIndex) + 1);
        const newArrJsonDataObj = [newArrItem, ...endArr];
        // 删除插入位置之后的数据
        arrJsonDataObj.splice(Number(curArrIndex) + 1);
        // 重新插入
        arrJsonDataObj.push(...newArrJsonDataObj);
      } else {
        arrJsonDataObj.push(newArrItem);
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
  sortArrayItem(keyRoute, curArrIndex, sortAction) {
    // 1. 获取数组数据对象
    const arrJsonDataObj = getJsonDataByKeyRoute(keyRoute, this.jsonData);
    const _arrJsonDataObj = toJS(arrJsonDataObj);
    if (isArray(_arrJsonDataObj)) {
      const curArrItem = objClone(_arrJsonDataObj[curArrIndex || 0]); // 2. 获取当前数组项
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
          exchangeArrIndex > _arrJsonDataObj.length - 1
        ) {
          message.warning('数据操作异常：当前数组项已经是最后一个元素了。');
          return;
        }
      }
      const exchangeArrItem = objClone(_arrJsonDataObj[exchangeArrIndex]); // 3. 获取互换数组项
      // 2. 获取数组的第一个数据项

      if (curArrItem !== undefined && exchangeArrItem !== undefined) {
        arrJsonDataObj[curArrIndex] = exchangeArrItem;
        arrJsonDataObj[exchangeArrIndex] = curArrItem;
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
