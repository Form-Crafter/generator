import { Schema } from '@form-crafter/core'

import { FormService } from './form/types'
import { SchemaService } from './schema/types'

export type RootServicesParams = {
    schema: Schema
    onSubmit: (schema: Schema) => void
}

export type RootServices = {
    schemaService: SchemaService
    formService: FormService
}
