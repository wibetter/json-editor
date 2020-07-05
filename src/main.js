import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';

import JSONStore from '$store/index';
import JSONDataEditor from '$components/JSONDataEditor/index';

/**
 * JSONEditor功能组件
 * @param props
 * @constructor
 */
export default class JSONEditor extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    schemaData: PropTypes.any,
    jsonData: PropTypes.any,
    element: PropTypes.any,
  };

  render() {
    const { schemaData, jsonData, onChange, element } = this.props;

    const renderContent = (
      <Provider
        JSONSchemaStore={JSONStore.JSONSchemaStore}
        JSONEditorStore={JSONStore.JSONEditorStore}
      >
        <JSONDataEditor
          schemaData={schemaData}
          jsonData={jsonData}
          onChange={onChange}
        />
      </Provider>
    );

    if (element) {
      ReactDOM.render(renderContent, element); // 挂载到指定位置
      return '';
    } else {
      return renderContent; // 直接输出dom元素
    }
  }
}
