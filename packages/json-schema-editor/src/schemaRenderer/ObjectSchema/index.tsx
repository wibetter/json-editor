import React from 'react';
import { Tree } from 'antd';
import BaseFormSchema from '$components/BaseFormSchema/index';
import MappingRender from '$schemaRenderer/MappingRender';
import { BaseRendererProps } from '$types/index';
const { TreeNode } = Tree;

/** 渲染当前字段的表单项（Tree的表单项内容） */
const getTreeNodeTitleCont = (params: BaseRendererProps) => {
  return <BaseFormSchema {...params} />;
};

/** 渲染properties中的元素
 *  通过遍历propertyOrder有序的获取key值，
 *  再根据key值从properties中获取对应的json数据，
 *  parentIndexRoute用于拼接当前元素的完整索引路径。
 * */
const propertiesRender = (params: BaseRendererProps) => {
  const {
    propertyOrder,
    properties,
    parentIndexRoute,
    parentNodeKey,
    parentType,
    isOnlyShowChild,
    ...restProps
  } = params;

  return propertyOrder.map((key: string, index: number) => {
    /** 1. 获取当前元素的路径值 */
    const currentIndexRoute = parentIndexRoute
      ? `${parentIndexRoute}-${index}`
      : `${index}`;
    /** 2. 获取当前元素的key值 */
    const currentJsonKey = key;
    /** 3. 获取当前元素的json数据对象 */
    const currentSchemaData = properties[currentJsonKey];
    /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
    const curType = currentSchemaData.type;
    /** 5. 获取当前元素的id，用于做唯一标识 */
    let nodeKey = `${
      parentNodeKey ? `${parentNodeKey}-` : ''
    }${curType}-${currentJsonKey}`; // 默认只使用当前format+jsonKey作为nodeKey

    return MappingRender({
      ...restProps,
      parentType,
      jsonKey: currentJsonKey,
      indexRoute: currentIndexRoute,
      key: nodeKey,
      nodeKey,
      targetJsonSchema: currentSchemaData,
    });
  });
};

/** ObjectSchema
 *  Object类型元素渲染组件
 * */
const ObjectSchema = (props: BaseRendererProps) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema, isOnlyShowChild } =
    props;
  const curType = targetJsonSchema.type;
  const isFixed = targetJsonSchema.isFixed;

  /** 先获取当前节点的properties内容 */
  const propertiesContElem = propertiesRender({
    ...props,
    propertyOrder: targetJsonSchema.propertyOrder,
    properties: targetJsonSchema.properties,
    parentIndexRoute: indexRoute,
    parentNodeKey: nodeKey,
    parentType: curType,
    isOnlyShowChild,
  });

  /** 节点内容 */
  const TreeNodeElem = (
    <TreeNode
      className={`${curType}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      // indexRoute={indexRoute}
      // jsonKey={jsonKey}
      disabled={isFixed}
      title={getTreeNodeTitleCont({
        ...props,
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
