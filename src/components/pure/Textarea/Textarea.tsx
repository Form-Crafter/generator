import { FC, memo } from 'react';

import { TextField } from '@mui/material';
import { TextareaProps } from '_types';

export const Textarea: FC<TextareaProps> = memo(
  ({ meta, value, placeholder, label, disabled, onChangeProperties }) => {
    return (
      <TextField
        value={value}
        multiline
        name={meta.formKey}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
        minRows={4}
        onChange={(e) => onChangeProperties({ value: e.target.value })}
      />
    );
  }
);
