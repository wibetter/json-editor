import React from 'react';
import { Tooltip } from 'antd';
import { getCurrentFormat } from '$utils/jsonSchema';

/** Quantity类型渲染组件 */
const QuantitySchema = (props) => {
  const { parentType, jsonKey, indexRoute, keyRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);

  /** 获取quantity中的数值对象（默认第一个就是数值对象）*/
  const unitJsonKey = targetJsonData.propertyOrder[0];
  const unitJsonData = targetJsonData.properties[unitJsonKey];

  return (
    <div className="element-wrap" key={nodeKey}>
      <Tooltip title={targetJsonData.description} placement="topLeft">
        <span className="element-name-span">{targetJsonData.title}</span>
      </Tooltip>
      <div className="content-item">
        Quantity元素内容[开发中]
      </div>
    </div>
  );
};

export default QuantitySchema;
