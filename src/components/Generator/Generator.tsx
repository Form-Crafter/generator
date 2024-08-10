import { Generator as GeneratorProps } from '@types';
import { FC, memo } from 'react';
import { RenderComponentsGrid } from '../RenderComponentsGrid';
import { useGeneratorStylesVars } from './hooks';
import styles from './styles.module.sass';
import { useFillSchema, useSchemaComponents } from '@services/hooks';

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
