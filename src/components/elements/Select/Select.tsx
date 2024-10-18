import { FC, memo, useCallback } from 'react';

import {
  Select as SelectBase,
  MenuItem,
  ListItemText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { SelectProps } from '_types';

export const Select: FC<SelectProps> = memo(
  ({
    meta,
    properties: { options, value, placeholder, label, disabled },
    onChangeProperties,
  }) => {
    const handleChange = useCallback<
      Required<SelectInputProps<string[]>>['onChange']
    >(
      ({ target: { value } }) => {
        const finalValue = Array.isArray(value) ? value : [value];
        onChangeProperties({ value: finalValue });
      },
      [onChangeProperties]
    );

    return (
      <FormControl fullWidth>
        {label && <InputLabel>{label}</InputLabel>}
        <SelectBase
          multiple
          name={meta.formKey}
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
