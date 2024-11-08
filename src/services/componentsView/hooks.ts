import { FC } from 'react';

import { useComponentMeta } from '_services/tree/hooks';
import { ComponentId, ComponentsView } from '_types';
import { useUnit } from 'effector-react';

import { $componentsView } from '.';

export const useComponentViewById = (id: ComponentId) => {
  const { componentType } = useComponentMeta(id);
  const [componentsView] = useUnit([$componentsView]);

  return componentType in componentsView
    ? (componentsView[componentType] as FC)
    : null;
};

export const useComponentViewByType = <
  T extends keyof Required<ComponentsView>,
>(
  type: T
) => {
  const [componentsView] = useUnit([$componentsView]);

  return componentsView[type] as Required<ComponentsView>[T];
};
