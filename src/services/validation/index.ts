import { UnitValue, createEvent, createStore } from 'effector';
import { ObjectSchema } from 'yup';

export const $validationSchema = createStore<ObjectSchema<
  Record<string, unknown>
> | null>(null);

export const setValidationSchemaEvent = createEvent<
  NonNullable<UnitValue<typeof $validationSchema>>
>('setValidationSchemaEvent');

$validationSchema.on(setValidationSchemaEvent, (_, schema) => schema);
