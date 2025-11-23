import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Input, Select } from 'antd';
const { Option } = Select;
import {
  getNextIndexRoute,
  getParentIndexRoute,
  EventTypeDataList,
} from '@wibetter/json-utils';
import { BaseRendererProps } from '$types/index';
import './index.scss';

/** 主要用于渲染typeSelect类型的元素
 * 备注：SelectFormSchema组件中只有default是可编辑的（提供选择列表） */
class SelectFormSchema extends React.PureComponent<BaseRendererProps> {
  constructor(props: BaseRendererProps) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
  }

  /** 数据源类型变动事件处理器 */
  typeChange = (newType: string) => {
    const { editSchemaData, updateSchemaData } = this.props.schemaStore || {};
    const { indexRoute, jsonKey, targetJsonSchema, typeSelectData } =
      this.props;
    if (targetJsonSchema.default === newType) return; // default值未改变则直接跳出
    editSchemaData(indexRoute || '', jsonKey, {
      default: newType,
    });

    // 判断是否在type改变时进行特殊处理（比如dataSource类型中需要调整data的数据内容）
    if (typeSelectData) {
      const newDataJSONObj = (typeSelectData as any)[newType];
      if (newDataJSONObj && targetJsonSchema.title === '数据源类型') {
        // 根据indexRoute获取下一个子元素的路径值
        const nextIndexRoute = getNextIndexRoute(indexRoute);
        // 类型改变时更新targetJsonSchema.properties.data中的数据
        editSchemaData(nextIndexRoute, 'data', newDataJSONObj);
      }
    }
    // event类型的特殊处理
    if (EventTypeDataList) {
      const newEventJSONObj = (EventTypeDataList as any)[newType];
      if (targetJsonSchema.title === '事件类型' && newEventJSONObj) {
        // 根据indexRoute获取下一个子元素的路径值
        const parentIndexRoute = getParentIndexRoute(indexRoute);
        // 类型改变时更新父元素的json数据
        updateSchemaData(parentIndexRoute, newEventJSONObj);
      }
    }
  };

  render() {
    const { nodeKey, targetJsonSchema } = this.props;
    const curType = targetJsonSchema.type;
    const options = targetJsonSchema.options || [];

    return (
      <div className="typeSelect-schema-box" id={nodeKey}>
        <div className="key-input-item">
          <Select
            defaultValue={targetJsonSchema.default || 'local'}
            onChange={this.typeChange}
          >
            {options.map((optionItem: any, optionIndex: number) => (
              <Option key={optionIndex} value={optionItem.value}>
                {optionItem.label || optionItem.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="type-select-item">
          <Select defaultValue={curType} style={{ width: 120 }} disabled={true}>
            <Option key={curType} value={curType}>
              {curType}
            </Option>
          </Select>
        </div>
        <div className="title-input-item">
          <Input defaultValue={targetJsonSchema.title} disabled={true} />
        </div>
        <div className="operate-item">&nbsp;</div>
      </div>
    );
  }
}

export default inject((stores: any) => ({
  schemaStore: stores.schemaStore,
}))(observer(SelectFormSchema));
