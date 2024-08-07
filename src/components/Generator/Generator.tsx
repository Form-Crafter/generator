import { $schema, setFullSchemaEvent } from '@services';
import { Generator as GeneratorProps } from '@types';
import { FC, memo, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { RenderComponentsGrid } from '../RenderComponentsGrid';
import { useGeneratorStylesVars } from './hooks';
import { setComponentsMapEvent } from '@services/componentsMap';
import styles from './styles.module.sass';

export const Generator: FC<GeneratorProps> = memo(
  ({ schema: initialSchema, componentsMap }) => {
    const [schema] = useUnit([$schema]);

    useEffect(() => {
      setFullSchemaEvent(initialSchema);
    }, [initialSchema]);

    useEffect(() => {
      setComponentsMapEvent(componentsMap);
    }, [componentsMap]);

    const stylesVars = useGeneratorStylesVars(initialSchema.layout);

    return (
      <div className={styles.root} style={stylesVars}>
        <RenderComponentsGrid id={schema.id} components={schema.components} />
      </div>
    );
  }
);
