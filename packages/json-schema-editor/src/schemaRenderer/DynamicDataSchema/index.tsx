import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;

import BaseFormSchema from '$components/BaseFormSchema/index';
import SelectFormSchema from '$components/SelectFormSchema/index';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params) => <BaseFormSchema {...params} />;

/** 渲染dataSelect在的内容 */
const getTypeSelectCont = (params) => <SelectFormSchema {...params} />;

/** DynamicData类型渲染组件 */
const DynamicDataSchema = (props) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const curType = targetJsonSchema.type;
  const configJsonObj = targetJsonSchema.properties.config || {};
  const dataJsonObj = targetJsonSchema.properties.data || {};

  return (
    <TreeNode
      className={`${curType}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      indexRoute={indexRoute}
      jsonKey={jsonKey}
      title={getTreeNodeTitleCont({
        ...props,
      })}
    >
      <TreeNode
        className={'dataSource-type-item-schema schema-item-form'}
        id={`${nodeKey}-type`}
        key={`${nodeKey}-type`}
        indexRoute={indexRoute ? `${indexRoute}-0` : '0'}
        jsonKey={'type'}
        disabled={true}
        title={getTypeSelectCont({
          indexRoute: indexRoute ? `${indexRoute}-0` : '0',
          jsonKey: 'type',
          targetJsonSchema: targetJsonSchema.properties.type,
          parentType: curType,
          nodeKey: `${nodeKey}-type`,
        })}
      ></TreeNode>
      <TreeNode
        className={'dataSource-config-item-schema schema-item-form'}
        id={`${nodeKey}-config-${dataJsonObj.type}`}
        key={`${nodeKey}-config-${dataJsonObj.type}`}
        indexRoute={indexRoute ? `${indexRoute}-1` : '1'}
        jsonKey={'config'}
        disabled={true}
        title={getTreeNodeTitleCont({
          indexRoute: indexRoute ? `${indexRoute}-1` : '1',
          jsonKey: 'config',
          targetJsonSchema: configJsonObj,
          parentType: curType,
          nodeKey: `${nodeKey}-config-${configJsonObj.type}`,
          hideOperaBtn: true,
          keyIsFixed: true,
          typeIsFixed: true,
        })}
      ></TreeNode>
      <TreeNode
        className={'dataSource-data-item-schema schema-item-form'}
        id={`${nodeKey}-data-${dataJsonObj.type}`}
        key={`${nodeKey}-data-${dataJsonObj.type}`}
        indexRoute={indexRoute ? `${indexRoute}-2` : '2'}
        jsonKey={'data'}
        disabled={true}
        title={getTreeNodeTitleCont({
          indexRoute: indexRoute ? `${indexRoute}-2` : '2',
          jsonKey: 'data',
          targetJsonSchema: dataJsonObj,
          parentType: curType,
          nodeKey: `${nodeKey}-data-${dataJsonObj.type}`,
          hideOperaBtn: true,
          keyIsFixed: true,
          typeIsFixed: true,
        })}
      ></TreeNode>
    </TreeNode>
  );
};

export default DynamicDataSchema;
