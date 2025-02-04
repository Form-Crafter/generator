import { useUnit } from 'effector-react'

import { useGenerator } from '_contexts'

export const useCurrentView = () => {
    const { services } = useGenerator()
    return useUnit(services.schemaService.viewsService.currentView)
}
