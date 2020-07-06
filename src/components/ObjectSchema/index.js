import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Tooltip } from 'antd';
import MappingRender from '$components/MappingRender';
import { getCurrentFormat, isFirstSchemaData } from '$utils/jsonSchema';
import './index.scss';

class ObjectSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.any,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (event) => {
    const { value } = event.target;
    const {
      indexRoute,
      jsonKey,
      updateFormValueData,
      targetJsonData,
    } = this.props;
    /*if (targetJsonData.title === value) return; // title值未改变则直接跳出
    updateFormValueData(indexRoute, jsonKey, {
      title: value,
    });*/
  };

  render() {
    const {
      indexRoute,
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
    } = this.props;
    const curFormat = getCurrentFormat(targetJsonData);
    // 判断是否是一级字段类型，如果是则不显示Title，避免重复的title
    const isFirstSchema = isFirstSchemaData(curFormat);

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        key={nodeKey}
      >
        {!isFirstSchema && targetJsonData.description && (
          <Tooltip
            title={targetJsonData.description}
            placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
          >
            <div className="element-title">{targetJsonData.title}</div>
          </Tooltip>
        )}
        {!isFirstSchema && !targetJsonData.description && (
          <div className="element-title">{targetJsonData.title}</div>
        )}
        <div
          className={
            isFirstSchema ? 'content-item' : 'content-item object-content'
          }
        >
          {targetJsonData.propertyOrder &&
            targetJsonData.propertyOrder.map((key, index) => {
              /** 1. 获取当前元素的路径值 */
              const currentIndexRoute = `${indexRoute}-${index}`;
              const currentKeyRoute = `${keyRoute}-${key}`; // key路径值，后续用于从jsonData中提取当前元素的数值
              /** 2. 获取当前元素的key值 */
              const currentJsonKey = key;
              /** 3. 获取当前元素的json结构对象 */
              const currentSchemaData =
                targetJsonData.properties[currentJsonKey];
              /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
              const currentFormat = getCurrentFormat(currentSchemaData);
              /** 5. 获取当前元素的id，用于做唯一标识 */
              const nodeKey = `${currentFormat}-${currentJsonKey}`;

              return MappingRender({
                parentType: currentFormat,
                jsonKey: currentJsonKey,
                indexRoute: currentIndexRoute,
                keyRoute: currentKeyRoute,
                nodeKey,
                targetJsonData: currentSchemaData,
              });
            })}
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByIndex: stores.JSONSchemaStore.getJSONDataByIndex,
  editJsonData: stores.JSONEditorStore.updateFormValueData,
}))(observer(ObjectSchema));
