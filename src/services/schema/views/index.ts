import { ViewsTrees, ViewTree, ViewTreeId } from '@form-crafter/core'
import { createEvent, createStore } from 'effector'

import { init } from './init'
import { ViewsService, ViewsServiceParams } from './types'

export const createViewsService = ({ runSplitSchemaEvent }: ViewsServiceParams): ViewsService => {
    const $curentViewId = createStore<ViewTreeId>('')
    const $views = createStore<ViewsTrees['trees']>({})
    const $currentView = createStore<ViewTree>([])

    const setViewsEvent = createEvent<ViewsTrees['trees']>('setViewsEvent')
    const setCurrentViewIdEvent = createEvent<ViewTreeId>('setCurrentViewIdEvent')

    $curentViewId.on(setCurrentViewIdEvent, (_, nextId) => nextId)

    init({ runSplitSchemaEvent, setViewsEvent, setCurrentViewIdEvent, $views, $currentView })

    return {
        $curentViewId,
        $views,
        $currentView,
        setCurrentViewIdEvent,
    }
}
