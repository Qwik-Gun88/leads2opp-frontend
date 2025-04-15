import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import SubPageLayout from './SubPageLayout';

const AnalyticsReporting = () => {
  const theme = useTheme();

  return (
    <SubPageLayout>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>📊 Analytics & Reporting</Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneInTalkIcon color="primary" />
          <Typography variant="h6">Call Activity</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          See how many calls were placed, completed, or resulted in follow-up.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MailOutlineIcon color="secondary" />
          <Typography variant="h6">Email Engagement</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Track email opens, replies, and click-throughs.
        </Typography>
      </Paper>
{/* force-save */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: theme.palette.background.paper }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TimelineIcon color="success" />
          <Typography variant="h6">Buyer Intent & Trends</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Analyze notes and activity to uncover key interest signals.
        </Typography>
      </Paper>
    </Container>
    </SubPageLayout>
  );
};

export default AnalyticsReporting;
