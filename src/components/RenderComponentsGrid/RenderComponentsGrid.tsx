import { FC, memo, ReactNode } from 'react';

import { ComponentsTree, TreeNode } from '_types/components';
import { isNotUndefined } from '_utils/index';

import styles from './styles.module.sass';
import { LayoutComponent } from '../LayoutComponent';
import { RenderComponentContainer } from '../RenderComponentContainer';

export type RenderComponentsGridProps = {
  id?: string;
  className?: string;
  tree: ComponentsTree | undefined;
  children?: (node: TreeNode, index: number) => ReactNode;
};

export const RenderComponentsGrid: FC<RenderComponentsGridProps> = memo(
  ({ id, tree, children }) =>
    !!tree?.length && (
      <div id={id} className={styles.root}>
        {tree.map((node, index) => (
          <LayoutComponent key={node.id} id={node.id}>
            {isNotUndefined(children) ? (
              children(node, index)
            ) : (
              <RenderComponentContainer {...node} />
            )}
          </LayoutComponent>
        ))}
      </div>
    )
);
