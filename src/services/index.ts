import { Schema } from '@types';
import { createEvent, createStore } from 'effector';

export const $schema = createStore<Schema>({
  version: '1.0.0',
  components: [],
});

export const setFullSchemaEvent = createEvent<Schema>('setSchemaEvent');
