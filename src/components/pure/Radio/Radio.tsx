import { FC, memo, useCallback } from 'react';
import { Radio as RadioBase, FormControlLabel } from '@mui/material';
import { RadioFieldComponent, SelectionOption } from '@types';

export type RadioProps = RadioFieldComponent;

export const Radio: FC<RadioProps> = memo(
  ({ options, selectedOptionsValues, formKey }) => {
    const isChecked = useCallback(
      ({ value }: Pick<SelectionOption, 'value'>) =>
        selectedOptionsValues?.length
          ? selectedOptionsValues.includes(value)
          : false,
      [selectedOptionsValues]
    );

    return (
      <div>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <RadioBase
                checked={isChecked(option)}
                name={formKey}
                value={option.value}
              />
            }
            label={option.label}
          />
        ))}
      </div>
    );
  }
);
