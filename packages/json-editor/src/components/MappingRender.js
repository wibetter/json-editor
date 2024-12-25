import React from 'react';
import {
  expressionOn,
  getParentKeyRoute,
  isString,
  isBoolean,
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
  const { pageScreen } = props.schemaStore || {};
  const { getJSONDataByKeyRoute } = props.jsonStore || {};

  const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = props;

  const curType = targetJsonSchema.type;

  let curConditionValue = '';
  let curNodeKey = nodeKey;

  // 支持显隐属性表达式
  const parentKeyRoute = getParentKeyRoute(keyRoute);
  const curData = getJSONDataByKeyRoute(parentKeyRoute) || {}; // 获取当前父级数据域
  if (
    (isBoolean(targetJsonSchema.onShow) && !targetJsonSchema.onShow) ||
    (isString(targetJsonSchema.onShow) &&
      !expressionOn(targetJsonSchema.onShow, curData))
  ) {
    return;
  }

  // 收集当前为条件字段的子元素

  // 将条件字段的数值作为key的一部分
  curNodeKey = `${nodeKey}-${curConditionValue}`;
  const newProps = {
    ...props,
    nodeKey: curNodeKey,
  };

  switch (curType) {
    case 'object':
      return <ObjectSchema {...newProps} key={curNodeKey} />;
    case 'dynamic-config':
      return <DynamicConfigSchema {...newProps} key={curNodeKey} />;
    case 'sohu-source':
      return <SohuDataSourceSchema {...newProps} key={curNodeKey} />;
    case 'sohu-event':
      return <SohuEventSchema {...newProps} key={curNodeKey} />;
    case 'array':
      return <ArraySchema {...newProps} key={curNodeKey} />;
    case 'dynamic-data':
      return <DynamicDataSchema {...newProps} key={curNodeKey} />;
    case 'datasource':
      return <DataSourceSchema {...newProps} key={curNodeKey} />;
    case 'event':
      return <EventSchema {...newProps} key={curNodeKey} />;
    case 'quantity':
      return <QuantitySchema {...newProps} key={curNodeKey} />;
    case 'box-style':
      return <BoxStyleSchema {...newProps} key={curNodeKey} />;
    case 'radio':
      return <RadioSchema {...newProps} key={curNodeKey} />;
    case 'select':
      return <SelectSchema {...newProps} key={curNodeKey} />;
    case 'checkboxes': // 多选
      return <CheckboxSchema {...newProps} key={curNodeKey} />;
    case 'input':
      return <InputFormSchema {...newProps} key={curNodeKey} />;
    case 'textarea':
      return <TextAreaFormSchema {...newProps} key={curNodeKey} />;
    case 'text-editor':
      return <TextEditorSchema {...newProps} key={curNodeKey} />;
    case 'number':
      return <NumberFormSchema {...newProps} key={curNodeKey} />;
    case 'boolean':
      return <BooleanFormSchema {...newProps} key={curNodeKey} />;
    case 'date':
    case 'date-time':
      return <DateTimeFormSchema {...newProps} key={curNodeKey} />;
    case 'time':
      return <TimeFormSchema {...newProps} key={curNodeKey} />;
    case 'url':
      return <URLFormSchema {...newProps} key={curNodeKey} />;
    case 'color':
      return <ColorFormSchema {...newProps} key={curNodeKey} />;
    case 'input-image':
      return <InputImageSchema {...newProps} key={curNodeKey} />;
    case 'json':
      return <JsonFormSchema {...newProps} key={curNodeKey} />;
    case 'codearea':
      return <CodeAreaFormSchema {...newProps} key={curNodeKey} />;
    case 'htmlarea':
      return <HtmlAreaFormSchema {...newProps} key={curNodeKey} />;
    default:
      return <InputFormSchema {...newProps} key={curNodeKey} />;
  }
};

export default MappingRender;
