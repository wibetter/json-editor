import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { truncate } from '@wibetter/json-utils';
import { Cascader, Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import { InfoCircleOutlined } from '@ant-design/icons';
import { isNeedTwoColWarpStyle, buildStyle } from '$utils/index';
import './index.scss';

/**
 * Cascader 级联选择
 * 文档地址：https://ant-design.antgroup.com/components/cascader-cn
 */

class CascaderSchema extends React.PureComponent<BaseRendererProps> {
  constructor(props: BaseRendererProps) {
    super(props);
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
  handleValueChange = (value: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, value); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = this.props;
    // 从jsonData中获取对应的数值
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute);
    const options = targetJsonSchema.options || [];
    const isNeedTwoCol = isNeedTwoColWarpStyle(targetJsonSchema.type); // 是否需要设置成两栏布局
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

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
          <div className="form-item-box select-box">
            <Cascader
              showSearch={targetJsonSchema.showSearch ?? true}
              style={{ display: 'inline-block', minWidth: '120px' }}
              options={options}
              onChange={this.handleValueChange}
              defaultValue={curJsonData ?? targetJsonSchema.default}
              disabled={targetJsonSchema.readOnly}
              allowClear={targetJsonSchema.allowClear ?? true}
              multiple={targetJsonSchema.multiple ?? false}
            />
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'cascader',
  component: CascaderSchema,
});

export default CascaderSchema;
