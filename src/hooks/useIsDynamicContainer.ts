import { EntityId } from '@form-crafter/core'

import { useComponentMeta } from './useComponentMeta'

export const useIsDynamicContainer = (id: EntityId): boolean => {
    const { type } = useComponentMeta(id)

    return type === 'dynamic-container'
}
