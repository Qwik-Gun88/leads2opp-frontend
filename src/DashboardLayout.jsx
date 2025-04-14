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
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit" noWrap>
            <strong style={{ color: '#fff' }}>leads2opp</strong> &nbsp;Sales Engagement Platform
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit"><NotificationsIcon /></IconButton>
            <IconButton color="inherit"><SettingsIcon /></IconButton>
            <IconButton color="inherit"><AccountCircle /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Top 3 Dashboard Blocks */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              onClick={() => navigate('/contacts-centre')}
              sx={blockStyle}
            >
              <PeopleAltIcon sx={{ fontSize: 60, color: '#1976d2' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Contacts Centre</Typography>
              <Typography variant="body2" color="text.secondary">
                Auto-dialing, bulk email, one-off outreach
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              onClick={() => navigate('/analytics-reporting')}
              sx={blockStyle}
            >
              <BarChartIcon sx={{ fontSize: 60, color: '#1976d2' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Analytics & Reporting</Typography>
              <Typography variant="body2" color="text.secondary">
                Call stats, email engagement, trends
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              onClick={() => navigate('/contacts-manager')}
              sx={blockStyle}
            >
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <CloudUploadIcon sx={{ fontSize: 60, color: '#1976d2' }} />
                <CloudDownloadIcon sx={{ fontSize: 60, color: '#1976d2' }} />
              </Box>
              <Typography variant="h6" sx={{ mt: 1 }}>Contacts Manager</Typography>
              <Typography variant="body2" color="text.secondary">
                Upload/download contacts, CRM sync
              </Typography>
            </Paper>
          </Grid>

          {/* Full-width Updates Panel */}
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                p: 4,
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }}>
                <NotificationsIcon sx={{ fontSize: 40, color: '#1976d2', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Updates</Typography>
              </Box>

              <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ width: '100%' }}>
                {/* Tasks Column */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      🗂️ Tasks
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TaskAltIcon color="success" sx={{ mr: 1 }} />
                    <Typography variant="body2">Follow up with Alice (Product Feedback)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body2">Email summary sent to Globex Corp.</Typography>
                  </Box>
                </Grid>

                {/* Emails & News Column */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      📨 Emails & News
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TaskAltIcon color="warning" sx={{ mr: 1 }} />
                    <Typography variant="body2">Prepare call script for Friday outreach</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <InfoIcon color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2">New lead from LinkedIn engagement</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
