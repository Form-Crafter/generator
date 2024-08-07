import { ComponentsMap } from '@types';
import { createEvent, createStore } from 'effector';
import { defaultComponentsMap } from 'src/consts';

export const $componentsMap = createStore<ComponentsMap>(defaultComponentsMap);

export const setComponentsMapEvent = createEvent<
  Partial<ComponentsMap> | undefined
>('setComponentsMapEvent');
