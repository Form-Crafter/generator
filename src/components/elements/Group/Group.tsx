import { FC, memo } from 'react';

import { Box, Typography } from '@mui/material';
import { GroupProps } from '_types';

import { RenderComponentsGrid } from '../../RenderComponentsGrid';

export const Group: FC<GroupProps> = memo(
  ({ titleExtra, childTree, properties }) => {
    const title = properties?.title;
    const hasTopContent = title || titleExtra;

    return (
      <Box gap={2}>
        {hasTopContent && (
          <Box display="flex" justifyContent="space-between">
            {title && <Typography variant="h6">{title}</Typography>}
            {titleExtra}
          </Box>
        )}
        <RenderComponentsGrid tree={childTree} />
      </Box>
    );
  }
);
