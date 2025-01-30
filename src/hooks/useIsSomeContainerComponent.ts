import { ComponentId } from '@form-crafter/core'

import { useComponentMeta } from './useComponentMeta'

export const useIsSomeContainerComponent = (id: ComponentId) => {
    const { type } = useComponentMeta(id)

    return type === 'container' || type === 'dynamic-container'
}
