import { Schema } from '@form-crafter/core'
import { EventCallable, sample } from 'effector'

import { SchemaService } from './types'

type Params = Pick<SchemaService, 'setFullSchemaEvent'> & {
    runSplitSchemaEvent: EventCallable<Schema>
}

export const init = ({ setFullSchemaEvent, runSplitSchemaEvent }: Params) => {
    sample({
        clock: setFullSchemaEvent,
        target: runSplitSchemaEvent,
    })
}
