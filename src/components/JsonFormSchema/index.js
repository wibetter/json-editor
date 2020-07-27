import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import {
  isObject,
  isArray,
  getWebCacheData,
  deleteWebCacheData,
} from '$utils/index';

class JsonFormSchema extends React.PureComponent {
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
    // 组件内部维护的数据
    this.state = {
      isShowWarn: false, // 用于判断是否显示错误信息
      warnText: '', // 错误内容
      curJSONDataTemp: '', // 用于记录当前不合规范的json数据
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (newJsonData) => {
    const { keyRoute, updateFormValueData } = this.props;
    if (newJsonData) {
      updateFormValueData(keyRoute, newJsonData); // 更新数值
    }
  };

  render() {
    const {
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const { isShowWarn, warnText, curJSONDataTemp } = this.state;
    const readOnly = targetJsonData.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonData.isRequired || false; // 是否必填（默认非必填）
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute);

    // 判断web缓存中是否有schema写入的缓存数据
    const backUpKeyRoute = getWebCacheData(`${keyRoute}-json`);
    if (backUpKeyRoute) {
      const beckUpJsonData = getJSONDataByKeyRoute(backUpKeyRoute);
      if (beckUpJsonData) {
        curJsonData = beckUpJsonData; // 使用原始位置对应的数值
        // 删除前端缓存后立即更新到jsonData中
        deleteWebCacheData(`${keyRoute}-json`);
        this.handleValueChange(beckUpJsonData);
      }
    }

    // 格式化JSON数据
    curJsonData =
      curJsonData !== undefined ? curJsonData : targetJsonData.default || '{}';
    // 判断当前jsonData是否是对象类型
    if (isObject(curJsonData) || isArray(curJsonData)) {
      curJsonData = JSON.stringify(curJsonData, null, 2);
    }

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
          <span className="title-text warning-text">
            {readOnly ? '[只读]' : ''}
          </span>
          <Tooltip title={targetJsonData.description} placement="top">
            <span
              className="title-text"
              title={
                pageScreen === 'wideScreen' &&
                targetJsonData.title.length > (readOnly ? 4 : 6)
                  ? targetJsonData.title
                  : ''
              }
            >
              {targetJsonData.title}
            </span>
          </Tooltip>
        </div>
        <div className="content-item object-content">
          {isShowWarn && (
            <div className="warning-box code-area-item">
              <div className="warning-img">X</div>
              <div className="warning-text">{warnText}</div>
            </div>
          )}
          <AceEditor
            id="json_area_ace"
            value={curJSONDataTemp || curJsonData}
            className="code-area-item"
            mode="json"
            theme="solarized_light"
            name="JSON_CODE_EDIT"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            readOnly={readOnly}
            minLines={5}
            maxLines={30}
            width={'100%'}
            onChange={(newJsonData) => {
              try {
                const newJsonDataTemp = JSON.parse(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
                // 更新jsonData
                this.handleValueChange(newJsonDataTemp);
                this.setState({
                  isShowWarn: false,
                  curJSONDataTemp: '', // 用于记录当前不合规范的json数据
                });
              } catch (err) {
                // 更新jsonData
                this.setState({
                  curJSONDataTemp: newJsonData, // 记录当前格式不正确的json数据
                  warnText: err.message,
                  isShowWarn: true,
                });
              }
            }}
            setOptions={{
              useWorker: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      </div>
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  indexRoute2keyRoute: stores.JSONSchemaStore.indexRoute2keyRoute,
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
}))(observer(JsonFormSchema));
