import { FC, memo } from 'react';

import { TextField } from '@mui/material';
import { PhoneProps } from '@types';

export const Phone: FC<PhoneProps> = memo(
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
