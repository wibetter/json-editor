import React from 'react';

import { Tooltip } from 'antd';
import MappingRender from '$components/MappingRender';
import { getCurrentFormat } from '$utils/jsonSchema';

/** ObjectSchema
 *  Object类型元素渲染组件
 * */
const ObjectSchema = (props) => {
  const { indexRoute, nodeKey, keyRoute, targetJsonData } = props;

  return (
    <div className="element-wrap" key={nodeKey}>
      {
        targetJsonData.description && (
          <Tooltip title={targetJsonData.description} placement="topLeft">
            <span className="element-name-span">{targetJsonData.title}</span>
          </Tooltip>
        )
      }
      {
        !targetJsonData.description && (
          <span className="element-name-span">{targetJsonData.title}</span>
        )
      }
      <div className="content-item">
        {targetJsonData.propertyOrder && targetJsonData.propertyOrder.map((key, index) => {
          /** 1. 获取当前元素的路径值 */
          const currentIndexRoute = `${indexRoute}-${index}`;
          const currentKeyRoute = `${keyRoute}-${key}`; // key路径值，后续用于从jsonData中提取当前元素的数值
          /** 2. 获取当前元素的key值 */
          const currentJsonKey = key;
          /** 3. 获取当前元素的json结构对象 */
          const currentSchemaData = targetJsonData.properties[currentJsonKey];
          /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
          const currentFormat = getCurrentFormat(currentSchemaData);
          /** 5. 获取当前元素的id，用于做唯一标识 */
          const nodeKey = `${currentFormat}-${currentJsonKey}`;

          return (
            MappingRender({
              parentType: currentFormat,
              jsonKey: currentJsonKey,
              indexRoute: currentIndexRoute,
              keyRoute: currentKeyRoute,
              nodeKey,
              targetJsonData: currentSchemaData,
            })
          );
        })}
      </div>
    </div>
  );
};

export default ObjectSchema;
