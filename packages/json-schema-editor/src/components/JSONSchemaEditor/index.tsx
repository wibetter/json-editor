import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Tree, message } from 'antd';
import ObjectSchema from '$schemaRenderer/ObjectSchema/index';
import MappingRender from '$schemaRenderer/MappingRender';
import { isEqual, saveWebCacheData, getWebCacheData } from '$utils/index';
import JsonView from '$components/JsonView';
import {
  getParentIndexRoute,
  isEmptySchema,
  isSameParent,
  getCurPosition,
  moveForward,
} from '@wibetter/json-utils';
import { BaseRendererProps } from '$types/index';
import './index.scss';

class JSONSchema extends React.PureComponent<BaseRendererProps> {
  constructor(props: BaseRendererProps) {
    super(props);
    const { initJSONSchemaData, initOnChange, initSchemaTypeList } =
      this.props.schemaStore || {};

    // 根据props.data对jsonSchema进行初始化
    if (props.data) {
      initJSONSchemaData(props.data);
    }
    // 记录onChange事件
    if (props.onChange) {
      initOnChange(props.onChange);
    }
    // 重置TypeList
    if (props.typeList) {
      initSchemaTypeList(props.typeList);
    }
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    const { initJSONSchemaData, initOnChange, initSchemaTypeList } =
      this.props.schemaStore || {};
    if (!isEqual(nextProps.data, this.props.data)) {
      initJSONSchemaData(nextProps.data);
    }
    // 记录onChange事件
    if (!isEqual(nextProps.onChange, this.props.onChange)) {
      initOnChange(nextProps.onChange);
    }
    // 重置TypeList
    if (!isEqual(nextProps.typeList, this.props.typeList)) {
      initSchemaTypeList(nextProps.typeList);
    }
  }

  /**
   * 拖拽相关方法：开始拖动时触发的事件
   */
  onDragStart = (eventData: any) => {
    const { getSchemaByIndexRoute } = this.props.schemaStore || {};
    const { node } = eventData;
    const curIndexRoute = node.indexRoute;
    const curJsonObj = getSchemaByIndexRoute(curIndexRoute);
    if (curJsonObj.isFixed) {
      message.warning('当前元素不支持拖拽哦。');
    }
  };

  /**
   * 拖拽相关方法：拖动完成时触发的事件
   */
  onDrop = (eventData: any) => {
    /**
     * dragNode：拖动的元素
     * node：拖拽的目标位置上的元素
     * 根据eventData中的dropPosition值判断插入位置会不准确
     * */
    const { dragNode, node } = eventData;
    const {
      getSchemaByIndexRoute,
      indexRoute2keyRoute,
      insertJsonData,
      deleteJsonByIndex,
      isExitJsonKey,
      isSupportCurType,
    } = this.props.schemaStore || {};

    // 拖动的元素key
    const curIndexRoute = dragNode.indexRoute;
    const curJsonKey = dragNode.jsonKey;
    // 获取当前拖动的元素
    const curJsonObj = getSchemaByIndexRoute(curIndexRoute);
    if (curJsonObj.isFixed) return; // 固定类型元素不允许拖拽

    // 放置的目标元素key
    let targetIndexRoute = node.indexRoute;

    // 判断是否是同一个父级容器
    const isSameParentElem = isSameParent(curIndexRoute, targetIndexRoute);
    // 判断先后位置
    const curPosition = getCurPosition(curIndexRoute, targetIndexRoute);

    if (isSameParentElem) {
      /** 同级元素的拖拽交互
       * 备注：1、同级元素之间的拖拽不用考虑是否有重名key；
       * 2、先删除再进行插入，避免插入时报同名错误；
       * */
      // 先删除当前拖动的元素
      deleteJsonByIndex(curIndexRoute, true); // 设置为true表示跳过onChange
      // 如果curPosition === 'before'，删除后需要进行移位操作
      if (curPosition === 'before') {
        /**
         * 当拖动的元素在前面，目标元素在后面，
         * 先删除拖动元素时会导致targetIndexRoute发生偏移，需要向前移动一位进行矫正（以便继续访问到此前的目标元素）
         */
        targetIndexRoute = moveForward(targetIndexRoute);
      }
      if (node.dragOverGapTop) {
        /** 拖拽到目标元素前面 */
        insertJsonData(targetIndexRoute, curJsonKey, curJsonObj, 'before');
      } else if (node.dragOver || node.dragOverGapBottom) {
        /** 拖拽到目标元素当前位置，不进行位置置换，也认为是拖拽到目标元素后面 */
        insertJsonData(targetIndexRoute, curJsonKey, curJsonObj);
      }
    } else {
      /** 非同级元素的拖拽交互 */
      // 判断是否有重名的jsonKey（非同级元素拖拽中可能出现重名）
      const isExitJsonKey_ = isExitJsonKey(targetIndexRoute, curJsonKey);
      if (isExitJsonKey_) {
        message.warning('目标位置中有重名的元素');
        return;
      }
      const curType = curJsonObj.type;
      const isSupportCurType_ = isSupportCurType(targetIndexRoute, curType);
      if (!isSupportCurType_) {
        message.warning(`目标位置不支持${curType}类型元素`);
        return;
      }

      // 跨级拖动时
      const curKeyRoute = indexRoute2keyRoute(curIndexRoute);
      const targetParentIndexRoute = getParentIndexRoute(targetIndexRoute);
      // 先获取拖拽元素的原始路径
      const cacheKeyRoute = getWebCacheData(`${curKeyRoute}-${curType}`);
      saveWebCacheData(
        `${indexRoute2keyRoute(
          targetParentIndexRoute,
        )}-${curJsonKey}-${curType}`,
        cacheKeyRoute || curKeyRoute,
      );

      // 非同级元素拖拽后删除
      if (node.dragOverGapTop) {
        /** 拖拽到目标元素前面 */
        if (curPosition === 'after') {
          deleteJsonByIndex(curIndexRoute, true); // 设置为true表示跳过onChange
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj, 'before');
        } else {
          // curPosition === 'before'
          insertJsonData(
            targetIndexRoute,
            curJsonKey,
            curJsonObj,
            'before',
            true,
          ); // 设置为true表示跳过onChange
          deleteJsonByIndex(curIndexRoute);
        }
      } else if (node.dragOver || node.dragOverGapBottom) {
        /** 拖拽到目标元素当前位置，不进行位置置换，也认为是拖拽到目标元素后面 */
        if (curPosition === 'after') {
          deleteJsonByIndex(curIndexRoute, true); // 设置为true表示跳过onChange
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj);
        } else {
          // curPosition === 'before'
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj, '', true); // 设置为true表示跳过onChange
          deleteJsonByIndex(curIndexRoute);
        }
      }
    }
  };

  /**
   * 默认展开二级schema面板
   */
  catchExpandedKeys = (jsonSchema: any) => {
    const defaultExpandedKeys: string[] = [];
    if (jsonSchema && jsonSchema.propertyOrder && jsonSchema.properties) {
      jsonSchema.propertyOrder.map((key: string, index: number) => {
        /** 1. 获取当前元素的key值 */
        const currentJsonKey = key;
        /** 2. 获取当前元素的json数据对象 */
        const currentSchemaData = jsonSchema.properties[currentJsonKey];
        /** 3. 判断是否是容器类型元素，如果是则禁止选中 */
        const curType = currentSchemaData.type;
        /** 4. 获取当前元素的id，用于做唯一标识 */
        let nodeKey = `${curType}-${currentJsonKey}`; // 使用当前format+jsonKey作为nodeKey
        defaultExpandedKeys.push(nodeKey);
      });
    }
    return defaultExpandedKeys;
  };

  render() {
    const { jsonView, jsonViewReadOnly } = this.props;
    const { jsonSchema, schemaChange } = this.props.schemaStore || {};
    const isEmpty = isEmptySchema(jsonSchema);
    const curType = jsonSchema.type;
    /**
     * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此处进行拖拽事件的处理），
     * JSONSchema的一级字段必须为object类型（规避非法的jsonSchema数据，以及结构单一的jsonSchema数据，
     * 后续再单独考虑如何兼容单一结构的jsonSchema数据）。
     * */
    return (
      <div className="json-schema-container">
        {!isEmpty && !jsonView && (
          <>
            <Tree
              draggable={true}
              selectable={false}
              onDragStart={this.onDragStart}
              onDrop={this.onDrop}
              defaultExpandedKeys={
                curType === 'object' && !isEmpty
                  ? this.catchExpandedKeys(jsonSchema)
                  : []
              }
            >
              {curType === 'object' &&
                ObjectSchema({
                  ...this.props,
                  parentType: '',
                  jsonKey: '',
                  indexRoute: '',
                  nodeKey: '',
                  targetJsonSchema: jsonSchema,
                  isOnlyShowChild: true, // 一级object类型不显示，仅显示其子项
                })}
              {curType !== 'object' &&
                MappingRender({
                  ...this.props,
                  parentType: '',
                  jsonKey: '',
                  indexRoute: '',
                  nodeKey: 'first-schema',
                  targetJsonSchema: jsonSchema,
                  key: 'schema',
                  isFirstSchema: true,
                })}
            </Tree>
          </>
        )}
        {!isEmpty && jsonView && (
          <JsonView
            jsonData={jsonSchema}
            readOnly={jsonViewReadOnly ?? true}
            maxLines={25}
            onChange={schemaChange}
          />
        )}
        {isEmpty && (
          <p className="json-schema-empty">当前jsonSchema没有数据内容</p>
        )}
      </div>
    );
  }
}

export default inject((stores: any) => ({
  schemaStore: stores.schemaStore,
}))(observer(JSONSchema));
