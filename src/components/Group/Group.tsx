import { FC, memo } from 'react';
import { GroupComponent } from '@types';
import { RenderComponentProps } from '../RenderComponent';
import { RenderComponentsGrid } from '../RenderComponentsGrid';

export type GroupProps = GroupComponent & {
  renderComponent: FC<RenderComponentProps>;
};

export const Group: FC<GroupProps> = memo(({ renderComponent, components }) => {
  return (
    <RenderComponentsGrid
      renderComponent={renderComponent}
      components={components}
    />
  );
});
