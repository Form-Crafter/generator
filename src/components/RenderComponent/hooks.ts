import { FC, useMemo } from 'react';

import { $componentsStateMap, setComponentsStateMapEvent } from '@services';
import { $componentsView } from '@services/componentsView';
import { PartialIndex } from '@types';
import { ComponentSchema, ComponentType } from '@types/generator';
import { useStoreMap, useUnit } from 'effector-react';

const useComponentView = (type: ComponentType) => {
  const [componentsView] = useUnit([$componentsView]);
  return type in componentsView ? (componentsView[type] as FC) : null;
};

export const useComponent = ({
  id,
  type,
}: Pick<ComponentSchema, 'id' | 'type'>) => {
  const state = useStoreMap({
    store: $componentsStateMap,
    keys: [id],
    fn: (state, [id]) => state[id],
  });

  const Component = useComponentView(type);

  const props = useMemo(
    () =>
      Component
        ? ({
            ...state,
            onChangeOptions: (data: PartialIndex<ComponentSchema>) =>
              setComponentsStateMapEvent({ id: state.id, data }),
          } as Parameters<typeof Component>[0])
        : {},
    [Component, state]
  );

  return { state, props, Component };
};
