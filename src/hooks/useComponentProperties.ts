import { ComponentProperties, ComponentType, EntityId } from '@form-crafter/core'
import { useStoreMap } from 'effector-react'

import { useGeneratorContext } from '_contexts'

export const useComponentProperties = <T extends ComponentType = ComponentType>(id: EntityId) => {
    const { services } = useGeneratorContext()

    const properties = useStoreMap({
        store: services.componentsSchemasService.$schemas,
        keys: [id],
        fn: (data, [id]) => data[id].properties,
    })

    return properties as ComponentProperties<T>
}
