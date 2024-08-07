import './componentsMap/init';
import { sample } from 'effector';
import { $schema, setFullSchemaEvent } from '.';

sample({
  clock: setFullSchemaEvent,
  target: $schema,
});
