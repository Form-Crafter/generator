import { createFormService } from './form'
import { createSchemaService } from './schema'
import { RootServices, RootServicesParams } from './types'

export const createRootServices = ({ schema, onSubmit }: RootServicesParams): RootServices => {
    const schemaService = createSchemaService({ schema })
    const formService = createFormService({ onSubmit })

    return {
        schemaService,
        formService,
    }
}
