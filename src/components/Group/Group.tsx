import { FC, memo } from 'react';

import { GroupProps } from '_types';

import { RenderComponentsGrid } from '../RenderComponentsGrid';

export const Group: FC<GroupProps> = memo(({ components }) => {
  return <RenderComponentsGrid componentsSchemas={components} />;
});
