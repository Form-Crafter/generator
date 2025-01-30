// import { ComponentsMetaData, ComponentsPropertiesData, ComponentsRelationsData, ComponentsTree, ComponentsValidationData, TreeNode } from '_types/components'
// import { ComponentSchemaOptionalId } from '_types/core'
// import { genComponentId, isNotUndefined } from '_utils/index'

// export const expandSchemaIntoParts = (schemaComponents: ComponentSchemaOptionalId[]) => {
//     const properties: ComponentsPropertiesData = {}
//     const meta: ComponentsMetaData = {}
//     const validation: ComponentsValidationData = {}
//     const relations: ComponentsRelationsData = {}

//     const generateTreeAndFillData = (parentId: TreeNode['parentId'], components: Parameters<typeof expandSchemaIntoParts>[0]): ComponentsTree => {
//         const result: ComponentsTree = []

//         components.forEach((comp) => {
//             // При обработке компонентов из Multifield.properties.template схемы будут без id
//             const nodeId = comp.meta.id || genComponentId(comp.meta.componentType)
//             const node: TreeNode = { id: nodeId, parentId }

//             const hasChildren = 'components' in comp
//             if (hasChildren && !!comp?.components?.length) {
//                 node.childTree = generateTreeAndFillData(nodeId, comp.components)
//             }

//             meta[nodeId] = { ...comp.meta, id: nodeId }

//             if ('properties' in comp) {
//                 properties[nodeId] = comp.properties
//             }
//             if ('validation' in comp && isNotUndefined(comp.validation)) {
//                 validation[nodeId] = comp.validation
//             }
//             if ('relations' in comp && isNotUndefined(comp.relations)) {
//                 relations[nodeId] = comp.relations
//             }

//             result.push(node)
//         })

//         return result
//     }

//     const tree = generateTreeAndFillData(null, schemaComponents)

//     return {
//         tree,
//         properties,
//         meta,
//         validation,
//         relations,
//     }
// }
