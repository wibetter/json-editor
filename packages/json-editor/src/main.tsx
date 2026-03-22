import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootJSONStore from '$store/index';
import JSONDataEditor from '$components/JSONDataEditor/index';
import './main.scss';

import {
  registerRenderer,
  Renderer,
  unRegisterRenderer,
  loadRenderer,
} from '$core/factory';
import { AddJSONCustomRenderer, getJSONCustomRenderer } from '$core/register';
import withStore from '$core/withStore';

export {
  Renderer,
  registerRenderer,
  unRegisterRenderer,
  loadRenderer,
  AddJSONCustomRenderer,
  getJSONCustomRenderer,
  withStore,
};

interface JSONEditorProps {
  options?: {
    viewStyle?: string;
    wideScreen?: any;
    jsonView?: any;
    jsonViewReadOnly?: boolean;
    [key: string]: any;
  };
  onChange?: (data: any) => void;
  schemaData?: any;
  jsonData?: any;
  element?: any;
  /** 实例唯一标识，用于隔离多个 JSONEditor 实例的前端缓存。
   *  未设置时 editorKey 默认为 'json-editor'，
   *  设置后 editorKey 为 'json-editor-${editorKey}'。
   */
  editorKey?: string;
}

interface JSONEditorState {
  rootJSONStore: RootJSONStore;
}

/**
 * JSONEditor功能组件
 * @param props
 * @constructor
 */
export default class JSONEditor extends React.PureComponent<
  JSONEditorProps,
  JSONEditorState
> {
  constructor(props: JSONEditorProps) {
    super(props);
    this.state = {
      rootJSONStore: new RootJSONStore(), // 初始化一份rootJSONStore
    };
  }

  render() {
    const { element } = this.props;
    const { rootJSONStore } = this.state;

    const renderContent = (
      <Provider
        JSONSchemaStore={rootJSONStore.JSONSchemaStore}
        JSONEditorStore={rootJSONStore.JSONEditorStore}
      >
        {/* @ts-ignore */}
        <JSONDataEditor {...this.props} />
      </Provider>
    );

    if (element) {
      ReactDOM.render(renderContent, element); // 挂载到指定位置
      return '';
    }
    return renderContent; // 直接输出dom元素
  }
}
