import { FC, memo } from 'react';

import { Container, Paper } from '@mui/material';
import { Generator } from '_components';
import { ComponentsView } from '_types/components';

import { personalSchema } from './schemas';

import '_services/init.ts';

const componentsView: ComponentsView = {};

export const App: FC = memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Generator
          onSubmit={(data) => console.log(data)}
          schema={personalSchema}
          componentsView={componentsView}
        />
      </Paper>
    </Container>
  );
});
