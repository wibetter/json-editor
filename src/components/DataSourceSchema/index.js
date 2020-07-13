import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import URLFormSchema from '$components/URLFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';

class DataSourceSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowFilter: false, // 是否显示数据过滤器
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.switchFilterBtn = this.switchFilterBtn.bind(this);
  }

  // 显示和隐藏数据过滤器
  switchFilterBtn = () => {
    const { isShowFilter } = this.state;
    this.setState({
      isShowFilter: !isShowFilter,
    });
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      pageScreen,
    } = this.props;
    const { isShowFilter } = this.state;
    const currentFormat = getCurrentFormat(targetJsonData);

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonData.properties.type; // type中记录了数据源类型：local or remote
    const dataObj = targetJsonData.properties.data; // 用于录入数据（或者数据源地址）
    const filterDataObj = targetJsonData.properties.filter; // 数据过滤器
    // 获取当前数据源类型
    const dataType = typeDataObj.default; // local or remote

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }  block-element-warp`}
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip
            title={targetJsonData.description}
            placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
          >
            <span className="title-text">{targetJsonData.title}</span>
          </Tooltip>
        </div>
        <div className="content-item object-content">
          {dataType === 'local' && (
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
                    parentType: currentFormat,
                    jsonKey: 'data',
                    indexRoute: `${indexRoute}-1`,
                    keyRoute: `${keyRoute}-data`,
                    nodeKey: `${nodeKey}-data`,
                    targetJsonData: dataObj,
                  }}
                  key={`${nodeKey}-data`}
                />
              </div>
              {isShowFilter && (
                <CodeAreaFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'filter',
                    indexRoute: `${indexRoute}-2`,
                    keyRoute: `${keyRoute}-filter`,
                    nodeKey: `${nodeKey}-filter`,
                    targetJsonData: filterDataObj,
                  }}
                  key={`${nodeKey}-filter`}
                />
              )}
            </>
          )}
          {dataType === 'remote' && (
            <>
              <div className="url-editor-box">
                <URLFormSchema
                  {...{
                    parentType: currentFormat,
                    jsonKey: 'data',
                    indexRoute: `${indexRoute}-1`,
                    keyRoute: `${keyRoute}-data`,
                    nodeKey: `${nodeKey}-data`,
                    targetJsonData: dataObj,
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
                    parentType: currentFormat,
                    jsonKey: 'filter',
                    indexRoute: `${indexRoute}-2`,
                    keyRoute: `${keyRoute}-filter`,
                    nodeKey: `${nodeKey}-filter`,
                    targetJsonData: filterDataObj,
                  }}
                  key={`${nodeKey}-filter`}
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
}))(observer(DataSourceSchema));
