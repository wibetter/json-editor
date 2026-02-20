# json-schema-editor 特殊属性说明
项目中的特殊属性可分为两类：**Schema 数据属性**（存在于 jsonSchema 结构体中）和**组件 Props 属性**（通过 React props 向下传递控制渲染行为）。

---

## 一、Schema 数据属性（存储在 jsonSchema 对象上）

### 1. `isFixed`

**定义位置：** `types/index.d.ts`、`components/BaseFormSchema/index.tsx`（注释说明）

**用途：**

- **标记当前 schema 节点为"固定元素"**，一旦设置，节点不可被拖拽、复制、删除
- 会派生出 `keyIsFixed`、`typeIsFixed`、`titleIsFixed` 均为 `true`，即 key/type/title 输入框全部禁用
- **典型使用场景**：在 `demo.tsx` 中，根级别的 `props`、`style`、`data`、`event` 四个一级节点都设置了 `isFixed: true`，表示这些是固定框架节点，用户不能随意删除
- 在 `ArraySchema` items 子节点上也会透传 `isFixed: true`（但同时设置 `typeIsFixed: false`，允许修改 items 的类型）

**相关代码：**

```tsx
// components/BaseFormSchema/index.tsx
// 1）isFixed 表示当前元素是固定元素，不可 复制、拖拽和删除等；

const isFixed = targetJsonSchema.isFixed || this.props.isFixed || false;

// 拖拽时拦截
if (curJsonObj.isFixed) {
  message.warning('当前元素不支持拖拽哦。');
}
if (curJsonObj.isFixed) return; // 固定类型元素不允许拖拽

// 操作区域：isFixed 时隐藏删除、复制、拖拽按钮
{!isFixed && (
  <CloseOutlined onClick={this.onDeleteBtnEvent} />
)}
{!isFixed && (
  <CopyOutlined onClick={this.onCopyBtnEvent} />
  <DragOutlined className="drag-btn" />
)}
```

---

### 2. `isRequired`

**定义位置：** `utils/advanced.config.ts`、`components/AdvanceConfig/index.tsx`

**用途：**

- 标记字段是否为**必填项**，存储在 schema 数据中
- 在高级配置面板（`AdvanceConfig`）中以开关（Switch）形式展示和编辑
- `DataSourceSchema` 的内置子字段（本地 json 数据 / 远程 json 数据）硬编码为 `isRequired: true`
- `isNeedIsRequiredOption(curType)` 函数控制哪些类型需要在高级配置中显示该配置项

**相关代码：**

```tsx
// utils/advanced.config.ts
/** 是否必填（isRequired）
 *  根据 format 判断是否显示是否只读配置项
 *  input、date、date-time、time、url、textarea、Json、CodeArea、htmlArea 合计9种类型组件支持
 * */
export function isNeedIsRequiredOption(curType: string) { ... }

// components/AdvanceConfig/index.tsx
<Switch
  defaultChecked={targetJsonSchema.isRequired ?? false}
  onChange={(checked) => {
    this.handleValueChange('isRequired', checked);
  }}
/>
```

---

### 3. `readOnly`

**定义位置：** `types/index.d.ts`、`components/AdvanceConfig/index.tsx`

**用途：**

- 标记字段在 **json-editor 消费端是否只读**（不可编辑），是给 json-editor 使用的属性
- 与 schema-editor 本身的可编辑性无关
- 在 `AdvanceConfig` 高级配置面板中以开关形式设置
- `BaseFormSchema` 读取了该值（`const readOnly = ...`），主要透传给下游 json-editor 使用

**相关代码：**

```tsx
// types/index.d.ts
export interface JSONSchema {
  readOnly?: boolean;
  // ...
}

// components/BaseFormSchema/index.tsx
// readOnly: 是否为固有的属性（不可编辑），用于控制 json-editor 端是否可编辑
const readOnly = this.props.readOnly || targetJsonSchema.readOnly || false;
```

---

### 4. `isContainer`（通过 `isContainerSchema` 工具函数判断）

**使用位置：** `components/BaseFormSchema/index.tsx`

**用途：**

- 存储在父级 schema 的 `isContainer` 字段上，标记**父节点是否为容器元素**
- 当父元素 `isContainer` 为 `false` 时，子元素的操作按钮（新增、复制、删除、拖拽）全部隐藏
- 注意：这里是读取父级的 `isContainer` 属性，由 `@wibetter/json-utils` 提供的 `isContainerSchema` 函数负责判断，本质是通过 type 判断（`object`/`array`/`func`/`style` 等容器类型）

**相关代码：**

```tsx
// components/BaseFormSchema/index.tsx
// 2）父元素 isContainer 为 false 时，则当前元素不支持 新增、复制、删除和拖拽等操作

const parentIsContainer =
  (parentSchemaObj && parentSchemaObj.isContainer) ?? true; // 判断父级元素是否为容器元素（默认均为容器元素）

const hideOperaBtn = this.props.hideOperaBtn || !parentIsContainer; // 是否隐藏操作类按钮
```

---

## 二、组件 Props 属性（通过渲染器向 `BaseFormSchema` 传递）

### 5. `isOnlyShowChild`

**传入位置：** `components/JSONSchemaEditor/index.tsx`

**使用位置：** `schemaRenderer/ObjectSchema/index.tsx`

**用途：**

- 专用于 `ObjectSchema` 组件，控制是否**只渲染该节点的子内容（properties），而跳过渲染节点自身的 TreeNode 包裹层**
- 使用场景：`JSONSchemaEditor` 的顶层根节点必须是 `object` 类型，但根节点自身不需要显示一行（外层 Tree 组件已经是容器），所以传入 `isOnlyShowChild: true`，只展示根 object 的所有子字段

**相关代码：**

```tsx
// components/JSONSchemaEditor/index.tsx
ObjectSchema({
  ...this.props,
  targetJsonSchema: jsonSchema,
  isOnlyShowChild: true, // 一级 object 类型不显示，仅显示其子项
})

// schemaRenderer/ObjectSchema/index.tsx
/** isOnlyShowChild 为 true 时只渲染节点的 properties 内容
 * 备注：JSONSchema 渲染组件中，已经显示了节点内容（Tree 根接口）
 * */
return isOnlyShowChild ? propertiesContElem : TreeNodeElem;
```

---

### 6. `isFirstSchema`

**传入位置：** `components/JSONSchemaEditor/index.tsx`

**用途：**

- 标记当前正在渲染的是**根级别 schema**（即 jsonSchema 本身，而非某个字段）
- 仅在 `curType !== 'object'` 的罕见情况下使用（根 schema 不是 object 时）
- 目前该属性只在 `MappingRender` 调用时传入，在各 Renderer 内部会通过 `...props` 继续透传，但**没有消费逻辑**——属于**预留/标记性属性**，用于未来扩展或调试识别第一层节点

**相关代码：**

```tsx
// components/JSONSchemaEditor/index.tsx
{curType !== 'object' &&
  MappingRender({
    ...this.props,
    nodeKey: 'first-schema',
    targetJsonSchema: jsonSchema,
    isFirstSchema: true,
  })}
```

---

### 7. `keyIsFixed` / `typeIsFixed` / `titleIsFixed`

**计算位置：** `components/BaseFormSchema/index.tsx`

**用途：**

三个属性分别对应 key 输入框、type 类型选择器、title 输入框的**禁用状态**：

- 默认情况下均由 `isFixed` 派生；可通过 props 单独覆盖，实现细粒度控制
- **`keyIsFixed`**：当父元素不是容器（`!parentIsContainer`）或 `isFixed` 为 `true` 时自动为 `true`
- **`typeIsFixed`**：由 `isFixed` 派生，可单独传入覆盖
- **`titleIsFixed`**：由 `isFixed` 派生，可单独传入覆盖

**典型场景：**

- `ArraySchema` 的 items 节点：设置 `isFixed: true`（禁用 key/title）但 `typeIsFixed: false`（允许修改 items 类型）
- `DataSourceSchema`、`EventSchema`、`ApiSchema` 等复合类型的内置子节点：均设置 `keyIsFixed: true`、`typeIsFixed: true`，防止用户修改内置结构

**相关代码：**

```tsx
// components/BaseFormSchema/index.tsx
const keyIsFixed =
  this.props.keyIsFixed !== undefined
    ? this.props.keyIsFixed
    : !parentIsContainer || isFixed; // key 是否为不可编辑的属性

const typeIsFixed =
  this.props.typeIsFixed !== undefined ? this.props.typeIsFixed : isFixed; // type 是否为不可编辑的属性

const titleIsFixed =
  this.props.titleIsFixed !== undefined ? this.props.titleIsFixed : isFixed; // title 是否为不可编辑的属性

// 渲染时分别控制三个输入控件
<Input disabled={keyIsFixed} ... />
<Select disabled={typeIsFixed} ... />
<Input disabled={titleIsFixed} ... />
```

---

### 8. `hideOperaBtn`

**计算位置：** `components/BaseFormSchema/index.tsx`

**用途：**

- 控制是否**隐藏整个操作区域**（删除、新增、复制、拖拽、排序按钮）
- 当父元素 `isContainer` 为 `false` 时自动生效；也可通过 props 直接传 `hideOperaBtn: true`
- 在 `DataSourceSchema`、`DynamicDataSchema`、`EventSchema`、`ApiSchema`、`QuantitySchema` 的内置固有子节点上均传入此属性，防止用户对内置节点进行增删操作

**相关代码：**

```tsx
// components/BaseFormSchema/index.tsx
const hideOperaBtn = this.props.hideOperaBtn || !parentIsContainer; // 是否隐藏操作类按钮

{!hideOperaBtn && (
  <>
    {!isFixed && <CloseOutlined ... />}
    <PlusOutlined ... />
    {isContainerElem && <SortAscendingOutlined ... />}
    {!isFixed && <CopyOutlined ... />}
    {!isFixed && <DragOutlined ... />}
  </>
)}
```

---

### 9. `showAdvanceBtn`

**计算位置：** `components/BaseFormSchema/index.tsx`

**用途：**

- 控制**高级配置（齿轮图标）按钮是否显示**，默认为 `true`（显示）
- 与 `hideOperaBtn` 相互独立：即使操作按钮区域被隐藏（`hideOperaBtn: true`），高级配置按钮仍可单独显示
- 目前仅在 `QuantitySchema` 的 unit 子节点上明确传入 `showAdvanceBtn: true`（隐藏操作按钮但保留高级配置能力）

**相关代码：**

```tsx
// components/BaseFormSchema/index.tsx
const showAdvanceBtn = this.props.showAdvanceBtn ?? true; // 用于单独控制高级配置按钮显隐（目前仅 QuantitySchema 需要）

{showAdvanceBtn && (
  <SettingOutlined onClick={() => { this.setState({ showAdvanceConfig: true }); }} />
)}

// schemaRenderer/QuantitySchema/index.tsx
getTreeNodeTitleCont({
  ...props,
  hideOperaBtn: true,
  showAdvanceBtn: true, // 隐藏操作按钮，但保留高级配置入口
  typeIsFixed: true,
})
```

---

## 三、总结对比

| 属性 | 类别 | 作用 | 典型场景 |
|------|------|------|----------|
| `isFixed` | Schema 数据属性 | 标记为固定节点，全面禁用复制/拖拽/删除及 key/type/title 编辑 | demo 中根级容器节点（props/style/data/event） |
| `isRequired` | Schema 数据属性 | 标记字段是否必填，供 json-editor 消费 | 高级配置面板开关配置 |
| `readOnly` | Schema 数据属性 | 标记字段在 json-editor 端是否只读 | 高级配置面板开关配置 |
| `isContainer` | Schema 数据属性 | 父节点是否为容器，影响子节点操作权限 | 由 type 自动判断，非手动设置 |
| `isOnlyShowChild` | 渲染器 Props | ObjectSchema 跳过自身，只渲染子节点列表 | 顶层根 object 节点不显示自身 |
| `isFirstSchema` | 渲染器 Props | 标记根级别 schema（非 object 时），预留属性 | 根节点非 object 时的特殊渲染入口 |
| `keyIsFixed` | 渲染器 Props | 禁用 key 输入框 | 内置结构子节点防止 key 被修改 |
| `typeIsFixed` | 渲染器 Props | 禁用 type 类型选择器 | 内置结构子节点，但 array items 除外 |
| `titleIsFixed` | 渲染器 Props | 禁用 title 输入框 | 由 `isFixed` 派生 |
| `hideOperaBtn` | 渲染器 Props | 隐藏所有操作按钮区域 | datasource/event/api 等复合类型内置子节点 |
| `showAdvanceBtn` | 渲染器 Props | 控制高级配置齿轮按钮的显示 | QuantitySchema 的 unit 子节点 |
