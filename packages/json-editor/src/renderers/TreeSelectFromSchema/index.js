import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';
import { json2treeData, isObject } from '@wibetter/json-utils';

class TreeSelectFromSchema extends React.PureComponent {
  static propTypes = {
    pageScreen: PropTypes.any,
    mockData: PropTypes.any, // 接口mock数据
    dataRoute: PropTypes.any, // 数据路径
    onChange: PropTypes.func, // 数据路径值变动后触发
    nodeKey: PropTypes.string,
  };

  render() {
    const { pageScreen, mockData, dataRoute, nodeKey, onChange } = this.props;
    let treeData = [];
    if (mockData && JSON.stringify(mockData) !== '{}') {
      let mockObj = mockData;
      if (!isObject(mockData) && mockData !== '') {
        try {
          mockObj = JSON.parse(mockData);
        } catch (err) {
          console.log('当前数据源的请求参数对象不是一个合格的json数据');
          mockObj = {};
        }
      }
      treeData = json2treeData(mockObj);
    }

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        key={`${nodeKey}-dataRoute-select`}
        id={`${nodeKey}-dataRoute-select`}
      >
        <div className="element-title">数据路径选择</div>
        <div className="content-item">
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
  pageScreen: stores.JSONSchemaStore.pageScreen,
}))(observer(TreeSelectFromSchema));
