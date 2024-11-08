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
} from './props';

export type ComponentsView = Partial<{
  'input-field': FC<InputProps>;
  'email-field': FC<EmailProps>;
  'phone-field': FC<PhoneProps>;
  'textarea-field': FC<TextareaProps>;
  'select-field': FC<SelectProps>;
  'checkbox-field': FC<CheckboxProps>;
  'radio-field': FC<RadioProps>;
  text: FC<TextProps>;
  group: FC<GroupProps>;
  multifield: FC<MultifieldProps>;
  button: FC<ButtonProps>;
}>;

export * from './props';
export * from './tree';
export * from './render';
