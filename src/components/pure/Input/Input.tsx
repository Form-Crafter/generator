import { FC, memo } from 'react';
import { Input as InputBase } from '@mui/material';
import { InputFieldComponent } from '@types';

export type InputProps = InputFieldComponent;

export const Input: FC<InputProps> = memo(({ value }) => {
  return <InputBase value={value} />;
});
