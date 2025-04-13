import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DownloadIcon from '@mui/icons-material/Download';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SubPageLayout from './SubPageLayout';

const ContactsManager = () => {
  const theme = useTheme();

  return (
    <SubPageLayout>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>📁 Contacts Manager</Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
        <Typography variant="h6" gutterBottom>Upload & Download</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" startIcon={<UploadFileIcon />} component="label">
            Upload CSV
            <input type="file" accept=".csv" hidden />
          </Button>
          <Button variant="outlined" startIcon={<DownloadIcon />}>Download Contacts</Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
        <Typography variant="h6" gutterBottom>CRM Integration</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary" startIcon={<SyncAltIcon />}>Sync to Salesforce</Button>
          <Button variant="contained" color="info" startIcon={<SyncAltIcon />}>Sync to HubSpot</Button>
          <Button variant="contained" color="success" startIcon={<SyncAltIcon />}>Sync to NetSuite</Button>
        </Box>
      </Paper>
    </Container>
    </SubPageLayout>
  );
};

export default ContactsManager;
