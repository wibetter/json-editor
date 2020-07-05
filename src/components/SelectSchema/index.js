import React from 'react';
import { Tooltip } from 'antd';
import { getCurrentFormat } from '$utils/jsonSchema';

/** Select类型渲染组件 */
const SelectSchema = (props) => {
  const { parentType, jsonKey, indexRoute, keyRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);

  // 获取枚举值
  const enumKeys = targetJsonData.items.enum;
  const enumTexts = targetJsonData.items.enumextra;
  const curIndexRoute = `${indexRoute}-0`;

  return (
    <div className="element-wrap" key={nodeKey}>
      <Tooltip title={targetJsonData.description} placement="topLeft">
        <span className="element-name-span">{targetJsonData.title}</span>
      </Tooltip>
      <div className="content-item">
        Select元素内容[开发中]
      </div>
    </div>
  );
};

export default SelectSchema;
