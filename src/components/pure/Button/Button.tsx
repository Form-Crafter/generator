import { FC, memo } from 'react';

import { Button as ButtonBase } from '@mui/material';
import { ButtonProps } from '_types';

export const Button: FC<ButtonProps> = memo(({ text }) => {
  return <ButtonBase>{text}</ButtonBase>;
});
