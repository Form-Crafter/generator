import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { EmailProps } from '@types';

export const Email: FC<EmailProps> = memo(
  ({ value, placeholder, label, disabled, onChangeOptions }) => {
    return (
      <TextField
        value={value}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
        onChange={(e) => onChangeOptions({ value: e.target.value })}
      />
    );
  }
);
