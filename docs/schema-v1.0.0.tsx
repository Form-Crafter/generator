enum ComponentType {
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

type GeneralComponent = {
  id: string;
  finalKey: string;
  customProperties?: any;
};

type GeneralFormFieldComponent = GeneralComponent & {
  label?: string;
  description?: string;
  disabled?: boolean;
};

type GeneralTextFieldComponent = GeneralFormFieldComponent & {
  defaultValue?: string;
};

type SelectionOption = {
  label: string;
  value: string;
};

type GeneralSelectionFieldComponent = GeneralFormFieldComponent & {
  options: SelectionOption[];
  defaultValues?: SelectionOption['value'][];
};

type InputFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.InputField;
};

type EmailFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.EmailField;
};

type PhoneFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.PhoneField;
};

type TextareaFieldComponent = GeneralTextFieldComponent & {
  type: ComponentType.TextareaField;
};

type SelectFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.SelectField;
};

type CheckboxFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.CheckboxField;
};

type RadioFieldComponent = GeneralSelectionFieldComponent & {
  type: ComponentType.RadioField;
};

type TextComponent = GeneralComponent & {
  type: ComponentType.Text;
};

type ButtonComponent = GeneralComponent & {
  type: ComponentType.Button;
};

type GroupComponent = GeneralComponent & {
  type: ComponentType.Group;
  components: Component[];
};

type Component =
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

type Schema = {
  version: string;
  components: Component[];
};
