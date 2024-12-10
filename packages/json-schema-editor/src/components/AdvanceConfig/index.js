import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import {
  Input,
  Switch,
  InputNumber,
  Checkbox,
  Radio,
  Tooltip,
  Button,
  Select,
} from 'antd';
const { TextArea } = Input;
const { Option } = Select;
import ConditionValueSchema from '$components/ConditionValueSchema'; // 条件数值选择器
import {
  isNeedDefaultOption,
  isNeedPlaceholderOption,
  isNeedReadOnlyOption,
  isNeedConditionOption,
  isNeedIsRequiredOption,
  isNeedCodeViewOption,
} from '$utils/advanced.config';
import { hasProperties, getExpectType } from '@wibetter/json-utils';
import './index.scss';

class AdvanceConfig extends React.PureComponent {
  static propTypes = {
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    checkConditionProp: PropTypes.any,
    addConditionProp: PropTypes.any,
    removeConditionProp: PropTypes.any,
    jsonSchema: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (curKey, newVal) => {
    const { indexRoute, jsonKey, targetJsonSchema, editSchemaData } =
      this.props;
    if (targetJsonSchema[curKey] === newVal) return; // title值未改变则直接跳出
    const newSchemaData = {};
    newSchemaData[curKey] = newVal;
    // jsonKey是当前字段项的key，curKey是当前字段对象的属性key
    editSchemaData(indexRoute, jsonKey, newSchemaData);
  };

  /** 根据当前类型显示对应的输入组件 */
  renderDefaultContent = (curType, targetJsonSchema, nodeKey) => {
    if (curType === 'boolean') {
      return (
        <Switch
          style={{ display: 'inline-block' }}
          defaultChecked={targetJsonSchema.default}
          checkedChildren="true"
          unCheckedChildren="false"
          onChange={(checked) => {
            this.handleValueChange('default', checked);
          }}
        />
      );
    } else if (
      curType === 'checkboxes' ||
      (curType === 'select' && targetJsonSchema.multiple)
    ) {
      const options = targetJsonSchema.options;
      return (
        <Checkbox.Group
          style={{ display: 'inline-block' }}
          onChange={(checkedValue) => {
            this.handleValueChange('default', checkedValue);
          }}
          defaultValue={targetJsonSchema.default}
        >
          {options &&
            options.length > 0 &&
            options.map((item, optionIndex) => {
              const optionNodeKey = `${nodeKey}-options-${optionIndex}`;
              return (
                <Checkbox value={item.value} key={optionNodeKey}>
                  {item.label || item.name}
                </Checkbox>
              );
            })}
        </Checkbox.Group>
      );
    } else if (curType === 'radio' || curType === 'select') {
      const options = targetJsonSchema.options;
      return (
        <Radio.Group
          style={{ display: 'inline-block' }}
          defaultValue={targetJsonSchema.default}
          onChange={(event) => {
            const { value } = event.target;
            this.handleValueChange('default', value);
          }}
        >
          {options &&
            options.length > 0 &&
            options.map((item, optionIndex) => {
              /** 2. 获取当前元素的id，用于做唯一标识 */
              const optionNodeKey = `${nodeKey}-options-${optionIndex}`;
              return (
                <Radio value={item.value} key={optionNodeKey}>
                  {item.label || item.name}
                </Radio>
              );
            })}
        </Radio.Group>
      );
    } else if (curType === 'color') {
      return (
        <Input
          style={{ display: 'inline-block' }}
          className="color-item-form"
          type="color"
          defaultValue={targetJsonSchema.default}
          onChange={(event) => {
            const { value } = event.target;
            this.handleValueChange('default', value);
          }}
        />
      );
    } else if (
      curType === 'textarea' ||
      curType === 'codearea' ||
      curType === 'htmlarea' ||
      curType === 'json'
    ) {
      return (
        <TextArea
          style={{ display: 'inline-block' }}
          rows={4}
          placeholder={`请输入${targetJsonSchema.title}的默认值`}
          defaultValue={targetJsonSchema.default}
          onPressEnter={(event) => {
            const { value } = event.target;
            this.handleValueChange('default', value);
          }}
          onBlur={(event) => {
            const { value } = event.target;
            this.handleValueChange('default', value);
          }}
        />
      );
    }
    if (curType === 'number') {
      return (
        <InputNumber
          style={{ display: 'inline-block' }}
          placeholder={`请输入${targetJsonSchema.title}的默认值`}
          defaultValue={targetJsonSchema.default}
          onChange={(newVal) => {
            this.handleValueChange('default', newVal);
          }}
        />
      );
    }
    // 其他都默认以input控件进行录入
    return (
      <Input
        style={{ display: 'inline-block' }}
        placeholder={`请输入${targetJsonSchema.title}的默认值`}
        defaultValue={targetJsonSchema.default}
        onPressEnter={(event) => {
          const { value } = event.target;
          this.handleValueChange('default', value);
        }}
        onBlur={(event) => {
          const { value } = event.target;
          this.handleValueChange('default', value);
        }}
      />
    );
  };

  /** 条件字段开关变动事件处理器 */
  curConditionPropChange = (isConditionProp, keyRoute) => {
    const {
      indexRoute,
      jsonKey,
      targetJsonSchema,
      addConditionProp,
      removeConditionProp,
      indexRoute2keyRoute,
    } = this.props;
    const curKeyRoute = keyRoute || indexRoute2keyRoute(indexRoute);
    if (isConditionProp) {
      // 将当前字段添加为条件字段
      addConditionProp({
        key: jsonKey,
        keyRoute: curKeyRoute,
        title: targetJsonSchema.title,
        format: targetJsonSchema.type,
        type: targetJsonSchema.type,
      });
      // 增加条件字段标记
      this.handleValueChange('isConditionProp', true);
    } else {
      // 将当前字段改为非条件字段
      removeConditionProp(curKeyRoute);
      // 取消条件字段标记
      this.handleValueChange('isConditionProp', false);
    }
  };

  // 删除隐藏规则
  deleteHiddenRule = () => {
    const { indexRoute, deleteSchemaProp } = this.props;
    deleteSchemaProp(indexRoute, 'hiddenRule');
  };

  // 添加隐藏规则
  addHiddenRule = () => {
    // 获取当前字段的条件规则
    const hiddenRule = {}; // 暂无对应的条件字段
    this.handleValueChange('hiddenRule', hiddenRule);
  };

  // 隐藏规则条件字段变动
  hiddenRuleConditionChange = (conditionPropItem) => {
    const { targetJsonSchema } = this.props;
    // 获取当前字段的条件规则
    let hiddenRule = {};
    if (targetJsonSchema.hiddenRule) {
      hiddenRule = toJS(targetJsonSchema.hiddenRule);
    }
    hiddenRule.conditionProp = conditionPropItem;
    this.handleValueChange('hiddenRule', hiddenRule);
  };

  // 隐藏规则条件数值变动
  hiddenRuleConditionValueChange = (value) => {
    const { targetJsonSchema } = this.props;
    // 获取当前字段的条件规则
    let hiddenRule = {};
    if (targetJsonSchema.hiddenRule) {
      hiddenRule = toJS(targetJsonSchema.hiddenRule);
    }
    hiddenRule.conditionValue = value;
    this.handleValueChange('hiddenRule', hiddenRule);
  };

  render() {
    const {
      nodeKey,
      indexRoute,
      targetJsonSchema,
      checkConditionProp,
      jsonSchema,
      indexRoute2keyRoute,
    } = this.props;
    const curType = targetJsonSchema.type;
    // 获取对应的keyRoute
    const curKeyRoute = indexRoute2keyRoute(indexRoute);
    // 判断当前是否是条件字段
    let isConditionProp = false;
    if (hasProperties(targetJsonSchema.isConditionProp)) {
      isConditionProp = targetJsonSchema.isConditionProp;
    } else {
      isConditionProp = checkConditionProp(curKeyRoute);
    }

    // 获取全局的条件字段
    let conditionProps = {};
    if (jsonSchema.conditionProps) {
      // 首次添加条件字段时
      // conditionProps = toJS(jsonSchema.conditionProps);
      conditionProps = jsonSchema.conditionProps;
    }
    const conditionPropKeys = Object.keys(conditionProps);

    // 获取当前字段的条件规则
    let hiddenRule = {};
    if (targetJsonSchema.hiddenRule) {
      hiddenRule = targetJsonSchema.hiddenRule;
    }

    /** 默认值需要进行细分
     *  输入形式的基础类型组件（input、boolean、 date、date-time、 time、 url、number），以input表单形式让用户填充；
     *  textarea和3种特殊类型组件（Json、CodeArea、htmlArea），以textarea表单形式让用户填充；
     *  color选择类型，以type=color的颜色取值控件让用户选择；
     *  radio、 select选择类型，以其自身在JSONEditor中的展示让用户选择默认值；
     * */

    return (
      <div className="advance-config-model">
        {isNeedConditionOption(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-isConditionProp-${isConditionProp}`}
          >
            <div className="element-title">
              <Tooltip
                title={
                  '当前属性设置为条件字段后，其他字段可以根据其数值做对应的联动'
                }
                placement="top"
              >
                <span className="title-text">条件字段</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div
                className="form-item-box"
                key={`${nodeKey}-isConditionProp-switch-${isConditionProp}`}
              >
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={isConditionProp}
                  checkedChildren="是"
                  unCheckedChildren="否"
                  onChange={(checked) => {
                    this.curConditionPropChange(checked, curKeyRoute);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {curType === 'select' && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-selectConfig`}
          >
            <div className="element-title">
              <Tooltip
                title={'开启多选后，select下拉列表支持选择多个选项。'}
                placement="top"
              >
                <span className="title-text">支持多选</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div
                className="form-item-box"
                key={`${nodeKey}-selectConfig-multiple`}
              >
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.multiple}
                  checkedChildren="多选"
                  unCheckedChildren="单选"
                  onChange={(checked) => {
                    this.handleValueChange('multiple', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {isNeedReadOnlyOption(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-readOnly-${targetJsonSchema.readOnly}`}
          >
            <div className="element-title">
              <Tooltip
                title={'当前属性设置为只读后，用户不能对其进行任何编辑操作'}
                placement="top"
              >
                <span className="title-text">是否只读</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.readOnly}
                  checkedChildren="true"
                  unCheckedChildren="false"
                  onChange={(checked) => {
                    this.handleValueChange('readOnly', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {isNeedIsRequiredOption(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-isRequired-${targetJsonSchema.isRequired}`}
          >
            <div className="element-title">
              <Tooltip
                title={
                  '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示。'
                }
                placement="top"
              >
                <span className="title-text">是否必填项</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.isRequired}
                  checkedChildren="true"
                  unCheckedChildren="false"
                  onChange={(checked) => {
                    this.handleValueChange('isRequired', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {isNeedDefaultOption(curType) && (
          <div className="wide-screen-element-warp" key={`${nodeKey}-default`}>
            <div className="element-title">
              <Tooltip placement="top">
                <span className="title-text">默认值</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                {this.renderDefaultContent(curType, targetJsonSchema, nodeKey)}
              </div>
            </div>
          </div>
        )}
        <div
          className="wide-screen-element-warp"
          key={`${nodeKey}-description`}
        >
          <div className="element-title">
            <Tooltip
              title={'字段描述内容将作为Title的补充信息提供给用户'}
              placement="top"
            >
              <span className="title-text">字段描述</span>
            </Tooltip>
          </div>
          <div className="content-item">
            <div className="form-item-box">
              <Input
                style={{ display: 'inline-block' }}
                placeholder={`请输入${targetJsonSchema.title}的字段描述`}
                defaultValue={targetJsonSchema.description}
                onPressEnter={(event) => {
                  const { value } = event.target;
                  this.handleValueChange('description', value);
                }}
                onBlur={(event) => {
                  const { value } = event.target;
                  this.handleValueChange('description', value);
                }}
              />
            </div>
          </div>
        </div>
        {isNeedPlaceholderOption(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-placeholder`}
          >
            <div className="element-title">
              <Tooltip
                title={'输入提示内容将作为输入区域的提示信息展示给用户'}
                placement="top"
              >
                <span className="title-text">输入提示</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                <Input
                  style={{ display: 'inline-block' }}
                  placeholder={`请输入${targetJsonSchema.title}的输入提示`}
                  defaultValue={targetJsonSchema.placeholder}
                  onPressEnter={(event) => {
                    const { value } = event.target;
                    this.handleValueChange('placeholder', value);
                  }}
                  onBlur={(event) => {
                    const { value } = event.target;
                    this.handleValueChange('placeholder', value);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {isNeedCodeViewOption(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-showCodeViewBtn-${targetJsonSchema.showCodeViewBtn}`}
          >
            <div className="element-title">
              <Tooltip
                title={'用于控制是否显示源码模式切换按钮，默认显示'}
                placement="top"
              >
                <span className="title-text">源码模式</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.showCodeViewBtn ?? true}
                  checkedChildren="true"
                  unCheckedChildren="false"
                  onChange={(checked) => {
                    this.handleValueChange('showCodeViewBtn', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {getExpectType(curType) === 'number' && (
          <>
            <div
              className="wide-screen-element-warp"
              key={`${nodeKey}-minimum-${targetJsonSchema.minimum}`}
            >
              <div className="element-title">
                <Tooltip
                  title={'设置最小值后，用户输入的数值必须大于当前最小值'}
                  placement="top"
                >
                  <span className="title-text">最小值</span>
                </Tooltip>
              </div>
              <div className="content-item">
                <div className="form-item-box">
                  <InputNumber
                    style={{ display: 'inline-block' }}
                    defaultValue={targetJsonSchema.minimum}
                    onPressEnter={(event) => {
                      const { value } = event.target;
                      this.handleValueChange('minimum', value);
                    }}
                    onBlur={(event) => {
                      const { value } = event.target;
                      this.handleValueChange('minimum', value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="wide-screen-element-warp"
              key={`${nodeKey}-maximum-${targetJsonSchema.maximum}`}
            >
              <div className="element-title">
                <Tooltip
                  title={'设置最大值后，用户输入的数值必须大于当前最大值'}
                  placement="top"
                >
                  <span className="title-text">最大值</span>
                </Tooltip>
              </div>
              <div className="content-item">
                <div className="form-item-box">
                  <InputNumber
                    style={{ display: 'inline-block' }}
                    defaultValue={targetJsonSchema.maximum}
                    onPressEnter={(event) => {
                      const { value } = event.target;
                      this.handleValueChange('maximum', value);
                    }}
                    onBlur={(event) => {
                      const { value } = event.target;
                      this.handleValueChange('maximum', value);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {getExpectType(curType) === 'array' && (
          <>
            <div
              className="wide-screen-element-warp"
              key={`${nodeKey}-minimum-child`}
            >
              <div className="element-title">
                <Tooltip title={'用于限制数据项最小个数'} placement="top">
                  <span className="title-text">最小数据项</span>
                </Tooltip>
              </div>
              <div className="content-item">
                <div className="form-item-box">
                  <InputNumber
                    style={{ display: 'inline-block' }}
                    defaultValue={targetJsonSchema['minimum-child']}
                    onChange={(newVal) => {
                      this.handleValueChange('minimum-child', newVal);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="wide-screen-element-warp"
              key={`${nodeKey}-maximum-child`}
            >
              <div className="element-title">
                <Tooltip title={'用于限制数据项最多个数'} placement="top">
                  <span className="title-text">最多数据项</span>
                </Tooltip>
              </div>
              <div className="content-item">
                <div className="form-item-box">
                  <InputNumber
                    style={{ display: 'inline-block' }}
                    defaultValue={targetJsonSchema['maximum-child']}
                    onChange={(newVal) => {
                      this.handleValueChange('maximum-child', newVal);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {!targetJsonSchema.hiddenRule && (
          <div className="wide-screen-element-warp">
            <div className="element-title">
              <span className="title-text">隐藏规则</span>
            </div>
            <div className="content-item">
              <Button
                size="small"
                className="add-rule-condition-btn"
                onClick={this.addHiddenRule}
              >
                添加隐藏规则
              </Button>
            </div>
          </div>
        )}
        {targetJsonSchema.hiddenRule && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-clearValueOnHidden-${targetJsonSchema.clearValueOnHidden}`}
          >
            <div className="element-title">
              <Tooltip
                title={
                  '默认隐藏表单项时，会保留其对应的表单项数值。如需隐藏时删除表单项数值，请开启以下配置项。'
                }
                placement="top"
              >
                <span className="title-text">隐藏时删除</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div className="form-item-box">
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.clearValueOnHidden}
                  checkedChildren="true"
                  unCheckedChildren="false"
                  onChange={(checked) => {
                    this.handleValueChange('clearValueOnHidden', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {targetJsonSchema.hiddenRule && (
          <div className="hidden-rule-box">
            <div className="rule-title">
              <div className="title">隐藏规则：</div>
              <div className="btn-box">
                <Button size="small" onClick={this.deleteHiddenRule}>
                  删除规则
                </Button>
              </div>
            </div>
            <div className="rule-condition-box">
              <div className="condition-title">隐藏条件：</div>
              <div className="condition-prop">
                <Select
                  showSearch
                  defaultValue={
                    hiddenRule.conditionProp
                      ? hiddenRule.conditionProp.keyRoute
                      : null
                  }
                  style={{ width: 150 }}
                  onChange={(conditionKey) => {
                    const conditionItem = conditionProps[conditionKey];
                    this.hiddenRuleConditionChange(conditionItem);
                  }}
                >
                  {conditionPropKeys.map((propKey) => {
                    const conditionItem = conditionProps[propKey];
                    return (
                      <Option
                        key={conditionItem.keyRoute}
                        value={conditionItem.keyRoute}
                        disabled={curKeyRoute === conditionItem.keyRoute}
                      >
                        {conditionItem.title}({conditionItem.key})
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="condition-equal">等于</div>
              <div className="condition-value">
                <ConditionValueSchema
                  conditionRule={hiddenRule}
                  hiddenRuleConditionValueChange={
                    this.hiddenRuleConditionValueChange
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default inject((stores) => ({
  getSchemaByIndexRoute: stores.jsonSchemaStore.getSchemaByIndexRoute,
  editSchemaData: stores.jsonSchemaStore.editSchemaData,
  checkConditionProp: stores.jsonSchemaStore.checkConditionProp,
  addConditionProp: stores.jsonSchemaStore.addConditionProp,
  indexRoute2keyRoute: stores.jsonSchemaStore.indexRoute2keyRoute,
  removeConditionProp: stores.jsonSchemaStore.removeConditionProp,
  deleteSchemaProp: stores.jsonSchemaStore.deleteSchemaProp,
  jsonSchema: stores.jsonSchemaStore.jsonSchema,
}))(observer(AdvanceConfig));
