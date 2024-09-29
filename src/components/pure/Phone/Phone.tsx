import { FC, memo } from 'react';

import { TextField } from '@mui/material';
import { PhoneProps } from '_types';

export const Phone: FC<PhoneProps> = memo(
  ({ value, placeholder, label, disabled, onChangeProperties }) => {
    return (
      <TextField
        value={value}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
        onChange={(e) => onChangeProperties({ value: e.target.value })}
      />
    );
  }
);
