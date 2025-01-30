import { ComponentId, ViewTree } from '@form-crafter/core'

import { hasChild } from './has-child'

export const collectAllTreeIds = (viewTree: ViewTree): ComponentId[] =>
    viewTree.reduce<ComponentId[]>((arr, cur) => [...arr, cur.componentId, ...(hasChild(cur) ? collectAllTreeIds(cur.children) : [])], [])
