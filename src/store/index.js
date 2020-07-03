import JSONSchemaStore from './JSONSchemaStore';
import JSONEditorStore from './JSONEditorStore';

const JSONStore = {
  JSONSchemaStore: new JSONSchemaStore(),
  JSONEditorStore: new JSONEditorStore(),
};

export default JSONStore;
