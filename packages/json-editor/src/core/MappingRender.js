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
import InputFormSchema from '$renderers/InputFormSchema';

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRender = (props) => {
  const { getSchemaByKeyRoute } = props.schemaStore || {};
  const { getJSONDataByKeyRoute, JSONEditorObj } = props.jsonStore || {};
  const { nodeKey, jsonKey, keyRoute, targetJsonSchema, rendererType } = props;

  // 支持显隐属性表达式
  const parentKeyRoute = keyRoute && getParentKeyRoute(keyRoute);
  const parentData = parentKeyRoute
    ? getJSONDataByKeyRoute(parentKeyRoute) || {}
    : {}; // 获取当前父级数据域
  const curData = Object.assign({}, JSONEditorObj, parentData);

  if (
    hasProperties(targetJsonSchema.onShow) &&
    targetJsonSchema.onShow !== '' &&
    (targetJsonSchema.onShow === 'false' ||
      (isBoolean(targetJsonSchema.onShow) && !targetJsonSchema.onShow) ||
      (isString(targetJsonSchema.onShow) &&
        !evalExpression(targetJsonSchema.onShow, curData)))
  ) {
    return;
  }

  const curType =
    rendererType ||
    (targetJsonSchema.typeOn
      ? evalExpression(targetJsonSchema.typeOn, curData)
      : targetJsonSchema.type);
  let curNodeKey = nodeKey;

  // 收集当前所有条件子字段
  /*
  const curData = getJSONDataByKeyRoute(keyRoute) || {};
  const curConditionValue = schema2conditionValue(targetJsonSchema, curData);
  // 将条件字段的数值作为key的一部分
  if (curConditionValue) {
    curNodeKey = `${nodeKey}-${curConditionValue}`;
  }
  */

  const newProps = {
    ...props,
    nodeKey: curNodeKey,
    key: curNodeKey,
    renderChild: MappingRender,
  };

  const JSONEditorFormSchema = renderersMap[curType] || InputFormSchema;

  return <JSONEditorFormSchema {...newProps} />;
};

export default MappingRender;
