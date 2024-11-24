import { ComponentsView } from '_types';

import {
  Group,
  Button,
  Checkbox,
  Email,
  Input,
  Radio,
  Select,
  Text,
  Textarea,
  Multifield,
  DateInput,
  TimeInput,
} from './elements';
import { MaskInput } from './elements/MaskInput';
import { Generator } from './Generator';

export const defaultComponentsView: Required<ComponentsView> = {
  input: Input,
  'mask-input': MaskInput,
  date: DateInput,
  time: TimeInput,
  email: Email,
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
  Radio,
  Select,
  Text,
  Textarea,
};
