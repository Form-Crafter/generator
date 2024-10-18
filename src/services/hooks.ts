import { useEffect } from 'react';

import { GeneratorProps } from '_types';

import { setComponentsViewEvent } from './componentsView';
import { setUserSubmitHandlerEvent } from './form';
import { setFullSchemaEvent } from './schema';

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
