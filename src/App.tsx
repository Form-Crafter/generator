import { FC, memo } from 'react';
import { Generator } from '@components';
import { Container, Box, Typography, Paper } from '@mui/material';
import {
  medicalQuestionnaireSchema,
  employeeAnnualReviewSchema,
} from './schemas';

export const App: FC = memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h1">
            medicalQuestionnaireSchema
          </Typography>
        </Box>
        <Box sx={{ p: 4, border: '1px dashed grey' }}>
          <Generator schema={medicalQuestionnaireSchema} />
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h1">
            employeeAnnualReviewSchema
          </Typography>
        </Box>
        <Box sx={{ p: 4, border: '1px dashed grey' }}>
          <Generator schema={employeeAnnualReviewSchema} />
        </Box>
      </Paper>
    </Container>
  );
});
