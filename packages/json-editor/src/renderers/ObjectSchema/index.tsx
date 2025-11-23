import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import JsonView from '$components/JsonView/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import { saveJSONEditorCache, getJSONEditorCache } from '$utils/webCache';
// @ts-ignore
import CodeIcon from '$assets/img/code.svg';
import { buildStyle } from '$utils/index';
import './index.scss';

interface ObjectSchemaState {
  jsonView: boolean;
  isClosed: boolean;
}

class ObjectSchema extends React.PureComponent<
  BaseRendererProps,
  ObjectSchemaState
> {
  constructor(props: BaseRendererProps) {
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

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  collapseChange(event: React.MouseEvent) {
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
    const { schemaStore } = this.props;
    const { pageScreen } = schemaStore || {};

    const {
      indexRoute,
      jsonKey,
      nodeKey,
      keyRoute,
      targetJsonSchema,
      isArrayItem,
      isStructuredSchema,
      renderChild,
    } = this.props;
    const { jsonView, isClosed: _isClosed } = this.state;
    // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
    const isStructured = isStructuredSchema;
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true;

    // 获取前端缓存中的折叠数据
    let isClosed = _isClosed;
    const collapseCacheData = getJSONEditorCache(keyRoute);
    if (collapseCacheData !== undefined) {
      isClosed = collapseCacheData;
    }

    const boxTitle = targetJsonSchema.boxTitle ?? '对象配置';

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
            ? 'object-schema-warp wide-screen-element-warp'
            : 'object-schema-warp mobile-screen-element-warp'
        }
        // key={nodeKey}
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
                  onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
              targetJsonSchema.propertyOrder.map(
                (key: string, index: number) => {
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
                  const currentSchemaData =
                    targetJsonSchema.properties[currentJsonKey];
                  /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                  const curType = currentSchemaData.type;
                  /** 5. 获取当前元素的id，用于做唯一标识 */
                  const childNodeKey = `${nodeKey}-${curType}-${currentJsonKey}`;

                  return renderChild({
                    ...this.props,
                    parentType: curType,
                    jsonKey: currentJsonKey,
                    indexRoute: currentIndexRoute,
                    keyRoute: currentKeyRoute,
                    nodeKey: childNodeKey,
                    targetJsonSchema: currentSchemaData,
                  });
                },
              )}
            {jsonView && <JsonView {...this.props} maxLines={10} />}
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'object',
  component: ObjectSchema,
});

export default ObjectSchema;
