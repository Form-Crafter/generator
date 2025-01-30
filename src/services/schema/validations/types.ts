import { Schema } from '@form-crafter/core'
import { EventCallable } from 'effector'

export type ValidationsService = {}

export type ValidationsServiceParams = {
    runSplitSchemaEvent: EventCallable<Schema>
}
