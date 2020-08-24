import React from 'react';
import { getCurrentFormat } from '@wibetter/json-utils';
import ArraySchema from '$components/ArraySchema/index';
import ObjectSchema from '$components/ObjectSchema/index';
import DataSourceSchema from '$components/DataSourceSchema/index';
import DynamicDataSchema from '$components/DynamicDataSchema/index';
import EventSchema from '$components/EventSchema/index';
import QuantitySchema from '$components/QuantitySchema/index';
import RadioSchema from '$components/RadioSchema/index';
import SelectSchema from '$components/SelectSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import TextAreaFormSchema from '$components/TextAreaFormSchema/index';
import NumberFormSchema from '$components/NumberFormSchema/index';
import BooleanFormSchema from '$components/BooleanFormSchema/index';
import DateTimeFormSchema from '$components/DateTimeFormSchema/index';
import TimeFormSchema from '$components/TimeFormSchema/index';
import URLFormSchema from '$components/URLFormSchema/index';
import ColorFormSchema from '$components/ColorFormSchema/index';
import JsonFormSchema from '$components/JsonFormSchema/index';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import HtmlAreaFormSchema from '$components/HtmlAreaFormSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { nodeKey, targetJsonData } = props;
  const curType = getCurrentFormat(targetJsonData); // 获取当前元素类型（format）

  switch (curType) {
    case 'func':
    case 'style':
    case 'data':
    case 'object':
      return <ObjectSchema {...props} key={nodeKey} />;
      break;
    case 'array':
      return <ArraySchema {...props} key={nodeKey} />;
      break;
    case 'dynamic-data':
      return <DynamicDataSchema {...props} key={nodeKey} />;
      break;
    case 'datasource':
      return <DataSourceSchema {...props} key={nodeKey} />;
      break;
    case 'event':
      return <EventSchema {...props} key={nodeKey} />;
      break;
    case 'quantity':
      return <QuantitySchema {...props} key={nodeKey} />;
      break;
    case 'radio':
      return <RadioSchema {...props} key={nodeKey} />;
      break;
    case 'select':
      return <SelectSchema {...props} key={nodeKey} />;
      break;
    case 'input':
      return <InputFormSchema {...props} key={nodeKey} />;
      break;
    case 'textarea':
      return <TextAreaFormSchema {...props} key={nodeKey} />;
      break;
    case 'number':
      return <NumberFormSchema {...props} key={nodeKey} />;
      break;
    case 'boolean':
      return <BooleanFormSchema {...props} key={nodeKey} />;
      break;
    case 'date':
    case 'date-time':
      return <DateTimeFormSchema {...props} key={nodeKey} />;
      break;
    case 'time':
      return <TimeFormSchema {...props} key={nodeKey} />;
      break;
    case 'url':
      return <URLFormSchema {...props} key={nodeKey} />;
      break;
    case 'color':
      return <ColorFormSchema {...props} key={nodeKey} />;
      break;
    case 'json':
      return <JsonFormSchema {...props} key={nodeKey} />;
      break;
    case 'codearea':
      return <CodeAreaFormSchema {...props} key={nodeKey} />;
      break;
    case 'htmlarea':
      return <HtmlAreaFormSchema {...props} key={nodeKey} />;
      break;
    default:
      return <InputFormSchema {...props} key={nodeKey} />;
  }
};

export default MappingRender;
