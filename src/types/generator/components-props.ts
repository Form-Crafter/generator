import { FC } from 'react';

import {
  ButtonComponentSchema,
  InputFieldComponentSchema,
  SelectFieldComponentSchema,
  RadioFieldComponentSchema,
  GroupComponentSchema,
  CheckboxFieldComponentSchema,
  TextComponentSchema,
  TextareaFieldComponentSchema,
  EmailFieldComponentSchema,
  PhoneFieldComponentSchema,
  ComponentSchema,
} from './components-schemas';
import { PartialIndex } from '../general';

export type DynamicComponentProps<T extends ComponentSchema> = T & {
  onChangeOptions: (changes: PartialIndex<T>) => void;
};

export type ComponentType =
  | 'input-field'
  | 'email-field'
  | 'phone-field'
  | 'textarea-field'
  | 'select-field'
  | 'checkbox-field'
  | 'radio-field'
  | 'text'
  | 'button'
  | 'group';

export type ResponsiveSizes<T> = {
  default: T;
  xxl?: T;
  xl?: T;
  lg?: T;
  md?: T;
  sm?: T;
};

export type ColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type ComponentLayout = {
  col: ResponsiveSizes<ColSpan>;
};

export type CheckboxProps = DynamicComponentProps<CheckboxFieldComponentSchema>;

export type EmailProps = DynamicComponentProps<EmailFieldComponentSchema>;

export type InputProps = DynamicComponentProps<InputFieldComponentSchema>;

export type PhoneProps = DynamicComponentProps<PhoneFieldComponentSchema>;

export type RadioProps = DynamicComponentProps<RadioFieldComponentSchema>;

export type SelectProps = DynamicComponentProps<SelectFieldComponentSchema>;

export type TextareaProps = DynamicComponentProps<TextareaFieldComponentSchema>;

export type ButtonProps = ButtonComponentSchema;

export type TextProps = TextComponentSchema;

export type GroupProps = GroupComponentSchema & {
  renderComponent: unknown;
};

export type Component =
  | FC<InputProps>
  | FC<SelectProps>
  | FC<RadioProps>
  | FC<TextProps>
  | FC<TextareaProps>
  | FC<EmailProps>
  | FC<PhoneProps>
  | FC<GroupProps>
  | FC<CheckboxProps>
  | FC<ButtonProps>;

export type ComponentsView = Partial<Record<ComponentType, Component>>;
