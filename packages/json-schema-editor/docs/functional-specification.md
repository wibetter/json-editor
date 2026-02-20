# JSONSchemaEditor 功能规格文档

> 版本：7.0.0  
> 更新时间：2026-02-25

---

## 一、概述

`JSONSchemaEditor`（`@wibetter/json-schema-editor`）是一款 JSON Schema 可视化设计工具，提供表单化界面让用户可视化地编辑 JSON Schema 结构，常用于在线设计低代码平台的组件配置面板。

### 1.1 功能定位

- 以树形结构展示 JSON Schema 的字段层级关系
- 支持字段的增删改、拖拽排序、复制等操作
- 支持切换字段类型（input、boolean、object、array 等）
- 支持字段高级配置（默认值、只读、必填、显隐表达式等）
- 提供插件机制，支持注册自定义元素类型

### 1.2 技术栈

- React 16.x + TypeScript
- MobX 6.x（状态管理）
- Ant Design 5.x（UI 组件）
- `@wibetter/json-editor`（高级配置面板渲染）
- `@wibetter/json-utils`（JSON Schema 工具函数）

---

## 二、架构设计

### 2.1 整体架构

```
packages/json-schema-editor/
├── src/
│   ├── main.tsx                    # 对外导出的组件入口（JSONSchemaEditor）
│   ├── plugins/                     # 插件机制
│   │   ├── types.ts                # SchemaDescriptor 接口定义
│   │   ├── registry.ts             # 元素注册表（SchemaRegistry）
│   │   └── schema/               # 内置元素描述文件
│   │       ├── input.ts            # input 元素描述
│   │       ├── boolean.ts          # boolean 元素描述
│   │       ├── number.ts           # number 元素描述
│   │       ├── color.ts            # color 元素描述
│   │       ├── url.ts              # url 元素描述
│   │       ├── textarea.ts         # textarea 元素描述
│   │       ├── textEditor.ts       # text-editor 元素描述
│   │       ├── json.ts             # json/codearea/htmlarea 元素描述
│   │       ├── date.ts             # date/date-time/time 元素描述
│   │       ├── inputImage.ts       # input-image 元素描述
│   │       ├── radio.ts            # radio 元素描述
│   │       ├── select.ts           # select 元素描述
│   │       ├── cascader.ts         # cascader 元素描述
│   │       ├── checkboxes.ts       # checkboxes 元素描述
│   │       ├── quantity.ts         # quantity 元素描述
│   │       ├── boxStyle.ts         # box-style 元素描述
│   │       ├── paddingMargin.ts    # padding-margin 元素描述
│   │       ├── object.ts           # object 元素描述
│   │       ├── array.ts            # array 元素描述
│   │       ├── datasource.ts       # datasource 元素描述
│   │       ├── event.ts            # event 元素描述
│   │       ├── dynamicData.ts      # dynamic-data 元素描述
│   │       ├── api.ts              # api 元素描述
│   │       └── index.ts            # 注册所有内置元素
│   ├── components/
│   │   ├── JSONSchemaEditor/       # 根渲染组件（含拖拽逻辑）
│   │   ├── BaseFormSchema/         # 通用工具栏（key/type/title 编辑 + 操作按钮）
│   │   ├── AdvanceConfig/          # 高级配置面板（由 JSONEditor 根据 propsSchema 渲染）
│   │   ├── EnumItemSchema/         # 枚举选项编辑组件
│   │   ├── OptionSchema/           # 选项编辑组件
│   │   ├── SelectFormSchema/       # 事件/数量类型的 select 内嵌组件
│   │   └── JsonView/               # JSON 源码视图组件
│   ├── schemaRenderer/
│   │   ├── MappingRender.ts        # 类型 → 渲染组件的映射表（支持插件覆盖）
│   │   ├── ObjectSchema/           # object 类型渲染
│   │   ├── ArraySchema/            # array 类型渲染
│   │   ├── GeneralSchema/          # 通用叶子节点渲染
│   │   ├── SelectSchema/           # select/radio/checkboxes 带选项渲染
│   │   ├── QuantitySchema/         # quantity/box-style 渲染
│   │   ├── EventSchema/            # event 类型渲染
│   │   ├── DataSourceSchema/       # datasource 类型渲染
│   │   ├── DynamicDataSchema/      # dynamic-data 类型渲染
│   │   └── ApiSchema/              # api 类型渲染
│   ├── store/
│   │   └── JSONSchemaStore.ts      # MobX Store（所有 schema 操作）
│   ├── data/
│   │   └── TypeList.ts             # 类型信息列表（TypeInfoList）
│   ├── types/
│   │   └── index.d.ts              # TypeScript 类型定义
│   └── utils/
│       └── index.ts                # 工具函数
└── docs/
    ├── functional-specification.md # 本文档（功能规格）
    └── special-props.md            # 特殊属性说明
```

### 2.2 数据流

```
外部传入 data (JSONSchema)
    ↓
JSONSchemaEditor.main.tsx
    ↓ 初始化 MobX Store
JSONSchemaStore.initJSONSchemaData()
    ↓ 存入 store.jsonSchema
MobX 响应式更新
    ↓
ObjectSchema → propertiesRender → MappingRender → 各类型渲染组件
    ↓
BaseFormSchema（工具栏）
    ↓ 用户操作（编辑key/type/title、增删复制等）
JSONSchemaStore.action（editSchemaData/changeType/addChildJson 等）
    ↓ jsonSchema 更新
store.onChange(newJSONSchema) → 外部 onChange 回调
```

---

## 三、插件机制

### 3.1 SchemaDescriptor（元素描述文件）

每种元素类型都有一个对应的描述文件，描述该元素的所有元数据：

```typescript
export interface SchemaDescriptor {
  /** 元素类型标识（唯一），与 JSONSchema 中的 type 字段对应 */
  type: string;

  /** 元素显示名称（在类型选择下拉中展示） */
  label: string;

  /** 是否是容器类型（支持插入子元素） */
  isContainer: boolean;

  /** 新建该类型时的初始 schema 数据 */
  defaultSchema: Record<string, any>;

  /**
   * 高级配置的 JSON Schema（propsSchema）
   * 由 JSONEditor 根据此 schema 渲染高级配置面板
   * properties 中的 key 对应当前元素 schema 中的属性名
   */
  propsSchema: {
    type: 'object';
    title?: string;
    properties: Record<string, any>;
    propertyOrder: string[];
  };

  /** 特殊属性：元素是否固定（不可复制/拖拽/删除） */
  isFixed?: boolean;

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

  /** 自定义渲染组件（可选，不提供则使用内置映射） */
  renderer?: React.ComponentType<any>;
}
```

### 3.2 SchemaRegistry（元素注册表）

```typescript
class SchemaRegistry {
  // 注册单个元素描述
  register(descriptor: SchemaDescriptor): void

  // 批量注册元素描述
  registerAll(descriptors: SchemaDescriptor[]): void

  // 根据 type 获取描述
  get(type: string): SchemaDescriptor | undefined

  // 获取所有已注册的类型名称列表
  getAllTypes(): string[]

  // 获取所有已注册的描述
  getAll(): SchemaDescriptor[]
}

// 全局单例
export const schemaRegistry: SchemaRegistry
```

### 3.3 注册自定义元素（插件使用方式）

```typescript
import JSONSchemaEditor from '@wibetter/json-schema-editor';
import { schemaRegistry } from '@wibetter/json-schema-editor';

// 方法一：通过实例 registerElement 静态方法注册
JSONSchemaEditor.registerElement({
  type: 'my-custom-type',
  label: '我的自定义类型',
  isContainer: false,
  defaultSchema: {
    type: 'my-custom-type',
    title: '自定义字段',
    default: '',
  },
  propsSchema: {
    type: 'object',
    title: '自定义类型高级配置',
    properties: {
      default: { type: 'input', title: '默认值' },
      description: { type: 'input', title: '字段描述' },
    },
    propertyOrder: ['default', 'description'],
  },
  renderer: MyCustomRenderer, // 可选，自定义渲染组件
});

// 方法二：直接使用 schemaRegistry
schemaRegistry.register({
  type: 'my-custom-type',
  label: '我的自定义类型',
  // ...
});
```

---

## 四、内置元素类型

### 4.1 基础类型（14 种）

| 类型 | 说明 | 是否容器 |
|------|------|---------|
| `input` | 字符串/单行文本 | 否 |
| `boolean` | Boolean/开关 | 否 |
| `number` | Number 数值 | 否 |
| `color` | 颜色数值 | 否 |
| `url` | URL 数值 | 否 |
| `textarea` | 多行文本 | 否 |
| `radio` | 单选 | 否 |
| `select` | 下拉选择/多选 | 否 |
| `cascader` | 级联选择 | 否 |
| `checkboxes` | 多选框 | 否 |
| `date` | 日期 | 否 |
| `date-time` | 日期时间 | 否 |
| `time` | 时间 | 否 |
| `input-image` | 图片上传 | 否 |

### 4.2 高级类型（10 种）

| 类型 | 说明 | 是否容器 |
|------|------|---------|
| `quantity` | 数值单位设置 | 是 |
| `box-style` | 盒子模型/边距设置 | 是 |
| `padding-margin` | 边距设置 | 是 |
| `text-editor` | 富文本内容 | 否 |
| `json` | JSON 内容 | 否 |
| `codearea` | 代码内容 | 否 |
| `htmlarea` | HTML 内容 | 否 |
| `array` | 数组(Array) | 是 |
| `object` | 对象(Object) | 是 |
| `api` | API 配置 | 是 |

### 4.3 特殊类型（3 种，旧版）

| 类型 | 说明 | 是否容器 |
|------|------|---------|
| `datasource` | 静态数据源 | 是 |
| `event` | 事件 | 是 |
| `dynamic-data` | 动态数据源 | 是 |

---

## 五、组件 Props 规格

### 5.1 JSONSchemaEditor（主入口组件）

```typescript
interface JSONSchemaEditorProps {
  /** 初始 JSONSchema 数据 */
  data?: any;

  /** schema 变更回调 */
  onChange?: (newSchema: any) => void;

  /** 是否使用源码模式（JSON 代码视图） */
  jsonView?: boolean;

  /** 源码模式下是否只读 */
  jsonViewReadOnly?: boolean;

  /** 挂载到指定 DOM 元素（可选，不提供则直接渲染） */
  element?: HTMLElement;
}
```

> **已移除**：`typeList` prop（v7.0.0 起移除，改由插件机制控制可用类型）

### 5.2 静态方法

```typescript
// 注册自定义元素类型（全局注册，影响所有 JSONSchemaEditor 实例）
JSONSchemaEditor.registerElement(descriptor: SchemaDescriptor): void
```

---

## 六、JSONSchemaStore 操作 API

| 方法名 | 说明 |
|--------|------|
| `initJSONSchemaData(data)` | 初始化 schema 数据 |
| `initOnChange(fn)` | 设置 onChange 回调 |
| `addChildJson(indexRoute)` | 在指定路径下新增子字段 |
| `addNextJsonData(indexRoute)` | 在指定路径后新增兄弟字段 |
| `deleteJsonByIndex(indexRoute)` | 删除指定路径的字段 |
| `deleteJsonByIndex_CurKey(indexRoute, key)` | 删除指定字段 |
| `insertJsonData(indexRoute, key, data, position)` | 插入字段数据 |
| `editJsonKey(indexRoute, newKey)` | 修改字段 key |
| `editSchemaData(indexRoute, key, newData)` | 更新字段 schema 属性 |
| `changeType(indexRoute, key, newTypeData, oldSchema)` | 切换字段类型 |
| `getSchemaByIndexRoute(indexRoute)` | 根据索引路径获取 schema |
| `isExitJsonKey(indexRoute, key)` | 判断 key 是否已存在 |
| `childElemSort(indexRoute)` | 对子元素进行自动排序 |

---

## 七、高级配置面板（AdvanceConfig）

### 7.1 工作原理

高级配置面板通过读取当前元素类型对应的 `propsSchema`，使用 `@wibetter/json-editor`（JSONEditor）动态渲染配置表单：

1. 从 `schemaRegistry` 获取当前 type 的 `SchemaDescriptor`
2. 读取 `descriptor.propsSchema`（描述高级配置字段的 JSON Schema）
3. 从当前元素的 `targetJsonSchema` 中提取对应属性值作为 `jsonData`
4. 以 `schemaData={propsSchema}` 和 `jsonData={extractedData}` 启动 JSONEditor
5. JSONEditor 的 `onChange` 回调触发 `schemaStore.editSchemaData()` 更新 schema

### 7.2 propsSchema 规范

propsSchema 是一个标准的 JSON Schema（`type: 'object'`），其 `properties` 中的每个 key 对应当前元素 schema 中的一个可配置属性。

**通用字段（所有类型均包含）：**

```json
{
  "description": { "type": "input", "title": "字段描述" },
  "showKey": { "type": "boolean", "title": "展示Key值" },
  "onShow": { "type": "input", "title": "显隐表达式" },
  "titleStyle": { "type": "json", "title": "标题样式" }
}
```

**类型专属字段示例（input）：**

```json
{
  "isConditionProp": { "type": "boolean", "title": "条件字段" },
  "readOnly": { "type": "boolean", "title": "是否只读" },
  "isRequired": { "type": "boolean", "title": "是否必填项" },
  "default": { "type": "input", "title": "默认值" },
  "placeholder": { "type": "input", "title": "输入提示" },
  "autoComplete": { "type": "boolean", "title": "开启可选项" },
  "options": { "type": "json", "title": "可选项", "onShow": "autoComplete === true" }
}
```

---

## 八、特殊属性说明

以下特殊属性既可以在 `SchemaDescriptor` 中定义（作为该类型元素的默认行为），也可以在具体的 schema 数据中设置（用于覆盖默认值）。

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `isFixed` | boolean | 元素固定，不可复制/拖拽/删除 |
| `isOnlyShowChild` | boolean | 仅渲染子元素，自身不显示 |
| `isContainer` | boolean | 是否是容器（支持新增子元素） |
| `keyIsFixed` | boolean | key 字段不可编辑 |
| `typeIsFixed` | boolean | 类型不可切换 |
| `titleIsFixed` | boolean | title 不可编辑 |
| `hideOperaBtn` | boolean | 隐藏增删复制拖拽等操作按钮 |
| `showAdvanceBtn` | boolean | 显示/隐藏高级设置按钮（默认 true） |
| `readOnly` | boolean | 在 JSONEditor 端只读（不可编辑） |
| `isConditionProp` | boolean | 标记为条件字段（供其他字段联动使用） |

---

## 九、嵌套规则

v7.0.0 起去除所有嵌套限制，支持以下场景：

- **Object 嵌套 Object**：支持无限层级
- **Object 嵌套 Array**：Array 内可嵌套 Object 或 Array
- **Array 嵌套 Array**：支持
- **任何容器类型可包含任意子类型**

> 注意：某些特殊类型（如 `event`、`datasource`、`api`）的内部结构是固定的，其子字段的 `isFixed=true`、`keyIsFixed=true`、`typeIsFixed=true`。

---

## 十、版本变更记录

### v7.0.0（2026-02-25）

**新增：**
- 插件机制：`SchemaDescriptor` 接口 + `SchemaRegistry` 注册表
- 每种元素类型都有独立的描述文件（在 `src/plugins/schema/` 目录下）
- 高级配置面板由 JSONEditor 根据 `propsSchema` 动态渲染
- `JSONSchemaEditor.registerElement()` 静态方法支持自定义类型注册

**变更：**
- 去除所有嵌套类型限制，支持无限层级嵌套
- `defaultSchema` 从 `@wibetter/json-utils` 迁移到各元素描述文件中维护
- 特殊属性（`isFixed`、`keyIsFixed` 等）从组件硬编码迁移到元素描述文件中维护

**移除：**
- `typeList` props（改由插件机制控制）
- `AdvanceConfig` 中的硬编码类型判断逻辑

### v6.0.x 及之前

详见 git 历史记录。
