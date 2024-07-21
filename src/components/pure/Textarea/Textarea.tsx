import { FC, memo } from 'react';
import {
  FormControlLabel,
  TextareaAutosize as TextareaBase,
} from '@mui/material';
import { TextareaFieldComponent } from '@types';

export type TextareaProps = TextareaFieldComponent;

export const Textarea: FC<TextareaProps> = memo(
  ({ value, placeholder, label, disabled }) => {
    return (
      <FormControlLabel
        control={
          <TextareaBase
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
        }
        label={label}
      />
    );
  }
);
