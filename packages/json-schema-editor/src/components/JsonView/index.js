import * as React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_light'; // ace-builds
import {
  isObject,
  isArray,
  isFunction,
  hasProperties,
} from '@wibetter/json-utils';
import './index.scss';

class JsonView extends React.PureComponent {
  static propTypes = {
    jsonData: PropTypes.any,
    readOnly: PropTypes.bool,
    maxLines: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowWarn: false, // 用于判断是否显示错误信息
      warnText: '', // 错误内容
      curJSONDataTemp: undefined, // 用于记录当前不合规范的json数据
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = (newJsonData) => {
    if (this.props.onChange && isFunction(this.props.onChange)) {
      this.props.onChange(newJsonData);
    }
  };

  render() {
    const { jsonData, readOnly: _readOnly, maxLines } = this.props;
    let curJsonData = jsonData || {};
    const { isShowWarn, warnText, curJSONDataTemp } = this.state;
    const readOnly = _readOnly || false;

    // 格式化JSON数据
    curJsonData = curJsonData !== undefined ? curJsonData : curJsonData || '{}';
    // 判断当前jsonData是否是对象类型
    if (isObject(curJsonData) || isArray(curJsonData)) {
      curJsonData = JSON.stringify(curJsonData, null, 2);
    }

    return (
      <div className="json-view-box">
        {readOnly && <div className="readOnly-btn">[只读]</div>}
        {isShowWarn && (
          <div className="warning-box code-area-item">
            <div className="warning-img">X</div>
            <div className="warning-text">{warnText}</div>
          </div>
        )}
        <AceEditor
          id="json_area_ace"
          defaultValue={curJsonData}
          // value={hasProperties(curJSONDataTemp) ? curJSONDataTemp : curJsonData}
          className="json-view-ace"
          mode="json"
          theme="solarized_light"
          name="JSON_CODE_EDIT"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          readOnly={readOnly}
          minLines={5}
          maxLines={maxLines || 10}
          width={'100%'}
          setOptions={{
            useWorker: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          onChange={(newJsonData) => {
            try {
              const newJsonDataTemp = JSON.parse(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
              // 更新jsonData
              this.handleValueChange(newJsonDataTemp);
              this.setState({
                isShowWarn: false,
                curJSONDataTemp: undefined, // 重置
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
        />
      </div>
    );
  }
}

export default JsonView;
