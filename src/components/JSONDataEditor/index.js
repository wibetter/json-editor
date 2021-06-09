import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Collapse, Tabs } from 'antd';
const { Panel } = Collapse;
const { TabPane } = Tabs;
import MappingRender from '$components/MappingRender';
import JsonView from '$components/JsonView/index';
import { isEqual } from '$utils/index';
import {
  isEmptySchema,
  isStructuredSchema,
  getCurrentFormat,
  json2schema,
} from '@wibetter/json-utils';
import './index.scss';

class JSONDataEditor extends React.PureComponent {
  static propTypes = {
    viewStyle: PropTypes.any,
    wideScreen: PropTypes.any,
    onChange: PropTypes.func,
    jsonView: PropTypes.any,
    schemaData: PropTypes.object,
    jsonData: PropTypes.object,
    dynamicDataList: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      jsonView: props.jsonView || false, // 是否显示code模式，默认不显示code模式
      viewStyle: this.catchViewStyle(props.viewStyle), // 默认为fold（可折叠面板），可选：tabs:（tabs切换面板）
    };
    // 根据props.schemaData对jsonSchema进行初始化
    if (props.schemaData) {
      this.props.initJSONSchemaData(props.schemaData);
      // 根据props.jsonData对jsonData进行初始化
      this.props.initJSONData(props.jsonData);
    } else if (props.jsonData) {
      // schemaData为空，jsonData不为空时，尝试通过jsonData转jsonSchema
      const jsonSchema = json2schema(props.jsonData); // 通过json转换schema
      this.props.initJSONSchemaData(jsonSchema);
      // 根据props.jsonData对jsonData进行初始化
      this.props.initJSONData(props.jsonData);
    }
    // 读取宽屏和小屏的配置
    if (props.wideScreen) {
      this.props.setPageScreen(props.wideScreen);
    }
    // 记录onChange事件
    if (props.onChange) {
      this.props.initOnChange(props.onChange);
    }

    // 获取dynamicDataList（动态数据源）
    if (props.dynamicDataList) {
      this.props.setDynamicDataList(props.dynamicDataList);
    }
  }

  /* 获取schema展示风格模式 */
  catchViewStyle = (viewStyle) => {
    switch (viewStyle) {
      case 'fold':
        return 'fold';
      case 'tabs':
        return 'tabs';
      default:
        return 'fold';
    }
  };

  componentWillReceiveProps(nextProps) {
    /** 1. 先初始化schemaData，如果jsonData和schemaData的格式不一致，则以schemaData为准 */
    if (!isEqual(nextProps.schemaData, this.props.schemaData)) {
      this.props.JSONSchemaChange(nextProps.schemaData);
    }
    /** 2. 初始化jsonData */
    if (!isEqual(nextProps.jsonData, this.props.jsonData)) {
      this.props.initJSONData(nextProps.jsonData);
    }
    // 读取code模式配置
    if (!isEqual(nextProps.jsonView, this.props.jsonView)) {
      this.setState({
        jsonView: nextProps.jsonView,
      });
    }
    // 读取展示模式配置
    if (!isEqual(nextProps.viewStyle, this.props.viewStyle)) {
      this.setState({
        viewStyle: nextProps.viewStyle,
      });
    }
    if (!isEqual(nextProps.wideScreen, this.props.wideScreen)) {
      this.props.setPageScreen(nextProps.wideScreen);
    }
    // 记录onChange事件
    if (!isEqual(nextProps.onChange, this.props.onChange)) {
      this.props.initOnChange(nextProps.onChange);
    }

    // 获取dynamicDataList（动态数据源）
    if (!isEqual(nextProps.dynamicDataList, this.props.dynamicDataList)) {
      this.props.setDynamicDataList(nextProps.dynamicDataList);
    }
  }

  /* schema一级字段Title显示 */
  renderHeader = (format) => {
    switch (format) {
      case 'func':
        return '功能设置';
      case 'style':
        return '样式设置';
      case 'data':
        return '数据设置';
      default:
        return '属性设置';
    }
  };

  render() {
    const {
      jsonSchema,
      lastUpdateTime,
      jsonLastUpdateTime,
      getJSONDataByKeyRoute,
      keyRoute2indexRoute,
    } = this.props;
    const { jsonView, viewStyle } = this.state;
    const isEmpty = isEmptySchema(jsonSchema); // 判断是否是空的schema
    const isStructured = isStructuredSchema(jsonSchema); // 判断是否是结构化的schema数据
    /**
     * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此将组件专用的配置数据分类展示），
     * */
    return (
      <div className="json-editor-container">
        {isEmpty && (
          <p className="json-editor-empty">当前jsonSchema没有数据内容</p>
        )}
        {!isEmpty && !jsonView && (
          <>
            {/* 作为结构性schema进行渲染 */}
            {isStructured && (
              <>
                {viewStyle === 'fold' && (
                  <Collapse
                    defaultActiveKey={jsonSchema.propertyOrder}
                    expandIconPosition="right"
                    bordered={false}
                  >
                    {jsonSchema.propertyOrder.map((key, index) => {
                      /** 1. 获取当前元素的路径值 */
                      const currentIndexRoute = index;
                      const currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                      /** 2. 获取当前元素的key值 */
                      const currentJsonKey = key;
                      /** 3. 获取当前元素的json结构对象 */
                      const currentSchemaData =
                        jsonSchema.properties[currentJsonKey];
                      /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                      const currentFormat = getCurrentFormat(currentSchemaData);

                      /** 5. 获取当前元素的id，用于做唯一标识 */
                      const nodeKey = `${lastUpdateTime}-${jsonLastUpdateTime}-${currentFormat}-${currentJsonKey}`;

                      if (
                        currentSchemaData.propertyOrder &&
                        currentSchemaData.propertyOrder.length > 0
                      ) {
                        return (
                          <Panel
                            header={
                              currentSchemaData.title ||
                              this.renderHeader(currentFormat)
                            }
                            key={currentJsonKey}
                          >
                            {MappingRender({
                              parentType: currentFormat,
                              jsonKey: currentJsonKey,
                              indexRoute: currentIndexRoute,
                              keyRoute: currentKeyRoute,
                              nodeKey,
                              targetJsonSchema: currentSchemaData,
                              isStructuredSchema: isStructured,
                              getJSONDataByKeyRoute,
                              keyRoute2indexRoute,
                            })}
                          </Panel>
                        );
                      }
                      return '';
                    })}
                  </Collapse>
                )}
                {viewStyle === 'tabs' && (
                  <Tabs
                    className={`tabs-schema-box`}
                    defaultActiveKey={jsonSchema.propertyOrder[0]}
                    centered={true}
                    hideAdd={true}
                  >
                    {jsonSchema.propertyOrder.map((key, index) => {
                      /** 1. 获取当前元素的路径值 */
                      const currentIndexRoute = index;
                      const currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                      /** 2. 获取当前元素的key值 */
                      const currentJsonKey = key;
                      /** 3. 获取当前元素的json结构对象 */
                      const currentSchemaData =
                        jsonSchema.properties[currentJsonKey];
                      /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                      const currentFormat = getCurrentFormat(currentSchemaData);

                      /** 5. 获取当前元素的id，用于做唯一标识 */
                      const nodeKey = `${lastUpdateTime}-${jsonLastUpdateTime}-${currentFormat}-${currentJsonKey}`;

                      if (
                        currentSchemaData.propertyOrder &&
                        currentSchemaData.propertyOrder.length > 0
                      ) {
                        return (
                          <TabPane
                            tab={
                              currentSchemaData.title ||
                              this.renderHeader(currentFormat)
                            }
                            key={currentJsonKey}
                            closable={false}
                            className={`tabs-schema-item`}
                          >
                            {MappingRender({
                              parentType: currentFormat,
                              jsonKey: currentJsonKey,
                              indexRoute: currentIndexRoute,
                              keyRoute: currentKeyRoute,
                              nodeKey,
                              targetJsonSchema: currentSchemaData,
                              isStructuredSchema: isStructured,
                              getJSONDataByKeyRoute,
                              keyRoute2indexRoute,
                            })}
                          </TabPane>
                        );
                      }
                      return '';
                    })}
                  </Tabs>
                )}
              </>
            )}
            {/* 作为普通schema数据进行渲染 */}
            {!isStructured && (
              <>
                {MappingRender({
                  parentType: '',
                  jsonKey: '',
                  indexRoute: '',
                  keyRoute: '',
                  nodeKey: '',
                  targetJsonSchema: jsonSchema,
                  getJSONDataByKeyRoute,
                  keyRoute2indexRoute,
                })}
              </>
            )}
          </>
        )}
        {!isEmpty && jsonView && (
          <JsonView
            {...{
              nodeKey: 'jsonView',
              keyRoute: '',
              targetJsonSchema: jsonSchema,
            }}
          />
        )}
      </div>
    );
  }
}

export default inject((stores) => ({
  jsonSchema: stores.JSONSchemaStore.jsonSchema,
  lastUpdateTime: stores.JSONSchemaStore.lastUpdateTime,
  jsonLastUpdateTime: stores.JSONEditorStore.lastUpdateTime,
  initJSONSchemaData: stores.JSONSchemaStore.initJSONSchemaData,
  JSONSchemaChange: stores.JSONSchemaStore.JSONSchemaChange,
  initJSONData: stores.JSONEditorStore.initJSONData,
  initOnChange: stores.JSONEditorStore.initOnChange,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  keyRoute2indexRoute: stores.JSONSchemaStore.keyRoute2indexRoute,
  setDynamicDataList: stores.JSONEditorStore.setDynamicDataList,
  setPageScreen: stores.JSONSchemaStore.setPageScreen,
}))(observer(JSONDataEditor));
