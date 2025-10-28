import { inject, observer } from 'mobx-react';

export default function withStore(rendererComponent) {
  // 注入 store
  const witchStoreRenderer = inject((stores) => ({
    schemaStore: stores.JSONSchemaStore,
    jsonStore: stores.JSONEditorStore,
  }))(observer(rendererComponent));

  return witchStoreRenderer;
}
