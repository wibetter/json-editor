# JSONEditor

> JSON数据可视化/JSONEditor

## Install

```bash
npm install --save @jdwork/json-editor
```

## Usage

# json-editor

A json editor of high efficient and easy-to-use, base on React.

## Usage

```
npm install @jdwork/json-editor
```

```js
import { JSONEditor } from "@jdwork/json-editor";
import "@jdwork/json-editor/dist/index.css";

const Demo = () => {
  React.useEffect(() => {
    new JSONEditor({
      element: document.getElementById("container"),
      schemaData: schemaData,
      jsonData: jsonData,
      onChange: e => {
        console.log(e);
      },
      key: id
    });
  }, []);
  return <div id="container" />;
};
```

## JSONEditor Props

| name         | type     | default | desc                            |
| ------------ | -------- | ------- | ------------------------------- |
| `element`    | DOM      | null    | editor will render in this node |
| `onChange`   | function | null    | respond the json value change   |
| `schemaData` | object   | null    | schema data                     |
| `jsonData`   | object   | null    | json data                       |
| `key`        | string   | null    | editor‘s key used for re-render |
