import { createContext, FC, PropsWithChildren, useContext, useRef } from 'react'

import { RootServices } from '_services/types'

type StoreContext = {
    services: RootServices
}

const generatorContext = createContext<StoreContext | null>(null)

const { Provider } = generatorContext

export const GeneratorProvider: FC<PropsWithChildren<StoreContext>> = ({ services, children }) => {
    const value = useRef({ services })
    return <Provider value={value.current}>{children}</Provider>
}

export const useGenerator = () => {
    const data = useContext(generatorContext)
    return data!
}
