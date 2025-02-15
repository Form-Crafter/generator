import { EntityId } from '@form-crafter/core'

import { useComponentMeta } from './useComponentMeta'

export const useIsDynamicContainer = (id: EntityId): boolean => {
    const meta = useComponentMeta(id)

    return meta.type === 'dynamic-container'
}
