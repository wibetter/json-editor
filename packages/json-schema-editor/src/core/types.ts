import * as React from 'react';

/**
 * 元素高级配置的 JSON Schema（propsSchema）
 * 用于描述该元素在高级配置面板中可编辑的属性
 */
export interface PropsSchema {
  type: 'object';
  title?: string;
  properties: Record<string, any>;
  propertyOrder: string[];
}

/**
 * 元素描述文件（SchemaDescriptor）
 * 每种元素类型都有一个对应的描述文件，定义该元素的所有元数据
 */
export interface SchemaDescriptor {
  /** 元素类型标识（唯一），与 JSONSchema 中的 type 字段对应 */
  type: string;

  /** 元素显示名称（在类型选择下拉中展示） */
  label: string;

  /** 是否是容器类型（支持插入子元素） */
  isContainer: boolean;

  /**
   * 新建该类型时的初始 schema 数据
   */
  defaultSchema: Record<string, any>;

  /** 特殊属性：元素是否固定（不可复制/拖拽/删除） */
  isFixed?: boolean;

  /** 特殊属性：是否只读（不可编辑） */
  readOnly?: boolean;

  /** 特殊属性：只渲染子元素，不渲染自身（用于一级 object） */
  isOnlyShowChild?: boolean;

  /** 特殊属性：key 字段是否不可编辑 */
  keyIsFixed?: boolean;

  /** 特殊属性：type 字段是否不可编辑 */
  typeIsFixed?: boolean;

  /** 特殊属性：title 字段是否不可编辑 */
  titleIsFixed?: boolean;

  /** 特殊属性：是否隐藏操作按钮（增删复制拖拽） */
  hideOperaBtn?: boolean;

  /** 特殊属性：是否显示高级设置按钮（默认 true） */
  showAdvanceBtn?: boolean;

  /** 特殊属性：是否包装在面板中，当前仅 Object 对象类型元素有此属性 */
  wrapWithPanel?: boolean;

  /**
   * 高级配置的 JSON Schema（propsSchema）
   * 由 JSONEditor 根据此 schema 渲染高级配置面板
   * properties 中的 key 对应当前元素 schema 中的属性名
   */
  propsSchema: PropsSchema;

  /** 自定义渲染函数（可选，不提供则降级使用 GeneralSchema 兜底渲染） */
  renderer?: (props: any) => React.ReactNode;
}
