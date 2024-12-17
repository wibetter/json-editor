import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { objClone } from '$utils/index';
import MappingRender from '$components/MappingRender';
import JsonView from '$renderers/JsonView/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import CodeIcon from '$assets/img/code.svg';

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
      jsonKey,
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
    const options = this.props.options || {};
    // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
    const isStructured = isStructuredSchema;
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true; // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const curNodeKey = `${nodeKey}-${curJsonData.type}-${curJsonData.valueType}`;

    // 内容Meta数据
    const metaContentKeyList = options.metaContentKeyList || [];
    const globalMetaConfig = options.globalMetaConfig || [];

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'object-schema-warp wide-screen-element-warp'
            : 'object-schema-warp mobile-screen-element-warp'
        }`}
        key={curNodeKey}
        id={nodeKey}
      >
        {!isStructured && !isArrayItem && (
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
                {targetJsonSchema.showKey && (
                  <span>（{truncate(jsonKey, { length: 15 })}）</span>
                )}
              </span>
            </Tooltip>
          </div>
        )}
        <div className="element-title-card-warp content-item">
          {!isStructured && !isArrayItem && (
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
              <span className="title-text">动态配置</span>
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

                let visibleOn = [
                  'description',
                  'valueType',
                  'range',
                  'value',
                ].includes(currentJsonKey)
                  ? false
                  : true; // 是否显示当前元素

                // 补充动态配置类型相关显隐逻辑【定制逻辑】
                if (
                  (currentJsonKey === 'description' ||
                    currentJsonKey === 'valueType') &&
                  (curJsonData.type === 'ContentStaticConfig' ||
                    curJsonData.type === 'ResourceCenter')
                ) {
                  // 资源中心配置、mp后台配置 时显示 description（属性名称）、valueType（配置方式）配置项
                  visibleOn = true;
                  const valueSchema = targetJsonSchema.properties['value'];
                  if (
                    currentJsonKey === 'valueType' &&
                    !['select', 'radio', 'checkboxes'].includes(
                      valueSchema.type,
                    )
                  ) {
                    // 当value选择input、select、checkboxes，才可设置「配置方式」，其他默认都是 "填写"
                    currentSchemaData.default = 'string';
                    currentSchemaData.readOnly = true;
                    currentSchemaData.description =
                      '当前数值没有可选项，不支持设置。';
                  }
                } else if (currentJsonKey === 'range') {
                  if (
                    curJsonData.valueType === 'select' &&
                    (curJsonData.type === 'ContentStaticConfig' ||
                      curJsonData.type === 'ResourceCenter')
                  ) {
                    visibleOn = true;
                  }
                  if (visibleOn) {
                    const valueSchema = targetJsonSchema.properties['value'];
                    if (
                      ['select', 'radio', 'checkboxes'].includes(
                        valueSchema.type,
                      ) &&
                      valueSchema.options &&
                      valueSchema.options.length > 0
                    ) {
                      // range 和 value 复用 options
                      currentSchemaData.options = objClone(valueSchema.options);
                    }
                  }
                } else if (
                  currentJsonKey === 'value' &&
                  (curJsonData.type === 'DevDefaults' ||
                    curJsonData.type === 'RuntimeConst' ||
                    curJsonData.type === 'Content')
                ) {
                  // 全局配置数据、内容Meta数据 显示 数据值 配置项
                  visibleOn = true;
                }

                if (
                  currentJsonKey === 'value' &&
                  curJsonData.type === 'Content'
                ) {
                  // 内容Meta数据
                  currentSchemaData.type = 'select'; // 改用下拉列表
                  currentSchemaData.options = objClone(metaContentKeyList);
                } else if (
                  currentJsonKey === 'value' &&
                  curJsonData.type === 'RuntimeConst'
                ) {
                  // 全局配置数据
                  currentSchemaData.type = 'select'; // 改用下拉列表
                  currentSchemaData.options = objClone(globalMetaConfig);
                }

                if (visibleOn) {
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
                }
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
  options: stores.JSONEditorStore.options,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getInitJsonDataByKeyRoute: stores.JSONEditorStore.getInitJsonDataByKeyRoute,
}))(observer(ObjectSchema));
