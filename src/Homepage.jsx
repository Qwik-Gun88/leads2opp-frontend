import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #001e3c, #004e92)', color: 'white', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Welcome to <span style={{ color: '#00e676' }}>leads2opp</span>
        </Typography>
        <Typography variant="h5" color="#cfd8dc" gutterBottom>
          Transforming outreach into opportunities with AI-powered sequences and automation.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: 4, px: 5, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
          onClick={() => navigate('/app')}
        >
          🚀 Launch Demo
        </Button>
      </Container>

      <Box sx={{ backgroundColor: 'white', color: '#0a1929', py: 8 }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight={600}>
            Why leads2opp?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 6, flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ maxWidth: 260, textAlign: 'center' }}>
              <RocketLaunchIcon sx={{ fontSize: 50, color: '#1976d2' }} />
              <Typography variant="h6" fontWeight={600} mt={2}>Smart Automation</Typography>
              <Typography variant="body2" color="text.secondary">
                Auto-dialing, email sequences, and step-by-step cadence management.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: 260, textAlign: 'center' }}>
              <InsightsIcon sx={{ fontSize: 50, color: '#1976d2' }} />
              <Typography variant="h6" fontWeight={600} mt={2}>Data-Driven Insights</Typography>
              <Typography variant="body2" color="text.secondary">
                View call stats, engagement metrics, and pipeline impact.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: 260, textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 50, color: '#1976d2' }} />
              <Typography variant="h6" fontWeight={600} mt={2}>Collaboration</Typography>
              <Typography variant="body2" color="text.secondary">
                Share tasks, sync CRM, and stay updated across sales teams.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#001e3c', color: '#cfd8dc', py: 6, textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp · Built with 💡 and ☕️
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
