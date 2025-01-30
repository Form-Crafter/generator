import { ViewNode, ViewNodeWithChildren } from '@form-crafter/core'
import { isEmpty } from '@form-crafter/utils'

export const hasChild = (viewNode: ViewNode): viewNode is ViewNodeWithChildren => !isEmpty(viewNode?.children)
