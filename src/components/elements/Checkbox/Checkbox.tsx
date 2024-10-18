import { FC, memo, useCallback } from 'react';

import {
  Box,
  Checkbox as CheckboxBase,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { CheckboxProps, SelectionOption } from '_types';
import { toggleArrItem } from '_utils';

export const Checkbox: FC<CheckboxProps> = memo(
  ({ properties: { options, value, label, disabled }, onChangeProperties }) => {
    const isChecked = useCallback(
      (option: Pick<SelectionOption, 'value'>) =>
        value?.length ? value.includes(option.value) : false,
      [value]
    );

    const hanleChange = useCallback(
      (valueToChange: SelectionOption['value']) => {
        const finalValue = toggleArrItem(value || [], valueToChange);
        onChangeProperties({ value: finalValue });
      },
      [value, onChangeProperties]
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
                  onChange={() => hanleChange(option.value)}
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
