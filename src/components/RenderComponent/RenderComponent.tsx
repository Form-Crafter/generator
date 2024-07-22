import { ComponentType, Component } from '@types';
import { FC } from 'react';
import {
  Button,
  Input,
  Phone,
  Email,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Text,
  Group,
} from '../pure';

export type RenderComponentProps = {
  component: Component;
};

export const RenderComponent: FC<RenderComponentProps> = ({ component }) => {
  switch (component.type) {
    case ComponentType.Button:
      return <Button {...component} />;
    case ComponentType.InputField:
      return <Input {...component} />;
    case ComponentType.EmailField:
      return <Email {...component} />;
    case ComponentType.PhoneField:
      return <Phone {...component} />;
    case ComponentType.TextareaField:
      return <Textarea {...component} />;
    case ComponentType.SelectField:
      return <Select {...component} />;
    case ComponentType.CheckboxField:
      return <Checkbox {...component} />;
    case ComponentType.RadioField:
      return <Radio {...component} />;
    case ComponentType.Text:
      return <Text {...component} />;
    case ComponentType.Group:
      return <Group renderComponent={RenderComponent} {...component} />;
    default:
      return null;
  }
};
