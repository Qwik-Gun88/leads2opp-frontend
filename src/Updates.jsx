import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Updates = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <DashboardIcon sx={{ fontSize: 40, color: '#757575' }} />
          <Box>
            <Typography variant="h6">Updates</Typography>
            <Typography variant="body2">
              Upcoming tasks, recent emails, new account developments
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          {[1, 2, 3].map((_, idx) => (
            <Box
              key={idx}
              sx={{
                height: 16,
                mb: 1.5,
                backgroundColor: '#e0e0e0',
                borderRadius: 1,
              }}
            ></Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Updates;
