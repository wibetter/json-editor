import React from 'react';
import { BaseRendererProps } from '$types/index';
import { registerRenderer } from '$core/factory';
import {
  Modal,
  Form,
  Input,
  Select,
  Tabs,
  Switch,
  InputNumber,
  Button,
  Space,
} from 'antd';
import {
  MinusCircleOutlined,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { toJS } from 'mobx';
import { buildStyle } from '$utils/index';
import './index.scss';

const { TabPane } = Tabs;

interface ApiSchemaState {
  visible: boolean;
}

class ApiSchema extends React.PureComponent<BaseRendererProps, ApiSchemaState> {
  form: any;

  constructor(props: BaseRendererProps) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.form.validateFields().then((values: any) => {
      const { keyRoute, jsonStore } = this.props;

      // 处理 headers（如果存在）
      if (values.headers && Array.isArray(values.headers)) {
        const headersObj: Record<string, string> = {};
        values.headers.forEach((item: any) => {
          if (item.key) {
            headersObj[item.key] = item.value || '';
          }
        });
        values.headers = headersObj;
      } else if (typeof values.headers === 'string') {
        try {
          values.headers = JSON.parse(values.headers || '{}');
        } catch (e) {
          values.headers = {};
        }
      }

      // 处理 data（如果存在）
      if (values.data && Array.isArray(values.data)) {
        const dataObj: Record<string, any> = {};
        values.data.forEach((item: any) => {
          if (item.key) {
            try {
              dataObj[item.key] = JSON.parse(item.value);
            } catch (e) {
              dataObj[item.key] = item.value;
            }
          }
        });
        values.data = dataObj;
      } else if (typeof values.data === 'string') {
        try {
          values.data = JSON.parse(values.data || '{}');
        } catch (e) {
          values.data = {};
        }
      }

      // 处理 cache：如果开关关闭，删除 cache 字段；如果开启，使用 cacheTime 的值
      if (values.cache) {
        values.cache = values.cacheTime || 3000;
      } else {
        delete values.cache;
      }
      delete values.cacheTime;

      // 删除空的数组对象
      if (values.headers && Object.keys(values.headers).length === 0) {
        delete values.headers;
      }
      if (values.data && Object.keys(values.data).length === 0) {
        delete values.data;
      }

      if (this.props.onChange) {
        // 如果有监听数据变动函数则优先触发
        this.props.onChange(values);
      } else {
        // 更新数值
        jsonStore.updateFormValueData(keyRoute, values);
      }

      this.setState({ visible: false });
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { schemaStore, jsonStore } = this.props;
    const { pageScreen } = schemaStore || {};
    const { keyRoute, targetJsonSchema, nodeKey } = this.props;
    const { visible } = this.state || {};

    if (!targetJsonSchema) {
      return null;
    }

    // 从jsonData中获取对应的数值
    const curJsonData =
      keyRoute && jsonStore ? jsonStore.getJSONDataByKeyRoute?.(keyRoute) : {};
    const currentValue = curJsonData || {};

    // 从 schema 中获取各个字段的配置信息
    const properties = targetJsonSchema.properties || {};
    const urlSchema = properties.url || {};
    const methodSchema = properties.method || {};
    const headersSchema = properties.headers || {};
    const dataSchema = properties.data || {};
    const dataTypeSchema = properties.dataType || {};
    const cacheSchema = properties.cache || {};
    const cacheTimeSchema = properties.cacheTime || {};

    const style = targetJsonSchema.style
      ? buildStyle(toJS(targetJsonSchema.style))
      : {};
    const titleStyle = targetJsonSchema.titleStyle
      ? buildStyle(toJS(targetJsonSchema.titleStyle))
      : {};
    const contentStyle = targetJsonSchema.contentStyle
      ? buildStyle(toJS(targetJsonSchema.contentStyle))
      : {};

    const methodUpper = currentValue.method?.toUpperCase() || 'GET';
    const summary = `${methodUpper !== 'GET' ? methodUpper + ': ' : ''}${currentValue.url || ''}`;

    // 将 headers 对象转换为数组格式用于表单编辑
    const headersToArray = (headers: any) => {
      if (!headers || typeof headers !== 'object') return [];
      return Object.keys(headers).map((key: string) => ({
        key,
        value:
          typeof headers[key] === 'string'
            ? headers[key]
            : JSON.stringify(headers[key]),
      }));
    };

    // 将 data 对象转换为数组格式用于表单编辑
    const dataToArray = (data: any) => {
      if (!data || typeof data !== 'object') return [];
      return Object.keys(data).map((key: string) => ({
        key,
        value:
          typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]),
      }));
    };

    return (
      <div
        className={
          pageScreen === 'wideScreen'
            ? 'wide-screen-element-warp'
            : 'mobile-screen-element-warp'
        }
        id={nodeKey}
        style={style}
      >
        <div className="element-title" style={titleStyle}>
          <span className="title-text" title={targetJsonSchema.title}>
            {targetJsonSchema.title}
            {targetJsonSchema.showKey && (
              <span>（{targetJsonSchema.jsonKey}）</span>
            )}
          </span>
        </div>
        <div className="content-item" style={contentStyle}>
          <Input
            className="api-schema-input"
            value={summary}
            placeholder="点击右侧设置图标配置 API 接口"
            readOnly
            addonAfter={<SettingOutlined onClick={this.showModal} />}
          />
        </div>
        <Modal
          title={targetJsonSchema.title || 'API 配置'}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
          okText="确定"
          cancelText="取消"
        >
          <Form
            ref={(form) => (this.form = form)}
            initialValues={{
              url: currentValue.url || '',
              method: currentValue.method || 'get',
              dataType: currentValue.dataType || 'json',
              cache: !!currentValue.cache,
              cacheTime:
                typeof currentValue.cache === 'number'
                  ? currentValue.cache
                  : 3000,
              headers: headersToArray(currentValue.headers),
              data: dataToArray(currentValue.data),
            }}
            layout="vertical"
          >
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={targetJsonSchema.tabTitles?.basic || '接口设置'}
                key="1"
              >
                <Form.Item
                  name="method"
                  label={methodSchema.title || '发送方式'}
                  rules={[{ required: methodSchema.isRequired !== false }]}
                >
                  <Select>
                    <Select.Option value="get">GET</Select.Option>
                    <Select.Option value="post">POST</Select.Option>
                    <Select.Option value="put">PUT</Select.Option>
                    <Select.Option value="patch">PATCH</Select.Option>
                    <Select.Option value="delete">DELETE</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="url"
                  label={urlSchema.title || '接口地址'}
                  rules={[{ required: urlSchema.isRequired !== false }]}
                >
                  <Input placeholder={urlSchema.placeholder || 'http://'} />
                </Form.Item>

                <Form.Item
                  name="dataType"
                  label={dataTypeSchema.title || '数据格式'}
                >
                  <Select>
                    <Select.Option value="json">JSON</Select.Option>
                    <Select.Option value="form-data">FormData</Select.Option>
                    <Select.Option value="form">Form</Select.Option>
                  </Select>
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues: any, currentValues: any) =>
                      prevValues.dataType !== currentValues.dataType
                    }
                  >
                    {({ getFieldValue }: any) => {
                      const dataType = getFieldValue('dataType') || 'json';
                      const formatMap: Record<string, string> = {
                        json: 'application/json',
                        'form-data': 'multipart/form-data',
                        form: 'application/x-www-form-urlencoded',
                      };
                      return (
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#999',
                            marginTop: '4px',
                          }}
                        >
                          {dataTypeSchema.description ||
                            `发送体格式为：${formatMap[dataType] || 'application/json'}，当发送内容中存在文件时会自动使用 form-data 格式。`}
                        </div>
                      );
                    }}
                  </Form.Item>
                </Form.Item>

                <Form.Item
                  name="cache"
                  label={cacheSchema.title || '是否设置缓存'}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues: any, currentValues: any) =>
                    prevValues.cache !== currentValues.cache
                  }
                >
                  {({ getFieldValue }: any) =>
                    getFieldValue('cache') ? (
                      <Form.Item
                        name="cacheTime"
                        label={cacheTimeSchema.title || '缓存时间（ms）'}
                      >
                        <InputNumber
                          min={0}
                          step={500}
                          style={{ width: '100%' }}
                        />
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#999',
                            marginTop: '4px',
                          }}
                        >
                          {cacheTimeSchema.description ||
                            '设置该请求缓存有效时间，单位 ms'}
                        </div>
                      </Form.Item>
                    ) : null
                  }
                </Form.Item>
              </TabPane>

              <TabPane
                tab={targetJsonSchema.tabTitles?.http || 'HTTP配置'}
                key="2"
              >
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '12px' }}>
                    {headersSchema.title || '请求头 (Headers)'}
                  </h4>
                  <Form.List name="headers">
                    {(
                      fields: any[],
                      {
                        add,
                        remove,
                      }: {
                        add: (defaultValue?: any) => void;
                        remove: (index: number) => void;
                      },
                    ) => (
                      <>
                        {fields.map(({ key, name, ...restField }: any) => (
                          <Space
                            key={key}
                            style={{ display: 'flex', marginBottom: 8 }}
                            align="baseline"
                          >
                            <Form.Item
                              {...restField}
                              name={[name, 'key']}
                              rules={[{ required: true, message: '请输入Key' }]}
                              style={{ flex: 1 }}
                            >
                              <Input placeholder="Key" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'value']}
                              style={{ flex: 1 }}
                            >
                              <Input placeholder="Value" />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={(event: React.MouseEvent) =>
                                remove(name)
                              }
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={(event: React.MouseEvent) => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            添加请求头
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ marginBottom: '12px' }}>
                    {dataSchema.title || '发送数据 (Data)'}
                  </h4>
                  <Form.List name="data">
                    {(
                      fields: any[],
                      {
                        add,
                        remove,
                      }: {
                        add: (defaultValue?: any) => void;
                        remove: (index: number) => void;
                      },
                    ) => (
                      <>
                        {fields.map(({ key, name, ...restField }: any) => (
                          <Space
                            key={key}
                            style={{ display: 'flex', marginBottom: 8 }}
                            align="baseline"
                          >
                            <Form.Item
                              {...restField}
                              name={[name, 'key']}
                              rules={[{ required: true, message: '请输入Key' }]}
                              style={{ flex: 1 }}
                            >
                              <Input placeholder="Key" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'value']}
                              style={{ flex: 1 }}
                            >
                              <Input placeholder="Value (支持JSON)" />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={(event: React.MouseEvent) =>
                                remove(name)
                              }
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={(event: React.MouseEvent) => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            添加发送数据
                          </Button>
                        </Form.Item>
                        {dataSchema.description && (
                          <div
                            style={{
                              fontSize: '12px',
                              color: '#999',
                              marginTop: '8px',
                            }}
                          >
                            {dataSchema.description}
                          </div>
                        )}
                      </>
                    )}
                  </Form.List>
                </div>
              </TabPane>
            </Tabs>
          </Form>
        </Modal>
      </div>
    );
  }
}

registerRenderer({
  type: 'api',
  component: ApiSchema,
});

export default ApiSchema;
