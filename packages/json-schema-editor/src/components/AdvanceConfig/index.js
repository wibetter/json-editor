import * as React from 'react';
import { inject, observer } from 'mobx-react';
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
import {
  isNeedDefaultOption,
  isNeedPlaceholderOption,
  isNeedReadOnlyOption,
  isNeedConditionOption,
  isNeedIsRequiredOption,
  isNeedCodeViewOption,
  hasOptions,
} from '$utils/advanced.config';
import { hasProperties, getExpectType } from '@wibetter/json-utils';
import JsonView from '$components/JsonView';
import './index.scss';

/**
 * 高级配置面板
 */

class AdvanceConfig extends React.PureComponent {
  static propTypes = {
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
  };

  constructor(props) {
    super(props);

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (curKey, newVal) => {
    const { editSchemaData } = this.props.schemaStore || {};
    const { indexRoute, jsonKey, targetJsonSchema } = this.props;
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

  render() {
    const { indexRoute2keyRoute } = this.props.schemaStore || {};
    const { nodeKey, indexRoute, targetJsonSchema } = this.props;
    const curType = targetJsonSchema.type;
    // 获取对应的keyRoute
    const curKeyRoute = indexRoute2keyRoute(indexRoute);
    // 判断当前是否是条件字段
    let isConditionProp = targetJsonSchema.isConditionProp;

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
            key={`${nodeKey}-isConditionProp`}
          >
            <div className="element-title">
              <Tooltip
                title={'设置为条件字段后，其他字段可根据其数值变化进行实时联动'}
                placement="top"
              >
                <span className="title-text">条件字段</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div
                className="form-item-box"
                key={`${nodeKey}-isConditionProp-switch`}
              >
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={isConditionProp}
                  checkedChildren="是"
                  unCheckedChildren="否"
                  onChange={(checked) => {
                    this.handleValueChange('isConditionProp', checked);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {(curType === 'select' || curType === 'cascader') && (
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
        {hasOptions(curType) && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-defaultActiveFirstOption`}
          >
            <div className="element-title">
              <Tooltip title={'是否默认高亮第一个选项。'} placement="top">
                <span className="title-text">选中第一项</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <div
                className="form-item-box"
                key={`${nodeKey}-selectConfig-defaultActiveFirstOption`}
              >
                <Switch
                  style={{ display: 'inline-block' }}
                  defaultChecked={targetJsonSchema.defaultActiveFirstOption}
                  checkedChildren="开启"
                  unCheckedChildren="关闭"
                  onChange={(checked) => {
                    this.handleValueChange('defaultActiveFirstOption', checked);
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
        {curType === 'cascader' && (
          <div
            className="wide-screen-element-warp"
            key={`${nodeKey}-cascader-options`}
          >
            <div className="element-title">
              <Tooltip
                title={'用于添加 级联选择 组件的 options 数据。'}
                placement="top"
              >
                <span className="title-text">options 配置</span>
              </Tooltip>
            </div>
            <div className="content-item">
              <JsonView
                jsonData={targetJsonSchema.options}
                onChange={(newJsonData) => {
                  this.handleValueChange('options', newJsonData);
                }}
              />
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
        <div className="wide-screen-element-warp" key={`${nodeKey}-showKey`}>
          <div className="element-title">
            <Tooltip
              title={'开启后，在JSONEditor端会展示当前Key值，以便增加辨识度。'}
              placement="top"
            >
              <span className="title-text">展示Key值</span>
            </Tooltip>
          </div>
          <div className="content-item">
            <div className="form-item-box">
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={targetJsonSchema.showKey}
                checkedChildren="true"
                unCheckedChildren="false"
                onChange={(checked) => {
                  this.handleValueChange('showKey', checked);
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
        <div className="wide-screen-element-warp" key={`${nodeKey}-onShow`}>
          <div className="element-title">
            <Tooltip
              title={
                '用于设置显隐表达式（onShow），比如设置 "dataType === 1"，则表示当数据域中 dataType 为 1 时显示当前配置项。'
              }
              placement="top"
            >
              <span className="title-text">显隐表达式</span>
            </Tooltip>
          </div>
          <div className="content-item">
            <div className="form-item-box">
              <Input
                style={{ display: 'inline-block' }}
                placeholder={'请输入显隐表达式'}
                defaultValue={targetJsonSchema.onShow}
                onPressEnter={(event) => {
                  const { value } = event.target;
                  this.handleValueChange('onShow', value);
                }}
                onBlur={(event) => {
                  const { value } = event.target;
                  this.handleValueChange('onShow', value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="wide-screen-element-warp" key={`${nodeKey}-titleStyle`}>
          <div className="element-title">
            <Tooltip title={'可用于设置标题展示样式。'} placement="top">
              <span className="title-text">标题样式</span>
            </Tooltip>
          </div>
          <div className="content-item">
            <JsonView
              jsonData={targetJsonSchema.titleStyle}
              onChange={(newJsonData) => {
                this.handleValueChange('titleStyle', newJsonData);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  schemaStore: stores.schemaStore,
}))(observer(AdvanceConfig));
