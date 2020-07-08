import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Tooltip } from 'antd';

class QuantitySchema extends React.PureComponent {
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
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(`${keyRoute}-unit`, value); // 更新单位数值
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
    // const quantityJsonSchema = targetJsonData.properties && targetJsonData.properties.quantity;
    const unitJsonSchema =
      targetJsonData.properties && targetJsonData.properties.unit;
    const unitText = curJsonData.quantity;

    const unitAfter = <span>{unitText === 'percent' ? '%' : unitText}</span>;

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
          <div className='form-item-box'>
            <Input
              style={{ display: 'inline-block' }}
              addonAfter={unitAfter}
              placeholder={
                unitJsonSchema.placeholder ||
                targetJsonData.placeholder ||
                `请输入${unitJsonSchema.title}` ||
                `请输入${targetJsonData.title}`
              }
              defaultValue={curJsonData.unit || unitJsonSchema.default}
              onPressEnter={this.handleValueChange}
              onBlur={this.handleValueChange}
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
}))(observer(QuantitySchema));
