/**
 * 通用功能组件
 * 提供 key值编辑、类型选择列表、title编辑、新增、复制、删除、数据项排序、高级设置 相关操作
 */
import * as React from 'react';
import { inject, observer } from 'mobx-react';
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
  isContainerSchema,
  getParentIndexRoute,
  TypeDataList,
} from '@wibetter/json-utils';
import { objClone, saveWebCacheData } from '$utils/index';
import { TypeInfoList } from '$data/TypeList';
import { BaseRendererProps } from '$types/index';
import './index.scss';

/**
 * 基本配置
 * 1、关于schema中的特殊属性：
 * 1）isFixed 表示当前元素是固定元素，不可 复制、拖拽和删除等；
 * 2）父元素 isContainer 为false 时，则当前元素不支持 新增、复制、删除和拖拽等操作，高级操作icon 显隐单独控制；
 */

interface BaseFormSchemaState {
  showAdvanceConfig: boolean;
}

class BaseFormSchema extends React.PureComponent<
  BaseRendererProps,
  BaseFormSchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);
    this.state = {
      showAdvanceConfig: false,
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.onAddBtnEvent = this.onAddBtnEvent.bind(this);
    this.onCopyBtnEvent = this.onCopyBtnEvent.bind(this);
    this.onDeleteBtnEvent = this.onDeleteBtnEvent.bind(this);
    this.handleJsonKeyChange = this.handleJsonKeyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.childElemSort = this.childElemSort.bind(this);
  }

  /** select类型变动事件处理器 */
  handleTypeChange = (newType: string) => {
    const { changeType } = this.props.schemaStore || {};
    const { indexRoute, jsonKey, targetJsonSchema } = this.props;
    if (targetJsonSchema.type === newType) return; // format值未改变则直接跳出

    // 根据当前新的类型获取初始化的对象数据
    const newTypeData = TypeDataList[newType];
    changeType(indexRoute, jsonKey, newTypeData, targetJsonSchema);
  };

  /** jsonKey类型输入值变动事件处理器 */
  handleJsonKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { editJsonKey, isExitJsonKey } = this.props.schemaStore || {};
    const { value } = event.target;
    const { indexRoute, jsonKey } = this.props;
    if (jsonKey === value) return; // jsonKey值未改变则直接跳出
    if (isExitJsonKey(indexRoute, value)) {
      message.warning('当前key已存在，请换一个吧。');
      return;
    }
    editJsonKey(indexRoute, value);
  };

  /** title类型输入值变动事件处理器 */
  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { editSchemaData } = this.props.schemaStore || {};
    const { value } = event.target;
    const { indexRoute, jsonKey, targetJsonSchema } = this.props;
    if (targetJsonSchema.title === value) return; // title值未改变则直接跳出
    editSchemaData(indexRoute, jsonKey, {
      title: value,
    });
  };

  /** 获取当前字段的类型清单
   *  根据父元素的类型决定当前字段的类型可选择范围，如果父类型为空则默认使用全新的可选择类型 */
  getCurrentTypeList = (parentType: string) => {
    const { SchemaTypeList } = this.props.schemaStore || {};
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
    const { addChildJson, addNextJsonData } = this.props.schemaStore || {};
    const { indexRoute, targetJsonSchema } = this.props;

    if (isContainerSchema(targetJsonSchema)) {
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
    const { indexRoute, targetJsonSchema, jsonKey } = this.props;
    const {
      getSchemaByIndexRoute,
      indexRoute2keyRoute,
      insertJsonData,
      getNewJsonKeyIndex,
    } = this.props.schemaStore || {};
    const newJsonData = objClone(targetJsonSchema);
    // 1.获取父元素
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = getSchemaByIndexRoute(parentIndexRoute);
    // 2.生成一个新的key值
    const newJsonKey = getNewJsonKeyIndex(parentJSONObj, jsonKey);
    // 3.复制时记录数据来源的路径值（备注：只保留最近的一次copy数值源）
    const curType = targetJsonSchema.type;
    saveWebCacheData(
      `${indexRoute2keyRoute(parentIndexRoute)}-${newJsonKey}-${curType}`,
      indexRoute2keyRoute(indexRoute),
    );
    // 4.插入复制的json数据
    insertJsonData(indexRoute, newJsonKey, newJsonData);
  };

  /** 删除字段项 */
  onDeleteBtnEvent = () => {
    const { jsonKey, indexRoute } = this.props;
    const { deleteJsonByIndex_CurKey } = this.props.schemaStore || {};
    deleteJsonByIndex_CurKey(indexRoute, jsonKey); // 删除对应的json数据对象
  };

  /** 拦截拖拽事件 */
  ignoreDragEvent = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  /** 数据项排序功能 */
  childElemSort = () => {
    const { indexRoute } = this.props;
    const { childElemSort } = this.props.schemaStore || {};
    childElemSort(indexRoute);
  };

  render() {
    const { getSchemaByIndexRoute } = this.props.schemaStore || {};
    const { parentType, indexRoute, jsonKey, nodeKey, targetJsonSchema } =
      this.props;
    const { showAdvanceConfig } = this.state;
    // 获取父元素
    const parentIndexRoute = indexRoute ? getParentIndexRoute(indexRoute) : '';
    const parentSchemaObj = parentIndexRoute
      ? getSchemaByIndexRoute(parentIndexRoute)
      : {};
    const parentIsContainer =
      (parentSchemaObj && parentSchemaObj.isContainer) ?? true; // 判断父级元素是否为容器元素（默认均为容器元素）

    const isFixed = targetJsonSchema.isFixed || this.props.isFixed || false;
    // readOnly: 是否为固有的属性（不可编辑、不可 // 是否不可编辑状态，默认为可编辑状态删除），用于控制json-editor端是否可编辑
    const readOnly = this.props.readOnly || targetJsonSchema.readOnly || false;
    const keyIsFixed =
      this.props.keyIsFixed !== undefined
        ? this.props.keyIsFixed
        : !parentIsContainer || isFixed; // key是否为不可编辑的属性
    const typeIsFixed =
      this.props.typeIsFixed !== undefined ? this.props.typeIsFixed : isFixed; // type是否为不可编辑的属性
    const titleIsFixed =
      this.props.titleIsFixed !== undefined ? this.props.titleIsFixed : isFixed; // title是否为不可编辑的属性
    const hideOperaBtn = this.props.hideOperaBtn || !parentIsContainer; // 是否隐藏操作类按钮

    const showAdvanceBtn = this.props.showAdvanceBtn ?? true; // 用于单独控制高级配置按钮显隐（目前仅QuantitySchema需要）
    const currentTypeList = this.getCurrentTypeList(parentType); // 根据父级元素类型获取可供使用的类型清单
    const curType = targetJsonSchema.type;
    const isContainerElem = isContainerSchema(targetJsonSchema); // 判断是否是容器类型元素

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
                disabled={keyIsFixed}
                // onPressEnter={this.handleJsonKeyChange}
                onBlur={this.handleJsonKeyChange}
              />
            </div>
            <div
              className="type-select-item"
              draggable="true"
              onDragStart={this.ignoreDragEvent}
            >
              <Select
                showSearch
                defaultValue={curType}
                style={{ width: 150 }}
                onChange={this.handleTypeChange}
                disabled={typeIsFixed}
                filterOption={(inputValue: string, option: any) => {
                  if (
                    (option && option.value.indexOf(inputValue) > -1) ||
                    (option.children &&
                      option.children.indexOf(inputValue) > -1)
                  ) {
                    return true;
                  }
                  return false;
                }}
              >
                {currentTypeList.map((item: string) => (
                  <Option key={item} value={item}>
                    {(TypeInfoList as any)[item] || item}
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
                disabled={titleIsFixed}
                //onPressEnter={this.handleTitleChange}
                onBlur={this.handleTitleChange}
              />
            </div>
            <div className="operate-item">
              {!hideOperaBtn && (
                <>
                  {!isFixed && (
                    <Tooltip title="删除">
                      <CloseOutlined
                        className="operate-btn delete-operate"
                        onClick={this.onDeleteBtnEvent}
                      />
                    </Tooltip>
                  )}
                  <Tooltip
                    title={isContainerElem ? '新增子元素' : '新增同级元素'}
                  >
                    <PlusOutlined
                      className="operate-btn"
                      onClick={this.onAddBtnEvent}
                    />
                  </Tooltip>
                  {/* 自动排序功能 */}
                  {isContainerElem && (
                    <Tooltip title={'数据项排序'}>
                      <SortAscendingOutlined
                        className="operate-btn"
                        onClick={this.childElemSort}
                      />
                    </Tooltip>
                  )}
                  {!isFixed && (
                    <>
                      <Tooltip title="复制">
                        <CopyOutlined
                          className="operate-btn"
                          onClick={this.onCopyBtnEvent}
                        />
                      </Tooltip>
                      <Tooltip title="按住进行拖拽">
                        <DragOutlined className="operate-btn drag-btn" />
                      </Tooltip>
                    </>
                  )}
                </>
              )}
              {showAdvanceBtn && (
                <Tooltip title="高级设置">
                  <SettingOutlined
                    className="operate-btn"
                    onClick={() => {
                      this.setState({
                        showAdvanceConfig: true,
                      });
                    }}
                  />
                </Tooltip>
              )}
            </div>
            {showAdvanceConfig && (
              <Modal
                visible={true}
                title={`高级设置 / 当前字段：${targetJsonSchema.title}(${jsonKey})`}
                onCancel={() => {
                  this.setState({
                    showAdvanceConfig: false,
                  });
                }}
                footer={[
                  <Button
                    key="submit"
                    type="primary"
                    onClick={() => {
                      this.setState({
                        showAdvanceConfig: false,
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

export default inject((stores: any) => ({
  schemaStore: stores.schemaStore,
}))(observer(BaseFormSchema));
