import { ComponentsView } from '@types';

import { Generator } from './Generator';
import { Group } from './Group';
import { Button } from './pure/Button';
import { Checkbox } from './pure/Checkbox';
import { Email } from './pure/Email';
import { Input } from './pure/Input';
import { Phone } from './pure/Phone';
import { Radio } from './pure/Radio';
import { Select } from './pure/Select';
import { Text } from './pure/Text';
import { Textarea } from './pure/Textarea';

export const defaultComponentsView: ComponentsView = {
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
