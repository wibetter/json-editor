// 内置的期望类型值
const valExpectType: Record<string, string> = {
  array: 'array',
  boolean: 'boolean',
  'padding-margin': 'object',
  codearea: 'string',
  color: 'string',
  date: 'string',
  'date-time': 'string',
  'func-body': 'string',
  htmlarea: 'string',
  image: 'string',
  input: 'string',
  json: 'string',
  number: 'number',
  'input-image': 'string',
  object: 'object',
  quantity: 'string',
  radio: 'string',
  select: 'string',
  textarea: 'string',
  'text-editor': 'string',
  time: 'string',
  url: 'string',
  'box-style': 'object',
  datasource: 'object',
  'dynamic-data': 'object',
  event: 'object',
};

// 根据type获取对应元素的期望类型值
export function getExpectType(type: string) {
  return valExpectType[type] || type;
}

// 注册新的期望类型值
export function registerExpectType(type: string, valType: string) {
  if (valExpectType[type]) {
    console.warn(
      `当前已经存在${type}(${valExpectType[type]})，暂时不支持覆盖。`,
    );
    return;
  }
  valExpectType[type] = valType;
}
