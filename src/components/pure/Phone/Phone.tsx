import { FC, memo } from 'react';
import { Input as InputBase } from '@mui/material';
import { PhoneFieldComponent } from '@types';

export type PhoneProps = PhoneFieldComponent;

export const Phone: FC<PhoneProps> = memo(({ value }) => {
  return <InputBase value={value} />;
});
