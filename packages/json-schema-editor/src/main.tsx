import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import JSONStore from '$store/index';
import JSONSchema from '$components/JSONSchemaEditor/index';
import { BaseRendererProps } from '$types/index';
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

import { schemaRegistry, registerSchema, buildPropsSchema } from '$core/index';
import type { SchemaDescriptor } from '$core/index';
export { schemaRegistry, registerSchema, buildPropsSchema };
export type { SchemaDescriptor };
