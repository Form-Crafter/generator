import { ComponentSchema } from '@types';
import { FC } from 'react';
import { useComponent } from './hooks';

export type RenderComponentProps = {
  componentSchema: ComponentSchema;
};

export const RenderComponent: FC<RenderComponentProps> = ({
  componentSchema,
}) => {
  const { props, Component } = useComponent(componentSchema);

  return <Component {...props} />;
};
