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
import { ComponentType } from './general';

export type DynamicComponentProps<T extends ComponentSchema> = T & {
  onChangeOptions: (changes: { [V in keyof Partial<T>]: T[V] }) => void;
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

export type ComponentsMap = Record<ComponentType, FC>;
