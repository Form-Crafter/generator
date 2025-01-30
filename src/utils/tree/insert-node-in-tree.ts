// import { ViewNode, ViewTree } from '@form-crafter/core'

// import { ComponentsTree, TreeNode } from '_types/components'
// import { ComponentId } from '_types/core'

// export const insertNodeInTree = (viewTree: ViewTree, nodeToAdd: ViewNode, idToFind: ComponentId) =>
//     viewTree.map((viewNode) => {
//         if (viewNode.componentId === idToFind) {
//             const curTree = node.childTree || []
//             return { ...viewNode, childTree: [...curTree, nodeToAdd] }
//         } else if (viewNode.childTree) {
//             return {
//                 ...node,
//                 childTree: insertNodeInTree(node.childTree, nodeToAdd, idToFind),
//             }
//         }
//         return viewNode
//     })
