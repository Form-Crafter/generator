import { GridComponent as GridComponentType } from '@form-crafter/core'
import { isEmpty } from '@form-crafter/utils'
import { memo } from 'react'

import { LayoutComponent } from '../LayoutComponent'
import { ResolverComponent } from '../ResolverComponent'
import styles from './styles.module.sass'

export const GridComponent: GridComponentType = memo(
    ({ viewTree, children }) =>
        !isEmpty(viewTree) && (
            <div className={styles.root}>
                {viewTree.map((viewNode, index) => (
                    <LayoutComponent key={viewNode.componentId} id={viewNode.componentId} layout={viewNode.layout}>
                        {isEmpty(children) ? <ResolverComponent {...viewNode} /> : children(viewNode, index)}
                    </LayoutComponent>
                ))}
            </div>
        ),
)

GridComponent.displayName = 'GridComponent'
