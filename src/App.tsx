import { FC, memo } from 'react';
import { Generator } from '@components';
import { Container, Box, Typography, Paper } from '@mui/material';
import { personalSchema } from './schemas';
import '@services/init.ts';



export const App: FC = memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h1">
            medicalQuestionnaireSchema
          </Typography>
        </Box>
        <Box sx={{ p: 4, border: '1px dashed grey' }}>
          <Generator schema={personalSchema} />
        </Box>
      </Paper>
    </Container>
  );
});
