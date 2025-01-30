import { Schema, ViewsTrees, ViewTree, ViewTreeId } from '@form-crafter/core'
import { EventCallable, StoreWritable } from 'effector'

export type ViewsService = {
    $curentViewId: StoreWritable<ViewTreeId>
    $views: StoreWritable<ViewsTrees['trees']>
    setCurrentViewIdEvent: EventCallable<ViewTreeId>
    $currentView: StoreWritable<ViewTree>
}

export type ViewsServiceParams = {
    runSplitSchemaEvent: EventCallable<Schema>
}
