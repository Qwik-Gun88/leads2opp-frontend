import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #001e3c, #004e92)',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Welcome to <span style={{ color: '#00e676' }}>leads2opp</span>
          </Typography>
          <Typography variant="h5" color="#cfd8dc" gutterBottom>
            Igniting connections. Fueling pipeline. Built for sales teams.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 4, px: 5, py: 1.5, fontWeight: 'bold', borderRadius: 3 }}
            onClick={() => navigate('/app')}
          >
            🚀 Launch Demo
          </Button>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box sx={{ backgroundColor: 'white', color: '#0a1929', py: 10 }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
            Why teams choose leads2opp
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <RocketLaunchIcon sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Smart Automation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Auto-dialing, sequences, and multi-step cadence workflows.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <InsightsIcon sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Insights That Matter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track calls, emails, and performance trends with clarity.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <GroupsIcon sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Built for Teams
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sync CRM, collaborate on tasks, and close faster together.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ background: '#0a1929', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Ready to turn leads into opportunities?
          </Typography>
          <Typography variant="body1" color="#cfd8dc">
            Start engaging smarter, faster, and with more intent.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 4, px: 5, py: 1.5, fontWeight: 'bold', borderRadius: 3 }}
            onClick={() => navigate('/app')}
          >
            👉 Launch Demo
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#001e3c', color: '#cfd8dc', py: 4, textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp · Built with 💡 and ☕️
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
