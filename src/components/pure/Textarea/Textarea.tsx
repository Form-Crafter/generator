import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { TextareaFieldComponent } from '@types';

export type TextareaProps = TextareaFieldComponent;

export const Textarea: FC<TextareaProps> = memo(
  ({ value, placeholder, label, disabled }) => {
    return (
      <TextField
        value={value}
        multiline
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        fullWidth
        minRows={4}
      />
    );
  }
);
