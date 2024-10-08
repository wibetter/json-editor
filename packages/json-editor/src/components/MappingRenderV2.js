import React, { Suspense } from 'react';
import { hasProperties } from '../utils';
import InputFormSchema from '$renderers/InputFormSchema/index';
import ObjectSchema from '$renderers/ObjectSchema/index';
const ArraySchema = React.lazy(() => import('$renderers/ArraySchemaV2/index')); // 使用新版ArraySchema
const DataSourceSchema = React.lazy(
  () => import('$renderers/DataSourceSchema/index'),
);
const DynamicDataSchema = React.lazy(
  () => import('$renderers/DynamicDataSchema/index'),
);
const EventSchema = React.lazy(() => import('$renderers/EventSchema/index'));
const QuantitySchema = React.lazy(
  () => import('$renderers/QuantitySchema/index'),
);
const BoxStyleSchema = React.lazy(
  () => import('$renderers/BoxStyleSchema/index'),
);
const RadioSchema = React.lazy(() => import('$renderers/RadioSchema/index'));
const SelectSchema = React.lazy(() => import('$renderers/SelectSchema/index'));
const TextAreaFormSchema = React.lazy(
  () => import('$renderers/TextAreaFormSchema/index'),
);
const TextEditorSchema = React.lazy(
  () => import('$renderers/TextEditorSchema/index'),
);
const NumberFormSchema = React.lazy(
  () => import('$renderers/NumberFormSchema/index'),
);
const BooleanFormSchema = React.lazy(
  () => import('$renderers/BooleanFormSchema/index'),
);
const DateTimeFormSchema = React.lazy(
  () => import('$renderers/DateTimeFormSchema/index'),
);
const TimeFormSchema = React.lazy(
  () => import('$renderers/TimeFormSchema/index'),
);
const URLFormSchema = React.lazy(
  () => import('$renderers/URLFormSchema/index'),
);
const ColorFormSchema = React.lazy(
  () => import('$renderers/ColorFormSchema/index'),
);
const JsonFormSchema = React.lazy(
  () => import('$renderers/JsonFormSchema/index'),
);
const CodeAreaFormSchema = React.lazy(
  () => import('$renderers/CodeAreaFormSchema/index'),
);
const HtmlAreaFormSchema = React.lazy(
  () => import('$renderers/HtmlAreaFormSchema/index'),
);
const SingleSelectSchema = React.lazy(
  () => import('$renderers/SingleSelectSchema/index'),
);

/** 根据当前类型选择对应的组件进行渲染 */
const MappingRenderV2 = (props) => {
  const {
    nodeKey,
    jsonKey,
    targetJsonSchema,
    getJSONDataByKeyRoute,
    keyRoute2indexRoute,
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
    const keyRoute = curConditionProp.keyRoute; // 条件字段的key值

    // 获取条件字段的数值
    curConditionValue = getJSONDataByKeyRoute(keyRoute);
    if (needConditionValue === curConditionValue) {
      return '';
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
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <ArraySchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'dynamic-data':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <DynamicDataSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'datasource':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <DataSourceSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'event':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <EventSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'quantity':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <QuantitySchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'box-style':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <BoxStyleSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'radio':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <RadioSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'single-select':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <SingleSelectSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'select': // 多选
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <SelectSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'input':
      return <InputFormSchema {...props} key={curNodeKey} />;
    case 'textarea':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <TextAreaFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'text-editor':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <TextEditorSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'number':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <NumberFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'boolean':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <BooleanFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'date':
    case 'date-time':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <DateTimeFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'time':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <TimeFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'url':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <URLFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'color':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <ColorFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'json':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <JsonFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'codearea':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <CodeAreaFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    case 'htmlarea':
      return (
        <Suspense
          key={`suspense-${curNodeKey}`}
          fallback={<div>Loading...</div>}
        >
          <HtmlAreaFormSchema {...props} key={curNodeKey} />
        </Suspense>
      );
    default:
      return <InputFormSchema {...props} key={curNodeKey} />;
  }
};

export default MappingRenderV2;
