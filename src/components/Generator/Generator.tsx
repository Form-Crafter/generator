import { FC, FormEvent, memo, useCallback } from 'react';

import { onFormSubmitEvent } from '_services/form';
import { useFillStore } from '_services/hooks';
import { useComponentsTree } from '_services/tree/hooks';
import { GeneratorProps } from '_types';

import { useGeneratorStylesVars } from './hooks';
import styles from './styles.module.sass';
import { RenderComponentsGrid } from '../RenderComponentsGrid';

export const Generator: FC<GeneratorProps> = memo(
  ({ schema, componentsView, onSubmit }) => {
    useFillStore({ schema, componentsView, onSubmit });

    const stylesVars = useGeneratorStylesVars(schema.layout);

    const tree = useComponentsTree();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onFormSubmitEvent();
    }, []);

    return (
      <form onSubmit={handleSubmit} className={styles.root} style={stylesVars}>
        <RenderComponentsGrid id={schema.id} tree={tree} />
      </form>
    );
  }
);
