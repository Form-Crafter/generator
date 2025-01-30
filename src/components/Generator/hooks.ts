import { SchemaLayout } from '@form-crafter/core'

import { useGeneratorLayout } from '_hooks'

import { defaultLayout } from './consts'
import { getStyleVariables } from './utils'

export const useGeneratorStylesVars = () => {
    const layout = useGeneratorLayout()

    const finalSchemaLayout: Required<SchemaLayout> = {
        rowsSpanPx: layout?.rowsSpanPx || defaultLayout.rowsSpanPx,
        colsSpanPx: layout?.colsSpanPx || defaultLayout.colsSpanPx,
    }

    return getStyleVariables(finalSchemaLayout)
}
