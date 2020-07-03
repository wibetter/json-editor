import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tree, message } from 'antd';
import ObjectSchema from '$components/ObjectSchema/index';
import { isEqual, isFirstSchemaElem } from '$utils/index';
import {
  getCurrentFormat,
  isEmptySchema,
  isSameParent,
  getCurPosition,
  moveForward,
} from '$utils/jsonSchema';
import './index.scss';

class JSONSchema extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    schemaData: PropTypes.object,
  };

  constructor(props) {
    super(props);
    // 根据props.schemaData对jsonSchema进行初始化
    if (props.schemaData) {
      this.props.initJSONSchemaData(props.schemaData);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.schemaData, this.props.schemaData)) {
      this.props.initJSONSchemaData(nextProps.schemaData);
    }
  }

  /**
   * 拖拽相关方法：开始拖动时触发的事件
   */
  onDragStart = (eventData) => {
    const { node } = eventData;
    // 设置只有指定类型的元素可以拖拽
    if (node.className && isFirstSchemaElem(node.className)) {
      message.warning('一级固定类型元素不支持拖拽哦');
      // eventData.event.preventDefault();
      // eventData.event.stopPropagation();
    }
  };

  /**
   * 拖拽相关方法：拖动完成时触发的事件
   */
  onDrop = (eventData) => {
    /**
     * dragNode：拖动的元素
     * node：拖拽的目标位置上的元素
     * 根据eventData中的dropPosition值判断插入位置会不准确
     * */
    const { dragNode, node } = eventData;
    const {
      getJSONDataByIndex,
      insertJsonData,
      deleteJsonByIndex,
      isExitJsonKey,
      isSupportCurType,
    } = this.props;

    if (dragNode.className && isFirstSchemaElem(dragNode.className)) return; // 一级固定类型元素不允许拖拽
    // 拖动的元素key
    const curIndexRoute = dragNode.indexRoute;
    const curJsonKey = dragNode.jsonKey;
    // 获取当前拖动的元素
    const curJsonObj = getJSONDataByIndex(curIndexRoute);
    console.log(curIndexRoute);

    // 放置的目标元素key
    let targetIndexRoute = node.indexRoute;
    console.log(targetIndexRoute);

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
      deleteJsonByIndex(curIndexRoute);
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
      const curType = getCurrentFormat(curJsonObj);
      const isSupportCurType_ = isSupportCurType(targetIndexRoute, curType);
      if (!isSupportCurType_) {
        message.warning(`目标位置不支持${curType}类型元素`);
        return;
      }
      // 非同级元素拖拽后删除
      if (node.dragOverGapTop) {
        /** 拖拽到目标元素前面 */
        if (curPosition === 'after') {
          deleteJsonByIndex(curIndexRoute);
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj, 'before');
        } else {
          // curPosition === 'before'
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj, 'before');
          deleteJsonByIndex(curIndexRoute);
        }
      } else if (node.dragOver || node.dragOverGapBottom) {
        /** 拖拽到目标元素当前位置，不进行位置置换，也认为是拖拽到目标元素后面 */
        if (curPosition === 'after') {
          deleteJsonByIndex(curIndexRoute);
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj);
        } else {
          // curPosition === 'before'
          insertJsonData(targetIndexRoute, curJsonKey, curJsonObj);
          deleteJsonByIndex(curIndexRoute);
        }
      }
    }
  };

  render() {
    const { jsonSchema } = this.props;
    const isEmpty = isEmptySchema(jsonSchema);
    /**
     * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此处进行拖拽事件的处理），
     * JSONSchema的一级字段必须为object类型（规避非法的jsonSchema数据，以及结构单一的jsonSchema数据，后续再单独考虑如何兼容单一结构的jsonSchema数据）。
     * */
    return (
      <div className="json-schema-container">
        {!isEmpty && (
          <Tree
            draggable={true}
            selectable={false}
            onDragStart={this.onDragStart}
            onDrop={this.onDrop}
            defaultExpandAll={false}
          >
            {ObjectSchema({
              parentType: '',
              jsonKey: '',
              indexRoute: '',
              nodeKey: '',
              targetJsonData: jsonSchema,
              isOnlyShowChild: true,
            })}
          </Tree>
        )}
        {isEmpty && (
          <p className="json-schema-empty">当前jsonSchema没有数据内容</p>
        )}
      </div>
    );
  }
}

export default inject((stores) => ({
  jsonSchema: stores.JSONSchemaStore.jsonSchema,
  initJSONSchemaData: stores.JSONSchemaStore.initJSONSchemaData,
  getJSONDataByIndex: stores.JSONSchemaStore.getJSONDataByIndex,
  insertJsonData: stores.JSONSchemaStore.insertJsonData,
  deleteJsonByIndex: stores.JSONSchemaStore.deleteJsonByIndex,
  isExitJsonKey: stores.JSONSchemaStore.isExitJsonKey,
  isSupportCurType: stores.JSONSchemaStore.isSupportCurType,
}))(observer(JSONSchema));
