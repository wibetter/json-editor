import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { message, Tooltip } from 'antd';
import AceEditor from 'react-ace';
import JSON5 from 'json5';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import { isObject } from '$utils/index';

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
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (newJsonData) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, newJsonData); // 更新数值
  };

  render() {
    const {
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const { isShowWarn, warnText } = this.state;
    const readOnly = targetJsonData.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonData.isRequired || false; // 是否必填（默认非必填）
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute);
    // 格式化JSON数据
    curJsonData =
      curJsonData !== undefined ? curJsonData : targetJsonData.default || '{}';
    // 判断当前jsonData是否是对象类型
    if (isObject(curJsonData)) {
      curJsonData = JSON5.stringify(curJsonData);
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
                pageScreen === 'wideScreen' && targetJsonData.title.length > 6
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
            value={curJsonData}
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
                JSON5.parse(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
                // 更新jsonData
                this.handleValueChange(newJsonData);
                this.setState({
                  isShowWarn: false,
                });
              } catch (err) {
                // 更新jsonData
                this.handleValueChange(newJsonData);
                this.setState({
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
  updateFormValueData: stores.JSONEditorStore.updateFormValueData,
}))(observer(JsonFormSchema));
