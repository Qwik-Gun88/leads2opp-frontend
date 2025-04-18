import Homepage from './Homepage';
import React from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import ContactsCentre from './ContactsCentre';
import ContactsManager from './ContactsManager';
import AnalyticsReporting from './AnalyticsReporting';
import { Box, Typography } from '@mui/material';
import DesignSequence from './DesignSequence';

const Placeholder = ({ title }) => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>{title}</Typography>
    <Typography variant="body1">This page is under construction. More coming soon!</Typography>
  </Box>
);

const InnerApp = () => {
  const navigate = useNavigate();

  return (
    <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/contacts-centre" element={<ContactsCentre />} />
  <Route path="/analytics-reporting" element={<AnalyticsReporting />} />
  <Route path="/contacts-manager" element={<ContactsManager />} />
  <Route path="/design-sequence" element={<DesignSequence />} />
  <Route path="/app" element={<DashboardLayout />} />
  </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter basename="/">
    <InnerApp />
  </BrowserRouter>  
  );
}
