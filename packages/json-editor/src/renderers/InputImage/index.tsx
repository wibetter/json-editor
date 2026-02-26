import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { Tooltip, message, Upload } from 'antd';
import {
  InfoCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { truncate, isArray, isString } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import { buildStyle } from '$utils/index';
import { BaseRendererProps } from '$types/index';

interface InputImageSchemaState {
  loading: boolean;
}

class InputImageSchema extends React.PureComponent<
  BaseRendererProps,
  InputImageSchemaState
> {
  constructor(props: BaseRendererProps) {
    super(props);
    this.state = {
      loading: false,
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDeleteChange = this.handleDeleteChange.bind(this);
  }

  // 方式1：在class组件中声明静态属性static，且必须是contextType，确保当前组件可以使用全局context中的数据（this.context不为空）
  // static contextType = ThemeContext;

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    }
  }

  handleImageChange = (fileInfo: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    if (fileInfo.file.status === 'uploading') {
      this.setState({
        loading: true,
      });
      return;
    }

    if (fileInfo.file.status === 'done') {
      const responseData = fileInfo.file.response || {};
      if (responseData.url) {
        updateFormValueData &&
          keyRoute &&
          updateFormValueData(keyRoute, responseData.url);
      }
    } else if (fileInfo.file.status === 'error') {
      message.error(`${fileInfo.file.name} 图片上传失败。`);
    }
    this.setState({
      loading: false,
    });
  };

  handleDeleteChange = () => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    updateFormValueData && keyRoute && updateFormValueData(keyRoute, '');
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute, options: _options } = jsonStore || {};
    const { nodeKey, jsonKey, keyRoute, targetJsonSchema } = this.props;
    const options = _options || {};
    const { loading } = this.state;
    // 从jsonData中获取对应的数值
    const curJsonData = keyRoute && getJSONDataByKeyRoute(keyRoute);
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
    let defaultFileList = [];
    if (curJsonData && isArray(curJsonData)) {
      defaultFileList = curJsonData;
    } else if (curJsonData && isString(curJsonData)) {
      defaultFileList.push(curJsonData);
    }

    const uploadProps = {
      name: 'file', // targetJsonSchema.name || jsonKey || 'imgFile',
      action: targetJsonSchema.uploadAction || options.uploadAction,
      accept:
        targetJsonSchema.accept || options.uploadAccept || '.jpeg,.jpg,.png',
      // multiple: targetJsonSchema.multiple ?? false,
      maxCount: targetJsonSchema.multiple ? targetJsonSchema.maxCount || 1 : 1,
      defaultFileList,
      // showUploadList: false,
      listType: targetJsonSchema.listType ?? 'picture-card',
      withCredentials: true,
      method: targetJsonSchema.uploadMethod || options.uploadMethod || 'POST',
      headers: {
        // authorization: targetJsonSchema.authorization || 'authorization-content', // 会影响默认的图片上传
      },
      onChange: this.handleImageChange,
      onRemove: this.handleDeleteChange,
    };

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
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
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
                <span>（{truncate(jsonKey || '', { length: 15 })}）</span>
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
          <div className="form-item-box">
            <Upload {...uploadProps} disabled={readOnly}>
              <button
                style={{
                  border: 0,
                  background: 'none',
                  cursor: 'pointer',
                }}
                type="button"
              >
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  上传图片
                </div>
              </button>
            </Upload>
          </div>
        </div>
      </div>
    );
  }
}

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'input-image',
  component: InputImageSchema,
});

export default InputImageSchema;
