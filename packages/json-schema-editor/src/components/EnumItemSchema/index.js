import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Select, Tooltip } from 'antd';
const { Option } = Select;
import { PlusOutlined, CloseOutlined, CopyOutlined } from '@ant-design/icons';
import './index.scss';

class EnumItemSchema extends React.PureComponent {
  static propTypes = {
    indexRoute: PropTypes.string,
    enumIndex: PropTypes.any,
    enumKey: PropTypes.string,
    enumText: PropTypes.string,
    enumNodeKey: PropTypes.string,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.onAddBtnEvent = this.onAddBtnEvent.bind(this);
    this.onCopyBtnEvent = this.onCopyBtnEvent.bind(this);
    this.onDeleteBtnEvent = this.onDeleteBtnEvent.bind(this);
    this.handleEnumKeyChange = this.handleEnumKeyChange.bind(this);
    this.handleEnumTextChange = this.handleEnumTextChange.bind(this);
  }

  /** jsonKey类型输入值变动事件处理器 */
  handleEnumKeyChange = (event) => {
    const { value } = event.target;
    const {
      indexRoute,
      enumIndex,
      enumKey,
      isExitEnumKey,
      updateEnumKey,
    } = this.props;
    if (value !== enumKey) {
      if (isExitEnumKey(indexRoute, enumIndex, value)) {
        message.warning('对不起，存在相同的key值，请重新编辑。');
      } else {
        updateEnumKey(indexRoute, enumIndex, value); // 更新枚举值
      }
    }
  };

  /** enumText类型输入值变动事件处理器 */
  handleEnumTextChange = (event) => {
    const { value } = event.target;
    const { indexRoute, enumIndex, enumText, updateEnumText } = this.props;
    if (value !== enumText) {
      updateEnumText(indexRoute, enumIndex, value); // 更新枚举值
    }
  };

  /** 新增选择项 */
  onAddBtnEvent = () => {
    const { indexRoute, enumIndex, addEnumItem } = this.props;
    addEnumItem(indexRoute, enumIndex); // 新增枚举值
  };

  /** 复制功能 */
  onCopyBtnEvent = () => {
    const { indexRoute, enumIndex, copyEnumItem } = this.props;
    copyEnumItem(indexRoute, enumIndex); // copy枚举值
  };

  /** 删除字段项 */
  onDeleteBtnEvent = () => {
    const {
      indexRoute,
      enumIndex,
      getSchemaByIndexRoute,
      deleteEnumItem,
    } = this.props;
    const itemJSONObj = getSchemaByIndexRoute(indexRoute);
    if (itemJSONObj.enum && itemJSONObj.enum.length > 1) {
      deleteEnumItem(indexRoute, enumIndex); // 删除指定位置的枚举值
    } else {
      message.warning('删除失败，请至少保留一个可选项。');
    }
  };

  render() {
    const { enumKey, enumText, enumNodeKey } = this.props;

    return (
      <div className="enum-schema-box" id={enumNodeKey}>
        <div className="key-input-item">
          <Input
            defaultValue={enumKey}
            onPressEnter={this.handleEnumKeyChange}
            onBlur={this.handleEnumKeyChange}
          />
        </div>
        <div className="type-select-item">
          <Select defaultValue="string" style={{ width: 120 }}>
            <Option key="string" value="string">
              string
            </Option>
          </Select>
        </div>
        <div className="title-input-item">
          <Input
            defaultValue={enumText}
            onPressEnter={this.handleEnumTextChange}
            onBlur={this.handleEnumTextChange}
          />
        </div>
        <div className="operate-item">
          <Tooltip title="删除">
            <CloseOutlined
              className="operate-btn delete-operate"
              onClick={this.onDeleteBtnEvent}
            />
          </Tooltip>
          <Tooltip title="新增兄弟节点">
            <PlusOutlined
              className="operate-btn"
              onClick={this.onAddBtnEvent}
            />
          </Tooltip>
          <Tooltip title="复制">
            <CopyOutlined
              className="operate-btn"
              onClick={this.onCopyBtnEvent}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  getSchemaByIndexRoute: stores.jsonSchemaStore.getSchemaByIndexRoute,
  updateEnumKey: stores.jsonSchemaStore.updateEnumKey,
  updateEnumText: stores.jsonSchemaStore.updateEnumText,
  isExitEnumKey: stores.jsonSchemaStore.isExitEnumKey,
  deleteEnumItem: stores.jsonSchemaStore.deleteEnumItem,
  addEnumItem: stores.jsonSchemaStore.addEnumItem,
  copyEnumItem: stores.jsonSchemaStore.copyEnumItem,
}))(observer(EnumItemSchema));
