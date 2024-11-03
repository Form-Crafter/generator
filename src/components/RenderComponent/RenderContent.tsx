import { FC, useMemo } from 'react';

import { updateComponentPropertiesEvent } from '_services/tree';
import {
  addMultifieldGroupEvent,
  removeMultifieldGroupEvent,
} from '_services/tree/components/multifield';
import { useComponentMeta, useComponentProperties } from '_services/tree/hooks';
import { ComponentSchema } from '_types/core';

import { RenderComponentProps } from './types';

type RenderContentProps = RenderComponentProps & {
  Component: FC;
};

export const RenderContent: FC<RenderContentProps> = ({
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
      case 'text':
      case 'button':
        return generalProps;
      case 'checkbox-field':
      case 'email-field':
      case 'input-field':
      case 'phone-field':
      case 'radio-field':
      case 'select-field':
      case 'textarea-field':
        return { ...generalProps, onChangeProperties };
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
        return generalProps;
    }
  }, [id, meta, properties, parentId, childTree]);

  return (
    <Component
      {...extraProps}
      {...(componentProps as Parameters<typeof Component>[0])}
    />
  );
};
