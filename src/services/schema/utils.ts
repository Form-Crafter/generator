import { Schema } from '@form-crafter/core'

export const splitSchema = (schema: Schema) => {
    const { meta, properties } = Object.entries(schema.componentsSchemas).reduce(
        (obj, [id, schema]) => ({
            meta: {
                ...obj.meta,
                [id]: schema.meta,
            },
            properties: {
                ...obj.properties,
                [id]: schema.properties,
            },
        }),
        { meta: {}, properties: {} },
    )
    return {
        views: schema.viewsTrees,
        meta,
        properties,
        relations: {},
        validations: {},
    }
}
