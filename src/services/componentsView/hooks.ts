import { FC, useMemo } from 'react';

import { $componentsView } from '_services/componentsView';
import {
  $componentsStateMap,
  updateComponentPropertiesMapEvent,
} from '_services/schema';
import { PartialIndex } from '_types';
import { ComponentSchema, ComponentType } from '_types';
import { useStoreMap, useUnit } from 'effector-react';

const useComponentView = (type: ComponentType) => {
  const [componentsView] = useUnit([$componentsView]);
  return type in componentsView ? (componentsView[type] as FC) : null;
};

export const useComponent = ({
  id,
  componentType,
}: Pick<ComponentSchema['meta'], 'id' | 'componentType'>) => {
  const state = useStoreMap({
    store: $componentsStateMap,
    keys: [id],
    fn: (state, [id]) => state[id],
  });

  const Component = useComponentView(componentType);

  const props = useMemo(
    () =>
      Component
        ? ({
            ...state.properties,
            meta: state.meta,
            onChangeProperties: (
              data: PartialIndex<ComponentSchema['properties']>
            ) => updateComponentPropertiesMapEvent({ id: state.meta.id, data }),
          } as Parameters<typeof Component>[0])
        : {},
    [Component, state]
  );

  return { props, Component };
};
