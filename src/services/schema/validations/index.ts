import { init } from './init'
import { ValidationsService, ValidationsServiceParams } from './types'

export const createValidationsService = ({ runSplitSchemaEvent }: ValidationsServiceParams): ValidationsService => {
    init({ runSplitSchemaEvent })
    return {}
}
