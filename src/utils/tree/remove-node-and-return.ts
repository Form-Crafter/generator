// import { ComponentsTree, TreeNode } from '_types/components'
// import { ComponentId } from '_types/core'

// import { hasChild } from './has-child'

// export const removeNodeAndReturn = (tree: ComponentsTree, idToFind: ComponentId) => {
//     let removedNode: TreeNode | null = null

//     const execute = (tree: ComponentsTree) => {
//         const finalTree: ComponentsTree = []

//         for (let i = 0; i < tree.length; i++) {
//             const node = tree[i]

//             if (node.id === idToFind) {
//                 removedNode = node
//             } else if (hasChild(node)) {
//                 finalTree.push({ ...node, childTree: execute(node.childTree) })
//             } else {
//                 finalTree.push(node)
//             }
//         }

//         return finalTree
//     }

//     const finalTree = execute(tree)

//     return {
//         tree: finalTree,
//         node: removedNode as unknown as TreeNode,
//     }
// }
