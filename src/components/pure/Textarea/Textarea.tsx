import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { TextareaProps } from '@types';

export const Textarea: FC<TextareaProps> = memo(
  ({ value, placeholder, label, disabled, onChangeOptions }) => {
    return (
      <TextField
        value={value}
        multiline
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
        minRows={4}
        onChange={(e) => onChangeOptions({ value: e.target.value })}
      />
    );
  }
);
