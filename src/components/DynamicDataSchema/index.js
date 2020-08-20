import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tabs, Select, Tooltip } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;
import { FilterOutlined } from '@ant-design/icons';
import CodeAreaFormSchema from '$components/CodeAreaFormSchema/index';
import InputFormSchema from '$components/InputFormSchema/index';
import { getCurrentFormat } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';
import { isArray, isObject } from '$utils/typeof';
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
    dynamicDataList: PropTypes.array,
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

  dynamicDataChange = (dynamicDataName) => {
    const { keyRoute, dynamicDataList } = this.props;
    const curDynamicData = dynamicDataList[dynamicDataName];
    if (curDynamicData) {
      this.handleValueChange(`${keyRoute}-config`, curDynamicData);
    }
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      dynamicDataList,
      getJSONDataByKeyRoute,
      pageScreen,
    } = this.props;
    const { isShowFilter } = this.state;
    const currentFormat = getCurrentFormat(targetJsonData);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

    // 获取DataSource中各类数据对象
    const typeDataObj = targetJsonData.properties.type || {}; // type中记录了数据源类型：local or remote
    const configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
    const dataName = configDataObj.dataName; // 数据源名称
    let apiParams = configDataObj.body || {}; // 动态数据/请求参数
    if (!isObject(apiParams) && apiParams !== '') {
      try {
        apiParams = JSON.parse(apiParams);
      } catch (err) {
        console.log('当前数据源的请求参数对象不是一个合格的json数据');
        apiParams = {};
      }
    }
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
                wideScreen={pageScreen}
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
              <div
                className={
                  pageScreen === 'wideScreen'
                    ? 'wide-screen-element-warp'
                    : 'mobile-screen-element-warp'
                }
                key={nodeKey}
                id={nodeKey}
              >
                <div className="element-title">数据源列表</div>
                <div className="content-item">
                  <div className="form-item-box">
                    <Select
                      className="dynamic-data-select"
                      defaultValue={dataName}
                      onSelect={this.dynamicDataChange}
                    >
                      {dynamicDataList &&
                        isArray(dynamicDataList) &&
                        dynamicDataList.map((dynamicData) => {
                          return (
                            <Option
                              value={dynamicData.name}
                              key={dynamicData.id}
                            >
                              {dynamicData.title}
                            </Option>
                          );
                        })}
                    </Select>
                  </div>
                </div>
              </div>
              {Object.keys(apiParams).map((paramKey) => {
                const paramItam = apiParams[paramKey];
                paramItam.readOnly =
                  paramItam.scope && paramItam.scope === 'static'
                    ? true
                    : false;
                const curKeyRoute = `${keyRoute}-config-body-${paramKey}`;
                return (
                  <InputFormSchema
                    {...{
                      pageScreen: pageScreen, // 默认使用宽屏模式
                      jsonKey: paramKey,
                      keyRoute: `${curKeyRoute}-value`,
                      nodeKey: curKeyRoute,
                      targetJsonData: paramItam,
                    }}
                    key={curKeyRoute}
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
  dynamicDataList: stores.JSONEditorStore.dynamicDataList,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(DynamicDataSchema));
