import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dashboard | leads2opp';
  }, []);

  const blockStyle = {
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4,
    cursor: 'pointer',
    background: '#121e2e',
    color: '#fff',
    boxShadow: '0 0 15px rgba(0,255,255,0.08)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 0 25px rgba(0,255,255,0.15)',
    },
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #0b0f19, #1c2531)', color: 'white' }}>
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

      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Contacts Centre Block */}
          <Grid item xs={12} md={4}>
            <Paper elevation={6} onClick={() => navigate('/contacts-centre')} sx={blockStyle}>
              <PeopleAltIcon sx={{ fontSize: 60, color: '#00e676' }} />
              <Typography variant="h6" mt={2}>Contacts Centre</Typography>
              <Typography variant="body2" color="#b0bec5">
                Auto-dialing, bulk email, one-off outreach
              </Typography>
            </Paper>
          </Grid>

          {/* Analytics Block */}
          <Grid item xs={12} md={4}>
            <Paper elevation={6} onClick={() => navigate('/analytics-reporting')} sx={blockStyle}>
              <BarChartIcon sx={{ fontSize: 60, color: '#00e676' }} />
              <Typography variant="h6" mt={2}>Analytics & Reporting</Typography>
              <Typography variant="body2" color="#b0bec5">
                Call stats, email engagement, trends
              </Typography>
            </Paper>
          </Grid>

          {/* Contacts Manager Block */}
<Grid item xs={12} md={4}>
  <Paper elevation={6} onClick={() => navigate('/contacts-manager')} sx={blockStyle}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 60 }}>
      <CloudUploadIcon sx={{ fontSize: 30, color: '#00e676', mx: 1 }} />
      <CloudDownloadIcon sx={{ fontSize: 30, color: '#00e676', mx: 1 }} />
    </Box>
    <Typography variant="h6" mt={2}>Contacts Manager</Typography>
    <Typography variant="body2" color="#b0bec5">
      Upload/download contacts, CRM sync
    </Typography>
  </Paper>
</Grid>

{/* Updates Panel */}
<Grid item xs={12}>
  <Paper elevation={6} sx={{ ...blockStyle, p: 4 }}>
    <Typography variant="h6" fontWeight={700} mb={4}>
      🔔 Updates & Tasks
    </Typography>

    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={6}>
      {/* Tasks Column */}
      <Box flex={1}>
        <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <TaskAltIcon sx={{ fontSize: 20, mr: 1, color: '#90caf9' }} />
          Tasks
        </Typography>
        <Typography variant="body2" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <TaskAltIcon sx={{ fontSize: 16, mr: 1 }} />
          Follow up with Alice (Product Feedback)
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ fontSize: 16, mr: 1 }} />
          Email summary sent to Globex Corp.
        </Typography>
      </Box>

      {/* Emails & News Column */}
      <Box flex={1}>
        <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ fontSize: 20, mr: 1, color: '#90caf9' }} />
          Emails & News
        </Typography>
        <Typography variant="body2" mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <TaskAltIcon sx={{ fontSize: 16, mr: 1 }} />
          Prepare call script for Friday outreach
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <InfoIcon sx={{ fontSize: 16, mr: 1 }} />
          New lead from LinkedIn engagement
        </Typography>
      </Box>
    </Box>
  </Paper>
</Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
