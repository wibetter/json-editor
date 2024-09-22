import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
import BaseFormSchema from '$components/BaseFormSchema/index';
import TypeSelectFormSchema from '$components/TypeSelectFormSchema/index';
import { getCurrentFormat } from '@wibetter/json-utils';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => <BaseFormSchema {...params} />;

/** 渲染dataSelect在的内容 */
const getTypeSelectCont = (params) => <TypeSelectFormSchema {...params} />;

/** Quantity类型渲染组件 */
const QuantitySchema = (props) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const currentFormat = getCurrentFormat(targetJsonSchema);

  /** 获取quantity中的数值对象（默认第一个就是数值对象） */
  const unitJsonKey = targetJsonSchema.propertyOrder[0];
  const unitJsonData = targetJsonSchema.properties[unitJsonKey];

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
      <TreeNode
        className={'quantity-unit-item-schema schema-item-form'}
        id={`${nodeKey}-${unitJsonKey}`}
        key={`${nodeKey}-${unitJsonKey}`}
        indexRoute={indexRoute ? `${indexRoute}-0` : '0'}
        jsonKey={unitJsonKey}
        disabled={true}
        title={getTreeNodeTitleCont({
          indexRoute: indexRoute ? `${indexRoute}-0` : '0',
          jsonKey: unitJsonKey,
          targetJsonSchema: unitJsonData,
          parentType: currentFormat,
          nodeKey: `${nodeKey}-${unitJsonKey}`,
          typeIsFixed: true,
          hideOperaBtn: true,
          isShowAdvanceBtn: true,
        })}
      ></TreeNode>
      <TreeNode
        className={'quantity-typeSelect-item-schema schema-item-form'}
        id={`${nodeKey}-quantity`}
        key={`${nodeKey}-quantity`}
        indexRoute={indexRoute ? `${indexRoute}-1` : '1'}
        jsonKey={'quantity'}
        disabled={true}
        title={getTypeSelectCont({
          indexRoute: indexRoute ? `${indexRoute}-1` : '1',
          jsonKey: 'quantity',
          targetJsonSchema: targetJsonSchema.properties.quantity,
          parentType: currentFormat,
          nodeKey: `${nodeKey}-quantity`,
        })}
      ></TreeNode>
    </TreeNode>
  );
};

export default QuantitySchema;
