import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const stepOptions = [
  { label: "Email", value: "email" },
  { label: "Call", value: "call" },
  { label: "LinkedIn", value: "linkedin" },
];

const DesignSequence = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contactIds } = location.state || { contactIds: [] };

  const [steps, setSteps] = useState([{ stepType: "email" }]);
  const [loading, setLoading] = useState(false);

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index].stepType = value;
    setSteps(updated);
  };

  const handleAddStep = () => {
    setSteps([...steps, { stepType: "email" }]);
  };

  const handleRemoveStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const handleSaveSequence = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/assign-sequence", {
        contactIds,
        sequenceSteps: steps,
      });

      if (response.data.success) {
        alert("✅ Sequence assigned to contacts!");
        navigate("/contacts-centre");
      } else {
        alert("❌ Failed to assign sequence.");
      }
    } catch (err) {
      console.error("Error saving sequence:", err);
      alert("❌ Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        🎯 Design Sequence
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Assigning sequence to {contactIds.length} contact
        {contactIds.length !== 1 && "s"}
      </Typography>

      <Paper sx={{ p: 3, mt: 2 }}>
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
          >
            <TextField
              select
              label={`Step ${index + 1}`}
              value={step.stepType}
              onChange={(e) => handleStepChange(index, e.target.value)}
              sx={{ width: 240 }}
            >
              {stepOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <IconButton onClick={() => handleRemoveStep(index)} disabled={steps.length === 1}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}

        <Button
          startIcon={<AddIcon />}
          onClick={handleAddStep}
          sx={{ mt: 1 }}
        >
          Add Step
        </Button>
      </Paper>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        disabled={loading || contactIds.length === 0 || steps.length === 0}
        onClick={handleSaveSequence}
      >
        {loading ? "Saving..." : "Save and Assign"}
      </Button>
    </Box>
  );
};

export default DesignSequence;
