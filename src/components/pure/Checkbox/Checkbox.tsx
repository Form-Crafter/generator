import { FC, memo, useCallback } from 'react';
import {
  Box,
  Checkbox as CheckboxBase,
  FormControl,
  FormControlLabel,
  FormLabel,
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
      <FormControl fullWidth>
        {label && <FormLabel>{label}</FormLabel>}
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
      </FormControl>
    );
  }
);
