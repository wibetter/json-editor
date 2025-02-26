import * as React from 'react';
import { inject, observer } from 'mobx-react';
// import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const { Option } = Select;
import CodeAreaFormSchema from '$renderers/CodeAreaFormSchema/index';
import InputFormSchema from '$renderers/InputFormSchema/index';
import TreeSelectFrom from '$components/TreeSelectFrom/index';
import { dataRoute2dataPath } from '@wibetter/json-utils';
import { isArray, isObject } from '$utils/typeof';
import { objClone, buildStyle } from '$utils/index';
import './index.scss';

class RemoteDynamicDataSchema extends React.PureComponent {
  static propTypes = {
    pageScreen: PropTypes.any,
    keyRoute: PropTypes.any,
    nodeKey: PropTypes.string,
    curConfigData: PropTypes.object,
    configDataChange: PropTypes.func,
    dynamicDataList: PropTypes.array,
    dynamicDataObj: PropTypes.object,
    dynamicDataApiScopeList: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (curKey, value) => {
    const curConfigData = Object.assign({}, this.props.curConfigData);
    curConfigData[curKey] = value;
    this.props.configDataChange(curConfigData); // 更新数值
  };

  paramsValueChange = (curKey, value) => {
    const curConfigData = Object.assign({}, this.props.curConfigData);
    if (curConfigData.body && curConfigData.body[curKey]) {
      curConfigData.body[curKey].value = value;
    }
    this.props.configDataChange(curConfigData); // 更新数值
  };

  dynamicDataChange = (dynamicDataName) => {
    const curDynamicData = objClone(
      toJS(this.props.dynamicDataObj[dynamicDataName]),
    );
    if (curDynamicData) {
      // 从jsonData中获取对应的数值
      const newCurDynamicData = {
        id: curDynamicData.id,
        url: curDynamicData.url,
        method: curDynamicData.method,
        headers: curDynamicData.headers,
        options: curDynamicData.options,
        dataName: curDynamicData.name,
        body: curDynamicData.body,
        data: curDynamicData.data,
        filter: curDynamicData.filter,
      };
      this.props.configDataChange(newCurDynamicData); // 更新整个config数值
    }
  };

  dataRouteChange = (newDataRoute) => {
    const curConfigData = Object.assign({}, this.props.curConfigData);
    curConfigData['dataRoute'] = newDataRoute;
    const dataPath = dataRoute2dataPath(newDataRoute);
    curConfigData['filter'] = `return ${dataPath};`;
    this.props.configDataChange(curConfigData); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const {
      getJSONDataByKeyRoute,
      dynamicDataApiScopeList,
      dynamicDataList,
      dynamicDataObj,
    } = jsonStore || {};
    const { curConfigData, nodeKey, keyRoute } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    const dataName = curConfigData.dataName; // 数据源名称
    const dataRoute = curConfigData.dataRoute; // 接口数据路径
    let apiParams = curConfigData.body || {}; // 动态数据/请求参数
    if (!isObject(apiParams) && apiParams !== '') {
      try {
        apiParams = JSON.parse(apiParams);
      } catch (err) {
        console.log('当前数据源的请求参数格式异常');
        apiParams = {};
      }
    }
    const curDynamicData = dynamicDataObj[dataName] || {}; // 根据dataName获取最新的数据源对象

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
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }`}
        // key={nodeKey}
        id={nodeKey}
        style={style}
      >
        <div
          className="element-title"
          style={titleStyle}
        >{`${curConfigData.title} (接口下发）`}</div>
        <div className="content-item object-content" style={contentStyle}>
          <div
            className="remote-dynamic-data-schema"
            key={`${nodeKey}-remote-dynamic-data`}
            id={`${nodeKey}-remote-dynamic-data`}
          >
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
                } element-title-card-warp`}
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
                    const curNodeKey = `${nodeKey}-body-${paramKey}`;
                    const scopeTitle = dynamicDataApiScopeList[paramItam.scope];
                    if (scopeTitle && paramItam.title.indexOf(scopeTitle) < 0) {
                      paramItam.title = `${paramItam.title}（${scopeTitle}）`;
                    }
                    paramItam.default = paramItam.value; // 将当前参数值保存在schema的default，以便展示
                    return (
                      <InputFormSchema
                        {...{
                          pageScreen: pageScreen, // 默认使用宽屏模式
                          jsonKey: paramKey,
                          nodeKey: curNodeKey,
                          targetJsonSchema: paramItam,
                          onChange: (newVal) => {
                            this.paramsValueChange(paramKey, newVal);
                          },
                        }}
                        key={curNodeKey}
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
              <TreeSelectFrom
                {...{
                  nodeKey: `${nodeKey}-dataRoute`,
                  mockData: curDynamicData.respMock,
                  dataRoute,
                  onChange: this.dataRouteChange,
                }}
                key={`${nodeKey}-dataRoute`}
              />
            )}
            {dataName && (
              <CodeAreaFormSchema
                {...{
                  isReadOnly: true,
                  isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                  jsonKey: 'filter',
                  nodeKey: `${nodeKey}-config-params-filter-${dataRoute}`,
                  keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                  targetJsonSchema: {
                    title: '过滤器函数体',
                    default: 'return data;',
                  },
                }}
                key={`${nodeKey}-filter`}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  schemaStore: stores.JSONSchemaStore,
  jsonStore: stores.JSONEditorStore,
}))(observer(RemoteDynamicDataSchema));
