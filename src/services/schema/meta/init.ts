import { isNotEmpty } from '@form-crafter/utils'
import { EventCallable, sample } from 'effector'

import { ComponentsMeta, MetaServiceParams } from './types'

type Params = Pick<MetaServiceParams, 'runSplitSchemaEvent'> & {
    setComponentsMetaEvent: EventCallable<ComponentsMeta>
}

export const init = ({ runSplitSchemaEvent, setComponentsMetaEvent }: Params) => {
    sample({
        clock: runSplitSchemaEvent,
        filter: ({ componentsSchemas }) => isNotEmpty(componentsSchemas),
        fn: ({ componentsSchemas }) => {
            const data = Object.entries(componentsSchemas).reduce(
                (obj, [id, schema]) => ({
                    ...obj,
                    [id]: schema.meta,
                }),
                {},
            )
            return data
        },
        target: setComponentsMetaEvent,
    })
}
