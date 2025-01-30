import { ViewNode } from '@form-crafter/core'
import cn from 'classnames'
import { FC, memo, PropsWithChildren } from 'react'

import { useIsSomeContainerComponent } from '_hooks'
import { getResponsiveLayoutSizes, getStyles } from '_utils'

import styles from './styles.module.sass'

const getStyleVariables = (col: ViewNode['layout']['col']) => {
    const finalCol = getResponsiveLayoutSizes(col)
    return getStyles({
        '--colDefault': finalCol.default,
        '--colXxl': finalCol.xxl,
        '--colXl': finalCol.xl,
        '--colLg': finalCol.lg,
        '--colMd': finalCol.md,
        '--colSm': finalCol.sm,
    })
}

type Props = PropsWithChildren<
    Pick<ViewNode, 'layout'> & {
        id: ViewNode['componentId']
    }
>

export const LayoutComponent: FC<Props> = memo(({ id, layout, children }) => {
    const isSomeContainerComponent = useIsSomeContainerComponent(id)

    const style = getStyleVariables(layout.col)

    return (
        <div
            className={cn(styles.root, {
                [styles.withoutVerticalGap]: isSomeContainerComponent,
            })}
            style={style}
        >
            {children}
        </div>
    )
})

LayoutComponent.displayName = 'LayoutComponent'
