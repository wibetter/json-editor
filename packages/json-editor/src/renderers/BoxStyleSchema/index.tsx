import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { Input, InputNumber, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { buildStyle } from '$utils/index';
import { BaseRendererProps } from '$types/index';
import './index.scss';

interface BoxStyleSchemaState {
  layoutStyleLock: boolean;
  renderAction: boolean;
}

class BoxStyleSchema extends React.PureComponent<
  BaseRendererProps,
  BoxStyleSchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);
    this.state = {
      layoutStyleLock: false, // 是否锁住容器数值值的设置，默认为false，设置为true后4个数值同时联动
      renderAction: false, // 用于主动触发render的临时变量
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.updateBoxStyleState = this.updateBoxStyleState.bind(this);
    this.initBoxStyle = this.initBoxStyle.bind(this);
  }

  componentWillMount() {
    this.initBoxStyle();
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    this.initBoxStyle();
  }

  // 记录box-style的数值（无需实时响应）
  layoutStyleObj: any = {
    top: '',
    right: '',
    bottom: '',
    left: '',
    quantity: 'px',
  };

  /** 初始化boxStyle的数值 */
  initBoxStyle = () => {
    const { jsonStore } = this.props;
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const unitJsonSchema = targetJsonSchema.properties['unit'];
    const quantity = curJsonData.quantity; // 获取数值单位
    const unitStr = curJsonData.unit || unitJsonSchema.default; // 获取数值
    // 重置数值
    this.layoutStyleObj = {
      top: '',
      right: '',
      bottom: '',
      left: '',
      quantity: quantity,
    };
    // 设置盒子模型数值
    if (unitStr) {
      const unitArr = unitStr.split(' ');
      if (unitArr.length === 1) {
        if (unitArr[0] && unitArr[0].indexOf(quantity) >= 0) {
          // 表示当前值有单位
          this.layoutStyleObj.top = unitArr[0];
          this.layoutStyleObj.right = unitArr[0];
          this.layoutStyleObj.bottom = unitArr[0];
          this.layoutStyleObj.left = unitArr[0];
        } else if (unitArr[0] === 'auto') {
          this.layoutStyleObj.top = `auto`;
          this.layoutStyleObj.right = `auto`;
          this.layoutStyleObj.bottom = `auto`;
          this.layoutStyleObj.left = `auto`;
        } else {
          this.layoutStyleObj.top = `${unitArr[0]}${quantity}`;
          this.layoutStyleObj.right = `${unitArr[0]}${quantity}`;
          this.layoutStyleObj.bottom = `${unitArr[0]}${quantity}`;
          this.layoutStyleObj.left = `${unitArr[0]}${quantity}`;
        }
      } else {
        this.layoutStyleObj.top = unitArr[0];
        this.layoutStyleObj.right = unitArr[1];
        this.layoutStyleObj.bottom = unitArr[2] || unitArr[0];
        this.layoutStyleObj.left = unitArr[3] || unitArr[1];
      }
    } else if (unitStr === 0) {
      this.layoutStyleObj.top = `${unitStr}${quantity}`;
      this.layoutStyleObj.right = `${unitStr}${quantity}`;
      this.layoutStyleObj.bottom = `${unitStr}${quantity}`;
      this.layoutStyleObj.left = `${unitStr}${quantity}`;
    } else {
      this.layoutStyleObj.top = `auto`;
      this.layoutStyleObj.right = `auto`;
      this.layoutStyleObj.bottom = `auto`;
      this.layoutStyleObj.left = `auto`;
    }
  };

  /** 设置布局容器的盒子模型数值 */
  setLayoutBoxStyle = (
    newVal: any,
    layoutStyleLock: boolean,
    propKey: string,
  ) => {
    if (layoutStyleLock) {
      this.linkLayoutBoxStyle(newVal);
    } else {
      if (newVal === 'auto') {
        this.layoutStyleObj[propKey] = `auto`;
      } else if (newVal) {
        this.layoutStyleObj[propKey] =
          `${newVal}${this.layoutStyleObj.quantity}`;
      } else if (newVal === 0 || newVal === '0') {
        this.layoutStyleObj[propKey] = `0${this.layoutStyleObj.quantity}`;
      } else {
        this.layoutStyleObj[propKey] = `auto`;
      }
      this.updateBoxStyleState();
    }
  };

  /** 布局容器的盒子模型数值联动设值 */
  linkLayoutBoxStyle = (newVal: any) => {
    let curValue = newVal;
    if (newVal === 'auto') {
      curValue = 'auto';
    } else if (newVal === 0) {
      curValue = `0${this.layoutStyleObj.quantity}`;
    } else if (newVal) {
      curValue = `${newVal}${this.layoutStyleObj.quantity}`;
    } else {
      curValue = 'auto';
    }
    this.layoutStyleObj.top = curValue;
    this.layoutStyleObj.right = curValue;
    this.layoutStyleObj.bottom = curValue;
    this.layoutStyleObj.left = curValue;
    this.updateBoxStyleState();
  };

  getStyleValNum = (valStr: any) => {
    if (valStr === 'auto') {
      return '';
    } else if (
      valStr === `0${this.layoutStyleObj.quantity}` ||
      valStr === '0'
    ) {
      return 0;
    } else if (valStr) {
      const pxIndex = valStr.indexOf(this.layoutStyleObj.quantity);
      if (pxIndex > -1) {
        // tslint:disable-next-line:radix
        return parseInt(valStr.substring(0, pxIndex));
      } else {
        // tslint:disable-next-line:radix
        return parseInt(valStr);
      }
    }
    return 0;
  };

  /** 数值变动事件处理器 */
  updateBoxStyleState = () => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { renderAction } = this.state;
    /** 获取布局容器的盒子模型数值 */
    const boxStyleUnit = `${this.layoutStyleObj.top} ${this.layoutStyleObj.right} ${this.layoutStyleObj.bottom} ${this.layoutStyleObj.left}`;
    const curKeyRoute = keyRoute ? `${keyRoute}-unit` : 'unit';
    updateFormValueData(curKeyRoute, boxStyleUnit); // 更新单位数值
    this.setState({
      renderAction: !renderAction,
    });
  };

  render() {
    const { nodeKey, jsonKey, targetJsonSchema } = this.props;
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { renderAction, layoutStyleLock } = this.state;
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

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
        // key={nodeKey}
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
        <div
          className={`content-item layout-box-style-container`}
          style={contentStyle}
        >
          <div className="center-box">
            <Tooltip
              placement="top"
              title={layoutStyleLock ? '点击解锁联动' : '点击联动'}
            >
              <div
                className={layoutStyleLock ? 'lock-icon' : 'lock-icon unlock'}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  this.setState({
                    layoutStyleLock: !layoutStyleLock,
                  });
                }}
              ></div>
            </Tooltip>
          </div>
          <InputNumber
            name="layoutPaddingTop"
            className={`layout-input-number layout-item layout-item-top
            ${
              this.layoutStyleObj.quantity === '%'
                ? 'percent'
                : this.layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(this.layoutStyleObj.top)}
            onPressEnter={(event: React.KeyboardEvent<HTMLInputElement>) => {
              const newVal = (event.target as HTMLInputElement).value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'top');
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              const newVal = event.target.value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'top');
            }}
          />
          <InputNumber
            name="layoutPaddingRight"
            className={`layout-input-number layout-item layout-item-right
            ${
              this.layoutStyleObj.quantity === '%'
                ? 'percent'
                : this.layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(this.layoutStyleObj.right)}
            onPressEnter={(event: React.KeyboardEvent<HTMLInputElement>) => {
              const newVal = (event.target as HTMLInputElement).value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'right');
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              const newVal = event.target.value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'right');
            }}
          />
          <InputNumber
            name="layoutPaddingBottom"
            className={`layout-input-number layout-item layout-item-bottom
            ${
              this.layoutStyleObj.quantity === '%'
                ? 'percent'
                : this.layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(this.layoutStyleObj.bottom)}
            onPressEnter={(event: React.KeyboardEvent<HTMLInputElement>) => {
              const newVal = (event.target as HTMLInputElement).value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'bottom');
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              const newVal = event.target.value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'bottom');
            }}
          />
          <InputNumber
            name="layoutPaddingLeft"
            className={`layout-input-number layout-item layout-item-left
            ${
              this.layoutStyleObj.quantity === '%'
                ? 'percent'
                : this.layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(this.layoutStyleObj.left)}
            onPressEnter={(event: any) => {
              const newVal = event.target.value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'left');
            }}
            onBlur={(event) => {
              const newVal = event.target.value;
              this.setLayoutBoxStyle(newVal, layoutStyleLock, 'left');
            }}
          />
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'box-style',
  component: BoxStyleSchema,
});

export default BoxStyleSchema;
