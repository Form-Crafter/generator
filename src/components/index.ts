import { ComponentsView } from '_types';

import {
  Group,
  Button,
  Checkbox,
  Email,
  Input,
  Phone,
  Radio,
  Select,
  Text,
  Textarea,
  Multifield,
} from './elements';
import { MaskInput } from './elements/MaskInput';
import { Generator } from './Generator';

export const defaultComponentsView: Required<ComponentsView> = {
  input: Input,
  'mask-input': MaskInput,
  email: Email,
  phone: Phone,
  textarea: Textarea,
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
  group: Group,
  multifield: Multifield,
  button: Button,
  text: Text,
};

export {
  Generator,
  Group,
  Button,
  Checkbox,
  Email,
  Input,
  Phone,
  Radio,
  Select,
  Text,
  Textarea,
};
