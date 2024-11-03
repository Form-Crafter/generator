import { TreeNode, TreeNodeWithChild } from '_types/components';

export const hasChild = (node: TreeNode): node is TreeNodeWithChild =>
  !!node?.childTree?.length;
