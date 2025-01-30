import { createEvent, createStore } from 'effector'

import { init } from './init'
import { ComponentsMeta, MetaService, MetaServiceParams } from './types'

export const createMetaService = ({ runSplitSchemaEvent }: MetaServiceParams): MetaService => {
    const $componentsMeta = createStore<ComponentsMeta>({})

    const setComponentsMetaEvent = createEvent<ComponentsMeta>('setComponentsMetaEvent')

    $componentsMeta.on(setComponentsMetaEvent, (_, data) => data)

    init({ runSplitSchemaEvent, setComponentsMetaEvent })

    return {
        $componentsMeta,
    }
}
