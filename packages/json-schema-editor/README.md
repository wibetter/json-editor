# json-schema-editor

> JSON数据可视化/JSONSchema，以表单的形式编辑 json schema，可用于在线设计组件的配置面板。

### 技术栈
React/Mobx/Ant Design

### 特点
1. 支持14种基础类型组件（input、boolean、 date、date-time、 time、 url、
 textarea、number、color、radio、 checkboxes、select、cascader、input-image）
2. 支持8种特殊类型组件（object、array、json、codearea、htmlarea、text-editor([使用说明](https://github.com/wibetter/json-editor/blob/master/docs/TextEditor.md))、quantity、padding-margin）
3. 支持拖拽排序
4. 支持删除、复制、高级配置等功能
5. 支持无限嵌套
6. 支持通过表达式进行配置联动
7. 支持源码模式切换（开启源码模式后可以开启编辑模式）
8. 支持添加自定义 Schema

### 特别说明
JSONSchema仅用于生成结构化的json数据，需要配合JSONEditor（[git地址](https://github.com/wibetter/json-editor)）渲染其内容。


## 安装

```bash
npm install --save @wibetter/json-schema-editor
```

## 使用示例

```js
import * as React from 'react';
import JSONSchemaEditor from '@wibetter/json-schema-editor';
import '@wibetter/json-schema-editor/lib/index.css';

class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema: {},
    };
  }

  render() {
    const { jsonSchema } = this.state;
    return (
      <>
        <div className="json-action-container">
          <div className="json-schema-box">
             <JSONSchemaEditor
                data={jsonSchema}
                onChange={(newJsonSchema) => {
                  this.setState({
                    jsonSchema: newJsonSchema,
                  });
                }}
             />
          </div>
        </div>
      </>
    );
  }
}
```

## JSONSchema 可配置参数说明

| name         | type     | default | desc                            |
| ------------ | -------- | ------- | ------------------------------- |
| `data`       | object   | {}      | 必填项，json schema（带结构的json数据）    |
| `onChange`   | function | () => {}  | schemaData内容变动时会触发onChange |

## 自定义 Schema

从 v7.0.0 起，支持通过 `SchemaDescriptor` 描述文件注册自定义 Schema 类型。注册后，自定义类型会出现在类型选择下拉列表中，并在编辑区以自定义渲染器或通用渲染器呈现。

### SchemaDescriptor 字段说明

| 字段              | 类型                          | 必填 | 说明                                                 |
| ----------------- | ----------------------------- | ---- | ---------------------------------------------------- |
| `type`            | string                        | ✅   | 类型唯一标识，与 JSONSchema 中的 `type` 字段对应      |
| `label`           | string                        | ✅   | 在类型选择下拉中展示的名称                            |
| `isContainer`     | boolean                       | ✅   | 是否为容器类型（支持添加子元素）                      |
| `defaultSchema`   | object                        | ✅   | 新建该类型时的初始 schema 数据                        |
| `propsSchema`     | PropsSchema                   | ✅   | 高级配置面板的 schema，由 `buildPropsSchema` 构建     |
| `renderer`        | (props: any) => ReactNode     | ❌   | 自定义渲染函数，不提供则降级使用通用渲染器             |
| `isFixed`         | boolean                       | ❌   | 元素是否固定（不可复制/拖拽/删除）                    |
| `keyIsFixed`      | boolean                       | ❌   | key 字段是否不可编辑                                  |
| `typeIsFixed`     | boolean                       | ❌   | type 字段是否不可编辑                                 |
| `readOnly`        | boolean                       | ❌   | 是否只读（不可编辑）                                  |
| `hideOperaBtn`    | boolean                       | ❌   | 是否隐藏操作按钮（增删复制拖拽）                      |

### 注册自定义 Schema 示例

以下示例展示如何注册一个 `colorPicker`（颜色选择器）类型的自定义 Schema：

**第一步：创建描述文件 `colorPickerPlugin.ts`**

```ts
import JSONSchemaEditor, { registerSchema, buildPropsSchema } from '@wibetter/json-schema-editor';

// 定义 ColorPicker 类型描述文件
const colorPickerDescriptor = {
  type: 'color-picker',
  label: '颜色选择器',
  isContainer: false,

  // 新建该类型时的初始 schema
  defaultSchema: {
    type: 'color-picker',
    title: '颜色选择器'
  },

  // 高级配置面板的 schema（由 buildPropsSchema 构建，会自动合并通用配置项）
  propsSchema: buildPropsSchema(),
};

// 注册成 json-schema-editor 可用配置项
registerSchema(colorPickerDescriptor);
```

**第二步：在入口文件中引入插件（确保注册在 `JSONSchemaEditor` 渲染前执行）**

```js
import './sliderPlugin'; // 引入即触发注册
import JSONSchemaEditor from '@wibetter/json-schema-editor';
```

### 访问 schemaRegistry

可通过 `schemaRegistry` 查询已注册的所有 Schema 类型：

```ts
import JSONSchemaEditor, { schemaRegistry } from '@wibetter/json-schema-editor';

// 获取某个类型的描述文件
const colorPickerDescriptor = schemaRegistry.get('color-picker');

// 获取所有已注册类型
const allTypes = Array.from(schemaRegistry.keys());
```

