import * as React from 'react';
// import { inject, observer } from 'mobx-react';
import { registerRenderer } from '$core/factory';
import { toJS } from 'mobx';
import { BaseRendererProps } from '$types/index';
import { Tooltip } from 'antd';
import { truncate } from '@wibetter/json-utils';
import { catchJsonDataByWebCache } from '$mixins/index';
import {
  DownOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { buildStyle } from '$utils/index';
// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';
// 引入字体取色器样式
// @ts-ignore
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-extensions/dist/color-picker.css';
// 引入表格扩展（其他扩展：https://github.com/margox/braft-extensions）
// @ts-ignore
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

interface TextEditorSchemaState {
  isClosed: boolean;
  allControls: ControlType[];
  baseControls: ControlType[];
}

class TextEditorSchema extends React.PureComponent<
  BaseRendererProps,
  TextEditorSchemaState
> {
  constructor(props: BaseRendererProps) {
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
      baseControls: ['font-size', 'text-color', 'bold', 'italic', 'fullscreen'],
    };
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentWillMount() {
    const { pageScreen } = this.props.schemaStore || {};
    // 从web缓存中获取数值
    catchJsonDataByWebCache.call(this);
    if (pageScreen && pageScreen === 'wideScreen') {
      // 大屏幕时默认展开富文本编辑器
      this.setState({
        isClosed: false,
      });
    }
  }

  componentWillReceiveProps(nextProps: BaseRendererProps) {
    if (nextProps.keyRoute !== this.props.keyRoute) {
      /** 当key值路径发生变化时重新从web缓存中获取数值 */
      catchJsonDataByWebCache.call(this, nextProps.keyRoute);
    } else if (
      nextProps.schemaStore.pageScreen !== this.props.schemaStore.pageScreen
    ) {
      if (
        nextProps.schemaStore.pageScreen &&
        nextProps.schemaStore.pageScreen === 'wideScreen'
      ) {
        // 大屏幕时默认展开富文本编辑器
        this.setState({
          isClosed: false,
        });
      }
    }
  }

  /** 富文本内容变动事件处理器 */
  handleEditorChange = (editorState: any) => {
    const { keyRoute, jsonStore } = this.props;
    const { updateFormValueData } = jsonStore || {};
    updateFormValueData &&
      keyRoute &&
      updateFormValueData(keyRoute, editorState.toHTML()); // 更新数值
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { getJSONDataByKeyRoute } = jsonStore || {};
    const { keyRoute, jsonKey, nodeKey, targetJsonSchema } = this.props;
    const { isClosed } = this.state;
    const curJsonData =
      getJSONDataByKeyRoute && keyRoute && getJSONDataByKeyRoute(keyRoute); // 从jsonData中获取对应的html内容
    const editorState = BraftEditor.createEditorState(curJsonData); // 将html字符串转换成editorState
    const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
    // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

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
            ? 'text-editor-box wide-screen-element-warp'
            : 'text-editor-box mobile-screen-element-warp'
        }
        // key={nodeKey}
        id={nodeKey}
        style={style}
      >
        <div
          className="element-title"
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            this.setState({
              isClosed: !isClosed,
            });
            event.preventDefault();
            event.stopPropagation();
          }}
          style={titleStyle}
        >
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
          {isClosed ? (
            <RightOutlined className="close-operate-btn" />
          ) : (
            <DownOutlined className="close-operate-btn" />
          )}
        </div>
        <div
          className={`content-item ${isClosed ? 'closed' : ''}`}
          style={contentStyle}
        >
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

// 注册成一个json-editor渲染器
registerRenderer({
  type: 'text-editor',
  component: TextEditorSchema,
});

export default TextEditorSchema;
