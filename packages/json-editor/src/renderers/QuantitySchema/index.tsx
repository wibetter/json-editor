import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { InputNumber, Tooltip, AutoComplete, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate, isArray } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';

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

  /** 数值变动事件处理器 */
  handleInputChangeV1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { value } = event.target;
    const curKeyRoute = keyRoute ? `${keyRoute}-unit` : 'unit';
    updateFormValueData(curKeyRoute, Number(value)); // 更新单位数值
  };

  handleInputChange = (event: any) => {
    const { value } = event.target;
    this.handleValueChange(value);
  };

  handleValueChange = (value: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const curKeyRoute = keyRoute ? `${keyRoute}-unit` : 'unit';

    if (this.props.onChange) {
      // 如果有监听数据变动函数则优先触发
      this.props.onChange(value);
    } else {
      updateFormValueData(curKeyRoute, value); // 更新数值
    }
  };

  handleUnitChange = (value: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const curKeyRoute = keyRoute ? `${keyRoute}-quantity` : 'quantity';

    if (this.props.onChange) {
      this.props.onChange(value);
    } else {
      updateFormValueData(curKeyRoute, value);
    }
  };

  // 单位切换
  getUnitSelect = () => {
    const { targetJsonSchema } = this.props;
    const quantitySchema = targetJsonSchema.properties['quantity'];
    let options = [
      {
        label: 'px',
        value: 'px',
      },
    ];
    if (quantitySchema.options) {
      options = quantitySchema.options;
    }

    return (
      <Select
        className="autoComplete-unit-suffix"
        style={{ display: 'inline-block' }}
        defaultValue={quantitySchema.default || 'px'}
        onChange={this.handleUnitChange}
      >
        {options.map((option: any) => {
          return (
            <Option value={option.value} key={option.value}>
              {option.label}
            </Option>
          );
        })}
      </Select>
    );
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { options: _editorOptions, getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    /** 获取quantity中的数值对象（默认第一个就是数值对象） */
    const unitJsonSchema = targetJsonSchema.properties['unit'];
    // const curQuantity = curJsonData.quantity;
    // const unit = curQuantity === 'percent' ? '%' : curQuantity;
    // const unitSuffix = <span>{unit}</span>;
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type); // 是否需要设置成两栏布局
    const autoComplete = targetJsonSchema.autoComplete || false; // 是否支持可选项

    const editorOptions = _editorOptions || {};
    let defaultOptions = [];
    if (editorOptions.GlobalOptions && isArray(editorOptions.GlobalOptions)) {
      defaultOptions = editorOptions.GlobalOptions;
    }
    const options = targetJsonSchema.options || defaultOptions; // 是否支持可选项

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
            : `mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
        }
        // key={nodeKey}
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
                  defaultValue={curJsonData.unit || unitJsonSchema.default}
                  onChange={this.handleValueChange}
                />
                {this.getUnitSelect()}
              </>
            )}
            {!autoComplete && (
              <InputNumber
                style={{ display: 'inline-block', width: '120px' }}
                addonAfter={this.getUnitSelect()}
                disabled={readOnly}
                placeholder={
                  unitJsonSchema.placeholder ||
                  targetJsonSchema.placeholder ||
                  `请输入${unitJsonSchema.title}` ||
                  `请输入${targetJsonSchema.title}`
                }
                defaultValue={curJsonData.unit || unitJsonSchema.default}
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
