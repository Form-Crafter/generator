import { FC, useMemo } from 'react';

import { updateComponentPropertiesEvent } from '_services/tree';
import {
  addMultifieldGroupEvent,
  removeMultifieldGroupEvent,
} from '_services/tree/components/multifield';
import { useComponentMeta, useComponentProperties } from '_services/tree/hooks';
import { TreeNode } from '_types/components';
import { ComponentSchema } from '_types/core';

type Props = TreeNode & {
  [key: string]: unknown;
  Component: FC<any>;
};

export const RenderComponent: FC<Props> = ({
  id,
  parentId,
  childTree,
  Component,
  ...extraProps
}) => {
  const meta = useComponentMeta(id);
  const properties = useComponentProperties(id);

  const componentProps = useMemo(() => {
    const onChangeProperties = (data: Partial<ComponentSchema['properties']>) =>
      updateComponentPropertiesEvent({ id, data });
    const generalProps = { meta, properties, parentId };

    switch (meta.componentType) {
      case 'group':
        return { ...generalProps, childTree };
      case 'multifield':
        return {
          ...generalProps,
          onChangeProperties,
          childTree,
          onAddGroup: () => addMultifieldGroupEvent({ id }),
          onRemoveGroup: removeMultifieldGroupEvent,
        };
      default:
        return { ...generalProps, onChangeProperties };
    }
  }, [id, meta, properties, parentId, childTree]);

  return <Component {...extraProps} {...componentProps} />;
};
