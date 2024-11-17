import { MaskedRegExp } from 'imask';

import { ComponentLayout } from './general';

export type ComponentType =
  | 'input'
  | 'mask-input'
  | 'email'
  | 'phone'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'text'
  | 'button'
  | 'group'
  | 'multifield';

export type RelationsSchema = {
  disableIf: {
    fieldId: string;
    operator: string;
    value: string;
  };
};

export type ComponentId = string;

export type GeneralComponent<T extends ComponentType> = {
  meta: {
    id: ComponentId;
    componentType: T;
    formKey?: string;
    layout: ComponentLayout;
  };
  validation?: any;
  relations?: RelationsSchema;
};

export type GeneralFormFieldProperties = {
  label?: string;
  disabled?: boolean;
};

export type GeneralTextFieldComponent<
  T extends ComponentType,
  P = object,
> = GeneralComponent<T> & {
  properties: GeneralFormFieldProperties & {
    value: string;
    placeholder?: string;
  } & P;
};

export type InputFieldComponentSchema = GeneralTextFieldComponent<'input'>;

export type MaskInputFieldComponentSchema = GeneralTextFieldComponent<
  'mask-input',
  {
    mask: string | RegExp;
    showMask?: boolean;
    placeholderChar?: string;
    returnMaskedValue?: boolean;
  } & Pick<MaskedRegExp, 'overwrite' | 'eager' | 'skipInvalid' | 'autofix'>
>;

export type EmailFieldComponentSchema = GeneralTextFieldComponent<'email'>;

export type PhoneFieldComponentSchema = GeneralTextFieldComponent<'phone'>;

export type TextareaFieldComponentSchema =
  GeneralTextFieldComponent<'textarea'>;

export type SelectionOption = {
  label: string;
  value: string;
};

export type SelectFieldComponentSchema = GeneralComponent<'select'> & {
  properties: GeneralFormFieldProperties & {
    placeholder?: string;
    options: SelectionOption[];
    value: SelectionOption['value'][];
  };
};

export type CheckboxFieldComponentSchema = GeneralComponent<'checkbox'> & {
  properties: GeneralFormFieldProperties & {
    options: SelectionOption[];
    value: SelectionOption['value'][];
  };
};

export type RadioFieldComponentSchema = GeneralComponent<'radio'> & {
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
  components?: ComponentSchema[];
  properties: {
    title?: string;
    groupTitle?: string;
    template: ComponentSchemaOptionalId[];
    addButtonText?: string;
  };
};

export type WithOptionalId<T> = T extends { meta: infer M }
  ? Omit<T, 'meta'> & { meta: Omit<M, 'id'> & { id?: ComponentId } }
  : T;

export type ComponentSchemaOptionalId = WithOptionalId<ComponentSchema>;

export type ComponentSchema =
  | InputFieldComponentSchema
  | MaskInputFieldComponentSchema
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
