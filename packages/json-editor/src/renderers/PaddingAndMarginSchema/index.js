import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, InputNumber, Tooltip, Popover, Select } from 'antd';
const { Option } = Select;
import { truncate, isNumber } from '@wibetter/json-utils';
import { buildStyle } from '$utils/index';
import './index.scss';

class PaddingAndMarginSchema extends React.PureComponent {
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
    this.state = {
      type: 'all', // 设置类型，支持 自定义设值（custom）、统一设值（all）
      renderAction: false, // 用于主动触发render的临时变量
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.updateBoxStyleState = this.updateBoxStyleState.bind(this);
    this.initBoxStyle = this.initBoxStyle.bind(this);
    this.getStyleValText = this.getStyleValText.bind(this);
    this.getSelectAfter = this.getSelectAfter.bind(this);
    this.setLayoutBoxStyle = this.setLayoutBoxStyle.bind(this);
    this.linkLayoutBoxStyle = this.linkLayoutBoxStyle.bind(this);
    this.getSelectAfter = this.getSelectAfter.bind(this);
    this.quantityChange = this.quantityChange.bind(this);
  }

  componentWillMount() {
    this.initBoxStyle();
  }

  componentWillReceiveProps(nextProps) {
    this.initBoxStyle();
  }

  // 记录box-style的数值（无需实时响应）
  boxStyle = {
    margin: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    padding: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    quantity: 'px',
  };

  /** 初始化boxStyle的数值 */
  initBoxStyle = () => {
    const { jsonStore } = this.props;
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const marginSchema = targetJsonSchema.properties['margin'];
    const paddingSchema = targetJsonSchema.properties['padding'];
    const quantitySchema = targetJsonSchema.properties['quantity'];
    const quantity = curJsonData.quantity || quantitySchema.default; // 获取数值单位
    let marginValue = curJsonData.margin || marginSchema.default;
    let paddingValue = curJsonData.padding || paddingSchema.default;
    marginValue = isNumber(marginValue)
      ? marginValue.toString()
      : marginValue || 'auto';
    paddingValue = isNumber(paddingValue)
      ? paddingValue.toString()
      : paddingValue || 'auto';

    // 重置数值
    this.boxStyle.quantity = quantity;

    const marginValueArr = marginValue.split(' ');
    this.boxStyle.margin.top = this.getStyleValText(marginValueArr[0]);
    this.boxStyle.margin.right = this.getStyleValText(
      marginValueArr[1],
      paddingValue,
    );
    this.boxStyle.margin.bottom = this.getStyleValText(
      marginValueArr[2] || marginValueArr[0],
    );
    this.boxStyle.margin.left = this.getStyleValText(
      marginValueArr[3] || marginValueArr[1],
      paddingValue,
    );

    const paddingValueArr = paddingValue.split(' ');
    this.boxStyle.padding.top = this.getStyleValText(paddingValueArr[0]);
    this.boxStyle.padding.right = this.getStyleValText(
      paddingValueArr[1],
      paddingValue,
    );
    this.boxStyle.padding.bottom = this.getStyleValText(
      paddingValueArr[2] || paddingValueArr[0],
    );
    this.boxStyle.padding.left = this.getStyleValText(
      paddingValueArr[3] || paddingValueArr[1],
      paddingValue,
    );
  };

  getStyleValText = (valStr, defaultValue) => {
    let curValue = 'auto';
    if (valStr === 'auto' || valStr === 0 || valStr === '' || valStr === '0') {
      curValue = valStr;
    } else if (/^\$/.test(valStr)) {
      // 识别特殊字符串数值: 保留以 $ 开头的数值
      curValue = valStr;
    } else if (valStr) {
      curValue = parseInt(valStr);
      curValue = isNumber(curValue) ? curValue : 'auto';
    } else if (defaultValue !== undefined) {
      curValue = defaultValue;
    }
    return curValue;
  };

  getStyleVal = (valStr) => {
    let curValue = '';
    if (valStr === 'auto' || valStr === 0) {
      curValue = valStr;
    } else if (/^\$/.test(valStr)) {
      // 识别特殊字符串数值: 保留以 $ 开头的数值
      return valStr;
    } else if (valStr === '') {
      curValue = 'auto';
    } else if (valStr) {
      curValue = parseInt(valStr);
      curValue = isNumber(curValue) ? curValue : 'auto';
    }
    if (curValue === 'auto' || curValue === 0) {
      return curValue;
    }
    return `${curValue}${this.boxStyle.quantity}`;
  };

  /** 设置布局容器的盒子模型数值 */
  setLayoutBoxStyle = (newVal, layoutStyleLock, styleKey, propKey) => {
    if (layoutStyleLock) {
      this.linkLayoutBoxStyle(newVal, styleKey);
    } else {
      const curValue = this.getStyleValText(newVal);
      if (curValue !== undefined) {
        this.boxStyle[styleKey][propKey] = curValue;
      } else {
        this.boxStyle[styleKey][propKey] = '';
      }
      this.updateBoxStyleState();
    }
  };

  /** 布局容器的盒子模型数值联动设值 */
  linkLayoutBoxStyle = (newVal, styleKey) => {
    const curValue = this.getStyleValText(newVal);

    if (curValue !== undefined) {
      this.boxStyle[styleKey]['top'] = curValue;
      this.boxStyle[styleKey]['right'] = curValue;
      this.boxStyle[styleKey]['bottom'] = curValue;
      this.boxStyle[styleKey]['left'] = curValue;
    } else {
      this.boxStyle[styleKey]['top'] = '';
      this.boxStyle[styleKey]['right'] = '';
      this.boxStyle[styleKey]['bottom'] = '';
      this.boxStyle[styleKey]['left'] = '';
    }

    this.updateBoxStyleState();
  };

  /** 数值变动事件处理器 */
  updateBoxStyleState = () => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { renderAction } = this.state;
    /** 获取布局容器的盒子模型数值 */
    const curBoxValue = {
      margin: this.getMarginValue(),
      padding: this.getPaddingValue(),
      quantity: this.boxStyle.quantity,
    };
    updateFormValueData(keyRoute, curBoxValue); // 更新单位数值
    this.setState({
      renderAction: !renderAction,
    });
  };

  getSelectAfter = (curJsonData) => {
    const { targetJsonSchema } = this.props;
    const quantitySchema = targetJsonSchema.properties['quantity'];
    const quantity = curJsonData.quantity || quantitySchema.default;

    /*
    // 暂时不支持单位切换
    const selectAfter = (
      <Select defaultValue={quantity} onChange={this.quantityChange}>
        {quantitySchema.options &&
          quantitySchema.options.length > 0 &&
          quantitySchema.options.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
      </Select>
    );
    */
    const selectAfter = <span>{quantity}</span>;
    return selectAfter;
  };

  quantityChange = (newVal) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const curBoxValue = {
      margin: this.getMarginValue(),
      padding: this.getPaddingValue(),
      quantity: newVal,
    };
    updateFormValueData(keyRoute, curBoxValue);
  };

  setType = (newVal) => {
    this.setState({
      type: newVal,
    });
  };

  getMarginValue = () => {
    return `${this.getStyleVal(this.boxStyle.margin.top)} ${this.getStyleVal(this.boxStyle.margin.right)} ${this.getStyleVal(this.boxStyle.margin.bottom)} ${this.getStyleVal(this.boxStyle.margin.left)}`;
  };

  getPaddingValue = () => {
    return `${this.getStyleVal(this.boxStyle.padding.top)} ${this.getStyleVal(this.boxStyle.padding.right)} ${this.getStyleVal(this.boxStyle.padding.bottom)} ${this.getStyleVal(this.boxStyle.padding.left)}`;
  };

  render() {
    const { nodeKey, jsonKey, targetJsonSchema, keyRoute } = this.props;
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { renderAction, type } = this.state;
    // const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

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
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp`
        } ${renderAction ? 'render-mark' : ''}`}
        id={nodeKey}
        key={nodeKey}
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
        <div
          className={`content-item Style-PaddingAndMargin`}
          style={contentStyle}
        >
          <div className="Style-PaddingAndMargin-inner">
            <div className="Style-PaddingAndMargin-label Style-PaddingAndMargin-label--custom">
              <div
                className={`
                  Style-PaddingAndMargin-label-all
                  ${type === 'all' ? 'Style-PaddingAndMargin-label-all--active' : ''}`}
                onClick={() => this.setType('all')}
              ></div>
              <div
                className={`
                Style-PaddingAndMargin-label-custom
                ${type === 'custom' ? 'Style-PaddingAndMargin-label-custom--active' : ''}`}
                onClick={() => this.setType('custom')}
              >
                <div></div>
                <div></div>
              </div>
            </div>
            {type === 'all' && (
              <>
                <div className="Style-PaddingAndMargin-input">
                  <Input
                    name="layoutMargin"
                    addonAfter={this.getSelectAfter(curJsonData)}
                    className="layout-item-margin"
                    size="small"
                    defaultValue={this.boxStyle['margin'].top}
                    onChange={(event) => {
                      const newVal = event.target.value;
                      this.setLayoutBoxStyle(newVal, true, 'margin');
                    }}
                  />
                  <div className="Style-PaddingAndMargin-input-label">
                    外边距
                  </div>
                </div>
                <div className="Style-PaddingAndMargin-input">
                  <Input
                    name="layoutPadding"
                    addonAfter={this.getSelectAfter(curJsonData)}
                    className="layout-item-padding"
                    size="small"
                    defaultValue={this.boxStyle['padding'].top}
                    onChange={(event) => {
                      const newVal = event.target.value;
                      this.setLayoutBoxStyle(newVal, true, 'padding');
                    }}
                  />
                  <div className="Style-PaddingAndMargin-input-label">
                    内边距
                  </div>
                </div>
              </>
            )}
          </div>
          {type !== 'all' && (
            <div className="Style-PaddingAndMargin-custom Style-PaddingAndMargin-custom--padding Style-PaddingAndMargin-custom--margin">
              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutPaddingTop"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-padding"
                      size="small"
                      defaultValue={this.boxStyle['padding'].top}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(newVal, false, 'padding', 'top');
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-paddingTop">
                  <div>
                    {this.getStyleVal(this.boxStyle['padding'].top) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutPaddingTop"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-padding"
                      size="small"
                      defaultValue={this.boxStyle['padding'].right}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(
                          newVal,
                          false,
                          'padding',
                          'right',
                        );
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-paddingRight">
                  <div>
                    {this.getStyleVal(this.boxStyle['padding'].right) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutPaddingBottom"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-padding"
                      size="small"
                      defaultValue={this.boxStyle['padding'].bottom}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(
                          newVal,
                          false,
                          'padding',
                          'bottom',
                        );
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-paddingBottom">
                  <div>
                    {this.getStyleVal(this.boxStyle['padding'].bottom) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutPaddingLeft"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-padding"
                      size="small"
                      defaultValue={this.boxStyle['padding'].left}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(
                          newVal,
                          false,
                          'padding',
                          'left',
                        );
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-paddingLeft">
                  <div>
                    {this.getStyleVal(this.boxStyle['padding'].left) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutMarginTop"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-margin"
                      size="small"
                      defaultValue={this.boxStyle['margin'].top}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(newVal, false, 'margin', 'top');
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-marginTop">
                  <div>
                    {this.getStyleVal(this.boxStyle['margin'].top) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutMarginRight"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-margin"
                      size="small"
                      defaultValue={this.boxStyle['margin'].right}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(
                          newVal,
                          false,
                          'margin',
                          'right',
                        );
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-marginRight">
                  <div>
                    {this.getStyleVal(this.boxStyle['margin'].right) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutMarginBottom"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-margin"
                      size="small"
                      defaultValue={this.boxStyle['margin'].bottom}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(
                          newVal,
                          false,
                          'margin',
                          'bottom',
                        );
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-marginBottom">
                  <div>
                    {this.getStyleVal(this.boxStyle['margin'].bottom) || '-'}
                  </div>
                </div>
              </Popover>

              <Popover
                content={() => {
                  return (
                    <Input
                      name="layoutMarginLeft"
                      addonAfter={this.getSelectAfter(curJsonData)}
                      className="layout-item-margin"
                      size="small"
                      defaultValue={this.boxStyle['margin'].left}
                      onChange={(event) => {
                        const newVal = event.target.value;
                        this.setLayoutBoxStyle(newVal, false, 'margin', 'left');
                      }}
                    />
                  );
                }}
                title=""
              >
                <div className="Style-PaddingAndMargin-custom-marginLeft">
                  <div>
                    {this.getStyleVal(this.boxStyle['margin'].left) || '-'}
                  </div>
                </div>
              </Popover>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'padding-margin',
  component: PaddingAndMarginSchema,
});

export default PaddingAndMarginSchema;
