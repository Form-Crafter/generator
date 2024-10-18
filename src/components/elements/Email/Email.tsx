import { FC, memo } from 'react';

import { TextField } from '@mui/material';
import { EmailProps } from '_types';

export const Email: FC<EmailProps> = memo(
  ({
    meta,
    properties: { value, placeholder, label, disabled },
    onChangeProperties,
  }) => {
    return (
      <TextField
        fullWidth
        name={meta.formKey}
        value={value}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        onChange={(e) => onChangeProperties({ value: e.target.value })}
      />
    );
  }
);
