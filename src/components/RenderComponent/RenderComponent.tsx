import { FC, useMemo } from 'react';

import { useComponentView } from '_services/componentsView/hooks';
import { updateComponentPropertiesEvent } from '_services/schema';
import {
  useComponentMeta,
  useComponentProperties,
} from '_services/schema/hooks';
import { ComponentsTree } from '_types/components';
import { ComponentSchema } from '_types/core';
import { PartialIndex } from '_types/general';

export type RenderComponentProps = ComponentsTree[0];

export const RenderComponent: FC<RenderComponentProps> = ({
  id,
  parentId,
  childTree,
}) => {
  const meta = useComponentMeta(id);
  const properties = useComponentProperties(id);

  const Component = useComponentView(meta.componentType);

  const props = useMemo(
    () =>
      ({
        parentId,
        childTree,
        meta,
        properties,
        onChangeProperties: (
          data: PartialIndex<ComponentSchema['properties']>
        ) => updateComponentPropertiesEvent({ id: meta.id, data }),
      }) as Parameters<NonNullable<typeof Component>>[0],
    [meta, properties, parentId, childTree]
  );

  if (!Component) {
    // TODO impl placeholder component
    return null;
  }

  return <Component {...props} />;
};
