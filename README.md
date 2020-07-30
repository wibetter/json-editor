# JSONEditor

> JSON数据可视化/JSONEditor

## Install

```bash
npm install --save @jdwork/json-editor
```

## Usage

# JSONEditor

使用场景：提供可视化界面编辑json数据内容，用于区块的可视化配置，避免用户直接编辑json数据内容
技术栈：React/Mobx/ant-design
特点：弹性布局、提供大屏和小屏两种展示模式

## Usage

```
npm install @jdwork/json-editor
```

```js
import * as React from 'react';
import JSONEditor from '@jdwork/json-editor/dist/index.umd';
import '@jdwork/json-editor/dist/index.css';

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
| `wideScreen` | function | false   | 宽屏模式/小屏模式, 默认是小屏模式     |
| `schemaData` | object   | {}      | schema data: json的结构数据       |
| `jsonData`   | object   | {}      | json data: json的内容数据         |
| `onChange`   | function | null    | jsonData内容变动时会触发onChange   |
