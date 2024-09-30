import { ComponentSchema, Schema } from '_types';
import { createEvent, createStore } from 'effector';

import { expandComponentsTree } from './utils';

export const $schema = createStore<Schema>({
  id: '',
  version: '1.0.0',
  components: [],
});

export const setFullSchemaEvent = createEvent<Schema>('setFullSchemaEvent');

export const updateComponentPropertiesMapEvent = createEvent<{
  id: ComponentSchema['meta']['id'];
  data: Partial<ComponentSchema['properties']>;
}>('updateComponentPropertiesMapEvent');

export const $componentsStateMap = createStore<
  Record<ComponentSchema['meta']['id'], ComponentSchema>
>({})
  .on(setFullSchemaEvent, (_, { components }) =>
    expandComponentsTree(components)
  )
  .on(updateComponentPropertiesMapEvent, (prevState, { id, data }) => {
    const curComponentState = prevState[id];
    const finalState = {
      ...curComponentState,
      properties: { ...curComponentState.properties, ...data },
    } as ComponentSchema;
    return { ...prevState, [id]: finalState };
  });

export const $componentsSchemas = $schema.map((schema) => schema.components);
