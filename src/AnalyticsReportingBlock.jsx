
// AnalyticsReportingBlock.jsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useNavigate } from 'react-router-dom';

const AnalyticsReportingBlock = () => {
  const navigate = useNavigate();

  return (
    <Paper
  elevation={3}
  onClick={() => navigate('/your-route')}
  sx={{
    width: 300, // force same width for both
    height: 200,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 3,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 6,
    },
  }}
>
      <BarChartIcon sx={{ fontSize: 60, color: '#1976d2' }} />
      <Typography variant="h6" sx={{ mt: 2 }}>Analytics & Reporting</Typography>
      <Typography variant="body2" color="text.secondary">
        Call stats, email engagement, trends
      </Typography>
    </Paper>
  );
};

export default AnalyticsReportingBlock;