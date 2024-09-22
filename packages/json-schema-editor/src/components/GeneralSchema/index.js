import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import { getCurrentFormat } from '@wibetter/json-utils';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => <BaseFormSchema {...params} />;

/** 通用类型渲染组件
 *  可用于渲染：input、boolean、 date、date-time、 time、
 *  url、 textarea、color、number、json
 * */
const GeneralSchema = (props) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const currentFormat = getCurrentFormat(targetJsonSchema);

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
    ></TreeNode>
  );
};

export default GeneralSchema;
