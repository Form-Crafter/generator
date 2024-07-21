export enum ComponentType {
  InputField = 'input-field',
  EmailField = 'email-field',
  PhoneField = 'phone-field',
  TextareaField = 'textarea-field',
  SelectField = 'select-field',
  CheckboxField = 'checkbox-field',
  RadioField = 'radio-field',
  Text = 'text',
  Button = 'button',
  Group = 'group',
}

export type GeneralComponent = {
  id: string;
  formKey: string;
  customProperties?: Record<string, string>;
};

export type GeneralFormFieldComponent = GeneralComponent & {
  label?: string;
  disabled?: boolean;
};

export type GeneralTextFieldComponent = GeneralFormFieldComponent & {
  value?: string;
  placeholder?: string;
};

export type SelectionOption = {
  label: string;
  value: string;
};

export type GeneralSelectionFieldComponent = GeneralFormFieldComponent & {
  options: SelectionOption[];
  selectedOptionsValues?: SelectionOption['value'][];
};

export type InputFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.InputField;
};

export type EmailFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.EmailField;
};

export type PhoneFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.PhoneField;
};

export type TextareaFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.TextareaField;
};

export type SelectFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.SelectField;
  placeholder?: string;
};

export type CheckboxFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.CheckboxField;
};

export type RadioFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.RadioField;
};

export type TextComponent = GeneralComponent & {
  type: ComponentType.Text;
  text: string;
};

export type ButtonComponent = GeneralComponent & {
  type: ComponentType.Button;
  text: string;
};

export type GroupComponent = GeneralComponent & {
  type: ComponentType.Group;
  components: Component[];
};

export type Component =
  | InputFieldComponent
  | EmailFieldComponent
  | PhoneFieldComponent
  | TextareaFieldComponent
  | SelectFieldComponent
  | CheckboxFieldComponent
  | RadioFieldComponent
  | TextComponent
  | ButtonComponent
  | GroupComponent;

export type Schema = {
  version: string;
  components: Component[];
};
