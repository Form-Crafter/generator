import { FC } from 'react';

import { ComponentType } from '_types';
import { useUnit } from 'effector-react';

import { $componentsView } from '.';

export const useComponentView = (type: ComponentType) => {
  const [componentsView] = useUnit([$componentsView]);
  return type in componentsView ? (componentsView[type] as FC) : null;
};
