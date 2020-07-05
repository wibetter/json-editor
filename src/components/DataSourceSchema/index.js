import React from 'react';
import { Tooltip } from 'antd';

/** DataSource类型渲染组件 */
const DataSourceSchema = (props) => {
  const { indexRoute, nodeKey, keyRoute, targetJsonData } = props;

  return (
    <div className="element-wrap" key={nodeKey} indexRoute={indexRoute} keyRoute={keyRoute}>
      <Tooltip title={targetJsonData.description} placement="topLeft">
        <span className="element-name-span">{targetJsonData.title}</span>
      </Tooltip>
      <div className="content-item">
        DataSource元素内容[开发中]
      </div>
    </div>
  );
};

export default DataSourceSchema;
