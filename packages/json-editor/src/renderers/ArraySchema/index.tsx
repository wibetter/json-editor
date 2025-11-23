import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { BaseRendererProps } from '$types/index';
import { toJS } from 'mobx';
import { message, Tooltip, Popconfirm } from 'antd';
import {
  RightOutlined,
  DownOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import { saveJSONEditorCache, getJSONEditorCache } from '$utils/webCache';
import JsonView from '$components/JsonView/index';
import { isArray, isString, isURL, isColor, isObject } from '$utils/typeof';
import { buildStyle } from '$utils/index';
import { catchJsonDataByWebCache } from '$mixins/index';
import './index.scss';
// @ts-ignore
import DeleteIcon from '$assets/img/delete.svg';
// @ts-ignore
import AddElemIcon from '$assets/img/addElem.svg';
// @ts-ignore
import CodeIcon from '$assets/img/code.svg';

interface ArraySchemaState {
  currentActiveArrIndex: number;
  jsonView: boolean;
  isClosed: boolean;
  hoverIndex: number;
}

/**
 * 数组类型：用于展示数组类型的配置字段
 * 功能点：拖拽排序【新增】、上下移动子项、新增子项、复制子项、删除子项、折叠、源码模式切换
 * 展示：以折叠面板形式展示
 */
class ArraySchema extends React.PureComponent<
  BaseRendererProps,
  ArraySchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);

    this.state = {
      currentActiveArrIndex: -1, // 记录当前展开的数组项，默认展开第一个数组项
      jsonView: false, // 是否显示code模式
      isClosed: false, // 是否为关闭状态，默认是开启状态
      hoverIndex: -1, // 记录当前处于hover中的数据项
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.addArrayItem = this.addArrayItem.bind(this);
    this.deleteArrItem = this.deleteArrItem.bind(this);
    this.elemHoverEnterEvent = this.elemHoverEnterEvent.bind(this);
    this.elemHoverLeaveEvent = this.elemHoverLeaveEvent.bind(this);
    this.collapseChange = this.collapseChange.bind(this);
    this.arrayCollapseChange = this.arrayCollapseChange.bind(this);
  }

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  /** 添加数组项 */
  addArrayItem = (keyRoute: string, curArr: any[], curArrIndex: number) => {
    const { addArrayItem } = this.props.jsonStore || {};
    const maximumChild = this.props.targetJsonSchema['maximum-child'];
    if (curArr && maximumChild && curArr.length >= maximumChild) {
      message.warning(`添加失败，最多可添加${maximumChild}个子项`);
    } else {
      addArrayItem(keyRoute, curArrIndex);
    }
  };

  /** 删除数组项 */
  deleteArrItem = (keyRoute: string, arrIndex: number, curArr: any[]) => {
    const { deleteArrayIndex } = this.props.jsonStore || {};
    const minimumChild = this.props.targetJsonSchema['minimum-child'];
    if (curArr && minimumChild && curArr.length <= minimumChild) {
      message.warning(`删除失败，至少需要保留${minimumChild}个子项`);
    } else {
      deleteArrayIndex(keyRoute, arrIndex);
    }
  };

  /**
   * 各类元素的onMouseEnter事件
   */
  elemHoverEnterEvent = (event: React.MouseEvent, currentIndex: number) => {
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
  elemHoverLeaveEvent = (event: React.MouseEvent, currentIndex: number) => {
    event.stopPropagation();
    // 当前元素没有在选中态，且不是上一次hover态的元素
    if (currentIndex === this.state.hoverIndex) {
      this.setState({
        hoverIndex: -1,
      });
    }
  };

  /**
   * 获取当前数组项的Title：数组项默认使用其第一个非空子项的数值作为title
   */
  getArrItemTitle = (arrItem: any) => {
    if (arrItem && isObject(arrItem)) {
      const arrItemKeys = Object.keys(arrItem);
      for (let index = 0, size = arrItemKeys.length; index < size; index++) {
        const itemVal = arrItem[arrItemKeys[index]];
        // 只有不为空时才赋值（忽略URL类型数值）
        if (
          itemVal &&
          isString(itemVal) &&
          !isURL(itemVal) &&
          !isColor(itemVal)
        ) {
          return itemVal;
        }
      }
    } else {
      return arrItem;
    }
    return '';
  };

  collapseChange(event: React.MouseEvent) {
    const { keyRoute } = this.props;
    const { isClosed } = this.state;

    this.setState({
      isClosed: !isClosed,
    });
    event.preventDefault();
    event.stopPropagation();

    // 缓存当前折叠状态
    saveJSONEditorCache(keyRoute!, String(!isClosed));
  }

  arrayCollapseChange(event: React.MouseEvent, arrIndex: number) {
    const { keyRoute } = this.props;
    const { currentActiveArrIndex } = this.state;
    const newArrIndex = currentActiveArrIndex === arrIndex ? -1 : arrIndex;

    this.setState({
      currentActiveArrIndex: newArrIndex,
    });
    event.preventDefault();
    event.stopPropagation();

    // 缓存当前折叠状态
    saveJSONEditorCache(`${keyRoute}-activeArrIndex`, newArrIndex);
  }

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute, sortArrayItem } = jsonStore || {};

    const {
      keyRoute,
      jsonKey,
      nodeKey,
      indexRoute,
      targetJsonSchema,
      renderChild,
    } = this.props;
    const {
      jsonView,
      isClosed: _isClosed,
      currentActiveArrIndex: _currentActiveArrIndex,
    } = this.state;
    const curType = targetJsonSchema.type;
    // 是否显示源码切换按钮
    const showCodeViewBtn = targetJsonSchema.showCodeViewBtn ?? true;
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute); // json内容数据
    if (!curJsonData || curJsonData.length === 0 || !isArray(curJsonData)) {
      // 添加一个默认的数组数据
      curJsonData = [{}];
    }
    const arrayItemsDataObj = targetJsonSchema.items; // schema数据

    // 获取前端缓存中的折叠数据
    let isClosed = _isClosed;
    const collapseCacheData = getJSONEditorCache(keyRoute!);
    if (collapseCacheData !== undefined) {
      isClosed = collapseCacheData;
    }
    let currentActiveArrIndex = _currentActiveArrIndex;
    const activeArrIndexCache = getJSONEditorCache(
      `${keyRoute}-activeArrIndex`,
    );
    if (activeArrIndexCache !== undefined) {
      currentActiveArrIndex = activeArrIndexCache;
    }

    const boxTitle = targetJsonSchema.boxTitle ?? '数据配置';

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        // key={`${nodeKey}-${triggerChange}`}
        id={nodeKey}
        style={style}
      >
        <div className="element-title" style={titleStyle}>
          <Tooltip
            title={
              pageScreen === 'wideScreen' ? targetJsonSchema.description : ''
            }
            placement="top"
          >
            <span className="title-text" title={targetJsonSchema.title}>
              {targetJsonSchema.title}
              {targetJsonSchema.showKey && (
                <span>（{truncate(jsonKey!, { length: 15 })}）</span>
              )}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="array-schema-box content-item" style={contentStyle}>
          <div className="element-title" onClick={this.collapseChange}>
            <span className="title-text">{boxTitle}&nbsp;</span>
            {isClosed ? (
              <RightOutlined className="close-operate-btn" />
            ) : (
              <DownOutlined className="close-operate-btn" />
            )}

            {showCodeViewBtn && (
              <div
                className="display-source-btn"
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
            )}

            <Tooltip title="添加数据项">
              <PlusOutlined
                // src={addElemIcon}
                className="array-add-child-btn"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  this.addArrayItem(keyRoute!, curJsonData, curJsonData.length);
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
              curJsonData.map((arrItem: any, arrIndex: number) => {
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
                      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        this.arrayCollapseChange(event, arrIndex);
                      }}
                      onMouseMove={(
                        event: React.MouseEvent<HTMLDivElement>,
                      ) => {
                        this.elemHoverEnterEvent(event, arrIndex);
                      }}
                      onMouseLeave={(
                        event: React.MouseEvent<HTMLDivElement>,
                      ) => {
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
                            onCancel={(event?: React.MouseEvent) => {
                              event?.preventDefault();
                              event?.stopPropagation();
                            }}
                            onConfirm={(event?: React.MouseEvent) => {
                              this.deleteArrItem(
                                keyRoute!,
                                arrIndex,
                                curJsonData,
                              );
                              event?.preventDefault();
                              event?.stopPropagation();
                            }}
                            okText="确定"
                            cancelText="取消"
                          >
                            <DeleteIcon
                              // <img src={deleteIcon}
                              className="delete-operate-btn array-operate-btn"
                              onClick={(event: React.MouseEvent) => {
                                event?.preventDefault();
                                event?.stopPropagation();
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
                            onClick={(event: React.MouseEvent) => {
                              this.addArrayItem(
                                keyRoute!,
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
                              onClick={(
                                event: React.MouseEvent<HTMLElement>,
                              ) => {
                                sortArrayItem(keyRoute!, arrIndex, 'up');
                                event?.preventDefault();
                                event?.stopPropagation();
                              }}
                            />
                          </Tooltip>
                        )}
                        {arrIndex !== curJsonData.length - 1 && (
                          <Tooltip title={`向下移动`}>
                            <ArrowDownOutlined
                              className="array-operate-btn"
                              onClick={(event: React.MouseEvent) => {
                                if (keyRoute) {
                                  sortArrayItem?.(keyRoute, arrIndex, 'down');
                                }
                                event?.preventDefault();
                                event?.stopPropagation();
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
                      // key={curNodeKey}
                      // id={curNodeKey}
                    >
                      {renderChild({
                        parentType: curType,
                        jsonKey: 'items',
                        indexRoute: curIndexRoute,
                        keyRoute: curKeyRoute,
                        nodeKey: curNodeKey,
                        targetJsonSchema: arrayItemsDataObj,
                        isArrayItem: true,
                        arrIndex: arrIndex,
                      })}
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

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'array',
  component: ArraySchema,
});

export default ArraySchema;
