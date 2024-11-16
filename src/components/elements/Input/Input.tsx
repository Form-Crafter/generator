import { forwardRef, memo } from 'react';

import { TextField } from '@mui/material';
import { InputProps } from '_types';

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      meta,
      properties: { value, placeholder, label, disabled },
      onChangeProperties,
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
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

InputBase.displayName = 'Input';

export const Input = memo(InputBase);
