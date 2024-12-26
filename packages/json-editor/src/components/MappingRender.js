import React from 'react';
import {
  expressionOn,
  getParentKeyRoute,
  isString,
  isBoolean,
  schema2conditionValue,
} from '@wibetter/json-utils';
// import {omit} from 'lodash';
import { hasProperties } from '$utils/index';
import ArraySchema from '$renderers/ArraySchema/index';
import ObjectSchema from '$renderers/ObjectSchema/index';
import DataSourceSchema from '$renderers/DataSourceSchema/index';
import DynamicDataSchema from '$renderers/DynamicDataSchema/index';
import EventSchema from '$renderers/EventSchema/index';
import QuantitySchema from '$renderers/QuantitySchema/index';
import BoxStyleSchema from '$renderers/BoxStyleSchema/index';
import RadioSchema from '$renderers/RadioSchema/index';
import CheckboxSchema from '$renderers/CheckboxSchema/index';
import InputFormSchema from '$renderers/InputFormSchema/index';
import TextAreaFormSchema from '$renderers/TextAreaFormSchema/index';
import TextEditorSchema from '$renderers/TextEditorSchema/index';
import NumberFormSchema from '$renderers/NumberFormSchema/index';
import BooleanFormSchema from '$renderers/BooleanFormSchema/index';
import DateTimeFormSchema from '$renderers/DateTimeFormSchema/index';
import TimeFormSchema from '$renderers/TimeFormSchema/index';
import URLFormSchema from '$renderers/URLFormSchema/index';
import ColorFormSchema from '$renderers/ColorFormSchemaV3/index';
import JsonFormSchema from '$renderers/JsonFormSchema/index';
import CodeAreaFormSchema from '$renderers/CodeAreaFormSchema/index';
import HtmlAreaFormSchema from '$renderers/HtmlAreaFormSchema/index';
import SelectSchema from '$renderers/SelectSchema/index';
import InputImageSchema from '$renderers/InputImageSchema/index';
import DynamicConfigSchema from '$renderers/DynamicConfigSchema/index';
import SohuDataSourceSchema from '$renderers/SohuDataSourceSchema/index';
import SohuEventSchema from '$renderers/SohuEventSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { getSchemaByKeyRoute } = props.schemaStore || {};
  const { getJSONDataByKeyRoute } = props.jsonStore || {};
  const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = props;

  const curType = targetJsonSchema.type;
  let curNodeKey = nodeKey;

  // 支持显隐属性表达式
  const parentKeyRoute = getParentKeyRoute(keyRoute);
  const parentData = getJSONDataByKeyRoute(parentKeyRoute) || {}; // 获取当前父级数据域
  if (
    (isBoolean(targetJsonSchema.onShow) && !targetJsonSchema.onShow) ||
    (isString(targetJsonSchema.onShow) &&
      !expressionOn(targetJsonSchema.onShow, parentData))
  ) {
    return;
  }

  // 收集当前所有条件子字段
  /*
  const curData = getJSONDataByKeyRoute(keyRoute) || {};
  const curConditionValue = schema2conditionValue(targetJsonSchema, curData);
  // 将条件字段的数值作为key的一部分
  if (curConditionValue) {
    curNodeKey = `${nodeKey}-${curConditionValue}`;
  }
  */

  const newProps = {
    ...props,
    nodeKey: curNodeKey,
  };

  switch (curType) {
    case 'object':
      return <ObjectSchema {...newProps} />;
    case 'dynamic-config':
      return <DynamicConfigSchema {...newProps} />;
    case 'sohu-source':
      return <SohuDataSourceSchema {...newProps} />;
    case 'sohu-event':
      return <SohuEventSchema {...newProps} />;
    case 'array':
      return <ArraySchema {...newProps} />;
    case 'dynamic-data':
      return <DynamicDataSchema {...newProps} />;
    case 'datasource':
      return <DataSourceSchema {...newProps} />;
    case 'event':
      return <EventSchema {...newProps} />;
    case 'quantity':
      return <QuantitySchema {...newProps} />;
    case 'box-style':
      return <BoxStyleSchema {...newProps} />;
    case 'radio':
      return <RadioSchema {...newProps} />;
    case 'select':
      return <SelectSchema {...newProps} />;
    case 'checkboxes': // 多选
      return <CheckboxSchema {...newProps} />;
    case 'input':
      return <InputFormSchema {...newProps} />;
    case 'textarea':
      return <TextAreaFormSchema {...newProps} />;
    case 'text-editor':
      return <TextEditorSchema {...newProps} />;
    case 'number':
      return <NumberFormSchema {...newProps} />;
    case 'boolean':
      return <BooleanFormSchema {...newProps} />;
    case 'date':
    case 'date-time':
      return <DateTimeFormSchema {...newProps} />;
    case 'time':
      return <TimeFormSchema {...newProps} />;
    case 'url':
      return <URLFormSchema {...newProps} />;
    case 'color':
      return <ColorFormSchema {...newProps} />;
    case 'input-image':
      return <InputImageSchema {...newProps} />;
    case 'json':
      return <JsonFormSchema {...newProps} />;
    case 'codearea':
      return <CodeAreaFormSchema {...newProps} />;
    case 'htmlarea':
      return <HtmlAreaFormSchema {...newProps} />;
    default:
      return <InputFormSchema {...newProps} />;
  }
};

export default MappingRender;
