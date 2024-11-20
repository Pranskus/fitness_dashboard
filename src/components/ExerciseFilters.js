import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

function ExerciseFilters() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Muscle Group</InputLabel>
        <Select label="Muscle Group">
          <MenuItem value="chest">Chest</MenuItem>
          <MenuItem value="back">Back</MenuItem>
          <MenuItem value="arms">Arms</MenuItem>
          <MenuItem value="legs">Legs</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Equipment</InputLabel>
        <Select label="Equipment">
          <MenuItem value="barbell">Barbell</MenuItem>
          <MenuItem value="dumbbell">Dumbbell</MenuItem>
          <MenuItem value="bodyweight">Bodyweight</MenuItem>
          <MenuItem value="machine">Machine</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ExerciseFilters;
