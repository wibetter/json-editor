import React from 'react';
import { getCurrentFormat } from '@wibetter/json-utils';
import { exitPropertie } from '../utils';
import ArraySchema from '$components/ArraySchemaV2/index'; // 使用新版ArraySchema
import ObjectSchema from '$components/ObjectSchema/index';
import DataSourceSchema from '$components/DataSourceSchema/index';
import DynamicDataSchema from '$components/DynamicDataSchema/index';
import EventSchema from '$components/EventSchema/index';
import QuantitySchema from '$components/QuantitySchema/index';
import BoxStyleSchema from '$components/BoxStyleSchema/index';
import RadioSchema from '$components/RadioSchema/index';
import SelectSchema from '$components/SelectSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import TextAreaFormSchema from '$components/TextAreaFormSchema/index';
import TextEditorSchema from '$components/TextEditorSchema/index';
import NumberFormSchema from '$components/NumberFormSchema/index';
import BooleanFormSchema from '$components/BooleanFormSchema/index';
import DateTimeFormSchema from '$components/DateTimeFormSchema/index';
import TimeFormSchema from '$components/TimeFormSchema/index';
import URLFormSchema from '$components/URLFormSchema/index';
import ColorFormSchema from '$components/ColorFormSchema/index';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import HtmlAreaFormSchema from '$components/HtmlAreaFormSchema/index';
import SingleSelectSchema from '$components/SingleSelectSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const {
    nodeKey,
    jsonKey,
    targetJsonSchema,
    getJSONDataByKeyRoute,
    keyRoute2indexRoute,
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
  if (hiddenRule.conditionProp && exitPropertie(hiddenRule.conditionValue)) {
    const curConditionProp = hiddenRule.conditionProp;
    const needConditionValue = hiddenRule.conditionValue; // 条件字段成立的条件值
    const keyRoute = curConditionProp.keyRoute; // 条件字段的key值

    // 获取条件字段的数值
    curConditionValue = getJSONDataByKeyRoute(keyRoute);
    if (needConditionValue === curConditionValue) {
      return '';
    } else if (
      targetJsonSchema.elemIndexRoute &&
      targetJsonSchema.propIndexRoute
    ) {
      // 判断是否是widgetSchema
      // 兼容widgetSchema的xx__1x1_1x1格式Key值（组件模型-全局配置）
      const keyRouteArr = keyRoute.split('-');
      const conditionLastKey = keyRouteArr.pop();
      let lastKeyRoute = `${conditionLastKey}__${targetJsonSchema.elemIndexRoute.replaceAll(
        '-',
        'x',
      )}`;
      const conditionParentKeyRoute = keyRouteArr.join('-');
      if (conditionParentKeyRoute) {
        // 先获取条件字段父级对象数值
        const conditionParentMockData = getJSONDataByKeyRoute(
          conditionParentKeyRoute,
        );
        // 获取条件字段最后一个key值
        const conditionParentKeys = Object.keys(conditionParentMockData);
        lastKeyRoute = conditionParentKeys.find((keyItem) => {
          return keyItem.indexOf(lastKeyRoute) > -1;
        });
        // 获取条件字段的数值
        curConditionValue = conditionParentMockData[lastKeyRoute];
        if (needConditionValue === curConditionValue) {
          return '';
        }
      }
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
    case 'widgets':
    case 'func-schema':
    case 'style-schema':
    case 'data-schema':
    case 'widgets-schema':
    case 'event-schema':
      return <ObjectSchema {...props} key={curNodeKey} />;
      break;
    case 'array':
      return <ArraySchema {...props} key={curNodeKey} />;
      break;
    case 'dynamic-data':
      return <DynamicDataSchema {...props} key={curNodeKey} />;
      break;
    case 'datasource':
      return <DataSourceSchema {...props} key={curNodeKey} />;
      break;
    case 'event':
      return <EventSchema {...props} key={curNodeKey} />;
      break;
    case 'quantity':
      return <QuantitySchema {...props} key={curNodeKey} />;
      break;
    case 'box-style':
      return <BoxStyleSchema {...props} key={curNodeKey} />;
      break;
    case 'radio':
      return <RadioSchema {...props} key={curNodeKey} />;
      break;
    case 'single-select':
      return <SingleSelectSchema {...props} key={curNodeKey} />;
      break;
    case 'select': // 多选
      return <SelectSchema {...props} key={curNodeKey} />;
      break;
    case 'input':
      return <InputFormSchema {...props} key={curNodeKey} />;
      break;
    case 'textarea':
      return <TextAreaFormSchema {...props} key={curNodeKey} />;
      break;
    case 'text-editor':
      return <TextEditorSchema {...props} key={curNodeKey} />;
      break;
    case 'number':
      return <NumberFormSchema {...props} key={curNodeKey} />;
      break;
    case 'boolean':
      return <BooleanFormSchema {...props} key={curNodeKey} />;
      break;
    case 'date':
    case 'date-time':
      return <DateTimeFormSchema {...props} key={curNodeKey} />;
      break;
    case 'time':
      return <TimeFormSchema {...props} key={curNodeKey} />;
      break;
    case 'url':
      return <URLFormSchema {...props} key={curNodeKey} />;
      break;
    case 'color':
      return <ColorFormSchema {...props} key={curNodeKey} />;
      break;
    case 'json':
      return <JsonFormSchema {...props} key={curNodeKey} />;
      break;
    case 'codearea':
      return <CodeAreaFormSchema {...props} key={curNodeKey} />;
      break;
    case 'htmlarea':
      return <HtmlAreaFormSchema {...props} key={curNodeKey} />;
      break;
    default:
      return <InputFormSchema {...props} key={curNodeKey} />;
  }
};

export default MappingRender;
