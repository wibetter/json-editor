import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';

class EventSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

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

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      pageScreen,
    } = this.props;
    const currentFormat = getCurrentFormat(targetJsonData);

    const typeDataObj = targetJsonData.properties.type || {};
    // 注册类型事件的数据对象：on
    const registerJsonObj = targetJsonData.properties.register || {};
    const actionFuncJsonObj = targetJsonData.properties.actionFunc || {};
    // 触发事件类型的数据对象：emit
    const triggerJsonObj = targetJsonData.properties.trigger || {};
    const eventDataJsonObj = targetJsonData.properties.eventData || {};
    // 获取当前数据源类型
    const dataType = typeDataObj.default; // local or remote

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }  element-title-card-warp`}
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
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
        <div className="content-item object-content">
          {dataType === 'on' && (
            <>
              {registerJsonObj && (
                <InputFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'register',
                    indexRoute: `${indexRoute}-1`,
                    keyRoute: `${keyRoute}-register`,
                    nodeKey: `${nodeKey}-register`,
                    targetJsonData: registerJsonObj,
                  }}
                  key={`${nodeKey}-register`}
                />
              )}
              {actionFuncJsonObj && (
                <CodeAreaFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'actionFunc',
                    indexRoute: `${indexRoute}-2`,
                    keyRoute: `${keyRoute}-actionFunc`,
                    nodeKey: `${nodeKey}-actionFunc`,
                    targetJsonData: actionFuncJsonObj,
                  }}
                  key={`${nodeKey}-actionFunc`}
                />
              )}
            </>
          )}
          {dataType === 'emit' && (
            <>
              {triggerJsonObj && (
                <InputFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'trigger',
                    indexRoute: `${indexRoute}-1`,
                    keyRoute: `${keyRoute}-trigger`,
                    nodeKey: `${nodeKey}-trigger`,
                    targetJsonData: triggerJsonObj,
                  }}
                  key={`${nodeKey}-trigger`}
                />
              )}
              {eventDataJsonObj && (
                <JsonFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'eventData',
                    indexRoute: `${indexRoute}-2`,
                    keyRoute: `${keyRoute}-eventData`,
                    nodeKey: `${nodeKey}-eventData`,
                    targetJsonData: eventDataJsonObj,
                  }}
                  key={`${nodeKey}-eventData`}
                />
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  triggerChange: stores.JSONEditorStore.triggerChange,
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(EventSchema));
