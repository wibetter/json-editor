import React from 'react';
import { hasProperties } from '../utils';
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
  const {
    nodeKey,
    jsonKey,
    keyRoute,
    targetJsonSchema,
    getJSONDataByKeyRoute,
    keyRoute2indexRoute,
    updateFormValueData,
  } = props;
  const curType = targetJsonSchema.type;

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
