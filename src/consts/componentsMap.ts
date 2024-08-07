import {
  Input,
  Email,
  Phone,
  Text,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Group,
  Button,
} from '@components';
import { ComponentsMap } from '@types';

export const defaultComponentsMap: ComponentsMap = {
  'input-field': Input,
  'email-field': Email,
  'phone-field': Phone,
  'textarea-field': Textarea,
  'select-field': Select,
  'checkbox-field': Checkbox,
  'radio-field': Radio,
  group: Group,
  button: Button,
  text: Text,
};
