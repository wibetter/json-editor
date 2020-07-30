// 功能类型可选项
export const FUNCSCHEME_TYPE = [
  'input',
  'boolean',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'number',
  'radio',
  'select',
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
  'quantity',
  'htmlarea',
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
  'number',
  'radio',
  'select',
  'object',
  'array',
];
// 数组&对象类型可选项（仅用于Array的items子项）
export const ARRAY_OBJECT_TYPE = [
  'input',
  'boolean',
  'color',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'number',
  'radio',
  'select',
  'array',
];
// 数组类型可选项
export const ARRAY_TYPE = ['object'];
// 所有的字段类型
export const ALL_TYPE = [
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'radio',
  'select',
  'date',
  'date-time',
  'time',
  'quantity',
  'json',
  'codearea',
  'htmlarea',
  'datasource',
  'event',
  'array',
  'object',
];
// radio单选类型可选项
export const RADIO_TYPE = ['string'];
// select多选类型可选项
export const SELECT_TYPE = ['string'];
// 类型清单
export const TypeList = {
  func: FUNCSCHEME_TYPE,
  style: STYLESCHEME_TYPE,
  data: DATASCHEME_TYPE,
  object: OBJECT_TYPE,
  array: ARRAY_TYPE,
  'array-object': ARRAY_OBJECT_TYPE,
  radio: RADIO_TYPE,
  select: SELECT_TYPE,
  all: ALL_TYPE,
};
