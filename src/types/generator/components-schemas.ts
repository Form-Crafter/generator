import { ComponentLayout, ComponentType } from './general';

export type GeneralComponent<T extends ComponentType> = {
  id: string;
  type: T;
  formKey?: string;
  layout: ComponentLayout;
  customProperties?: Record<string, string>;
};

export type GeneralFormFieldComponent<T extends ComponentType> =
  GeneralComponent<T> & {
    label?: string;
    disabled?: boolean;
  };

export type GeneralTextFieldComponent<T extends ComponentType> =
  GeneralFormFieldComponent<T> & {
    value?: string;
    placeholder?: string;
  };

export type SelectionOption = {
  label: string;
  value: string;
};

export type InputFieldComponentSchema =
  GeneralTextFieldComponent<'input-field'>;

export type EmailFieldComponentSchema =
  GeneralTextFieldComponent<'email-field'>;

export type PhoneFieldComponentSchema =
  GeneralTextFieldComponent<'phone-field'>;

export type TextareaFieldComponentSchema =
  GeneralTextFieldComponent<'textarea-field'>;

export type SelectFieldComponentSchema =
  GeneralFormFieldComponent<'select-field'> & {
    placeholder?: string;
    options: SelectionOption[];
    value?: SelectionOption['value'][];
  };

export type CheckboxFieldComponentSchema =
  GeneralFormFieldComponent<'checkbox-field'> & {
    options: SelectionOption[];
    value?: SelectionOption['value'][];
  };

export type RadioFieldComponentSchema =
  GeneralFormFieldComponent<'radio-field'> & {
    options: SelectionOption[];
    value?: SelectionOption['value'];
  };

export type TextComponentSchema = GeneralComponent<'text'> & {
  text: string;
};

export type ButtonComponentSchema = GeneralComponent<'button'> & {
  text: string;
};

export type GroupComponentSchema = GeneralComponent<'group'> & {
  components: ComponentSchema[];
};

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
