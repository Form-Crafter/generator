import { FC } from 'react';

import { useComponentMeta } from '_services/tree/hooks';
import { ComponentId } from '_types';
import { useUnit } from 'effector-react';

import { $componentsView } from '.';

export const useComponentView = (id: ComponentId) => {
  const { componentType } = useComponentMeta(id);
  const [componentsView] = useUnit([$componentsView]);

  return componentType in componentsView
    ? (componentsView[componentType] as FC)
    : null;
};
