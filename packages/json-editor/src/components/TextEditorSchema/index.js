import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { catchJsonDataByWebCache } from '$mixins/index';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入字体取色器样式
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-extensions/dist/color-picker.css';
// 引入表格扩展（其他扩展：https://github.com/margox/braft-extensions）
import Table from 'braft-extensions/dist/table';
import 'braft-extensions/dist/table.css';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.scss';

const colorOptions = {
  theme: 'light', // 指定取色器样式主题，支持dark和light两种样式
};
BraftEditor.use([ColorPicker(colorOptions)]);

// 表格配置项
const tableOptions = {
  defaultColumns: 3, // 默认列数
  defaultRows: 3, // 默认行数
  withDropdown: false, // 插入表格前是否弹出下拉菜单
  columnResizable: false, // 是否允许拖动调整列宽，默认false
  exportAttrString: 'border="1" style="border-collapse: collapse"', // 指定输出HTML时附加到table标签上的属性字符串
};
BraftEditor.use(Table(tableOptions));

class TextEditorSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    keyRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonSchema: PropTypes.any,
    pageScreen: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClosed: true, // 是否为关闭状态，默认是关闭状态
      allControls: [
        'undo',
        'redo',
        'separator',
        'headings',
        'font-size',
        'line-height', // 备注：行高设置无效（待处理BUG）
        'letter-spacing',
        'separator',
        'text-color',
        'bold',
        'italic',
        'underline',
        'strike-through',
        'separator',
        'superscript',
        'subscript',
        'remove-styles',
        // 'emoji', // 备注：数据库可能不支持emoji格式
        'separator',
        'text-indent',
        'text-align',
        'separator',
        'list-ul',
        'list-ol',
        'blockquote',
        'code',
        'separator',
        'link',
        'separator',
        'media',
        'table',
        'hr',
        // 'clear',
        'separator',
        'fullscreen',
      ],
      baseControls: ['font-size', 'text-color', 'bold', 'italic'],
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentWillMount() {
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
    if (this.props.pageScreen && this.props.pageScreen === 'wideScreen') {
      // 大屏幕时默认展开富文本编辑器
      this.setState({
        isClosed: false,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    } else if (nextProps.pageScreen !== this.props.pageScreen) {
      if (nextProps.pageScreen && nextProps.pageScreen === 'wideScreen') {
        // 大屏幕时默认展开富文本编辑器
        this.setState({
          isClosed: false,
        });
      }
    }
  }

  /** 富文本内容变动事件处理器 */
  handleEditorChange = (editorState) => {
    const { keyRoute, updateFormValueData } = this.props;
    updateFormValueData(keyRoute, editorState.toHTML()); // 更新数值
  };

  render() {
    const {
      keyRoute,
      nodeKey,
      targetJsonSchema,
      pageScreen,
      getJSONDataByKeyRoute,
    } = this.props;
    const { isClosed } = this.state;
    const curJsonData = getJSONDataByKeyRoute(keyRoute); // 从jsonData中获取对应的html内容
    const editorState = BraftEditor.createEditorState(curJsonData); // 将html字符串转换成editorState
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

    return (
      <div
        className={'text-editor-box mobile-screen-element-warp'}
        key={nodeKey}
        id={nodeKey}
      >
        <div
          className="element-title"
          onClick={(event) => {
            this.setState({
              isClosed: !isClosed,
            });
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <span className="title-text warning-text">
            {readOnly ? '[只读]' : ''}
          </span>
          <span
            className="title-text"
            title={
              pageScreen === 'wideScreen' &&
              targetJsonSchema.title &&
              targetJsonSchema.title.length > (readOnly ? 4 : 6)
                ? targetJsonSchema.title
                : ''
            }
          >
            {targetJsonSchema.title}
          </span>
          {targetJsonSchema.description && (
            <Tooltip title={targetJsonSchema.description} placement="top">
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          )}
          {isClosed ? (
            <RightOutlined className="close-operate-btn" />
          ) : (
            <DownOutlined className="close-operate-btn" />
          )}
        </div>
        <div className={`content-item ${isClosed ? 'closed' : ''}`}>
          <div className="form-item-box">
            <BraftEditor
              key={`${nodeKey}-textEditor`}
              controls={
                pageScreen === 'wideScreen'
                  ? this.state.allControls
                  : this.state.baseControls
              } // allControls baseControls
              media={{
                accepts: {
                  image:
                    'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                  video: false,
                  audio: false,
                },
                pasteImage: true, // 是否允许粘贴图片到编辑器
              }}
              defaultValue={editorState}
              readOnly={readOnly}
              placeholder={
                targetJsonSchema.placeholder ||
                `请输入${targetJsonSchema.title}`
              }
              lineHeights={[1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4]}
              onChange={this.handleEditorChange}
              onSave={this.handleEditorChange} // 在编辑器获得焦点时按下ctrl+s会执行此方法
            />
          </div>
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
}))(observer(TextEditorSchema));
