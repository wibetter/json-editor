import { observable, computed, action, toJS } from 'mobx'; // mobx 5.0 写法
import { message } from 'antd';
import { pick } from 'lodash';
import { isEqual, objClone, isFunction } from '$utils/index';
import { TypeList } from '$data/TypeList';
import {
  isNewSchemaData,
  getParentIndexRoute,
  getParentIndexRoute_CurIndex,
  getSchemaByIndexRoute,
  getSchemaByKeyRoute,
  oldSchemaToNewSchema,
  isContainerSchema,
  indexRoute2keyRoute,
  keyRoute2indexRoute,
  KeyWordList,
  TypeDataList,
} from '@wibetter/json-utils';

const initJSONSchemaData = TypeDataList.jsonschema;
const initInputData = TypeDataList.input;

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
  @observable jsonSchema: any = {};

  /**
   * 可以添加的子项类型: SchemaTypeList（TypeList）
   */
  @observable SchemaTypeList: any = TypeList;

  /**
   * onChange: jsonSchema数据变动触发的onChange
   */
  @observable onChange = (data?: any) => {}; // 函数类型

  /**
   * triggerChangeAction: 用于主动触发更新事件
   */
  @action.bound
  triggerChangeAction() {
    this.triggerChange = !this.triggerChange;
  }

  /** 根据配置数据初始化TypeList  */
  @action.bound
  initSchemaTypeList(typeListOption: any) {
    if (!typeListOption || JSON.stringify(typeListOption) === '{}') {
      // 直接使用原有的TypeList数据
    } else if (!isEqual(typeListOption, this.SchemaTypeList)) {
      if (typeListOption) {
        Object.keys(typeListOption).map((key) => {
          this.SchemaTypeList[key] = typeListOption[key];
        });
      }
    }
  }

  /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
  @action.bound
  initJSONSchemaData(jsonSchemaData: any) {
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
    // console.info('[json-schema-editor]initJSONSchemaData:', toJS(initJSONSchemaData));
  }

  @computed get JSONSchemaObj() {
    return toJS(this.jsonSchema);
  }

  /** 初始化jsonData  */
  @action.bound
  initOnChange(newOnChangeFunc: any) {
    if (newOnChangeFunc || isFunction(newOnChangeFunc)) {
      this.onChange = newOnChangeFunc;
    }
  }

  @action.bound
  schemaChange(newSchemaData: any) {
    this.jsonSchema = newSchemaData;
    this.jsonSchemaChange(false);
  }

  /** 触发onChange  */
  @action.bound
  jsonSchemaChange(ignore?: boolean) {
    // 更新jsonSchema数据的更新时间
    this.jsonSchema.lastUpdateTime = new Date().getTime();
    // 如果ignore为true则跳过，避免重复触发onChange
    if (!ignore) {
      this.onChange(this.JSONSchemaObj);
    }
  }

  /** 根据索引路径获取对应的key值路径 */
  @action.bound
  indexRoute2keyRoute(indexRoute: string) {
    return indexRoute2keyRoute(indexRoute, this.jsonSchema);
  }

  /** 根据key值路径获取对应的index索引路径 */
  @action.bound
  keyRoute2indexRoute(keyRoute: string) {
    return keyRoute2indexRoute(keyRoute, this.jsonSchema);
  }

  /** 根据索引路径获取对应的schema数据[非联动式数据获取]  */
  @action.bound
  getSchemaByIndexRoute(indexRoute: string) {
    return getSchemaByIndexRoute(indexRoute, this.jsonSchema, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据key值路径获取对应的schema数据[非联动式数据获取]  */
  @action.bound
  getSchemaByKeyRoute(keyRoute: string) {
    return getSchemaByKeyRoute(keyRoute, this.jsonSchema, true); // useObjClone: true 避免后续产生数据联动
  }

  /** 根据parentJSONObj自动生成jsonKey */
  @action.bound
  getNewJsonKeyIndex(parentJSONObj: any, prefix?: string): string {
    let newJsonKeyIndex = `${prefix || 'field'}_${this.curJsonKeyIndex}`;
    if (parentJSONObj.propertyOrder.indexOf(newJsonKeyIndex) >= 0) {
      // 表示存在相同的jsonKey
      this.curJsonKeyIndex += 1;
      newJsonKeyIndex = this.getNewJsonKeyIndex(parentJSONObj, prefix);
    }
    this.curJsonKeyIndex += 1;
    return newJsonKeyIndex;
  }

  /** 判断是否有重名key值 */
  @action.bound
  isExitJsonKey(indexRoute: string, jsonKey: string) {
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = this.getSchemaByIndexRoute(parentIndexRoute);
    if (
      parentJSONObj.propertyOrder &&
      parentJSONObj.propertyOrder.indexOf(jsonKey) >= 0
    ) {
      // 表示存在相同的jsonKey
      return true;
    }
    if (KeyWordList && KeyWordList.indexOf(jsonKey) >= 0) {
      // 表示当前jsonKey是JSONSchema的关键字
      message.warning(
        `${jsonKey}是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。`,
      );
    }
    if (jsonKey && jsonKey.indexOf('-') > -1) {
      message.warning(
        `${jsonKey}含特殊字符（‘-’），会影响后续数据获取和更新，建议您换一个数值。`,
      );
    }
    return false;
  }

  /** 判断是否支持当前类型 */
  @action.bound
  isSupportCurType(indexRoute: string, curType: string) {
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = this.getSchemaByIndexRoute(parentIndexRoute);
    const parentTypeList = this.SchemaTypeList[parentJSONObj.type];
    if (parentTypeList && parentTypeList.indexOf(curType) >= 0) {
      // 表示支持当前类型
      return true;
    }
    return false;
  }

  /** 根据索引路径值(indexRoute)插入新的子元素-json数据对象(childJson)
   *  备注：关键字(childKey)自动生成，json数据对象(childJson)默认使用initInputData
   */
  @action.bound
  addChildJson(curIndexRoute: string, ignoreOnChange?: boolean) {
    const curSchema = getSchemaByIndexRoute(
      curIndexRoute,
      this.jsonSchema,
      false,
    );
    if (isContainerSchema(curSchema)) {
      const childKey = this.getNewJsonKeyIndex(curSchema);
      curSchema.propertyOrder.push(childKey);
      curSchema.properties[childKey] = initInputData;
      // 触发onChange事件
      this.jsonSchemaChange(ignoreOnChange);
    } else {
      // 注：非数组和对象类型字段不允许插入子元素
      message.warning('非对象类型字段不允许插入子元素');
    }
  }

  /** 根据索引路径值(indexRoute)更新对应的json数据对象
   *  备注：主要用于变更对应的type属性值
   * */
  @action.bound
  changeType(
    curIndexRoute: string,
    jsonKey: string,
    newSchemaData: any,
    targetJsonSchema: any,
    ignoreOnChange?: boolean,
  ) {
    const parentIndexRoute = getParentIndexRoute(curIndexRoute);
    const parentSchemaData = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    // 保留已有的配置数据（）
    const curNewSchemaData = Object.assign(
      {},
      newSchemaData,
      pick(targetJsonSchema, [
        'title',
        'description',
        'isConditionProp',
        'showKey',
        'showCodeViewBtn',
        'onShow',
      ]),
    );
    if (parentSchemaData.properties && parentSchemaData.properties[jsonKey]) {
      parentSchemaData.properties[jsonKey] = objClone(curNewSchemaData);
    } else if (parentSchemaData[jsonKey]) {
      // 支持Array/items 类型切换
      parentSchemaData[jsonKey] = objClone(curNewSchemaData);
    }

    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)编辑对应的json数据对象
   *  备注：用于覆盖整个json对象
   * */
  @action.bound
  updateSchemaData(
    curIndexRoute: string,
    newSchemaData: any,
    ignoreOnChange?: boolean,
  ) {
    const curJSONObj = getSchemaByIndexRoute(
      curIndexRoute,
      this.jsonSchema,
      false,
    );
    Object.assign(curJSONObj, objClone(newSchemaData));
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)编辑对应的json数据对象
   *  备注：用于编辑对应的属性值（type、title、description、placeholder、isRequired、default、readOnly）
   * */
  @action.bound
  editSchemaData(
    curIndexRoute: string,
    jsonKey: string,
    newSchemaData: any,
    ignoreOnChange?: boolean,
  ) {
    const parentIndexRoute = getParentIndexRoute(curIndexRoute);
    const parentSchemaObj = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    parentSchemaObj.properties[jsonKey] = {
      ...objClone(parentSchemaObj.properties[jsonKey]),
      ...newSchemaData,
    };
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }
  /** 根据索引路径值(indexRoute)编辑对应的jsonKey
   *  备注：仅用于修改jsonKey值
   * */
  @action.bound
  editJsonKey(
    curIndexRoute: string,
    newJsonKey: string,
    ignoreOnChange?: boolean,
  ) {
    const curJSONObj = getSchemaByIndexRoute(
      curIndexRoute,
      this.jsonSchema,
      true,
    ); // 最后参数true用于避免数据关联
    // 先插入对象值
    this.insertJsonData(curIndexRoute, newJsonKey, curJSONObj, '', true);
    // 再删除原有的json数据对象
    this.deleteJsonByIndex(curIndexRoute, true);
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)插入新的兄弟节点元素-json数据对象
   *  备注：关键字(childKey)自动生成，json数据对象默认使用initInputData
   * */
  @action.bound
  addNextJsonData(curIndexRoute: string) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute = getParentIndexRoute(curIndexRoute);
    // 2.生成新的jsonKey值
    const parentJSONObj = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    /** 如果没有设置jsonKey，则自动生成一个新的jsonKey */
    const newJsonKey = this.getNewJsonKeyIndex(parentJSONObj);
    this.insertJsonData(curIndexRoute, newJsonKey, initInputData, '', false); // 默认新增input类型字段
  }

  /** 根据索引路径值(indexRoute)插入指定的json数据对象（jsonKey、curJSONObj）
   * position（非必填）: after（表示插入到指定位置后面，默认值）、before（表示插入到指定位置前面）
   * */
  @action.bound
  insertJsonData(
    curIndexRoute: string,
    jsonKey: string,
    curJSONObj: any,
    position?: string,
    ignoreOnChange?: boolean,
  ) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute_CurIndex =
      getParentIndexRoute_CurIndex(curIndexRoute);
    const parentIndexRoute = parentIndexRoute_CurIndex[0] || '';
    const curIndex = parentIndexRoute_CurIndex[1];
    // 2.获取父级元素
    const parentJSONObj = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    // 3.插入新增的对象数据
    parentJSONObj.properties[jsonKey] = curJSONObj;
    // 4.在propertyOrder的对应位置插入newJsonKey【有序插入newJsonKey】
    const currentPropertyOrder = parentJSONObj.propertyOrder;
    // 5.获取插入位置
    const positionIndex =
      position === 'before' ? Number(curIndex) : Number(curIndex) + 1;
    const startArr = currentPropertyOrder.slice(0, positionIndex);
    const endArr = currentPropertyOrder.slice(positionIndex);
    parentJSONObj.propertyOrder = [...startArr, jsonKey, ...endArr];
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和关键字(childKey)删除对应的json数据对象 */
  @action.bound
  deleteJsonByIndex_CurKey(
    indexRoute: string,
    curKey: string,
    ignoreOnChange?: boolean,
  ) {
    // 1.获取当前元素的父元素路径值
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJsonObj = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    // 2.根据curKey删除在properties中删除对应的字段对象
    delete parentJsonObj.properties[curKey];
    // 3.删除propertyOrder中对应的curKey
    const deleteIndex = parentJsonObj.propertyOrder.indexOf(curKey);
    parentJsonObj.propertyOrder.splice(deleteIndex, 1);
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)删除对应的json数据对象 */
  @action.bound
  deleteJsonByIndex(indexRoute: string, ignoreOnChange?: boolean) {
    // 1.获取当前元素的父元素路径值和最后一个路径值，以便定位插入的位置
    const parentIndexRoute_CurIndex = getParentIndexRoute_CurIndex(indexRoute);
    const parentIndexRoute = parentIndexRoute_CurIndex[0] || '';
    const curIndex: string = parentIndexRoute_CurIndex[1];
    const parentJsonObj = getSchemaByIndexRoute(
      parentIndexRoute,
      this.jsonSchema,
      false,
    );
    const curKey = parentJsonObj.propertyOrder[curIndex];
    // 2.根据curKey删除在properties中删除对应的字段对象
    delete parentJsonObj.properties[curKey];
    // 3.删除propertyOrder中对应的curKey
    const deleteIndex = parentJsonObj.propertyOrder.indexOf(curKey);
    parentJsonObj.propertyOrder.splice(deleteIndex, 1);
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素
   * */
  @action.bound
  updateEnumItem(
    indexRoute: string,
    enumIndex: number,
    newEnumKey: string,
    newEnumText: string,
    ignoreOnChange?: boolean,
  ) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enum && itemJSONObj.enumextra) {
      itemJSONObj.enum[enumIndex] = newEnumKey;
      itemJSONObj.enumextra[enumIndex] = newEnumText;
    }
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)判断是否存在对应的key值
   * */
  @action.bound
  isExitEnumKey(indexRoute: string, enumIndex: number, newEnumKey: string) {
    let isExit = false;
    // 1.获取当前元素的父元素
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
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
    if (KeyWordList && KeyWordList.indexOf(newEnumKey) >= 0) {
      // 表示当前jsonKey是JSONSchema的关键字
      message.warning(
        `${newEnumKey}是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。`,
      );
    }
    return isExit;
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素的key值
   * */
  @action.bound
  updateEnumKey(
    indexRoute: string,
    enumIndex: number,
    newEnumKey: string,
    ignoreOnChange?: boolean,
  ) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enum) {
      // 2.更新对应的key
      itemJSONObj.enum[enumIndex] = newEnumKey;
    }
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)更新对应的enum枚举元素的text值
   * */
  @action.bound
  updateEnumText(
    indexRoute: string,
    enumIndex: number,
    newEnumText: string,
    ignoreOnChange?: boolean,
  ) {
    // 1.获取当前元素的父元素
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enumextra) {
      // 2.更新对应的text
      itemJSONObj.enumextra[enumIndex] = newEnumText;
    }
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)删除对应的enum枚举元素
   * */
  @action.bound
  deleteEnumItem(
    indexRoute: string,
    enumIndex: number,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enum && itemJSONObj.enumextra) {
      itemJSONObj.enum.splice(enumIndex, 1);
      itemJSONObj.enumextra.splice(enumIndex, 1);
    }
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)插入对应的enum枚举元素
   * position: 设置插入指定位置的前面还是后面，默认插入指定位置的后面
   * */
  @action.bound
  insertEnumItem(
    indexRoute: string,
    enumIndex: number,
    newEnumKey: string,
    newEnumText: string,
    position?: string,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
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
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  @action.bound
  getNewEnumIndex(enumKeys: string[], prefix?: string): string {
    let newEnumKey = `${prefix || 'enum'}_${this.curJsonKeyIndex}`;
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
  addEnumItem(indexRoute: string, enumIndex: number) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enum) {
      const newEnumKey = this.getNewEnumIndex(itemJSONObj.enum);
      const newEnumText = `选项${this.curJsonKeyIndex - 1}`;
      this.insertEnumItem(
        indexRoute,
        enumIndex,
        newEnumKey,
        newEnumText,
        '',
        false,
      ); // 插入新的元素
    }
  }

  /** 根据索引路径值(indexRoute)和枚举值所在位置(enumIndex)复制对应的enum枚举值
   * */
  @action.bound
  copyEnumItem(indexRoute: string, enumIndex: number) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.enum) {
      const curEnumKey = itemJSONObj.enum[enumIndex];
      const curEnumText = itemJSONObj.enumextra[enumIndex];
      const newEnumKey = this.getNewEnumIndex(itemJSONObj.enum, curEnumKey);
      const newEnumText = `${curEnumText}_${this.curJsonKeyIndex - 1}`;
      this.insertEnumItem(
        indexRoute,
        enumIndex,
        newEnumKey,
        newEnumText,
        '',
        false,
      ); // 插入copy的枚举元素
    }
  }

  // 更新选项
  @action.bound
  updateOptionItem(
    indexRoute: string,
    optionIndex: number,
    optionLabel: string,
    optionValue: string,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options && itemJSONObj.options[optionIndex]) {
      itemJSONObj.options[optionIndex].label = optionLabel;
      itemJSONObj.options[optionIndex].value = optionValue;
    }
    // 触发onChange事件
    this.jsonSchemaChange(ignoreOnChange);
  }

  // 判断是否存在重复Label
  @action.bound
  isExitOptionLabel(indexRoute: string, optionLabel: string) {
    let isExit = false;
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options) {
      if (
        itemJSONObj.options.find(
          (item: any) => item.label === optionLabel, //  || item.name === optionLabel
        )
      ) {
        isExit = true;
      }
    }
    if (KeyWordList && KeyWordList.indexOf(optionLabel) >= 0) {
      // 表示当前jsonKey是JSONSchema的关键字
      message.warning(
        `${optionLabel}是JSONSchema的保留关键字，建议您换一个名称。`,
      );
    }
    return isExit;
  }

  // 更新选项Label
  @action.bound
  updateOptionLabel(
    indexRoute: string,
    optionIndex: number,
    optionLabel: string,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options && itemJSONObj.options[optionIndex]) {
      itemJSONObj.options[optionIndex].label = optionLabel;
    }
    this.jsonSchemaChange(ignoreOnChange);
  }

  // 更新选项数值
  @action.bound
  updateOptionValue(
    indexRoute: string,
    optionIndex: number,
    optionValue: string,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options && itemJSONObj.options[optionIndex]) {
      itemJSONObj.options[optionIndex].value = optionValue;
    }
    this.jsonSchemaChange(ignoreOnChange);
  }

  // 删除选项
  @action.bound
  deleteOptionItem(
    indexRoute: string,
    optionIndex: number,
    ignoreOnChange?: boolean,
  ) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options && itemJSONObj.options[optionIndex]) {
      itemJSONObj.options.splice(optionIndex, 1);
    }
    this.jsonSchemaChange(ignoreOnChange);
  }

  // 在指定位置插入选项
  @action.bound
  insertOption(
    indexRoute: string,
    optionIndex: number,
    newOptionLabel: string,
    newOptionValue: string,
    position?: string,
    ignoreOnChange?: boolean,
  ) {
    const curJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (curJSONObj.options) {
      const positionIndex =
        position === 'before' ? Number(optionIndex) : Number(optionIndex) + 1;
      // 在options指定位置插入新的选项
      const startKeys = curJSONObj.options.slice(0, positionIndex);
      const endKeys = curJSONObj.options.slice(positionIndex);
      const newOption = {
        label: newOptionLabel,
        value: newOptionValue,
      };
      curJSONObj.options = [...startKeys, newOption, ...endKeys];
    }
    this.jsonSchemaChange(ignoreOnChange);
  }

  @action.bound
  getNewOptionValue(options: any[]) {
    if (options && options.length > 0) {
      return `${options[options.length - 1].value}_${options.length + 1}`;
    }
    return 'value1';
  }

  // 添加选项
  @action.bound
  addOptionItem(indexRoute: string, optionIndex: number) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options) {
      const optionValue = this.getNewOptionValue(itemJSONObj.options);
      const optionLabel = `选项${itemJSONObj.options.length + 1}`;
      this.insertOption(
        indexRoute,
        optionIndex,
        optionLabel,
        optionValue,
        '',
        false,
      ); // 插入新的元素
    }
  }

  // 复制选项
  @action.bound
  copyOptionItem(indexRoute: string, optionIndex: number) {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    if (itemJSONObj.options) {
      const curOption = itemJSONObj.options[optionIndex];
      const optionValue = this.getNewOptionValue(itemJSONObj.options);
      const optionLabel = `${curOption.label || curOption.name}_copy`;
      this.insertOption(
        indexRoute,
        optionIndex,
        optionLabel,
        optionValue,
        '',
        false,
      );
    }
  }

  /** 数据项排序功能 */
  @action.bound
  childElemSort = (indexRoute: string) => {
    const itemJSONObj = getSchemaByIndexRoute(
      indexRoute,
      this.jsonSchema,
      false,
    );
    const curPropertyOrder = itemJSONObj.propertyOrder; // 待排序的key值数组
    const baseElemArr = []; // 基础类型：input、url
    const numberElemArr = []; // 数字类型：quantity、number
    const selectElemArr = []; // 选择类型：radio、select、color、boolean
    const timeElemArr = []; // 时间类型：date、date-time、time
    const areaElemArr = []; // 长文本类型：textarea、codearea、htmlarea、json
    const imageElemArr = []; // 图片类型
    const objectElemArr = []; // object、array类型
    const funcElemArr = []; // event、datasource等特殊类型

    for (let index = 0, size = curPropertyOrder.length; index < size; index++) {
      const curKey = curPropertyOrder[index];
      const curItem = itemJSONObj.properties[curKey];
      const curType = curItem.type;
      switch (curType) {
        case 'input':
        case 'url':
          baseElemArr.push(curKey);
          break;
        case 'number':
        case 'quantity':
          numberElemArr.push(curKey);
          break;
        case 'radio':
        case 'checkboxes':
        case 'boolean':
        case 'color':
          selectElemArr.push(curKey);
          break;
        case 'date':
        case 'date-time':
        case 'time':
          timeElemArr.push(curKey);
          break;
        case 'textarea':
        case 'json':
        case 'codearea':
        case 'htmlarea':
          areaElemArr.push(curKey);
          break;
        case 'image':
          imageElemArr.push(curKey);
          break;
        case 'object':
        case 'array':
          objectElemArr.push(curKey);
          break;
        default:
          funcElemArr.push(curKey);
          break;
      }
    }

    // 获取最新的key值顺序数组
    itemJSONObj.propertyOrder = [
      ...baseElemArr,
      ...numberElemArr,
      ...selectElemArr,
      ...timeElemArr,
      ...imageElemArr,
      ...areaElemArr,
      ...objectElemArr,
      ...funcElemArr,
    ];
    // 触发onChange事件
    this.jsonSchemaChange(false);
  };
}
