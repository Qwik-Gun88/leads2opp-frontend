import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const analyticsCards = [
  {
    icon: <BarChartIcon sx={{ fontSize: 40, color: '#64b5f6' }} />,
    title: 'Call Activity',
    description: 'See how many calls were placed, completed, or resulted in follow-up.',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: '#ba68c8' }} />,
    title: 'Email Engagement',
    description: 'Track email opens, replies, and click-throughs.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#81c784' }} />,
    title: 'Buyer Intent & Trends',
    description: 'Analyze notes and activity to uncover key interest signals.',
  },
];

const AnalyticsReporting = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0b0f19, #121e2e)', minHeight: '100vh', color: 'white', py: 10 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          📊 Analytics & Reporting
        </Typography>

        <Grid container spacing={4} mt={4}>
          {analyticsCards.map((card, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  backgroundColor: '#1c2a38',
                  color: 'white',
                  borderRadius: 3,
                  minHeight: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                {card.icon}
                <Typography variant="h6" fontWeight={600}>{card.title}</Typography>
                <Typography variant="body2" color="#cfd8dc">{card.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AnalyticsReporting;