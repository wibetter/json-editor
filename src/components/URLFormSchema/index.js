import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import { InfoCircleOutlined } from '@ant-design/icons';

class URLFormSchema extends React.PureComponent {
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
  handleValueChange = (event) => {
    const { value } = event.target;
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, value); // 更新数值
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
          <Tooltip
            title={
              pageScreen === 'wideScreen' ? targetJsonData.description : ''
            }
            placement="top"
          >
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' &&
                targetJsonData.title &&
                targetJsonData.title.length > (readOnly ? 4 : 6)
                  ? targetJsonData.title
                  : ''
              }
            >
              {targetJsonData.title}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonData.description && (
            <Tooltip title={targetJsonData.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <Input
              style={{ display: 'inline-block' }}
              disabled={readOnly}
              required={isRequired}
              placeholder={
                targetJsonData.placeholder || `请输入${targetJsonData.title}`
              }
              defaultValue={curJsonData || targetJsonData.default}
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
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(URLFormSchema));
