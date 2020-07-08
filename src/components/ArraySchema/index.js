import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
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
  addArrayItem = (keyRoute) => {
    this.props.addArrayItem(keyRoute);
  };

  /** 删除数组项 */
  deleteArrItem = (keyRoute, arrIndex) => {
    this.props.deleteArrayIndex(keyRoute, arrIndex);
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
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }  block-element-warp`}
        key={nodeKey}
        id={nodeKey}
      >
        <div className="element-title">
          <Tooltip
            title={targetJsonData.description}
            placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
          >
            <span className="title-text">{targetJsonData.title}</span>
          </Tooltip>
          <Tooltip title="添加数据项">
            <PlusCircleOutlined
              className="add-operate-btn operate-btn"
              onClick={() => {
                this.addArrayItem(keyRoute);
              }}
            />
          </Tooltip>
        </div>
        <div className="content-item array-content">
          {isArray(curJsonData) &&
            curJsonData.map((arrItem, arrIndex) => {
              const curNodeKey = `${nodeKey}-array-items-${curJsonData.length}-${arrIndex}`;
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
                      indexRoute: `${indexRoute}-0`,
                      keyRoute: `${keyRoute}-${arrIndex}`,
                      nodeKey: curNodeKey,
                      targetJsonData: arrayItemsDataObj,
                      isArrayItem: true,
                      arrIndex,
                    }}
                  />
                  <div className="operate-btn-box">
                    <Tooltip title="删除数据项">
                      <CloseCircleOutlined
                        className="delete-operate-btn operate-btn"
                        onClick={() => {
                          this.deleteArrItem(keyRoute, arrIndex);
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
