import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Collapse, message, Tooltip, Popconfirm } from 'antd';
const { Panel } = Collapse;
import { PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';
import ObjectSchema from '$components/ObjectSchema/index';
import JsonView from '$components/JsonView/index';
import { isArray } from '$utils/index';
import { getCurrentFormat } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';

class ArraySchema extends React.PureComponent {
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
      jsonView: false, // 是否显示code模式
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.addArrayItem = this.addArrayItem.bind(this);
    this.deleteArrItem = this.deleteArrItem.bind(this);
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

  /** 添加数组项 */
  addArrayItem = (keyRoute, curArr) => {
    const maximumChild = this.props.targetJsonData['maximum-child'];
    if (curArr && curArr.length >= maximumChild) {
      message.warning(`添加失败，最多可添加${maximumChild}个子项`);
    } else {
      this.props.addArrayItem(keyRoute);
    }
  };

  /** 删除数组项 */
  deleteArrItem = (keyRoute, arrIndex, curArr) => {
    const minimumChild = this.props.targetJsonData['minimum-child'];
    if (curArr && curArr.length <= minimumChild) {
      message.warning(`删除失败，至少需要保留${minimumChild}个子项`);
    } else {
      this.props.deleteArrayIndex(keyRoute, arrIndex);
    }
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      indexRoute,
      targetJsonData,
      getJSONDataByKeyRoute,
    } = this.props;
    const { jsonView } = this.state;
    const currentFormat = getCurrentFormat(targetJsonData);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);

    const arrayItemsDataObj = targetJsonData.items;

    return (
      <div
        className="mobile-screen-element-warp element-title-card-warp"
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonData.description} placement="top">
            <span className="title-text">{targetJsonData.title}</span>
          </Tooltip>

          <Tooltip title="添加数据项">
            <PlusCircleOutlined
              className="add-operate-btn array-operate-btn"
              onClick={() => {
                this.addArrayItem(keyRoute, curJsonData);
              }}
            />
          </Tooltip>

          <div
            className="display-source-btn"
            onClick={() => {
              this.setState({
                jsonView: !jsonView,
              });
            }}
          >
            <Tooltip title={jsonView ? '关闭源码模式' : '开启源码模式'}>
              <svg
                t="1596164081465"
                className="icon"
                viewBox="0 0 1025 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1205"
              >
                <path
                  d="M293.0688 755.2c-12.0832 0-24.2688-4.2496-33.9968-12.9024L0 512l273.4592-243.0976C294.5536 250.2144 326.912 252.0064 345.7024 273.152c18.7904 21.1456 16.896 53.504-4.2496 72.2944L154.112 512l172.9536 153.7024c21.1456 18.7904 23.04 51.1488 4.2496 72.2944C321.2288 749.4144 307.1488 755.2 293.0688 755.2zM751.0528 755.0976 1024.512 512l-259.072-230.2976c-21.1456-18.7904-53.504-16.896-72.2432 4.2496-18.7904 21.1456-16.896 53.504 4.2496 72.2944L870.4 512l-187.3408 166.5024c-21.1456 18.7904-23.04 51.1488-4.2496 72.2944C688.896 762.2144 702.976 768 717.056 768 729.1392 768 741.3248 763.7504 751.0528 755.0976zM511.5392 827.648l102.4-614.4c4.6592-27.904-14.1824-54.272-42.0864-58.9312-28.0064-4.7104-54.3232 14.1824-58.88 42.0864l-102.4 614.4c-4.6592 27.904 14.1824 54.272 42.0864 58.9312C455.5264 870.1952 458.2912 870.4 461.1072 870.4 485.6832 870.4 507.392 852.6336 511.5392 827.648z"
                  p-id="1206"
                  fill={jsonView ? '#1890ff' : 'currentColor'}
                ></path>
              </svg>
            </Tooltip>
          </div>
        </div>
        <div
          className={`content-item array-content ${
            jsonView ? 'json-view-array' : ''
          }`}
        >
          {!jsonView && isArray(curJsonData) && (
            <Collapse expandIconPosition="right" bordered={true}>
              {curJsonData.map((arrItem, arrIndex) => {
                const curNodeKey = `${nodeKey}-array-items-${curJsonData.length}-${arrIndex}`;
                const curIndexRoute = `${indexRoute}-0`;
                const curKeyRoute = `${keyRoute}-${arrIndex}`;
                return (
                  <Panel
                    header={`${arrayItemsDataObj.title}/${arrIndex + 1}`}
                    key={curKeyRoute}
                    extra={
                      <Tooltip
                        title={`删除${arrayItemsDataObj.title}/${arrIndex + 1}`}
                      >
                        <Popconfirm
                          placement="top"
                          title={`确定要删除${arrayItemsDataObj.title}/${
                            arrIndex + 1
                          }吗？`}
                          onCancel={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                          }}
                          onConfirm={(event) => {
                            this.deleteArrItem(keyRoute, arrIndex, curJsonData);
                            event.preventDefault();
                            event.stopPropagation();
                          }}
                          okText="确定"
                          cancelText="取消"
                        >
                          <CloseOutlined
                            className="delete-operate-btn array-operate-btn"
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                          />
                        </Popconfirm>
                      </Tooltip>
                    }
                  >
                    <div
                      className="array-item-box"
                      key={curNodeKey}
                      id={curNodeKey}
                    >
                      <ObjectSchema
                        {...{
                          parentType: currentFormat,
                          jsonKey: 'items',
                          indexRoute: curIndexRoute,
                          keyRoute: curKeyRoute,
                          nodeKey: curNodeKey,
                          targetJsonData: arrayItemsDataObj,
                          isArrayItem: true,
                          arrIndex,
                        }}
                      />
                    </div>
                  </Panel>
                );
              })}
            </Collapse>
          )}
          {jsonView && <JsonView {...this.props} />}
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  triggerChange: stores.JSONEditorStore.triggerChange,
  pageScreen: stores.JSONSchemaStore.pageScreen,
  indexRoute2keyRoute: stores.JSONSchemaStore.indexRoute2keyRoute,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  deleteArrayIndex: stores.JSONEditorStore.deleteArrayIndex,
  addArrayItem: stores.JSONEditorStore.addArrayItem,
}))(observer(ArraySchema));
