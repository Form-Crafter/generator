import { FC, memo, useCallback } from 'react';
import {
  Box,
  Checkbox as CheckboxBase,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { CheckboxFieldComponent, SelectionOption } from '@types';

export type CheckboxProps = CheckboxFieldComponent;

export const Checkbox: FC<CheckboxProps> = memo(
  ({ options, selectedOptionsValues, label, disabled }) => {
    const isChecked = useCallback(
      ({ value }: Pick<SelectionOption, 'value'>) =>
        selectedOptionsValues?.length
          ? selectedOptionsValues.includes(value)
          : false,
      [selectedOptionsValues]
    );

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {label && (
          <Typography variant="h6" gutterBottom>
            {label}
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <CheckboxBase
                  checked={isChecked(option)}
                  name={option.value}
                  value={option.value}
                  disabled={disabled}
                />
              }
              label={option.label}
            />
          ))}
        </Box>
      </Box>
    );
  }
);
