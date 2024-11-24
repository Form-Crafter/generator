import { ReactNode } from 'react';

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
  ComponentSchema,
  MultifieldComponentSchema,
  ComponentId,
  MaskInputFieldComponentSchema,
  DateFieldComponentSchema,
  TimeFieldComponentSchema,
} from '../core/components-schemas';

type GeneralComponentProps<T extends ComponentSchema> = Pick<
  T,
  'meta' | 'properties'
> &
  Pick<TreeNode, 'parentId'> & {
    onChangeProperties: (changes: Partial<T['properties']>) => void;
  };

export type CheckboxProps = GeneralComponentProps<CheckboxFieldComponentSchema>;

export type EmailProps = GeneralComponentProps<EmailFieldComponentSchema>;

export type InputProps = GeneralComponentProps<InputFieldComponentSchema>;

export type MaskInputProps =
  GeneralComponentProps<MaskInputFieldComponentSchema>;

export type DateProps = GeneralComponentProps<DateFieldComponentSchema>;

export type TimeProps = GeneralComponentProps<TimeFieldComponentSchema>;

export type RadioProps = GeneralComponentProps<RadioFieldComponentSchema>;

export type SelectProps = GeneralComponentProps<SelectFieldComponentSchema>;

export type TextareaProps = GeneralComponentProps<TextareaFieldComponentSchema>;

export type ButtonProps = GeneralComponentProps<ButtonComponentSchema>;

export type TextProps = GeneralComponentProps<TextComponentSchema>;

export type GroupProps = GeneralComponentProps<GroupComponentSchema> & {
  childTree: ComponentsTree;
  renderTitle?: (
    props: Pick<GroupComponentSchema, 'meta' | 'properties'>
  ) => ReactNode;
};

export type MultifieldProps =
  GeneralComponentProps<MultifieldComponentSchema> & {
    childTree?: ComponentsTree;
    onAddGroup: () => void;
    onRemoveGroup: (props: { groupId: ComponentId }) => void;
  };
