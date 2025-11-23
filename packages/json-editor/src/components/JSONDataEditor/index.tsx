import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Collapse, Tabs } from 'antd';
const { Panel } = Collapse;
const { TabPane } = Tabs;
import MappingRender from '$core/MappingRender'; // 普通模式
// import MappingRender from '$core/MappingRenderV2'; // 按需加载模式
import JsonView from '$components/JsonView/index';
import {
  isEmptySchema,
  isStructuredSchema,
  json2schema,
  isEqualByIdT,
  isEqual,
} from '@wibetter/json-utils';
import {
  StoresInterface,
  BaseRendererProps,
  SchemaStore,
  JSONStore,
} from '$types/index';
import './index.scss';

interface JSONEditorProps {
  viewStyle?: string;
  wideScreen?: any;
  onChange?: (data: any) => void;
  jsonView?: any;
  jsonViewReadOnly?: boolean;
  schemaData?: any;
  jsonData?: any;
  dynamicDataList?: any[];
  options?: any;
  schemaStore: SchemaStore;
  jsonStore: JSONStore;
  [key: string]: any;
}

interface JSONDataEditorState {
  jsonView: boolean;
  viewStyle: 'fold' | 'tabs';
}

class JSONDataEditor extends React.PureComponent<
  JSONEditorProps,
  JSONDataEditorState
> {
  constructor(props: JSONEditorProps) {
    super(props);

    this.state = {
      jsonView: props.jsonView || false, // 是否显示code模式，默认不显示code模式
      viewStyle: this.catchViewStyle(props.viewStyle || 'fold'), // 默认为fold（可折叠面板），可选：tabs:（tabs切换面板）
    };

    const { initJSONSchemaData, setPageScreen } = this.props.schemaStore || {};
    const { initJSONData, initOnChange, setDynamicDataList, setOptions } =
      this.props.jsonStore || {};

    // 根据props.schemaData对jsonSchema进行初始化
    if (props.schemaData) {
      initJSONSchemaData(props.schemaData);
      // 根据props.jsonData对jsonData进行初始化
      initJSONData(props.jsonData);
    } else if (props.jsonData) {
      // schemaData为空，jsonData不为空时，尝试通过jsonData转jsonSchema
      const jsonSchema = json2schema(props.jsonData); // 通过json转换schema
      initJSONSchemaData(jsonSchema);
      // 根据props.jsonData对jsonData进行初始化
      initJSONData(props.jsonData);
    }
    // 读取宽屏和小屏的配置
    if (props.wideScreen) {
      setPageScreen(props.wideScreen);
    }
    // 记录onChange事件
    if (props.onChange) {
      initOnChange(props.onChange);
    }

    // 获取dynamicDataList（动态数据源）
    if (props.dynamicDataList) {
      setDynamicDataList(props.dynamicDataList);
    }
    // 配置类数据
    if (props.options) {
      setOptions(props.options);
    }
  }

  /* 获取schema展示风格模式 */
  catchViewStyle = (viewStyle: string) => {
    switch (viewStyle) {
      case 'fold':
        return 'fold';
      case 'tabs':
        return 'tabs';
      default:
        return 'fold';
    }
  };

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    const { JSONSchemaChange, setPageScreen } = this.props.schemaStore || {};
    const {
      JSONEditorObj,
      initJSONData,
      initOnChange,
      setDynamicDataList,
      setOptions,
    } = this.props.jsonStore || {};
    /** 1. 先初始化schemaData，如果jsonData和schemaData的格式不一致，则以schemaData为准 */
    if (!isEqualByIdT(nextProps.schemaData, this.props.schemaData)) {
      JSONSchemaChange(nextProps.schemaData);
    }
    /** 2. 初始化jsonData */
    if (!isEqual(nextProps.jsonData, JSONEditorObj)) {
      initJSONData(nextProps.jsonData);
    }
    // 读取code模式配置
    if (!isEqual(nextProps.jsonView, this.props.jsonView)) {
      this.setState({
        jsonView: nextProps.jsonView ?? false,
      });
    }
    // 读取展示模式配置
    if (!isEqual(nextProps.viewStyle, this.props.viewStyle)) {
      this.setState({
        viewStyle: this.catchViewStyle(nextProps.viewStyle),
      });
    }
    if (!isEqual(nextProps.wideScreen, this.props.wideScreen)) {
      setPageScreen(nextProps.wideScreen);
    }
    // 记录onChange事件
    if (!isEqual(nextProps.onChange, this.props.onChange)) {
      initOnChange(nextProps.onChange);
    }

    // 获取dynamicDataList（动态数据源）
    if (!isEqual(nextProps.dynamicDataList, this.props.dynamicDataList)) {
      setDynamicDataList(nextProps.dynamicDataList);
    }

    if (!isEqual(nextProps.options, this.props.options)) {
      setOptions(nextProps.options);
    }
  }

  /* schema一级字段Title显示 */
  renderHeader = (format: string) => {
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
    const { schemaStore, jsonStore, jsonViewReadOnly } = this.props;
    const { jsonSchema, lastUpdateTime } = schemaStore || {};
    const {
      JSONEditorObj,
      lastUpdateTime: jsonLastUpdateTime,
      jsonChange,
    } = jsonStore || {};
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
                    {jsonSchema.propertyOrder.map(
                      (key: string, index: number) => {
                        /** 1. 获取当前元素的路径值 */
                        const currentIndexRoute = index;
                        const currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                        /** 2. 获取当前元素的key值 */
                        const currentJsonKey = key;
                        /** 3. 获取当前元素的json结构对象 */
                        const currentSchemaData =
                          jsonSchema.properties[currentJsonKey];
                        const curType = currentSchemaData.type;

                        /** 获取当前元素的id，用于做唯一标识 */
                        const nodeKey = `${lastUpdateTime}-${jsonLastUpdateTime}-${curType}-${currentJsonKey}`;

                        if (
                          currentSchemaData.propertyOrder &&
                          currentSchemaData.propertyOrder.length > 0
                        ) {
                          return (
                            <Panel
                              header={
                                currentSchemaData.title ||
                                this.renderHeader(curType)
                              }
                              key={`${key}-${index}`}
                              // key={currentJsonKey}
                            >
                              {MappingRender({
                                parentType: curType,
                                jsonKey: currentJsonKey,
                                indexRoute: currentIndexRoute,
                                keyRoute: currentKeyRoute,
                                nodeKey,
                                targetJsonSchema: currentSchemaData,
                                isStructuredSchema: isStructured,
                                schemaStore,
                                jsonStore,
                              })}
                            </Panel>
                          );
                        }
                        return '';
                      },
                    )}
                  </Collapse>
                )}
                {viewStyle === 'tabs' && (
                  <Tabs
                    className={`tabs-schema-box`}
                    defaultActiveKey={jsonSchema.propertyOrder[0]}
                    centered={true}
                    hideAdd={true}
                  >
                    {jsonSchema.propertyOrder.map(
                      (key: string, index: number) => {
                        /** 1. 获取当前元素的路径值 */
                        const currentIndexRoute = index;
                        const currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                        /** 2. 获取当前元素的key值 */
                        const currentJsonKey = key;
                        /** 3. 获取当前元素的json结构对象 */
                        const currentSchemaData =
                          jsonSchema.properties[currentJsonKey];
                        const curType = currentSchemaData.type;

                        /** 5. 获取当前元素的id，用于做唯一标识 */
                        const nodeKey = `${lastUpdateTime}-${jsonLastUpdateTime}-${curType}-${currentJsonKey}`;

                        if (
                          currentSchemaData.propertyOrder &&
                          currentSchemaData.propertyOrder.length > 0
                        ) {
                          return (
                            <TabPane
                              tab={
                                currentSchemaData.title ||
                                this.renderHeader(curType)
                              }
                              key={`${key}-${index}`}
                              // key={currentJsonKey}
                              closable={false}
                              className={`tabs-schema-item`}
                            >
                              {MappingRender({
                                parentType: curType,
                                jsonKey: currentJsonKey,
                                indexRoute: currentIndexRoute,
                                keyRoute: currentKeyRoute,
                                nodeKey,
                                targetJsonSchema: currentSchemaData,
                                isStructuredSchema: isStructured,
                                schemaStore,
                                jsonStore,
                              })}
                            </TabPane>
                          );
                        }
                        return '';
                      },
                    )}
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
                  schemaStore,
                  jsonStore,
                })}
              </>
            )}
          </>
        )}
        {!isEmpty && jsonView && (
          <JsonView
            // key={`${lastUpdateTime}-${jsonLastUpdateTime}-jsonView`}
            jsonData={JSONEditorObj}
            readOnly={jsonViewReadOnly ?? true}
            onChange={jsonChange}
            maxLines={30}
          />
        )}
      </div>
    );
  }
}

export default inject((stores: StoresInterface) => ({
  schemaStore: stores.JSONSchemaStore,
  jsonStore: stores.JSONEditorStore,
}))(observer(JSONDataEditor));
