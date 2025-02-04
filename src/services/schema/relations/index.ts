import { init } from './init'
import { RelationsService, RelationsServiceParams } from './types'

export const createRelationsService = ({ initial }: RelationsServiceParams): RelationsService => {
    init({ initial })
    return {}
}
