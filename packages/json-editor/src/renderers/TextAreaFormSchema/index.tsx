import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { truncate } from '@wibetter/json-utils';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
const { TextArea } = Input;
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';

class TextAreaFormSchema extends React.PureComponent<Props {
interface Props extends BaseRendererProps {}
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
    const { updateFormValueData } = jsonStore || {}
    const { value } = event.target;
    updateFormValueData(keyRoute, value); // 更新数值
  }

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {}
    const { getJSONDataByKeyRoute } = jsonStore || {}
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {}
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {}
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {}

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp container-warp'
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
            <TextArea
              style={{ display: 'inline-block' }}
              rows={4}
              disabled={readOnly}
              required={isRequired}
              placeholder={
                targetJsonSchema.placeholder ||
                `请输入${targetJsonSchema.title}`
              }
              defaultValue={curJsonData ?? targetJsonSchema.default}
              onPressEnter={this.handleValueChange}
              onBlur={this.handleValueChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'textarea',
  component: TextAreaFormSchema,
});

export default TextAreaFormSchema;
