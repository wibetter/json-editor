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
import AdvanceConfig from '$components/AdvanceConfig/index';
import { getParentIndexRoute } from '@wibetter/json-utils';
import { objClone, saveWebCacheData } from '$utils/index';
import { schemaRegistry } from '$core/index';
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
    if (targetJsonSchema.type === newType) return;

    // 优先从 schemaRegistry 获取新类型的默认 schema
    const newTypeData = schemaRegistry.getDefaultSchema(newType);
    changeType(indexRoute, jsonKey, newTypeData, targetJsonSchema);
  };

  /** jsonKey类型输入值变动事件处理器 */
  handleJsonKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { editJsonKey, isExitJsonKey } = this.props.schemaStore || {};
    const { value } = event.target;
    const { indexRoute, jsonKey } = this.props;
    if (jsonKey === value) return;
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
    if (targetJsonSchema.title === value) return;
    editSchemaData(indexRoute, jsonKey, { title: value });
  };

  /** 获取所有可用类型列表（去掉嵌套限制，允许所有类型） */
  getAllTypeList = (): string[] => {
    return schemaRegistry.getAllTypes();
  };

  /** 新增字段项 */
  onAddBtnEvent = () => {
    const { addChildJson, addNextJsonData } = this.props.schemaStore || {};
    const { indexRoute, targetJsonSchema } = this.props;

    const curType = targetJsonSchema?.type;
    // 从 schemaRegistry 获取当前类型的描述
    const descriptor = curType ? schemaRegistry.get(curType) : undefined;

    if (descriptor?.isContainer) {
      addChildJson(indexRoute);
    } else {
      addNextJsonData(indexRoute);
    }
  };

  /** 复制功能 */
  onCopyBtnEvent = () => {
    const { indexRoute, targetJsonSchema, jsonKey } = this.props;
    const {
      getSchemaByIndexRoute,
      indexRoute2keyRoute,
      insertJsonData,
      getNewJsonKeyIndex,
    } = this.props.schemaStore || {};
    const newJsonData = objClone(targetJsonSchema);
    const parentIndexRoute = getParentIndexRoute(indexRoute);
    const parentJSONObj = getSchemaByIndexRoute(parentIndexRoute);
    const newJsonKey = getNewJsonKeyIndex(parentJSONObj, jsonKey);
    const curType = targetJsonSchema.type;
    saveWebCacheData(
      `${indexRoute2keyRoute(parentIndexRoute)}-${newJsonKey}-${curType}`,
      indexRoute2keyRoute(indexRoute),
    );
    insertJsonData(indexRoute, newJsonKey, newJsonData);
  };

  /** 删除字段项 */
  onDeleteBtnEvent = () => {
    const { jsonKey, indexRoute } = this.props;
    const { deleteJsonByIndex_CurKey } = this.props.schemaStore || {};
    deleteJsonByIndex_CurKey(indexRoute, jsonKey);
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
    const parentIndexRoute = indexRoute ? getParentIndexRoute(indexRoute) : '';
    const parentSchemaObj = parentIndexRoute
      ? getSchemaByIndexRoute(parentIndexRoute)
      : {};
    const parentIsContainer =
      (parentSchemaObj && parentSchemaObj.isContainer) ?? true;

    const curType = targetJsonSchema?.type;

    // 从 schemaRegistry 获取当前类型的描述
    const descriptor = curType ? schemaRegistry.get(curType) : undefined;

    const isFixed = descriptor?.isFixed || false;

    const readOnly = descriptor?.readOnly || false;

    const keyIsFixed =
      this.props.keyIsFixed !== undefined
        ? this.props.keyIsFixed
        : descriptor?.keyIsFixed !== undefined
          ? descriptor.keyIsFixed
          : !parentIsContainer || isFixed;

    const typeIsFixed =
      this.props.typeIsFixed !== undefined
        ? this.props.typeIsFixed
        : descriptor?.typeIsFixed !== undefined
          ? descriptor.typeIsFixed
          : isFixed;

    const titleIsFixed =
      this.props.titleIsFixed !== undefined
        ? this.props.titleIsFixed
        : descriptor?.titleIsFixed !== undefined
          ? descriptor.titleIsFixed
          : isFixed;

    const hideOperaBtn =
      this.props.hideOperaBtn !== undefined
        ? this.props.hideOperaBtn
        : descriptor?.hideOperaBtn !== undefined
          ? descriptor.hideOperaBtn
          : !parentIsContainer;

    // showAdvanceBtn 优先读 props，其次 descriptor，默认 true
    const showAdvanceBtn =
      this.props.showAdvanceBtn !== undefined
        ? this.props.showAdvanceBtn
        : descriptor?.showAdvanceBtn !== undefined
          ? descriptor.showAdvanceBtn
          : true;

    // 获取所有可用类型列表（无限制）
    const currentTypeList = this.getAllTypeList();

    const isContainerElem = descriptor?.isContainer ?? false;

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
                    {schemaRegistry.get(item)?.label || item}
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
                open={true}
                title={`高级设置 / 当前字段：${targetJsonSchema.title}(${jsonKey})`}
                width={800}
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
