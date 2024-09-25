import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Tag, Tooltip } from 'antd';
import './index.scss';

/** 条件字段渲染组件 */
const ConditionPropsSchema = (props) => {
  const { jsonSchema, removeConditionProp, cancelConditionProp } = props;
  let conditionProps = {};
  if (jsonSchema.conditionProps) {
    // 首次添加条件字段时
    // conditionProps = toJS(jsonSchema.conditionProps);
    conditionProps = jsonSchema.conditionProps;
  }
  const conditionPropKeys = Object.keys(conditionProps);

  // 当没有条件字段时，则不渲染任何内容
  if (conditionPropKeys.length === 0) {
    return '';
  } else {
    return (
      <div className="condition-props-box">
        <div className="title">
          <Tooltip
            title={'其他字段可根据条件字段的数值设置规则联动'}
            placement="top"
          >
            条件字段:
          </Tooltip>
        </div>
        <div className="tags-box">
          {conditionPropKeys.map((conditionKey) => {
            const conditionProp = conditionProps[conditionKey];
            return (
              <Tag
                key={conditionProp.keyRoute}
                color="geekblue"
                closable
                onClose={() => {
                  // 移除条件字段
                  removeConditionProp(conditionProp.keyRoute);
                  // 将isConditionProp设置为false
                  cancelConditionProp(
                    conditionProp.keyRoute,
                    conditionProp.key,
                  );
                }}
              >
                {conditionProp.key}({conditionProp.title})
              </Tag>
            );
          })}
        </div>
      </div>
    );
  }
};

export default inject((stores) => ({
  jsonSchema: stores.jsonSchemaStore.jsonSchema,
  removeConditionProp: stores.jsonSchemaStore.removeConditionProp,
  cancelConditionProp: stores.jsonSchemaStore.cancelConditionProp,
}))(observer(ConditionPropsSchema));
