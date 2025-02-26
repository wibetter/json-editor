import React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, Tooltip, List, Input, Select, Empty } from 'antd';
const { Option } = Select;
const { Panel } = Collapse;
import { truncate, isArray } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { saveJSONEditorCache, getJSONEditorCache } from '$utils/webCache';
import { buildStyle } from '$utils/index';
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

    this.collapseChange = this.collapseChange.bind(this);
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

  collapseChange(collapseData) {
    const { keyRoute } = this.props;
    // 缓存当前折叠状态
    saveJSONEditorCache(keyRoute, collapseData);
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
    const eventData = Object.assign([], toJS(curJsonData.event));
    let globalEventMap = Object.assign({}, toJS(curJsonData.globalEventMap));
    globalEventMap[eventCode] = newTitle;
    eventData.forEach((event) => {
      if (event.code === eventCode && event.desc !== undefined) {
        event.desc = newTitle;
      }
    });
    // const curKeyRout = `${keyRoute}-globalEventMap`;
    updateFormValueData(keyRoute, {
      event: eventData,
      globalEventMap,
    });
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
    const options = _options || {};

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

    // 获取前端缓存中的折叠数据
    let collapseData = [];
    const collapseCacheData = getJSONEditorCache(keyRoute);
    if (collapseCacheData && isArray(collapseCacheData)) {
      collapseData = collapseCacheData;
    }

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'sohu-event-container array-schema-box wide-screen-element-warp'
            : 'sohu-event-container array-schema-box mobile-screen-element-warp'
        }`}
        // key={nodeKey}
        id={nodeKey}
        style={style}
      >
        <Collapse
          defaultActiveKey={collapseData}
          expandIconPosition="right"
          bordered={false}
          onChange={this.collapseChange}
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
                      key={`${nodeKey}-page-AllEmitEventList-${index}`}
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

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'sohu-event',
  component: SohuEventSchema,
});

export default SohuEventSchema;
