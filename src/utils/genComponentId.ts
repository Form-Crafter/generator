import { ComponentId, ComponentType } from '_types/core';

import { genId } from './genId';

export const genComponentId = (compType: ComponentType): ComponentId =>
  genId({ prefix: compType });
