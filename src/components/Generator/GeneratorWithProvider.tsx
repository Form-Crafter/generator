import { GeneratorProvider } from 'contexts'
import { FC, memo, useRef } from 'react'

import { createRootServices } from '_services'
import { GeneratorProps } from '_types'

import { Generator } from './Generator'

export const GeneratorWithProvider: FC<GeneratorProps> = memo(({ schema, onSubmit }) => {
    const servicesRef = useRef(createRootServices({ schema, onSubmit }))
    const services = servicesRef.current

    return (
        <GeneratorProvider services={services}>
            <Generator />
        </GeneratorProvider>
    )
})

GeneratorWithProvider.displayName = 'GeneratorWithProvider'
