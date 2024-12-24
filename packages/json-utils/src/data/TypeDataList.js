import {
  initJSONSchemaData,
  /* 12种基础类型 */
  initInputData,
  initBooleanData,
  initURLData,
  initDateData,
  initDateTimeData,
  initTimeData,
  initRadioData,
  initSelectData,
  initCheckboxSchema,
  initTextareaData,
  initTextEditorData,
  initNumberData,
  initColorData,
  initIMGData,
  initInputImageData,
  /* 9种特殊类型 */
  initQuantityData,
  initBoxStyleData,
  initJsonData,
  initCodeAreaData,
  initHtmlAreaData,
  initObjectData,
  EmptyObject,
  initArrayData,
  EmptyArray,
  initEventData,
  initEventDataTypeON,
  initDataSourceData,
  initDataSourceDataV2,
  initDynamicData,
  initDynamicConfig,
  initSohuSourceData,
  initSohuEventConfig,
} from '$data/index';

// 类型数据清单
export const TypeDataList = {
  jsonschema: initJSONSchemaData,
  input: initInputData,
  boolean: initBooleanData,
  object: initObjectData,
  array: initArrayData,
  'empty-array': EmptyArray,
  'empty-object': EmptyObject,
  url: initURLData,
  textarea: initTextareaData,
  color: initColorData,
  image: initIMGData,
  number: initNumberData,
  'input-image': initInputImageData,
  json: initJsonData,
  codearea: initCodeAreaData,
  htmlarea: initHtmlAreaData,
  'text-editor': initTextEditorData,
  date: initDateData,
  'date-time': initDateTimeData,
  time: initTimeData,
  quantity: initQuantityData,
  'box-style': initBoxStyleData,
  radio: initRadioData,
  select: initSelectData,
  checkboxes: initCheckboxSchema,
  'dynamic-data': initDynamicData,
  datasource: initDataSourceData,
  event: initEventData,
  'dynamic-config': initDynamicConfig,
  'sohu-source': initSohuSourceData,
  'sohu-event': initSohuEventConfig,
};

// 事件类型数据
export const EventTypeDataList = {
  on: initEventDataTypeON,
  emit: initEventData,
};

// 数据源类型
export const DataSourceTypeList = {
  local: initDataSourceData,
  remote: initDataSourceDataV2,
};
