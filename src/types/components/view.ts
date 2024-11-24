import { FC } from 'react';

import {
  InputProps,
  CheckboxProps,
  EmailProps,
  RadioProps,
  SelectProps,
  TextareaProps,
  TextProps,
  GroupProps,
  MultifieldProps,
  ButtonProps,
  MaskInputProps,
  DateProps,
  TimeProps,
} from './props';

export type ComponentsView = Partial<{
  input: FC<InputProps>;
  'mask-input': FC<MaskInputProps>;
  date: FC<DateProps>;
  time: FC<TimeProps>;
  email: FC<EmailProps>;
  textarea: FC<TextareaProps>;
  select: FC<SelectProps>;
  checkbox: FC<CheckboxProps>;
  radio: FC<RadioProps>;
  text: FC<TextProps>;
  group: FC<GroupProps>;
  multifield: FC<MultifieldProps>;
  button: FC<ButtonProps>;
}>;
