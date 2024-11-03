import { ComponentId } from '_types/core';
import { createEvent } from 'effector';

export const addMultifieldGroupEvent = createEvent<{ id: ComponentId }>(
  'addMultifieldGroupEvent'
);

export const removeMultifieldGroupEvent = createEvent<{ groupId: ComponentId }>(
  'removeMultifieldGroupEvent'
);
