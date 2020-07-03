import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import MappingRender from '$components/MappingRender';
import { getCurrentFormat } from '$utils/jsonSchema';

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

/** 渲染items中的元素 */
const itemsRender = (props) => {
  const { parentType, jsonKey, indexRoute, nodeKey, targetJsonData } = props;

  return (
    <TreeNode
      className={'array-item-schema schema-item-form'}
      id={nodeKey}
      key={nodeKey}
      indexRoute={indexRoute}
      jsonKey={jsonKey}
      disabled={true}
      title={getTreeNodeTitleCont({
        indexRoute,
        jsonKey,
        targetJsonData,
        parentType,
        nodeKey,
        isFixed: true,
      })}
    >
      {propertiesRender({
        propertyOrder: targetJsonData.propertyOrder,
        properties: targetJsonData.properties,
        parentIndexRoute: indexRoute,
        parentNodeKey: nodeKey,
        parentType: 'array-object',
      })}
    </TreeNode>
  );
};

/** Array类型渲染组件 */
const ArraySchema = (props) => {
  const { parentType, jsonKey, indexRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);

  return (
    <TreeNode
      className={`${currentFormat}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      indexRoute={indexRoute}
      jsonKey={jsonKey}
      title={getTreeNodeTitleCont({
        indexRoute,
        jsonKey,
        targetJsonData,
        parentType,
        nodeKey,
      })}
    >
      {itemsRender({
        parentType: currentFormat,
        jsonKey: `items`,
        indexRoute: `${indexRoute}-0`,
        nodeKey: `${nodeKey}-items`,
        targetJsonData: targetJsonData.items,
      })}
    </TreeNode>
  );
};

export default ArraySchema;
