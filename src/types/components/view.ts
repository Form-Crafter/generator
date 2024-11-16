import { FC } from 'react';

import {
  InputProps,
  CheckboxProps,
  EmailProps,
  PhoneProps,
  RadioProps,
  SelectProps,
  TextareaProps,
  TextProps,
  GroupProps,
  MultifieldProps,
  ButtonProps,
  MaskInputProps,
} from './props';

export type ComponentsView = Partial<{
  input: FC<InputProps>;
  'mask-input': FC<MaskInputProps>;
  email: FC<EmailProps>;
  phone: FC<PhoneProps>;
  textarea: FC<TextareaProps>;
  select: FC<SelectProps>;
  checkbox: FC<CheckboxProps>;
  radio: FC<RadioProps>;
  text: FC<TextProps>;
  group: FC<GroupProps>;
  multifield: FC<MultifieldProps>;
  button: FC<ButtonProps>;
}>;
