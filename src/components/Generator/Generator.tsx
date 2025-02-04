import { FC, FormEvent, memo, useCallback } from 'react'

import { GridComponent } from '_components/GridComponent'
import { useGenerator } from '_contexts'
import { useCurrentView } from '_hooks'

import { useGeneratorStylesVars } from './hooks'
import styles from './styles.module.sass'

export const Generator: FC = memo(() => {
    const { services } = useGenerator()

    const viewTree = useCurrentView()

    const stylesVars = useGeneratorStylesVars()

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            services.formService.onFormSubmitEvent()
        },
        [services],
    )

    return (
        <form onSubmit={handleSubmit} className={styles.root} style={stylesVars}>
            <GridComponent viewTree={viewTree} />
        </form>
    )
})

Generator.displayName = 'Generator'
