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
  'cascader',
  'checkboxes',
  'date',
  'date-time',
  'time',
  'input-image',
];

// 固有容器类型
export const Fixed_CONTAINER_TYPE = [
  'datasource',
  'event',
  'dynamic-data',
  'api',
];

// 当前容器类型
export const CONTAINER_TYPE = ['object', ...Fixed_CONTAINER_TYPE];

/** 10种高级类型 */
export const HIGH_TYPE = [
  'quantity',
  'box-style',
  'padding-margin',
  'text-editor',
  'json',
  'codearea',
  'htmlarea',
  'array',
  ...CONTAINER_TYPE,
];

/** 所有类型，包含基础类型和高级类型 */
export const ALL_TYPE = [...BASE_TYPE, ...HIGH_TYPE];

// 对象类型可选项
export const OBJECT_TYPE = [
  'input',
  'number',
  'radio',
  'select',
  'cascader',
  'boolean',
  'color',
  'url',
  'textarea',
  'date',
  'date-time',
  'time',
  'input-image',
  'text-editor',
  'checkboxes',
  'object',
  'array',
  'box-style',
  'padding-margin',
  'api',
];

// 数组类型可用子项类型
export const ARRAY_ITEM_TYPE = [
  'object',
  'array',
  'input',
  'number',
  'select',
  'cascader',
  'color',
  'url',
  'date',
  'date-time',
  'time',
  'input-image',
];

// radio单选类型可选项
export const RADIO_TYPE = ['string'];

// select多选类型可选项
export const SELECT_TYPE = ['string'];

// 类型清单
export const TypeList = {
  object: ALL_TYPE,
  array: ARRAY_ITEM_TYPE,
  radio: RADIO_TYPE,
  select: SELECT_TYPE,
  all: ALL_TYPE,
};

// 类型说明
export const TypeInfoList = {
  input: '字符串/单行文本',
  boolean: 'Boolean/开关',
  number: 'Number数值',
  color: '颜色数值',
  url: 'URL数值',
  textarea: '多行文本',
  radio: '单选',
  select: '下拉选择/多选',
  cascader: '级联选择',
  checkboxes: '多选框',
  date: '日期',
  'date-time': '日期时间',
  time: '时间',
  'input-image': '图片上传',
  quantity: '数值单位设置',
  'box-style': '盒子模型/边距设置',
  'padding-margin': '边距设置',
  'text-editor': '富文本内容',
  json: 'json内容',
  codearea: 'code内容',
  htmlarea: 'html内容',
  object: '对象(Object)',
  array: '数组(Array)',
  datasource: '静态数据源(旧版)',
  event: '事件(旧版)',
  'dynamic-data': '动态数据源(旧版)',
  api: 'API 配置',
};
