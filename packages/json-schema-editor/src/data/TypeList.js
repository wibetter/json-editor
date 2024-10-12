// 功能类型可选项
export const FUNCSCHEME_TYPE = [
  'input',
  'boolean',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'text-editor',
  'number',
  'radio',
  'select',
  'checkboxes',
  'codearea',
  'array',
  'object',
];
// 样式类型可选项
export const STYLESCHEME_TYPE = [
  'input',
  'boolean',
  'color',
  'url',
  'number',
  'radio',
  'select',
  'checkboxes',
  'quantity',
  'box-style', // 盒子模型样式：用于设置margin、padding类数值
  'htmlarea',
  'text-editor',
  'array',
  'object',
];
// 数据类型可选项
export const DATASCHEME_TYPE = [
  'input',
  'number',
  'json',
  'codearea',
  'htmlarea',
  'text-editor',
  'dynamic-data',
  'datasource',
  'event',
  'object',
  'array',
];
// 对象类型可选项
export const OBJECT_TYPE = [
  'input',
  'boolean',
  'color',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'text-editor',
  'number',
  'radio',
  'select',
  'checkboxes',
  'object',
  'array',
];

// 数组类型可用子项类型
export const ARRAY_TYPE = [
  'object',
  'input',
  'number',
  'color',
  'url',
  'date',
  'date-time',
  'time',
];

// 所有的字段类型
export const ALL_TYPE = [
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'text-editor',
  'radio',
  'select',
  'checkboxes',
  'date',
  'date-time',
  'time',
  'quantity',
  'json',
  'codearea',
  'htmlarea',
  'array',
  'object',
  'datasource',
  'dynamic-data',
  'event',
];
// radio单选类型可选项
export const RADIO_TYPE = ['string'];

// select多选类型可选项
export const SELECT_TYPE = ['string'];

// 类型清单
export const TypeList = {
  object: ALL_TYPE,
  array: ARRAY_TYPE,
  radio: RADIO_TYPE,
  select: RADIO_TYPE,
  select: SELECT_TYPE,
  all: ALL_TYPE,
};
