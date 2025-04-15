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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<AppBar position="static" sx={{ background: '#0b0f19', boxShadow: 'none', borderBottom: '1px solid #1e2a38' }}>
  <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
      <img src="/assets/logo.png" alt="leads2opp logo" style={{ height: 36, marginRight: 10 }} />
      <Typography variant="h6" color="#00e676" fontWeight={700}>
        leads<span style={{ color: '#fff' }}>2opp</span>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <IconButton color="inherit"><NotificationsIcon /></IconButton>
      <IconButton color="inherit"><SettingsIcon /></IconButton>
      <IconButton color="inherit"><AccountCircle /></IconButton>
    </Box>
  </Toolbar>
</AppBar>


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