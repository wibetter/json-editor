import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Select, Tooltip } from 'antd';
const { Option } = Select;
import { catchJsonDataByWebCache } from '$mixins/index';
import { InfoCircleOutlined } from '@ant-design/icons';
import { isNeedTwoColWarpStyle } from '$utils/index';
import './index.scss';

/**
 * select下拉单选类型
 */
class SingleSelectSchema extends React.PureComponent {
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
  handleValueChange = (value) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, value); // 更新数值
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

    // 获取枚举值
    const enumKeys = targetJsonSchema.items.enum;
    const enumTexts = targetJsonSchema.items.enumextra;
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
          <div className="form-item-box single-select-box">
            <Select
              style={{ display: 'inline-block' }}
              onChange={this.handleValueChange}
              defaultValue={curJsonData || targetJsonSchema.default}
            >
              {enumKeys &&
                enumKeys.length > 0 &&
                enumKeys.map((enumKey, enumIndex) => {
                  /** 1. 获取当前enum的title */
                  const enumText = enumTexts[enumIndex];
                  /** 2. 获取当前元素的id，用于做唯一标识 */
                  const enumNodeKey = `${nodeKey}-radio-${enumKey}`;
                  return (
                    <Option value={enumKey} key={enumNodeKey}>
                      {enumText}
                    </Option>
                  );
                })}
            </Select>
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
}))(observer(SingleSelectSchema));
