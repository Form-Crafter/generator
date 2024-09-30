import { FC, memo } from 'react';

import { Schema } from '_types';

import styles from './styles.module.sass';
import { RenderComponent } from '../RenderComponent';
import { WrapperComponent } from '../WrapperComponent';

export type RenderComponentsGridProps = {
  id?: string;
  className?: string;
  componentsSchemas: Schema['components'];
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ componentsSchemas, id }) => {
    return (
      <div id={id} className={styles.root}>
        {componentsSchemas.map((schema) => (
          <WrapperComponent
            key={schema.meta.id}
            componentType={schema.meta.componentType}
            layout={schema.meta.layout}
          >
            <RenderComponent componentSchema={schema} />
          </WrapperComponent>
        ))}
      </div>
    );
  }
);
