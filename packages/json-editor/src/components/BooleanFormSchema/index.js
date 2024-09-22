import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Switch, Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle } from '$utils/index';

class BooleanFormSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  /** 数值变动事件处理器 */
  handleValueChange = (checked) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, checked); // 更新数值
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonSchema,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.format); // 是否需要设置成两栏布局

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
        }
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonSchema.description} placement="top">
            <span
              className="title-text"
              title={
                (isNeedTwoCol || pageScreen === 'wideScreen') &&
                targetJsonSchema.title.length > 6
                  ? targetJsonSchema.title
                  : ''
              }
            >
              {targetJsonSchema.title}
            </span>
          </Tooltip>
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <Switch
              style={{ display: 'inline-block' }}
              defaultChecked={
                curJsonData !== undefined
                  ? curJsonData
                  : targetJsonSchema.default
              }
              checkedChildren="true"
              unCheckedChildren="false"
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
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(BooleanFormSchema));
