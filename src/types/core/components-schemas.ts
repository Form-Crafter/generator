import { ComponentLayout, ComponentType } from './general';

export type ValidationSchema = {
  required?: boolean;
};

export type RelationsSchema = {
  disableIf: {
    fieldId: string;
    operator: string;
    value: string;
  };
};

export type GeneralComponent<T extends ComponentType> = {
  meta: {
    id: string;
    componentType: T;
    formKey?: string;
    layout: ComponentLayout;
  };
  validation?: ValidationSchema;
  relations?: RelationsSchema;
};

export type GeneralFormFieldProperties = {
  label?: string;
  disabled?: boolean;
};

export type GeneralTextFieldComponent<T extends ComponentType> =
  GeneralComponent<T> & {
    properties: GeneralFormFieldProperties & {
      value: string;
      placeholder?: string;
    };
  };

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

export type SelectFieldComponentSchema = GeneralComponent<'select-field'> & {
  properties: GeneralFormFieldProperties & {
    placeholder?: string;
    options: SelectionOption[];
    value: SelectionOption['value'][];
  };
};

export type CheckboxFieldComponentSchema =
  GeneralComponent<'checkbox-field'> & {
    properties: GeneralFormFieldProperties & {
      options: SelectionOption[];
      value: SelectionOption['value'][];
    };
  };

export type RadioFieldComponentSchema = GeneralComponent<'radio-field'> & {
  properties: GeneralFormFieldProperties & {
    options: SelectionOption[];
    value: SelectionOption['value'];
  };
};

export type TextComponentSchema = GeneralComponent<'text'> & {
  properties: {
    text: string;
  };
};

export type ButtonComponentSchema = GeneralComponent<'button'> & {
  properties: {
    text: string;
    type: 'button' | 'submit';
  };
};

export type GroupComponentSchema = GeneralComponent<'group'> & {
  properties?: {
    title?: string;
  };
  components: ComponentSchema[];
};

export type MultifieldComponentSchema = GeneralComponent<'multifield'> & {
  components: ComponentSchema[];
  properties: {
    template: ComponentSchema[];
  };
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
  | GroupComponentSchema
  | MultifieldComponentSchema;
