import './componentsView/init';
import { sample } from 'effector';
import { $schema, setFullSchemaEvent } from '.';

sample({
  clock: setFullSchemaEvent,
  target: $schema,
});
