import React from 'react';
import { getCurrentFormat } from '$utils/jsonSchema';

import ArraySchema from '$components/ArraySchema/index';
import ObjectSchema from '$components/ObjectSchema/index';
import DataSourceSchema from '$components/DataSourceSchema/index';
import EventSchema from '$components/EventSchema/index';
import QuantitySchema from '$components/QuantitySchema/index';
import RadioSchema from '$components/RadioSchema/index';
import SelectSchema from '$components/SelectSchema/index';
import GeneralSchema from '$components/GeneralSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { targetJsonData } = props;
  const curType = getCurrentFormat(targetJsonData); // 获取当前元素类型（format）

  switch (curType) {
    case 'func':
    case 'style':
    case 'data':
    case 'object':
      return ObjectSchema(props);
      break;
    case 'array':
      return ArraySchema(props);
      break;
    case 'datasource':
      return DataSourceSchema(props);
      break;
    case 'event':
      return EventSchema(props);
      break;
    case 'quantity':
      return QuantitySchema(props);
      break;
    case 'radio':
      return RadioSchema(props);
      break;
    case 'select':
      return SelectSchema(props);
      break;
    default:
      return GeneralSchema(props);
  }
};

export default MappingRender;
