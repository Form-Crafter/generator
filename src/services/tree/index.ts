import { ComponentId, ComponentSchema, Schema } from '_types';
import {
  ComponentsMetaData,
  ComponentsPropertiesData,
  ComponentsValidationData,
  ComponentsTree,
  ComponentsRelationsData,
} from '_types/components';
import { combine, createEvent, createStore, UnitValue } from 'effector';

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

export const $componentsData = combine(
  $componentsTree,
  $componentsPropertiesData,
  $componentsMetaData,
  $componentsValidationData,
  $componentsRelationsData,
  (tree, properties, meta, validation, relations) => ({
    tree,
    properties,
    meta,
    validation,
    relations,
  })
);

export const runExpandSchemaIntoEvent = createEvent<Pick<Schema, 'components'>>(
  'runExpandSchemaIntoEvent'
);

export const componentsDataForSettingEvent = createEvent<{
  tree?: UnitValue<typeof $componentsTree>;
  properties?: UnitValue<typeof $componentsPropertiesData>;
  meta?: UnitValue<typeof $componentsMetaData>;
  validation?: UnitValue<typeof $componentsValidationData>;
  relations?: UnitValue<typeof $componentsRelationsData>;
}>('componentsDataForSettingEvent');

export const updateComponentPropertiesEvent = createEvent<{
  id: ComponentId;
  data: Partial<ComponentSchema['properties']>;
}>('updateComponentPropertiesEvent');

export const setComponentsTreeEvent = createEvent<ComponentsTree>(
  'setComponentsTreeEvent'
);

export const setComponentsPropertiesDataEvent =
  createEvent<ComponentsPropertiesData>('setComponentsPropertiesDataEvent');

export const setComponentsMetaDataEvent = createEvent<ComponentsMetaData>(
  'setComponentsMetaDataEvent'
);

export const setComponentsValidationDataEvent =
  createEvent<ComponentsValidationData>('setComponentsValidationDataEvent');

export const setComponentsRelationsDataEvent =
  createEvent<ComponentsRelationsData>('setComponentsRelationsDataEvent');

$componentsTree.on(setComponentsTreeEvent, (_, data) => data);

$componentsPropertiesData.on(
  setComponentsPropertiesDataEvent,
  (_, data) => data
);

$componentsMetaData.on(setComponentsMetaDataEvent, (_, data) => data);

$componentsValidationData.on(
  setComponentsValidationDataEvent,
  (_, data) => data
);

$componentsRelationsData.on(setComponentsRelationsDataEvent, (_, data) => data);

$componentsPropertiesData.on(
  updateComponentPropertiesEvent,
  (cur, { id, data }) => ({
    ...cur,
    [id]: { ...cur[id], ...data },
  })
);
