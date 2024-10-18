import { FC, memo } from 'react';

import { Button as ButtonBase } from '@mui/material';
import { ButtonProps } from '_types';

export const Button: FC<ButtonProps> = memo(
  ({ properties: { type, text } }) => {
    return <ButtonBase type={type}>{text}</ButtonBase>;
  }
);
