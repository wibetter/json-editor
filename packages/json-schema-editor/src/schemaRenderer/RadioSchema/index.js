import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import EnumItemSchema from '$components/EnumItemSchema/index';
import { getCurrentFormat } from '@wibetter/json-utils';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => <BaseFormSchema {...params} />;

/** 渲染items中的enum和enumextra数据 */
const enumItemRender = (params) => <EnumItemSchema {...params} />;

/** Radio类型渲染组件 */
const RadioSchema = (props) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const currentFormat = getCurrentFormat(targetJsonSchema);

  // 获取枚举值
  const enumKeys = targetJsonSchema.items.enum;
  const enumTexts = targetJsonSchema.items.enumextra;
  const curIndexRoute = indexRoute ? `${indexRoute}-0` : '0';

  return (
    <TreeNode
      className={`${currentFormat}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      indexRoute={indexRoute}
      jsonKey={jsonKey}
      title={getTreeNodeTitleCont({
        ...props,
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

export default RadioSchema;
