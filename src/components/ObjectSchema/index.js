import React from 'react';

import { Tree } from 'antd';
import BaseFormSchema from '$components/BaseFormSchema/index';
import MappingRender from '$components/MappingRender';
const { TreeNode } = Tree;
import { isFirstSchemaData, getCurrentFormat } from '$utils/jsonSchema';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => {
  return <BaseFormSchema {...params} />;
};

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

/** ObjectSchema
 *  Object类型元素渲染组件
 * */
const ObjectSchema = (props) => {
  const {
    parentType,
    jsonKey,
    indexRoute,
    nodeKey,
    targetJsonData,
    isOnlyShowChild,
  } = props;
  const currentFormat = getCurrentFormat(targetJsonData);
  const isFirstSchema = isFirstSchemaData(currentFormat); // 一级固定类型元素不允许拖拽

  /** 先获取当前节点的properties内容 */
  const propertiesContElem = propertiesRender({
    propertyOrder: targetJsonData.propertyOrder,
    properties: targetJsonData.properties,
    parentIndexRoute: indexRoute,
    parentNodeKey: nodeKey,
    parentType: currentFormat,
  });

  /** 节点内容 */
  const TreeNodeElem = (
    <TreeNode
      className={`${currentFormat}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      indexRoute={indexRoute}
      jsonKey={jsonKey}
      disabled={isFirstSchema}
      title={getTreeNodeTitleCont({
        indexRoute,
        jsonKey,
        targetJsonData,
        parentType,
        nodeKey,
      })}
    >
      {propertiesContElem}
    </TreeNode>
  );

  /** isOnlyShowChild为true时只渲染节点的properties内容
   * 备注：JSONSchema渲染组件中，已经显示了节点内容（Tree根接口）
   * */
  return isOnlyShowChild ? propertiesContElem : TreeNodeElem;
};

export default ObjectSchema;
