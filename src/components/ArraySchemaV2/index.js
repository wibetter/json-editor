import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { message, Tooltip, Popconfirm } from 'antd';
import {
  RightOutlined,
  DownOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import ObjectSchema from '$components/ObjectSchema/index';
import JsonView from '$components/JsonView/index';
import {
  isArray,
  isString,
  isURL,
  isColor,
  isNumber,
  isDateStr,
  isDateTimeStr,
  isTimeStr,
} from '$utils/typeof';
import { getCurrentFormat } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';
import deleteIcon from '$assets/img/delete.svg';
import addElemIcon from '$assets/img/addElem.svg';

/**
 * 新版数组类型 v2.0
 * 数组类型：用于展示数组类型的配置字段
 * 功能点：拖拽排序【新增】、上下移动子项、新增子项、复制子项、删除子项、折叠、源码模式切换
 * 展示：以折叠面板形式展示【新版UI】
 */

class ArraySchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentActiveArrIndex: -1, // 记录当前展开的数组项，默认展开第一个数组项
      jsonView: false, // 是否显示code模式
      isClosed: false, // 是否为关闭状态，默认是开启状态
      hoverIndex: '', // 记录当前处于hover中的数据项
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.addArrayItem = this.addArrayItem.bind(this);
    this.deleteArrItem = this.deleteArrItem.bind(this);
    this.elemHoverEnterEvent = this.elemHoverEnterEvent.bind(this);
    this.elemHoverLeaveEvent = this.elemHoverLeaveEvent.bind(this);
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
  addArrayItem = (keyRoute, curArr, curArrIndex) => {
    const maximumChild = this.props.targetJsonSchema['maximum-child'];
    if (curArr && curArr.length >= maximumChild) {
      message.warning(`添加失败，最多可添加${maximumChild}个子项`);
    } else {
      this.props.addArrayItem(keyRoute, curArrIndex);
    }
  };

  /** 删除数组项 */
  deleteArrItem = (keyRoute, arrIndex, curArr) => {
    const minimumChild = this.props.targetJsonSchema['minimum-child'];
    if (curArr && curArr.length <= minimumChild) {
      message.warning(`删除失败，至少需要保留${minimumChild}个子项`);
    } else {
      this.props.deleteArrayIndex(keyRoute, arrIndex);
    }
  };

  /**
   * 各类元素的onMouseEnter事件
   */
  elemHoverEnterEvent = (event, currentIndex) => {
    event.stopPropagation();

    // 当前元素没有在选中态，且不是上一次hover态的元素
    if (currentIndex !== this.state.hoverIndex) {
      this.setState({
        hoverIndex: currentIndex,
      });
    }
  };

  /**
   * 各类元素的onMouseLeave事件
   */
  elemHoverLeaveEvent = (event, currentIndex) => {
    event.stopPropagation();
    // 当前元素没有在选中态，且不是上一次hover态的元素
    if (currentIndex === this.state.hoverIndex) {
      this.setState({
        hoverIndex: '',
      });
    }
  };

  /**
   * 获取当前数组项的Title：数组项默认使用其第一个非空子项的数值作为title
   */
  getArrItemTitle = (arrItem) => {
    if (arrItem) {
      const arrItemKeys = Object.keys(arrItem);
      for (let index = 0, size = arrItemKeys.length; index < size; index++) {
        const itemVal = arrItem[arrItemKeys[index]];
        // 只有不为空时才赋值（忽略URL类型数值）
        if (
          itemVal &&
          (isNumber(itemVal) ||
            (isString(itemVal) && !isURL(itemVal) && !isColor(itemVal)))
        ) {
          return itemVal;
        }
      }
    }
    return '';
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      pageScreen,
      indexRoute,
      targetJsonSchema,
      getJSONDataByKeyRoute,
    } = this.props;
    const {
      jsonView,
      isClosed,
      hoverIndex,
      currentActiveArrIndex,
    } = this.state;
    const currentFormat = getCurrentFormat(targetJsonSchema);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute); // json内容数据
    const arrayItemsDataObj = targetJsonSchema.items; // schema数据

    return (
      <div
        className={`array-schema-box ${
          pageScreen === 'wideScreen'
            ? 'wide-screen-view'
            : 'mobile-screen-view'
        }`}
        key={nodeKey}
        id={nodeKey}
      >
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
          <span className="title-text">{targetJsonSchema.title}</span>
          {targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
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

          <Tooltip title="添加数据项">
            <PlusOutlined
              src={addElemIcon}
              className="array-add-child-btn"
              onClick={(event) => {
                this.addArrayItem(keyRoute, curJsonData);
                event.preventDefault();
                event.stopPropagation();
              }}
            />
          </Tooltip>
        </div>
        <div
          className={`array-content ${jsonView ? 'json-view-array' : ''} ${
            isClosed ? 'closed' : ''
          }`}
        >
          {!jsonView &&
            isArray(curJsonData) &&
            curJsonData.map((arrItem, arrIndex) => {
              const curNodeKey = `${nodeKey}-array-items-${curJsonData.length}-${arrIndex}`;
              const curIndexRoute = indexRoute ? `${indexRoute}-0` : '0';
              const curKeyRoute = keyRoute
                ? `${keyRoute}-${arrIndex}`
                : `${arrIndex}`;
              const arrTitle = this.getArrItemTitle(arrItem); // 获取数组项第一个非空元素的值
              return (
                <div className="array-item" key={curKeyRoute}>
                  <div
                    className="array-item-header"
                    onClick={() => {
                      this.setState({
                        currentActiveArrIndex:
                          currentActiveArrIndex === arrIndex ? -1 : arrIndex,
                      });
                    }}
                    onMouseMove={(event) => {
                      this.elemHoverEnterEvent(event, arrIndex);
                    }}
                    onMouseLeave={(event) => {
                      this.elemHoverLeaveEvent(event, arrIndex);
                    }}
                  >
                    <div className="array-title-text">
                      {arrTitle
                        ? arrTitle
                        : `${arrayItemsDataObj.title}/${arrIndex + 1}`}
                    </div>
                    <div className="array-operate-box">
                      {currentActiveArrIndex !== arrIndex ? (
                        <RightOutlined className="close-operate-btn array-operate-btn" />
                      ) : (
                        <DownOutlined className="close-operate-btn array-operate-btn" />
                      )}
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
                          <img
                            src={deleteIcon}
                            className="delete-operate-btn array-operate-btn"
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                          />
                        </Popconfirm>
                      </Tooltip>
                      <Tooltip
                        title={`复制${arrayItemsDataObj.title}/${arrIndex + 1}`}
                      >
                        <img
                          src={addElemIcon}
                          className="array-operate-btn"
                          onClick={(event) => {
                            this.addArrayItem(keyRoute, curJsonData, arrIndex); // curArrIndex
                            event.preventDefault();
                            event.stopPropagation();
                          }}
                        />
                      </Tooltip>
                      {arrIndex !== 0 && (
                        <Tooltip title={`向上移动`}>
                          <ArrowUpOutlined
                            className="array-operate-btn"
                            onClick={(event) => {
                              this.props.sortArrayItem(
                                keyRoute,
                                arrIndex,
                                'up',
                              );
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                          />
                        </Tooltip>
                      )}
                      {arrIndex !== curJsonData.length - 1 && (
                        <Tooltip title={`向下移动`}>
                          <ArrowDownOutlined
                            className="array-operate-btn"
                            onClick={(event) => {
                              this.props.sortArrayItem(
                                keyRoute,
                                arrIndex,
                                'down',
                              );
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                          />
                        </Tooltip>
                      )}
                    </div>
                  </div>
                  <div
                    className={`array-item-content ${
                      currentActiveArrIndex === arrIndex ? 'open' : 'closed'
                    }`}
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
                        targetJsonSchema: arrayItemsDataObj,
                        isArrayItem: true,
                        arrIndex,
                      }}
                    />
                  </div>
                </div>
              );
            })}
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
  sortArrayItem: stores.JSONEditorStore.sortArrayItem,
}))(observer(ArraySchema));
