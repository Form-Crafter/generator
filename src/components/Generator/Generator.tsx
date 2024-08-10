import { FC, memo } from 'react';

import { useFillSchema, useSchemaComponents } from '@services/hooks';
import { Generator as GeneratorProps } from '@types';

import { useGeneratorStylesVars } from './hooks';
import styles from './styles.module.sass';
import { RenderComponentsGrid } from '../RenderComponentsGrid';

export const Generator: FC<GeneratorProps> = memo(
  ({ schema, componentsView }) => {
    useFillSchema(schema, componentsView);

    const stylesVars = useGeneratorStylesVars(schema.layout);

    const components = useSchemaComponents();

    return (
      <div className={styles.root} style={stylesVars}>
        <RenderComponentsGrid id={schema.id} components={components} />
      </div>
    );
  }
);
