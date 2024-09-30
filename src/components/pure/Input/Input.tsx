import { FC, memo } from 'react';

import { TextField } from '@mui/material';
import { InputProps } from '_types';

export const Input: FC<InputProps> = memo(
  ({ meta, value, placeholder, label, disabled, onChangeProperties }) => {
    return (
      <TextField
        value={value}
        name={meta.formKey}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        onChange={(e) => onChangeProperties({ value: e.target.value })}
        fullWidth
      />
    );
  }
);
