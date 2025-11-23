import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { Tooltip } from 'antd';
import { FilterOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
import './index.scss';

interface DynamicDataSchemaProps {
  parentType?: string;
  jsonKey?: string;
  indexRoute?: string;
  keyRoute?: string;
  nodeKey?: string;
  targetJsonSchema: any;
  dynamicDataList?: any[];
  dynamicDataObj?: any;
  dynamicDataApiScopeList?: any;
  schemaStore?: any;
  jsonStore?: any;
  renderChild?: any;
}

interface DynamicDataSchemaState {
  isShowFilter: boolean;
}

class DynamicDataSchema extends React.PureComponent<
  DynamicDataSchemaProps,
  DynamicDataSchemaState
> {
  constructor(props: DynamicDataSchemaProps) {
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

  componentWillReceiveProps(nextProps: DynamicDataSchemaProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  /** 数值变动事件处理器 */
  handleValueChange = (curKeyRoute: string, value: any) => {
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
  tabChange = (value: string) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction } = jsonStore || {};
    this.handleValueChange(`${keyRoute}-type`, value);
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  // API 配置变更处理
  handleApiConfigChange = (apiConfig: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { triggerChangeAction } = jsonStore || {};
    this.handleValueChange(`${keyRoute}-config`, apiConfig);
    setTimeout(() => {
      triggerChangeAction();
    }, 100);
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute, triggerChange } = jsonStore || {};
    const {
      keyRoute,
      jsonKey,
      nodeKey,
      indexRoute,
      targetJsonSchema,
      renderChild,
    } = this.props;
    const { isShowFilter } = this.state;
    const curType = targetJsonSchema.type;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote
    const dataType = curJsonData.type || typeDataObj.default; // local or remote

    const configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
    const dataObj = targetJsonSchema.properties.data || {}; // schema中的数据对象
    const configSchema = targetJsonSchema.properties.config || {}; // config的schema配置

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
                <span>（{truncate(jsonKey || '', { length: 15 })}）</span>
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
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  this.tabChange('local');
                }}
              >
                本地数据
              </div>
              <div
                className={`tab-radio ${
                  dataType === 'remote' ? 'tab-radio-active' : ''
                }`}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
              {renderChild({
                rendererType: 'json',
                parentType: curType,
                jsonKey: 'data',
                indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                nodeKey: `${nodeKey}-data`,
                targetJsonSchema: dataObj,
              })}
              <div className="filter-func-box">
                {isShowFilter &&
                  renderChild({
                    rendererType: 'codearea',
                    isIgnoreWarn: true, // 当前主要使用方法体(非直接执行函数)
                    parentType: curType,
                    jsonKey: 'localFilter',
                    indexRoute: indexRoute ? `${indexRoute}-3` : '3',
                    keyRoute: keyRoute
                      ? `${keyRoute}-localFilter`
                      : 'localFilter',
                    nodeKey: `${nodeKey}-localFilter`,
                    targetJsonSchema: targetJsonSchema.properties.localFilter,
                  })}
              </div>
            </div>
          </div>
          <div
            className={`dynamic-dat-tabPane ${
              dataType === 'remote' ? 'dynamic-dat-tabPane-active' : ''
            }`}
          >
            <div className="json-form-box">
              {renderChild({
                rendererType: 'api',
                parentType: curType,
                jsonKey: 'config',
                indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                keyRoute: keyRoute ? `${keyRoute}-config` : 'config',
                nodeKey: `${nodeKey}-config`,
                targetJsonSchema: configSchema,
                onChange: this.handleApiConfigChange,
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'dynamic-data',
  component: DynamicDataSchema,
});

export default DynamicDataSchema;
