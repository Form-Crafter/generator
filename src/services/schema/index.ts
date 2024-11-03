import { Schema } from '_types';
import { createEvent, createStore } from 'effector';

const $schema = createStore<Schema>({
  id: '',
  version: '1.0.0',
  components: [],
});

export const setFullSchemaEvent = createEvent<Schema>('setFullSchemaEvent');

$schema.on(setFullSchemaEvent, (_, data) => data);
