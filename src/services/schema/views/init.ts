import { Schema, ViewsTrees, ViewTree } from '@form-crafter/core'
import { EventCallable, sample, StoreWritable } from 'effector'

import { ViewsService } from './types'

type Params = Pick<ViewsService, 'setCurrentViewIdEvent'> & {
    runSplitSchemaEvent: EventCallable<Schema>
    setViewsEvent: EventCallable<ViewsTrees['trees']>
    $views: StoreWritable<ViewsTrees['trees']>
    $currentView: StoreWritable<ViewTree>
}

export const init = ({ runSplitSchemaEvent, setCurrentViewIdEvent, setViewsEvent, $currentView, $views }: Params) => {
    sample({
        clock: runSplitSchemaEvent,
        fn: ({ viewsTrees }) => viewsTrees.trees,
        target: setViewsEvent,
    })

    sample({
        clock: runSplitSchemaEvent,
        fn: ({ viewsTrees }) => viewsTrees.initialViewId,
        target: setCurrentViewIdEvent,
    })

    sample({
        source: $views,
        clock: setCurrentViewIdEvent,
        fn: (views, nextViewId) => views[nextViewId],
        target: $currentView,
    })
}
