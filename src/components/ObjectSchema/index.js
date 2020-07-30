import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import MappingRender from '$components/MappingRender';
import { getCurrentFormat, isFirstSchemaData } from '$utils/jsonSchema';
import { catchJsonDataByWebCache } from '$mixins/index';

class ObjectSchema extends React.PureComponent {
  static propTypes = {
    isArrayItem: PropTypes.any, // 如果是数组项，title会进行特殊显示
    arrIndex: PropTypes.any, // 如果是数组项，title会进行特殊显示
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.any,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
  };

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

  render() {
    const {
      indexRoute,
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
      isArrayItem,
      arrIndex,
    } = this.props;
    const curFormat = getCurrentFormat(targetJsonData);
    // 判断是否是一级字段类型，如果是则不显示Title，避免重复的title
    const isFirstSchema = isFirstSchemaData(curFormat);

    return (
      <div
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp  block-element-warp'
            : 'mobile-screen-element-warp'
        }`}
        key={nodeKey}
        id={nodeKey}
      >
        {!isFirstSchema && targetJsonData.description && (
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
            <span>{isArrayItem ? `/${arrIndex + 1}` : ''}</span>
          </div>
        )}
        {!isFirstSchema && !targetJsonData.description && (
          <div className="element-title">
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
            <span>{isArrayItem ? `/${arrIndex + 1}` : ''}</span>
          </div>
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
              const childNodeKey = `${nodeKey}-${currentFormat}-${currentJsonKey}`;

              return MappingRender({
                parentType: currentFormat,
                jsonKey: currentJsonKey,
                indexRoute: currentIndexRoute,
                keyRoute: currentKeyRoute,
                nodeKey: childNodeKey,
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
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(ObjectSchema));
