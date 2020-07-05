import React from 'react';
import { Input, Tooltip, Tree } from 'antd';
const { TreeNode } = Tree;
import MappingRender from '$components/MappingRender';
import { getCurrentFormat } from '$utils/jsonSchema';

/** 渲染properties中的元素
 *  通过遍历propertyOrder有序的获取key值，
 *  再根据key值从properties中获取对应的json数据，
 *  parentIndexRoute用于拼接当前元素的完整索引路径。
 * */
const propertiesRender = (params) => {
  const {
    propertyOrder,
    properties,
    parentIndexRoute,
    parentNodeKey,
    parentType,
  } = params;

  return propertyOrder.map((key, index) => {
    /** 1. 获取当前元素的路径值 */
    const currentIndexRoute = parentIndexRoute
      ? parentIndexRoute + '-' + index
      : index + '';
    /** 2. 获取当前元素的key值 */
    const currentJsonKey = key;
    /** 3. 获取当前元素的json数据对象 */
    const currentSchemaData = properties[currentJsonKey];
    /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
    const currentFormat = getCurrentFormat(currentSchemaData);
    /** 5. 获取当前元素的id，用于做唯一标识 */
    const nodeKey = `${
      parentNodeKey ? parentNodeKey + '-' : ''
    }${currentFormat}-${currentJsonKey}`;

    return MappingRender({
      parentType,
      jsonKey: currentJsonKey,
      indexRoute: currentIndexRoute,
      key: nodeKey,
      nodeKey,
      targetJsonData: currentSchemaData,
    });
  });
};

/** Array类型渲染组件 */
const ArraySchema = (props) => {
  const { indexRoute, nodeKey, keyRoute, targetJsonData } = props;

  return (
    <div className="element-wrap" key={nodeKey}>
      <Tooltip title={targetJsonData.description} placement="topLeft">
        <span className="element-name-span">{targetJsonData.title}</span>
      </Tooltip>
      <div className="content-item">
        数组元素内容[开发中]
      </div>
    </div>
  );
};

export default ArraySchema;
