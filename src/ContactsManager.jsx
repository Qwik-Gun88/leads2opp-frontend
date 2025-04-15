import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

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

const actionCards = [
  {
    icon: <CloudUploadIcon sx={{ fontSize: 40, color: '#64b5f6' }} />,
    title: 'Upload Contacts',
    description: 'Import your CSV file or sync contacts from your CRM.',
    action: 'Upload Now'
  },
  {
    icon: <CloudDownloadIcon sx={{ fontSize: 40, color: '#81c784' }} />,
    title: 'Export Contacts',
    description: 'Export selected contacts for external outreach or reporting.',
    action: 'Export List'
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#ba68c8' }} />,
    title: 'CRM Integration',
    description: 'Connect to Salesforce, HubSpot, or other CRMs.',
    action: 'Connect Now'
  },
];

const ContactsManager = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0b0f19, #121e2e)', minHeight: '100vh', color: 'white', py: 10 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          📁 Contacts Manager
        </Typography>

        <Grid container spacing={4} mt={4}>
          {actionCards.map((card, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  backgroundColor: '#1c2a38',
                  color: 'white',
                  borderRadius: 3,
                  minHeight: 170,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Stack spacing={2}>
                  {card.icon}
                  <Typography variant="h6" fontWeight={600}>{card.title}</Typography>
                  <Typography variant="body2" color="#cfd8dc">{card.description}</Typography>
                </Stack>
                <Box mt={2}>
                  <Button variant="contained" size="small" sx={{ backgroundColor: '#2979ff' }}>
                    {card.action}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactsManager;
