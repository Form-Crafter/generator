import { FC, memo, useCallback } from 'react';
import {
  Select as SelectBase,
  MenuItem,
  ListItemText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { SelectProps } from '@types';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

export const Select: FC<SelectProps> = memo(
  ({ options, value, placeholder, label, disabled, onChangeOptions }) => {
    const handleChange = useCallback<
      Required<SelectInputProps<string[]>>['onChange']
    >(
      ({ target: { value } }) => {
        const finalValue = Array.isArray(value) ? value : [value];
        onChangeOptions({ value: finalValue });
      },
      [onChangeOptions]
    );

    return (
      <FormControl fullWidth>
        {label && <InputLabel>{label}</InputLabel>}
        <SelectBase
          multiple
          value={value}
          renderValue={(selected) => selected.join(', ')}
          placeholder={placeholder}
          disabled={disabled}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </SelectBase>
      </FormControl>
    );
  }
);
