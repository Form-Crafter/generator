import { isNotEmpty } from '@form-crafter/utils'
import { FC, FormEvent, memo, useCallback } from 'react'

import { RowsList } from '_components/RowsList'
import { useGeneratorContext } from '_contexts'
import { useRootViewComponent } from '_hooks'

import { useGeneratorStylesVars } from './hooks'
import styles from './styles.module.sass'

export const Generator: FC = memo(() => {
    const { services } = useGeneratorContext()

    const { rows } = useRootViewComponent()

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
            {isNotEmpty(rows) && <RowsList rows={rows} />}
        </form>
    )
})

Generator.displayName = 'Generator'
