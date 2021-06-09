import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import RootJSONStore from '$store/index';
import JSONDataEditor from '$components/JSONDataEditor/index';
import './main.scss';

/**
 * JSONEditor功能组件
 * @param props
 * @constructor
 */
export default class JSONEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rootJSONStore: new RootJSONStore(), // 初始化一份rootJSONStore
    };
  }

  static propTypes = {
    viewStyle: PropTypes.any,
    wideScreen: PropTypes.any,
    onChange: PropTypes.func,
    jsonView: PropTypes.any,
    schemaData: PropTypes.any,
    jsonData: PropTypes.any,
    element: PropTypes.any,
  };

  render() {
    const { element } = this.props;
    const { rootJSONStore } = this.state;

    const renderContent = (
      <Provider
        JSONSchemaStore={rootJSONStore.JSONSchemaStore}
        JSONEditorStore={rootJSONStore.JSONEditorStore}
      >
        <JSONDataEditor {...this.props} />
      </Provider>
    );

    if (element) {
      ReactDOM.render(element, renderContent); // 挂载到指定位置
      return '';
    }
    return renderContent; // 直接输出dom元素
  }
}
