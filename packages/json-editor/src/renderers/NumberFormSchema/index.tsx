import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { InputNumber, message, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, hasProperties, buildStyle } from '$utils/index';
import './index.scss';

interface NumberFormSchemaState {
  renderTime: number;
}

class NumberFormSchema extends React.PureComponent<
  BaseRendererProps,
  NumberFormSchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);

    this.state = {
      renderTime: new Date().getTime(),
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
  handleValueChange = (newVal: number | null) => {
    const { keyRoute, jsonStore, targetJsonSchema } = this.props;
    const { updateFormValueData } = jsonStore || {};
    if (newVal && newVal < targetJsonSchema.minimum) {
      message.warning(
        `小于设定的最小数值${targetJsonSchema.minimum}，请重新输入。`,
      );
    } else if (newVal && newVal > targetJsonSchema.maximum) {
      message.warning(
        `超过设定的最大数值${targetJsonSchema.maximum}，请重新输入。`,
      );
    } else {
      updateFormValueData && keyRoute && updateFormValueData(keyRoute, newVal); // 更新数值
    }
  };

  /** 数值加减按钮事件处理器 */
  numberChange = (type: 'plus' | 'minus', curValue: number | undefined) => {
    const { keyRoute } = this.props;
    let curNum = 0;
    if (curValue) {
      curNum = curValue;
    }
    if (type === 'plus') {
      curNum += 1;
    } else if (type === 'minus') {
      curNum -= 1;
    }
    this.handleValueChange(curNum);
    // 更新渲染时间戳，以便number能重新渲染
    this.setState({
      renderTime: new Date().getTime(),
    });
    const curInputDom: any = document.getElementById(`inputNumber-${keyRoute}`);
    if (curInputDom) {
      curInputDom.value = curNum;
      // curInputDom.style.color = "#f00";
    }
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, targetJsonSchema } = this.props;
    const { renderTime } = this.state;
    // 从jsonData中获取对应的数值
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
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

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
        }
        // key={`${nodeKey}-${renderTime}`}
        // id={nodeKey}
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
            <div className="input-number-wrap">
              <div
                className="number-btn minus"
                title="点击减1"
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  this.numberChange(
                    'minus',
                    hasProperties(curJsonData)
                      ? curJsonData
                      : targetJsonSchema.default,
                  );
                }}
              >
                -
              </div>
              <InputNumber
                key={`inputNumber-${renderTime}`}
                id={`inputNumber-${keyRoute}`}
                // ref="inputNumber"
                className="number-cont"
                style={{ display: 'inline-block' }}
                disabled={readOnly}
                required={isRequired}
                placeholder={
                  targetJsonSchema.placeholder ||
                  `请输入${targetJsonSchema.title}`
                }
                min={targetJsonSchema.minimum || 0}
                max={targetJsonSchema.maximum || 1000000}
                defaultValue={
                  hasProperties(curJsonData)
                    ? curJsonData
                    : targetJsonSchema.default
                }
                onChange={this.handleValueChange}
              />
              <div
                className="number-btn plus"
                title="点击加1"
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  this.numberChange(
                    'plus',
                    hasProperties(curJsonData)
                      ? curJsonData
                      : targetJsonSchema.default,
                  );
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'number',
  component: NumberFormSchema,
});

export default NumberFormSchema;
