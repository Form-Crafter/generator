import { ComponentId, Schema } from '@form-crafter/core'
import { SomeObject } from '@form-crafter/utils'
import { EventCallable, StoreWritable } from 'effector'

export type ComponentsProperties = Record<ComponentId, SomeObject>

export type UpdateComponentPropertiesPayload = {
    id: ComponentId
    data: SomeObject
}

export type SetComponentsPropertiesEventPayload = ComponentsProperties

export type PropertiesService = {
    $componentsProperties: StoreWritable<ComponentsProperties>
    updateComponentPropertiesEvent: EventCallable<UpdateComponentPropertiesPayload>
    setComponentsPropertiesEvent: EventCallable<SetComponentsPropertiesEventPayload>
}

export type PropertiesServiceParams = {
    runSplitSchemaEvent: EventCallable<Schema>
}
