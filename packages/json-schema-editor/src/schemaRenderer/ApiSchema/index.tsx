import React from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;

import BaseFormSchema from '$components/BaseFormSchema/index';
import { BaseRendererProps } from '$types/index';

/** ApiSchema 类型渲染组件 */
const ApiSchema = (props: BaseRendererProps) => {
  const { jsonKey, indexRoute, nodeKey, targetJsonSchema } = props;
  const curType = targetJsonSchema.type;

  // Assuming properties: url, method, headers, data
  const urlSchema = targetJsonSchema.properties.url || {};
  const methodSchema = targetJsonSchema.properties.method || {};
  const headersSchema = targetJsonSchema.properties.headers || {};
  const dataSchema = targetJsonSchema.properties.data || {};

  return (
    <TreeNode
      className={`${curType}-schema schema-item-form`}
      id={nodeKey}
      key={nodeKey}
      // indexRoute={indexRoute}
      // jsonKey={jsonKey}
      title={<BaseFormSchema {...props} />}
    >
      <TreeNode
        className={'api-url-item-schema schema-item-form'}
        id={`${nodeKey}-url`}
        key={`${nodeKey}-url`}
        // indexRoute={indexRoute ? `${indexRoute}-0` : '0'}
        // jsonKey={'url'}
        title={
          <BaseFormSchema
            {...props}
            indexRoute={indexRoute ? `${indexRoute}-0` : '0'}
            jsonKey={'url'}
            targetJsonSchema={urlSchema}
            parentType={curType}
            nodeKey={`${nodeKey}-url`}
            hideOperaBtn={true}
            keyIsFixed={true}
            typeIsFixed={true}
          />
        }
      />
      <TreeNode
        className={'api-method-item-schema schema-item-form'}
        id={`${nodeKey}-method`}
        key={`${nodeKey}-method`}
        // indexRoute={indexRoute ? `${indexRoute}-1` : '1'}
        //jsonKey={'method'}
        title={
          <BaseFormSchema
            {...props}
            indexRoute={indexRoute ? `${indexRoute}-1` : '1'}
            jsonKey={'method'}
            targetJsonSchema={methodSchema}
            parentType={curType}
            nodeKey={`${nodeKey}-method`}
            hideOperaBtn={true}
            keyIsFixed={true}
            typeIsFixed={true}
          />
        }
      />
      <TreeNode
        className={'api-headers-item-schema schema-item-form'}
        id={`${nodeKey}-headers`}
        key={`${nodeKey}-headers`}
        // indexRoute={indexRoute ? `${indexRoute}-2` : '2'}
        // jsonKey={'headers'}
        title={
          <BaseFormSchema
            {...props}
            indexRoute={indexRoute ? `${indexRoute}-2` : '2'}
            jsonKey={'headers'}
            targetJsonSchema={headersSchema}
            parentType={curType}
            nodeKey={`${nodeKey}-headers`}
            hideOperaBtn={true}
            keyIsFixed={true}
            typeIsFixed={true}
          />
        }
      />
      <TreeNode
        className={'api-data-item-schema schema-item-form'}
        id={`${nodeKey}-data`}
        key={`${nodeKey}-data`}
        // indexRoute={indexRoute ? `${indexRoute}-3` : '3'}
        // jsonKey={'data'}
        title={
          <BaseFormSchema
            {...props}
            indexRoute={indexRoute ? `${indexRoute}-3` : '3'}
            jsonKey={'data'}
            targetJsonSchema={dataSchema}
            parentType={curType}
            nodeKey={`${nodeKey}-data`}
            hideOperaBtn={true}
            keyIsFixed={true}
            typeIsFixed={true}
          />
        }
      />
    </TreeNode>
  );
};

export default ApiSchema;
