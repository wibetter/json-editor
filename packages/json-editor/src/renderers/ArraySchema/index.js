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
// import ObjectSchema from '$renderers/ObjectSchema/index';
import MappingRender from '$components/MappingRender';
import JsonView from '$renderers/JsonView/index';
import {
  isArray,
  isString,
  isURL,
  isColor,
  isNumber,
  isObject,
  isDateStr,
  isDateTimeStr,
  isTimeStr,
} from '$utils/typeof';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';
import DeleteIcon from '$assets/img/delete.svg';
import AddElemIcon from '$assets/img/addElem.svg';
import CodeIcon from '$assets/img/code.svg';

/**
 * 数组类型：用于展示数组类型的配置字段
 * 功能点：拖拽排序【新增】、上下移动子项、新增子项、复制子项、删除子项、折叠、源码模式切换
 * 展示：以折叠面板形式展示
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
    if (curArr && maximumChild && curArr.length >= maximumChild) {
      message.warning(`添加失败，最多可添加${maximumChild}个子项`);
    } else {
      this.props.addArrayItem(keyRoute, curArrIndex);
    }
  };

  /** 删除数组项 */
  deleteArrItem = (keyRoute, arrIndex, curArr) => {
    const minimumChild = this.props.targetJsonSchema['minimum-child'];
    if (curArr && minimumChild && curArr.length <= minimumChild) {
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
    if (arrItem && isObject(arrItem)) {
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
    } else {
      return arrItem;
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
      keyRoute2indexRoute,
      updateFormValueData,
    } = this.props;
    const { jsonView, isClosed, hoverIndex, currentActiveArrIndex } =
      this.state;
    const curType = targetJsonSchema.type;
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute); // json内容数据
    const arrayItemsDataObj = targetJsonSchema.items; // schema数据

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-view'
            : 'mobile-screen-view'
        }
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
            </span>
          </Tooltip>
        </div>
        <div className="array-schema-box">
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
            <span className="title-text">数组配置</span>
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
                <CodeIcon
                  className={jsonView ? 'info-icon active' : 'info-icon'}
                />
              </Tooltip>
            </div>

            <Tooltip title="添加数据项">
              <PlusOutlined
                // src={addElemIcon}
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
                              this.deleteArrItem(
                                keyRoute,
                                arrIndex,
                                curJsonData,
                              );
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                            okText="确定"
                            cancelText="取消"
                          >
                            <DeleteIcon
                              // <img src={deleteIcon}
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
                          <AddElemIcon
                            // <img src={addElemIcon}
                            className="array-operate-btn"
                            onClick={(event) => {
                              this.addArrayItem(
                                keyRoute,
                                curJsonData,
                                arrIndex,
                              ); // curArrIndex
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
                      <MappingRender
                        parentType={curType}
                        jsonKey={'items'}
                        indexRoute={curIndexRoute}
                        keyRoute={curKeyRoute}
                        nodeKey={curNodeKey}
                        targetJsonSchema={arrayItemsDataObj}
                        isArrayItem={true}
                        arrIndex={arrIndex}
                        getJSONDataByKeyRoute={getJSONDataByKeyRoute}
                        keyRoute2indexRoute={keyRoute2indexRoute}
                        updateFormValueData={updateFormValueData}
                      />
                    </div>
                  </div>
                );
              })}
            {jsonView && <JsonView {...this.props} />}
          </div>
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
  getInitJsonDataByKeyRoute: stores.JSONEditorStore.getInitJsonDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  deleteArrayIndex: stores.JSONEditorStore.deleteArrayIndex,
  addArrayItem: stores.JSONEditorStore.addArrayItem,
  sortArrayItem: stores.JSONEditorStore.sortArrayItem,
}))(observer(ArraySchema));
