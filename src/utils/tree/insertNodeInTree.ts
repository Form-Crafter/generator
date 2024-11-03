import { ComponentsTree, TreeNode } from '_types/components';
import { ComponentId } from '_types/core';

export const insertNodeInTree = (
  tree: ComponentsTree,
  nodeToAdd: TreeNode,
  idToFind: ComponentId
) =>
  tree.map((node) => {
    if (node.id === idToFind) {
      const curTree = node.childTree || [];
      return { ...node, childTree: [...curTree, nodeToAdd] };
    } else if (node.childTree) {
      return {
        ...node,
        childTree: insertNodeInTree(node.childTree, nodeToAdd, idToFind),
      };
    }
    return node;
  });
