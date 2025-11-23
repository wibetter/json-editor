import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { Input, Tooltip, AutoComplete } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate, isArray } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
import { BaseRendererProps } from '$types/index';

class InputFormSchema extends React.PureComponent<BaseRendererProps> {
  constructor(props: BaseRendererProps) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  // 方式1：在class组件中声明静态属性static，且必须是contextType，确保当前组件可以使用全局context中的数据（this.context不为空）
  // static contextType = ThemeContext;

  /** 数值变动事件处理器 */
  handleInputChange = (event: any): void => {
    const { value } = event.target;
    this.handleValueChange(value);
  };

  handleValueChange = (value: any): void => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    if (this.props.onChange) {
      // 如果有监听数据变动函数则优先触发
      this.props.onChange(value);
    } else {
      updateFormValueData(keyRoute, value); // 更新数值
    }
  };

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps): void {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { options: _editorOptions, getJSONDataByKeyRoute } = jsonStore || {};
    const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData = keyRoute && getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    const isRequired: boolean = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
    const autoComplete = targetJsonSchema.autoComplete || false; // 是否支持可选项

    const editorOptions = _editorOptions || {};
    let defaultOptions = [];
    if (editorOptions.GlobalOptions && isArray(editorOptions.GlobalOptions)) {
      defaultOptions = editorOptions.GlobalOptions;
    }
    const options = targetJsonSchema.options || defaultOptions; // 是否支持可选项

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
            {autoComplete && (
              <AutoComplete
                className="ant-input"
                style={{ display: 'inline-block' }}
                options={options}
                disabled={readOnly}
                // required={isRequired}
                allowClear={true}
                placeholder={
                  targetJsonSchema.placeholder ||
                  `请输入${targetJsonSchema.title}`
                }
                defaultValue={curJsonData ?? targetJsonSchema.default}
                onChange={this.handleValueChange}
              />
            )}
            {!autoComplete && (
              <Input
                style={{ display: 'inline-flex' }}
                disabled={readOnly}
                required={isRequired}
                allowClear={true}
                placeholder={
                  targetJsonSchema.placeholder ||
                  `请输入${targetJsonSchema.title}`
                }
                defaultValue={curJsonData ?? targetJsonSchema.default}
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
  type: 'input',
  component: InputFormSchema,
});

export default InputFormSchema;
