import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import TypeSelectFormSchema from '$components/TypeSelectFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => {
  return <BaseFormSchema {...params} />;
};

/** 渲染dataSelect在的内容 */
const getTypeSelectCont = (params) => {
  return <TypeSelectFormSchema {...params} />;
};

/** Quantity类型渲染组件 */
const QuantitySchema = (props) => {
  const { parentType, jsonKey, indexRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);

  /** 获取quantity中的数值对象（默认第一个就是数值对象）*/
  const unitJsonKey = targetJsonData.propertyOrder[0];
  const unitJsonData = targetJsonData.properties[unitJsonKey];

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
      <TreeNode
        className={'quantity-unit-item-schema schema-item-form'}
        id={`${nodeKey}-${unitJsonKey}`}
        key={`${nodeKey}-${unitJsonKey}`}
        indexRoute={`${indexRoute}-0`}
        jsonKey={unitJsonKey}
        disabled={true}
        title={getTreeNodeTitleCont({
          indexRoute: `${indexRoute}-0`,
          jsonKey: unitJsonKey,
          targetJsonData: unitJsonData,
          parentType: currentFormat,
          nodeKey: `${nodeKey}-${unitJsonKey}`,
          typeIsFixed: true,
          hideOperaBtn: true,
        })}
      ></TreeNode>
      <TreeNode
        className={'quantity-typeSelect-item-schema schema-item-form'}
        id={`${nodeKey}-quantity`}
        key={`${nodeKey}-quantity`}
        indexRoute={`${indexRoute}-1`}
        jsonKey={'quantity'}
        disabled={true}
        title={getTypeSelectCont({
          indexRoute: `${indexRoute}-1`,
          jsonKey: 'quantity',
          targetJsonData: targetJsonData.properties.quantity,
          parentType: currentFormat,
          nodeKey: `${nodeKey}-quantity`,
        })}
      ></TreeNode>
    </TreeNode>
  );
};

export default QuantitySchema;
