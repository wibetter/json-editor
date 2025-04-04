# json-schema-editor

> JSON数据可视化/JSONSchema，以表单的形式编辑 json schema，可用于在线设计组件的配置面板。

### 技术栈
React/Mobx/Ant Design

### 特点
1. 支持14种基础类型组件（input、boolean、 date、date-time、 time、 url、
 textarea、number、color、radio、 checkboxes、select、cascader、input-image）
2. 支持12个特殊类型组件（object、array、json、datasource、dynamic-data、event、
codearea、htmlarea、text-editor([使用说明](https://github.com/wibetter/json-editor/blob/master/docs/TextEditor.md))、quantity、box-style、padding-margin）
3. 支持拖拽排序
4. 支持删除、复制、高级配置等功能
5. 支持复杂嵌套
6. 支持通过表达式进行配置联动
7. 支持源码模式切换（开启源码模式后可以开启编辑模式）

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
| `typeList`   | object   | {}      | 非必填，用于设置func、style、data的子项可选类型    |
| `onChange`   | function | () => {}  | schemaData内容变动时会触发onChange |

