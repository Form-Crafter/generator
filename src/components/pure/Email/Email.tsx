import { FC, memo } from 'react';
import { Input as InputBase } from '@mui/material';
import { EmailFieldComponent } from '@types';

export type EmailProps = EmailFieldComponent;

export const Email: FC<EmailProps> = memo(({ value }) => {
  return <InputBase value={value} />;
});
