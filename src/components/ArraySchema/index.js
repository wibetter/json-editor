import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { message, Tooltip } from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import ObjectSchema from '$components/ObjectSchema/index';
import { isArray } from '$utils/index';
import { getCurrentFormat } from '$utils/jsonSchema';
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
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.addArrayItem = this.addArrayItem.bind(this);
    this.deleteArrItem = this.deleteArrItem.bind(this);
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
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const currentFormat = getCurrentFormat(targetJsonData);
    // 从jsonData中获取对应的数值
    const curJsonData = getJSONDataByKeyRoute(keyRoute);
    const arrayItemsDataObj = targetJsonData.items;

    return (
      <div
        className="mobile-screen-element-warp block-element-warp"
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip title={targetJsonData.description} placement="top">
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' && targetJsonData.title.length > 6
                  ? targetJsonData.title
                  : ''
              }
            >
              {targetJsonData.title}
            </span>
          </Tooltip>
          <Tooltip title="添加数据项">
            <PlusCircleOutlined
              className="add-operate-btn array-operate-btn"
              onClick={() => {
                this.addArrayItem(keyRoute, curJsonData);
              }}
            />
          </Tooltip>
        </div>
        <div className="content-item array-content">
          {isArray(curJsonData) &&
            curJsonData.map((arrItem, arrIndex) => {
              const curNodeKey = `${nodeKey}-array-items-${curJsonData.length}-${arrIndex}`;
              const curIndexRoute = `${indexRoute}-0`;
              const curKeyRoute = `${keyRoute}-${arrIndex}`;
              return (
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
                  <div className="operate-btn-box">
                    <Tooltip title="删除数据项">
                      <CloseCircleOutlined
                        className="delete-operate-btn array-operate-btn"
                        onClick={() => {
                          this.deleteArrItem(keyRoute, arrIndex, curJsonData);
                        }}
                      />
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  triggerChange: stores.JSONEditorStore.triggerChange,
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  deleteArrayIndex: stores.JSONEditorStore.deleteArrayIndex,
  addArrayItem: stores.JSONEditorStore.addArrayItem,
}))(observer(ArraySchema));
