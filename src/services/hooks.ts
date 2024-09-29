import { useEffect } from 'react';

import { ComponentsView, Schema } from '_types/generator';
import { useUnit } from 'effector-react';

import { $schemaComponents, setFullSchemaEvent } from '.';
import { setComponentsViewEvent } from './componentsView';

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
