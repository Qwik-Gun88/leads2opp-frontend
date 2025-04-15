import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
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
  Drawer
} from '@mui/material';
import { Email, Phone, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const mockContacts = [
  { id: 1, name: 'Alice Kim', company: 'TechNova', title: 'CTO', city: 'Toronto', phone: '123-456-7890', email: 'alice@technova.com' },
  { id: 2, name: 'David Singh', company: 'CloudEdge', title: 'Director', city: 'Vancouver', phone: '234-567-8901', email: 'david@cloudedge.io' },
  { id: 3, name: 'Riya Patel', company: 'FinSpark', title: 'Manager', city: 'Toronto', phone: '345-678-9012', email: 'riya@finspark.com' }
];

const ContactsCentre = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [cityFilter, setCityFilter] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
  };

  const filteredContacts = cityFilter
    ? contacts.filter((c) => c.city === cityFilter)
    : contacts;

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #0b0f19, #121e2e)', minHeight: '100vh', color: 'white', py: 8 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} mb={2}>Contacts Centre</Typography>
        <Typography variant="body1" color="#b0bec5" mb={4}>
          Manage your call and email outreach here.
        </Typography>

        <FormControl variant="outlined" sx={{ minWidth: 200, mb: 4 }}>
          <InputLabel sx={{ color: 'white' }}>Filter by City</InputLabel>
          <Select
            value={cityFilter}
            onChange={handleCityChange}
            label="Filter by City"
            sx={{ color: 'white', borderColor: 'white' }}
          >
            <MenuItem value="">All Cities</MenuItem>
            {[...new Set(mockContacts.map(c => c.city))].map(city => (
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TableContainer component={Paper} sx={{ backgroundColor: '#1c2a38' }}>
          <Table>
            <TableHead>
              <TableRow>
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
