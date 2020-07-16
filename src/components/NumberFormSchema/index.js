import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, InputNumber, message, Tooltip } from 'antd';

class NumberFormSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (newVal) => {
    const { keyRoute, targetJsonData, updateFormValueData } = this.props;
    if (newVal < targetJsonData.minimum) {
      message.warning(
        `小于设定的最小数值${targetJsonData.minimum}，请重新输入。`,
      );
    } else if (newVal > targetJsonData.maximum) {
      message.warning(
        `超过设定的最大数值${targetJsonData.maximum}，请重新输入。`,
      );
    } else {
      updateFormValueData(keyRoute, newVal); // 更新数值
    }
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonData,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonData.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonData.isRequired || false; // 是否必填（默认非必填）

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <span className="title-text warning-text">
            {readOnly ? '[只读]' : ''}
          </span>
          <Tooltip title={targetJsonData.description} placement="top">
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' && targetJsonData.title.length > 6
                  ? targetJsonData.title
                  : ''
              }
            >
              {targetJsonData.title}
            </span>
          </Tooltip>
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <InputNumber
              style={{ display: 'inline-block' }}
              disabled={readOnly}
              required={isRequired}
              placeholder={
                targetJsonData.placeholder || `请输入${targetJsonData.title}`
              }
              min={targetJsonData.minimum || 0}
              max={targetJsonData.maximum || 1000}
              defaultValue={curJsonData || targetJsonData.default}
              onChange={this.handleValueChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
}))(observer(NumberFormSchema));
