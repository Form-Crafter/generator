import { Schema } from '@form-crafter/core'
import { EventCallable } from 'effector'

export type RelationsService = {}

export type RelationsServiceParams = {
    runSplitSchemaEvent: EventCallable<Schema>
}
