import React from 'react';
import {
  AppBar, Box, Toolbar, Typography, Button, Container,
  Grid, Card, CardContent, IconButton
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0b0f1a', color: '#fff' }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#0b0f1a', boxShadow: 'none', borderBottom: '1px solid #1e2a38' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
          <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="leads2opp logo" style={{ height: 40, marginRight: 12 }} />
          <Typography variant="h6" sx={{ color: '#00e676', fontWeight: 'bold' }}>
              leads<span style={{ color: '#fff' }}>2opp</span>
            </Typography>
          </Box>
          <Box display="flex" gap={3}>
            <Button sx={{ color: '#cfd8dc' }}>About</Button>
            <Button sx={{ color: '#cfd8dc' }}>Features</Button>
            <Button sx={{ color: '#cfd8dc' }}>Pricing</Button>
            <Button sx={{ color: '#cfd8dc' }}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ py: 12, textAlign: 'center' }}>
      <img
  src="/assets/logo.png"
  alt="leads2opp logo"
  style={{ height: 280, marginBottom: 48 }}
/>

        <Typography variant="h3" fontWeight={700} gutterBottom>
          Lead Gen and Sales Engagement Platform
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: 3,
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            boxShadow: '0 0 20px #00c6ff',
            '&:hover': {
              background: 'linear-gradient(to right, #0072ff, #00c6ff)',
              boxShadow: '0 0 25px #0072ff',
            }
          }}
          onClick={() => navigate('/app')}
        >
          DEMO HERE
        </Button>
      </Container>

      {/* Feature Cards */}
      <Box sx={{ background: 'linear-gradient(to bottom, #0b0f1a, #1c2531)', py: 10 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: 'Our Mission',
                text: 'We provide innovative solutions to transform sales opportunities and drive customer success.',
                icon: '🎯',
              },
              {
                title: 'Core Values',
                text: 'Integrity, innovation, and customer-centricity are at the heart of everything we do.',
                icon: '💎',
              },
              {
                title: 'Why leads2opp?',
                text: 'We offer cutting-edge tools powered by AI and machine learning to enhance your sales strategy.',
                icon: '💡',
              },
            ].map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: 4,
                    textAlign: 'center',
                    background: '#121e2c',
                    color: '#fff',
                    boxShadow: '0px 0px 20px #0ff',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 0px 30px #00e676',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" mb={1}>{card.icon}</Typography>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="#cfd8dc">
                      {card.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#0b0f1a', color: '#90a4ae' }}>
        © {new Date().getFullYear()} leads2opp · Built with 💡 and ☕️
      </Box>
    </Box>
  );
};

export default Homepage;
