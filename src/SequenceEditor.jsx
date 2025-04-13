import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Grid
} from '@mui/material';

const SequenceEditor = () => {
  const [steps, setSteps] = useState([
    { type: 'email', delay: 0, content: '', linkedinUrl: '', skippable: false }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...steps];
    updated[index][field] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, { type: 'email', delay: 0, content: '', linkedinUrl: '', skippable: false }]);
  };

  const removeStep = (index) => {
    const updated = [...steps];
    updated.splice(index, 1);
    setSteps(updated);
  };

  const handleSave = () => {
    console.log('Cadence Saved:', steps);
    // TODO: Send steps to backend
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Email Sequence Editor</Typography>
      {steps.map((step, index) => (
        <Paper key={index} sx={{ p: 3, mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3}>
              <TextField
                select
                fullWidth
                label="Step Type"
                value={step.type}
                onChange={(e) => handleChange(index, 'type', e.target.value)}
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="call">Call</MenuItem>
                <MenuItem value="linkedin">LinkedIn</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={2}>
              <TextField
                type="number"
                label="Delay (days)"
                fullWidth
                value={step.delay}
                onChange={(e) => handleChange(index, 'delay', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={5}>
              {step.type === 'linkedin' ? (
                <TextField
                  label="LinkedIn URL (optional)"
                  fullWidth
                  value={step.linkedinUrl}
                  onChange={(e) => handleChange(index, 'linkedinUrl', e.target.value)}
                />
              ) : (
                <TextField
                  label="Message / Script"
                  multiline
                  fullWidth
                  rows={2}
                  value={step.content}
                  onChange={(e) => handleChange(index, 'content', e.target.value)}
                />
              )}
            </Grid>

            <Grid item xs={12} sm={2}>
              {step.type === 'linkedin' && (
                <>
                  <Button
                    variant="outlined"
                    color="info"
                    sx={{ mb: 1 }}
                    onClick={() => window.open(step.linkedinUrl || 'https://www.linkedin.com', '_blank')}
                  >
                    Open Profile
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => alert('Step skipped')}
                  >
                    Skip Step
                  </Button>
                </>
              )}
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box textAlign="right">
                <Button color="error" onClick={() => removeStep(index)}>Remove Step</Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={addStep} sx={{ mr: 2 }}>
          + Add Step
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save Sequence
        </Button>
      </Box>
    </Box>
  );
};

export default SequenceEditor;
