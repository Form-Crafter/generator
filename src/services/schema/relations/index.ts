import { init } from './init'
import { RelationsService, RelationsServiceParams } from './types'

export const createRelationsService = ({ runSplitSchemaEvent }: RelationsServiceParams): RelationsService => {
    init({ runSplitSchemaEvent })
    return {}
}
