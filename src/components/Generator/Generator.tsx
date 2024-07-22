import { $schema, setFullSchemaEvent } from '@services';
import { Schema } from '@types';
import { FC, memo, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { RenderComponent } from '../RenderComponent';
import { RenderComponentsGrid } from '../RenderComponentsGrid';

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
      <RenderComponentsGrid
        id={schema.id}
        renderComponent={RenderComponent}
        components={schema.components}
      />
    );
  }
);
