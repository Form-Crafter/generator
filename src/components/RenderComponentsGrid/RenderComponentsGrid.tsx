import { FC, memo } from 'react';

import { Schema } from '@types';

import styles from './styles.module.sass';
import { RenderComponent } from '../RenderComponent';
import { WrapperComponent } from '../WrapperComponent';

export type RenderComponentsGridProps = Pick<Schema, 'components'> & {
  id?: string;
  className?: string;
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ components, id }) => {
    return (
      <div id={id} className={styles.root}>
        {components.map((schema) => (
          <WrapperComponent
            key={schema.id}
            componentType={schema.type}
            layout={schema.layout}
          >
            <RenderComponent componentSchema={schema} />
          </WrapperComponent>
        ))}
      </div>
    );
  }
);
