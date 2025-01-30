import {
    BaseComponentProps,
    ComponentSchema,
    ContainerComponentProps,
    DynamicContainerComponentProps,
    ResolverComponent as ResolverComponentType,
} from '@form-crafter/core'
import { SomeObject } from '@form-crafter/utils'
import { useUnit } from 'effector-react'
import { FC, memo, useMemo } from 'react'

import { useGenerator } from '_contexts'
import { useComponentMeta, useComponentProperties, useViewComponent } from '_hooks'

import { GridComponent } from '../GridComponent'

export const ResolverComponent: ResolverComponentType = memo(({ componentId: id, children, ...extraProps }) => {
    const { services } = useGenerator()
    const updateComponentPropertiesEvent = useUnit(services.schemaService.propertiesService.updateComponentPropertiesEvent)

    const Component = useViewComponent(id) as FC<any>
    const meta = useComponentMeta(id)
    const properties = useComponentProperties(id)

    const finalProps = useMemo(() => {
        const onChangeProperties = (data: Partial<ComponentSchema['properties']>) => updateComponentPropertiesEvent({ id, data })

        switch (meta.type) {
            case 'base':
                return ((params: BaseComponentProps<SomeObject>) => params)({ meta, properties, onChangeProperties })
            case 'container':
                return ((params: ContainerComponentProps<SomeObject>) => params)({
                    meta,
                    properties,
                    GridComponent,
                    ResolverComponent,
                    children,
                    onChangeProperties,
                })
            case 'dynamic-container':
                return ((params: DynamicContainerComponentProps<SomeObject>) => params)({
                    meta,
                    properties,
                    GridComponent,
                    ResolverComponent,
                    children,
                    onChangeProperties,
                    onAddGroup: () => console.log('onAddGroup'),
                    onRemoveGroup: () => console.log('onRemoveGroup'),
                })
        }
    }, [meta, properties, updateComponentPropertiesEvent, id, children])

    return <Component {...extraProps} {...finalProps} />
})

ResolverComponent.displayName = 'ResolverComponent'
