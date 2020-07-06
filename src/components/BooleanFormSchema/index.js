import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Switch, message, Tooltip } from 'antd';

class BooleanFormSchema extends React.PureComponent {
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
  handleValueChange = (checked, event) => {
    const {
      keyRoute,
      updateFormValueData,
    } = this.props;
    updateFormValueData(keyRoute, checked); // 更新数值
  };

  render() {
    const {
      indexRoute,
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
    } = this.props;

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
          <Switch
            style={{ display: 'inline-block' }}
            defaultChecked={targetJsonData.default}
            checkedChildren="true"
            unCheckedChildren="false"
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
}))(observer(BooleanFormSchema));
