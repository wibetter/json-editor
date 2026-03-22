import * as React from 'react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Radio, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
import './index.scss';

/**
 * button-group-select 按钮组单选类型
 * 支持平铺（水平）模式和垂直模式
 */
class ButtonGroupSelectSchema extends React.PureComponent<BaseRendererProps> {
  constructor(props: BaseRendererProps) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentWillMount() {
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  handleValueChange = (event: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    const { value } = event.target;
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, value);
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = this.props;

    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const options = targetJsonSchema.options;
    const vertical = targetJsonSchema.vertical || false;
    const defaultActiveFirstOption =
      targetJsonSchema.defaultActiveFirstOption || false;

    let defaultValue = curJsonData ?? targetJsonSchema.default;
    if (
      defaultActiveFirstOption &&
      (defaultValue === undefined ||
        defaultValue === null ||
        defaultValue === '') &&
      options &&
      options.length > 0
    ) {
      defaultValue = options[0].value;
    }

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
          <div
            className={`form-item-box button-group-select-box${
              vertical ? ' vertical' : ''
            }`}
          >
            <Radio.Group
              onChange={this.handleValueChange}
              defaultValue={defaultValue}
              disabled={targetJsonSchema.readOnly}
            >
              {options &&
                options.length > 0 &&
                options.map((item: any, optionIndex: number) => {
                  const optionLabel = item.label || item.name;
                  const optionNodeKey = `btn-group-${optionIndex}-${optionLabel}`;
                  return (
                    <Radio.Button value={item.value} key={optionNodeKey}>
                      {optionLabel}
                    </Radio.Button>
                  );
                })}
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  }
}

registerRenderer({
  type: 'button-group-select',
  component: ButtonGroupSelectSchema,
});

export default ButtonGroupSelectSchema;
