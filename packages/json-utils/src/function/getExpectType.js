// 内置的期望类型值
const valExpectType = {
  array: 'array',
  boolean: 'boolean',
  'box-style': 'object',
  codearea: 'string',
  color: 'string',
  datasource: 'object',
  date: 'string',
  'date-time': 'string',
  'dynamic-data': 'object',
  event: 'object',
  'func-body': 'string',
  htmlarea: 'string',
  image: 'string',
  input: 'string',
  json: 'string',
  number: 'number',
  'input-image': 'string',
  object: 'object',
  quantity: 'object',
  radio: 'string',
  select: 'array',
  select: 'string',
  textarea: 'string',
  'text-editor': 'string',
  time: 'string',
  url: 'string',
  'dynamic-config': 'object',
  'sohu-source': 'object',
  'sohu-event': 'object',
};

// 根据type获取对应元素的期望类型值
export function getExpectType(type) {
  return valExpectType[type] || type;
}

// 注册新的期望类型值
export function registerExpectType(type, valType) {
  if (valExpectType[type]) {
    console.warn(
      `当前已经存在${type}(${valExpectType[type]})，暂时不支持覆盖。`,
    );
    return;
  }
  valExpectType[type] = valType;
}
