import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { InputProps } from '@types';

export const Input: FC<InputProps> = memo(
  ({ value, placeholder, label, disabled, onChangeOptions }) => {
    return (
      <TextField
        value={value}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        onChange={(e) => onChangeOptions({ value: e.target.value })}
        fullWidth
      />
    );
  }
);
