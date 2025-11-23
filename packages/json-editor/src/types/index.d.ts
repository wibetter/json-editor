// 全局类型声明

import * as React from 'react';

// JSON Schema 相关类型
export interface JSONSchema {
  type: string;
  title?: string;
  description?: string;
  properties: Record<string, any>;
  items?: any;
  default?: any;
  style?: Record<string, any>;
  titleStyle?: Record<string, any>;
  contentStyle?: Record<string, any>;
  readOnly?: boolean;
  showKey?: boolean;
  [key: string]: any;
}

// Store 类型
export interface SchemaStore {
  pageScreen?: string;
  [key: string]: any;
}

export interface JSONStore {
  getJSONDataByKeyRoute: (keyRoute: string) => any;
  updateFormValueData: (keyRoute: string, value: any) => void;
  keyRoute: string;
  jsonKey: string;
  nodeKey: string;
  onChange: (value: any) => void;
  JSONEditorObj: any;
  initJSONData: (jsonData: any) => void;
  initOnChange: (onChange: any) => void;
  setDynamicDataList: (dynamicDataList: any[]) => void;
  options: Record<string, any>;
  setOptions: (options: any) => void;
  [key: string]: any;
}

export interface StoresInterface {
  JSONSchemaStore: SchemaStore;
  JSONEditorStore: JSONStore;
}

// 组件通用 Props
export interface BaseRendererProps {
  parentType?: string;
  jsonKey?: string;
  indexRoute?: string | number;
  keyRoute: string;
  nodeKey?: string;
  targetJsonSchema: JSONSchema;
  schemaStore: SchemaStore;
  jsonStore: JSONStore;
  onChange?: (value: any) => void;
  [key: string]: any;
}

// MobX 类型声明已在 node_modules/mobx/lib/mobx.d.ts 中定义

declare module 'mobx-react' {
  export class Provider extends React.Component<any> {}
}

// lodash 和 antd 的类型声明已在 node_modules 中提供

// SVG 文件类型声明
declare module '$assets/img/*.svg' {
  const content: React.ComponentType<any>;
  export default content;
}

declare module '*.svg' {
  const content: React.ComponentType<any>;
  export default content;
}

// Window 接口扩展
declare global {
  interface Window {
    JSONEditorCustomRenderers?: Record<string, any>;
  }
}
