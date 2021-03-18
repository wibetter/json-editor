import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { InputNumber, Tooltip } from 'antd';
import './index.scss';

// 记录box-style的数值
let layoutStyleObj = {
  top: '',
  right: '',
  bottom: '',
  left: '',
  quantity: 'px',
};

class BoxStyleSchema extends React.PureComponent {
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
      layoutStyleLock: false, // 是否锁住容器数值值的设置，默认为false，设置为true后4个数值同时联动
      renderAction: false, // 用于主动触发render的临时变量
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.updateBoxStyle = this.updateBoxStyle.bind(this);
    this.initBoxStyle = this.initBoxStyle.bind(this);
  }

  componentWillMount() {
    this.initBoxStyle();
  }

  componentWillReceiveProps(nextProps) {
    this.initBoxStyle();
  }

  /** 初始化boxStyle的数值 */
  initBoxStyle = () => {
    const { keyRoute, targetJsonSchema, getJSONDataByKeyRoute } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    /** 获取quantity中的数值对象（默认第一个就是数值对象） */
    const unitJsonKey = targetJsonSchema.propertyOrder[0];
    const unitJsonSchema = targetJsonSchema.properties[unitJsonKey];
    const quantity = curJsonData.quantity; // 获取数值单位
    const unitStr = curJsonData.unit || unitJsonSchema.default; // 获取数值
    // 设置单位值
    layoutStyleObj.quantity = quantity;
    // 设置盒子模型数值
    if (unitStr) {
      const unitArr = unitStr.split(' ');
      if (unitArr.length === 1) {
        if (unitArr[0] && unitArr[0].indexOf(quantity) >= 0) {
          // 表示当前值有单位
          layoutStyleObj.top = unitArr[0];
          layoutStyleObj.right = unitArr[0];
          layoutStyleObj.bottom = unitArr[0];
          layoutStyleObj.left = unitArr[0];
        } else if (unitArr[0]) {
          layoutStyleObj.top = `${unitArr[0]}${quantity}`;
          layoutStyleObj.right = `${unitArr[0]}${quantity}`;
          layoutStyleObj.bottom = `${unitArr[0]}${quantity}`;
          layoutStyleObj.left = `${unitArr[0]}${quantity}`;
        }
      } else {
        layoutStyleObj.top = unitArr[0];
        layoutStyleObj.right = unitArr[1];
        layoutStyleObj.bottom = unitArr[2] || unitArr[0];
        layoutStyleObj.left = unitArr[3] || unitArr[1];
      }
    } else if (unitStr === 0) {
      layoutStyleObj.top = `${unitStr}${quantity}`;
      layoutStyleObj.right = `${unitStr}${quantity}`;
      layoutStyleObj.bottom = `${unitStr}${quantity}`;
      layoutStyleObj.left = `${unitStr}${quantity}`;
    }
  };

  /** 设置布局容器的盒子模型数值 */
  setLayoutBoxStyle = (newVal) => {
    if (newVal || newVal === 0) {
      layoutStyleObj.top = `${newVal}${layoutStyleObj.quantity}`;
      layoutStyleObj.right = `${newVal}${layoutStyleObj.quantity}`;
      layoutStyleObj.bottom = `${newVal}${layoutStyleObj.quantity}`;
      layoutStyleObj.left = `${newVal}${layoutStyleObj.quantity}`;
      this.updateBoxStyle();
    }
  };

  getStyleValNum = (valStr) => {
    if (valStr === `0${layoutStyleObj.quantity}` || valStr === '0') {
      return 0;
    } else if (valStr) {
      const pxIndex = valStr.indexOf(layoutStyleObj.quantity);
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

  /** 获取布局容器的盒子模型数值 */
  getLayoutBoxStyle = () => {
    return `${layoutStyleObj.top} ${layoutStyleObj.right} ${layoutStyleObj.bottom} ${layoutStyleObj.left}`;
  };

  /** 数值变动事件处理器 */
  updateBoxStyle = () => {
    const { keyRoute, updateFormValueData } = this.props;
    const { renderAction } = this.state;
    const boxStyleUnit = this.getLayoutBoxStyle();
    const curKeyRoute = keyRoute ? `${keyRoute}-unit` : 'unit';
    updateFormValueData(curKeyRoute, boxStyleUnit); // 更新单位数值
    this.setState({
      renderAction: !renderAction,
    });
  };

  render() {
    const { nodeKey, targetJsonSchema, pageScreen } = this.props;
    const { renderAction, layoutStyleLock } = this.state;
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp`
        } ${renderAction ? 'render-mark' : ''}`}
        id={nodeKey}
      >
        <div className="element-title">
          <span className="title-text warning-text">
            {readOnly ? '[只读]' : ''}
          </span>
          <Tooltip title={targetJsonSchema.description} placement="top">
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' &&
                targetJsonSchema.title.length > (readOnly ? 4 : 6)
                  ? targetJsonSchema.title
                  : ''
              }
            >
              {targetJsonSchema.title}
            </span>
          </Tooltip>
        </div>
        <div className={`content-item layout-box-style-container`}>
          <div className="center-box">
            <Tooltip
              placement="top"
              title={layoutStyleLock ? '点击解锁联动' : '点击联动'}
            >
              <img
                src={`//storage.360buyimg.com/cdnnpm/jdw-web/icon/${
                  layoutStyleLock ? 'lock' : 'unlock'
                }.png`}
                className="lock-icon"
                onClick={() => {
                  this.setState({
                    layoutStyleLock: !layoutStyleLock,
                  });
                }}
              />
            </Tooltip>
          </div>
          <InputNumber
            name="layoutPaddingTop"
            className={`layout-input-number layout-item layout-item-top
            ${
              layoutStyleObj.quantity === '%'
                ? 'percent'
                : layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(layoutStyleObj.top)}
            onChange={(newVal) => {
              if (newVal === '') return;
              if (layoutStyleLock) {
                this.setLayoutBoxStyle(newVal);
              } else {
                if (newVal) {
                  layoutStyleObj.top = `${newVal}${layoutStyleObj.quantity}`;
                } else {
                  layoutStyleObj.top = `0${layoutStyleObj.quantity}`;
                }
                this.updateBoxStyle();
              }
            }}
          />
          <InputNumber
            name="layoutPaddingRight"
            className={`layout-input-number layout-item layout-item-right
            ${
              layoutStyleObj.quantity === '%'
                ? 'percent'
                : layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(layoutStyleObj.right)}
            onChange={(newVal) => {
              if (newVal === '') return;
              if (layoutStyleLock) {
                this.setLayoutBoxStyle(newVal);
              } else {
                if (newVal) {
                  layoutStyleObj.right = `${newVal}${layoutStyleObj.quantity}`;
                } else {
                  layoutStyleObj.right = `0${layoutStyleObj.quantity}`;
                }
                this.updateBoxStyle();
              }
            }}
          />
          <InputNumber
            name="layoutPaddingBottom"
            className={`layout-input-number layout-item layout-item-bottom
            ${
              layoutStyleObj.quantity === '%'
                ? 'percent'
                : layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(layoutStyleObj.bottom)}
            onChange={(newVal) => {
              if (newVal === '') return;
              if (layoutStyleLock) {
                this.setLayoutBoxStyle(newVal);
              } else {
                if (newVal) {
                  layoutStyleObj.bottom = `${newVal}${layoutStyleObj.quantity}`;
                } else {
                  layoutStyleObj.bottom = `0${layoutStyleObj.quantity}`;
                }
                this.updateBoxStyle();
              }
            }}
          />
          <InputNumber
            name="layoutPaddingLeft"
            className={`layout-input-number layout-item layout-item-left
            ${
              layoutStyleObj.quantity === '%'
                ? 'percent'
                : layoutStyleObj.quantity
            }-quantity-box`}
            size="small"
            value={this.getStyleValNum(layoutStyleObj.left)}
            onChange={(newVal) => {
              if (newVal === '') return;
              if (layoutStyleLock) {
                this.setLayoutBoxStyle(newVal);
              } else {
                if (newVal) {
                  layoutStyleObj.left = `${newVal}${layoutStyleObj.quantity}`;
                } else {
                  layoutStyleObj.left = `0${layoutStyleObj.quantity}`;
                }
                this.updateBoxStyle();
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(BoxStyleSchema));
