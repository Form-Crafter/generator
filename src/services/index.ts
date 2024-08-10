import { ComponentSchema, Schema } from '@types';
import { createEvent, createStore } from 'effector';
import { expandComponentsTree } from './utils';

export const $schema = createStore<Schema>({
  id: '',
  version: '1.0.0',
  components: [],
});

export const setFullSchemaEvent = createEvent<Schema>('setFullSchemaEvent');

export const setComponentsStateMapEvent = createEvent<{
  id: ComponentSchema['id'];
  data: Partial<ComponentSchema>;
}>('setComponentsStateMapEvent');

export const $componentsStateMap = createStore<
  Record<ComponentSchema['id'], ComponentSchema>
>({})
  .on(setFullSchemaEvent, (_, { components }) =>
    expandComponentsTree(components)
  )
  .on(setComponentsStateMapEvent, (state, { id, data }) => {
    const componentData = { ...state[id], ...data } as ComponentSchema;
    return { ...state, [id]: componentData };
  });

export const $schemaComponents = $schema.map((schema) => schema.components);
