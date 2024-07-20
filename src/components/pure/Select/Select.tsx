import { FC, memo } from 'react';
import {
  Select as SelectBase,
  FormControl,
  MenuItem,
  ListItemText,
} from '@mui/material';
import { SelectFieldComponent } from '@types';

export type SelectProps = SelectFieldComponent;

export const Select: FC<SelectProps> = memo(
  ({ options, selectedOptionsValues }) => {
    return (
      <FormControl fullWidth>
        <SelectBase
          multiple
          value={selectedOptionsValues}
          renderValue={(selected) => selected.join(', ')}
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
