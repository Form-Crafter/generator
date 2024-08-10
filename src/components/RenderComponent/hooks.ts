import { $componentsStateMap, setComponentsStateMapEvent } from '@services';
import { $componentsView } from '@services/componentsView';
import { PartialIndex } from '@types';
import { ComponentSchema, ComponentType } from '@types/generator';
import { useStoreMap, useUnit } from 'effector-react';
import { FC, useMemo } from 'react';

const useComponentView = (type: ComponentType) => {
  const [componentsView] = useUnit([$componentsView]);
  return componentsView[type] as FC;
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
    () => ({
      ...state,
      onChangeOptions: (data: PartialIndex<ComponentSchema>) =>
        setComponentsStateMapEvent({ id: state.id, data }),
    }),
    [state]
  ) as Parameters<typeof Component>[0];

  return { state, props, Component };
};
