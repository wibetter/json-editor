import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { InputNumber, message, Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, exitPropertie } from '$utils/index';
import './index.scss';

class NumberFormSchema extends React.PureComponent {
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
      renderTime: new Date().getTime(),
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
  handleValueChange = (newVal) => {
    const { keyRoute, targetJsonSchema, updateFormValueData } = this.props;
    if (newVal < targetJsonSchema.minimum) {
      message.warning(
        `小于设定的最小数值${targetJsonSchema.minimum}，请重新输入。`,
      );
    } else if (newVal > targetJsonSchema.maximum) {
      message.warning(
        `超过设定的最大数值${targetJsonSchema.maximum}，请重新输入。`,
      );
    } else {
      updateFormValueData(keyRoute, newVal); // 更新数值
      // 更新渲染时间戳，以便number能重新渲染
      this.setState({
        renderTime: new Date().getTime(),
      });
    }
  };

  /** 数值加减按钮事件处理器 */
  numberChange = (type, curValue) => {
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
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonSchema,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const { renderTime } = this.state;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.format); // 是否需要设置成两栏布局

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : `mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
        }
        key={`${nodeKey}-${renderTime}`}
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
                (isNeedTwoCol || pageScreen === 'wideScreen') &&
                targetJsonSchema.title.length > (readOnly ? 4 : 6)
                  ? targetJsonSchema.title
                  : ''
              }
            >
              {targetJsonSchema.title}
            </span>
          </Tooltip>
        </div>
        <div className="content-item">
          <div className="form-item-box">
            <div className="input-number-wrap">
              <div
                className="number-btn minus"
                title="点击减1"
                onClick={() => {
                  this.numberChange(
                    'minus',
                    exitPropertie(curJsonData)
                      ? curJsonData
                      : targetJsonSchema.default,
                  );
                }}
              >
                -
              </div>
              <InputNumber
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
                  exitPropertie(curJsonData)
                    ? curJsonData
                    : targetJsonSchema.default
                }
                onChange={this.handleValueChange}
              />
              <div
                className="number-btn plus"
                title="点击加1"
                onClick={() => {
                  this.numberChange(
                    'plus',
                    exitPropertie(curJsonData)
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

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(NumberFormSchema));
