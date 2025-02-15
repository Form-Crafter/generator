import { EntityId, getComponentDepth } from '@form-crafter/core'
import { useStoreMap } from 'effector-react'

import { useGeneratorContext } from '_contexts'

export const useComponentDepth = (id: EntityId): number => {
    const { services } = useGeneratorContext()

    return useStoreMap({
        store: services.viewsService.currentView,
        keys: [id],
        fn: ({ components }, [id]) => {
            console.log('id: ', id)
            console.log('components: ', components)
            return getComponentDepth(id, components)
        },
    })
}
