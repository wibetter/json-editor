import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import JsonView from '$renderers/JsonView/index';
import JsonFormSchema from '$renderers/JsonFormSchema/index';
import CodeAreaFormSchema from '$renderers/CodeAreaFormSchema/index';
import InputFormSchema from '$renderers/InputFormSchema/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import CodeIcon from '$assets/img/code.svg';

class EventSchema extends React.PureComponent {
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

    this.state = {
      jsonView: false, // 是否显示code模式
      isClosed: false, // 是否为关闭状态，默认是开启状态
    };
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

  render() {
    const { keyRoute, nodeKey, indexRoute, targetJsonSchema, pageScreen } =
      this.props;
    const curType = targetJsonSchema.type;
    const { jsonView, isClosed } = this.state;

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
        }`}
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
        <div className="element-title-card-warp content-item">
          <div
            className="element-title"
            onClick={(event) => {
              this.setState({
                isClosed: !isClosed,
              });
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <span className="title-text">事件配置</span>
            {isClosed ? (
              <RightOutlined className="close-operate-btn" />
            ) : (
              <DownOutlined className="close-operate-btn" />
            )}

            <div
              className="display-source-btn"
              onClick={(event) => {
                this.setState({
                  jsonView: !jsonView,
                });
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <Tooltip title={jsonView ? '关闭源码模式' : '开启源码模式'}>
                <CodeIcon
                  className={jsonView ? 'info-icon active' : 'info-icon'}
                />
              </Tooltip>
            </div>
          </div>
          <div
            className={`content-item object-content ${jsonView ? 'json-view-array' : ''} ${isClosed ? 'closed' : ''}`}
          >
            {!jsonView && dataType === 'on' && (
              <>
                {registerJsonObj && (
                  <InputFormSchema
                    {...{
                      parentType: curType,
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
                      parentType: curType,
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
            {!jsonView && dataType === 'emit' && (
              <>
                {triggerJsonObj && (
                  <InputFormSchema
                    {...{
                      parentType: curType,
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
                      parentType: curType,
                      jsonKey: 'eventData',
                      indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                      keyRoute: keyRoute
                        ? `${keyRoute}-eventData`
                        : 'eventData',
                      nodeKey: `${nodeKey}-eventData`,
                      targetJsonSchema: eventDataJsonObj,
                    }}
                    key={`${nodeKey}-eventData`}
                  />
                )}
              </>
            )}
            {jsonView && <JsonView {...this.props} />}
          </div>
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
  getInitJsonDataByKeyRoute: stores.JSONEditorStore.getInitJsonDataByKeyRoute,
}))(observer(EventSchema));
