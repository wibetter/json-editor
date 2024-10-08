/** 11种基础类型 */
const BASE_TYPE = [
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'radio',
  'single-select',
  'select',
  'date',
  'date-time',
  'time',
];

/** 10种高级类型（特殊类型） */
const HIGH_TYPE = [
  'quantity',
  'box-style',
  'text-editor',
  'json',
  'codearea',
  'htmlarea',
  'text-editor',
  'datasource',
  'dynamic-data',
  'event',
  'array',
  'object',
];

/** 所有类型，包含11种基础类型和8种高级类型（特殊类型） */
const ALL_TYPE = [...BASE_TYPE, ...HIGH_TYPE];

/** 字段描述配置项（description）
 *  根据format判断是否显示字段描述配置项
 *  11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
 *  10种特殊类型组件（Object、Array、Json、datasource、text-editor、dynamic-data、Event、CodeArea、htmlArea、quantity）
 * */
export function isNeedDescriptionOption(curType) {
  let isSupported = false;
  const supportedTypeList = ALL_TYPE;
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 默认值（default）
 *  根据format判断是否显示字段描述配置项
 *  11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
 *  3种特殊类型组件（Json、CodeArea、htmlArea）
 * */
export function isNeedDefaultOption(curType) {
  let isSupported = false;
  const supportedTypeList = [
    'input',
    'string',
    'boolean',
    'number',
    'color',
    'url',
    'textarea',
    'text-editor',
    'radio',
    'single-select',
    'select',
    'json',
    'codearea',
    'htmlarea',
  ];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 输入提示（placeholder）
 *  根据format判断是否显示输入提示配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedPlaceholderOption(curType) {
  let isSupported = false;
  const supportedTypeList = [
    'input',
    'url',
    'textarea',
    'text-editor',
    'date',
    'date-time',
    'time',
    'json',
    'codearea',
    'htmlarea',
  ];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 是否为条件字段（conditionProps）
 *  根据type判断是否显示是否只读配置项
 *  radio、boolean、number、string等类型的数值可以设置为条件字段
 * */
export function isNeedConditionOption(curType) {
  let isSupported = false;
  const supportedTypeList = [
    'boolean',
    'input',
    'number',
    'color',
    'url',
    'radio',
    'single-select',
    'date',
    'date-time',
    'time',
  ];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 是否只读（readOnly）
 *  根据format判断是否显示是否只读配置项
 *  input、number、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedReadOnlyOption(curType) {
  let isSupported = false;
  const supportedTypeList = [
    'input',
    'number',
    'url',
    'textarea',
    'text-editor',
    'date',
    'date-time',
    'time',
    'json',
    'codearea',
    'htmlarea',
  ];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 是否必填（isRequired）
 *  根据format判断是否显示是否只读配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedIsRequiredOption(curType) {
  let isSupported = false;
  /* const supportedTypeList = [
    'input',
    'url',
    'textarea',
    'date',
    'date-time',
    'time',
    'json',
    'codearea',
    'htmlarea',
  ]; */
  const supportedTypeList = [];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 设置最小值和最大值（minimum、maximum）
 *  根据format判断是否显示是否只读配置项
 *  目前仅Number种类型组件支持
 * */
export function isNeedMinMaxOption(curType) {
  let isSupported = false;
  const supportedTypeList = ['number'];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}

/** 设置最多可添加子项，最少应添加子项的数量（minimum-child、maximum-child）
 *  根据format判断是否显示是否只读配置项
 *  目前仅Array种类型组件支持
 * */
export function isNeedMinMaxChildOption(curType) {
  let isSupported = false;
  const supportedTypeList = ['array'];
  const supportedTypeListChar = `#${supportedTypeList.join('#')}#`;
  if (supportedTypeListChar.indexOf(`#${curType}#`) >= 0) {
    isSupported = true;
  }
  return isSupported;
}
