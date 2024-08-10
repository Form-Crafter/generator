import { FC, memo } from 'react';

import {
  Box,
  Radio as RadioBase,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { RadioProps } from '@types';

export const Radio: FC<RadioProps> = memo(
  ({ options, value, formKey, label, disabled, onChangeOptions }) => {
    return (
      <FormControl fullWidth>
        {label && <FormLabel>{label}</FormLabel>}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <RadioBase
                  checked={value === option.value}
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
