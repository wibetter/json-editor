import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Collapse, Tooltip } from 'antd';
const { Panel } = Collapse;
import { truncate } from '@wibetter/json-utils';
import MappingRender from '$components/MappingRender';
import { catchJsonDataByWebCache } from '$mixins/index';

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
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { indexRoute, jsonKey, nodeKey, keyRoute, targetJsonSchema } =
      this.props;

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }`}
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonSchema.description} placement="top">
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' && targetJsonSchema.title.length > 6
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
        <div className="array-schema-box">
          <Collapse
            defaultActiveKey={['mainConfig']}
            expandIconPosition="right"
            bordered={false}
            accordion
          >
            {targetJsonSchema.properties['mainConfig'] && (
              <Panel
                header={targetJsonSchema.properties['mainConfig'].title}
                key="mainConfig"
              >
                {targetJsonSchema.properties['mainConfig'].propertyOrder.map(
                  (key, index) => {
                    /** 1. 获取当前元素的路径值 */
                    const currentIndexRoute = indexRoute
                      ? `${indexRoute}-0-${index}`
                      : `0-${index}`;
                    const currentKeyRoute = keyRoute
                      ? `${keyRoute}-mainConfig-${key}`
                      : `mainConfig-${key}`; // key路径值，后续用于从jsonData中提取当前元素的数值
                    const mainConfigJsonData =
                      getJSONDataByKeyRoute(
                        keyRoute ? `${keyRoute}-mainConfig` : 'mainConfig',
                      ) || {};
                    /** 2. 获取当前元素的key值 */
                    const currentJsonKey = key;
                    /** 3. 获取当前元素的json结构对象 */
                    const currentSchemaData = toJS(
                      targetJsonSchema.properties['mainConfig'].properties[
                        currentJsonKey
                      ],
                    );
                    /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                    const curType = currentSchemaData.type;
                    /** 5. 获取当前元素的id，用于做唯一标识 */
                    const childNodeKey = `${nodeKey}-${curType}-${currentJsonKey}`;

                    let visibleOn = [
                      'description',
                      'CONTENTID',
                      'CONTENTTYPE',
                    ].includes(currentJsonKey)
                      ? false
                      : true; // 是否显示当前元素

                    // 补充动态配置类型相关显隐逻辑【定制逻辑】
                    if (
                      currentJsonKey === 'description' &&
                      mainConfigJsonData.type === 'ContentStaticConfig'
                    ) {
                      // mp后台配置 时显示 description（属性名称）
                      visibleOn = true;
                    } else if (
                      (currentJsonKey === 'CONTENTID' ||
                        currentJsonKey === 'CONTENTTYPE') &&
                      mainConfigJsonData.type === 'RuntimeDataSelfDefine'
                    ) {
                      visibleOn = true;
                    }

                    if (visibleOn) {
                      return MappingRender({
                        parentType: curType,
                        jsonKey: currentJsonKey,
                        indexRoute: currentIndexRoute,
                        keyRoute: currentKeyRoute,
                        nodeKey: childNodeKey,
                        targetJsonSchema: currentSchemaData,
                        isArrayItem: true,
                        schemaStore,
                        jsonStore,
                      });
                    }
                  },
                )}
              </Panel>
            )}
            {targetJsonSchema.propertyOrder.map((key, index) => {
              if (key === 'mainConfig') {
                return;
              }
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

              if (
                currentSchemaData.propertyOrder &&
                currentSchemaData.propertyOrder.length > 0
              ) {
                return (
                  <Panel header={currentSchemaData.title} key={currentJsonKey}>
                    {MappingRender({
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

export default inject((stores) => ({
  schemaStore: stores.JSONSchemaStore,
  jsonStore: stores.JSONEditorStore,
}))(observer(SohuDataSourceSchema));
