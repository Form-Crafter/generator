import { FC, memo } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { RenderComponent } from '_components/RenderComponent';
import { MultifieldProps } from '_types';

import { INITIAL_ADD_BUTTON_TEXT } from './consts';
import { RenderComponentsGrid } from '../../RenderComponentsGrid';

export const Multifield: FC<MultifieldProps> = memo(
  ({ childTree, onAddGroup, onRemoveGroup, properties }) => {
    const title = properties.title;
    const addButtonText = properties.addButtonText || INITIAL_ADD_BUTTON_TEXT;

    // todo render title
    // проверить работу вложенных multifield

    return (
      <Box gap={4}>
        {title && <Typography variant="h5">{title}</Typography>}
        {!!childTree?.length && (
          <RenderComponentsGrid tree={childTree}>
            {(node) => (
              <RenderComponent
                {...node}
                titleExtra={
                  <Button onClick={() => onRemoveGroup({ groupId: node.id })}>
                    Remove
                  </Button>
                }
              />
            )}
          </RenderComponentsGrid>
        )}
        <Button onClick={onAddGroup}>{addButtonText}</Button>
      </Box>
    );
  }
);
