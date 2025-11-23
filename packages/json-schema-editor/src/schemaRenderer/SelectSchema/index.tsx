import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import OptionSchema from '$components/OptionSchema/index';
import { BaseRendererProps } from '$types/index';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params: any) => <BaseFormSchema {...params} />;

/** 渲染options中的元素 */
const optionItemRender = (params: any) => <OptionSchema {...params} />;

/** Select类型渲染组件 */
const SelectSchema = (props: BaseRendererProps) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const curType = targetJsonSchema.type;

  const options = targetJsonSchema.options;
  const curIndexRoute = indexRoute ? indexRoute : '0';

  return (
    <TreeNode
      className={`${curType}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      // indexRoute={indexRoute || '0'}
      // jsonKey={jsonKey}
      title={getTreeNodeTitleCont({
        ...props,
      })}
    >
      {options &&
        options.length > 0 &&
        options.map((optionItem: any, optionIndex: number) => {
          /** 1. 获取当前选项label和value */
          const optionLabel = optionItem.label || optionItem.name;
          const optionValue = optionItem.value;
          /** 2. 获取当前选项元素的id，用于做唯一标识 */
          const optionNodeKey = `${nodeKey}${curType}-${optionLabel}`;

          return (
            <TreeNode
              className="enum-item-schema schema-item-form"
              id={optionNodeKey}
              key={optionNodeKey}
              // indexRoute={curIndexRoute}
              disabled={true}
              title={optionItemRender({
                indexRoute: curIndexRoute,
                optionIndex,
                optionLabel,
                optionValue,
                optionNodeKey,
              })}
            ></TreeNode>
          );
        })}
    </TreeNode>
  );
};

export default SelectSchema;
