import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Collapse, Tooltip, List, Input, Select, Empty } from 'antd';
const { Option } = Select;
const { Panel } = Collapse;
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';

class SohuEventSchema extends React.PureComponent {
  static propTypes = {
    isArrayItem: PropTypes.any, // 如果是数组项，title会进行特殊显示
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.any,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    isStructuredSchema: PropTypes.bool,
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

  handleEventTitleChange = (eventCode, inputEvent) => {
    const { keyRoute, jsonStore } = this.props;
    const {
      updateFormValueData,
      getJSONDataByKeyRoute,
      options: _options,
    } = jsonStore || {};
    const { value: newTitle } = inputEvent.target;
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
    let globalEventMap = Object.assign({}, toJS(curJsonData.globalEventMap));
    const curKeyRout = `${keyRoute}-globalEventMap`;
    globalEventMap[eventCode] = newTitle;
    updateFormValueData(curKeyRout, globalEventMap);
  };

  handleSelectEventChange = (eventName, newEventCode) => {
    const { keyRoute, jsonStore } = this.props;
    const {
      updateFormValueData,
      getJSONDataByKeyRoute,
      options: _options,
    } = jsonStore || {};
    const options = _options || {};
    const curKeyRout = `${keyRoute}-event`;
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
    let curEvent = [];
    if (curJsonData.event && curJsonData.event.length > 0) {
      curEvent = toJS(curJsonData.event);
    } else if (
      options.eventListenConfig &&
      options.eventListenConfig.length > 0
    ) {
      const eventListenConfig = options.eventListenConfig || [];
      eventListenConfig.forEach((event) => {
        curEvent.push({
          name: event.name,
          listenName: event.code,
        });
      });
    }
    // 更新监听事件数据
    curEvent.forEach((event) => {
      if (event.name === eventName) {
        event.listenName = newEventCode;
      }
    });

    updateFormValueData(curKeyRout, curEvent); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute, options: _options } = jsonStore || {};

    const { indexRoute, jsonKey, nodeKey, keyRoute, targetJsonSchema } =
      this.props;
    const options = options || {};

    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const globalEventMap = curJsonData.globalEventMap || {}; // 全局事件列表
    const curEventList = curJsonData.event || []; // 当前组件事件列表

    // 从 options 获取相关数据
    const widgetType = options.widgetType; // 组件类型
    const eventEmitConfig = options.eventEmitConfig || [];
    const eventListenConfig = options.eventListenConfig || [];
    const allEmitEventList = options.allEmitEventList || [];

    const isEmpty =
      widgetType !== 'page' &&
      eventEmitConfig.length === 0 &&
      eventListenConfig.length === 0;

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'sohu-event-container array-schema-box wide-screen-element-warp'
            : 'sohu-event-container array-schema-box mobile-screen-element-warp'
        }`}
        key={nodeKey}
        id={nodeKey}
      >
        <Collapse
          defaultActiveKey={['mainConfig']}
          expandIconPosition="right"
          bordered={false}
          // accordion
        >
          {eventListenConfig && eventListenConfig.length > 0 && (
            <Panel header={'监听的事件'} key="eventListenConfig">
              {eventListenConfig.map((event, eventIndex) => {
                const eventNodeKey = `${nodeKey}-eventListen-${event.code}`;
                const curEventCode =
                  (curEventList.find((item) => item.name === event.name) || {})
                    .listenName || '';
                return (
                  <div key={eventNodeKey} className="listen-event-content">
                    <div className="title-text">{event.desc || event.name}</div>
                    <div className="form-item-box">
                      <span>绑定事件：</span>
                      <Select
                        showSearch
                        style={{ display: 'inline-block', minWidth: '120px' }}
                        onChange={(newEventCode) =>
                          this.handleSelectEventChange(event.name, newEventCode)
                        }
                        defaultValue={curEventCode}
                      >
                        {allEmitEventList.map((event) => {
                          const eventTitle =
                            globalEventMap[event.code] ||
                            event.desc ||
                            event.name;
                          const optionNodeKey = `${nodeKey}-allEmitEvent-${eventTitle}`;
                          return (
                            <Option value={event.code} key={optionNodeKey}>
                              {eventTitle}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>
                  </div>
                );
              })}
            </Panel>
          )}

          {eventEmitConfig && eventEmitConfig.length > 0 && (
            <Panel header={'触发的事件'} key="eventEmitConfig">
              {eventEmitConfig.map((event, eventIndex) => {
                const eventNodeKey = `${nodeKey}-eventEmit-${event.code}`;
                const eventTitle = event.desc || event.name;
                return (
                  <div
                    key={eventNodeKey}
                    className="object-content emit-event-content"
                  >
                    <div className="title-text">事件名称</div>
                    <div className="form-item-box">{eventTitle}</div>
                    <div className="title-text">事件code</div>
                    <div className="content-item">
                      <div className="form-item-box">
                        {truncate(event.code, { length: 30 })}
                      </div>
                    </div>
                    <div className="title-text">自定义名称</div>
                    <div className="content-item">
                      <div className="form-item-box">
                        <Input
                          style={{ display: 'inline-block' }}
                          defaultValue={
                            globalEventMap[event.code] || eventTitle
                          }
                          onPressEnter={(inputEvent) =>
                            this.handleEventTitleChange(event.code, inputEvent)
                          }
                          onBlur={(inputEvent) =>
                            this.handleEventTitleChange(event.code, inputEvent)
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Panel>
          )}

          {widgetType === 'page' && (
            <Panel header={'事件列表'} key="AllEmitEventList">
              <List
                itemLayout="horizontal"
                dataSource={allEmitEventList}
                renderItem={(event, index) => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        globalEventMap[event.code] || event.desc || event.name
                      }
                      description={truncate(event.code || event.desc, {
                        length: 30,
                      })}
                    />
                  </List.Item>
                )}
              />
            </Panel>
          )}
        </Collapse>
        {isEmpty && <Empty description={'暂无事件相关数据'} />}
      </div>
    );
  }
}

export default inject((stores) => ({
  schemaStore: stores.JSONSchemaStore,
  jsonStore: stores.JSONEditorStore,
}))(observer(SohuEventSchema));
