// src/Homepage.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DiamondIcon from '@mui/icons-material/Diamond';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#020b1c', color: '#fff' }}>
      {/* Top Nav */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', pt: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <span style={{ color: '#00e676' }}>leads</span>2opp
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Features</Typography>
            <Typography variant="body1">Pricing</Typography>
            <Typography variant="body1">Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <CloudIcon sx={{ fontSize: 100, color: '#00e676' }} />
        <Typography variant="h3" fontWeight={700} mt={4}>
          Innovative Sales <br /> Engagement Platform
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 5, backgroundColor: '#2979ff', borderRadius: 3, fontWeight: 'bold' }}
          onClick={() => navigate('/app')}
        >
          Request a Demo
        </Button>
      </Box>

      {/* 3-Column Section */}
      <Box sx={{ py: 10, background: 'radial-gradient(circle, #0f2027, #203a43)' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }} elevation={4}>
                <TrackChangesIcon sx={{ fontSize: 40, color: '#2979ff' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>Our Mission</Typography>
                <Typography variant="body2" mt={1}>
                  Our mission is provide innovative solutions to transform sales opportunities and drive customer success.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }} elevation={4}>
                <DiamondIcon sx={{ fontSize: 40, color: '#2979ff' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>Core Values</Typography>
                <Typography variant="body2" mt={1}>
                  Integrity, innovation and customer-centricity are at the heart of everything we do.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }} elevation={4}>
                <LightbulbIcon sx={{ fontSize: 40, color: '#2979ff' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>Why leads2opp?</Typography>
                <Typography variant="body2" mt={1}>
                  We offer cutting-edge tools powered by AI and machine learning to enhance your sales strategy.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#000814', color: '#cfd8dc' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp · Powered by ☁️ + ⚡
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
