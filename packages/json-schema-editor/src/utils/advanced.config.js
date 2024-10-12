import { getExpectType } from '@wibetter/json-utils';
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
  'checkboxes',
  'date',
  'date-time',
  'time',
];

/** 10种高级类型 */
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

/** 所有类型，包含基础类型和高级类型 */
const ALL_TYPE = [...BASE_TYPE, ...HIGH_TYPE];

/** 默认值（default）
 *  根据type判断是否显示默认配置项
 *  11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
 *  3种特殊类型组件（Json、CodeArea、htmlArea）
 * */
export function isNeedDefaultOption(curType) {
  const supportedTypeList = [...BASE_TYPE, 'json', 'codearea', 'htmlarea'];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 输入提示（placeholder）
 *  根据format判断是否显示输入提示配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedPlaceholderOption(curType) {
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
  return supportedTypeList.indexOf(curType) > -1;
}

/** 是否支持配置成条件字段（conditionProps）
 *  根据type判断是否显示是否只读配置项
 *  radio、boolean、number、string等类型的数值可以设置为条件字段
 * */
export function isNeedConditionOption(curType) {
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
  return supportedTypeList.indexOf(curType) > -1;
}

/** 是否支持只读配置（readOnly）
 *  根据format判断是否显示是否只读配置项
 *  input、number、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedReadOnlyOption(curType) {
  const supportedTypeList = [
    ...BASE_TYPE,
    'quantity',
    'text-editor',
    'json',
    'codearea',
    'htmlarea',
    'text-editor',
  ];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 是否必填（isRequired）
 *  根据format判断是否显示是否只读配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedIsRequiredOption(curType) {
  const supportedTypeList = [
    ...BASE_TYPE,
    'quantity',
    'text-editor',
    'json',
    'codearea',
    'htmlarea',
    'text-editor',
  ];
  return supportedTypeList.indexOf(curType) > -1;
}
