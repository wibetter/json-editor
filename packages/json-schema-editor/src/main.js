import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import JSONStore from '$store/index';
import JSONSchema from '$components/JSONSchemaEditor/index';

/**
 * JSONSchema功能组件
 * @param props
 * @constructor
 */
export default class JSONSchemaEditor extends React.PureComponent {
  static propTypes = {
    wideScreen: PropTypes.any,
    onChange: PropTypes.func,
    data: PropTypes.any,
    typeList: PropTypes.any,
    element: PropTypes.any,
    jsonView: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
      schemaStore: new JSONStore.schemaStore(), // 初始化一份schemaStore
    };
  }

  render() {
    const { data, typeList, onChange, element, wideScreen } = this.props;
    const { schemaStore } = this.state;

    const renderContent = (
      <Provider schemaStore={schemaStore}>
        <JSONSchema {...this.props} />
      </Provider>
    );

    if (element) {
      ReactDOM.render(renderContent, element); // 挂载到指定位置
      return '';
    }
    return renderContent; // 直接输出dom元素
  }
}
