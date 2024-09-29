/**
 * 通用功能组件
 * 提供 key值编辑、类型选择列表、title编辑、新增、复制、删除、数据项排序、高级设置 相关操作
 */
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Select, Modal, Button, Tooltip } from 'antd';
const { Option } = Select;
import {
  PlusOutlined,
  CloseOutlined,
  CopyOutlined,
  DragOutlined,
  SettingOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons';
import AdvanceConfig from '$components/AdvanceConfig/index'; // 高级配置内容
import {
  isBoxSchemaData,
  getCurrentFormat,
  getParentIndexRoute,
  TypeDataList,
  isFirstSchemaData,
} from '@wibetter/json-utils';
import { objClone, saveWebCacheData } from '$utils/index';
import './index.scss';

class BaseFormSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    isFixed: PropTypes.any,
    hideOperaBtn: PropTypes.any,
    isShowAdvanceBtn: PropTypes.any,
    keyIsFixed: PropTypes.any,
    typeIsFixed: PropTypes.any,
    titleIsFixed: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isShowAdvance: false,
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.onAddBtnEvent = this.onAddBtnEvent.bind(this);
    this.onCopyBtnEvent = this.onCopyBtnEvent.bind(this);
    this.onDeleteBtnEvent = this.onDeleteBtnEvent.bind(this);
    this.handleJsonKeyChange = this.handleJsonKeyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.selectHandleChange = this.selectHandleChange.bind(this);
    this.childElemSort = this.childElemSort.bind(this);
  }

  /** select类型变动事件处理器 */
  selectHandleChange = (newFormat) => {
    const { indexRoute, jsonKey, changeType, targetJsonSchema } = this.props;
    if (targetJsonSchema.format === newFormat) return; // format值未改变则直接跳出
    // 根据当前新的类型获取初始化的对象数据
    const newTypeData = TypeDataList[newFormat];
    changeType(indexRoute, jsonKey, newTypeData);
  };

  /** jsonKey类型输入值变动事件处理器 */
  handleJsonKeyChange = (event) => {
    const { value } = event.target;
    const { indexRoute, jsonKey, editJsonKey, isExitJsonKey } = this.props;
    if (jsonKey === value) return; // jsonKey值未改变则直接跳出
    if (isExitJsonKey(indexRoute, value)) {
      message.warning('当前key已存在，请换一个吧。');
      return;
    }
    editJsonKey(indexRoute, value);
  };

  /** title类型输入值变动事件处理器 */
  handleTitleChange = (event) => {
    const { value } = event.target;
    const { indexRoute, jsonKey, editSchemaData, targetJsonSchema } =
      this.props;
    if (targetJsonSchema.title === value) return; // title值未改变则直接跳出
    editSchemaData(indexRoute, jsonKey, {
      title: value,
    });
  };

  /** 获取当前字段的类型清单
   *  根据父元素的类型决定当前字段的类型可选择范围，如果父类型为空则默认使用全新的可选择类型 */
  getCurrentTypeList = (parentType) => {
    const { SchemaTypeList } = this.props;
    const myParentType = parentType || 'all';
    let typeList = SchemaTypeList[myParentType];
    if (!typeList || typeList.length === 0) {
      typeList = SchemaTypeList.all; // 如果当前类型清单为空，则默认展示所有的字段类型
    }
    return typeList;
  };

  /** 新增字段项
   *  备注：如果当前字段是容器类型，则为其添加子字段项，如果是基本类型则为其添加兄弟节点字段项 */
  onAddBtnEvent = () => {
    const { indexRoute, targetJsonSchema, addChildJson, addNextJsonData } =
      this.props;
    const currentFormat = getCurrentFormat(targetJsonSchema);

    if (isBoxSchemaData(currentFormat)) {
      // 表示当前是容器类型字段
      addChildJson(indexRoute);
    } else {
      // 插入兄弟节点
      addNextJsonData(indexRoute);
    }
  };

  /** 复制功能
   *  备注：需要自动生成一个key值 */
  onCopyBtnEvent = () => {
    const {
      indexRoute,
      targetJsonSchema,
      getSchemaByIndexRoute,
      indexRoute2keyRoute,
      jsonKey,
      insertJsonData,
      getNewJsonKeyIndex,
    } = this.props;
    const newJsonData = objClone(targetJsonSchema);
    // 1.获取父元素
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = getSchemaByIndexRoute(parentIndexRoute);
    // 2.生成一个新的key值
    const newJsonKey = getNewJsonKeyIndex(parentJSONObj, jsonKey);
    // 3.复制时记录数据来源的路径值（备注：只保留最近的一次copy数值源）
    const currentFormat = getCurrentFormat(targetJsonSchema);
    saveWebCacheData(
      `${indexRoute2keyRoute(parentIndexRoute)}-${newJsonKey}-${currentFormat}`,
      indexRoute2keyRoute(indexRoute),
    );
    // 4.插入复制的json数据
    insertJsonData(indexRoute, newJsonKey, newJsonData);
  };

  /** 删除字段项 */
  onDeleteBtnEvent = () => {
    const { jsonKey, indexRoute, deleteJsonByIndex_CurKey } = this.props;
    deleteJsonByIndex_CurKey(indexRoute, jsonKey); // 删除对应的json数据对象
  };

  /** 拦截拖拽事件 */
  ignoreDragEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  /** 数据项排序功能 */
  childElemSort = () => {
    const { indexRoute, childElemSort } = this.props;
    childElemSort(indexRoute);
  };

  render() {
    const { parentType, indexRoute, jsonKey, nodeKey, targetJsonSchema } =
      this.props;
    const { isShowAdvance } = this.state;
    const isFirstSchema = this.props.isFirstSchema || false; // 是否是最外层的schema元素
    const isFixed = this.props.isFixed || false; // 是否为固有的属性（不可编辑、不可删除）
    const keyIsFixed = this.props.keyIsFixed || false; // key是否为不可编辑的属性
    const typeIsFixed = this.props.typeIsFixed || false; // type是否为不可编辑的属性
    const titleIsFixed = this.props.titleIsFixed || false; // title是否为不可编辑的属性
    const isShowAdvanceBtn = this.props.isShowAdvanceBtn || false; // 是否显示高级操作按钮
    const currentTypeList = this.getCurrentTypeList(parentType); // 根据父级元素类型获取可供使用的类型清单
    const currentFormat = getCurrentFormat(targetJsonSchema);
    const isFixedSchema =
      targetJsonSchema.isFixedSchema || isFirstSchemaData(currentFormat); // 一级固定类型元素不允许拖拽
    const hideOperaBtn = this.props.hideOperaBtn || false; // 是否隐藏操作类按钮
    const readOnly = isFixedSchema || isFirstSchema || isFixed || false; // 是否不可编辑状态，默认为可编辑状态
    const isBoxElem = isBoxSchemaData(currentFormat); // 判断是否是容器类型元素

    return (
      <>
        {targetJsonSchema && (
          <div className="base-schema-box" id={nodeKey}>
            <div
              className="key-input-item"
              draggable="true"
              onDragStart={this.ignoreDragEvent}
            >
              <Input
                defaultValue={jsonKey || 'key值不存在'}
                disabled={readOnly || keyIsFixed}
                onPressEnter={this.handleJsonKeyChange}
                onBlur={this.handleJsonKeyChange}
              />
            </div>
            <div
              className="type-select-item"
              draggable="true"
              onDragStart={this.ignoreDragEvent}
            >
              <Select
                defaultValue={currentFormat}
                style={{ width: 150 }}
                onChange={this.selectHandleChange}
                disabled={readOnly || typeIsFixed}
              >
                {currentTypeList.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
            <div
              className="title-input-item"
              draggable="true"
              onDragStart={this.ignoreDragEvent}
            >
              <Input
                defaultValue={targetJsonSchema.title}
                disabled={readOnly || titleIsFixed}
                onPressEnter={this.handleTitleChange}
                onBlur={this.handleTitleChange}
              />
            </div>
            {!hideOperaBtn && (
              <div className="operate-item">
                {!readOnly && (
                  <Tooltip title="删除">
                    <CloseOutlined
                      className="operate-btn delete-operate"
                      onClick={this.onDeleteBtnEvent}
                    />
                  </Tooltip>
                )}
                <Tooltip title={isBoxElem ? '新增子节点' : '新增兄弟节点'}>
                  <PlusOutlined
                    className="operate-btn"
                    onClick={this.onAddBtnEvent}
                  />
                </Tooltip>

                {/* 自动排序功能 */}
                {isBoxElem && (
                  <Tooltip title={'数据项排序'}>
                    <SortAscendingOutlined
                      className="operate-btn"
                      onClick={this.childElemSort}
                    />
                  </Tooltip>
                )}

                {!readOnly && (
                  <Tooltip title="复制">
                    <CopyOutlined
                      className="operate-btn"
                      onClick={this.onCopyBtnEvent}
                    />
                  </Tooltip>
                )}
                {!readOnly && (
                  <Tooltip title="高级设置">
                    <SettingOutlined
                      className="operate-btn"
                      onClick={() => {
                        // 显示高级设置模态框
                        this.setState({
                          isShowAdvance: true,
                        });
                      }}
                    />
                  </Tooltip>
                )}
                {!readOnly && (
                  <Tooltip title="按住进行拖拽">
                    <DragOutlined className="operate-btn drag-btn" />
                  </Tooltip>
                )}
              </div>
            )}
            {hideOperaBtn && (
              <div className="operate-item">
                {isShowAdvanceBtn && (
                  <Tooltip title="高级设置">
                    <SettingOutlined
                      className="operate-btn"
                      onClick={() => {
                        // 显示高级设置模态框
                        this.setState({
                          isShowAdvance: true,
                        });
                      }}
                    />
                  </Tooltip>
                )}
                &nbsp;
              </div>
            )}
            {isShowAdvance && (
              <Modal
                visible={true}
                title={`高级设置 / 当前字段：${targetJsonSchema.title}(${jsonKey})`}
                onCancel={() => {
                  this.setState({
                    isShowAdvance: false,
                  });
                }}
                footer={[
                  <Button
                    key="submit"
                    type="primary"
                    onClick={() => {
                      this.setState({
                        isShowAdvance: false,
                      });
                    }}
                  >
                    保存并关闭
                  </Button>,
                ]}
              >
                <AdvanceConfig
                  {...{
                    indexRoute,
                    jsonKey,
                    targetJsonSchema,
                  }}
                />
              </Modal>
            )}
          </div>
        )}
        {!targetJsonSchema && (
          <div className="base-schema-box">
            <div className="warn-text">{jsonKey}：数据元素为空</div>
          </div>
        )}
      </>
    );
  }
}

export default inject((stores) => ({
  SchemaTypeList: stores.jsonSchemaStore.SchemaTypeList,
  getNewJsonKeyIndex: stores.jsonSchemaStore.getNewJsonKeyIndex,
  deleteJsonByIndex_CurKey: stores.jsonSchemaStore.deleteJsonByIndex_CurKey,
  getSchemaByIndexRoute: stores.jsonSchemaStore.getSchemaByIndexRoute,
  indexRoute2keyRoute: stores.jsonSchemaStore.indexRoute2keyRoute,
  addChildJson: stores.jsonSchemaStore.addChildJson,
  addNextJsonData: stores.jsonSchemaStore.addNextJsonData,
  insertJsonData: stores.jsonSchemaStore.insertJsonData,
  childElemSort: stores.jsonSchemaStore.childElemSort,
  editSchemaData: stores.jsonSchemaStore.editSchemaData,
  editJsonKey: stores.jsonSchemaStore.editJsonKey,
  changeType: stores.jsonSchemaStore.changeType,
  isExitJsonKey: stores.jsonSchemaStore.isExitJsonKey,
}))(observer(BaseFormSchema));
