import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Input, InputNumber, Tooltip, AutoComplete, Select } from 'antd';
const { Option } = Select;
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';

class QuantitySchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  /** 数值变动事件处理器 */
  handleInputChangeV1 = (event) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { value } = event.target;
    const curKeyRoute = keyRoute ? `${keyRoute}-unit` : 'unit';
    updateFormValueData(curKeyRoute, Number(value)); // 更新单位数值
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.handleValueChange(value);
  };

  handleValueChange = (value) => {
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

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    /** 获取quantity中的数值对象（默认第一个就是数值对象） */
    const unitJsonSchema = targetJsonSchema.properties['unit'];
    const curQuantity = curJsonData.quantity;
    const unit = curQuantity === 'percent' ? '%' : curQuantity;
    const unitSuffix = <span>{unit}</span>;
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type); // 是否需要设置成两栏布局
    const autoComplete = targetJsonSchema.autoComplete || false; // 是否支持可选项
    const options = targetJsonSchema.options || []; // 是否支持可选项

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
                <span>（{truncate(jsonKey, { length: 15 })}）</span>
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
                <Select
                  className="autoComplete-unit-suffix"
                  style={{ display: 'inline-block' }}
                  defaultValue={unit || 'px'}
                >
                  <Option value={unit} key={unit}>
                    {unit}
                  </Option>
                </Select>
              </>
            )}
            {!autoComplete && (
              <InputNumber
                style={{ display: 'inline-block', width: '120px' }}
                addonAfter={unitSuffix}
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
