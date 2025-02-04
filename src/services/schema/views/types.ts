import { ViewsTrees, ViewTree, ViewTreeId } from '@form-crafter/core'
import { EventCallable, Store, StoreWritable } from 'effector'

export type ViewsService = {
    $curentViewId: StoreWritable<ViewTreeId>
    $views: StoreWritable<ViewsTrees['trees']>
    setCurrentViewIdEvent: EventCallable<ViewTreeId>
    setViewsEvent: EventCallable<ViewsTrees['trees']>
    currentView: Store<ViewTree>
}

export type ViewsServiceParams = {
    initial: ViewsTrees
}
