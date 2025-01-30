import { createEvent, createStore } from 'effector'

import { init } from './init'
import {
    ComponentsProperties,
    PropertiesService,
    PropertiesServiceParams,
    SetComponentsPropertiesEventPayload,
    UpdateComponentPropertiesPayload,
} from './types'

export const createPropertiesService = ({ runSplitSchemaEvent }: PropertiesServiceParams): PropertiesService => {
    const $componentsProperties = createStore<ComponentsProperties>({})

    const updateComponentPropertiesEvent = createEvent<UpdateComponentPropertiesPayload>('updateComponentPropertiesEvent')

    const setComponentsPropertiesEvent = createEvent<SetComponentsPropertiesEventPayload>('setComponentsPropertiesEvent')

    $componentsProperties.on(setComponentsPropertiesEvent, (_, data) => data)

    $componentsProperties.on(updateComponentPropertiesEvent, (cur, { id, data }) => ({
        ...cur,
        [id]: { ...cur[id], ...data },
    }))

    init({ runSplitSchemaEvent, setComponentsPropertiesEvent })

    return {
        $componentsProperties,
        updateComponentPropertiesEvent,
        setComponentsPropertiesEvent,
    }
}
