import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker, message, Tooltip } from 'antd';
import { getCurrentFormat } from '$utils/jsonSchema';

const DateTypeList = {
  'date-time': 'YYYY-MM-DD HH:mm',
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
};

class DateTimeFormSchema extends React.PureComponent {
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
  handleValueChange = (event, dateString) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, dateString); // 更新数值
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonData,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const curFormat = getCurrentFormat(targetJsonData);
    const readOnly = targetJsonData.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonData.isRequired || false; // 是否必填（默认非必填）
    const timeFormat = DateTypeList[curFormat] || DateTypeList[0];
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const defaultTime = curJsonData || targetJsonData.default;

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
            title={targetJsonData.description}
            placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
          >
            <span className="title-text">{targetJsonData.title}</span>
            <span className="title-text warning-text">
              {readOnly ? '[只读]' : ''}
            </span>
          </Tooltip>
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <DatePicker
              style={{ display: 'inline-block' }}
              disabled={readOnly}
              required={isRequired}
              showTime={curFormat === 'date-time' ? true : false}
              format={timeFormat}
              placeholder={
                targetJsonData.placeholder || `请输入${targetJsonData.title}`
              }
              defaultValue={defaultTime && moment(defaultTime, timeFormat)}
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
}))(observer(DateTimeFormSchema));
