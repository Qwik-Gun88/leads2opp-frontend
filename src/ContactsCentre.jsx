import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import SubPageLayout from './SubPageLayout';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const ContactsCentre = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSequence, setSelectedSequence] = useState("");
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    company: "",
    industry: "",
    location: ""
  });
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://leads2opp-backend-url.com/api/contacts"); // replace with your backend
        setContacts(response.data.contacts);
      } catch (error) {
        console.error("❌ Failed to fetch contacts:", error);
      }
    };
  
    fetchContacts();
  }, []);
  
  useEffect(() => {
    const term = searchTerm.toLowerCase();
  
    const filtered = contacts.filter((c) => {
      const matchesSearch =
        `${c.name} ${c.email} ${c.phone}`
          .toLowerCase()
          .includes(term);
  
      const matchesCompany = filters.company === "" || c.company === filters.company;
      const matchesIndustry = filters.industry === "" || c.industry === filters.industry;
      const matchesLocation = filters.location === "" || c.location === filters.location;
  
      return matchesSearch && matchesCompany && matchesIndustry && matchesLocation;
    });
  
    setFilteredContacts(filtered);
  }, [searchTerm, filters, contacts]);
  

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredContacts(
      contacts.filter((c) =>
        `${c.name} ${c.email} ${c.phone} ${c.company} ${c.location || ""}`
          .toLowerCase()
          .includes(term)
      )
    );
  };

  const handleSelect = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleAssignClick = () => {
    navigate("/design-sequence", {
      state: { contactIds: selectedContacts },
    });
  };

  const handleCallSelected = () => {
    alert("📞 Call trigger for selected contacts (stub for now)");
    // TODO: Implement Twilio mass call logic
  };

  const handleEmailSelected = () => {
    alert("📨 Email trigger for selected contacts (stub for now)");
    // TODO: Implement email logic (e.g., SendGrid/Nodemailer)
  };

  return (
    <SubPageLayout>
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        📞 Contacts Centre
      </Typography>

      {/* Search + Filter Controls */}
<Paper sx={{ p: 2, mb: 2, display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
  <TextField
    placeholder="Search name, phone, email..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    size="small"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    sx={{ minWidth: 240 }}
  />

  <Select
    size="small"
    value={filters.company}
    onChange={(e) => setFilters({ ...filters, company: e.target.value })}
    displayEmpty
    sx={{ minWidth: 160 }}
  >
    <MenuItem value="">All Companies</MenuItem>
    <MenuItem value="Globex Corp">Globex Corp</MenuItem>
    <MenuItem value="Initech">Initech</MenuItem>
    <MenuItem value="Umbrella Inc">Umbrella Inc</MenuItem>
    <MenuItem value="Wayne Enterprises">Wayne Enterprises</MenuItem>
  </Select>

  <Select
    size="small"
    value={filters.industry}
    onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
    displayEmpty
    sx={{ minWidth: 160 }}
  >
    <MenuItem value="">All Industries</MenuItem>
    <MenuItem value="Software">Software</MenuItem>
    <MenuItem value="Finance">Finance</MenuItem>
    <MenuItem value="Healthcare">Healthcare</MenuItem>
    <MenuItem value="Logistics">Logistics</MenuItem>
  </Select>

  <Select
    size="small"
    value={filters.location}
    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
    displayEmpty
    sx={{ minWidth: 160 }}
  >
    <MenuItem value="">All Locations</MenuItem>
    <MenuItem value="Toronto">Toronto</MenuItem>
    <MenuItem value="New York">New York</MenuItem>
    <MenuItem value="Vancouver">Vancouver</MenuItem>
    <MenuItem value="Gotham">Gotham</MenuItem>
  </Select>
</Paper>


      {/* Selection Summary and Action Bar */}
      {filteredContacts.length > 0 && (
        <Paper sx={{ p: 2, mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle2">
            Showing {filteredContacts.length} contact{filteredContacts.length !== 1 && "s"} ·{" "}
            {selectedContacts.length} selected
          </Typography>

          {selectedContacts.length > 0 && (
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" onClick={handleCallSelected}>
                Call Selected
              </Button>
              <Button variant="outlined" onClick={handleEmailSelected}>
                Email Selected
              </Button>
              <Select
                displayEmpty
                value={selectedSequence}
                onChange={(e) => setSelectedSequence(e.target.value)}
                size="small"
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="">Choose Sequence</MenuItem>
                <MenuItem value="cold">Cold Outreach - 5 Step</MenuItem>
              </Select>
              <Button
                variant="contained"
                disabled={!selectedSequence}
                onClick={handleAssignClick}
              >
                Assign to Sequence
              </Button>
            </Box>
          )}
        </Paper>
      )}

      {/* Contacts Table */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>
                  <Checkbox
                    checked={selectedContacts.includes(contact._id)}
                    onChange={() => handleSelect(contact._id)}
                  />
                </TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.company || "—"}</TableCell>
                <TableCell>
                  <TextField size="small" placeholder="Add note" />
                </TableCell>
                <TableCell>
                  <Button size="small" variant="contained">
                    DIAL
                  </Button>{" "}
                  <Button size="small" variant="outlined">
                    EMAIL
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
    </SubPageLayout>
  );
};

export default ContactsCentre;
