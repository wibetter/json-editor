import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, message, Tooltip } from 'antd';
import AceEditor from "react-ace";
import JSON5 from "json5";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

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
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  /** 数值变动事件处理器 */
  handleValueChange = (event) => {
    const { value } = event.target;
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, value); // 更新数值
  };

  render() {
    const {
      nodeKey,
      keyRoute,
      targetJsonData,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute);
    // 格式化JSON数据
    curJsonData = curJsonData || '{}';

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        key={nodeKey}
        id={nodeKey}
      >
        <Tooltip
          title={targetJsonData.description}
          placement={pageScreen === 'wideScreen' ? 'topRight' : 'topLeft'}
        >
          <div className="element-title">{targetJsonData.title}</div>
        </Tooltip>
        <div className="content-item">
          <AceEditor
            id="json_unique_id"
            value={curJsonData}
            mode="json"
            theme="github"
            name="JSON_CODE_EDIT"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            readOnly={false}
            onBlur={() => {
              // JSON5.parse(curJsonData);
            }}
            minLines={5}
            maxLines={30}
            width={"100%"}
            onChange={newJsonVal => {
              try {
                const newJsonData = JSON5.parse(newJsonVal);
                if (newJsonData && newJsonVal !== curJsonData) {
                  // 更新jsonData
                }
                // setIsShowWarn(false);
              } catch (err) {
                /*setWarnText(err.message);
                setCurJsonData(newJsonVal);
                setIsShowWarn(true);*/
              }
            }}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              wrapEnabled: true,
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
