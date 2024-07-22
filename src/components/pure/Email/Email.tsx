import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { EmailFieldComponent } from '@types';

export type EmailProps = EmailFieldComponent;

export const Email: FC<EmailProps> = memo(
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
