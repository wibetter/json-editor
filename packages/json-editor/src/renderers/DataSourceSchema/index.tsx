import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import JsonView from '$components/JsonView/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
// @ts-ignore
// @ts-ignore
import CodeIcon from '$assets/img/code.svg';
import './index.scss';

interface DataSourceSchemaState {
  isShowFilter: boolean;
  jsonView: boolean;
  isClosed: boolean;
}

class DataSourceSchema extends React.PureComponent<
  BaseRendererProps,
  DataSourceSchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);

    this.state = {
      isShowFilter: false, // 是否显示数据过滤器
      jsonView: false, // 是否显示code模式
      isClosed: false, // 是否为关闭状态，默认是开启状态
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.switchFilterBtn = this.switchFilterBtn.bind(this);
  }

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  // 显示和隐藏数据过滤器
  switchFilterBtn = () => {
    const { isShowFilter } = this.state;
    this.setState({
      isShowFilter: !isShowFilter,
    });
  };

  render() {
    const { schemaStore, jsonStore, renderChild } = this.props;
    const { pageScreen } = schemaStore || {};
    const { keyRoute, jsonKey, nodeKey, indexRoute, targetJsonSchema } =
      this.props;
    const { jsonView, isClosed, isShowFilter } = this.state;
    const curType = targetJsonSchema.type;
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote
    const dataObj = targetJsonSchema.properties.data || {}; // 用于录入数据（或者数据源地址）
    const filterDataObj = targetJsonSchema.properties.filter || {}; // 数据过滤器
    // 获取当前数据源类型
    const dataType = typeDataObj.default; // local or remote
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true;

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
        <div
          className="element-title-card-warp content-item"
          style={contentStyle}
        >
          <div
            className="element-title"
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              this.setState({
                isClosed: !isClosed,
              });
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <span className="title-text">数据源配置</span>
            {isClosed ? (
              <RightOutlined className="close-operate-btn" />
            ) : (
              <DownOutlined className="close-operate-btn" />
            )}

            {showCodeViewBtn && (
              <div
                className="display-source-btn"
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
            )}
          </div>
          <div
            className={`content-item object-content ${jsonView ? 'json-view-array' : ''} ${isClosed ? 'closed' : ''}`}
          >
            {!jsonView && dataType === 'local' && (
              <>
                <div className="ace-editor-box code-area-item">
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
                    indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                    keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                    nodeKey: `${nodeKey}-data`,
                    targetJsonSchema: dataObj,
                    key: `${nodeKey}-data`,
                  })}
                </div>
                {isShowFilter &&
                  renderChild({
                    rendererType: 'codearea',
                    parentType: curType,
                    jsonKey: 'filter',
                    indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                    keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                    nodeKey: `${nodeKey}-filter`,
                    targetJsonSchema: filterDataObj,
                  })}
              </>
            )}
            {!jsonView && dataType === 'remote' && (
              <>
                <div className="url-editor-box">
                  {renderChild({
                    rendererType: 'url',
                    parentType: curType,
                    jsonKey: 'data',
                    indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                    keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                    nodeKey: `${nodeKey}-data`,
                    targetJsonSchema: dataObj,
                  })}
                  <Tooltip title="点击设置数据过滤器" placement="top">
                    <FilterOutlined
                      className="filter-url-btn"
                      onClick={this.switchFilterBtn}
                    />
                  </Tooltip>
                </div>
                {isShowFilter &&
                  renderChild({
                    rendererType: 'codearea',
                    parentType: curType,
                    jsonKey: 'filter',
                    indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                    keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                    nodeKey: `${nodeKey}-filter`,
                    targetJsonSchema: filterDataObj,
                  })}
              </>
            )}
            {jsonView && <JsonView {...this.props} />}
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'datasource',
  component: DataSourceSchema,
});

export default DataSourceSchema;
