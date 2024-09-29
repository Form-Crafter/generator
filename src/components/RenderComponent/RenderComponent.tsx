import { FC } from 'react';

import { ComponentSchema } from '_types';

import { useComponent } from './hooks';

export type RenderComponentProps = {
  componentSchema: ComponentSchema;
};

export const RenderComponent: FC<RenderComponentProps> = ({
  componentSchema,
}) => {
  const { props, Component } = useComponent(componentSchema.meta);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};
