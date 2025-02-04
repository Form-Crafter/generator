import { createEvent, createStore } from 'effector'

import { init } from './init'
import { ComponentsMeta, MetaService, MetaServiceParams } from './types'

export const createMetaService = ({ initial }: MetaServiceParams): MetaService => {
    const $componentsMeta = createStore<ComponentsMeta>(initial)

    const setComponentsMetaEvent = createEvent<ComponentsMeta>('setComponentsMetaEvent')

    $componentsMeta.on(setComponentsMetaEvent, (_, data) => data)

    init({})

    return {
        $componentsMeta,
    }
}
