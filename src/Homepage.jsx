import React from 'react';
import { AppBar, Toolbar, Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', background: '#0b0f19', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* App Bar */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', py: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logo.png" alt="leads2opp logo" style={{ height: 36, marginRight: 10 }} />
            <Typography variant="h6" fontWeight={700} color="#00e676">
              leads<span style={{ color: '#fff' }}>2opp</span>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {['About', 'Features', 'Pricing', 'Contact'].map((text) => (
              <Button key={text} sx={{ color: '#cfd8dc', fontWeight: 500 }}>{text}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ py: 12, textAlign: 'center' }}>
        <img src="/assets/logo.png" alt="Cloud Glow" style={{ height: 90, marginBottom: 24 }} />
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Innovative Sales <br /> Engagement Platform
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            background: '#2979ff',
            '&:hover': { background: '#2962ff' }
          }}
          onClick={() => navigate('/app')}
        >
          Request a Demo
        </Button>
      </Container>

      {/* Features Section */}
      <Box sx={{ background: 'linear-gradient(180deg, #0b0f19, #121e2e)', py: 10 }}>
        <Container sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4,
          alignItems: 'stretch'
        }}>
          {[
            {
              title: 'Our Mission',
              desc: 'We deliver AI-powered outreach tools that transform sales productivity.',
              icon: '🎯'
            },
            {
              title: 'Core Values',
              desc: 'Innovation, transparency, and customer-first execution guide every decision.',
              icon: '💎'
            },
            {
              title: 'Why leads2opp?',
              desc: 'Automated dialers, cadence engines, and CRM sync built into one sleek platform.',
              icon: '🚀'
            }
          ].map(({ title, desc, icon }) => (
            <Box
              key={title}
              sx={{
                background: '#fff',
                color: '#0a1929',
                borderRadius: 3,
                maxWidth: 300,
                minHeight: 220,
                p: 4,
                textAlign: 'center',
                boxShadow: 6,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }}
            >
              <Typography variant="h4" mb={2}>{icon}</Typography>
              <Typography variant="h6" fontWeight={700} mb={1}>{title}</Typography>
              <Typography variant="body2" color="text.secondary">{desc}</Typography>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0b0f19', color: '#cfd8dc', py: 6, textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp · Built with 💡 and ☕️
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
