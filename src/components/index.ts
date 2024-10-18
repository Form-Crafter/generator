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
import { Generator } from './Generator';

export const defaultComponentsView: ComponentsView = {
  'input-field': Input,
  'email-field': Email,
  'phone-field': Phone,
  'textarea-field': Textarea,
  'select-field': Select,
  'checkbox-field': Checkbox,
  'radio-field': Radio,
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
