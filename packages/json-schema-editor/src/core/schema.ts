/**
 * 通用 propsSchema 字段片段
 * 所有元素类型均包含这些高级配置字段
 */
export const COMMON_PROPS_SCHEMA_PROPERTIES = {
  description: {
    type: 'input',
    title: '字段描述',
    description: '字段描述内容将作为 Title 的补充信息提供给用户',
    placeholder: '请输入字段描述',
  },
  showKey: {
    type: 'boolean',
    title: '展示Key值',
    description: '开启后，在 JSONEditor 端会展示当前 Key 值，以便增加辨识度',
  },
  onShow: {
    type: 'input',
    title: '显隐表达式',
    description:
      '设置显隐表达式，例如 "dataType === 1" 表示当 dataType 为 1 时显示当前项',
    placeholder: '请输入显隐表达式',
  },
  titleStyle: {
    type: 'json',
    title: '标题样式',
    description: '可用于设置标题展示样式',
  },
};

export const COMMON_PROPS_SCHEMA_ORDER = Object.keys(
  COMMON_PROPS_SCHEMA_PROPERTIES,
);

/**
 * 带只读/必填/条件字段的通用可编辑属性
 */
export const EDITABLE_PROPS = {
  readOnly: {
    type: 'boolean',
    title: '是否只读',
    description: '当前属性设置为只读后，用户不能对其进行任何编辑操作',
  },
  isRequired: {
    type: 'boolean',
    title: '是否必填项',
    description:
      '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示',
  },
  isConditionProp: {
    type: 'boolean',
    title: '条件字段',
    description: '设置为条件字段后，其他字段可根据其数值变化进行实时联动',
  },
};

/**
 * 构建完整的 propsSchema（合并类型专属字段与通用字段）
 */
export function buildPropsSchema(
  typeSpecificProperties: Record<string, any> = {},
) {
  const typeSpecificOrder = Object.keys(typeSpecificProperties);

  return {
    type: 'object' as const,
    wrapWithPanel: false,
    properties: {
      ...typeSpecificProperties,
      ...COMMON_PROPS_SCHEMA_PROPERTIES,
    },
    propertyOrder: [...typeSpecificOrder, ...COMMON_PROPS_SCHEMA_ORDER],
  };
}
