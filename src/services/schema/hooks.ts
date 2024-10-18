import { ComponentSchema } from '_types/core';
import { useStoreMap } from 'effector-react';

import { $componentsMetaData, $componentsPropertiesData } from '.';

export const useComponentMeta = (id: ComponentSchema['meta']['id']) => {
  const data = useStoreMap({
    store: $componentsMetaData,
    keys: [id],
    fn: (data, [id]) => data[id],
  });

  return data;
};

export const useComponentProperties = <T extends ComponentSchema>(
  id: ComponentSchema['meta']['id']
) => {
  const data = useStoreMap({
    store: $componentsPropertiesData,
    keys: [id],
    fn: (data, [id]) => data[id],
  });

  return data as T['properties'];
};
