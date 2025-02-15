import { EntityId, rootComponentId } from '@form-crafter/core'

import { useComponentMeta } from './useComponentMeta'

export const useIsDynamicContainer = (id: EntityId): boolean => {
    const meta = useComponentMeta(id)

    return id !== rootComponentId && meta.type === 'dynamic-container'
}
