import { FC, memo } from 'react';

import { Generator } from '@components';
import { Container, Paper } from '@mui/material';

import { personalSchema } from './schemas';
import '@services/init.ts';

export const App: FC = memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Generator schema={personalSchema} />
      </Paper>
    </Container>
  );
});
