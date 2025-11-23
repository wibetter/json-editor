import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;

import BaseFormSchema from '$components/BaseFormSchema/index';
import SelectFormSchema from '$components/SelectFormSchema/index';
import { BaseRendererProps } from '$types/index';

/** 渲染当前字段的表单项（Tree的单项内容） */
const getTreeNodeTitleCont = (params: BaseRendererProps) => (
  <BaseFormSchema {...params} />
);

// 选择不同的数据源类型，则展示不同的data内容(均为不可编辑状态)
const typeSelectData = {
  local: {
    type: 'json',
    title: '本地json数据',
    default: '{}', // 默认值
    placeholder: '请输入静态json数据', // 输入提示
    isRequired: true,
    description: '用于设置本地的静态json数据',
  },
  remote: {
    type: 'url',
    title: '远程json数据',
    default: 'http://xxx', // 默认值
    placeholder: '请输入远程json数据源地址', // 输入提示
    isRequired: true,
    description: '用于设置获取元素数据的请求地址',
  },
};

/** 渲染dataSelect在的内容 */
const getTypeSelectCont = (params: BaseRendererProps) => (
  <SelectFormSchema {...params} />
);

/** DataSource类型渲染组件 */
const DataSourceSchema = (props: BaseRendererProps) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const curType = targetJsonSchema.type;
  const dataJsonObj = targetJsonSchema.properties.data || {};

  return (
    <TreeNode
      className={`${curType}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      // indexRoute={indexRoute}
      // jsonKey={jsonKey}
      title={getTreeNodeTitleCont({
        ...props,
      })}
    >
      <TreeNode
        className={'dataSource-type-item-schema schema-item-form'}
        id={`${nodeKey}-type`}
        key={`${nodeKey}-type`}
        // indexRoute={indexRoute ? `${indexRoute}-0` : '0'}
        // jsonKey={'type'}
        disabled={true}
        title={getTypeSelectCont({
          ...props,
          indexRoute: indexRoute ? `${indexRoute}-0` : '0',
          jsonKey: 'type',
          targetJsonSchema: targetJsonSchema.properties.type,
          parentType: curType,
          nodeKey: `${nodeKey}-type`,
          typeSelectData,
        })}
      ></TreeNode>
      <TreeNode
        className={'dataSource-data-item-schema schema-item-form'}
        id={`${nodeKey}-data-${dataJsonObj.type}`}
        key={`${nodeKey}-data-${dataJsonObj.type}`}
        // indexRoute={indexRoute ? `${indexRoute}-1` : '1'}
        // jsonKey={'data'}
        disabled={true}
        title={getTreeNodeTitleCont({
          ...props,
          indexRoute: indexRoute ? `${indexRoute}-1` : '1',
          jsonKey: 'data',
          targetJsonSchema: dataJsonObj,
          parentType: curType,
          nodeKey: `${nodeKey}-data-${dataJsonObj.type}`,
          hideOperaBtn: true,
          keyIsFixed: true,
          typeIsFixed: true,
        })}
      ></TreeNode>
      <TreeNode
        className={'dataSource-filter-item-schema schema-item-form'}
        id={`${nodeKey}-filter`}
        key={`${nodeKey}-filter`}
        // indexRoute={indexRoute ? `${indexRoute}-2` : '2'}
        // jsonKey={'filter'}
        disabled={true}
        title={getTreeNodeTitleCont({
          ...props,
          indexRoute: indexRoute ? `${indexRoute}-2` : '2',
          jsonKey: 'filter',
          targetJsonSchema: targetJsonSchema.properties.filter,
          parentType: curType,
          nodeKey: `${nodeKey}-filter`,
          hideOperaBtn: true,
          keyIsFixed: true,
          typeIsFixed: true,
        })}
      ></TreeNode>
    </TreeNode>
  );
};

export default DataSourceSchema;
