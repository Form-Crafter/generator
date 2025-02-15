import { ComponentMeta, ComponentType, EntityId } from '@form-crafter/core'
import { useStoreMap } from 'effector-react'
import {} from 'react'

import { useGeneratorContext } from '_contexts'

export const useComponentMeta = <T extends ComponentType = ComponentType>(id: EntityId) => {
    const { services } = useGeneratorContext()

    const meta = useStoreMap({
        store: services.componentsSchemasService.$schemas,
        keys: [id],
        fn: (data, [id]) => data[id].meta,
    })

    return meta as ComponentMeta<T>
}
