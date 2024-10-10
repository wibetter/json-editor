# json-utils
> 提供JSON相关的各类工具方法，比如schema转json、json转schema、json元数据分析等

> json: JSON(JavaScript Object Notation, JS对象简谱) 是一种轻量级的数据交换格式。

> schema: 一般用来描述JSON的数据格式，常用于json数据格式的校验。（[json schema官网](http://json-schema.org/learn/getting-started-step-by-step.html)）

## json工具集合 / json工具方法清单

### 8个通用的json工具方法
- getJsonDataByKeyRoute([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/getJsonDataByKeyRoute.md)): 根据key值路径获取对应的json数值对象（比如用于获取json数据中'data-user-name'对应的数据）
- getSchemaByIndexRoute([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/getSchemaByIndexRoute.md)): schema工具方法，根据index索引路径获取对应的schema数据对象（比如通过'2-1'获取schema中第3个子对象中的第2个字段对应的数据）
- getSchemaByKeyRoute: schema工具方法，根据key路径获取对应的schema数据对象（比如通过'style-padding'获取schema数据）
- indexRoute2keyRoute([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/indexRoute2keyRoute.md)): schema工具方法，根据index索引路径转换对应的key值路径
- keyRoute2indexRoute：schema工具方法，根据key值路径获取对应的index索引路径
- json2schema([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/json2schema.md)): 根据json数据内容生成对应的schema数据
- schema2json([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/schema2json.md)): 根据schema结构数据生成一份对应的json数据内容
- json2treeData([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/json2treeData.md)): 根据当前的json生成对应的treeData（供antd的TreeSelect等使用）
- metaElemAnalyzer([使用示例](https://github.com/wibetter/json-utils/blob/master/docs/metaElemAnalyzer.md)): 根据当前的json和对应的schema，统计当前json里面用到的各类元数据情况

### json数据内容相关的操作方法
- getParentKeyRoute: 获取父元素的key路径值
- getParentKeyRoute_CurKey: 获取父元素的key路径值和当前key

### schema相关的操作方法
- isSameParent: 判断是否是同一个父元素
- getParentIndexRoute: 获取父元素的路径值
- getNextIndexRoute: 获取下一个兄弟元素的路径值
- getParentIndexRoute_CurIndex: 获取父元素的路径值和当前index
- moveForward: 将当前路径值向前移动一位
- moveBackward: 将当前路径值向后移动一位
- getCurPosition: 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
- isStructuredSchema: 判断是否为结构化schema数据（一级schema为object类型，其所有二级schema为object类型）

### 纯工具方法
- objClone: js对象数据深拷贝，避免数据联动
- isEqual: 对比两个json数据是否相等
- hasProperties: 判断当前属性是否存在（数值为false、0、null也会判断为存在的属性）

### 数值类型判断
- isURL
- isString
- isNumber
- isBoolean
- isDateStr
- isDateTimeStr
- isTimeStr
- isArray
- isSelect
- isObject
- isQuantity
- isColor
- isFunction

### 业务相关的json工具方法
> 主要在JSON数据可视化组件中使用（[JSONSchema](https://github.com/wibetter/json-schema-editor)、[JSONEditor](https://github.com/wibetter/json-editor)）
- isNewSchemaData: 判断是否是最新版的schema数据
- oldSchemaToNewSchema: 旧版jsonSchema转新版jsonSchema
- schemaMetaList: 目前JSON数据可视化组件（JSONSchema、JSONEditor）提供的元数据类型清单
- dynamicDataAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的动态数据源情况
- isContainerSchema: 判断是否是容器类型元素，用于确认是否能添加子元素
- isEmptySchema: 判断是否为空的Schema

## 快速使用

```
npm install --save @wibetter/json-utils
```

```js
// 获取schema转json的方法
const { schema2json } = require('@wibetter/json-utils');
const jsonSchema = {
  ...
};
const curJsonData = {
  ...
}

const jsonData = schema2json(jsonSchema, curJsonData); // schema2json
``
