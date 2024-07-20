import { FC, memo } from 'react';
import { Button as ButtonBase } from '@mui/material';
import { ButtonComponent } from '@types';

export type ButtonProps = ButtonComponent;

export const Button: FC<ButtonProps> = memo(({ text }) => {
  return <ButtonBase>{text}</ButtonBase>;
});
