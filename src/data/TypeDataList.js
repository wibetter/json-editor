import {
  initJSONSchemaData,
  initInputData,
  initArrayData,
  initBooleanData,
  initColorData,
  initDataSourceData,
  initDateData,
  initDateTimeData,
  initEventData,
  initEventDataTypeON,
  initJsonData,
  initCodeAreaData,
  initHtmlAreaData,
  initNumberData,
  initObjectData,
  initQuantityData,
  initRadioData,
  initSelectData,
  initTextareaData,
  initTimeData,
  initURLData,
} from '$data/index';

// 类型数据清单
export const TypeDataList = {
  jsonschema: initJSONSchemaData,
  input: initInputData,
  boolean: initBooleanData,
  object: initObjectData,
  array: initArrayData,
  url: initURLData,
  textarea: initTextareaData,
  color: initColorData,
  number: initNumberData,
  json: initJsonData,
  codearea: initCodeAreaData,
  htmlarea: initHtmlAreaData,
  date: initDateData,
  'date-time': initDateTimeData,
  time: initTimeData,
  quantity: initQuantityData,
  radio: initRadioData,
  select: initSelectData,
  datasource: initDataSourceData,
  event: initEventData,
};

// 事件类型数据
export const EventTypeDataList = {
  on: initEventDataTypeON,
  emit: initEventData,
};
