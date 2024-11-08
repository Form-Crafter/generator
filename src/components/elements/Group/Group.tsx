import { FC, memo } from 'react';

import { Box, Typography } from '@mui/material';
import { GroupProps } from '_types';

import { RenderComponentsGrid } from '../../RenderComponentsGrid';

export const Group: FC<GroupProps> = memo(
  ({ renderTitle, childTree, properties, meta }) => {
    const title = properties?.title;

    return (
      <Box gap={2}>
        {renderTitle?.({ properties, meta }) || (
          <Typography variant="h6">{title}</Typography>
        )}
        <RenderComponentsGrid tree={childTree} />
      </Box>
    );
  }
);
