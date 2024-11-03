import './components/init';

import { setFullSchemaEvent } from '_services/schema';
import { expandSchemaIntoParts } from '_utils/expandSchemaIntoParts';
import { isNotEmpty } from '_utils/index';
import { sample } from 'effector';

import {
  runExpandSchemaIntoEvent,
  setComponentsTreeEvent,
  componentsDataForSettingEvent,
  setComponentsPropertiesDataEvent,
  setComponentsValidationDataEvent,
  setComponentsRelationsDataEvent,
  setComponentsMetaDataEvent,
} from '.';

sample({
  clock: setFullSchemaEvent,
  target: runExpandSchemaIntoEvent,
});

sample({
  clock: runExpandSchemaIntoEvent,
  fn: ({ components }) => expandSchemaIntoParts(components),
  target: componentsDataForSettingEvent,
});

sample({
  clock: componentsDataForSettingEvent,
  filter: ({ tree }) => isNotEmpty(tree),
  fn: ({ tree }) => tree!,
  target: setComponentsTreeEvent,
});

sample({
  clock: componentsDataForSettingEvent,
  filter: ({ properties }) => isNotEmpty(properties),
  fn: ({ properties }) => properties!,
  target: setComponentsPropertiesDataEvent,
});

sample({
  clock: componentsDataForSettingEvent,
  filter: ({ validation }) => isNotEmpty(validation),
  fn: ({ validation }) => validation!,
  target: setComponentsValidationDataEvent,
});

sample({
  clock: componentsDataForSettingEvent,
  filter: ({ relations }) => isNotEmpty(relations),
  fn: ({ relations }) => relations!,
  target: setComponentsRelationsDataEvent,
});

sample({
  clock: componentsDataForSettingEvent,
  filter: ({ meta }) => isNotEmpty(meta),
  fn: ({ meta }) => meta!,
  target: setComponentsMetaDataEvent,
});
