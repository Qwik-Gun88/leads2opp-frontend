import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Drawer,
  Button
} from '@mui/material';
import { Email, Phone, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
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


const mockContacts = [
  { id: 1, name: 'Alice Kim', company: 'TechNova', title: 'CTO', city: 'Toronto', phone: '123-456-7890', email: 'alice@technova.com' },
  { id: 2, name: 'David Singh', company: 'CloudEdge', title: 'Director', city: 'Vancouver', phone: '234-567-8901', email: 'david@cloudedge.io' },
  { id: 3, name: 'Riya Patel', company: 'FinSpark', title: 'Manager', city: 'Toronto', phone: '345-678-9012', email: 'riya@finspark.com' }
];

const filterFields = ["name", "company", "title", "city"];

const ContactsCentre = () => {
  useEffect(() => {
    console.log("🔥 Force deploy Contacts Centre with filters V3");
  }, []);  
  const [contacts] = useState(mockContacts);
  const [selectedFields, setSelectedFields] = useState(["name"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    setSelectedFields(event.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedIds(filteredContacts.map((c) => c.id));
    } else {
      setSelectedIds([]);
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    return selectedFields.some((field) =>
      contact[field]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0b0f19, #121e2e)', minHeight: '100vh', color: 'white', py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} mb={2}>Contacts Centre</Typography>
        <Typography variant="body1" color="#b0bec5" mb={4}>
          Manage your call and email outreach here.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel sx={{ color: 'white' }}>Search By</InputLabel>
            <Select
              multiple
              value={selectedFields}
              onChange={handleFieldChange}
              input={<OutlinedInput label="Search By" />}
              renderValue={(selected) => selected.join(', ')}
              sx={{ color: 'white' }}
            >
              {filterFields.map((field) => (
                <MenuItem key={field} value={field}>
                  <Checkbox checked={selectedFields.indexOf(field) > -1} />
                  <ListItemText primary={field.charAt(0).toUpperCase() + field.slice(1)} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ input: { color: 'white' }, minWidth: 300 }}
          />

          <Button
            variant="contained"
            color="success"
            disabled={selectedIds.length === 0}
            sx={{ height: 56 }}
            onClick={() => alert(`Assigning ${selectedIds.length} contact(s) to a sequence`)}
          >
            Assign to Sequence
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ backgroundColor: '#1c2a38' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.length === filteredContacts.length && filteredContacts.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    sx={{ color: '#00e676' }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Name</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Company</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Title</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>City</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.includes(contact.id)}
                      onChange={() => handleSelect(contact.id)}
                      sx={{ color: '#00e676' }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.company}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.title}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.city}</TableCell>
                  <TableCell>
                    <IconButton color="success"><Phone /></IconButton>
                    <IconButton color="primary"><Email /></IconButton>
                    <IconButton onClick={() => setSelectedContact(contact)}><Info sx={{ color: '#ffca28' }} /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Drawer
        anchor="right"
        open={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        PaperProps={{ sx: { backgroundColor: '#1e293b', color: 'white', width: 300, p: 3 } }}
      >
        {selectedContact && (
          <Box>
            <Typography variant="h6" gutterBottom>{selectedContact.name}</Typography>
            <Typography variant="body2" gutterBottom>Company: {selectedContact.company}</Typography>
            <Typography variant="body2" gutterBottom>Title: {selectedContact.title}</Typography>
            <Typography variant="body2" gutterBottom>Email: {selectedContact.email}</Typography>
            <Typography variant="body2">Phone: {selectedContact.phone}</Typography>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default ContactsCentre;