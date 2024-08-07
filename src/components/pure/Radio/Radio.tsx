import { FC, memo, useCallback } from 'react';
import {
  Box,
  Radio as RadioBase,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { RadioProps, SelectionOption } from '@types';

export const Radio: FC<RadioProps> = memo(
  ({ options, value, formKey, label, disabled, onChangeOptions }) => {
    const isChecked = useCallback(
      (option: Pick<SelectionOption, 'value'>) =>
        value?.length ? value.includes(option.value) : false,
      [value]
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
                  onChange={() => onChangeOptions({ value: option.value })}
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
