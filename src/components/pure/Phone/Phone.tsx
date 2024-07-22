import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { PhoneFieldComponent } from '@types';

export type PhoneProps = PhoneFieldComponent;

export const Phone: FC<PhoneProps> = memo(
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
