import { FC, memo, ReactNode } from 'react';
import { GroupComponent, Component } from '@types';

export type GroupProps = GroupComponent & {
  renderComponent: (component: Component) => ReactNode;
};

export const Group: FC<GroupProps> = memo(({ renderComponent, components }) => {
  return (
    <div>
      {components.map((component) => (
        <div key={component.id}>{renderComponent(component)}</div>
      ))}
    </div>
  );
});
