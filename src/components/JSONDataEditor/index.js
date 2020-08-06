import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import MappingRender from '$components/MappingRender';
import JsonView from '$components/JsonView/index';
import { isEqual } from '$utils/index';
import {
  isEmptySchema,
  isEmptyWidgetSchema,
  isUsedToWidgetConfig,
  getCurrentFormat,
} from '$utils/jsonSchema';
import { json2schema } from '$utils/json2schema';
import './index.scss';

class JSONDataEditor extends React.PureComponent {
  static propTypes = {
    wideScreen: PropTypes.any,
    onChange: PropTypes.func,
    jsonView: PropTypes.any,
    schemaData: PropTypes.object,
    jsonData: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      jsonView: props.jsonView || false, // 是否显示code模式，默认不显示code模式
    };
    // 根据props.schemaData对jsonSchema进行初始化
    if (props.schemaData) {
      this.props.initJSONSchemaData(props.schemaData);
      // 根据props.jsonData对jsonData进行初始化
      if (props.jsonData) {
        this.props.initJSONData(props.jsonData);
      }
    } else if (props.jsonData) {
      // schemaData为空，jsonData不为空时，尝试通过jsonData转jsonSchema
      console.log(
        'schemaData为空，jsonData不为空时，jsonData转jsonSchema功能正在开发中。',
      );
      const jsonSchema = json2schema(props.jsonData);
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
  }

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
    if (!isEqual(nextProps.wideScreen, this.props.wideScreen)) {
      this.props.setPageScreen(nextProps.wideScreen);
    }
    // 记录onChange事件
    if (!isEqual(nextProps.onChange, this.props.onChange)) {
      this.props.initOnChange(nextProps.onChange);
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
    }
  };

  render() {
    const { jsonSchema, lastUpdateTime, lastInitTime } = this.props;
    const { jsonView } = this.state;
    const isEmpty = isEmptySchema(jsonSchema); // 判断是否是空的schema
    const isEmptyConfig = isEmptyWidgetSchema(jsonSchema); // 判断是否是空的区块配置schema
    const isWidgetConfig = isUsedToWidgetConfig(jsonSchema); // 判断是否是用于区块配置schema
    /**
     * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此将区块专用的配置数据分类展示），
     * */
    return (
      <div className="json-editor-container">
        {isEmpty && (
          <p className="json-editor-empty">当前jsonSchema没有数据内容</p>
        )}
        {!isEmpty && !jsonView && (
          <>
            {isWidgetConfig && (
              <>
                {isEmptyConfig && (
                  <p className="json-editor-empty">
                    当前jsonSchema没有数据内容
                  </p>
                )}
                {!isEmptyConfig && (
                  <>
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
                        const currentFormat = getCurrentFormat(
                          currentSchemaData,
                        );

                        /** 5. 获取当前元素的id，用于做唯一标识 */
                        const nodeKey = `${lastUpdateTime}-${lastInitTime}-${currentFormat}-${currentJsonKey}`;

                        if (
                          currentSchemaData.propertyOrder &&
                          currentSchemaData.propertyOrder.length > 0
                        ) {
                          return (
                            <Panel
                              header={this.renderHeader(currentFormat)}
                              key={currentJsonKey}
                            >
                              {MappingRender({
                                parentType: currentFormat,
                                jsonKey: currentJsonKey,
                                indexRoute: currentIndexRoute,
                                keyRoute: currentKeyRoute,
                                nodeKey,
                                targetJsonData: currentSchemaData,
                              })}
                            </Panel>
                          );
                        }
                        return '';
                      })}
                    </Collapse>
                  </>
                )}
              </>
            )}
            {!isWidgetConfig && (
              <>
                {MappingRender({
                  parentType: '',
                  jsonKey: '',
                  indexRoute: '',
                  keyRoute: '',
                  nodeKey: '',
                  targetJsonData: jsonSchema,
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
              targetJsonData: jsonSchema,
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
  lastInitTime: stores.JSONEditorStore.lastInitTime,
  initJSONSchemaData: stores.JSONSchemaStore.initJSONSchemaData,
  JSONSchemaChange: stores.JSONSchemaStore.JSONSchemaChange,
  initJSONData: stores.JSONEditorStore.initJSONData,
  initOnChange: stores.JSONEditorStore.initOnChange,
  setPageScreen: stores.JSONSchemaStore.setPageScreen,
}))(observer(JSONDataEditor));
