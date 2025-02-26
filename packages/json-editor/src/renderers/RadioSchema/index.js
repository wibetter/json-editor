import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Radio, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';

class RadioSchema extends React.PureComponent {
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
  handleValueChange = (event) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { value } = event.target;
    updateFormValueData(keyRoute, value); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = this.props;
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const options = targetJsonSchema.options;

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
            : 'mobile-screen-element-warp'
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
            <Radio.Group
              style={{ display: 'inline-block' }}
              onChange={this.handleValueChange}
              defaultValue={curJsonData ?? targetJsonSchema.default}
              disabled={targetJsonSchema.readOnly}
            >
              {options &&
                options.length > 0 &&
                options.map((item, optionIndex) => {
                  const optionLabel = item.label || item.name;
                  const optionNodeKey = `${nodeKey}-radio-${optionLabel}`;
                  return (
                    <Radio value={item.value} key={optionNodeKey}>
                      {item.label}
                    </Radio>
                  );
                })}
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'radio',
  component: RadioSchema,
});

export default RadioSchema;
