import { FC } from 'react';

import { ComponentSchema } from '@types';

import { useComponent } from './hooks';

export type RenderComponentProps = {
  componentSchema: ComponentSchema;
};

export const RenderComponent: FC<RenderComponentProps> = ({
  componentSchema,
}) => {
  const { props, Component } = useComponent(componentSchema);

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};
