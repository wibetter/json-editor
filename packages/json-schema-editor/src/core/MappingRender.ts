import GeneralSchema from '$schemaRenderer/GeneralSchema/index';
import ObjectSchema from '$schemaRenderer/ObjectSchema/index';
import { BaseRendererProps } from '$types/index';
import { schemaRegistry } from '$core/index';

/** 根据当前类型选择对应的组件进行渲染（优先使用插件注册的渲染器，兜底使用 GeneralSchema） */
const MappingRender = (props: BaseRendererProps) => {
  const { targetJsonSchema } = props;
  const curType = targetJsonSchema.type;

  const descriptor = schemaRegistry.get(curType);
  if (descriptor && descriptor.renderer) {
    return descriptor.renderer(props);
  }

  // console.warn(`[JSONSchemaEditor] 未找到 ${curType} 类型的渲染器:`, targetJsonSchema);
  if (
    targetJsonSchema.properties &&
    Object.keys(targetJsonSchema.properties).length > 0
  ) {
    // 识别为 对象类型
    return ObjectSchema(props);
  }

  return GeneralSchema(props);
};

export default MappingRender;
