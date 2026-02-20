import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import JSONStore from '$store/index';
import JSONSchema from '$components/JSONSchemaEditor/index';
import { BaseRendererProps } from '$types/index';
import { schemaRegistry } from '$core/index';
import type { SchemaDescriptor } from '$core/index';
// 导入内置 Schema
import '$plugins/index';

interface JSONSchemaEditorProps {
  wideScreen?: any;
  onChange?: (data: any) => void;
  data?: any;
  /** @deprecated v7.0.0 起已废弃，改由 JSONSchemaEditor.registerElement() 管理类型 */
  typeList?: any;
  element?: any;
  jsonView?: any;
  jsonViewReadOnly?: any;
}

interface JSONSchemaEditorState {
  schemaStore: any;
}

/**
 * JSONSchema功能组件
 * @param props
 * @constructor
 */
export default class JSONSchemaEditor extends React.PureComponent<
  JSONSchemaEditorProps,
  JSONSchemaEditorState
> {
  constructor(props: JSONSchemaEditorProps) {
    super(props);

    this.state = {
      schemaStore: new (JSONStore.schemaStore as any)(),
    };
  }

  /**
   * 注册自定义元素类型（全局注册，影响所有 JSONSchemaEditor 实例）
   */
  static registerElement(descriptor: SchemaDescriptor): void {
    schemaRegistry.register(descriptor);
  }

  /**
   * 批量注册自定义元素类型
   */
  static registerElements(descriptors: SchemaDescriptor[]): void {
    schemaRegistry.registerAll(descriptors);
  }

  /**
   * 获取元素注册表实例（用于高级自定义场景）
   */
  static getRegistry() {
    return schemaRegistry;
  }

  render() {
    const { element } = this.props;
    const { schemaStore } = this.state;

    const renderContent = (
      <Provider schemaStore={schemaStore}>
        <JSONSchema {...(this.props as BaseRendererProps)} />
      </Provider>
    );

    if (element) {
      ReactDOM.render(renderContent, element);
      return null;
    }
    return renderContent;
  }
}

export { schemaRegistry };
export type { SchemaDescriptor };
