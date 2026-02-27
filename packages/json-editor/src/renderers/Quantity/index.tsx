import * as React from 'react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { InputNumber, Tooltip, AutoComplete, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate, isArray } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';

/**
 * 将数量值拆分为数值部分和单位部分，兼容以下两种格式：
 *   - 字符串格式（新）：`"10px"` / `"1.5rem"` / `"100%"` / `"-5px"`
 *   - 对象格式（旧）：`{ unit: 10, quantity: 'px' }`
 * 若解析失败则数值原样返回，单位使用 defaultUnit。
 */
const parseQuantityString = (
  str: any,
  defaultUnit: string = 'px',
): { num: string; unit: string } => {
  // 兼容旧版对象格式 { unit: 数值, quantity: 单位 }
  if (str !== null && typeof str === 'object') {
    const num =
      str.unit !== undefined && str.unit !== null ? String(str.unit) : '';
    const unit =
      str.quantity !== undefined && str.quantity !== null
        ? String(str.quantity)
        : defaultUnit;
    return { num, unit };
  }
  if (str === undefined || str === null || str === '') {
    return { num: '', unit: defaultUnit };
  }
  const match = String(str).match(/^(-?\d*\.?\d+)([a-zA-Z%]*)$/);
  if (match) {
    return { num: match[1], unit: match[2] || defaultUnit };
  }
  return { num: String(str), unit: defaultUnit };
};

class QuantitySchema extends React.PureComponent<BaseRendererProps> {
  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  getDefaultUnit = (): string => {
    const { targetJsonSchema } = this.props;
    const quantitySchema = targetJsonSchema.properties['quantity'];
    return (quantitySchema && quantitySchema.default) || 'px';
  };

  getCurQuantityString = (): string => {
    const { keyRoute, jsonStore } = this.props;
    const { getJSONDataByKeyRoute } = jsonStore || {};
    return (
      (getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute)) ||
      ''
    );
  };

  handleInputChange = (event: any) => {
    const { value } = event.target;
    this.handleValueChange(value);
  };

  // 数值变动：保留当前单位，合并成字符串写入 keyRoute
  handleValueChange = (newNum: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { unit } = parseQuantityString(
      this.getCurQuantityString(),
      this.getDefaultUnit(),
    );
    const combinedValue = `${newNum}${unit}`;

    if (this.props.onChange) {
      this.props.onChange(combinedValue);
    } else {
      updateFormValueData(keyRoute, combinedValue);
    }
  };

  // 单位变动：保留当前数值，合并成字符串写入 keyRoute
  handleUnitChange = (newUnit: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { num } = parseQuantityString(
      this.getCurQuantityString(),
      this.getDefaultUnit(),
    );
    const combinedValue = `${num}${newUnit}`;

    if (this.props.onChange) {
      this.props.onChange(combinedValue);
    } else {
      updateFormValueData(keyRoute, combinedValue);
    }
  };

  // 展示单位切换（受控组件，value 由外部字符串解析得出）
  getUnitSelect = (currentUnit: string) => {
    const { targetJsonSchema } = this.props;
    const quantitySchema = targetJsonSchema.properties['quantity'];
    let options: { label: string; value: string }[] = [
      { label: 'px', value: 'px' },
    ];
    if (quantitySchema && quantitySchema.options) {
      options = quantitySchema.options;
    }

    return (
      <Select
        className="autoComplete-unit-suffix"
        style={{ display: 'inline-block' }}
        value={currentUnit}
        onChange={this.handleUnitChange}
      >
        {options.map((option: any) => (
          <Option value={option.value} key={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    );
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { options: _editorOptions } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;

    const readOnly = targetJsonSchema.readOnly || false;
    const unitJsonSchema = targetJsonSchema.properties['unit'];
    const defaultUnit = this.getDefaultUnit();

    // 从字符串中解析当前数值和单位
    const curQuantityStr = this.getCurQuantityString();
    const { num: curNum, unit: curUnit } = parseQuantityString(
      curQuantityStr,
      defaultUnit,
    );

    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type);
    const autoComplete = targetJsonSchema.autoComplete || false;

    const editorOptions = _editorOptions || {};
    let defaultOptions: any[] = [];
    if (editorOptions.GlobalOptions && isArray(editorOptions.GlobalOptions)) {
      defaultOptions = editorOptions.GlobalOptions;
    }
    const options = targetJsonSchema.options || defaultOptions;

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp ${isNeedTwoCol ? 'two-col-element-warp' : ''}`
        }
        id={nodeKey}
        style={style}
      >
        <div className="element-title" style={titleStyle}>
          <Tooltip
            title={
              pageScreen === 'wideScreen' ? targetJsonSchema.description : ''
            }
            placement="top"
          >
            <span className="title-text" title={targetJsonSchema.title}>
              {targetJsonSchema.title}
              {targetJsonSchema.showKey && (
                <span>（{truncate(jsonKey || '', { length: 15 })}）</span>
              )}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item" style={contentStyle}>
          <div className="form-item-box">
            {autoComplete && (
              <>
                <AutoComplete
                  className="ant-input autoComplete-unit"
                  style={{ display: 'inline-block' }}
                  options={options}
                  disabled={readOnly}
                  allowClear={true}
                  placeholder={
                    unitJsonSchema.placeholder ||
                    targetJsonSchema.placeholder ||
                    `请输入${unitJsonSchema.title}` ||
                    `请输入${targetJsonSchema.title}`
                  }
                  value={curNum || unitJsonSchema.default}
                  onChange={this.handleValueChange}
                />
                {this.getUnitSelect(curUnit)}
              </>
            )}
            {!autoComplete && (
              <InputNumber
                style={{ display: 'inline-block', width: '120px' }}
                addonAfter={this.getUnitSelect(curUnit)}
                disabled={readOnly}
                placeholder={
                  unitJsonSchema.placeholder ||
                  targetJsonSchema.placeholder ||
                  `请输入${unitJsonSchema.title}` ||
                  `请输入${targetJsonSchema.title}`
                }
                value={curNum !== '' ? Number(curNum) : undefined}
                onPressEnter={this.handleInputChange}
                onBlur={this.handleInputChange}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'quantity',
  component: QuantitySchema,
});

export default QuantitySchema;
