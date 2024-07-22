import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { InputFieldComponent } from '@types';

export type InputProps = InputFieldComponent;

export const Input: FC<InputProps> = memo(
  ({ value, placeholder, label, disabled }) => {
    return (
      <TextField
        value={value}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
      />
    );
  }
);
