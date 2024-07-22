import { FC, memo } from 'react';
import {
  Select as SelectBase,
  MenuItem,
  ListItemText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { SelectFieldComponent } from '@types';

export type SelectProps = SelectFieldComponent;

export const Select: FC<SelectProps> = memo(
  ({ options, selectedOptionsValues, placeholder, label, disabled }) => {
    return (
      <FormControl fullWidth>
        {label && <InputLabel>{label}</InputLabel>}
        <SelectBase
          multiple
          value={selectedOptionsValues}
          renderValue={(selected) => selected.join(', ')}
          placeholder={placeholder}
          disabled={disabled}
          label={label}
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
