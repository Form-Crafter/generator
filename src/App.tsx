import { FC, memo } from 'react';

import { Container, Paper } from '@mui/material';
import { Generator } from '_components';

import { personalSchema } from './schemas';
import '_services/init.ts';

export const App: FC = memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Generator
          onSubmit={(data) => console.log(data)}
          schema={personalSchema}
        />
      </Paper>
    </Container>
  );
});
