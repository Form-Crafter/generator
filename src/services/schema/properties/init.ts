import { isNotEmpty } from '@form-crafter/utils'
import { sample } from 'effector'

import { PropertiesService, PropertiesServiceParams } from './types'

type Params = Pick<PropertiesServiceParams, 'runSplitSchemaEvent'> & Pick<PropertiesService, 'setComponentsPropertiesEvent'>

export const init = ({ runSplitSchemaEvent, setComponentsPropertiesEvent }: Params) => {
    sample({
        clock: runSplitSchemaEvent,
        filter: ({ componentsSchemas }) => isNotEmpty(componentsSchemas),
        fn: ({ componentsSchemas }) => {
            const data = Object.entries(componentsSchemas).reduce(
                (obj, [id, schema]) => ({
                    ...obj,
                    [id]: schema.properties,
                }),
                {},
            )
            return data
        },
        target: setComponentsPropertiesEvent,
    })
}
