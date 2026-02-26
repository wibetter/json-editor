import * as React from 'react';
import { inject, observer } from 'mobx-react';
// @ts-ignore
import JSONEditor from '@wibetter/json-editor';
import { schemaRegistry } from '$core/index';

/**
 * 高级配置面板
 * 根据元素描述文件中的 propsSchema，由 JSONEditor 动态渲染配置表单
 */

interface AdvanceConfigProps {
  jsonKey?: string;
  indexRoute?: string;
  nodeKey?: string;
  targetJsonSchema?: any;
  schemaStore?: any;
}

class AdvanceConfig extends React.PureComponent<AdvanceConfigProps> {
  render() {
    const { indexRoute, jsonKey, targetJsonSchema } = this.props;
    const { editSchemaData } = this.props.schemaStore || {};
    const curType = targetJsonSchema?.type;

    if (!curType || !targetJsonSchema) {
      return <div className="advance-config-empty">暂无高级配置</div>;
    }

    const descriptor = schemaRegistry.get(curType);
    const propsSchema = descriptor?.propsSchema;

    if (
      !propsSchema ||
      Object.keys(propsSchema.properties || {}).length === 0
    ) {
      return <div className="advance-config-empty">当前类型暂无高级配置</div>;
    }

    return (
      <div className="advance-config-model">
        <JSONEditor
          wideScreen={true}
          schemaData={propsSchema}
          jsonData={targetJsonSchema}
          onChange={(newData: any) => {
            if (newData && editSchemaData) {
              // 过滤掉 lastUpdateTime 等内部字段，只保留 propsSchema 中定义的字段
              const filteredData: Record<string, any> = {};
              Object.keys(propsSchema.properties || {}).forEach((key) => {
                if (newData[key] !== undefined) {
                  filteredData[key] = newData[key];
                }
              });
              editSchemaData(indexRoute, jsonKey, filteredData);
            }
          }}
        />
      </div>
    );
  }
}

export default inject((stores: any) => ({
  schemaStore: stores.schemaStore,
}))(observer(AdvanceConfig));
