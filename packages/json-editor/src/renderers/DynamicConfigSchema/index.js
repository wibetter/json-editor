import React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { objClone, getWrapOptions } from '$utils/index';
import MappingRender from '$components/MappingRender';
import JsonView from '$components/JsonView/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
import { saveJSONEditorCache, getJSONEditorCache } from '$utils/webCache';
import CodeIcon from '$assets/img/code.svg';

class DynamicConfigSchema extends React.PureComponent {
  static propTypes = {
    isArrayItem: PropTypes.any, // 如果是数组项，title会进行特殊显示
    arrIndex: PropTypes.any, // 当前数组项
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.any,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    isStructuredSchema: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      jsonView: false, // 是否显示code模式
      isClosed: false, // 是否为关闭状态，默认是开启状态
    };

    this.collapseChange = this.collapseChange.bind(this);
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

  collapseChange(event) {
    const { keyRoute } = this.props;
    const { isClosed } = this.state;

    this.setState({
      isClosed: !isClosed,
    });
    event.preventDefault();
    event.stopPropagation();

    // 缓存当前折叠状态
    saveJSONEditorCache(keyRoute, !isClosed);
  }

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { options: _options, getJSONDataByKeyRoute } = jsonStore || {};
    const {
      indexRoute,
      jsonKey,
      nodeKey,
      keyRoute,
      targetJsonSchema,
      isArrayItem,
      isStructuredSchema,
    } = this.props;
    const { jsonView, isClosed: _isClosed } = this.state;
    const options = _options || {};
    // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
    const isStructured = isStructuredSchema;
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true; // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
    const curNodeKey = `${nodeKey}-${curJsonData.type}-${curJsonData.valueType}`;

    // 内容Meta数据
    const metaContentKeyList = options.metaContentKeyList || [];
    const globalMetaConfig = options.globalMetaConfig || [];

    // 获取前端缓存中的折叠数据
    let isClosed = _isClosed;
    const collapseCacheData = getJSONEditorCache(keyRoute);
    if (collapseCacheData !== undefined) {
      isClosed = collapseCacheData;
    }

    const boxTitle = targetJsonSchema.boxTitle ?? '动态配置';

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
        className={`${
          pageScreen === 'wideScreen'
            ? 'object-schema-warp wide-screen-element-warp'
            : 'object-schema-warp mobile-screen-element-warp'
        }`}
        // key={curNodeKey}
        id={nodeKey}
        style={style}
      >
        {!isStructured && !isArrayItem && (
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
        )}
        <div
          className="element-title-card-warp content-item"
          style={contentStyle}
        >
          {!isStructured && !isArrayItem && (
            <div className="element-title" onClick={this.collapseChange}>
              <span className="title-text">{boxTitle}&nbsp;</span>
              {isClosed ? (
                <RightOutlined className="close-operate-btn" />
              ) : (
                <DownOutlined className="close-operate-btn" />
              )}

              {showCodeViewBtn && (
                <div
                  className="display-source-btn"
                  onClick={(event) => {
                    this.setState({
                      jsonView: !jsonView,
                    });
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                >
                  <Tooltip title={jsonView ? '关闭源码模式' : '开启源码模式'}>
                    <CodeIcon
                      className={jsonView ? 'info-icon active' : 'info-icon'}
                    />
                  </Tooltip>
                </div>
              )}
            </div>
          )}
          <div
            className={`content-item ${
              !isStructured && !isArrayItem ? 'object-content' : ''
            } ${jsonView ? 'json-view-array' : ''} ${isClosed ? 'closed' : ''}`}
          >
            {!jsonView &&
              targetJsonSchema.propertyOrder &&
              targetJsonSchema.propertyOrder.map((key, index) => {
                /** 1. 获取当前元素的路径值 */
                const currentIndexRoute = indexRoute
                  ? `${indexRoute}-${index}`
                  : `${index}`;
                const currentKeyRoute = keyRoute
                  ? `${keyRoute}-${key}`
                  : `${key}`; // key路径值，后续用于从jsonData中提取当前元素的数值
                /** 2. 获取当前元素的key值 */
                const currentJsonKey = key;
                /** 3. 获取当前元素的json结构对象 */
                const currentSchemaData = toJS(
                  targetJsonSchema.properties[currentJsonKey],
                );
                /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                const curType = currentSchemaData.type;
                /** 5. 获取当前元素的id，用于做唯一标识 */
                const childNodeKey = `${nodeKey}-${curType}-${currentJsonKey}`;

                // 补充动态配置类型相关显隐逻辑【定制逻辑】
                if (
                  currentJsonKey === 'valueType' &&
                  (curJsonData.type === 'ContentStaticConfig' ||
                    curJsonData.type === 'ResourceCenter')
                ) {
                  const valueSchema = targetJsonSchema.properties['value'];
                  if (
                    !['select', 'radio', 'checkboxes'].includes(
                      valueSchema.type,
                    )
                  ) {
                    // 当value选择input、select、checkboxes，才可设置「配置方式」，其他默认都是 "填写"
                    currentSchemaData.default = 'string';
                    // currentSchemaData.readOnly = true;
                    // currentSchemaData.description = '当前数值没有可选项，不支持设置。';
                  }
                }
                if (currentJsonKey === 'range') {
                  if (
                    (!currentSchemaData.options ||
                      currentSchemaData.options.length === 0) &&
                    (curJsonData.type === 'ContentStaticConfig' ||
                      curJsonData.type === 'ResourceCenter')
                  ) {
                    // 如果 range 没有可选项则从 value 中获取可选项
                    const valueSchema = targetJsonSchema.properties['value'];
                    if (
                      ['select', 'radio', 'checkboxes'].includes(
                        valueSchema.type,
                      ) &&
                      valueSchema.options &&
                      valueSchema.options.length > 0
                    ) {
                      // range 和 value 复用 options
                      currentSchemaData.options = getWrapOptions(
                        valueSchema.options,
                      );
                    }
                  }
                }
                if (
                  currentJsonKey === 'value' &&
                  curJsonData.type === 'Content'
                ) {
                  // 内容Meta数据
                  currentSchemaData.type = 'select'; // 改用 下拉列表
                  currentSchemaData.options = objClone(metaContentKeyList);
                } else if (
                  currentJsonKey === 'value' &&
                  curJsonData.type === 'RuntimeConst'
                ) {
                  // 全局配置数据
                  currentSchemaData.type = 'cascader'; // 改用 级联选择
                  currentSchemaData.options = objClone(globalMetaConfig);
                }

                return MappingRender({
                  parentType: curType,
                  jsonKey: currentJsonKey,
                  indexRoute: currentIndexRoute,
                  keyRoute: currentKeyRoute,
                  nodeKey: childNodeKey,
                  targetJsonSchema: currentSchemaData,
                  schemaStore,
                  jsonStore,
                });
              })}
            {jsonView && <JsonView {...this.props} />}
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'dynamic-array',
  component: DynamicConfigSchema,
});

registerRenderer({
  type: 'dynamic-object',
  component: DynamicConfigSchema,
});
registerRenderer({
  type: 'dynamic-config',
  component: DynamicConfigSchema,
});

export default DynamicConfigSchema;
