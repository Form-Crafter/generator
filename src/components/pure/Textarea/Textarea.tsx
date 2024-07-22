import { FC, memo } from 'react';
import {
  FormControl,
  InputLabel,
  TextareaAutosize as TextareaBase,
} from '@mui/material';
import { TextareaFieldComponent } from '@types';

export type TextareaProps = TextareaFieldComponent;

export const Textarea: FC<TextareaProps> = memo(
  ({ value, placeholder, label, disabled }) => {
    return (
      <FormControl fullWidth>
        {label && <InputLabel>{label}</InputLabel>}
        <TextareaBase
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
      </FormControl>
    );
  }
);
