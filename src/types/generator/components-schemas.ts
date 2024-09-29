import { ComponentLayout, ComponentType } from './general';

export type GeneralComponent<T extends ComponentType, P extends Record<string, any>> = {
  meta: {
    id: string;
    componentType: T;
    formKey?: string;
    layout: ComponentLayout;
  },
  properties: P,
};

export type GeneralFormFieldProperties = {
  label?: string;
  disabled?: boolean;
};

export type GeneralTextFieldComponent<T extends ComponentType> =
  GeneralComponent<T, GeneralFormFieldProperties & {
    value: string;
    placeholder?: string;
  }>;

export type InputFieldComponentSchema =
  GeneralTextFieldComponent<'input-field'>;

export type EmailFieldComponentSchema =
  GeneralTextFieldComponent<'email-field'>;

export type PhoneFieldComponentSchema =
  GeneralTextFieldComponent<'phone-field'>;

export type TextareaFieldComponentSchema =
  GeneralTextFieldComponent<'textarea-field'>;

export type SelectionOption = {
  label: string;
  value: string;
};

export type SelectFieldComponentSchema =
  GeneralComponent<'select-field', GeneralFormFieldProperties & {
    placeholder?: string;
    options: SelectionOption[];
    value: SelectionOption['value'][];
  }>;

export type CheckboxFieldComponentSchema =
  GeneralComponent<'checkbox-field', GeneralFormFieldProperties & {
    options: SelectionOption[];
    value: SelectionOption['value'][];
  }>;

export type RadioFieldComponentSchema =
  GeneralComponent<'radio-field', GeneralFormFieldProperties & {
    name: string;
    options: SelectionOption[];
    value: SelectionOption['value'];
  }>;

export type TextComponentSchema = GeneralComponent<'text', {
  text: string;
}>

export type ButtonComponentSchema = GeneralComponent<'button', {
  text: string;
  type: 'button' | 'submit';
}>;

export type GroupComponentSchema = GeneralComponent<'group', {
  components: ComponentSchema[];
}>;

export type ComponentSchema =
  | InputFieldComponentSchema
  | EmailFieldComponentSchema
  | PhoneFieldComponentSchema
  | TextareaFieldComponentSchema
  | SelectFieldComponentSchema
  | CheckboxFieldComponentSchema
  | RadioFieldComponentSchema
  | TextComponentSchema
  | ButtonComponentSchema
  | GroupComponentSchema;
