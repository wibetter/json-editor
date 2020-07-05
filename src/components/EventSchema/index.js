import React from 'react';
import { Tooltip } from 'antd';
import { getCurrentFormat } from '$utils/jsonSchema';

/** Event类型渲染组件 */
const EventSchema = (props) => {
  const { parentType, jsonKey, indexRoute, keyRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);
  const typeJsonObj = targetJsonData.properties.type;
  const triggerJsonObj = targetJsonData.properties.trigger;
  const eventDataJsonObj = targetJsonData.properties.eventData;
  const callbackJsonObj = targetJsonData.properties.callback;

  return (
    <div className="element-wrap" key={nodeKey}>
      <Tooltip title={targetJsonData.description} placement="topLeft">
        <span className="element-name-span">{targetJsonData.title}</span>
      </Tooltip>
      <div className="content-item">
        Event元素内容[开发中]
      </div>
    </div>
  );
};

export default EventSchema;
