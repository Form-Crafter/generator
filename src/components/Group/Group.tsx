import { FC, memo } from 'react';

import { GroupProps } from '@types';

import { RenderComponentsGrid } from '../RenderComponentsGrid';

export const Group: FC<GroupProps> = memo(({ components }) => {
  return <RenderComponentsGrid components={components} />;
});
