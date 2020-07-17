import JSONSchemaStore from './JSONSchemaStore';
import JSONEditorStore from './JSONEditorStore';

class RootJSONStore {
  constructor() {
    this.JSONSchemaStore = new JSONSchemaStore(this);
    this.JSONEditorStore = new JSONEditorStore(this);
  }
}

export default RootJSONStore;
