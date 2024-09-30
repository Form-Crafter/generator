import { useEffect } from 'react';

import { GeneratorProps } from '_types';
import { useUnit } from 'effector-react';

import { setComponentsViewEvent } from './componentsView';
import { setUserSubmitHandlerEvent } from './form';
import { $componentsSchemas, setFullSchemaEvent } from './schema';

export const useFillStore = ({
  schema,
  componentsView,
  onSubmit,
}: GeneratorProps) => {
  useEffect(() => {
    setFullSchemaEvent(schema);
  }, [schema]);

  useEffect(() => {
    setComponentsViewEvent(componentsView);
  }, [componentsView]);

  useEffect(() => {
    setUserSubmitHandlerEvent(onSubmit);
  }, [onSubmit]);
};

export const useComponentsSchemas = () => {
  const [components] = useUnit([$componentsSchemas]);
  return components;
};
