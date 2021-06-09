# JSONEditor功能组件

> JSON数据可视化/JSONEditor，json可视化编辑能力的实现（以表单形式编辑json数据）

使用场景：提供可视化界面编辑json数据内容

技术栈：React/Mobx/Ant Design

特点：
1. 弹性布局，提供大屏和小屏两种展示模式
2. 支持字段联动
3. 支持12种基础类型组件（input、boolean、 date、date-time、 time、 url、
 textarea、number、color、radio、 select、single-select）
4. 支持11个特殊类型组件（object、array、json、datasource、dynamic-data、event、
codearea、htmlarea、text-editor([使用说明](https://github.com/wibetter/json-editor/blob/master/docs/TextEditor.md))、quantity、box-style）
5. 支持json转schema能力，当schemaData为空而jsonData不为空时，自动通过json转换一个对应的schemaData

在线Demo：
[点击访问在线Demo](https://wibetter.github.io/json-editor/demo1/index.html)

JSONEditor效果图：
![image](https://user-images.githubusercontent.com/11958920/104156633-7eedc680-5424-11eb-9972-2e8613bd5460.png)

***

## 安装

```bash
npm install --save @wibetter/json-editor
```


## 使用示例

```js
import * as React from 'react';
import JSONEditor from '@wibetter/json-editor';
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
| `viewStyle`  | string   | fold    | 非必填，默认为fold（可折叠面板），可选：tabs:（tabs切换面板）|
| `jsonView`   | boolean  | false   | 非必填，是否开启全局源码模式，默认不开启      |
| `wideScreen` | boolean  | false   | 非必填，宽屏模式/小屏模式, 默认是小屏模式     |
| `schemaData` | object   | {}      | 非必填，json的结构数据，备注：schemaData为空而jsonData不为空时，会自动通过jsonData生产一份应的schemaData                    |
| `jsonData`   | object   | {}      | 必填项，json的内容数据                    |
| `onChange`   | function | () => {}    | jsonData内容变动时会触发onChange   |
