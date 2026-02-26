# JSONEditor功能组件

> JSON数据可视化/JSONEditor，可视化界面编辑json数据

### 使用场景
以表单的形式编辑 json 数据，可用于支持组件或页面可视化配置。

### 技术栈
React/Mobx/Ant Design

### 特点
1. 弹性布局，提供大屏和小屏两种展示模式
2. 支持字段联动
3. 支持14种基础类型组件（input、boolean、 date、date-time、 time、 url、
 textarea、number、color、radio、 checkboxes、select、cascader、input-image）
4. 支持12个特殊类型组件（object、array、json、datasource、dynamic-data、event、
codearea、htmlarea、text-editor([使用说明](https://github.com/wibetter/json-editor/blob/master/docs/TextEditor.md))、quantity、box-style、padding-margin）
5. 支持json转schema能力，当schemaData为空而jsonData不为空时，自动通过json转换一个对应的schemaData
6. 支持通过表达式设置数据联动（支持两种数据域：全局数据域、当前局部数据域）
7. 支持源码模式切换（开启源码模式后可以开启编辑模式）

***

## 安装

```bash
npm install --save @wibetter/json-editor
```


## 使用示例

```js
import * as React from 'react';
import JSONEditor from '@wibetter/json-editor';
import '@wibetter/json-editor/lib/index.css';

class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema: {},
      jsonData: {},
      options: {
        wideScreen: false,   // 宽屏/小屏模式
        viewStyle: 'fold',   // 展示风格：fold | tabs
        jsonView: false,     // 是否开启源码模式
        jsonViewReadOnly: true, // 源码模式是否只读
      },
    };
  }

  render() {
    const { jsonSchema, jsonData, options } = this.state;
    return (
      <>
        <div className="json-action-container">
          <div className="json-editor-box">
            <JSONEditor
              schemaData={jsonSchema}
              jsonData={jsonData}
              options={options}
              onChange={(newJsonData) => {
                this.setState({
                  jsonData: newJsonData
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

## JSONEditor 可配置参数

| name         | type     | default | desc                            |
| ------------ | -------- | ------- | ------------------------------- |
| `schemaData` | object   | {}      | 非必填，json的结构数据，备注：schemaData为空而jsonData不为空时，会自动通过jsonData生产一份对应的schemaData |
| `jsonData`   | object   | {}      | 必填项，json的内容数据                    |
| `options`    | object   | {}      | 非必填，配置项对象，详见下方 options 说明       |
| `onChange`   | function | () => {}    | jsonData内容变动时会触发onChange   |

## options 配置项说明

> 所有展示控制、行为配置均通过 `options` 统一传入。

| options 字段      | type    | default | desc                            |
| ----------------- | ------- | ------- | ------------------------------- |
| `viewStyle`       | string  | 'fold'  | 展示风格，`fold`：可折叠面板，`tabs`：选项卡切换面板 |
| `tabPosition`     | string  | 'center'| 标签栏位置，`viewStyle` 为 `tabs` 时有效，可选：`top`、`bottom`、`left`、`right`、`center` |
| `tabType`         | string  | 'line'  | 标签样式，`viewStyle` 为 `tabs` 时有效，可选：`line`、`card`、`editable-card` |
| `jsonView`        | boolean | false   | 是否开启全局源码模式，开启后展示 JSON 源码视图 |
| `jsonViewReadOnly`| boolean | true    | 源码模式下是否只读，`jsonView` 为 `true` 时有效 |
| `wideScreen`      | boolean | false   | 宽屏模式/小屏模式，默认是小屏模式 |
| `GlobalOptions`   | array   | []      | 全局默认选项，用于 select/radio/checkbox 等字段的默认备选项，格式：`[{ label?: string, value: string }]` |

## 自定义渲染器

JSONEditor 支持通过注册自定义渲染器来扩展字段类型，可以针对特定的 `type` 值渲染自定义表单组件。

### 注册方式

```js
import { registerRenderer } from '@wibetter/json-editor';

class MyCustomRenderer extends React.Component {
  render() {
    const { targetJsonSchema, jsonStore, keyRoute } = this.props;
    const currentValue = jsonStore.getJSONDataByKeyRoute(keyRoute);

    return (
      <div className="custom-field">
        <label>{targetJsonSchema.title}</label>
        <input
          value={currentValue ?? ''}
          onChange={(e) => {
            jsonStore.updateFormValueData(keyRoute, e.target.value);
          }}
        />
      </div>
    );
  }
}

// 注册json-editor自定义渲染器
registerRenderer({
  type: 'custom-config',
  component: MyCustomRenderer,
});
```

### 渲染器 Props 说明

自定义渲染器组件会接收以下 props：

| prop              | type   | desc                                      |
| ----------------- | ------ | ----------------------------------------- |
| `keyRoute`        | string | 当前字段在 JSON 数据中的路径，如 `style-color`   |
| `jsonKey`         | string | 当前字段的 key 值                           |
| `targetJsonSchema`| object | 当前字段的 schema 配置对象                  |
| `jsonStore`       | object | JSON 数据 store，提供数据读写方法             |
| `schemaStore`     | object | Schema 数据 store                          |
| `renderChild`     | func   | 渲染子字段的方法，用于嵌套结构场景            |
| `parentType`      | string | 父级字段的 type 值                          |

### 完整自定义渲染器示例

```js
import * as React from 'react';
import JSONEditor, { registerRenderer } from '@wibetter/json-editor';
import '@wibetter/json-editor/lib/index.css';

class ColorPickerRenderer extends React.Component {
  render() {
    const { targetJsonSchema, jsonStore, keyRoute } = this.props;
    const { title, description } = targetJsonSchema;
    const currentValue = jsonStore.getJSONDataByKeyRoute(keyRoute) ?? '#ffffff';

    return (
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
        <span style={{ marginRight: 8 }}>{title}</span>
        <input
          type="color"
          value={currentValue}
          title={description}
          onChange={(e) => {
            jsonStore.updateFormValueData(keyRoute, e.target.value);
          }}
        />
        <span style={{ marginLeft: 8 }}>{currentValue}</span>
      </div>
    );
  }
}

// 注册成json-editor配置项
registerRenderer({
  type: 'color-picker',
  component: ColorPickerRenderer
});


// 使用示例
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema: {
        type: 'object',
        properties: {
          style: {
            type: 'object',
            title: '外观设置',
            properties: {
              bgColor: {
                type: 'color-picker',  // 对应自定义渲染器的 type
                title: '背景颜色',
                default: '#ffffff',
              },
            },
            propertyOrder: ['bgColor'],
          },
        },
        propertyOrder: ['style'],
      },
      jsonData: {},
      options: {
        viewStyle: 'fold',
        wideScreen: true,
      },
    };
  }

  render() {
    const { jsonSchema, jsonData, options } = this.state;
    return (
      <JSONEditor
        schemaData={jsonSchema}
        jsonData={jsonData}
        options={options}
        onChange={(newJsonData) => {
          this.setState({ jsonData: newJsonData });
        }}
      />
    );
  }
}
```
