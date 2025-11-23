import { BASE_TYPE, CONTAINER_TYPE } from '../data/TypeList';

/** 默认值（default）
 *  根据type判断是否显示默认配置项
 *  11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
 *  3种特殊类型组件（Json、CodeArea、htmlArea）
 * */
export function isNeedDefaultOption(curType: string) {
  const supportedTypeList = [...BASE_TYPE, 'json', 'codearea', 'htmlarea'];
  return supportedTypeList.indexOf(curType) > -1;
}

export function hasOptions(curType: string) {
  const supportedTypeList = ['select', 'radio'];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 输入提示（placeholder）
 *  根据 type 判断是否显示输入提示配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedPlaceholderOption(curType: string) {
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
export function isNeedConditionOption(curType: string) {
  const supportedTypeList = [
    'boolean',
    'input',
    'number',
    'color',
    'url',
    'radio',
    'select',
    'date',
    'date-time',
    'time',
    'input-image',
  ];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 是否支持只读配置（readOnly）
 *  根据format判断是否显示是否只读配置项
 *  input、number、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedReadOnlyOption(curType: string) {
  const supportedTypeList = [
    ...BASE_TYPE,
    'quantity',
    'text-editor',
    'json',
    'codearea',
    'htmlarea',
  ];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 是否必填（isRequired）
 *  根据format判断是否显示是否只读配置项
 *  input、 date、date-time、 time、 url、 textarea、Json、CodeArea、htmlArea合计9种类型组件支持
 * */
export function isNeedIsRequiredOption(curType: string) {
  const supportedTypeList = [
    ...BASE_TYPE,
    'quantity',
    'text-editor',
    'json',
    'codearea',
    'htmlarea',
  ];
  return supportedTypeList.indexOf(curType) > -1;
}

/** 用于显示控制 showCodeViewBtn
 * */
export function isNeedCodeViewOption(curType: string) {
  const supportedTypeList = [...CONTAINER_TYPE, 'array'];
  return supportedTypeList.indexOf(curType) > -1;
}
