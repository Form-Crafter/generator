import { FC, memo } from 'react';
import { FormControlLabel, Input as InputBase } from '@mui/material';
import { InputFieldComponent } from '@types';

export type InputProps = InputFieldComponent;

export const Input: FC<InputProps> = memo(
  ({ value, placeholder, label, disabled }) => {
    return (
      <FormControlLabel
        control={
          <InputBase
            value={value}
            disabled={disabled}
            placeholder={placeholder}
          />
        }
        label={label}
      />
    );
  }
);
