import React from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloudIcon from '@mui/icons-material/Cloud';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#050f1b', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', py: 12, background: 'linear-gradient(to bottom, #050f1b, #0a2540)' }}>
        <CloudIcon sx={{ fontSize: 80, color: '#00e676', mb: 3 }} />
        <Typography variant="h3" fontWeight={700}>
          Innovative Sales<br />Engagement Platform
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, fontWeight: 'bold', px: 5, py: 1.5, fontSize: '1rem', borderRadius: 2 }}
          onClick={() => navigate('/app')}
        >
          REQUEST A DEMO
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, px: 4, background: 'radial-gradient(circle at top, #0a2540, #050f1b)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #0f2947, #091f35)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <GpsFixedIcon sx={{ fontSize: 50, color: '#2196f3' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Our Mission
                </Typography>
                <Typography variant="body2" mt={1}>
                  Our mission is to provide innovative solutions to transform sales opportunities and drive customer success.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #0f2947, #091f35)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <DiamondIcon sx={{ fontSize: 50, color: '#00bcd4' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Core Values
                </Typography>
                <Typography variant="body2" mt={1}>
                  Integrity, innovation and customer-centricity are at the heart of everything we do.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #0f2947, #091f35)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <EmojiObjectsIcon sx={{ fontSize: 50, color: '#ffca28' }} />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  Why leads2opp?
                </Typography>
                <Typography variant="body2" mt={1}>
                  We offer cutting-edge tools powered by AI and machine learning to enhance your sales strategy.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#0a192f', color: '#cfd8dc' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp · Futuristic sales, powered by AI
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
