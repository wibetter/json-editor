import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import JSONStore from '$store/index';
import JSONSchema from '$components/JSONSchemaEditor/index';
import { BaseRendererProps } from '$types/index';

interface JSONSchemaEditorProps {
  wideScreen?: any;
  onChange?: (data: any) => void;
  data?: any;
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
      schemaStore: new (JSONStore.schemaStore as any)(), // 初始化一份schemaStore
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
      ReactDOM.render(renderContent, element); // 挂载到指定位置
      return null;
    }
    return renderContent; // 直接输出dom元素
  }
}
