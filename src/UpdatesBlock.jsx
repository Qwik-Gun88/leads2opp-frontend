import React from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

const UpdatesBlock = () => {
  const updates = [
    { icon: <TaskAltIcon color="success" />, text: 'Follow up with Alice (Product Feedback)' },
    { icon: <EmailIcon color="primary" />, text: 'Email summary sent to Globex Corp.' },
    { icon: <TaskAltIcon color="warning" />, text: 'Prepare call script for Friday outreach' },
    { icon: <InfoIcon color="action" />, text: 'New lead from LinkedIn engagement' },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        p: 3,
        minHeight: 200,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>🔔 Updates Panel</Typography>
      <List>
        {updates.map((update, index) => (
          <React.Fragment key={index}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>{update.icon}</ListItemIcon>
              <ListItemText primary={update.text} />
            </ListItem>
            {index < updates.length - 1 && <Divider sx={{ my: 1 }} />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default UpdatesBlock;
