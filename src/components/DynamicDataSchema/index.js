import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Radio, Select, Tooltip } from 'antd';
const { Option } = Select;
import { FilterOutlined } from '@ant-design/icons';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isArray, isObject } from '$utils/typeof';
import './index.scss';

class DynamicDataSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
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
    const { updateFormValueData } = this.props;
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
  tabChange = (ele) => {
    const { keyRoute, triggerChangeAction } = this.props;
    this.handleValueChange(`${keyRoute}-type`, ele.target.value);
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  dynamicDataChange = (dynamicDataName) => {
    const {
      keyRoute,
      dynamicDataObj,
      getJSONDataByKeyRoute,
      triggerChangeAction,
    } = this.props;
    const curDynamicData = dynamicDataObj[dynamicDataName];
    if (curDynamicData) {
      // 从jsonData中获取对应的数值
      const curFliter =
        getJSONDataByKeyRoute(`${keyRoute}-config-filter`) || {};
      /*const newCurDynamicData = {
        id: curDynamicData.id,
        projectId: curDynamicData.id,
        title: curDynamicData.title,
        name: curDynamicData.name,
        url: curDynamicData.url,
        method: curDynamicData.method,
        headers: curDynamicData.headers,
        options: curDynamicData.options,
        respMock: curDynamicData.respMock,
        dataName: curDynamicData.dataName,
        body: curDynamicData.body,
        data: curDynamicData.data,
      };*/
      const newCurDynamicData = {
        id: curDynamicData.id,
        name: curDynamicData.name,
        url: curDynamicData.url,
        method: curDynamicData.method,
        headers: curDynamicData.headers,
        options: curDynamicData.options,
        dataName: curDynamicData.dataName,
        body: curDynamicData.body,
        data: curDynamicData.data,
        filter: curFliter,
      };
      this.handleValueChange(`${keyRoute}-config`, newCurDynamicData);
      setTimeout(() => {
        triggerChangeAction();
      }, 100);
    }
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      dynamicDataList,
      dynamicDataApiScopeList,
      getJSONDataByKeyRoute,
      pageScreen,
    } = this.props;
    const { isShowFilter } = this.state;
    const currentFormat = getCurrentFormat(targetJsonData);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonData.properties.type || {}; // type中记录了数据源类型：local or remote// 获取当前数据源类型
    const dataType = curJsonData.type || typeDataObj.default; // local or remote

    const configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
    const dataName = configDataObj.name; // 数据源名称
    let apiParams = configDataObj.body || {}; // 动态数据/请求参数
    if (!isObject(apiParams) && apiParams !== '') {
      try {
        apiParams = JSON.parse(apiParams);
      } catch (err) {
        console.log('当前数据源的请求参数对象不是一个合格的json数据');
        apiParams = {};
      }
    }

    const dataObj = targetJsonData.properties.data || {}; // schema中的数据对象

    return (
      <div
        className="mobile-screen-element-warp dynamic-data-schema"
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonData.description} placement="top">
            <span className="title-text">{targetJsonData.title}</span>
          </Tooltip>
        </div>

        <Radio.Group
          className="dynamic-data-tab-radio"
          onChange={this.tabChange}
          value={dataType}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="local">本地数据</Radio.Button>
          <Radio.Button value="remote">接口数据</Radio.Button>
        </Radio.Group>
        <div
          className={`dynamic-dat-tabPane ${
            dataType === 'local' ? 'dynamic-dat-tabPane-active' : ''
          }`}
        >
          <div className="json-form-box">
            <Tooltip
              title={isShowFilter ? '点击隐藏数据过滤器' : '点击显示数据过滤器'}
              placement="top"
            >
              <FilterOutlined
                className="filter-btn"
                onClick={this.switchFilterBtn}
              />
            </Tooltip>
            <JsonFormSchema
              {...{
                parentType: currentFormat,
                jsonKey: 'data',
                indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                nodeKey: `${nodeKey}-data`,
                targetJsonData: dataObj,
              }}
              key={`${nodeKey}-data`}
            />
            <div className="filter-func-box">
              {isShowFilter && (
                <CodeAreaFormSchema
                  {...{
                    isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                    parentType: currentFormat,
                    jsonKey: 'localFilter',
                    indexRoute: indexRoute ? `${indexRoute}-3` : '3',
                    keyRoute: keyRoute
                      ? `${keyRoute}-localFilter`
                      : 'localFilter',
                    nodeKey: `${nodeKey}-localFilter`,
                    targetJsonData: targetJsonData.properties.localFilter,
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
                          <Option value={dynamicData.name} key={dynamicData.id}>
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
                }  element-title-card-warp`}
                key={`${nodeKey}-${dataName}-params`}
                id={`${nodeKey}-${dataName}-params`}
              >
                <div className="element-title">请求参数配置</div>
                <div className="content-item object-content">
                  {Object.keys(apiParams).map((paramKey) => {
                    const paramItam = apiParams[paramKey];
                    paramItam.readOnly =
                      paramItam.scope && paramItam.scope === 'static'
                        ? true
                        : false;
                    const curKeyRoute = `${keyRoute}-config-body-${paramKey}`;
                    const scopeTitle = dynamicDataApiScopeList[paramItam.scope];
                    if (scopeTitle) {
                      paramItam.title = `${paramItam.title}（${scopeTitle}）`;
                    }
                    return (
                      <InputFormSchema
                        {...{
                          pageScreen: pageScreen, // 默认使用宽屏模式
                          jsonKey: paramKey,
                          keyRoute: `${curKeyRoute}-value`,
                          nodeKey: curKeyRoute,
                          targetJsonData: paramItam,
                        }}
                        key={curKeyRoute}
                      />
                    );
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
              <CodeAreaFormSchema
                {...{
                  isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                  parentType: currentFormat,
                  jsonKey: 'filter',
                  indexRoute: indexRoute ? `${indexRoute}-1-2` : '1-2',
                  keyRoute: keyRoute
                    ? `${keyRoute}-config-filter`
                    : 'config-filter',
                  nodeKey: `${nodeKey}-config-filter`,
                  targetJsonData:
                    targetJsonData.properties.config &&
                    targetJsonData.properties.config.properties.filter,
                }}
                key={`${nodeKey}-config-filter`}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  triggerChange: stores.JSONEditorStore.triggerChange,
  triggerChangeAction: stores.JSONEditorStore.triggerChangeAction,
  pageScreen: stores.JSONSchemaStore.pageScreen,
  dynamicDataList: stores.JSONEditorStore.dynamicDataList,
  dynamicDataObj: stores.JSONEditorStore.dynamicDataObj,
  dynamicDataApiScopeList: stores.JSONEditorStore.dynamicDataApiScopeList,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(DynamicDataSchema));
