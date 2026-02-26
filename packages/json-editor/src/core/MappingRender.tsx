import React from 'react';
import {
  evalExpression,
  getParentKeyRoute,
  isString,
  isBoolean,
} from '@wibetter/json-utils';
// import {omit} from 'lodash';
import { hasProperties } from '$utils/index';
// 导入内置的渲染器
import '$renderers/index';
// 导入自定义渲染器
import '$customRenderers/index';
import { renderersMap } from '$core/factory';
import InputFormSchema from '$renderers/InputForm';
import { BaseRendererProps } from '$types/index';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props: BaseRendererProps): React.ReactElement | null => {
  const {
    schemaStore,
    jsonStore,
    nodeKey,
    keyRoute,
    targetJsonSchema,
    rendererType,
  } = props;
  const { getJSONDataByKeyRoute, JSONEditorObj } = jsonStore || {};

  if (!targetJsonSchema) {
    return null;
  }

  // 支持显隐属性表达式
  const parentKeyRoute = keyRoute && getParentKeyRoute(keyRoute);
  const parentData =
    parentKeyRoute && getJSONDataByKeyRoute
      ? getJSONDataByKeyRoute(parentKeyRoute) || {}
      : {}; // 获取当前父级数据域
  const curData = Object.assign({}, JSONEditorObj || {}, parentData);

  if (
    hasProperties(targetJsonSchema.onShow) &&
    targetJsonSchema.onShow !== '' &&
    (targetJsonSchema.onShow === 'false' ||
      (isBoolean(targetJsonSchema.onShow) && !targetJsonSchema.onShow) ||
      (isString(targetJsonSchema.onShow) &&
        !evalExpression(targetJsonSchema.onShow, curData)))
  ) {
    return null;
  }

  const curType =
    rendererType ||
    (targetJsonSchema.typeOn
      ? evalExpression(targetJsonSchema.typeOn, curData)
      : targetJsonSchema.type);
  let curNodeKey = nodeKey;

  const newProps: BaseRendererProps = {
    ...props,
    nodeKey: curNodeKey,
    key: curNodeKey,
    renderChild: (thisProps: BaseRendererProps) =>
      MappingRender({
        ...thisProps,
        schemaStore,
        jsonStore,
      }),
  };

  const JSONEditorFormSchema = renderersMap[curType] || InputFormSchema;

  return <JSONEditorFormSchema {...newProps} />;
};

export default MappingRender;
