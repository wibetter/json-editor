// 全局类型声明

import * as React from 'react';

// JSON Schema 相关类型
export interface JSONSchema {
  type?: string;
  title?: string;
  description?: string;
  properties?: Record<string, any>;
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
  getJSONDataByKeyRoute?: (keyRoute: string) => any;
  updateFormValueData?: (keyRoute: string, value: any) => void;
  [key: string]: any;
}

// 组件通用 Props
export interface BaseRendererProps {
  parentType?: string;
  jsonKey?: string;
  indexRoute?: string;
  keyRoute?: string;
  nodeKey?: string;
  targetJsonSchema?: JSONSchema;
  schemaStore?: SchemaStore;
  jsonStore?: JSONStore;
  onChange?: (value: any) => void;
  [key: string]: any;
}

declare module 'mobx' {
  export function observable(target: any): any;
  export function computed(target: any): any;
  export function action(target: any): any;
  export function toJS(target: any): any;
  export class Provider extends React.Component<any> {}
}

declare module 'mobx-react' {
  export class Provider extends React.Component<any> {}
}

declare module 'lodash' {
  export = _;
  export as namespace _;
}

declare module 'antd' {
  export = Antd;
  export as namespace Antd;
}

