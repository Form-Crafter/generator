import { ViewsTrees, ViewTreeId } from '@form-crafter/core'
import { combine, createEvent, createStore } from 'effector'

import { init } from './init'
import { ViewsService, ViewsServiceParams } from './types'

export const createViewsService = ({ initial }: ViewsServiceParams): ViewsService => {
    const $curentViewId = createStore<ViewTreeId>(initial.initialViewId)
    const $views = createStore<ViewsTrees['trees']>(initial.trees)

    const setViewsEvent = createEvent<ViewsTrees['trees']>('setViewsEvent')
    const setCurrentViewIdEvent = createEvent<ViewTreeId>('setCurrentViewIdEvent')

    $curentViewId.on(setCurrentViewIdEvent, (_, nextId) => nextId)

    const currentView = combine($curentViewId, $views, (id, views) => views[id])

    init({})

    return {
        $curentViewId,
        $views,
        setViewsEvent,
        currentView,
        setCurrentViewIdEvent,
    }
}
