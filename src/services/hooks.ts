import { useUnit } from 'effector-react';
import { $schemaComponents, setFullSchemaEvent } from '.';
import { useEffect } from 'react';
import { setComponentsViewEvent } from './componentsView';
import { ComponentsView, Schema } from '@types/generator';

export const useFillSchema = (
  schema: Schema,
  componentsView?: ComponentsView
) => {
  useEffect(() => {
    setFullSchemaEvent(schema);
  }, [schema]);

  useEffect(() => {
    setComponentsViewEvent(componentsView);
  }, [componentsView]);
};

export const useSchemaComponents = () => {
  const [components] = useUnit([$schemaComponents]);
  return components;
};
