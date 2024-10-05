import React from 'react';
import { getCurrentFormat } from '@wibetter/json-utils';
import { hasProperties } from '../utils';
import ArraySchema from '$renderers/ArraySchemaV2/index';
import ObjectSchema from '$renderers/ObjectSchema/index';
import DataSourceSchema from '$renderers/DataSourceSchema/index';
import DynamicDataSchema from '$renderers/DynamicDataSchema/index';
import EventSchema from '$renderers/EventSchema/index';
import QuantitySchema from '$renderers/QuantitySchema/index';
import BoxStyleSchema from '$renderers/BoxStyleSchema/index';
import RadioSchema from '$renderers/RadioSchema/index';
import SelectSchema from '$renderers/SelectSchema/index';
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
import SingleSelectSchema from '$renderers/SingleSelectSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const {
    nodeKey,
    jsonKey,
    keyRoute,
    targetJsonSchema,
    getJSONDataByKeyRoute,
    keyRoute2indexRoute,
    updateFormValueData,
  } = props;
  const curType = getCurrentFormat(targetJsonSchema); // 获取当前元素类型（format）
  // 获取当前字段的条件规则
  let hiddenRule = {};
  if (targetJsonSchema.hiddenRule) {
    hiddenRule = targetJsonSchema.hiddenRule;
  }

  let curConditionValue = '';
  let curNodeKey = nodeKey;

  // 隐藏条件成立则直接返回
  if (hiddenRule.conditionProp && hasProperties(hiddenRule.conditionValue)) {
    const curConditionProp = hiddenRule.conditionProp;
    const needConditionValue = hiddenRule.conditionValue; // 条件字段成立的条件值
    const curConditionKeyRoute = curConditionProp.keyRoute; // 条件字段的key值

    // 获取条件字段的数值
    curConditionValue = getJSONDataByKeyRoute(curConditionKeyRoute);
    if (needConditionValue === curConditionValue) {
      if (targetJsonSchema.clearValueOnHidden) {
        // 删除掉隐藏的表单项数值
        updateFormValueData(keyRoute, undefined);
      }
      return;
    }
  }
  // 将条件字段的数值作为key的一部分
  curNodeKey = `${nodeKey}-${curConditionValue}`;
  props.nodeKey = curNodeKey;

  switch (curType) {
    case 'object':
    case 'func':
    case 'style':
    case 'data':
    case 'func-schema':
    case 'style-schema':
    case 'data-schema':
    case 'event-schema':
      return <ObjectSchema {...props} key={curNodeKey} />;
    case 'array':
      return <ArraySchema {...props} key={curNodeKey} />;
    case 'dynamic-data':
      return <DynamicDataSchema {...props} key={curNodeKey} />;
    case 'datasource':
      return <DataSourceSchema {...props} key={curNodeKey} />;
    case 'event':
      return <EventSchema {...props} key={curNodeKey} />;
    case 'quantity':
      return <QuantitySchema {...props} key={curNodeKey} />;
    case 'box-style':
      return <BoxStyleSchema {...props} key={curNodeKey} />;
    case 'radio':
      return <RadioSchema {...props} key={curNodeKey} />;
    case 'single-select':
      return <SingleSelectSchema {...props} key={curNodeKey} />;
    case 'select': // 多选
      return <SelectSchema {...props} key={curNodeKey} />;
    case 'input':
      return <InputFormSchema {...props} key={curNodeKey} />;
    case 'textarea':
      return <TextAreaFormSchema {...props} key={curNodeKey} />;
    case 'text-editor':
      return <TextEditorSchema {...props} key={curNodeKey} />;
    case 'number':
      return <NumberFormSchema {...props} key={curNodeKey} />;
    case 'boolean':
      return <BooleanFormSchema {...props} key={curNodeKey} />;
    case 'date':
    case 'date-time':
      return <DateTimeFormSchema {...props} key={curNodeKey} />;
    case 'time':
      return <TimeFormSchema {...props} key={curNodeKey} />;
    case 'url':
      return <URLFormSchema {...props} key={curNodeKey} />;
    case 'color':
      return <ColorFormSchema {...props} key={curNodeKey} />;
    case 'json':
      return <JsonFormSchema {...props} key={curNodeKey} />;
    case 'codearea':
      return <CodeAreaFormSchema {...props} key={curNodeKey} />;
    case 'htmlarea':
      return <HtmlAreaFormSchema {...props} key={curNodeKey} />;
    default:
      return <InputFormSchema {...props} key={curNodeKey} />;
  }
};

export default MappingRender;
