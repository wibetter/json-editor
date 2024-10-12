import ArraySchema from '$schemaRenderer/ArraySchema/index';
import ObjectSchema from '$schemaRenderer/ObjectSchema/index';
import DataSourceSchema from '$schemaRenderer/DataSourceSchema/index';
import DynamicDataSchema from '$schemaRenderer/DynamicDataSchema/index';
import EventSchema from '$schemaRenderer/EventSchema/index';
import QuantitySchema from '$schemaRenderer/QuantitySchema/index';
import SelectSchema from '$schemaRenderer/SelectSchema/index';
import GeneralSchema from '$schemaRenderer/GeneralSchema/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { targetJsonSchema } = props;
  const curType = targetJsonSchema.type; // 获取当前元素类型（format）

  switch (curType) {
    case 'object':
    case 'func':
    case 'style':
    case 'data':
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
    case 'checkboxes': // 下拉多选
      return SelectSchema(props);
      break;
    default:
      return GeneralSchema(props);
  }
};

export default MappingRender;
