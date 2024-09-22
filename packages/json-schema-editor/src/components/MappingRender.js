import { getCurrentFormat } from '@wibetter/json-utils';
import ArraySchema from '$components/ArraySchema/index';
import ObjectSchema from '$components/ObjectSchema/index';
import DataSourceSchema from '$components/DataSourceSchema/index';
import DynamicDataSchema from '$components/DynamicDataSchema/index';
import EventSchema from '$components/EventSchema/index';
import QuantitySchema from '$components/QuantitySchema/index';
import RadioSchema from '$components/RadioSchema/index';
import SelectSchema from '$components/SelectSchema/index';
import GeneralSchema from '$components/GeneralSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { targetJsonSchema } = props;
  const curType = getCurrentFormat(targetJsonSchema); // 获取当前元素类型（format）

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
      return ObjectSchema(props);
      break;
    case 'array':
      return ArraySchema(props);
      break;
    case 'datasource':
      return DataSourceSchema(props);
      break;
    case 'dynamic-data':
      return DynamicDataSchema(props);
      break;
    case 'event':
      return EventSchema(props);
      break;
    case 'quantity':
    case 'box-style':
      return QuantitySchema(props);
      break;
    case 'radio':
    case 'single-select': // 下拉单选
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
