import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Tooltip } from 'antd';
import './index.scss';

class InputFormSchema extends React.PureComponent {
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
  handleValueChange = (event) => {
    const { value } = event.target;
    const { indexRoute, jsonKey, updateFormValueData, targetJsonData } = this.props;
    /*if (targetJsonData.title === value) return; // title值未改变则直接跳出
    updateFormValueData(indexRoute, jsonKey, {
      title: value,
    });*/
  };

  render() {
    const { indexRoute, nodeKey, keyRoute, targetJsonData } = this.props;

    return (
      <div className="element-wrap" key={nodeKey} indexRoute={indexRoute} keyRoute={keyRoute}>
        <Tooltip title={targetJsonData.description} placement="topLeft">
          <span className="element-name-span">{targetJsonData.title}</span>
        </Tooltip>
        <div className="content-item">
          <Input
            style={{ display: "inline-block" }}
            placeholder={targetJsonData.placeholder || `请输入${targetJsonData.title}`}
            defaultValue={targetJsonData.default}
            onChange={this.handleValueChange}
          />
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  getJSONDataByIndex: stores.JSONSchemaStore.getJSONDataByIndex,
  editJsonData: stores.JSONEditorStore.updateFormValueData,
}))(observer(InputFormSchema));
