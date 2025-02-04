import { init } from './init'
import { ValidationsService, ValidationsServiceParams } from './types'

export const createValidationsService = ({ initial }: ValidationsServiceParams): ValidationsService => {
    init({ initial })
    return {}
}
