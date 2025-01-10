import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Select, Tooltip } from 'antd';
const { Option } = Select;
import { FilterOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import JsonFormSchema from '$renderers/JsonFormSchema/index';
import CodeAreaFormSchema from '$renderers/CodeAreaFormSchema/index';
import InputFormSchema from '$renderers/InputFormSchema/index';
import TreeSelectFromSchema from '$renderers/TreeSelectFromSchema/index';
import RemoteDynamicDataSchema from '$renderers/RemoteDynamicDataSchema/index';
import { dataRoute2dataPath } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isArray, isObject } from '$utils/typeof';
import { objClone, buildStyle } from '$utils/index';
import './index.scss';

class DynamicDataSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    dynamicDataList: PropTypes.array,
    dynamicDataObj: PropTypes.object,
    dynamicDataApiScopeList: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowFilter: false, // 是否显示数据过滤器
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.switchFilterBtn = this.switchFilterBtn.bind(this);
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
  handleValueChange = (curKeyRoute, value) => {
    const { updateFormValueData } = this.props.jsonStore || {};
    updateFormValueData(curKeyRoute, value); // 更新数值
  };

  // 显示和隐藏数据过滤器
  switchFilterBtn = () => {
    const { isShowFilter } = this.state;
    this.setState({
      isShowFilter: !isShowFilter,
    });
  };

  // 面板展示内容切换（本地数据/接口数据）
  tabChange = (value) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction } = jsonStore || {};
    this.handleValueChange(`${keyRoute}-type`, value);
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  dynamicDataChange = (dynamicDataName) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction, dynamicDataObj } = jsonStore || {};
    const curDynamicData = objClone(toJS(dynamicDataObj[dynamicDataName]));
    if (curDynamicData) {
      const newCurDynamicData = {
        id: curDynamicData.id,
        url: curDynamicData.url,
        method: curDynamicData.method,
        headers: curDynamicData.headers,
        options: curDynamicData.options,
        dataName: curDynamicData.name,
        body: curDynamicData.body,
        data: curDynamicData.data,
        filter: 'return data;',
        dataRoute: '',
      };
      this.handleValueChange(`${keyRoute}-config`, newCurDynamicData);
      setTimeout(() => {
        triggerChangeAction();
      }, 100);
    }
  };

  dataRouteChange = (newDataRoute) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction, updateFormValueData } = jsonStore || {};
    if (newDataRoute) {
      updateFormValueData(`${keyRoute}-config-dataRoute`, newDataRoute, true);
      const dataPath = dataRoute2dataPath(newDataRoute);
      // 自动填充当前filter
      this.handleValueChange(
        `${keyRoute}-config-filter`,
        `return ${dataPath};`,
      );
    } else {
      // newDataRoute为空时，需要重置dataRoute和filter
      updateFormValueData(`${keyRoute}-config-dataRoute`, '', true);
      // 自动填充当前filter
      this.handleValueChange(`${keyRoute}-config-filter`, `return data;`);
    }
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  paramsConfigChange = (paramsKey, newParamsConfig) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction, getJSONDataByKeyRoute } = jsonStore || {};
    const curParamsConfigData =
      getJSONDataByKeyRoute(`${keyRoute}-config-body-${paramsKey}`) || {};
    this.handleValueChange(
      `${keyRoute}-config-body-${paramsKey}`,
      Object.assign(curParamsConfigData, newParamsConfig),
    );
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const {
      getJSONDataByKeyRoute,
      dynamicDataList,
      dynamicDataObj,
      dynamicDataApiScopeList,
      triggerChange,
    } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, indexRoute, targetJsonSchema } =
      this.props;
    const { isShowFilter } = this.state;
    const curType = targetJsonSchema.type;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote// 获取当前数据源类型
    const dataType = curJsonData.type || typeDataObj.default; // local or remote

    const configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
    const dataName = configDataObj.dataName; // 数据源名称
    const dataRoute = configDataObj.dataRoute; // 接口数据路径
    let apiParams = configDataObj.body || {}; // 动态数据/请求参数
    if (!isObject(apiParams) && apiParams !== '') {
      try {
        apiParams = JSON.parse(apiParams);
      } catch (err) {
        console.log('当前数据源的请求参数格式异常');
        apiParams = {};
      }
    }
    const curDynamicData = dynamicDataObj[dataName] || {}; // 根据dataName获取最新的数据源对象
    const dataObj = targetJsonSchema.properties.data || {}; // schema中的数据对象

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    return (
      <div
        className="mobile-screen-element-warp dynamic-data-schema"
        // key={nodeKey}
        key={`${nodeKey}-${triggerChange}`}
        id={nodeKey}
        style={style}
      >
        <div className="element-title" style={titleStyle}>
          <Tooltip
            title={
              pageScreen === 'wideScreen' ? targetJsonSchema.description : ''
            }
            placement="top"
          >
            <span className="title-text" title={targetJsonSchema.title}>
              {targetJsonSchema.title}
              {targetJsonSchema.showKey && (
                <span>（{truncate(jsonKey, { length: 15 })}）</span>
              )}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item" style={contentStyle}>
          <div className="dynamic-data-tab-radio-box">
            <div className="dynamic-data-tab-radio">
              <div
                className={`tab-radio ${
                  dataType === 'local' ? 'tab-radio-active' : ''
                }`}
                onClick={() => {
                  this.tabChange('local');
                }}
              >
                本地数据
              </div>
              <div
                className={`tab-radio ${
                  dataType === 'remote' ? 'tab-radio-active' : ''
                }`}
                onClick={() => {
                  this.tabChange('remote');
                }}
              >
                接口数据
              </div>
            </div>
          </div>
          <div
            className={`dynamic-dat-tabPane ${
              dataType === 'local' ? 'dynamic-dat-tabPane-active' : ''
            }`}
          >
            <div className="json-form-box">
              <Tooltip
                title={
                  isShowFilter ? '点击隐藏数据过滤器' : '点击显示数据过滤器'
                }
                placement="top"
              >
                <FilterOutlined
                  className="filter-btn"
                  onClick={this.switchFilterBtn}
                />
              </Tooltip>
              <JsonFormSchema
                {...{
                  parentType: curType,
                  jsonKey: 'data',
                  indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                  keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                  nodeKey: `${nodeKey}-data`,
                  targetJsonSchema: dataObj,
                }}
                key={`${nodeKey}-data`}
              />
              <div className="filter-func-box">
                {isShowFilter && (
                  <CodeAreaFormSchema
                    {...{
                      isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                      parentType: curType,
                      jsonKey: 'localFilter',
                      indexRoute: indexRoute ? `${indexRoute}-3` : '3',
                      keyRoute: keyRoute
                        ? `${keyRoute}-localFilter`
                        : 'localFilter',
                      nodeKey: `${nodeKey}-localFilter`,
                      targetJsonSchema: targetJsonSchema.properties.localFilter,
                    }}
                    key={`${nodeKey}-localFilter`}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`dynamic-dat-tabPane ${
              dataType === 'remote' ? 'dynamic-dat-tabPane-active' : ''
            }`}
          >
            <div className="json-form-box">
              <div
                className={
                  pageScreen === 'wideScreen'
                    ? 'wide-screen-element-warp'
                    : 'mobile-screen-element-warp'
                }
                key={`${nodeKey}-${dataName}`}
                id={`${nodeKey}-${dataName}`}
              >
                <div className="element-title">数据源列表</div>
                <div className="content-item">
                  <div className="form-item-box">
                    <Select
                      className="dynamic-data-select"
                      defaultValue={dataName}
                      onSelect={this.dynamicDataChange}
                    >
                      {dynamicDataList &&
                        isArray(dynamicDataList) &&
                        dynamicDataList.map((dynamicData) => {
                          return (
                            <Option
                              value={dynamicData.name}
                              key={dynamicData.id}
                            >
                              {dynamicData.title}
                            </Option>
                          );
                        })}
                    </Select>
                  </div>
                </div>
              </div>
              {dataName && apiParams && Object.keys(apiParams).length > 0 && (
                <div
                  className={`${
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'
                  } element-title-card-warp`}
                  key={`${nodeKey}-${dataName}-params`}
                  id={`${nodeKey}-${dataName}-params`}
                >
                  <div className="element-title">请求参数配置</div>
                  <div className="content-item object-content">
                    {Object.keys(apiParams).map((paramKey) => {
                      const paramItam = objClone(apiParams[paramKey]);
                      paramItam.readOnly =
                        paramItam.scope && paramItam.scope === 'static'
                          ? true
                          : false;
                      const curKeyRoute = `${keyRoute}-config-body-${paramKey}`;
                      const scopeTitle =
                        dynamicDataApiScopeList[paramItam.scope];
                      if (scopeTitle && paramItam.scope !== 'dynamic') {
                        paramItam.title = `${paramItam.title}（${scopeTitle}）`;
                      }
                      if (paramItam.scope !== 'dynamic') {
                        return (
                          <InputFormSchema
                            {...{
                              pageScreen: pageScreen, // 默认使用宽屏模式
                              jsonKey: paramKey,
                              keyRoute: `${curKeyRoute}-value`,
                              nodeKey: curKeyRoute,
                              targetJsonSchema: paramItam,
                            }}
                            key={curKeyRoute}
                          />
                        );
                      } else {
                        const curNodeKay = `${nodeKey}-${dataName}-params-${paramKey}`;
                        return (
                          <RemoteDynamicDataSchema
                            {...{
                              pageScreen: pageScreen, // 默认使用宽屏模式
                              nodeKey: curNodeKay,
                              keyRoute: keyRoute
                                ? `${keyRoute}-config-body-${paramKey}`
                                : 'config-body-${paramKey}',
                              curConfigData: paramItam || {},
                              configDataChange: (newParamsConfig) => {
                                this.paramsConfigChange(
                                  paramKey,
                                  newParamsConfig,
                                );
                              },
                            }}
                            key={curKeyRoute}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              )}
              {dataName && apiParams && Object.keys(apiParams).length === 0 && (
                <div
                  className={
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'
                  }
                  key={`${nodeKey}-${dataName}-empty`}
                  id={`${nodeKey}-${dataName}-empty`}
                >
                  <div className="element-title">请求参数配置</div>
                  <div className="content-item">
                    <span className="warning-text">无可配置的请求参数</span>
                  </div>
                </div>
              )}
              {dataName && (
                <TreeSelectFromSchema
                  {...{
                    nodeKey: `${nodeKey}-config-dataRoute-${dataRoute}`,
                    mockData: curDynamicData.respMock,
                    dataRoute,
                    onChange: this.dataRouteChange,
                  }}
                  key={`${nodeKey}-config-dataRoute`}
                />
              )}
              {dataName && (
                <CodeAreaFormSchema
                  {...{
                    isReadOnly: true,
                    isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                    parentType: curType,
                    jsonKey: 'filter',
                    indexRoute: indexRoute ? `${indexRoute}-1-2` : '1-2',
                    keyRoute: keyRoute
                      ? `${keyRoute}-config-filter`
                      : 'config-filter',
                    nodeKey: `${nodeKey}-config-filter-${dataRoute}`,
                    targetJsonSchema:
                      targetJsonSchema.properties.config &&
                      targetJsonSchema.properties.config.properties.filter,
                  }}
                  key={`${nodeKey}-config-filter`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  schemaStore: stores.JSONSchemaStore,
  jsonStore: stores.JSONEditorStore,
}))(observer(DynamicDataSchema));
