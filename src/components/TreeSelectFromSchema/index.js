import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';

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
      // treeData = mockData
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
              placeholder="请选择当前数据路径"
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
