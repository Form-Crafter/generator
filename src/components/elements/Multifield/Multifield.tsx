import { FC, memo, useCallback } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { RenderComponentContainer } from '_components/RenderComponentContainer';
import { GroupProps, MultifieldProps, RenderGroupComponentProps } from '_types';

import { initialAddButtonText } from './consts';
import { RenderComponentsGrid } from '../../RenderComponentsGrid';

export const Multifield: FC<MultifieldProps> = memo(
  ({ childTree, onAddGroup, onRemoveGroup, properties }) => {
    const title = properties.title;
    const addButtonText = properties.addButtonText || initialAddButtonText;

    const renderTitle = useCallback(
      (
        index: number,
        { properties, meta }: Pick<GroupProps, 'properties' | 'meta'>
      ) => (
        <Box gap={2} display="flex" justifyContent="space-between">
          {properties?.title && (
            <Typography variant="h6">
              {properties.title} {index + 1}
            </Typography>
          )}
          <Button onClick={() => onRemoveGroup({ groupId: meta.id })}>
            Remove
          </Button>
        </Box>
      ),
      [onRemoveGroup]
    );

    return (
      <Box gap={4}>
        <Box gap={2} display="flex" justifyContent="space-between">
          {title && <Typography variant="h5">{title}</Typography>}
          <Button onClick={onAddGroup}>{addButtonText}</Button>
        </Box>
        <RenderComponentsGrid tree={childTree}>
          {(node, index) => (
            <RenderComponentContainer<RenderGroupComponentProps>
              {...node}
              renderTitle={(props) => renderTitle(index, props)}
            />
          )}
        </RenderComponentsGrid>
      </Box>
    );
  }
);
