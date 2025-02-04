import { FC, memo, useState } from 'react'

import { GeneratorProvider } from '_contexts'
import { createRootServices } from '_services'
import { GeneratorProps } from '_types'

import { Generator } from './Generator'

export const GeneratorWithProvider: FC<GeneratorProps> = memo(({ schema, onSubmit }) => {
    const [services] = useState(() => createRootServices({ schema, onSubmit }))

    return (
        <GeneratorProvider services={services}>
            <Generator />
        </GeneratorProvider>
    )
})

GeneratorWithProvider.displayName = 'GeneratorWithProvider'
