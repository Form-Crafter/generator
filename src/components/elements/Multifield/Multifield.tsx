import { FC, memo } from 'react';

import { MultifieldProps } from '_types';

import { RenderComponentsGrid } from '../../RenderComponentsGrid';

export const Multifield: FC<MultifieldProps> = memo(({ childTree }) => {
  return <RenderComponentsGrid tree={childTree} />;
});
