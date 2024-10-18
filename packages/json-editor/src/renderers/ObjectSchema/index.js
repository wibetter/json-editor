import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import MappingRender from '$components/MappingRender';
import JsonView from '$renderers/JsonView/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import CodeIcon from '$assets/img/code.svg';
import './index.scss';

class ObjectSchema extends React.PureComponent {
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

  render() {
    const {
      indexRoute,
      nodeKey,
      keyRoute,
      pageScreen,
      targetJsonSchema,
      isArrayItem,
      arrIndex,
      isStructuredSchema,
      getJSONDataByKeyRoute,
      keyRoute2indexRoute,
      updateFormValueData,
    } = this.props;
    const { jsonView, isClosed } = this.state;
    // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
    const isFirstSchema = isStructuredSchema;

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'object-schema-warp wide-screen-element-warp'
            : 'object-schema-warp mobile-screen-element-warp'
        }
        key={nodeKey}
        id={nodeKey}
      >
        {!isFirstSchema && !isArrayItem && (
          <div className="element-title">
            <Tooltip title={targetJsonSchema.description} placement="top">
              <span
                className="title-text"
                title={
                  pageScreen === 'wideScreen' &&
                  targetJsonSchema.title.length > 6
                    ? targetJsonSchema.title
                    : ''
                }
              >
                {targetJsonSchema.title}
              </span>
            </Tooltip>
          </div>
        )}
        <div className="element-title-card-warp content-item">
          {!isFirstSchema && !isArrayItem && (
            <div
              className="element-title"
              onClick={(event) => {
                this.setState({
                  isClosed: !isClosed,
                });
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <span className="title-text">对象配置</span>
              {isClosed ? (
                <RightOutlined className="close-operate-btn" />
              ) : (
                <DownOutlined className="close-operate-btn" />
              )}

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
            </div>
          )}
          <div
            className={`content-item ${
              !isFirstSchema && !isArrayItem ? 'object-content' : ''
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
                const currentSchemaData =
                  targetJsonSchema.properties[currentJsonKey];
                /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                const curType = currentSchemaData.type;
                /** 5. 获取当前元素的id，用于做唯一标识 */
                const childNodeKey = `${nodeKey}-${curType}-${currentJsonKey}`;

                return MappingRender({
                  parentType: curType,
                  jsonKey: currentJsonKey,
                  indexRoute: currentIndexRoute,
                  keyRoute: currentKeyRoute,
                  nodeKey: childNodeKey,
                  targetJsonSchema: currentSchemaData,
                  getJSONDataByKeyRoute,
                  keyRoute2indexRoute,
                  updateFormValueData,
                });
              })}
            {jsonView && <JsonView {...this.props} />}
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
  getInitJsonDataByKeyRoute: stores.JSONEditorStore.getInitJsonDataByKeyRoute,
}))(observer(ObjectSchema));
