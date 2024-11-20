import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { getExercises } from "../services/api";

function ExerciseSearch({ setExercises }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const data = await getExercises({ name: searchTerm });
      setExercises(data);
    } catch (error) {
      console.error("Error searching exercises:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        fullWidth
        label="Search exercises"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default ExerciseSearch;
