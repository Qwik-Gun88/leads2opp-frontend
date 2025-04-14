import React, { useState } from 'react';
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
import Papa from 'papaparse';
import axios from 'axios'; // ✅ Moved here
import ColumnMapper from './ColumnMapper';

const ContactsManager = () => {
  const theme = useTheme();
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [mappings, setMappings] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headers = results.meta.fields;
        setCsvHeaders(headers);
        setCsvData(results.data);
        setMappings(null);
      },
    });
  };

  const handleConfirmMapping = async (selectedMapping) => {
    console.log("🧠 Final Mapping:", selectedMapping);

    const mappedContacts = csvData.map(row => {
      const transformed = {};
      for (const csvKey in selectedMapping) {
        const internalField = selectedMapping[csvKey];
        if (internalField) {
          transformed[internalField.toLowerCase()] = row[csvKey];
        }
      }
      return transformed;
    });

    console.log("📤 Sending contacts:", mappedContacts);

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/save-contacts', mappedContacts);
      alert("✅ Contacts uploaded and saved!");
      setMappings(selectedMapping);
    } catch (err) {
      console.error("❌ Error saving contacts:", err);
      alert("Failed to upload contacts");
    }
  };

  return (
    <SubPageLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>📁 Contacts Manager</Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
          <Typography variant="h6" gutterBottom>Upload & Download</Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" startIcon={<UploadFileIcon />} component="label">
              Upload CSV
              <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
            </Button>
            <Button variant="outlined" startIcon={<DownloadIcon />}>Download Contacts</Button>
          </Box>
        </Paper>

        {csvHeaders.length > 0 && !mappings && (
          <ColumnMapper headers={csvHeaders} onConfirm={handleConfirmMapping} />
        )}

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
