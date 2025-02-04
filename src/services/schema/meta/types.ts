import { ComponentId, ComponentSchema } from '@form-crafter/core'
import { StoreWritable } from 'effector'

export type ComponentsMeta = Record<ComponentId, ComponentSchema['meta']>

export type MetaService = {
    $componentsMeta: StoreWritable<ComponentsMeta>
}

export type MetaServiceParams = {
    initial: ComponentsMeta
}
