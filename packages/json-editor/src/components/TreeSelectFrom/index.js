import * as React from 'react';
import { inject, observer } from 'mobx-react';
// import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { InfoCircleOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { json2treeData, isObject } from '@wibetter/json-utils';
import { buildStyle } from '$utils/index';

class TreeSelectFrom extends React.PureComponent {
  static propTypes = {
    mockData: PropTypes.any, // 接口mock数据
    dataRoute: PropTypes.any, // 数据路径
    onChange: PropTypes.func, // 数据路径值变动后触发
    nodeKey: PropTypes.string,
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { mockData, dataRoute, nodeKey, onChange } = this.props;
    let treeData = [];
    if (mockData && JSON.stringify(mockData) !== '{}') {
      let mockObj = mockData;
      if (!isObject(mockData) && mockData !== '') {
        try {
          mockObj = JSON.parse(mockData);
        } catch (err) {
          console.log('当前数据源的请求参数格式异常');
          mockObj = {};
        }
      }
      treeData = json2treeData(mockObj);
    }

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
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        // key={`${nodeKey}-dataRoute-select`}
        id={`${nodeKey}-dataRoute-select`}
        style={style}
      >
        <div className="element-title" style={titleStyle}>
          数据路径选择
        </div>
        <div className="content-item" style={contentStyle}>
          <div className="form-item-box">
            <TreeSelect
              className="data-route-select"
              defaultValue={dataRoute}
              treeData={treeData}
              allowClear={true}
              placeholder="请选择要使用的数据节点（数据路径）"
              treeDefaultExpandAll
              onChange={onChange}
            ></TreeSelect>
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  schemaStore: stores.JSONSchemaStore,
}))(observer(TreeSelectFrom));
