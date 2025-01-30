import { useStoreMap } from 'effector-react'

import { useGenerator } from '_contexts'

export const useGeneratorLayout = () => {
    const { services } = useGenerator()

    return useStoreMap({
        store: services.schemaService.$schema,
        keys: [],
        fn: (schema) => schema.layout,
    })
}
