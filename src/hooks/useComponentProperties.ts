import { ComponentId } from '@form-crafter/core'
import { useStoreMap } from 'effector-react'

import { useGenerator } from '_contexts'

export const useComponentProperties = (id: ComponentId) => {
    const { services } = useGenerator()

    const properties = useStoreMap({
        store: services.schemaService.propertiesService.$componentsProperties,
        keys: [id],
        fn: (obj, [id]) => obj[id],
    })

    return properties
}
