import { ComponentId } from '@form-crafter/core'
import { useStoreMap } from 'effector-react'

import { useGenerator } from '_contexts'

export const useComponentMeta = (id: ComponentId) => {
    const { services } = useGenerator()

    const meta = useStoreMap({
        store: services.schemaService.metaService.$componentsMeta,
        keys: [id],
        fn: (obj, [id]) => obj[id],
    })

    return meta
}
