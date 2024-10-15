/** 11种基础类型 */
export const BASE_TYPE = [
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'radio',
  'select',
  'checkboxes',
  'date',
  'date-time',
  'time',
];

/** 10种高级类型 */
export const HIGH_TYPE = [
  'quantity',
  'box-style',
  'text-editor',
  'json',
  'codearea',
  'htmlarea',
  'datasource',
  'dynamic-data',
  'event',
  'array',
  'object',
];

/** 所有类型，包含基础类型和高级类型 */
export const ALL_TYPE = [...BASE_TYPE, ...HIGH_TYPE];

// 对象类型可选项
export const OBJECT_TYPE = [
  'input',
  'number',
  'radio',
  'select',
  'boolean',
  'color',
  'url',
  'textarea',
  'date',
  'date-time',
  'time',
  'text-editor',
  'checkboxes',
  'object',
  'array',
  'box-style',
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
