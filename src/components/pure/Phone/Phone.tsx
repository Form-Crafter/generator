import { FC, memo } from 'react';
import { FormControlLabel, Input as InputBase } from '@mui/material';
import { PhoneFieldComponent } from '@types';

export type PhoneProps = PhoneFieldComponent;

export const Phone: FC<PhoneProps> = memo(
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
