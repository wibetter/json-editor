# JSONEditor

> JSON数据可视化/JSONEditor, 可视化界面编辑json数据内容

## Install

```bash
npm install --save @wibetter/json-editor
```

## Usage

使用场景：提供可视化界面编辑json数据内容，避免用户直接编辑json数据内容

技术栈：React/Mobx/ant-design

特点：
1. 弹性布局
2. 提供大屏和小屏两种展示模式
3. 支持11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
4. 支持8个特殊类型组件（Object、Array、Json、datasource、Event、CodeArea、htmlArea、quantity）

## Usage

```
npm install @wibetter/json-editor
```

```js
import * as React from 'react';
import JSONEditor from '@wibetter/json-editor/dist/index.umd';
import '@wibetter/json-editor/dist/index.css';

class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema: {},
      jsonData: {},
      wideScreen: false,
    };
  }

  render() {
    const { jsonSchema, jsonData, wideScreen } = this.state;
    return (
      <>
        <div className="json-action-container">
          <div className="json-editor-box">
            <JSONEditor
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', newJsonData);
                this.setState({
                  jsonData: newJsonData,
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

## JSONEditor Props

| name         | type     | default | desc                            |
| ------------ | -------- | ------- | ------------------------------- |
| `jsonView`   | boolean  | false   | 是否开启全局源码模式，默认不开启      |
| `wideScreen` | boolean  | false   | 宽屏模式/小屏模式, 默认是小屏模式     |
| `schemaData` | object   | {}      | json的结构数据                    |
| `jsonData`   | object   | {}      | json的内容数据                    |
| `onChange`   | function | null    | jsonData内容变动时会触发onChange   |
