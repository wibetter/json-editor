import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { SchemaStore, JSONStore } from '$types/index';

interface Stores {
  JSONSchemaStore: SchemaStore;
  JSONEditorStore: JSONStore;
}

export default function withStore<P extends object = {}>(
  rendererComponent: React.ComponentType<P>,
): React.ComponentType<
  P & { schemaStore?: SchemaStore; jsonStore?: JSONStore }
> {
  // 注入 store
  const witchStoreRenderer = inject((stores: Stores) => ({
    schemaStore: stores.JSONSchemaStore,
    jsonStore: stores.JSONEditorStore,
  }))(observer(rendererComponent));

  return witchStoreRenderer;
}
