import { Schema } from '@form-crafter/core'
import { StoreWritable } from 'effector'

import { MetaService } from './meta/types'
import { PropertiesService } from './properties/types'
import { RelationsService } from './relations/types'
import { ValidationsService } from './validations/types'
import { ViewsService } from './views/types'

export type SchemaService = {
    $schema: StoreWritable<Schema>
    propertiesService: PropertiesService
    metaService: MetaService
    viewsService: ViewsService
    relationsService: RelationsService
    validationsService: ValidationsService
}

export type SchemaServiceParams = {
    schema?: Schema
}
