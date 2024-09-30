import { FC } from 'react';

import { ComponentSchema } from '_types';

import { useComponent } from '../../services/componentsView/hooks';

export type RenderComponentProps = {
  componentSchema: ComponentSchema;
};

export const RenderComponent: FC<RenderComponentProps> = ({
  componentSchema,
}) => {
  const { Component, props } = useComponent(componentSchema.meta);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};
