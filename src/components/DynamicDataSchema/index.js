import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tabs, Tooltip } from 'antd';
const { TabPane } = Tabs;
import { FilterOutlined } from '@ant-design/icons';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';
import JSONEditor from '@wibetter/json-editor/dist/index.umd';

class DynamicDataSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowFilter: false, // 是否显示数据过滤器
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.switchFilterBtn = this.switchFilterBtn.bind(this);
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

  /** 数值变动事件处理器 */
  handleValueChange = (curKeyRoute, value) => {
    const { updateFormValueData } = this.props;
    updateFormValueData(curKeyRoute, value); // 更新数值
  };

  // 显示和隐藏数据过滤器
  switchFilterBtn = () => {
    const { isShowFilter } = this.state;
    this.setState({
      isShowFilter: !isShowFilter,
    });
  };

  // 面板展示内容切换（本地数据/接口数据）
  tabChange = (activeKey) => {
    const { keyRoute } = this.props;
    this.handleValueChange(`${keyRoute}-type`, activeKey);
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      getJSONDataByKeyRoute,
    } = this.props;
    const { isShowFilter } = this.state;
    const currentFormat = getCurrentFormat(targetJsonData);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonData.properties.type || {}; // type中记录了数据源类型：local or remote
    const configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
    const apiParams = configDataObj.body || {}; // 动态数据/请求参数
    const dataObj = curJsonData.data || {}; // mockData中的数据对象
    // 获取当前数据源类型
    const dataType = curJsonData.type || typeDataObj.default; // local or remote

    return (
      <div
        className="mobile-screen-element-warp dynamic-data-schema"
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonData.description} placement="top">
            <span className="title-text">{targetJsonData.title}</span>
          </Tooltip>
        </div>
        <Tabs onChange={this.tabChange} type="card" defaultActiveKey={dataType}>
          <TabPane tab="本地数据" key="local">
            <div className="json-form-box">
              <Tooltip
                title={
                  isShowFilter ? '点击隐藏数据过滤器' : '点击显示数据过滤器'
                }
                placement="top"
              >
                <FilterOutlined
                  className="filter-btn"
                  onClick={this.switchFilterBtn}
                />
              </Tooltip>
              <JSONEditor
                wideScreen={false}
                jsonData={dataObj}
                onChange={(newJsonData) => {
                  console.log('jsonDataChange', JSON.stringify(newJsonData));
                }}
              />
              <div class="filter-func-box">
                {isShowFilter && (
                  <CodeAreaFormSchema
                    {...{
                      parentType: currentFormat,
                      jsonKey: 'filter',
                      indexRoute: indexRoute ? `${indexRoute}-2` : '2',
                      keyRoute: keyRoute ? `${keyRoute}-filter` : 'filter',
                      nodeKey: `${nodeKey}-filter`,
                      targetJsonData: targetJsonData.properties.filter,
                    }}
                    key={`${nodeKey}-filter`}
                  />
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="接口数据" key="remote">
            <div className="json-form-box">
              {Object.keys(apiParams).map((paramKey) => {
                const paramItam = apiParams[paramKey];
                const curKeyRoute = `${keyRoute}-config-body-${paramKey}`;
                return (
                  <InputFormSchema
                    {...{
                      jsonKey: paramKey,
                      keyRoute: curKeyRoute,
                      nodeKey: curKeyRoute,
                      targetJsonData: paramItam,
                    }}
                    key={nodeKey}
                  />
                );
              })}
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default inject((stores) => ({
  triggerChange: stores.JSONEditorStore.triggerChange,
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(DynamicDataSchema));
