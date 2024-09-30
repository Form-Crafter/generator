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
import { PartialIndex } from '../general';

export type StaticComponentProps<T extends ComponentSchema> = Pick<T, 'meta'> &
  T['properties'];

export type DynamicComponentProps<T extends ComponentSchema> =
  T['properties'] & {
    onChangeProperties: (changes: PartialIndex<T['properties']>) => void;
    meta: T['meta'];
  };

export type CheckboxProps = DynamicComponentProps<CheckboxFieldComponentSchema>;

export type EmailProps = DynamicComponentProps<EmailFieldComponentSchema>;

export type InputProps = DynamicComponentProps<InputFieldComponentSchema>;

export type PhoneProps = DynamicComponentProps<PhoneFieldComponentSchema>;

export type RadioProps = DynamicComponentProps<RadioFieldComponentSchema>;

export type SelectProps = DynamicComponentProps<SelectFieldComponentSchema>;

export type TextareaProps = DynamicComponentProps<TextareaFieldComponentSchema>;

export type ButtonProps = StaticComponentProps<ButtonComponentSchema>;

export type TextProps = StaticComponentProps<TextComponentSchema>;

export type GroupProps = StaticComponentProps<GroupComponentSchema> & {
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
