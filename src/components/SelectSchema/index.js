import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import EnumItemSchema from '$components/EnumItemSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => {
  return <BaseFormSchema {...params} />;
};

/** 渲染items中的enum和enumextra数据 */
const enumItemRender = (params) => {
  return <EnumItemSchema {...params} />;
};

/** Select类型渲染组件 */
const SelectSchema = (props) => {
  const { parentType, jsonKey, indexRoute, nodeKey, targetJsonData } = props;
  const currentFormat = getCurrentFormat(targetJsonData);

  // 获取枚举值
  const enumKeys = targetJsonData.items.enum;
  const enumTexts = targetJsonData.items.enumextra;
  const curIndexRoute = `${indexRoute}-0`;

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
      {enumKeys &&
        enumKeys.length > 0 &&
        enumKeys.map((enumKey, enumIndex) => {
          /** 1. 获取当前enum的title */
          const enumText = enumTexts[enumIndex];
          /** 2. 获取当前元素的id，用于做唯一标识 */
          const enumNodeKey = `${nodeKey}${currentFormat}-${enumKey}`;

          return (
            <TreeNode
              className="enum-item-schema schema-item-form"
              id={enumNodeKey}
              key={enumNodeKey}
              indexRoute={curIndexRoute}
              disabled={true}
              title={enumItemRender({
                indexRoute: curIndexRoute,
                enumIndex,
                enumKey,
                enumText,
                enumNodeKey,
              })}
            ></TreeNode>
          );
        })}
    </TreeNode>
  );
};

export default SelectSchema;
