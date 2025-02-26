import React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import {
  truncate,
  isArray,
  evalExpression,
  isString,
  isBoolean,
} from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { saveJSONEditorCache, getJSONEditorCache } from '$utils/webCache';
import { buildStyle, hasProperties } from '$utils/index';

class SohuDataSourceSchema extends React.PureComponent {
  static propTypes = {
    isArrayItem: PropTypes.any, // 如果是数组项，title会进行特殊显示
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

  collapseChange(collapseData) {
    const { keyRoute } = this.props;
    // 缓存当前折叠状态
    saveJSONEditorCache(keyRoute, collapseData);
  }

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute, JSONEditorObj } = jsonStore || {};
    const {
      indexRoute,
      jsonKey,
      nodeKey,
      keyRoute,
      targetJsonSchema,
      renderChild,
    } = this.props;

    // 获取前端缓存中的折叠数据
    let collapseData = ['mainConfig'];
    const collapseCacheData = getJSONEditorCache(keyRoute);
    if (collapseCacheData && isArray(collapseCacheData)) {
      collapseData = collapseCacheData;
    }

    let curData = getJSONDataByKeyRoute(keyRoute) || {};
    curData = Object.assign({}, JSONEditorObj, curData);

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
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }`}
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
        <div className="array-schema-box" style={contentStyle}>
          <Collapse
            defaultActiveKey={collapseData}
            expandIconPosition="end"
            bordered={false}
            accordion
            onChange={this.collapseChange}
          >
            {targetJsonSchema.propertyOrder.map((key, index) => {
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
              let childNodeKey = `${nodeKey}-${curType}-${currentJsonKey}`;

              if (
                currentSchemaData.propertyOrder &&
                currentSchemaData.propertyOrder.length > 0
              ) {
                if (
                  hasProperties(currentSchemaData.onShow) &&
                  currentSchemaData.onShow !== '' &&
                  ((isBoolean(currentSchemaData.onShow) &&
                    !currentSchemaData.onShow) ||
                    (isString(currentSchemaData.onShow) &&
                      !evalExpression(currentSchemaData.onShow, curData)))
                ) {
                  return;
                }

                return (
                  <Panel header={currentSchemaData.title} key={currentJsonKey}>
                    {renderChild({
                      parentType: curType,
                      jsonKey: currentJsonKey,
                      indexRoute: currentIndexRoute,
                      keyRoute: currentKeyRoute,
                      nodeKey: childNodeKey,
                      targetJsonSchema: currentSchemaData,
                      isArrayItem: true,
                      schemaStore,
                      jsonStore,
                    })}
                  </Panel>
                );
              }
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'sohu-source',
  component: SohuDataSourceSchema,
});

export default SohuDataSourceSchema;
