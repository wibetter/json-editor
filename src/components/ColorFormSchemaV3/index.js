import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip, message, Popover } from 'antd';
import { SketchPicker } from 'react-color';
import { CloseOutlined } from '@ant-design/icons';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle } from '$utils/index';
import './index.scss';

/**
 * 新版color类型：颜色选择器
 */
class ColorFormSchema extends React.PureComponent {
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
      renderState: false, // 用于主动触发更新的状态数据
      displayColorPicker: false, // 是否展示颜色选择器
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
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
  handleValueChange = (color) => {
    const { rgb } = color; // hex,
    const rgbaVal = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
    const { keyRoute, updateFormValueData } = this.props;
    // updateFormValueData(keyRoute, hex); // 更新数值(#ffffff数据格式)
    updateFormValueData(keyRoute, rgbaVal); // 更新数值: rgba(255,255,255,100)
    // 主动触发更新的状态数据
    this.setState({
      renderState: !this.state.renderState,
    });
  };

  /** color清除事件处理器 */
  deleteColor = () => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, 'initial'); // 更新数值
    message.success('已移除当前设置的颜色值');
    // 主动触发更新的状态数据
    this.setState({
      renderState: !this.state.renderState,
    });
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonSchema,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const { renderState, displayColorPicker } = this.state;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.format); // 是否需要设置成两栏布局

    const SketchPickerContent = (
      <SketchPicker
        className="color-sketch-picker"
        key={`${nodeKey}-SketchPicker`}
        color={curJsonData || targetJsonSchema.default}
        onChange={this.handleValueChange}
      />
    );

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
        }
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonSchema.description} placement="top">
            <span
              className="title-text"
              title={
                (isNeedTwoCol || pageScreen === 'wideScreen') &&
                targetJsonSchema.title.length > 6
                  ? targetJsonSchema.title
                  : ''
              }
            >
              {targetJsonSchema.title}
            </span>
          </Tooltip>
        </div>
        <div className="content-item">
          <div className={`form-item-box render-dom-${renderState}`}>
            <div
              className={`color-btn-wrap color-item-form ${
                displayColorPicker ? 'selected' : ''
              }`}
              onClick={() => {
                this.setState({
                  displayColorPicker: !displayColorPicker,
                });
              }}
            >
              <Popover
                content={SketchPickerContent}
                title="颜色选择器"
                trigger="click"
              >
                <button
                  className="ant-input color-btn"
                  style={{
                    backgroundColor: curJsonData || targetJsonSchema.default,
                  }}
                ></button>
              </Popover>
              <Tooltip title={`点击移除当前颜色值`} placement="top">
                <CloseOutlined
                  className="delete-bgColor-btn"
                  onClick={() => {
                    this.deleteColor();
                  }}
                />
              </Tooltip>
              <span className="arrow"></span>
            </div>
          </div>
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
}))(observer(ColorFormSchema));
