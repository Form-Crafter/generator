import { ComponentId, ComponentSchema, Schema } from '@form-crafter/core'
import { EventCallable, StoreWritable } from 'effector'

export type ComponentsMeta = Record<ComponentId, ComponentSchema['meta']>

export type MetaService = {
    $componentsMeta: StoreWritable<ComponentsMeta>
}

export type MetaServiceParams = {
    runSplitSchemaEvent: EventCallable<Schema>
}
