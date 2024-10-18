import { ComponentSchema, Schema } from '_types';
import {
  ComponentsMetaData,
  ComponentsPropertiesData,
  ComponentsValidationData,
  ComponentsTree,
  ComponentsRelationsData,
} from '_types/components';
import { createEvent, createStore, UnitValue } from 'effector';

const $schema = createStore<Schema>({
  id: '',
  version: '1.0.0',
  components: [],
});

export const $componentsTree = createStore<ComponentsTree>([]);

export const $componentsPropertiesData = createStore<ComponentsPropertiesData>(
  {}
);

export const $componentsMetaData = createStore<ComponentsMetaData>({});

export const $componentsValidationData = createStore<ComponentsValidationData>(
  {}
);

export const $componentsRelationsData = createStore<ComponentsRelationsData>(
  {}
);

export const setFullSchemaEvent = createEvent<Schema>('setFullSchemaEvent');

export const expandSchemaToStoresEvent = createEvent<{
  tree: UnitValue<typeof $componentsTree>;
  properties: UnitValue<typeof $componentsPropertiesData>;
  meta: UnitValue<typeof $componentsMetaData>;
  validation: UnitValue<typeof $componentsValidationData>;
  relations: UnitValue<typeof $componentsRelationsData>;
}>('expandSchemaToStoresEvent');

export const updateComponentPropertiesEvent = createEvent<{
  id: ComponentSchema['meta']['id'];
  data: any;
}>('updateComponentPropertiesMapEvent');

$schema.on(setFullSchemaEvent, (_, data) => data);

$componentsPropertiesData.on(
  updateComponentPropertiesEvent,
  (cur, { id, data }) => ({
    ...cur,
    [id]: { ...cur[id], ...data },
  })
);
