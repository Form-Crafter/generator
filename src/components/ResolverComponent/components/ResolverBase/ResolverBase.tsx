import { memo } from 'react'

import { LayoutComponent } from '_components/LayoutComponent'
import { ResolverComponentType } from '_components/ResolverComponent/types'
import { useChangePropertiesHandler, useComponentMeta, useComponentProperties, useDisplayComponent, useViewComponentWithParent } from '_hooks'

export const ResolverBase: ResolverComponentType = memo(({ id, rowId }) => {
    const meta = useComponentMeta<'base'>(id)
    const properties = useComponentProperties<'base'>(id)

    const { parentId } = useViewComponentWithParent(id)

    const onChangeProperties = useChangePropertiesHandler<'base'>(id)

    const Component = useDisplayComponent<'base'>(id)

    return (
        <LayoutComponent id={id}>
            <Component parentId={parentId} rowId={rowId} meta={meta} properties={properties} onChangeProperties={onChangeProperties} />
        </LayoutComponent>
    )
})

ResolverBase.displayName = 'ResolverBase'
