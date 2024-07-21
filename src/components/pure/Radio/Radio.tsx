import { FC, memo, useCallback } from 'react';
import {
  Radio as RadioBase,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material';
import { RadioFieldComponent, SelectionOption } from '@types';

export type RadioProps = RadioFieldComponent;

export const Radio: FC<RadioProps> = memo(
  ({ options, selectedOptionsValues, formKey, label, disabled }) => {
    const isChecked = useCallback(
      ({ value }: Pick<SelectionOption, 'value'>) =>
        selectedOptionsValues?.length
          ? selectedOptionsValues.includes(value)
          : false,
      [selectedOptionsValues]
    );

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {label && (
          <Typography variant="h6" gutterBottom>
            {label}
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <RadioBase
                  checked={isChecked(option)}
                  name={formKey}
                  value={option.value}
                  disabled={disabled}
                />
              }
              label={option.label}
            />
          ))}
        </Box>
      </Box>
    );
  }
);
