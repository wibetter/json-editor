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
import URLFormSchema from '$renderers/URLFormSchema/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import CodeIcon from '$assets/img/code.svg';
import './index.scss';

class DataSourceSchema extends React.PureComponent {
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

  componentWillReceiveProps(nextProps) {
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
    const { keyRoute, nodeKey, indexRoute, targetJsonSchema, pageScreen } =
      this.props;
    const { jsonView, isClosed, isShowFilter } = this.state;
    const curType = targetJsonSchema.type;

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote
    const dataObj = targetJsonSchema.properties.data || {}; // 用于录入数据（或者数据源地址）
    const filterDataObj = targetJsonSchema.properties.filter || {}; // 数据过滤器
    // 获取当前数据源类型
    const dataType = typeDataObj.default; // local or remote
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true;

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
            <span className="title-text">数据源配置</span>
            {isClosed ? (
              <RightOutlined className="close-operate-btn" />
            ) : (
              <DownOutlined className="close-operate-btn" />
            )}

            {showCodeViewBtn && (
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
                  <JsonFormSchema
                    {...{
                      parentType: curType,
                      jsonKey: 'data',
                      indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                      keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                      nodeKey: `${nodeKey}-data`,
                      targetJsonSchema: dataObj,
                    }}
                    key={`${nodeKey}-data`}
                  />
                </div>
                {isShowFilter && (
                  <CodeAreaFormSchema
                    {...{
                      parentType: curType,
                      jsonKey: 'filter',
                      indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                      keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                      nodeKey: `${nodeKey}-filter`,
                      targetJsonSchema: filterDataObj,
                    }}
                    key={`${nodeKey}-filter`}
                  />
                )}
              </>
            )}
            {!jsonView && dataType === 'remote' && (
              <>
                <div className="url-editor-box">
                  <URLFormSchema
                    {...{
                      parentType: curType,
                      jsonKey: 'data',
                      indexRoute: indexRoute ? `${indexRoute}-1` : '1',
                      keyRoute: keyRoute ? `${keyRoute}-data` : 'data',
                      nodeKey: `${nodeKey}-data`,
                      targetJsonSchema: dataObj,
                    }}
                    key={`${nodeKey}-data`}
                  />
                  <Tooltip title="点击设置数据过滤器" placement="top">
                    <FilterOutlined
                      className="filter-url-btn"
                      onClick={this.switchFilterBtn}
                    />
                  </Tooltip>
                </div>
                {isShowFilter && (
                  <CodeAreaFormSchema
                    {...{
                      parentType: curType,
                      jsonKey: 'filter',
                      indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                      keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                      nodeKey: `${nodeKey}-filter`,
                      targetJsonSchema: filterDataObj,
                    }}
                    key={`${nodeKey}-filter`}
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
}))(observer(DataSourceSchema));
