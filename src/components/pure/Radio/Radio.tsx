import { FC, memo, useCallback } from 'react';
import {
  Box,
  Radio as RadioBase,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { RadioFieldComponent, SelectionOption } from '@types';

export type RadioProps = RadioFieldComponent;

export const Radio: FC<RadioProps> = memo(
  ({ options, selectedOptionsValues, formKey, label, disabled }) => {
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
                <RadioBase
                  checked={isChecked(option)}
                  name={formKey}
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
