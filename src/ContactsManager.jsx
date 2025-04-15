import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const ContactsManager = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Contacts Manager | leads2opp';
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #0b0f19, #1c2531)', color: 'white' }}>
      {/* AppBar */}
      <AppBar position="static" sx={{ background: '#0b0f19', boxShadow: 'none', borderBottom: '1px solid #1e2a38' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src="/assets/logo.png" alt="leads2opp logo" style={{ height: 36, marginRight: 10 }} />
            <Typography variant="h6" fontWeight={700} color="#00e676">
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
{/* force-save */}
      {/* Content Section */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Contacts Manager
        </Typography>
        <Typography variant="body1" color="#b0bec5">
          Upload and manage contacts, sync with your CRM.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactsManager;
