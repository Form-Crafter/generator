import { FC, memo } from 'react';

import { ComponentsTree } from '_types/components';

import styles from './styles.module.sass';
import { LayoutComponent } from '../LayoutComponent';
import { RenderComponent } from '../RenderComponent';

export type RenderComponentsGridProps = {
  id?: string;
  className?: string;
  tree: ComponentsTree;
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ id, tree }) => (
    <div id={id} className={styles.root}>
      {tree.map((node) => (
        <LayoutComponent key={node.id} id={node.id}>
          <RenderComponent {...node} />
        </LayoutComponent>
      ))}
    </div>
  )
);
