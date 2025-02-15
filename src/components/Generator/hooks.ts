import { useGeneratorLayout } from '_hooks'

import { getStyleVariables } from './utils'

export const useGeneratorStylesVars = () => {
    const layout = useGeneratorLayout()

    return getStyleVariables(layout)
}
