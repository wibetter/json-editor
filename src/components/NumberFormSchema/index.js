import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { InputNumber, message, Tooltip } from 'antd';

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
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, newVal); // 更新数值
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
        <Tooltip
          title={targetJsonData.description}
          placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
        >
          <div className="element-title">{targetJsonData.title}</div>
        </Tooltip>
        <div className="content-item">
          <InputNumber
            style={{ display: 'inline-block' }}
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
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
}))(observer(NumberFormSchema));