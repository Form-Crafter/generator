import { $schema, setFullSchemaEvent } from '@services/index';
import { ComponentType, Schema, Component } from '@types';
import { FC, ReactNode, memo, useEffect } from 'react';
import { useUnit } from 'effector-react';
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
} from './pure';

const renderComponent = (component: Component): ReactNode => {
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
      return <Group renderComponent={renderComponent} {...component} />;
    default:
      return null;
  }
};

type GeneratorProps = {
  schema: Schema;
};

export const Generator: FC<GeneratorProps> = memo(
  ({ schema: initialSchema }) => {
    const [schema] = useUnit([$schema]);

    useEffect(() => {
      setFullSchemaEvent(initialSchema);
    }, [initialSchema]);

    return (
      <div>
        {schema.components.map((component) => (
          <div key={component.id}>{renderComponent(component)}</div>
        ))}
      </div>
    );
  }
);
