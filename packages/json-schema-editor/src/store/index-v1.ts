import JSONSchemaStore from './JSONSchemaStore';

// 单例模式
const JSONStore = {
  jsonSchemaStore: new JSONSchemaStore(),
};

export default JSONStore;
