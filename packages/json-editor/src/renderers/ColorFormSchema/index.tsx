import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Tooltip, message, Popover } from 'antd';
// @ts-ignore
import { SketchPicker } from 'react-color';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';
import './index.scss';

interface ColorFormSchemaState {
  renderState: boolean;
  displayColorPicker: boolean;
}
/**
 * 新版color类型：颜色选择器
 */
class ColorFormSchema extends React.PureComponent<
  BaseRendererProps,
  ColorFormSchemaState
> {
  constructor(props: BaseRendererProps) {
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

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  /** 数值变动事件处理器 */
  handleValueChange = (color: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};

    const { rgb } = color; // hex,
    const rgbaVal = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;

    // updateFormValueData && keyRoute && updateFormValueData(keyRoute, hex); // 更新数值(#ffffff数据格式)
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, rgbaVal); // 更新数值: rgba(255,255,255,100)
    // 主动触发更新的状态数据
    this.setState({
      renderState: !this.state.renderState,
    });
  };

  /** color清除事件处理器 */
  deleteColor = () => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, 'initial'); // 更新数值
    message.success('已移除当前设置的颜色值');
    // 主动触发更新的状态数据
    this.setState({
      renderState: !this.state.renderState,
    });
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;
    const { renderState, displayColorPicker } = this.state;
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    // 从jsonData中获取对应的数值
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type); // 是否需要设置成两栏布局

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    const SketchPickerContent = (
      <SketchPicker
        className="color-sketch-picker"
        key={`${nodeKey}-SketchPicker`}
        color={curJsonData ?? targetJsonSchema.default}
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
          <div className={`form-item-box`}>
            <div
              className={`color-btn-wrap color-item-form ${
                displayColorPicker ? 'selected' : ''
              }`}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
                  className={`ant-input color-btn render-dom-${renderState}`}
                  style={{
                    backgroundColor: curJsonData ?? targetJsonSchema.default,
                  }}
                ></button>
              </Popover>
              <Tooltip title={`点击移除当前颜色值`} placement="top">
                <CloseOutlined
                  className="delete-bgColor-btn"
                  onClick={(event: React.MouseEvent) => {
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

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'color',
  component: ColorFormSchema,
});

export default ColorFormSchema;
