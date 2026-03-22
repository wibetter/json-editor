import * as React from 'react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Rate, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';
import './index.scss';

class RateFormSchema extends React.PureComponent<BaseRendererProps> {
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

  handleValueChange = (value: number) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, value);
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;

    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type);

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    const readOnly = targetJsonSchema.readOnly || false;
    const isRequired = targetJsonSchema.isRequired || false;
    const count = targetJsonSchema.count || 5;
    const allowHalf = targetJsonSchema.allowHalf || false;
    const allowClear =
      targetJsonSchema.allowClear !== undefined
        ? targetJsonSchema.allowClear
        : true;
    const size = targetJsonSchema.size || 'default';

    // 将逗号分隔的字符串转为 tooltips 数组
    const rawTooltips = targetJsonSchema.tooltips;
    const tooltips =
      rawTooltips && typeof rawTooltips === 'string'
        ? rawTooltips.split(',').map((s: string) => s.trim())
        : undefined;

    const currentValue =
      curJsonData !== undefined && curJsonData !== null
        ? curJsonData
        : targetJsonSchema.default;

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'rate-form-item wide-screen-element-warp'
            : `rate-form-item mobile-screen-element-warp ${
                isNeedTwoCol ? 'two-col-element-warp' : ''
              }`
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
              {isRequired && <span className="required-mark">*</span>}
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
          <div className="form-item-box rate-form-box">
            <Rate
              count={count}
              allowHalf={allowHalf}
              allowClear={allowClear}
              disabled={readOnly}
              value={currentValue}
              tooltips={tooltips}
              className={`rate-input rate-size-${size}`}
              onChange={this.handleValueChange}
            />
            {currentValue !== undefined && currentValue !== null && (
              <span className="rate-value-text">{currentValue} 分</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

registerRenderer({
  type: 'input-rate',
  component: RateFormSchema,
});

export default RateFormSchema;
