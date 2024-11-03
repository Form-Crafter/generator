import { ComponentsTree } from '_types/components';
import { ComponentId } from '_types/core';

import { hasChild } from './hasChild';

export const collectAllTreeIds = (tree: ComponentsTree) =>
  tree.reduce<ComponentId[]>(
    (arr, cur) => [
      ...arr,
      cur.id,
      ...(hasChild(cur) ? collectAllTreeIds(cur.childTree) : []),
    ],
    []
  );
