import { FC } from 'react';

import { useComponentView } from '_services/componentsView/hooks';

import { RenderContent } from './RenderContent';
import { RenderComponentProps } from './types';

export const RenderComponent: FC<RenderComponentProps> = ({ id, ...props }) => {
  const Component = useComponentView(id);

  if (!Component) {
    // TODO impl placeholder component
    return null;
  }

  return <RenderContent id={id} Component={Component} {...props} />;
};
