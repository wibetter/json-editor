import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
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
  }

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      pageScreen,
    } = this.props;
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
            </>
          )}
          {dataType === 'remote' && (
            <>
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
