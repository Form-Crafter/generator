import { FC, memo } from 'react';
import { FormControlLabel, Input as InputBase } from '@mui/material';
import { EmailFieldComponent } from '@types';

export type EmailProps = EmailFieldComponent;

export const Email: FC<EmailProps> = memo(
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
