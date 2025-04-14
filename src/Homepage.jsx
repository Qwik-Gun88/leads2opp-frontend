import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DiamondIcon from '@mui/icons-material/Diamond';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #020c1b, #0f172a)',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Navigation */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', px: 4 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#00e676' }}>
            leads<span style={{ color: 'white' }}>2opp</span>
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
              <Typography key={item} sx={{ cursor: 'pointer', fontWeight: 500, transition: 'color 0.3s', '&:hover': { color: '#00e676' } }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <CloudQueueIcon sx={{ fontSize: 100, color: '#00e676', mb: 2, filter: 'drop-shadow(0 0 15px #00e676)' }} />
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Innovative Sales <br /> Engagement Platform
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            background: '#2979ff',
            px: 5,
            py: 1.5,
            fontWeight: 600,
            borderRadius: '12px',
            boxShadow: '0 0 20px #2979ff88',
            '&:hover': {
              background: '#448aff',
              boxShadow: '0 0 30px #448affaa',
            },
          }}
          onClick={() => navigate('/app')}
        >
          REQUEST A DEMO
        </Button>
      </Container>

      {/* Cards Section */}
      <Box sx={{ background: 'linear-gradient(to bottom, #0f172a, #1c1f2f)', py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <BoltIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
                title: 'Our Mission',
                desc: 'We provide innovative solutions to transform sales opportunities and drive success.',
              },
              {
                icon: <DiamondIcon sx={{ fontSize: 40, color: '#00e676' }} />,
                title: 'Core Values',
                desc: 'Integrity, innovation, and customer-centricity are at the heart of everything we do.',
              },
              {
                icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#ffca28' }} />,
                title: 'Why leads2opp?',
                desc: 'We offer cutting-edge AI-powered tools to enhance your sales strategy and performance.',
              },
            ].map((card, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 0 25px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  {card.icon}
                  <Typography variant="h6" fontWeight={700} mt={2}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="gray" mt={1}>
                    {card.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#0a192f', color: '#789' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} leads2opp — Built with 💡 and ☕️
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
