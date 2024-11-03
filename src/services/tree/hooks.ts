import { ComponentId, ComponentSchema } from '_types/core';
import { useStoreMap, useUnit } from 'effector-react';

import {
  $componentsMetaData,
  $componentsPropertiesData,
  $componentsTree,
} from '.';

export const useComponentsTree = () => {
  const [tree] = useUnit([$componentsTree]);

  return tree;
};

export const useComponentMeta = (id: ComponentId) => {
  const data = useStoreMap({
    store: $componentsMetaData,
    keys: [id],
    fn: (data, [id]) => data[id],
  });

  return data;
};

export const useComponentProperties = <T extends ComponentSchema>(
  id: ComponentId
) => {
  const data = useStoreMap({
    store: $componentsPropertiesData,
    keys: [id],
    fn: (data, [id]) => data[id],
  });

  return data as T['properties'];
};
