import React from 'react';
import { Input, Select, Switch, Radio } from 'antd';
import { inject, observer } from 'mobx-react';
const { Option } = Select;

/** 用于设置条件规则数值
 * 备注：目前仅在高级设置面板中使用
 */
const ConditionValueSchema = (props) => {
  const { conditionRule, hiddenRuleConditionValueChange, getSchemaByKeyRoute } =
    props;
  // 获取当前条件字段的枚举值
  let curConditionValueItems = {};
  if (conditionRule.conditionProp && conditionRule.conditionProp.keyRoute) {
    const conditionSchema = getSchemaByKeyRoute(
      conditionRule.conditionProp.keyRoute,
    );
    if (conditionSchema.items) {
      curConditionValueItems = conditionSchema.items;
    }
  }

  if (
    conditionRule.conditionProp &&
    (conditionRule.conditionProp.type === 'radio' ||
      conditionRule.conditionProp.type === 'single-select')
  ) {
    return (
      <Select
        defaultValue={conditionRule.conditionValue}
        style={{ width: 150 }}
        onChange={(conditionValue) => {
          hiddenRuleConditionValueChange(conditionValue);
        }}
      >
        {curConditionValueItems &&
          curConditionValueItems.enum &&
          curConditionValueItems.enum.map((curConditionValue, index) => {
            return (
              <Option
                key={curConditionValue}
                value={curConditionValue}
                select={curConditionValue === conditionRule.conditionValue}
              >
                {curConditionValueItems.enumextra[index]}
              </Option>
            );
          })}
      </Select>
    );
  } else if (
    conditionRule.conditionProp &&
    conditionRule.conditionProp.type === 'boolean'
  ) {
    return (
      <Radio.Group
        style={{ display: 'inline-block' }}
        onChange={(event) => {
          hiddenRuleConditionValueChange(event.target.value);
        }}
        defaultValue={conditionRule.conditionValue}
      >
        <Radio value={true} key={true}>
          true
        </Radio>
        <Radio value={false} key={false}>
          false
        </Radio>
      </Radio.Group>
    );
  } else {
    return (
      <Input
        defaultValue={conditionRule.conditionValue}
        onPressEnter={(event) =>
          hiddenRuleConditionValueChange(event.target.value)
        }
        onBlur={(event) => hiddenRuleConditionValueChange(event.target.value)}
      />
    );
  }
};

export default inject((stores) => ({
  getSchemaByKeyRoute: stores.jsonSchemaStore.getSchemaByKeyRoute,
}))(observer(ConditionValueSchema));
