import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$components/factory';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import AceEditor from 'react-ace';
import { InfoCircleOutlined } from '@ant-design/icons';
import { truncate } from '@wibetter/json-utils';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { isObject } from '$utils/typeof';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';

class CodeAreaFormSchema extends React.PureComponent {
  static propTypes = {
    isIgnoreWarn: PropTypes.any,
    isReadOnly: PropTypes.any,
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
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

  /** 数值变动事件处理器 */
  handleValueChange = (newJsonData) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    updateFormValueData(keyRoute, newJsonData); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const {
      isReadOnly,
      jsonKey,
      isIgnoreWarn,
      nodeKey,
      keyRoute,
      targetJsonSchema,
    } = this.props;
    const { isShowWarn, warnText } = this.state;
    const readOnly = isReadOnly || targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
    // 从jsonData中获取对应的数值
    let curJsonData = getJSONDataByKeyRoute(keyRoute);
    // 格式化JSON数据
    curJsonData =
      curJsonData !== undefined
        ? curJsonData
        : targetJsonSchema.default || '() => {}';
    // 判断当前jsonData是否是对象类型
    if (isObject(curJsonData)) {
      curJsonData = JSON.stringify(curJsonData, null, 2);
    }

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
        className={`${
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp container-warp'
            : 'mobile-screen-element-warp'
        }`} //  element-title-card-warp
        // key={nodeKey}
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
                <span>（{truncate(jsonKey, { length: 15 })}）</span>
              )}
            </span>
          </Tooltip>
          {pageScreen === 'mobileScreen' && targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
        </div>
        <div className="content-item" style={contentStyle}>
          {!isIgnoreWarn && isShowWarn && (
            <div className="warning-box code-area-item">
              <div className="warning-img">X</div>
              <div className="warning-text">{warnText}</div>
            </div>
          )}
          <AceEditor
            id="code_area_ace"
            key={`${nodeKey}-ace`}
            className="code-area-item"
            value={curJsonData}
            mode="javascript"
            theme="monokai"
            name="JS_CODE_EDIT"
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
                eval(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
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

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'codearea',
  component: CodeAreaFormSchema,
});

export default CodeAreaFormSchema;
