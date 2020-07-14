import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import MappingRender from '$components/MappingRender';
import { isEqual } from '$utils/index';
import { isEmptySchema, getCurrentFormat } from '$utils/jsonSchema';
import './index.scss';

class JSONDataEditor extends React.PureComponent {
  static propTypes = {
    wideScreen: PropTypes.any,
    onChange: PropTypes.func,
    schemaData: PropTypes.object,
    jsonData: PropTypes.object,
  };

  constructor(props) {
    super(props);
    // 根据props.schemaData对jsonSchema进行初始化
    if (props.schemaData) {
      this.props.initJSONSchemaData(props.schemaData);
    }
    // 根据props.jsonData对jsonData进行初始化
    if (props.jsonData) {
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
    if (!isEqual(nextProps.schemaData, this.props.schemaData)) {
      this.props.initJSONSchemaData(nextProps.schemaData);
    }
    if (!isEqual(nextProps.jsonData, this.props.jsonData)) {
      this.props.initJSONData(nextProps.jsonData);
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
        return;
    }
  };

  render() {
    const { jsonSchema, lastUpdateTime } = this.props;
    const isEmpty = isEmptySchema(jsonSchema);
    /**
     * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此处进行拖拽事件的处理），
     * JSONSchema的一级字段必须为object类型（规避非法的jsonSchema数据，
     * 以及结构单一的jsonSchema数据，后续再单独考虑如何兼容单一结构的jsonSchema数据）。
     * */
    return (
      <div className="json-editor-container">
        {isEmpty && (
          <p className="json-editor-empty">当前jsonSchema没有数据内容</p>
        )}
        {!isEmpty && (
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
              const currentSchemaData = jsonSchema.properties[currentJsonKey];
              /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
              const currentFormat = getCurrentFormat(currentSchemaData);
              /** 5. 获取当前元素的id，用于做唯一标识 */
              const nodeKey = `${lastUpdateTime}-${currentFormat}-${currentJsonKey}`;

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
            })}
          </Collapse>
        )}
      </div>
    );
  }
}

export default inject((stores) => ({
  jsonSchema: stores.JSONSchemaStore.jsonSchema,
  lastUpdateTime: stores.JSONSchemaStore.lastUpdateTime,
  initJSONSchemaData: stores.JSONSchemaStore.initJSONSchemaData,
  initJSONData: stores.JSONEditorStore.initJSONData,
  initOnChange: stores.JSONEditorStore.initOnChange,
  setPageScreen: stores.JSONSchemaStore.setPageScreen,
}))(observer(JSONDataEditor));
