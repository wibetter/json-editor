import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Checkbox, Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import { InfoCircleOutlined } from '@ant-design/icons';

class CheckboxSchema extends React.PureComponent {
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
  handleValueChange = (checkedValue) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, checkedValue); // 更新数值
  };

  render() {
    const {
      nodeKey,
      keyRoute,
      targetJsonSchema,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const options = targetJsonSchema.options;

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
          <Tooltip
            title={
              pageScreen === 'wideScreen' ? targetJsonSchema.description : ''
            }
            placement="top"
          >
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' && targetJsonSchema.title.length > 6
                  ? targetJsonSchema.title
                  : ''
              }
            >
              {targetJsonSchema.title}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <Checkbox.Group
              style={{ display: 'inline-block' }}
              onChange={this.handleValueChange}
              defaultValue={curJsonData || targetJsonSchema.default}
            >
              {options &&
                options.length > 0 &&
                options.map((item, optionIndex) => {
                  const optionLabel = item.label || item.name;
                  const optionNodeKey = `${nodeKey}-select-${optionLabel}`;
                  return (
                    <Checkbox value={item.value} key={optionNodeKey}>
                      {optionLabel}
                    </Checkbox>
                  );
                })}
            </Checkbox.Group>
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
  getInitJsonDataByKeyRoute: stores.JSONEditorStore.getInitJsonDataByKeyRoute,
}))(observer(CheckboxSchema));
