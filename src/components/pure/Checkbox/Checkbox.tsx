import { FC, memo, useCallback } from 'react';
import { Checkbox as CheckboxBase, FormControlLabel } from '@mui/material';
import { CheckboxFieldComponent, SelectionOption } from '@types';

export type CheckboxProps = CheckboxFieldComponent;

export const Checkbox: FC<CheckboxProps> = memo(
  ({ options, selectedOptionsValues }) => {
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
              <CheckboxBase
                checked={isChecked(option)}
                name={option.value}
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
