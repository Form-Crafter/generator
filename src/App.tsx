import { FormCrafterProvider, Schema } from '@form-crafter/core'
import { muiTheme } from '@form-crafter/themes'
import { Container, Paper } from '@mui/material'
import { FC } from 'react'

import { Generator } from '_components'

import { employeeFormSchema } from './mock-schemas'

const PlaceholderComponent: FC = () => <div>Not found component</div>

export const App: FC = () => {
    return (
        <FormCrafterProvider theme={muiTheme} PlaceholderComponent={PlaceholderComponent}>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Generator onSubmit={(data) => console.log(data)} schema={employeeFormSchema as Schema} />
                </Paper>
            </Container>
        </FormCrafterProvider>
    )
}
