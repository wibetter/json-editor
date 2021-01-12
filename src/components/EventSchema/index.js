import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import { getCurrentFormat } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { InfoCircleOutlined } from '@ant-design/icons';

class EventSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
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
      targetJsonSchema,
      pageScreen,
    } = this.props;
    const currentFormat = getCurrentFormat(targetJsonSchema);

    const typeDataObj = targetJsonSchema.properties.type || {};
    // 注册类型事件的数据对象：on
    const registerJsonObj = targetJsonSchema.properties.register || {};
    const actionFuncJsonObj = targetJsonSchema.properties.actionFunc || {};
    // 触发事件类型的数据对象：emit
    const triggerJsonObj = targetJsonSchema.properties.trigger || {};
    const eventDataJsonObj = targetJsonSchema.properties.eventData || {};
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
          {targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item object-content">
          {dataType === 'on' && (
            <>
              {registerJsonObj && (
                <InputFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'register',
                    indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                    keyRoute: keyRoute ? `${keyRoute}-register` : 'register',
                    nodeKey: `${nodeKey}-register`,
                    targetJsonSchema: registerJsonObj,
                  }}
                  key={`${nodeKey}-register`}
                />
              )}
              {actionFuncJsonObj && (
                <CodeAreaFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'actionFunc',
                    indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                    keyRoute: keyRoute
                      ? `${keyRoute}-actionFunc`
                      : 'actionFunc',
                    nodeKey: `${nodeKey}-actionFunc`,
                    targetJsonSchema: actionFuncJsonObj,
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
                    indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                    keyRoute: keyRoute ? `${keyRoute}-trigger` : 'trigger',
                    nodeKey: `${nodeKey}-trigger`,
                    targetJsonSchema: triggerJsonObj,
                  }}
                  key={`${nodeKey}-trigger`}
                />
              )}
              {eventDataJsonObj && (
                <JsonFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'eventData',
                    indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                    keyRoute: keyRoute ? `${keyRoute}-eventData` : 'eventData',
                    nodeKey: `${nodeKey}-eventData`,
                    targetJsonSchema: eventDataJsonObj,
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
