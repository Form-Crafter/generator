import { FC, ReactNode } from 'react';

import { ComponentsTree, TreeNode } from './tree';
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
  ComponentId,
} from '../core/components-schemas';

type GeneralComponentProps<T extends ComponentSchema> = Pick<
  T,
  'meta' | 'properties'
> & {
  parentId: TreeNode['parentId'];
};

export type StaticComponentProps<T extends ComponentSchema> =
  GeneralComponentProps<T>;

export type DynamicComponentProps<T extends ComponentSchema> =
  GeneralComponentProps<T> & {
    onChangeProperties: (changes: Partial<T['properties']>) => void;
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
  titleExtra?: ReactNode;
};

export type MultifieldProps =
  DynamicComponentProps<MultifieldComponentSchema> & {
    childTree?: ComponentsTree;
    onAddGroup: () => void;
    onRemoveGroup: (props: { groupId: ComponentId }) => void;
  };

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
