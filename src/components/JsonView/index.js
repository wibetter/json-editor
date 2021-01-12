import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import { isObject, isArray } from '$utils/typeof';
import './index.scss';

class JsonView extends React.PureComponent {
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
      targetJsonSchema,
      getJSONDataByKeyRoute,
    } = this.props;
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute);

    // 格式化JSON数据
    curJsonData =
      curJsonData !== undefined
        ? curJsonData
        : targetJsonSchema.default || '{}';
    // 判断当前jsonData是否是对象类型
    if (isObject(curJsonData) || isArray(curJsonData)) {
      curJsonData = JSON.stringify(curJsonData, null, 2);
    }

    return (
      <div className="json-view-box" key={nodeKey} id={nodeKey}>
        <div className="readOnly-btn">[只读]</div>
        <AceEditor
          id="json_area_ace"
          value={curJsonData}
          className="json-view-ace"
          mode="json"
          theme="solarized_light"
          name="JSON_CODE_EDIT"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          readOnly={true}
          minLines={5}
          maxLines={33}
          width={'100%'}
          setOptions={{
            useWorker: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    );
  }
}

export default inject((stores) => ({
  pageScreen: stores.JSONSchemaStore.pageScreen,
  getJSONDataByKeyRoute: stores.JSONEditorStore.getJSONDataByKeyRoute,
  getJSONDataTempByKeyRoute: stores.JSONEditorStore.getJSONDataTempByKeyRoute,
}))(observer(JsonView));
