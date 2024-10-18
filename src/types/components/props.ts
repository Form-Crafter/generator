import { FC } from 'react';

import { ComponentsTree } from './tree';
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
  MultifieldComponentSchema,
} from '../core/components-schemas';
import { ComponentType } from '../core/general';
import { PartialIndex } from '../general';

type GeneralComponentProps<T extends ComponentSchema> = Pick<
  T,
  'meta' | 'properties'
> & {
  parentId: number | null;
};

export type StaticComponentProps<T extends ComponentSchema> =
  GeneralComponentProps<T>;

export type DynamicComponentProps<T extends ComponentSchema> =
  GeneralComponentProps<T> & {
    onChangeProperties: (changes: PartialIndex<T['properties']>) => void;
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
  childTree: ComponentsTree;
};

export type MultifieldProps =
  StaticComponentProps<MultifieldComponentSchema> & {
    childTree: ComponentsTree;
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
  | FC<ButtonProps>
  | FC<MultifieldProps>;

export type ComponentsView = Partial<Record<ComponentType, Component>>;
