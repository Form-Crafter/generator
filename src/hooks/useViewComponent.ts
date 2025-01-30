import { ComponentId, useFormCrafter } from '@form-crafter/core'
import { useMemo } from 'react'

import { useComponentMeta } from './useComponentMeta'

export const useViewComponent = (id: ComponentId) => {
    const meta = useComponentMeta(id)
    const { theme, PlaceholderComponent } = useFormCrafter()

    const module = useMemo(() => theme.find(({ name }) => name === meta.name), [theme, meta])

    return module?.Component || PlaceholderComponent
}
