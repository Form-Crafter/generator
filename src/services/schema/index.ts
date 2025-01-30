import { Schema } from '@form-crafter/core'
import { createEvent, createStore } from 'effector'

import { init } from './init'
import { createMetaService } from './meta'
import { createPropertiesService } from './properties'
import { createRelationsService } from './relations'
import { SchemaService, SchemaServiceParams } from './types'
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

export const createSchemaService = ({ schema: initialSchema = getInitialSchema() }: SchemaServiceParams): SchemaService => {
    const $schema = createStore<Schema>(initialSchema)

    const setFullSchemaEvent = createEvent<Schema>('setFullSchemaEvent')

    const runSplitSchemaEvent = createEvent<Schema>('runSplitSchemaEvent')

    $schema.on(setFullSchemaEvent, (_, data) => data)

    init({ setFullSchemaEvent, runSplitSchemaEvent })

    const viewsService = createViewsService({ runSplitSchemaEvent })
    const metaService = createMetaService({ runSplitSchemaEvent })
    const propertiesService = createPropertiesService({ runSplitSchemaEvent })
    const relationsService = createRelationsService({ runSplitSchemaEvent })
    const validationsService = createValidationsService({ runSplitSchemaEvent })

    return {
        $schema,
        setFullSchemaEvent,
        viewsService,
        propertiesService,
        metaService,
        relationsService,
        validationsService,
    }
}
