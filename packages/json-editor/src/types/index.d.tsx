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
  reset?: boolean;
  lastUpdateTime?: number;
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
