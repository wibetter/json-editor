import React, { Suspense } from 'react';
import { getCurrentFormat } from '@wibetter/json-utils';
import { exitPropertie } from '../utils';
import InputFormSchema from '$components/InputFormSchema/index';
import ObjectSchema from '$components/ObjectSchema/index';
const ArraySchema = React.lazy(() => import('$components/ArraySchemaV2/index')); // 使用新版ArraySchema
const DataSourceSchema = React.lazy(() =>
  import('$components/DataSourceSchema/index'),
);
const DynamicDataSchema = React.lazy(() =>
  import('$components/DynamicDataSchema/index'),
);
const EventSchema = React.lazy(() => import('$components/EventSchema/index'));
const QuantitySchema = React.lazy(() =>
  import('$components/QuantitySchema/index'),
);
const BoxStyleSchema = React.lazy(() =>
  import('$components/BoxStyleSchema/index'),
);
const RadioSchema = React.lazy(() => import('$components/RadioSchema/index'));
const SelectSchema = React.lazy(() => import('$components/SelectSchema/index'));
const TextAreaFormSchema = React.lazy(() =>
  import('$components/TextAreaFormSchema/index'),
);
const TextEditorSchema = React.lazy(() =>
  import('$components/TextEditorSchema/index'),
);
const NumberFormSchema = React.lazy(() =>
  import('$components/NumberFormSchema/index'),
);
const BooleanFormSchema = React.lazy(() =>
  import('$components/BooleanFormSchema/index'),
);
const DateTimeFormSchema = React.lazy(() =>
  import('$components/DateTimeFormSchema/index'),
);
const TimeFormSchema = React.lazy(() =>
  import('$components/TimeFormSchema/index'),
);
const URLFormSchema = React.lazy(() =>
  import('$components/URLFormSchema/index'),
);
const ColorFormSchema = React.lazy(() =>
  import('$components/ColorFormSchema/index'),
);
const JsonFormSchema = React.lazy(() =>
  import('$components/JsonFormSchema/index'),
);
const CodeAreaFormSchema = React.lazy(() =>
  import('$components/CodeAreaFormSchema/index'),
);
const HtmlAreaFormSchema = React.lazy(() =>
  import('$components/HtmlAreaFormSchema/index'),
);
const SingleSelectSchema = React.lazy(() =>
  import('$components/SingleSelectSchema/index'),
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