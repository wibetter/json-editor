import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Select, Tooltip } from 'antd';
const { Option } = Select;
import { PlusOutlined, CloseOutlined, CopyOutlined } from '@ant-design/icons';
import './index.scss';

class OptionSchema extends React.PureComponent {
  static propTypes = {
    indexRoute: PropTypes.string,
    optionIndex: PropTypes.any,
    optionLabel: PropTypes.string,
    optionValue: PropTypes.string,
    optionNodeKey: PropTypes.string,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.onAddBtnEvent = this.onAddBtnEvent.bind(this);
    this.onCopyBtnEvent = this.onCopyBtnEvent.bind(this);
    this.onDeleteBtnEvent = this.onDeleteBtnEvent.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 选项Label变动事件处理器 */
  handleLabelChange = (event) => {
    const { value } = event.target;
    const {
      indexRoute,
      optionIndex,
      optionLabel,
      isExitOptionLabel,
      updateOptionLabel,
    } = this.props;
    if (value !== optionLabel) {
      if (isExitOptionLabel(indexRoute, value)) {
        message.warning('对不起，存在相同的Label值，请重新设置。');
      } else {
        updateOptionLabel(indexRoute, optionIndex, value);
      }
    }
  };

  /** 选项数值变动事件处理器 */
  handleValueChange = (event) => {
    const { value } = event.target;
    const { indexRoute, optionIndex, optionValue, updateOptionValue } =
      this.props;
    if (value !== optionValue) {
      updateOptionValue(indexRoute, optionIndex, value);
    }
  };

  /** 新增选择项 */
  onAddBtnEvent = () => {
    const { indexRoute, optionIndex, addOptionItem } = this.props;
    addOptionItem(indexRoute, optionIndex); // 新增枚举值
  };

  /** 复制功能 */
  onCopyBtnEvent = () => {
    const { indexRoute, optionIndex, copyOptionItem } = this.props;
    copyOptionItem(indexRoute, optionIndex); // copy枚举值
  };

  /** 删除字段项 */
  onDeleteBtnEvent = () => {
    const { indexRoute, optionIndex, getSchemaByIndexRoute, deleteOptionItem } =
      this.props;
    const itemJSONObj = getSchemaByIndexRoute(indexRoute);
    if (itemJSONObj.options && itemJSONObj.options.length > 1) {
      deleteOptionItem(indexRoute, optionIndex); // 删除指定位置的枚举值
    } else {
      message.warning('删除失败，至少保留一个可选项。');
    }
  };

  render() {
    const { optionLabel, optionValue, optionNodeKey } = this.props;

    return (
      <div className="option-schema-box" id={optionLabel}>
        <div className="key-input-item">
          <Input
            defaultValue={optionLabel}
            onPressEnter={this.handleLabelChange}
            onBlur={this.handleLabelChange}
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
            defaultValue={optionValue}
            onPressEnter={this.handleValueChange}
            onBlur={this.handleValueChange}
          />
        </div>
        <div className="operate-item">
          <Tooltip title="删除">
            <CloseOutlined
              className="operate-btn delete-operate"
              onClick={this.onDeleteBtnEvent}
            />
          </Tooltip>
          <Tooltip title="新增可选项">
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
  updateOptionLabel: stores.jsonSchemaStore.updateOptionLabel,
  updateOptionValue: stores.jsonSchemaStore.updateOptionValue,
  isExitOptionLabel: stores.jsonSchemaStore.isExitOptionLabel,
  deleteOptionItem: stores.jsonSchemaStore.deleteOptionItem,
  addOptionItem: stores.jsonSchemaStore.addOptionItem,
  copyOptionItem: stores.jsonSchemaStore.copyOptionItem,
}))(observer(OptionSchema));
