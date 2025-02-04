import { Schema } from '@form-crafter/core'
import { createStore } from 'effector'

import { init } from './init'
import { createMetaService } from './meta'
import { createPropertiesService } from './properties'
import { createRelationsService } from './relations'
import { SchemaService, SchemaServiceParams } from './types'
import { splitSchema } from './utils'
import { createValidationsService } from './validations'
import { createViewsService } from './views'

const getInitialSchema = (): Schema => ({
    id: '',
    version: '1.0.0',
    viewsTrees: {
        initialViewId: '',
        trees: {},
    },
    componentsSchemas: {},
    validationRules: [],
    relationsRules: [],
})

export const createSchemaService = ({ schema = getInitialSchema() }: SchemaServiceParams): SchemaService => {
    const $schema = createStore<Schema>(schema)

    const { views, meta, properties, relations, validations } = splitSchema(schema)

    const viewsService = createViewsService({ initial: views })
    const metaService = createMetaService({ initial: meta })
    const propertiesService = createPropertiesService({ initial: properties })
    const relationsService = createRelationsService({ initial: relations })
    const validationsService = createValidationsService({ initial: validations })

    init({})

    return {
        $schema,
        viewsService,
        propertiesService,
        metaService,
        relationsService,
        validationsService,
    }
}
